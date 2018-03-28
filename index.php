<?php

use Monolog\Logger;
use Jaxon\Jaxon;


const  CONFIG_FILE = "./config.ini.php";

/******************************************************************************************************************************************************************
 ****  SLIM PHP Framework
 *******************************************************************************************************************************************************************
 *** 4 main features:
 *** HTTP ROUTER          : this allows developers to map functions / callbacks to HTTP methods and URLs.
 *** MIDDLEWARES          : Serve as layers to allow developers modify HTTP requests and response. If need further explanation on middlewares, there is an article
 ***                        here on Scotch that covers Laravel middlewares. The implementations might be a tad different, but they offer the same functionality
 ***                        ---> https://scotch.io/tutorials/understanding-laravel-middleware
 *** DEPENDENCY INJECTION : makes it possible for developers to have complete control over managing dependencies within applications.
 ***                        ---> https://en.wikipedia.org/wiki/Dependency_injection
 *** PSR-7 SUPPORT        : this is not really a feature, more like a standard. It defines the way HTTP requests and responses should be handled in web
 ***                        applications. You can read more about it on PHP-FIG.
 ***                        ---> http://www.php-fig.org/psr/psr-7/
 *******************************************************************************************************************************************************************/

include "autoloads.php";

class Index
{
  use common;
  /**
   * @var \HinterClass\Classes\HintsClass
   */
  const EXTRA_SCRIPT_PLACEHOLDER = [ "EXTRA_SCRIPT_PLACEHOLDER" => "<!-- Extra script placeholder -->" ];
  private $slimConfig         = [];
  private $slimLogger , $a;
  private $slimDIContainer;
  private $slimApp;
  private $debug;
  private $logger;
  private $source;
  private $jaxonScript;
  private $jaxonJS;
  private $jaxon;
  private $jaxonMD5;
  private $additioanlJSFiles  = [];
  private $additionalCSSFiles = [];
  
  /**
   * Page Index constructor
   * Creating the Config & the Logger & the DI container
   *
   * @throws \Slim\Exception\MethodNotAllowedException
   * @throws \Slim\Exception\NotFoundException
   * @throws \Exception
   */
  public function __construct ( Config $config )
  {
    $this->slimConfig = $config;
    Sys::hasSessionStarted () ? static::nop () : session_start ();
    $this->setDebug ( $this->slimConfig->{"site.debug"} );
    if ( $this->getDebug () )
    {
      Sys::rmdir ( "./tmp" , TRUE );
      //$this->xdebug_disable ();
    }
    $this->slimLogger = new SMonolog();
    $this->slimApp    = new Slim\App( [ "settings" => $this->slimConfig->getConfigArray () ] );
    
    $this->slimDIContainer = $this->slimApp->getContainer ();
    $this->injectHelper ();
    $this->injectLogger ();
    $this->injectTwig ();
    $this->injectDBConnection ();
    $this->injectJaxon ();
    
    $this->setRoutes ();
    
    $this->push ();
    $this->slimApp->run ();
    $html      = $this->pop ();
    $md5       = $this->getJaxonMD5 ();
    $jaxonFile = "./tmp/{$md5}.js";
    //$this -> additioanlJSFiles[] = $jaxonFile ;
    $html = str_replace ( $t = implode ( "" , self::EXTRA_SCRIPT_PLACEHOLDER ) , "<script src=\"{$jaxonFile}\" defer></script>{$t}" , $html );
    
    //die("".$md5);
    
    $html      = str_replace ( [ "500_page.js?" , "500_page.js" ] , [ "500_page.js&" , "500_page.js?jxnhsh={$md5}" ] , $html );
    $formatter = new MyTidy();
    
    $formatter->loadFromString ( $html );
    $this->source = $formatter();
    return $this;
  }
  
  /**
   *
   */
  private function setRoutes () : void
  {
    $parent = &$this;
    $this->slimApp->get ( $pattern = "/" , function ( \Slim\Http\Request $request , \Slim\Http\Response $response ) use ( $pattern , $parent )
    {
      $this->logger->addInfo ( "Opening page matched: $pattern" );
      $twigParams             = $parent->getDefaultTwigVariables ();
      $twigParams             = array_merge ( $parent->getAssets ( $twigParams ) , $twigParams );
      $twigParams [ "title" ] = "Home";
      
      return $this->view->render ( $response , "home.twig" , $twigParams );
    } , "/"
    );
    
    $this->slimApp->get ( "/hello[/{name}]" , function ( \Slim\Http\Request $request , \Slim\Http\Response $response , $args )
    {
      $this->logger->addInfo ( "Entered thread 2" );
      $response->write ( "Hello, " . $args[ "name" ] );
      return $response;
    }
    )->setArgument ( "name" , "World!" );
    
    $this->slimApp->get ( "/szeva[/{name}]" , function ( \Slim\Http\Request $request , \Slim\Http\Response $response , $args )
    {
      /** @var Dummy $this */
      $this->logger->addInfo ( "Entered thread 3" );
      $response->write ( "Hello, " . $args[ "name" ] );
      $response->write ( "<br>" );
      $response->getBody ()->write ( var_export ( $args , TRUE ) );
      return $response;
    }
    )->setArgument ( "name" , "World!" );
  }
  
  
  /**
   * @return string
   */
  public function __toString () : string
  {
    return (string) $this->source;
  }
  
