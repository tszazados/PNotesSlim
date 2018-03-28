<?php #UTF-8 (Б)  @formatter:on    |  !tab_size : [ 2 ]  !tab_style : [ using SPACES ]  !new_line=LF (\n)
/* mod */
/*    $a &= $b       $a = $a & $b     BitwiĐĐ And
      $a |= $b      $a = $a | $b      Bitwise Or
      $a ^= $b      $a = $a ^ $b      Bitwise Xor
      $a <<= $b     $a = $a << $b     Left shift
      $a >>= $b     $a = $a >> $b     Right shift

      Arithmetic Operators
      +$a	Identity	Conversion of $a to int or float as appropriate.
      -$a	Negation	Opposite of $a.
      $a + $b	Addition	Sum of $a and $b.
      $a - $b	Subtraction	Differe♠nce of $a and $b.
      $a * $b	Multiplication	Product of $a and $b.
      $a / $b	Division	Quotient of $a and $b.
      $a % $b	Modulus	Remainder of $a divided by $b.
      $a ** $b	Exponentiation	Result of raising $a to the $b'th power. Introduced in PHP 5.6.


      function hello() {                           "Hello"
         yield "Hello";                            " "
         yield " ";                                "World!"
         yield "World!";                           "Goodbye"
                                                   " "
         yield from goodbye();                     "Moon!"
      }

      function goodbye() {
         yield "Goodbye";
         yield " ";
         yield "Moon!";
      }

      $gen = hello();
      foreach ($gen as $value) {
         echo $value;
      }


      */


/**
 *   Special String & Array functions
 *
 *
 *
 *
 */
class Str
{
  
  const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a fringilla libero, a luctus ipsum. Nullam tincidunt lobortis tellus eu porttitor. Donec id lorem sed diam eleifend pharetra eu sed mi. Ut nec lectus aliquam, feugiat odio non, elementum turpis. Aenean velit velit, congue eget nulla non, scelerisque tincidunt sapien. Duis rhoncus ut velit in pharetra. Nulla facilisi.<br><br>Sed consequat ligula eu ante scelerisque, eget vehicula justo volutpat. Curabitur lacinia fermentum nisl, ac convallis mi tristique nec. Maecenas sed facilisis purus. Ut ac orci sed odio tristique venenatis. Donec ornare, est vitae interdum lacinia, odio nulla porta dui, in cursus tellus odio nec elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque malesuada mi urna, vitae luctus ex gravida ut. In ut nisl dictum, dapibus ipsum et, tincidunt leo.<br><br>Aenean dignissim lobortis fringilla. Curabitur vitae lacus et elit pulvinar facilisis non ut ex. Cras est nunc, volutpat sed vehicula ut, lacinia id nulla. In ut magna molestie, vulputate nisi tempor, facilisis ex. Cras ac suscipit quam. Pellentesque vehicula felis eget lorem lobortis laoreet. Phasellus convallis, eros vel ultricies aliquet, risus velit euismod tellus, eu volutpat purus mauris id orci.<br><br>Cras ut turpis sed elit aliquam ullamcorper. Praesent ac purus nec turpis suscipit laoreet. Sed dignissim ex id lorem vulputate lobortis dignissim id mi. Vivamus laoreet, tortor ac venenatis vulputate, lacus metus aliquet velit, sed ullamcorper arcu orci id lectus. Nullam maximus mi vitae ligula pellentesque, et mollis justo auctor. Aliquam congue magna purus, non vestibulum tellus molestie sed. Vestibulum lacinia ac sem at vehicula. Pellentesque sit amet dui eu massa tempor facilisis eu et nisl. Morbi interdum quam nec enim convallis, et sollicitudin urna laoreet. Ut maximus lorem sed magna dignissim, sed cursus magna auctor. Nullam ut ante enim. Proin in enim id metus varius dictum. Proin nec lobortis odio.<br><br>Duis at nisl vel nulla posuere faucibus. Nunc tincidunt dapibus porta. Fusce urna turpis, placerat vel convallis ac, feugiat sed leo. Phasellus massa lacus, dignissim at ex non, vulputate placerat erat. Quisque ut lectus justo. Vestibulum vitae vehicula ipsum. Proin dictum mauris vitae nisl dignissim pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;";
  
  private static $dezinomed_steam1 = "ⵚMEᖉ⊥Z∩IObᗄᴤDᖶ⅁Hᘃʞ⅂⅄X⊂⋀ᗷNʍdʍөʁʇz∩!obɐƨqʈɓµɾʞꞁʎxⅽ٨puw68L9SᔭƐƧƖ0?¡";
  private static $convertable_abcd = "QWERTZUIOPASDFGHJKLYXCVBNMqwertzuiopasdfghjklyxcvbnm9876543210?!";
  private static $dezinomed_steam2 = "Q̶W̶E̶R̶T̶Z̶U̶I̶O̶P̶A̶S̶D̶F̶G̶H̶J̶K̶L̶Y̶X̶C̶V̶B̶N̶M̶q̶w̶e̶r̶t̶z̶u̶i̶o̶p̶a̶s̶d̶f̶g̶h̶j̶k̶l̶y̶x̶c̶v̶b̶n̶m̶9̶8̶7̶6̶5̶4̶3̶2̶1̶0̶?̶!̶?!";
  
  private static $inited   = FALSE;
  private static $synonims = [
    "replace_until" => "reu" ,
    "reotl"         => "str_replace_onlyifthelast" ,
  ];
  
  
  private function __construct ()
  {
  }
  
  public static function demon1ze_str ( $strng )
  {
    $to   = self:: mb_str_split ( self::$dezinomed_steam1 );
    $from = self:: mb_str_split ( self::$convertable_abcd );
    $strng  = self:: mb_str_split ( $strng );
    for ( $newstr = "" , $i = 0 , $tmpcnt = count ( $strng ) ; $i < $tmpcnt ; $i++ )
    {
      $newstr = ( $pos = array_search ( $strng [ $i ] , $from ) ) === FALSE ? $newstr.$strng [ $i ] : $newstr.$to[ $pos ];
    }
    return $newstr;
  }
  
  public static function demon2ze_str ( $strng )
  {
    $to   = self:: mb_str_split ( self::$dezinomed_steam2 );
    $from = self:: mb_str_split ( self::$convertable_abcd );
    $strng  = self:: mb_str_split ( $strng );
    for ( $newstr = "" , $i = 0 , $tmpcnt = count ( $strng ) ; $i < $tmpcnt ; $i++ )
    {
      $newstr = ( $pos = array_search ( $strng [ $i ] , $from ) ) === FALSE ? $newstr.$strng [ $i ] : $newstr.$to[ $pos ];
    }
    return $newstr;
  }
  
  
  public static function mb_str_split ( $string , $split_length = 1 )
  {
    if ( $split_length == 1 )
    {
      return preg_split ( "//u" , $string , -1 , PREG_SPLIT_NO_EMPTY );
    }
    elseif ( $split_length > 1 )
    {
      $return_value  = [];
      $string_length = mb_strlen ( $string , "UTF-8" );
      for ( $i = 0 ; $i < $string_length ; $i += $split_length )
      {
        $return_value[] = mb_substr ( $string , $i , $split_length , "UTF-8" );
      }
      return $return_value;
    }
    else
    {
      return FALSE;
    }
  }
  
  
  public static function __callStatic ( $method , $args )
  {
    if ( isset( self:: $synonims ) === TRUE && array_key_exists ( $method , self:: $synonims ) === TRUE )
    {
      extract ( $args );
      $synonim_method = self:: $synonims [ $method ];
      return self::$synonim_method ( ake ( $args , "0" ) === TRUE ? $args[ 0 ] : NULL ,
                                     ake ( $args , "1" ) === TRUE ? $args[ 1 ] : NULL ,
                                     ake ( $args , "2" ) === TRUE ? $args[ 2 ] : NULL ,
                                     ake ( $args , "3" ) === TRUE ? $args[ 3 ] : NULL ,
                                     ake ( $args , "4" ) === TRUE ? $args[ 4 ] : NULL ,
                                     ake ( $args , "5" ) === TRUE ? $args[ 5 ] : NULL ,
                                     ake ( $args , "6" ) === TRUE ? $args[ 6 ] : NULL );
    }
    print ( $errmsg = "Unknown method ".$method." in ".__CLASS__ );
    THROW NEW Exception( $errmsg );
  }
  
  
  PRIVATE STATIC FUNCTION init ()
  {
    if ( self::$inited !== TRUE )
    {
      /* ... some init */
    }
    self:: $inited = TRUE;
  }
  
  
  /**
   * Removes XML / HTML commented lines with regexp <!-- -->
   * self :: remove_xml_comments_()
   *
   * @param mixed $xml
   *
   * @return
   */
  public static function remove_xml_comments_ ( &$xml )
  {
    is_array ( $xml ) === TRUE ? $xml = implode ( ( $separator = self::randomstring () ) , $xml ) : nop ();
    $xml = preg_replace ( '/<!--(.*)-->/Uis' , '' , $xml );
    isset( $separator ) === TRUE ? $xml = explode ( $separator , $xml ) : nop ();
  }
  
  
  public static function remove_xml_comments ( $xml )
  {
    self::remove_xml_comments_ ( $xml );
    return $xml;
  }
  
  
  public static function remove_block_comments ( $strng )
  {
    self::remove_block_comments_ ( $strng );
    return $strng;
  }
  
  
  public static function remove_block_comments_ ( &$strng )
  {
    $strng = preg_replace ( '/\/\*.*?\*\//s' , '' , $strng );             # FULLPATTERN : '/\/\*.*?\*\/|\/\/.*?\n/s'
    return $strng;
  }
  
  
  /**
   *  Generates random string with the desired length
   *
   * @param int $length
   * @param     string $$rep alphabet
   *
   * @return string
   */
  
