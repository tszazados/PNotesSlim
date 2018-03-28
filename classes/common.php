<?php
/**
 * Created by PhpStorm.
 * User: szazadost
 * Date: 13/02/2018
 * Time: 19:49
 */


trait common
{
  
  function das ( $db )
  {
    //    $db->
    //    $stmt = $db->query ( "SELECT * FROM messages" );
    //    return $stmt->fetchAll ( PDO::FETCH_ASSOC );
  }
  
  public $fullPageContent;
  
  /**
   * ob_start alternative
   *
   * @param null $toPush
   */
  public function push ( $toPush = NULL )
  {
    ob_start ();
    $args = func_get_args ();
    foreach ( $args as $printable )
    {
      print $printable;
    }
  }
  
  /**
   * ob_get_contents + ob_clean alternative
   *
   * @param null $variable
   *
   * @return null|string
   */
  public function pop ( $variable = NULL )
  {
    $variable === NULL ? $html = ob_get_clean () : $variable = ob_get_clean ();
    return $variable ?? $html;
  }
  
  /**
   *  Dedicated empty function ( no-operation )
   */
  public static function nop ()
  {
  
  }
  
  /**
   * Is the session alive or not ? Started already or not yet ?
   *
   * @return bool
   * @author szazadost
   */
  public function hasSessionStarted ()
  {
    return function_exists ( "session_status" ) === TRUE ?
      ( PHP_SESSION_ACTIVE == session_status () ) : ( empty ( session_id () ) === FALSE );
  }
  
  /**
   * Disabling xdebug to avoid stupid trace info lines in error_log..
   * Dummy mass function creator for an environment where xdebug is not present...
   * ( And don't let the forgotten debug calls cause Fatal error in production environment...)
   *
   * @author szazadost
   */
  public function xdebug_disable () : void
  {
    if ( ! function_exists ( "xdebug_enable" ) )
    {
      $functArray  = [
        "break" ,
        "call_class" ,
        "call_file" ,
        "call_function" ,
        "call_line" ,
        "clear_aggr_profiling_data" ,
        "code_coverage_started" ,
        "debug_zval" ,
        "debug_zval_stdout" ,
        "disable" ,
        "dump_aggr_profiling_data" ,
        "dump_superglobals" ,
        "enable" ,
        "get_code_coverage" ,
        "get_collected_errors" ,
        "get_declared_vars" ,
        "get_formatted_function_stack" ,
        "get_function_count" ,
        "get_function_stack" ,
        "get_headers" ,
        "get_monitored_functions" ,
        "get_profiler_filename" ,
        "get_stack_depth" ,
        "get_tracefile_name" ,
        "is_enabled" ,
        "memory_usage" ,
        "peak_memory_usage" ,
        "print_function_stack" ,
        "start_code_coverage" ,
        "start_error_collection" ,
        "start_function_monitor" ,
        "start_trace" ,
        "stop_code_coverage" ,
        "stop_error_collection" ,
        "stop_function_monitor" ,
        "stop_trace" ,
        "time_index" ,
        "var_dump" ,
      ];
      $creatorCode = "";
      array_walk ( $functArray , function ( $item ) use ( &$creatorCode )
      {
        $creatorCode .= ( "function xdebug_{$item} ( ) { } " );
      } );
      eval( $creatorCode );
    }
    else
    {
      xdebug_disable ();
    }
  }
  
  /**
   *  die with any type and unlimited number of params, will be logged + and printed.
   */
  public function mydie ()
  {
    $args = func_get_args ();
    foreach ( $args as $printable )
    {
      if ( ! is_scalar ( $printable ) )
      {
        $printable = var_export ( $printable , true );
      }
      print $printable;
      error_log ( $printable );
    }
    die( "Exited." );
  }
  
  /**Removing files from a folder tree recursively. Does not remove folders at all.
   * MUST HAVE KEYWORDS: "CACHE" "TMP" to avoid accidental
   *
   * @param $directory
   */
  public static function removeDirectoryFiles ( $directory )
  {
    $directory     = rtrim ( $directory , "/" );
    $contentArray  = self::isDebugMode () ? glob ( "{$directory}/*" ) : [];
    $mustHaveArray = [ "cache" , "tmp" ];
    foreach ( $contentArray as $file )
    {
      if ( in_array ( $basename = basename ( $file ) , [ "." , ".." ] ) )
      {
        continue;
      }
      if ( is_file ( $file ) && ! is_dir ( $file ) )
      {
        $hasMustHaveWords = FALSE;
        foreach ( $mustHaveArray as $mustHaveWord )
        {
          if ( stripos ( $file , $mustHaveWord ) !== FALSE )
          {
            $hasMustHaveWords = TRUE;
            break;
          }
        }
        $hasMustHaveWords ? unlink ( $file ) : self::nop ();
        continue;
      }
      self::removeDirectoryFiles ( $file );
    }
  }
  
  
}