  /**Collecting JS and CSS files in alphabetical order - if they begin with 2 digits and underscore.
   * @return array
   */
  private function getAssets ( ?array $array ) : array
  {
    $array    = $array ?? [];
    $baseDir  = $this->slimConfig->{"slim.assets_base"};
    $cssFiles = array_merge ( glob ( $baseDir . "/css/[0-9][0-9][0-9]_*.css" ) , $this->additionalCSSFiles );
    $jsFiles  = array_merge ( glob ( $baseDir . "/js/[0-9][0-9][0-9]_*.js" ) , $this->additioanlJSFiles );
    sort ( $cssFiles );
    sort ( $jsFiles );
    $tArray = [ &$cssFiles , &$jsFiles ];
    array_walk ( $tArray , function ( &$k1 )
    {
      array_walk ( $k1 , function ( &$k )
      {
        $k = $k . "?hash=" . md5_file ( $k );
      } , ARRAY_FILTER_USE_BOTH
      );
    } , ARRAY_FILTER_USE_BOTH
    );
    //$jsFiles[] = $this->jaxonJS;
    return array_merge ( $array , [ "cssArray" => $cssFiles , "jsArray" => $jsFiles ] );
  }
  
  /**
   * Injecting logger into the DI container
   * @return \Index
   */
  private function injectLogger ()  : Index
  {
    $this->slimDIContainer[ "logger" ] = function ( $c )
    {
      $file_handler = new \Monolog\Handler\StreamHandler( './logs/app.log' );
      $logger       = ( new SMonolog( 'logger' ) )->pushHandler ( $file_handler );
      return $logger;
    };
    return $this;
  }
  
  /**
   * Injecting the DB connection into DI Container
   * @return $this
   */
  private function injectDBConnection () : Index
  {
    $this->slimDIContainer[ 'db' ] = function ( $c )
    {
      $hostname = $this->slimConfig->{"mysql.host"};
      $database = $this->slimConfig->{"mysql.db"};
      $username = $this->slimConfig->{"mysql.username"};
      $password = $this->slimConfig->{"mysql.password"};
      
      $pdo = new PDO( "mysql:host={$hostname};dbname={$database}" , $username , $password );
      $pdo->setAttribute ( PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION );
      $pdo->setAttribute ( PDO::ATTR_DEFAULT_FETCH_MODE , PDO::FETCH_ASSOC );
      return $pdo;
    };
    return $this;
  }
  
  
  /**
   * Jaxon preparation and injection into DI Container.
   * @return $this
   */
  private function injectJaxon ()  : Index
  {
    $jaxon = jaxon ();
    $jaxon->setOption ( "core.prefix.function" , "Func" );
    $jaxon->setOption ( "core.prefix.class" , "" );
    $jaxon->register ( Jaxon::CALLABLE_OBJECT , new JxClass() );
    try
    {
      $jaxon->processRequest ();
    }
    catch ( \Jaxon\Exception\Error $e )
    {
      $this -> mydie ( "Jaxon init error: ". error_get_last () );
    }
    $this->jaxonScript = $jaxon->getScript ();;
    $this->jaxonJS     = explode ( "\"" , explode ( "src=\"" , $jaxon->getJS () )[ 1 ] )[ 0 ];
    $this->jaxonScript = explode ( "\n" , $this->jaxonScript );
    $this->jaxonScript = array_filter ( $this->jaxonScript , function ( $v )
    {
      return strpos ( $v , "<script" ) === FALSE && strpos ( $v , "</script" ) === FALSE;
    } );
    $this->jaxonScript = implode ( "\n" , $this->jaxonScript );
    if ( ! file_exists ( ( $jaxonScriptFName = "./tmp/" . ( $md5 = md5 ( $this->jaxonScript ) ) . ".js" ) ) )
    {
      file_put_contents ( $jaxonScriptFName , $this->jaxonScript );
    }
    $this->setJaxonMD5 ( $md5 );
    $this->slimDIContainer[ 'jaxon' ] = function ( $c , $jaxon )
    {
      return $jaxon;
    };
    return $this;
  }
  
  /**
   * Injecting template engine into DI Container
   *
   * @return $this
   */
  private function injectTwig () :  Index
  {
    $this->slimDIContainer[ 'view' ] = function ( $c )
    {
      $templates = __DIR__ . '/templates/';
      $cache     = __DIR__ . '/tmp/views/';
      return new Slim\Views\Twig( $templates , compact ( 'cache' ) );
    };
    return $this;
  }
  
  /**
   * @return null
   */
  public function getDebug ()
  {
    return $this->debug;
  }
  
  /**
   * @param null $debug
   */
  public function setDebug ( $debug ) : void
  {
    $this->debug = $debug;
  }
  
  /**
   * Just technical
   * @return $this
   */
  private function injectHelper ()
  {
    $this->slimDIContainer[ "hints" ] = function ()
    {
      return new \HinterClass\Classes\HintsClass();
    };
    return $this;
  }
  
  /**
   * @return mixed
   */
  public function getJaxonMD5 ()
  {
    return $this->jaxonMD5;
  }
  
  /**
   * @param mixed $jaxonMD5
   */
  public function setJaxonMD5 ( $jaxonMD5 ) : void
  {
    $this->jaxonMD5 = $jaxonMD5;
  }
  
  private function getDefaultTwigVariables () : array
  {
    return self::EXTRA_SCRIPT_PLACEHOLDER;
  }
}
  

$config = new Config ();
$config->loadConfigFile ( CONFIG_FILE );

$portal = new Index( $config );

print $portal;









//d($config);
//$config("slim.assets_base");


/* try { ::} catch ( \Slim\Exception\NotFoundException $e )::{::print "ERROR#1: ";::var_dump ( $e );::} catch ( \Slim\Exception\MethodNotAllowedException $e )::{::print "ERROR#2: ";::var_dump ( $e );::} catch ( Exception $e )::{::print "ERROR#3: ";::var_dump ( $e );::}*/

