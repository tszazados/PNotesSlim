<?php
/**
 * Created by PhpStorm.
 * User: szazadost
 * Date: 05/03/2018
 * Time: 17:08
 */

class MyTidy
{
  use common;
  private $htmlOriginal = NULL;
  private $htmlOutput   = NULL;
  
  const  indentChar = " ";
  const  indentSize = 4;
  
  /**
   * Removing indentation from source, trimming lines, removing empty lines
   */
  private function unIndent () : void
  {
    $src = $this->getHtmlOutput ();
    $src = str_replace ( [  "/r" , "/n" , "<" , ">" ] , [ "" , "" , "\n<" , ">\n" ] , $src );
    $src = explode ( "\n" , $src );
    $res = array_filter ( $src , function ( $v , $k )
    {
      return trim ( $v ) !== "" ;
    } , ARRAY_FILTER_USE_BOTH );
    $this->setHtmlOutput ( implode ( "\n" , $res ) );
  }
  
  /**
   * @return null
   */
  public function __invoke ()
  {
    $this->getHtmlOutput () === NULL ? $this -> indentCore () : static:: nop();
    return $this->getHtmlOutput ();
  }
  
  private function indentCore ()
  {
      $this->setHtmlOutput ( $this->getHtmlOriginal () );
      $this->prepare();
      $backupScriptData = $this->backupAndRemoveTags ( "<script" , "</script>" );
      $backupQuotedData = $this->backupAndRemoveQuotedTextInTags ();
      $this->unIndent ();
      $this->indentHtml ();
      $this->restoreTags ( $backupScriptData  , "<" , "/>");
      $this->restoreTags ( $backupQuotedData , "[" , "/]");
  }
  
  public function loadFromString ( $html )
  {
    $this->setHtmlOriginal ( $html );
  }
  
  /**You can define html source at construct ( optional )
   * MyTidy constructor.
   *
   * @param null $html
   */
  public function __construct ( $html = NULL )
  {
    $html === NULL ? self::nop () : $this->loadFromString ( $html );
  }
  
  /**
   * @return null
   */
  private function getHtmlOriginal ()
  {
    return $this->htmlOriginal;
  }
  
  /**
   * @param null $htmlOriginal
   */
  private function setHtmlOriginal ( $htmlOriginal ) : void
  {
    $this->htmlOriginal = $htmlOriginal;
  }
  
  /**
   *
   */
  private function backupAndRemoveQuotedTextInTags ()
  {
    static $tagOpener = "[";
    static $tagCloser = "/]";
    $html                = &$this->getHtmlOutput_pointer ();
    $inQuotes            = $inTag = $inAph = FALSE;
    $collectorArray      = [];
    $collectorArrayIndex = 0;
    for ( $htmlLenlen = mb_strlen ( $html ) , $i = 0 ; $i < $htmlLenlen ; $i++ )
    {
      $char    = mb_substr ( $html , $i , 1 );
      $delayed = FALSE;
      $target  = &$collectorArray[ $collectorArrayIndex ];
      SWITCH ( TRUE )
      {
        case $inTag && ! $inQuotes && ! $inAph && $char === ">":         //in tag and tag closer char
          $inQuotes = $inAph = $inTag = FALSE;
          continue 2;
        case ! $inTag && $char === "<":                                 //not in tag and tag opener char
          $inTag = TRUE;
          continue 2;
        case $inTag && ! $inAph && ! $inQuotes && $char === "\"":    //in tag but not in quotes and "
          $inQuotes = TRUE;
        break;
        case $inTag && ! $inAph && ! $inQuotes && $char === "'":        //in tag but not in quotes and "
          $inAph = TRUE;
        break;
        case  $inTag && $inQuotes && $char === "\"":                    //in tag and in quotes
          $inQuotes = FALSE;
          $delayed  = TRUE;
        break;
        case  $inTag && $inAph && $char === "'":                        //in tag and in quotes
          $inAph   = FALSE;
          $delayed = TRUE;
        break;
      }
      $target = $target ?? "";
      $inQuotes || $inAph || $delayed ? $target .= $char : self::nop ();
      $collectorArrayIndex += +$delayed;
    }
    $collectorArray = array_unique ( $collectorArray );
    return $this->replaceCodeParts ( $collectorArray , $tagOpener, $tagCloser );
  }
  
