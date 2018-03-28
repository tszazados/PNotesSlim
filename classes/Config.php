<?php
/**
 * Created by PhpStorm.
 * User: szazadost
 * Date: 21/03/2018
 * Time: 11:26
 */

class Config
{
  
  use common;
  
  private $configArray;
  private $configFile;
  private $configLoaded = FALSE;
  
  public function __construct ( ?string $configFile = NULL )
  {
    $this->loadConfigFile ( $configFile );
    return $this;
  }
  
  /**
   * Loading ini based config file - trying to convert boolean values to true boolean values
   *
   * @param null|string $cFile
   */
  public function loadConfigFile ( ?string $cFile )
  {
    if ( file_exists ( $cFile ) && is_readable ( $cFile ) && ( FALSE !== $content = file_get_contents ( $cFile ) ) )
    {
      $trueSubstituter   = Str:: getrandom_variable ();
      $falseSubstituter  = Str:: getrandom_variable ();
      $content           = Str::str_ireplace_whole_word ( "true" , $trueSubstituter , $content );
      $content           = Str::str_ireplace_whole_word ( "false" , $falseSubstituter , $content );
      $this->configArray = parse_ini_string ( $content );
      array_walk ( $this->configArray , function ( &$val , $key ) use ( $trueSubstituter , $falseSubstituter )
      {
        $val = $val === $trueSubstituter ? TRUE : $val;
        $val = $val === $falseSubstituter ? FALSE : $val;
      } , ARRAY_FILTER_USE_BOTH
      );
      if ( $this->configArray !== FALSE )
      {
        $this->setConfigLoaded ( TRUE );
        $this->setConfigFile ( $cFile );
        $this->configArray[ "selfInstance" ] = &$this;
        return;
      }
      die( "FATAL ERROR: Config cannot be parsed." );
    }
  }
  
  public function getConfigArray () : array
  {
    if ( $this->isConfigLoaded () )
    {
      return $this->configArray;
    }
    die( "FATAL ERROR: Config utenms do not exist." );
  }
  
  public function __invoke ( $configItem )
  {
    return $this->$configItem;
  }
  
  public function __get ( string $configItem )
  {
    if ( $this->isConfigLoaded () && array_key_exists ( $configItem , $this->configArray ) )
    {
      return $this->configArray[ "$configItem" ];
    }
    die( "FATAL ERROR: $configItem does not exist." );
  }
  
  /**
   * @return bool
   */
  public function isConfigLoaded () : bool
  {
    return $this->configLoaded;
  }
  
  /**
   * @param bool $configLoaded
   */
  private function setConfigLoaded ( bool $configLoaded ) : void
  {
    $this->configLoaded = $configLoaded;
  }
  
  /**
   * @return mixed
   */
  private function getConfigFile () : mixed
  {
    return $this->configFile;
  }
  
  /**
   * @param mixed $configFile
   */
  private function setConfigFile ( $configFile ) : void
  {
    $this->configFile = $configFile;
  }
  
  
}