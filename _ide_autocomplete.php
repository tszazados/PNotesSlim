<?php
//src/HintsClass
namespace HinterClass\Classes;

/**
 * Class HintsClass
 * @package HinterClass\Classes
 */
class HintsClass
{
    /**
     * @var int
     */
    public $test = 1;
    
    /**
     * @return bool
     */
    public function testMethod()
    {
        return true;
    }
    
    /**
     * @return string
     */
    public function printHelloWorld()
    {
        return "HelloWorld";
    }
}