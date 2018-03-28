<?php

use Jaxon\Response\Response;

/**
 * Created by PhpStorm.
 * User: szazadost
 * Date: 19/03/2018
 * Time: 16:30
 */

class JxClass
{
  
  public function sendMessage ( $message )
  {
    $xa = new Response();

    $xa->alert($message);

//    $xa->alert("$message");
//    $message2 = Str::getXorredStr ( $message) ;
//    $xa->alert("$message2");


    
    
    return $xa;
  }

  
  
  
}