  /**
   * self :: randomstring()
   *
   * @param integer $length
   * @param string  $rep
   * @param integer $i
   *
   * @return
   */
  public static function randomstring ( int $length = 16 , string $rep = "0123456789qwertzuiopasdfghjklyxcvbnm" , int $i = 0 ) : string
  {
    return $i >= $length ? "" : $rep [ random_int ( ( $i === 0 && strpos ( $rep , "0123456789" ) ? 10 : 0 ) , strlen ( $rep ) - 1 ) ].self::randomstring ( $length , $rep , $i + 1 );
  }
  
  public static function mb_randomstring ( int $length = 16 , string $rep = "0123456789qwertzuiopasdfghjklyxcvbnm" , int $i = 0 ) : string
  {
    return $i >= $length ? "" : mb_substr ( $rep , random_int ( ( $i === 0 && strpos ( $rep , "0123456789" ) === 0 ? 10 : 0 ) , mb_strlen ( $rep ) - 1 ) , 1 ).self::mb_randomstring ( $length , $rep , $i + 1 );
  }
  
  
  /**
   *    Replace until needle does not exist in haystack anyomore.
   */
  /**
   * self :: reu()
   *
   * @param mixed $mit
   * @param mixed $mire
   * @param mixed $strng
   *
   * @return
   */
  public static function reu ( $mit , $mire , $strng ) : string
  {
    $db  = 0;
    $strng = str_replace ( $mit , $mire , $strng , $db );
    return $db !== 0 ? self:: reu ( $mit , $mire , $strng ) : $strng;
  }
  
  
  public static function reu_ ( $mit , $mire , &$strng )
  {
    $db  = 0;
    $strng = str_replace ( $mit , $mire , $strng , $db );
    $db !== 0 ? self:: reu_ ( $mit , $mire , $strng ) : nop ();
  }
  
  
  /**
   * self :: strln()
   *
   * @param mixed $strng
   *
   * @return
   */
  public static function strln ( &$strng ) : int
  {
    $strng    = $strng ?? "";
    $retval = is_string ( $strng ) ? strlen ( $strng ) : 0;
    return ( $retval );
  }//
  
  
  /**
   * self :: mb_strln()
   *
   * @param mixed $strng
   *
   * @return
   */
  public static function mb_strln ( &$strng ) : int
  {
    $strng    = $strng ?? "";
    $retval = is_string ( $strng ) ? mb_strlen ( $strng ) : 0;
    
    return ( $retval );
  }//
  
  
  /**
   * self :: re()
   *
   * @param mixed $mit
   * @param mixed $mire
   * @param mixed $strng
   *
   * @return
   */
  public static function re ( $mit , $mire , $strng , &$count = NULL )
  {
    return ( str_replace ( $mit , $mire , $strng , $count ) );
  }
  
  public static function asint ( $string ) : int
  {
    return +is_scalar ( $string ) + +is_numeric ( $string ) + +ctype_digit ( (string) ( $string ) ) === 3 ? (int) $string + 0 : 0;
  }
  
  public static function asfloat ( $string ) : float
  {
    return +is_scalar ( $string ) + +is_numeric ( $string ) + +( substr_count ( $string , "." ) === 1 ) === 3 ? (float) $string + 0 : 0;
  }
  
  public static function asnum ( $string )
  {
    return $string;
    return strpos ( $string , "." ) === FALSE ? self:: asnum ( $string ) : self:: asfloat ( $string );
  }
  
  
  public static function re_ ( $mit , $mire , &$strng , &$count = NULL )
  {
    $strng = str_replace ( $mit , $mire , $strng , $count );
  }
  
  
  /**
   * self :: add2array_()
   *
   * @param mixed $array
   * @param mixed $element
   *
   * @return
   */
  public static function add2array_ ( &$array , $element ) : bool
  {
    self::init ();
    if ( is_array ( $array ) === TRUE )
    {
      if ( $element !== NULL )
      {
        $array[] = $element;
      }
      
      return TRUE;
    }
    
    return FALSE;
  }//
  
  
  /**
   * self :: swap_vars()
   *
   * @param mixed $a
   * @param mixed $b
   *
   * @return
   */
  public static function swap_vars ( &$a , &$b )
  {
    $c = $a;
    $d = $b;
    $b = $c;
    $a = $d;
    //list( $a , $b ) = array ( $b , $a );
  }
  
  
  /**
   * self :: add2array()
   *
   * @param mixed $array
   * @param mixed $element
   *
   * @return
   */
  public static function add2array ( $array , $element )
  {
    self::init ();
    
    /*     print getxpi($element);
          print getxpi($array);
          print ("<br>");
      
       */
    //is_array($element) === TRUE && $array !== NULL ? self::swap_vars ( $element , $array ) : nop() ;
    
    if ( is_array ( $array ) === TRUE )
    {
      if ( $element !== NULL )
      {
        $array[] = $element;
      }
      
      return $array;
    }
    
    return FALSE;
  }//
  
  /**
   *    FINDS $string WITH STRPOS IN $array ELEMENTS
   *    return: array with elements matched
   */
  
  /**
   * self :: array_search_part()
   *
   * @param mixed $searchword
   * @param mixed $array
   *
   * @return
   */
  public static function array_search_part ( $searchword , $array )
  {
    self::init ();
    $retval = array_values ( array_filter ( $array ,
      function ( $arr_elem ) use ( $searchword )
      {
        return strpos ( $arr_elem , $searchword ) !== FALSE;
      } ) );
    
    return ( $retval );
  }
  
  
  /**
   * self :: array_search_partial()
   *
   * @param mixed $searchword
   * @param mixed $array
   *
   * @return
   */
  public static function array_search_partial ( string $searchword , array $array )
  {
    $sstr        = "";
    $resultarray = [];
    $retval      = array_keys ( array_filter ( $array ,
      function ( $arr_elem ) use ( $searchword )
      {
        return strpos ( $arr_elem , $searchword ) !== FALSE;
      } ) );
    foreach ( $retval as $key => $value )
    {
      $sstr .= $value.",";
    }
    $resultarray = $sstr === NULL ? [] : explode ( "," , self::str_replace_onlyifthelast ( "," , "" , $sstr ) );
    
    return empty( $resultarray ) === TRUE ? FALSE : $resultarray;
  }
  
  
  /**
   * self :: array_search_partial_firstindex()
   *
   * @param mixed $searchword
   * @param mixed $array
   *
   * @return
   */
  public static function array_search_partial_firstindex ( string $searchword , array $array )
  {
    self::init ();
    $retval = self::array_search_partial ( $searchword , $array );
    
    return $retval === FALSE ? FALSE : $retval[ 0 ];
  }
  
  
  /**
   * self :: elef()
   *
   * @param mixed $strng
   *
   * @return
   */
  public static function elef ( $strng )
  {
    self::init ();
    
    return $strng;
  }
  
  
  /**
   * self :: array_search_keypart()
   *
   * @param mixed $searchword
   * @param mixed $array
   *
   * @return
   */
  public static function array_search_keypart ( $searchword , $array )
  {
    self::init ();
    $retval = array_keys ( array_filter ( $array , function ( $arr_elem ) use ( $searchword )
    {
      return strpos ( $arr_elem , $searchword ) !== FALSE;
    } ) );
    
    return ( $retval );
  }
  
  
  /**
   * self :: reotf()
   *
   * @param mixed   $search
   * @param mixed   $replace
   * @param mixed   $string
   * @param integer $limit
   *
   * @return
   */
  public static function reotf ( $search , $replace , $string , $limit = 1 )
  {
    $search_len = strlen ( $search );
    for ( $i = 0 ; $i < $limit ; $i++ )
    {
      if ( ( $pos = ( strpos ( $string , $search ) ) ) === FALSE )
      {
        BREAK;
      }
      $string = substr_replace ( $string , $replace , $pos , $search_len );
    }
    
    return $string;
  }
  
  
  
  
  
  
  /*
     *        rePLACE oNLY If tHE lAST (only if on the last position)
     **/
  /**
   * self :: supersmartcrop()
   *
   * @param mixed   $txt
   * @param integer $count
   * @param string  $delimiter
   * @param bool    $colorize
   *
   * @return
   */
  public static function supersmartcrop ( $txt , int $count = 30 , string $delimiter = ".." , $colorize = FALSE ) : string
  {
    $txt = is_array ( $txt ) === TRUE ? self::  reoitl ( ", " , "" , trim ( implode ( ", " , $txt ) ) ) : trim ( $txt );
    $c1  = $colorize !== FALSE ? "<span class=\"{$colorize}\">" : "";
    $c2  = $colorize !== FALSE ? "</span>" : "";
    if ( mb_strlen ( $txt ) > $count + 1 )
    {
      $count  = floor ( $count / 2 );
      $count2 = $count % 2 === 0 ? 0 : 1;
      $count2 += $count;
      
      return trim ( mb_substr ( $txt , 0 , $count2 ) )."{$c1}{$delimiter}{$c2}".trim ( mb_substr ( $txt , mb_strlen ( $txt ) - $count , $count ) );
    }
    
    return $txt;
  }
  
  
  /**
   * self :: strpos_last()
   *
   * @param mixed $s
   * @param mixed $f
   *
   * @return
   */
  public static function strpos_last ( $s , $f ) : bool
  {
    self::init ();
    
    return substr ( $s , -1 * strlen ( $f ) ) === $f ? TRUE : FALSE;
  }//
  
  
  /**
   * self :: str_replace_onlyifthelast()
   *
   * @param mixed $search
   * @param mixed $replace
   * @param mixed $subject
   *
   * @return
   */
  public static function str_replace_onlyifthelast ( string $search , string $replace , string $subject ) : string
  {
    self::init ();
    
    return self::strpos_last ( $subject , $search ) === TRUE ? self::str_replace_last ( $search , $replace , $subject ) : $subject;
  }//
  