  /**Replacing specific code parts to their md5 hash tag
   * @param $codeParts
   *
   * @return mixed
   */
  private function replaceCodeParts ( array $codeParts , string $openStr, string $closeStr ) : array
  {
    $html = &$this->getHtmlOutput_pointer ();
    foreach ( $codeParts as $value )
    {
      $hash                = md5 ( $value );
      $newScripts[ $hash ] = $value;
      $html                = str_replace ( $value , "{$openStr}{$hash}{$closeStr}" , $html );
    }
    return $newScripts ?? [];
  }
  
  /**Removes strings between $oStr and $cStr, and substituting them with their md5 value in <../> signs
   *
   * @param        $html
   * @param string $oStr
   * @param string $cStr
   */
  private function backupAndRemoveTags ( $oStr = "<script" , $cStr = "</script>" ) : array
  {
    static $tagOpener = "<";
    static $tagCloser = "/>";
    $html       = &$this->getHtmlOutput_pointer ();
    $ppos       = 0;
    $cStrLength = mb_strlen ( $cStr );
    $scripts    = $newScripts = [];
    while ( ( ( $scriptOpenPos = mb_stripos ( $html , $oStr , $ppos ) ) !== FALSE ) &&
            ( ( $scriptClosePos = mb_stripos ( $html , $cStr , $scriptOpenPos + mb_strlen ( $oStr ) ) ) !== FALSE ) )
    {
      $scripts[] = mb_substr ( $html , $scriptOpenPos , $scriptClosePos - $scriptOpenPos + $cStrLength );
      $ppos      = $scriptClosePos + mb_strlen ( $cStr );
    }
    $scripts = array_unique ( $scripts );
    return $this->replaceCodeParts ( $scripts , $tagOpener, $tagCloser);
  }
  
  /**
   * @return null
   */
  private function getHtmlOutput ()
  {
    return $this->htmlOutput;
  }
  
  private function &getHtmlOutput_pointer ()
  {
    return $this->htmlOutput;
  }
  
  
  /**
   * @param null $htmlOutput
   */
  public function setHtmlOutput ( string $htmlOutput ) : void
  {
    $this->htmlOutput = $htmlOutput;
  }
  
  /**
   *  Indenting unindented HTML lines
   */
  private function indentHtml ()
  {
    $source = &$this->getHtmlOutput_pointer ();
    $source = explode ( "\n" , $source );
    $level  = 0;
    foreach ( $source as &$line )
    {
      $signExistsOpener        = strpos ( $line , "<" );         // opener sign
      $signExistsInplaceCloser = strpos ( $line , "/>" );        // inplace closer
      $signExistsCloser        = strpos ( $line , "</" );        // closer tag
      $both                    = $signExistsOpener !== FALSE && $signExistsInplaceCloser !== FALSE && $signExistsCloser === FALSE;
      $opener                  = $signExistsOpener !== FALSE && $signExistsInplaceCloser === FALSE && $signExistsCloser === FALSE;
      $closer                  = $signExistsInplaceCloser === FALSE && $signExistsCloser !== FALSE;
      $levelModifier           = 0;
      switch ( TRUE )
      {
        case strpos ( $line , "<!" ) !== FALSE:   //comment tag = no indent
        break;
        case  $both :                             //has opener and inplace closer and no closer tag
        break;
        case $opener :                            //has opener and no inplace or normal closer tag
          $levelModifier = -1;
          $level++;
        break;
        case $closer :                            //no opener, no inplace closer but has normal closer
          $level--;
        break;
        default:                                  //no opener no inplace closer, no normal closer
        break;
      }
      $line = ( str_repeat ( self::indentChar , self::indentSize * ( $level + $levelModifier ) ) ) . $line;
    }
    $source = implode ( "\n" , $source );
    
  }
  
  /**restoring HTML source => replacing back script Tags..
   *
   * @param $backupData
   */
  private function restoreTags ( $backupData, $openSign, $closeSign )
  {
    $source = &$this->getHtmlOutput_pointer ();
    array_walk ( $backupData , function ( $value , $key ) use ( $closeSign , $openSign , &$source )
    {
      $source = str_replace ( "{$openSign}{$key}{$closeSign}" , $value , $source );
    } , ARRAY_FILTER_USE_BOTH );
  }
  
  /**
   * Converting tabs to spaces, removing \r, and regexping \n[ ]+< to \n<]
   */
  private function prepare ()
  {
    $src = $this->getHtmlOutput ();
    $src = preg_replace("/[\n][ ]+[<]/", "\n<", str_replace ( [ "\r" , chr ( 9 )] , [ "", " "] , $src));
    $this->setHtmlOutput ( $src   );
  }
  
}