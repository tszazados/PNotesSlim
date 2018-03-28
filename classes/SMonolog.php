<?php
/**
 * Created by PhpStorm.
 * User: szazadost
 * Date: 13/02/2018
 * Time: 16:17
 */

class SMonolog extends \Monolog\Logger
{
    use common;
    public function __construct ( $name = "smon" , $handlers = [] , $processors = [] )
    {
        parent::__construct ( $name , $handlers , $processors );
    }
    
    /**Preserves xdebug_state ( enabled / disabled )
     * If $message is not scalar
     * @param string $message
     * @param array  $context
     *
     * @return bool|void
     */
    public function addInfo ( $message , array $context = [] )
    {
        static $columnLength = 80 ;
        $xDebugState = ( ( $xdbgPresent = function_exists ( "xdebug_enable" ) ) && xdebug_is_enabled () );
        $xDebugState ? xdebug_disable () : $this->nop ();
        ob_start ();
        is_scalar ( $message) ? print $message : var_dump ( $message );
        $message = ob_get_clean ();
        $xDebugState ? xdebug_enable () : ( $xdbgPresent ? xdebug_disable () : $this->nop () );
        $message = explode ( "\n" , str_replace ( "\r" , "" , $message ) );
        foreach ( $message as $line )
        {
            $toRep = $columnLength - mb_strlen ( $line ) ;
            parent::addInfo ( $line . str_repeat ( " " , $toRep = $toRep < 0 ? 0 : $toRep) , $context );
        }
    }
    
}