  /**
   * @brief   REplace string Only If The Last (at pos end)
   *
   * @param   [in] $from string needle
   * @param   [in] $to string new string
   * @param   [in] $strng string haystack
   *
   * @return string replaced string
   * @details Details
   */
  
  /**
   * self :: reoitl()
   *
   * @param mixed $from
   * @param mixed $to
   * @param mixed $strng
   *
   * @return
   */
  public static function reoitl ( $from , $to , $strng ) : string
  {
    return is_string ( $from ) === FALSE || is_string ( $to ) === FALSE || is_string ( $strng ) === FALSE ? "" : self::str_replace_onlyifthelast ( $from , $to , $strng );
  }
  
  public static function fix_array_ ( &$array )
  {
    IF ( is_array ( $array ) === FALSE )
    {
      RETURN [];
    }
    $NONassoc = FALSE;
    foreach ( $array as $key => $value )
    {
      $value    = trim ( $value );
      $NONassoc = $NONassoc === FALSE && ctype_digit ( (string) $key ) === FALSE ? TRUE : $NONassoc;
      if ( in_array ( $value , [ "" , NULL ] ) === TRUE )
      {
        unset ( $array [ $key ] );
      }
    }
    if ( $NONassoc === TRUE )
    {
      $array = array_values ( $array );
    }
  }
  
  public static function fix_array ( $array )
  {
    IF ( is_array ( $array ) === FALSE )
    {
      RETURN [];
    }
    self:: fix_array_ ( $array );
    return $array;
  }
  
  
  public static function reoitl_ ( $from , $to , &$strng )
  {
    $strng = is_string ( $from ) === FALSE || is_string ( $to ) === FALSE || is_string ( $strng ) === FALSE ? "" : self::str_replace_onlyifthelast ( $from , $to , $strng );
  }//
  
  /**
   * @brief   REplace string Only If The First (at 0 pos)
   *
   * @param   [in] $from string needle
   * @param   [in] $to string replace to
   * @param   [in] $strng haystack
   *
   * @return string replaced string
   * @details Details
   */
  
  /**
   * self :: reoitf()
   *
   * @param mixed $from
   * @param mixed $to
   * @param mixed $strng
   *
   * @return
   */
  public static function reoitf ( $from , $to , $strng )
  {
    return strpos ( $strng , $from ) === 0 ? self:: str_replace_first ( $from , $to , $strng ) : $strng;
  }
  
  
  public static function reoitf_ ( $from , $to , &$strng )
  {
    $strng = strpos ( $strng , $from ) === 0 ? self:: str_replace_first ( $from , $to , $strng ) : $strng;
  }
  
  
  /**
   * @brief   replace first occurence of string in string
   *
   * @param   [in] $search string as needle
   * @param   [in] $replace string as new string
   * @param   [in] $string string as haystack
   * @param   [in] $limit int as if not only the first replace is needed but limited...
   *
   * @return string as the replaced string
   * @details Details
   */
  
  /**
   * self :: str_replace_first()
   *
   * @param mixed   $from
   * @param mixed   $to
   * @param mixed   $strng
   * @param integer $limit
   *
   * @return
   */
  
  public static function str_replace_first_ ( $from , $to , &$strng , $limit = 1 )
  {
    if ( ( $pos = strpos ( $strng , $from ) ) !== FALSE )
    {
      for ( $i = 0 , $search_len = strlen ( $from ) ; $i < $limit ; $i++ )
      {
        $strng = substr_replace ( $strng , $to , $pos , $search_len );
        if ( ( $pos = strpos ( $strng , $from ) ) === FALSE )
        {
          BREAK;
        }
      }
    }
  }
  
  
  public static function str_replace_first ( $from , $to , $strng , $limit = 1 )
  {
    self:: str_replace_first_ ( $from , $to , $strng , $limit );
    return $strng;
  }
  
  public static function ref_ ( $from , $to , &$strng , $limit = 1 )
  {
    self:: str_replace_first_ ( $from , $to , $strng , $limit );
  }
  
  public static function ref ( $from , $to , $strng , $limit = 1 )
  {
    self:: str_replace_first_ ( $from , $to , $strng , $limit );
    return $strng;
  }
  
  public static function rel_ ( $from , $to , &$strng , $limit = 1 )
  {
    self:: str_replace_last_ ( $from , $to , $strng , $limit );
  }
  
  public static function rel ( $from , $to , $strng , $limit = 1 )
  {
    self:: str_replace_last_ ( $from , $to , $strng , $limit );
    return $strng;
  }
  
  
  /**
   * self :: keepbefore_str()
   *
   * @param mixed $strng
   * @param mixed $bigstr
   *
   * @return
   */
  public static function keepbefore_str ( string $strng , string $bigstr ) : string
  {
    self::init ();
    
    return ( $pos1 = strpos ( $bigstr , $strng ) ) !== FALSE ? substr ( $bigstr , 0 , $pos1 ) : $bigstr;
  }//
  
  
  /**
   * self :: keepafter_str()
   *
   * @param mixed $strng
   * @param mixed $bigstr
   *
   * @return
   */
  public static function keepafter_str ( string $strng , string $bigstr ) : string
  {
    self::init ();
    
    return ( $pos1 = strpos ( $bigstr , $strng ) ) !== FALSE ? substr ( $bigstr , $pos1 + strlen ( $strng ) , strlen ( $bigstr ) ) : $bigstr;
  }//
  
  
  /**
   * self :: keepbefore_pos()
   *
   * @param mixed $pos
   * @param mixed $bigstr
   *
   * @return
   */
  public static function keepbefore_pos ( $pos , string $bigstr ) : string
  {
    self::init ();
    $pos--;
    
    return strlen ( $bigstr ) < $pos ? $bigstr : substr ( $bigstr , 0 , $pos + 1 );
  }//
  
  
  /**
   * self :: keepafter_pos()
   *
   * @param mixed $pos
   * @param mixed $bigstr
   *
   * @return
   */
  public static function keepafter_pos ( $pos , string $bigstr ) : string
  {
    self::init ();
    //return substr( $bigstr , $pos, strlen ( $bigstr ) );
    //$pos++;
    return ( $strlenbgstr = strlen ( $bigstr ) ) < $pos ? $bigstr : substr ( $bigstr , $pos , $strlenbgstr );
  }//
  
  
  /**
   * self :: STR_REPLACE_LAST()
   *
   * @param mixed $search
   * @param mixed $replace
   * @param mixed $subject
   *
   * @return
   */
  public static function str_replace_last ( $search , $replace , $subject , $limit = 1 ) : string
  {
    return --$limit === 0 ?
      ( ( $pos = strrpos ( $subject , $search ) ) !== FALSE ? substr_replace ( $subject , $replace , $pos , strlen ( $search ) ) : $subject )
      :
      self::str_replace_last ( $search , $replace , ( ( $pos = strrpos ( $subject , $search ) ) !== FALSE ? substr_replace ( $subject , $replace , $pos , strlen ( $search ) ) : $subject ) , $limit );
  }//
  
  public static function str_replace_last_ ( $search , $replace , &$subject , $limit = 1 )
  {
    $subject = ( ( $pos = strrpos ( $subject , $search ) ) !== FALSE ? substr_replace ( $subject , $replace , $pos , strlen ( $search ) ) : $subject );
    --$limit === 0 ? nop () : self:: str_replace_last_ ( $search , $replace , $subject , $limit );
  }//
  
  
  /**
   * @brief   Brief
   *
   * @param   [in] $s Parameter_Description
   * @param   [in] $f Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: mb_strpos_last()
   *
   * @param mixed $s
   * @param mixed $f
   *
   * @return
   */
  public static function mb_strpos_last ( $s , $f ) : string
  {
    self::init ();
    
    return mb_substr ( $s , -1 * mb_strlen ( $f ) ) === $f ? TRUE : FALSE;
  }//
  
  /**
   * @brief   Brief
   *
   * @param   [in] $number Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: get_next_square()
   *
   * @param mixed $number
   *
   * @return
   */
  public static function get_next_square ( $number )
  {
    if ( is_numeric ( $number ) === TRUE )
    {
      for ( $i = 0 , $sqval = 1 ; $i < 100 ; $i++ , $sqval = $sqval * 2 )
      {
        if ( $number < $sqval )
        {
          return $sqval;
        }
      }
    }
  }//
  
