<?php

/**
 * Setting Composer's autoload & optionally for the folder ./classes
 *
 * @param bool $legacyMode
 */
function autoloads ( bool $legacyMode = TRUE )
{
  require "vendor/autoload.php";
  if ( $legacyMode === FALSE )
  {
    spl_autoload_register ( function ( $className )
    {
      if ( @file_exists ( $filename = "./classes/{$className}.php" ) )
      {
        include_once $filename;
      }
      else
      {
      	$className = ucfirst($className) ;
      	$filename = "./classes/{$className}.php";
      	include_once $filename;
      }
    }
    );
  }
}

autoloads ( FALSE );