  /**
   * @brief   Brief
   *
   * @param   [in] $numa Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: neg()
   *
   * @param mixed $numa
   *
   * @return
   */
  public static function neg ( $numa )
  {
    $numa   = ( $numaup = strtoupper ( $numa ) ) === "TRUE" || $numaup === "FASE" ? bool ( $numa ) : $numa;
    $retval = ( is_bool ( $numa ) === TRUE ? ! $numa : NULL ) ?? -$numa;
    
    return ( $retval );
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $str1 Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: lazy_string()
   *
   * @param mixed $str1
   *
   * @return
   */
  public static function lazy_string ( $str1 ) : string
  {
    $str1   = preg_replace ( '/[\x00-\x1F\x80-\x9F]/u' , '' , $str1 ); # removes ALL utf9
    $retval = trim ( preg_replace ( '/[\x00-\x1F\x80-\xFF]/' , '' , trim ( preg_replace ( "/[^A-Za-z0-9 ]/" , '' , trim ( self::re ( " " , "" ,
                                                                                                                               trim ( self::re ( [ " " , "\n" , "\r" ,
                                                                                                                                             "	" ] , " " , mb_strtolower ( killhunchars ( trim ( $str1 ) ) ) ) ) ) ) ) ) ) );
    
    return ( $retval );
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $str1 Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: printable_string()
   *
   * @param mixed $str1
   *
   * @return
   */
  public static function printable_string ( $str1 ) : string
  {
    $retval = preg_replace ( '/[^[:print:]]/' , '' , $str1 );
    
    return ( $retval );
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $arr Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: xparrin2html()
   *
   * @param mixed $arr
   *
   * @return
   */
  public static function xparrin2html ( $arr )
  {
    $retvar = is_array ( $arr ) === TRUE ? self::re ( "	" , " " , self::re ( " " , " " , self::re ( "\n" , "<br>\n" , var_dump2 ( $arr ) ) ) ) : "";
    
    return $retvar;
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $arr Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: xparrin2pure()
   *
   * @param mixed $arr
   *
   * @return
   */
  public static function xparrin2pure ( $arr )
  {
    $retvar = is_array ( $arr ) === TRUE ? self::re ( "	" , " " , self::re ( " " , " " , self::re ( "\n" , "\n" , var_dump2 ( $arr ) ) ) ) : "";
    
    return $retvar;
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $arr Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  /**
   * self :: trim_array()
   *
   * @param mixed $arr
   *
   * @return
   */
  public static function trim_array ( $arr )
  {
    self:: trim_array_ ( $arr );
    return $arr;
  }
  
  
  /**
   * self :: trim_array()
   *
   * @param mixed $arr
   *
   * @return
   */
  public static function trim_array_ ( &$arr )
  {
    array_walk ( $arr , function ( &$value )
    {
      $value = trim ( $value );
    } );
  }
  
  public static function trimexplode ( string $separator , string $string ) : array
  {
    return array_map ( "trim" , explode ( $separator , $string ) );
  }
  
  
  public static function ultratrim_array ( &$arr )
  {
    array_walk ( $arr , function ( &$value )
    {
      $value = self:: ultratrim_ ( $value );
    } );
  }
  
  
  /**
   * @brief   Brief
   *
   * @param   [in] $element Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  /**
   * self :: pong()
   *
   * @param mixed $element
   *
   * @return
   */
  public static function pong ( $element )
  {
    return $element;
  }
  
  /**
   *  Compares two string in "lazy way" => only alphanumeric  characters matters
   *
   * @param string $str1
   * @param string $str2
   *
   * @return mixed : -1 = $str1 > $str2, 1 = $str1 < $str2, TRUE === $str1 = $str2
   */
  
  /**
   * self :: lazy_compare()
   *
   * @param mixed $str1
   * @param mixed $str2
   *
   * @return
   */
  public static function lazy_compare ( $str1 , $str2 )
  {
    $retval = ( $space_cake = self::  lazy_string ( $str1 ) <=> self::  lazy_string ( $str2 ) ) === 0 ? TRUE : self::  neg ( $space_cake );
    
    return ( $retval );
  }
  
  /**
   *  Convert numbers to fix width numbers as string. ( 100,5,2  ->  00100.00 )
   *
   * @param string $num
   * @param int    $beforedot
   * @param int    $afterdot
   *
   * @return string
   */
  
  /**
   * self :: stringnumber()
   *
   * @param mixed $num
   * @param mixed $beforedot
   * @param mixed $afterdot
   * @param mixed $current_beforedot
   * @param mixed $current_afterdot
   *
   * @return
   */
  public static function stringnumber ( $num , $beforedot , $afterdot , $current_beforedot = NULL , $current_afterdot = NULL )
  {
    $num      = explode ( "." , $num );
    $num[ 0 ] = str_pad ( $num[ 0 ] , $beforedot , "0" , STR_PAD_LEFT );
    $num[ 1 ] = str_pad ( $num[ 1 ] , $afterdot , "0" , STR_PAD_RIGHT );
    
    return ( $num[ 0 ].( strlen ( $num[ 1 ] ) > 0 ? ".".$num[ 1 ] : "" ) );
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $date1_begin Parameter_Description
   * @param   [in] $date1_end Parameter_Description
   * @param   [in] $date2_begin Parameter_Description
   * @param   [in] $date2_end Parameter_Description
   * @param   [in] $erintesisbeleszamit Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  /**
   * self :: interval_overlap()
   *
   * @param mixed $date1_begin
   * @param mixed $date1_end
   * @param mixed $date2_begin
   * @param mixed $date2_end
   * @param bool  $erintesisbeleszamit
   *
   * @return
   */
  //    public static function interval_overlap ( $date1_begin , $date1_end , $date2_begin , $date2_end , $erintesisbeleszamit = TRUE )
  //    {
  //      if ( $date1_begin > $date2_begin && swap_vars ( $date1_begin , $date2_begin ) && swap_vars ( $date1_end , $date2_end ) )
  //      {
  //      }
  //      if ( $date1_begin > $date1_end && swap_vars ( $date1_begin , $date1_end ) )
  //      {
  //      }
  //      if ( $date2_begin > $date2_end && swap_vars ( $date2_begin , $date2_end ) )
  //      {
  //      }
  //
  //      return $date2_begin <= $date1_end;
  //    }
  
  /**
   * @brief   Brief
   * @return Return_Description
   * @details Details
   */
  
  
  /**
   * @brief   Brief
   *
   * @param   [in] $date1_begin Parameter_Description
   * @param   [in] $date1_end Parameter_Description
   * @param   [in] $date2_begin Parameter_Description
   * @param   [in] $date2_end Parameter_Description
   * @param   [in] $erintesisbeleszamit Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  /**
   * self :: interval_overlap()
   *
   * @param mixed $date1_begin
   * @param mixed $date1_end
   * @param mixed $date2_begin
   * @param mixed $date2_end
   * @param bool  $erintesisbeleszamit
   *
   * @return
   */
  public static function interval_overlap ( $date1_begin , $date1_end , $date2_begin , $date2_end , $erintesisbeleszamit = TRUE )
  {
    if ( $date1_begin > $date2_begin && swap_vars ( $date1_begin , $date2_begin ) && swap_vars ( $date1_end , $date2_end ) )
    {
    }
    if ( $date1_begin > $date1_end && swap_vars ( $date1_begin , $date1_end ) )
    {
    }
    if ( $date2_begin > $date2_end && swap_vars ( $date2_begin , $date2_end ) )
    {
    }
    
    return $date2_begin <= $date1_end;
  }
  
  /**
   * @brief   Brief
   * @return Return_Description
   * @details Details
   */
  
  
  /**
   * self :: is_wget_request()
   * @return
   */
  public static function is_wget_request ()
  {
    $retval = server ( "SERVER_ADDR" ) === server ( "REMOTE_ADDR" ) && stripos ( server ( "HTTP_USER_AGENT" ) , "wget" ) !== FALSE ? TRUE : FALSE;
    
    return ( $retval );
  }
  
  /**
   * A special function for search in a multidimensional array
   *
   * @param mixed $needle   The searched variable
   * @param array $haystack The array where search
   * @param       bool      strict It is or it isn't a strict search?
   *
   * @return bool
   **/
  
  /**
   * self :: in_array_assoc()
   *
   * @param mixed $needle
   * @param mixed $haystack
   * @param bool  $strict
   *
   * @return
   */
  public static function in_array_assoc ( $needle , array $haystack , bool $strict = FALSE ) : bool
  {
    foreach ( $haystack as $item )
    {
      if ( ( is_array ( $item ) && in_array_assoc ( $needle , $item , $strict ) ) ||
           ( ( $strict === TRUE ? $needle === $item : $needle == $item ) )
      )
      {
        RETURN TRUE;
      }
    }
    
    RETURN FALSE;
  }
  
  /**
   * @brief   Brief
   *
   * @param   [in] $needle Parameter_Description
   * @param   [in] $haystack Parameter_Description
   * @param   [in] $strict Parameter_Description
   * @param   [in] $refvar Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  /**
   * self :: in_arrayl()
   *
   * @param mixed $needle
   * @param mixed $haystack
   * @param bool  $strict
   * @param mixed $refvar
   *
   * @return
   */
  public static function in_arrayl ( $needle , array $haystack , $strict = FALSE , &$refvar = NULL )
  {
    $needle_type = gettype ( $needle );
    $s_needle    = self:: lazy_string ( $needle );
    foreach ( $haystack as $element )
    {
      $s_element = self:: lazy_string ( $element );
      $retval    = $retval = NULL && $needle_type == 'string' && gettype ( $element ) == 'string' && $s_needle == $s_element ? TRUE : NULL;
      $retval    = $retval !== TRUE && $strict === TRUE && $s_needle === $s_element ? TRUE : $retval;
      $retval    = $retval !== TRUE && $s_needle == $s_element ? TRUE : $retval;
      if ( $retval === TRUE )
      {
        $refvar ?? $element;
        
        RETURN TRUE;
      }
    }
    
    RETURN FALSE;
  }
  
  
  /**
   * @brief   Brief
   *
   * @param   [in] $needle Parameter_Description
   * @param   [in] $haystack Parameter_Description
   * @param   [in] $strict Parameter_Description
   * @param   [in] $refvar Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  //  public static function u ltratrim ( $strng )
  //  {
  //    static $dashes = array ( "–" , "—" );
  //    static $spaces = array ( "◘" , "•" , "_" , "▼" , " " );
  //    $strng    = str_replace ( $spaces , " " , $strng );
  //    $strng    = str_replace ( $dashes , "-" , $strng );
  //    $strng    = self :: reu ( "  " , " " , $strng );
  //    $retval = $strng;
  //
  //    return $strng;
  //  }
  
  /**
   * self :: in_arrayi()
   *
   * @param mixed $needle
   * @param mixed $haystack
   * @param bool  $strict
   * @param mixed $refvar
   *
   * @return
   */
  public static function in_arrayi ( $needle , array $haystack , $strict = FALSE , &$refvar = NULL )
  {
    $needle      = mb_strtolower ( trim ( $needle ) );
    $haystack    = mb_strtolower ( serialize ( $haystack ) );
    $haystack    = unserialize ( $haystack );
    $needle_type = gettype ( $needle );
    foreach ( $haystack as $element )
    {
      $retval = $retval = NULL && $needle_type == 'string' && gettype ( $element ) == 'string' && $needle == trim ( $element ) ? TRUE : NULL;
      $retval = $retval !== TRUE && $strict === TRUE && $needle === $element ? TRUE : $retval;
      $retval = $retval !== TRUE && $needle == trim ( $element ) ? TRUE : $retval;
      if ( $retval === TRUE )
      {
        $refvar ?? $element;
        
        RETURN TRUE;
      }
    }
    
    RETURN FALSE;
  }
  
  /**
   * Recursive array search.
   * See http://php.net/manual/en/function.array-search.php#91365
   *
   * @param $needle
   *   The searched value.
   * @param $haystack
   *   The array.
   *
   * @return bool|int|string
   *   Array of keys, containing values or FALSE if not found.
   */
  
  /**
   * self :: ras_first()
   *
   * @param mixed $needle
   * @param mixed $haystack
   * @param bool  $strpos_mode
   *
   * @return
   */
  public static function ras_first ( $needle , $haystack , $strpos_mode = FALSE )
  {
    $needle = mb_strtolower ( $needle );
    $keys   = [];
    foreach ( $haystack as $key => $value )
    {
      if ( is_string ( $value ) === TRUE )
      {
        $value   = mb_strtolower ( $value );
        $founder = strpos ( $value , $needle ) !== FALSE;
      }
      elseif ( is_array ( $value ) === TRUE )
      {
        $founder = FALSE;
      }
      
      if ( $founder === TRUE || ( is_array ( $value ) && self::ras_first (
            $needle ,
            $value
          ) !== FALSE )
      )
      {
        //$keys[] = $key;
        //return $key;
        if ( is_array ( $value ) === FALSE )
        {
          return $value;
        }
      }
    }
    if ( ! empty( $keys ) )
    {
      return $keys;
    }
    
    return FALSE;
  }
  
  /**
   * Flatten a multi-dimensional array into a single level.
   *
   * @param  array $array
   * @param  int   $depth
   *
   * @return array
   */
  
  /**
   * self :: flatten_array()
   *
   * @param mixed  $array
   * @param bool   $keep_array_path
   * @param string $separator
   * @param string $prefix
   *
   * @return
   */
  public static function flatten_array ( $array , $keep_array_path = TRUE , $separator = "::" , $prefix = "" )
  {
    $retval = [];
    foreach ( $array as $key => $value )
    {
      if ( is_array ( $value ) === TRUE )
      {
        $retval = $retval + self::flatten_array ( $value , $keep_array_path , $separator , $keep_array_path === TRUE ? $prefix.$key.$separator : "" );
        continue;
      }
      $retval_key            = $prefix.$key;
      $retval[ $retval_key ] = $value;    #$retval_key            = self::re ("root ", "", $prefix . $key );
    }
    
    return ( $retval );
  }
  
  
  public static function crc32_file ( $filename )
  {
    $file_string = file_get_contents ( $filename );
    $retval      = crc32 ( $file_string );
    $retval      = sprintf ( "%u" , $retval );
    return ( $retval );
  }
  
  
  
  
  /**
   * @brief   Brief
   *
   * @param   [in] $date Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  /**
   * self :: isvaliddate10()
   *
   * @param mixed $date
   *
   * @return
   */
  public static function isvaliddate10 ( $date )
  {
    $retval = substr_count ( $date , "." ) === 2 &&
              ctype_digit ( self::  re ( "." , "" , $date ) ) === TRUE &&
              strlen ( ( $dexp = explode ( "." , $date ) ) [ 0 ] ) === 4 ? TRUE : FALSE;
    $retval = $retval === TRUE && @checkdate ( $dexp[ 1 ] , $dexp[ 2 ] , $dexp[ 0 ] ) ? $retval : FALSE;
    
    return ( $retval );
  }
  
  /**
   *  Adding a simple element to an array, if NULL exiting
   *
   * @param [in] $array any array
   * @param [in] $element any future array element
   *
   * @return array
   */
  
  
  /**
   *  Adding a simple element to an array (by reference), if NULL exiting.
   *
   * @param [in] $array   - any array
   * @param [in] $element - any future array element
   *
   * @return NULL
   */
  
  /**
   * self :: add_()
   *
   * @param mixed $array
   * @param mixed $element
   *
   * @return
   */
  public static function add_ ( &$array , $element )
  {
    $ee = "element";
    $aa = "array";
    is_array ( $element ) === TRUE && is_array ( $array ) === FALSE ? self::  swap_vars ( $ee , $aa ) : nop ();
    if ( $$ee !== NULL )
    {
      $$aa[] = $$ee;
    }
  }//
  
  /**
   * @brief   Brief
   *
   * @param   [in] $array Parameter_Description
   * @param   [in] $key Parameter_Description
   *
   * @return Return_Description
   * @details Details
   */
  
  /**
   * self :: ake()
   *
   * @param mixed $array
   * @param mixed $key
   *
   * @return
   */
  public static function akex ( $key , $array )
  {
    return isset ( $array[ $key ] ) === TRUE ? TRUE : array_key_exists ( $key , $array );
  }
  
  public static function ake ( $array , $key )
  {
    IF ( is_array ( $array ) === TRUE && is_array ( $key ) === FALSE )
    {
      return array_key_exists ( $key , $array );
    }
    IF ( is_array ( $key ) === TRUE && is_array ( $array ) === FALSE )
    {
      return array_key_exists ( $array , $key );
    }
    return FALSE;
  }
  
  
  //  $a2 = is_array ( $key ) ;
  //  $a1 = is_array ( $array ) ;
  //  ( $a1 === TRUE &&  $a2 === FALSE ? self ::  swap_vars ( $kk , $aa ) : nop ();
  //  if ( $a1 === FALSE && $a2 === FALSE ) return false ;
  
  /**
   * self :: getbykey()        Get a config file parameter.
   *
   * @param mixed $array
   * @param mixed $key1
   * @param mixed $key2
   * @param mixed $key3
   *
   * @return
   */
  public static function getbykey ( $array , $key1 , $key2 = NULL , $key3 = NULL )
  {
    SWITCH ( TRUE )
    {
      CASE self:: ake ( $array , $key1 ) === FALSE :
        print "Configuration error: \"$key1\" must be defined.";
        THROW NEW Exception( "getbykey: invalid main key = $key1" );
      CASE $key2 === NULL :
        RETURN $array[ $key1 ];
      BREAK;
      CASE self:: ake ( $array[ $key1 ] , $key2 ) === FALSE :
        IF ( $key1 === "USER" )
        {
          RETURN NULL;
        }
        print "Configuration error: $key1(\"$key2\") must be defined.";
        THROW NEW Exception( "getbykey: invalid subkey = $key2" );
      CASE $key3 === NULL :
        RETURN $array[ $key1 ][ $key2 ];
      BREAK;
    }
    return $retval ?? "";
  }
  
  
  public static function explode_getlast ( $sep , $string )
  {
    $retval = explode ( $sep , $string );
    $retval = end ( $retval );
    $retval = $retval === FALSE ? "" : $retval;
    return ( $retval );
  }
  
  
  public static function grep ( $strng , $grepstr )
  {
    $retval = [];
    if ( is_array ( $strng ) === FALSE )
    {
      $strng = explode ( "\n" , $strng );
    }
    for ( $i = 0 , $cn = count ( $strng ) ; $i < $cn ; $i++ )
    {
      if ( strpos ( $strng[ $i ] , $grepstr ) !== FALSE )
      {
        $retval[] = $strng[ $i ];
      }
    }
    
    return ( $retval );
  }
  
  
  /**
   * GET ARRAY ELEMENT BY INDEX OR KEY
   *
   * @param array  $array
   * @param string $indexkey
   *
   * @return mixed
   */
  public static function gai ( array $array , $indexkey )
  {
    $retval = self:: ake ( $array , $indexkey ) === TRUE ? $array[ $indexkey ] : "";
    return ( $retval );
  }
  
  
  public static function gai_ ( &$array = NULL , $key = NULL )
  {
    if ( in_array ( NULL , [ $array , $key ] , TRUE ) === TRUE )
    {
      return "";
    }
    $arr = "array";
    $ind = "key";
    is_array ( $key ) === TRUE && is_array ( $array ) === FALSE ? self::swap_vars ( $arr , $ind ) : nop ();
    $retval = ( array_key_exists ( $$ind , $$arr ) === TRUE ? $$arr[ $$ind ] : "" );
    return $retval;
  }
  
  
  public static function nop ()
  {
    return TRUE;
  }
  
  
  public static function array_multisort_if_array_ ( &$array , $mode = SORT_ASC )
  {
    $retval = is_array ( $array ) === TRUE ? array_multisort ( $array , $mode ) : NULL;
    return ( $retval );
  }
  
  
  /** Bulletproof trimmer. Remove fake unicode spaces, double spaces, fake ndashes. Deals with arrays, too
   *
   * @param $strng
   */
  public static function hypertrim_ ( &$strng )
  {
    if ( is_string ( $strng ) === TRUE )
    {
      self:: re_ ( [ TAB , FAKESPACE1 , FAKESPACE2 , FAKESPACE3 , FAKEDASH1 , FAKEDASH2 , PER_R ] ,
                   [ SPACE , SPACE , SPACE , SPACE , DASH , DASH , "" ] , $strng );
      self:: reu_ ( SPACE.SPACE , SPACE , $strng );
      $strng = trim ( $strng , " :\n\0\x0B,._\"''" );
      $strng = trim ( $strng , "\x00..\x1F" );
      return;
    }
    if ( is_array ( $strng ) === TRUE )
    {
      foreach ( $strng as $key => $value )
      {
        self:: ultratrim_ ( $value );
        $strng [ $key ] = $value;
      }
    }
  }
  
  
  public static function hypertrim ( $strng )
  {
    self:: hypertrim_ ( $strng );
    return $strng;
  }
  
  
  /** Bulletproof trimmer. Remove fake unicode spaces, double spaces, fake ndashes. Deals with arrays, too
   *
   * @param $strng
   */
  public static function ultratrim_ ( &$strng )
  {
    if ( is_string ( $strng ) === TRUE )
    {
      self:: re_ ( [ TAB , FAKESPACE1 , FAKESPACE2 , FAKESPACE3 , FAKEDASH1 , FAKEDASH2 , PER_R ] ,
                   [ SPACE , SPACE , SPACE , SPACE , DASH , DASH , "" ] , $strng );
      self:: reu_ ( SPACE.SPACE , SPACE , $strng );
      self:: reu_ ( DASH.DASH , DASH , $strng );
      $strng = trim ( $strng , " :\n\0\x0B,_\"''" );
      $strng = trim ( $strng , "\x00..\x1F" );
      return;
    }
    if ( is_array ( $strng ) === TRUE )
    {
      foreach ( $strng as $key => $value )
      {
        self:: ultratrim_ ( $value );
        $strng [ $key ] = $value;
      }
    }
  }
  
  
  public static function ultratrim ( $strng )
  {
    self:: ultratrim_ ( $strng );
    return $strng;
  }
  
  
  public static function sec2HHMMSESE ( $sec )
  {
    $day = (int) floor ( $sec / 8400 );
    $sec = explode ( ":" , gmdate ( "H:i:s" , $sec - $day * 8400 ) );
    return [ "day" => $day , "hour" => $sec[ 0 ] , "minute" => $sec[ 1 ] , "second" => $sec[ 2 ] , "time" => "$sec[0]:$sec[1]:$sec[2]" ];
  }
  
  
  public static function safe_filename ( $fname , $replacement = "_" )
  {
    $fname = str_replace ( explode ( "," , "á,í,ű,ő,ü,ú,ó,é,Á,Í,Ű,Ő,Ü,Ú,Ó,É" ) , explode ( "," , "a,i,u,o,u,u,o,e,A,I,U,O,U,U,O,E" ) , self::ultratrim ( $fname ) );
    $fname = preg_replace ( '/[^a-zA-Z0-9-_\.]/' , $replacement , utf8_decode ( $fname ) );
    for ( $repdb = 0 , $i = 0 ; 1 === 1 ; $i++ )
    {
      if ( $i == 10000 )
      {
        T H R O W _ A W A Y  ( "Error making safe_filename" );
      }
      $fname = str_replace ( "__" , "_" , $fname , $repdb );
      if ( $repdb === 0 )
      {
        break;
      }
    }
    return $fname;
  }
  
  /**
   * array_top()
   *
   * @param mixed $arr
   * @return
   */
  public static function array_top ( $arr )
  {
    if ( ( is_array ( $arr ) === FALSE ) || ( count ( $arr ) === 0 ) )
    {
      return NULL;
    }
    return array_pop ( $arr );
  }
  
  public static function untrim ( $strng , $untrimmer = " " )
  {
    return is_string ( $strng ) === TRUE ? "{$untrimmer}{$strng}{$untrimmer}" : "{$untrimmer}{$untrimmer}";
  }
  
  
  public static function invert_date ( $datestr , $fixpoint = 127174492800 )
  {
    //$datestr = time2stamp ( $datestr ) ;
    return ( insertdatetime ( $fixpoint - time2stamp ( $datestr ) , "YY.MM.DD" ) );
  }
  
  
  public static function put_ini_file ( $file , $array , $i = 0 )
  {
    $strng = "";
    foreach ( $array as $k => $v )
    {
      $strng = is_array ( $v ) ? $strng.str_repeat ( " " , $i * 2 )."[$k]\n".self::put_ini_file ( "" , $v , $i + 1 ) : $strng.str_repeat ( " " , $i * 2 )."$k = $v\n";
    }
    return $file ? log::append_file ( $file , $phpstr ?? "" , TRUE ) : $strng;
  }
  
  public static function processphp ( $strng )
  {
    re_ ( "\r" , "" , $strng );
    $strng = self::remove_block_comments ( $strng );
    $strng = explode ( "\n" , $strng );
    $strng = self::trim_array ( $strng );
    for ( $i = 0 , $iMax = count ( $strng ) ; $i < $iMax ; $i++ )
    {
      if ( strpos ( trim ( $strng[ $i ] ) , "//" ) === 0 )
      {
        continue;
      }
      if ( strpos ( trim ( $strng[ $i ] ) , "#" ) === 0 )
      {
        continue;
      }
      if ( trim ( $strng[ $i ] ) === "" )
      {
        continue;
      }
      $newcode[] = $strng [ $i ];
    }
    $strng = implode ( "\n" , $newcode );
    //re_("{","\n{\n",$strng);
    //re_("}","\n}\n",$strng);
    $strng = reu ( "\n\n" , "\n" , $strng );
    return $strng;
  }
  
  /**GETTING FILES (RECURSIVE) BY EXTENSION FROM A GIVEN DIRECTORY WITH IGNORABLE STRING PARTS
   * @param string $start_dir
   * @param array  $extensionlist
   * @param array  $ignorable_str_fragments
   *
   * @return array
   */
  public static function fetch_source ( $start_dir = "./" , $extensionlist = NULL , $ignorable_str_fragments = [ "chcd__" , "xajax" ] ) : array
  {
    IF ( is_dir ( $start_dir ) === FALSE )
    {
      T H R O W _ A W A Y  ( __METHOD__.": directory ''$start_dir'' was not found.. or removed !" );
    }
    $retval                        = $retval ?? [];
    $extensionlist                 = $extensionlist ?? [ "php" , "tib" , "tib" , "js" ];
    $extensionlist                 = is_array ( $extensionlist ) === TRUE ? $extensionlist : explode ( "," , self:: re ( [ ";" , "|" ] , "," , $extensionlist ) );
    $objects                       = new RecursiveIteratorIterator ( new RecursiveDirectoryIterator ( $start_dir ) , RecursiveIteratorIterator :: SELF_FIRST );
    $ignorable_str_fragments_count = count ( $ignorable_str_fragments );
    foreach ( $objects as $object )
    {
      if ( in_array ( pathinfo ( ( $fp = $object->getPathname () ) , PATHINFO_EXTENSION ) , $extensionlist ) === FALSE )
      {
        continue;
      }
      for ( $j = 0 ; $j < $ignorable_str_fragments_count ; $j++ )
      {
        IF ( strpos ( $fp , $ignorable_str_fragments [ $j ] ) !== FALSE )
        {
          BREAK;
        }
      }
      self:: add_ ( $retval , $j === $ignorable_str_fragments_count ? $fp : NULL );
      //$name ;
    }
    return $retval;
  }
  
  public static function collect_source ( $start_dir = "./" , $output_file = NULL , $excluder_pattern = NULL , $includer_pattern = NULL )
  {
    $files = self:: fetch_source ( $start_dir );
    if ( $excluder_pattern !== NULL && is_array ( $excluder_pattern ) === FALSE )
    {
      $excluder_pattern = [ $excluder_pattern ];
    }
    if ( $includer_pattern !== NULL && is_array ( $includer_pattern ) === FALSE )
    {
      $includer_pattern = [ $includer_pattern ];
    }
    for ( $i = 0 , $tob = "/*\n\nTABLE OF CONTENTS:\n" , $iMax = count ( $files ) ; $i < $iMax ; $i++ )
    {
      $tob .= "\n$i. [ ] ".$files [ $i ];
    }
    for ( $i = 0 , $bigstring = $tob."\n\n*/\n" , $iMax = count ( $files ) ; $i < $iMax ; $i++ )
    {
      $exclude = FALSE;
      if ( $excluder_pattern !== NULL )
      {
        for ( $j = 0 , $jMax = count ( $excluder_pattern ) ; $j < $jMax ; $j++ )
        {
          IF ( strpos ( $files[ $i ] , $excluder_pattern[ $j ] ) !== FALSE )
          {
            $exclude = TRUE;
          }
        }
      }
      IF ( $exclude === TRUE )
      {
        continue;
      }
      $include = TRUE;
      if ( $includer_pattern !== NULL )
      {
        $include = FALSE;
        for ( $j = 0 , $jMax = count ( $includer_pattern ) ; $j < $jMax ; $j++ )
        {
          IF ( strpos ( $files[ $i ] , $includer_pattern[ $j ] ) !== FALSE && $include === FALSE )
          {
            $include = TRUE;
          }
        }
      }
      IF ( $include === FALSE )
      {
        continue;
      }
      $bigstring = self::str_replace_first ( " [ ] ".$files[ $i ] , " [x] ".$files[ $i ] , $bigstring );
      syslog_ ( "FETCH:".$files[ $i ] );
      $bigstring .= "\n▓▒░ @FILE --> {$files[ $i ]}\n".trim ( file_get_contents ( $files[ $i ] ) )."";
    }
    $bigstring = str_replace ( "\r" , "" , $bigstring );
    if ( is_string ( $output_file ) === FALSE )
    {
      return $bigstring;
    }
    @unlink ( ( $output_file ) );
    log::append_file ( ( $output_file ) , $bigstring , TRUE );
  }
  
  /**
   * self :: add()
   *
   * @param mixed $array
   * @param mixed $element
   *
   * @return
   */
  public static function add ( $array , $element )
  {
    $ee = "element";
    $aa = "array";
    is_array ( $element ) === TRUE && is_array ( $array ) === FALSE ? self::  swap_vars ( $ee , $aa ) : nop ();
    if ( $$ee !== NULL )
    {
      $$aa[] = $$ee;
    }
    return $$aa;
  }
  
  public static function collect_variables ( $filename , $outputfilename )
  {
    $data    = file_get_contents ( $filename );
    $data    = self::re ( "\r" , "" , $data );
    $data    = self::re ( chr ( 9 ) , " " , $data );  //TAB
    $data    = reu ( "  " , " " , $data );
    $data    = self::re ( " " , "\n" , $data );
    $data    = self::re ( '$' , "\n".'$' , $data );
    $kill_us = str_split ( "\\,. &-;<` >*[]{}§'\"+!%/#?^ =()_|: " );
    $data    = self::re ( $kill_us , "\n" , $data );
    $data    = reu ( "  " , " " , $data );
    $data    = reu ( "\n\n" , "\n" , $data );
    $data    = explode ( "\n" , $data );
    $data    = array_unique ( $data );
    self::trim_array_ ( $data );
    $data   = array_values ( $data );
    $newset = [];
    for ( $i = 0 , $iMax = count ( $data ) ; $i < $iMax ; $i++ )
    {
      if ( mb_strpos ( $data[ $i ] , '$' ) === 0 && mb_strpos ( $data[ $i ] , '$' , 1 ) !== 1 /*&& ( $data[$i] === utf8_decode( $data[$i]) )*/ /*&& ctype_alnum (re('$','',$data[$i])) === TRUE*/ && ctype_digit ( mb_substr ( self::re ( '$' , '' , $data[ $i ] ) , 0 , 1 ) ) === FALSE && mb_strtoupper ( $data[ $i ] ) !== $data[ $i ] )
      {
        $newset[] = $data [ $i ];
      }
    }
    $data = $newset;
    unset ( $newset );
    $data = array_unique ( $data );
    array_multisort ( $data , SORT_ASC );
    log::append_file ( $outputfilename , implode ( "\n" , $data ) , TRUE );
  }//
  
  public static function collect_functions ( $filename )
  {
    $data = file_get_contents ( $filename );
    $data = self::re ( "\r" , "" , $data );
    $data = self::re ( chr ( 9 ) , " " , $data );  //TAB
    $data = reu ( "  " , " " , $data );
    $data = self::re ( 'function' , "\n".'function' , $data );
    $data = self::re ( '(' , "\n" , $data );
    $data = explode ( "\n" , $data );
    self::trim_array_ ( $data );
    $newset = [];
    for ( $l = $i = 0 , $iMax = count ( $data ) ; $i < $iMax ; $i++ )
    {
      if ( mb_strpos ( $data[ $i ] , 'function ' ) === 0 )
      {
        $l++;
        $newset[] = self::re ( "function " , "" , $data [ $i ] );
      }
    }
    $data = $newset;
    unset ( $newset );
    //MYDIE($newset);
    $data = array_unique ( $data );
    array_multisort ( $data , SORT_ASC );
    if ( $filename !== NULL )
    {
      @unlink ( "functions.xxx" );
    }
    if ( $filename !== NULL )
    {
      log::append_file ( "functions.xxx" , implode ( "\n" , $data ) , TRUE );
    }
    return $data;
    
    
  }
  
  public static function unparse_url ( array $parsed )
  {
    $get      = function ( $key ) use ( $parsed )
    {
      return isset( $parsed[ $key ] ) ? $parsed[ $key ] : NULL;
    };
    $pass     = $get( 'pass' );
    $user     = $get( 'user' );
    $userinfo = $pass !== NULL ? "$user:$pass" : $user;
    $port     = $get( 'port' );
    $scheme   = $get( 'scheme' );
    $query    = $get( 'query' );
    if ( is_array ( $query ) === TRUE )
    {
      $query = self::unparse_str ( $query );
    }
    $fragment  = $get( 'fragment' );
    $authority =
      ( $userinfo !== NULL ? "$userinfo@" : '' ).
      $get( 'host' ).
      ( $port ? ":$port" : '' );
    return
      ( strlen ( $scheme ) ? "$scheme:" : '' ).
      ( strlen ( $authority ) ? "//$authority" : '' ).
      $get( 'path' ).
      ( strlen ( $query ) ? "?$query" : '' ).
      ( strlen ( $fragment ) ? "#$fragment" : '' );
  }
  
  public static function unparse_str ( $array )
  {
    return preg_replace ( '/%5B[0-9]+%5D/simU' , '[]' , http_build_query ( $array ) );
  }
  
  
  public static function parse_url_current ()
  {
    $current_url = 'http';
    IF ( $_SERVER[ "HTTPS" ] == "on" )
    {
      $current_url .= "s";
    }
    $current_url       .= "://";
    $current_url       = $_SERVER[ "SERVER_PORT" ] != "80" ? $current_url.$_SERVER[ "SERVER_NAME" ].":".$_SERVER[ "SERVER_PORT" ].$_SERVER[ "REQUEST_URI" ] : $current_url.$_SERVER[ "SERVER_NAME" ].$_SERVER[ "REQUEST_URI" ];
    $retval            = parse_url ( $current_url );
    $retval[ "query" ] = $retval[ "query" ] ?? "";
    $q                 = $retval[ "query" ];
    parse_str ( $retval[ "query" ] , $retval[ "query" ] );
    return $retval;
  }
  
  public static function array_strpos ( $strng , $arr )
  {
    foreach ( $arr as $key => $val )
    {
      if ( strpos ( $val , $strng ) !== FALSE )
      {
        return $key;
      }
    }
    return FALSE;
  }
  
  public static function mb_str_limiter ( $strng , $limit = NULL )
  {
    return $limit === NULL || mb_strlen ( $strng ) < $limit ? $strng : mb_substr ( $strng , 0 , $limit );
  }
  
  
  public static function myctype_digit ( $strng )
  {
    return ctype_digit ( (string) $strng );
  }
  
  public static function str_replace_whole_word ( $wholeword_to_replace , $replacewith , $strng )
  {
    self::str_replace_whole_word_ ( $wholeword_to_replace , $replacewith , $strng );
    return $strng;
  }
  
  public static function str_ireplace_whole_word ( $wholeword_to_replace , $replacewith , $strng )
  {
    self::str_ireplace_whole_word_ ( $wholeword_to_replace , $replacewith , $strng );
    return $strng;
  }
  
  
  public static function str_replace_whole_word_file ( $outputfile , $wholeword_to_replace , $replacewith , $str_or_file )
  {
    if ( strlen ( $str_or_file ) < 255 && file_exist ( $str_or_file ) === TRUE )
    {
      $str_or_file = file_get_contents ( $str_or_file );
    }
    $str_or_file          = self::re ( '$' , 'DOLLARDOOOLLAR'.'BABY' , $str_or_file );
    $wholeword_to_replace = self::re ( '$' , 'DOLLARDOOOLLAR'.'BABY' , $wholeword_to_replace );
    $replacewith          = self::re ( '$' , 'DOLLARDOOOLLAR'.'BABY' , $replacewith );
    $new                  = preg_replace ( '/\b'.$wholeword_to_replace.'\b/' , $replacewith , $str_or_file );
    $new                  = self::re ( 'DOLLARDOOOLLAR'.'BABY' , '$' , $new );
    @unlink ( $outputfile );
    log::append_file ( $outputfile , $new , TRUE );
  }
  
  public static function str_replace_whole_word_ ( $wholeword_to_replace , $replacewith , &$strng )
  {
    $strng = preg_replace ( '/\b'.$wholeword_to_replace.'\b/u' , $replacewith , $strng );
  }
  
  public static function str_ireplace_whole_word_ ( $wholeword_to_replace , $replacewith , &$strng )
  {
    $strng = preg_replace ( '/\b'.$wholeword_to_replace.'\b/ui' , $replacewith , $strng );
  }
  
  public static function getrandom_variable ( $length = 16 , $rep = "0123456789qwertzuiopasdfghjklyxcvbnm" )
  {
    $repfirst = str_replace ( " " , "" , strtr ( $rep , "0123456789" , "          " ) );
    $repfirst = strlen ( $repfirst ) === 0 ? $rep : $repfirst;
    for ( $result = "" , $abc_mode = self::re ( '$' , '' , '$repfirst' ) , $i = 0 ; $i < $length ; $i++ )
    {
      $result   .= $$abc_mode[ random_int ( 0 , strlen ( $$abc_mode ) - 1 ) ];
      $abc_mode = self::re ( '$' , '' , '$rep' );
    }
    return $result;
  }
  
  public static function ismail ( $str_mail )
  {
    return ( preg_match ( '/^[-!#$%&\'*+\\.\/0-9=?A-Z^_`{|}~]+@([-0-9A-Z]+\.)+([0-9A-Z]){2,4}$/i' , trim ( $str_mail ) ) );
  }
  
  public static function not ( $boolval )
  {
    return $boolval === FALSE ? TRUE : FALSE;
  }//
  
  /** Checking if two intervalls are distinct or not
   * @param      $interval1_begin
   * @param      $interval1_end
   * @param      $interval2_begin
   * @param      $interval2_end
   * @param bool $strict_mode
   * @return bool
   */
  public static function interval_overlap_2 ( $interval1_begin , $interval1_end , $interval2_begin , $interval2_end , $strict_mode = FALSE )
  {
    $interval1_begin = is_timestamp ( $interval1_begin ) === FALSE ? time2stamp ( $interval1_begin ) : $interval1_begin;
    $interval1_end   = is_timestamp ( $interval1_end ) === FALSE ? time2stamp ( $interval1_end ) : $interval1_end;
    $interval2_begin = is_timestamp ( $interval2_begin ) === FALSE ? time2stamp ( $interval2_begin ) : $interval2_begin;
    $interval2_end   = is_timestamp ( $interval2_end ) === FALSE ? time2stamp ( $interval2_end ) : $interval2_end;
    if ( $interval1_end < $interval1_begin )
    {
      swap_vars ( $interval1_begin , $interval1_end );
    }
    if ( $interval2_end < $interval2_begin )
    {
      swap_vars ( $interval2_begin , $interval2_end );
    }
    if ( $interval2_begin < $interval1_begin )
    {
      swap_vars ( $interval1_begin , $interval2_begin );
      swap_vars ( $interval1_end , $interval2_end );
    }
    return $strict_mode === FALSE ? $interval1_end > $interval2_begin : $interval1_end >= $interval2_begin;
  }
  
  
  /**
   * Given a value, find all constants defined with the same value.
   *
   * To search through ALL defined constants, pass FALSE as the 2nd argument;
   * otherwise, it will only check userland constants.
   *
   * @param mixed $val
   * @param bool  $onlyUser
   * @return array
   */
  public static function getconstantbyvalue ( $val , $force2get = FALSE , $retarray = FALSE , $onlyUser = TRUE )
  {
    IF ( isvalidoid ( $val ) === FALSE )
    {
      RETURN "";
    }
    $consts = get_defined_constants ( $onlyUser );
    if ( $onlyUser )
    {
      $consts = $consts[ "user" ];
    }
    $ret = [];
    foreach ( $consts as $id => $cVal )
    {
      if ( $cVal === $val )
      {
        if ( $retarray === TRUE )
        {
          $ret[] = $id;
        }
        else
        {
          return $id;
        }
      }
    }
    IF ( count ( $ret ) === 0 )
    {
      if ( $force2get === TRUE )
      {
        RETURN readfield ( $val , "caption " );
      }
      RETURN "";
    }
    return $ret;
  }
  
  public static function linkize ( $value , $attr = "target=\"_blank\" data-generated=\"true\"" )
  {
    $protocols = [ "http" , "mail" , "https" , "ftp" ];
    $links     = $attributes = [];
    foreach ( $attributes as $key => $val )
    {
      $attr = ' '.$key.'="'.htmlentities ( $val ).'"';
    }
    $value = preg_replace_callback ( '~(<a .*?>.*?</a>|<.*?>)~i' , function ( $match ) use ( &$links )
    {
      return "<".array_push ( $links , $match[ 1 ] ).">";
    } , $value );
    foreach ( (array) $protocols as $protocol )
      switch ( $protocol )
      {
        case "http":
        case "https":
          $value = preg_replace_callback ( '~(?:(https?)://([^\s<]+)|(www\.[^\s<]+?\.[^\s<]+))(?<![\.,:])~i' , function ( $match ) use ( $protocol , &$links , $attr )
          {
            if ( $match[ 1 ] )
            {
              $protocol = $match[ 1 ];
            }
            $link = $match[ 2 ] ? : $match[ 3 ];
            return '<'.array_push ( $links , "<a $attr href=\"$protocol://$link\">$link</a>" ).'>';
          } , $value );
        break;
        case "mail":
          $value = preg_replace_callback ( '~([^\s<]+?@[^\s<]+?\.[^\s<]+)(?<![\.,:])~' , function ( $match ) use ( &$links , $attr )
          {
            return '<'.array_push ( $links , "<a $attr href=\"mailto:{$match[1]}\">{$match[1]}</a>" ).'>';
          } , $value );
        break;
        case "twitter":
          $value = preg_replace_callback ( '~(?<!\w)[@#](\w++)~' , function ( $match ) use ( &$links , $attr )
          {
            return '<'.array_push ( $links , "<a $attr href=\"https://twitter.com/".( $match[ 0 ][ 0 ] == '@' ? '' : 'search/%23' ).$match[ 1 ]."\">{$match[0]}</a>" ).'>';
          } , $value );
        break;
        default:
          $value = preg_replace_callback ( '~'.preg_quote ( $protocol , '~' ).'://([^\s<]+?)(?<![\.,:])~i' , function ( $match ) use ( $protocol , &$links , $attr )
          {
            return '<'.array_push ( $links , "<a $attr href=\"$protocol://{$match[1]}\">{$match[1]}</a>" ).'>';
          } , $value );
        break;
      }
    return preg_replace_callback ( '/<(\d+)>/' , function ( $match ) use ( &$links )
    {
      return $links[ $match[ 1 ] - 1 ];
    } , $value );
  }
  
  public static function lorem_ipsum ( int $iterate = 1 ) : string
  {
    for ( $retval = "" , $i = 0 , $fp = NULL ; $i < ( $fp ?? $fp = $iterate ) ; $i++ )
    {
      $retval .= self::LOREM_IPSUM;
    }
    return $retval;
  }
  
  /**Normalizing name caps to <Aaaaa Aaaa Aaaaaa> caps-format
   * @param string $nameString
   * @return string
   */
  public static function nameCapsFixer ( string $nameString )
  {
    for ( $newname = "" , $prevspacewas = TRUE , $j = 0 , $fp2 = NULL ; $j < ( $fp2 ?? $fp2 = mb_strlen ( $nameString ) ) ; $j++ )
    {
      $character    = mb_substr ( $nameString , $j , 1 );
      $newname      .= $prevspacewas !== TRUE ? mb_strtolower ( $character ) : mb_strtoupper ( $character );
      $prevspacewas = $character === " " ? TRUE : FALSE;
    }
    return ( $newname );
  }
  
  
  /*  ABADONED !!!! */
  public static function rotateRight ( ?string $strng ) : ?string
  {
    $stringArray = str_split ( $strng );
    $resultArray = str_split ( str_repeat ( chr ( 0 ) , count ( $stringArray ) ) );
    $counter     = 0;
    foreach ( $stringArray as $char )
    {
      $originalChar             = $newChr = ord ( $char ) | ( ( $wascarry ?? FALSE ) ? 128 : 0 );
      $newChr                   <<= 1;
      $newChr                   ^= 256;
      $wascarry                 = ! ( $newChr > 255 );
      $resultArray [ $counter ] = chr ( $newChr | ( ord ( $resultArray [ $counter ] ) ) );
      $cminus1                  = --$counter;
      $counter++;
      $counter++;
      $cminus1                  = $cminus1 < 0 ? count ( $resultArray ) - 1 : $cminus1;
      $resultArray [ $cminus1 ] = ( $wascarry ? chr ( 128 ) : $resultArray [ $cminus1 ] );
    }
    return implode ( "" , $resultArray );
  }
  
  /**
   * Xorring a string with a value but first converting it to hex format
   *
   * @param null|string $strng
   * @param int         $value
   * @return null|string
   */
  public static function putXorredStr ( ?string $strng , $value = 170 ) : ?string
  {
    $value       = (int) bcmod ( (string) $value , "256" );
    $stringArray = str_split ( $strng );
    $resultArray = [];
    foreach ( $stringArray as $char )
    {
      $resultArray[] = chr ( ord ( $char ) ^ $value );
    }
    return bin2hex ( implode ( "" , $resultArray ) );
  }
  
  /**
   * Xorring a xorred string and converting to bin the expected hex format
   *
   * @param null|string $strng
   * @param int         $value
   * @return null|string
   */
  public static function getXorredStr ( ?string $strng , $value = 170 ) : ?string
  {
    $value       = (int) bcmod ( (string) $value , "256" );
    $stringArray = str_split ( hex2bin ( $strng ) );
    $resultArray = [];
    foreach ( $stringArray as $char )
    {
      $resultArray[] = chr ( ord ( $char ) ^ $value );
    }
    return implode ( "" , $resultArray );
  }
  
  /**
   * Check hunagrian tax number's validity (CDV)
   *
   * @param $x
   *
   * @return bool
   */
  public static function isValidTaxNumber ( $x )
  {
    $countyCodes = [
      "02" ,
      "22" ,
      "03" ,
      "23" ,
      "04" ,
      "24" ,
      "05" ,
      "25" ,
      "06" ,
      "26" ,
      "07" ,
      "27" ,
      "08" ,
      "28" ,
      "09" ,
      "29" ,
      "10" ,
      "30" ,
      "11" ,
      "31" ,
      "12" ,
      "32" ,
      "13" ,
      "33" ,
      "14" ,
      "34" ,
      "15" ,
      "35" ,
      "16" ,
      "36" ,
      "17" ,
      "37" ,
      "18" ,
      "38" ,
      "19" ,
      "39" ,
      "20" ,
      "40" ,
      "41" ,
      "42" ,
      "43" ,
      "44" ,
      "51",
    ];
    
    $x = str_replace ( "-" , "" , $x );
    $sum = 0;
    if ( mb_strlen ( $x ) !== 13 )
    {
      return FALSE;
    }
    
    $sum += substr ( $x , 0 , 1 ) * 9;
    $sum += substr ( $x , 1 , 1 ) * 7;
    $sum += substr ( $x , 2 , 1 ) * 3;
    $sum += substr ( $x , 3 , 1 ) * 1;
    $sum += substr ( $x , 4 , 1 ) * 9;
    $sum += substr ( $x , 5 , 1 ) * 7;
    $sum += substr ( $x , 6 , 1 ) * 3;
    
    $chkSum = 10 - ( $sum % 10 );
    if ( $chkSum == 10 )
    {
      $chkSum = 0;
    }
    if ( $chkSum != substr ( $x , 7 , 1 ) * 3 ) //torzsszam
    {
      return FALSE;
    }
    
    
    if ( substr ( $x , 8 , 1 ) > 5 || substr ( $x , 8 , 1 ) < 1 ) //afa kod
    {
      return FALSE;
    }
    $zz = substr ( $x , 9 , 2 );
    return array_key_exists ( $zz , $countyCodes );
  }
  
  
}


