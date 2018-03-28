//TODO: Need to be fixed for Internet Explorer...
//#@formatter:off
var thisFileName = gsc__ ();function gsc__ () {function failSafe () {try {var s = document.getElementsByTagName ( "script" );var f2 = (document.currentScript || s[ s.length - 1 ]).src;return "2:" + f2.split ( "/" ).pop ();} catch ( e ) {return "unknown";}}try {var er = new er () , source , l = new RegExp ( /.+\/(.*?):\d+(:\d+)*$/ ) , c = new RegExp ( /getScriptName \(.+\/(.*):\d+:\d+\)/ );if ( (source = l.exec ( er.stack.trim () )) && source[ 1 ] != "" ) {return source[ 1 ];} else if ( (source = c.exec ( er.stack.trim () )) ) {return source[ 1 ];} else if ( er.fileName !== undefined ) {return er.fileName;}return failSafe ();} catch ( e ) {return failSafe ();}}
//#@formatter:on

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
// ▓▓                                                   ▓▓
// ▓▓     @thisFileName global has been created! */     ▓▓
// ▓▓                                                   ▓▓
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓


var larryCompleted = false;

function initLarry ()
{
    if ( typeof larryCompleted !== undefined && larryCompleted !== true )
    {
        larryCompleted = true;
        //...on ready
        //...
        //...
        //...
    }
}

$ ( document ).ready ( initLarry );
$ ( window ).on ( "load" , initLarry );


/*
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 */





var siSoVerbose = false;
var siSoSlowingRatio = 1;
var alrt3_stopper1 = 0;
var so_ison = true;

// function cutOutString ( bigStr , str1 , str2  , returnComplementer  , nestingLevel = 0 )
// {
//     str2 = typeof str2 === "undefined" ? str1 : str2 ;
//     returnComplementer = typeof returnComplementer === "undefined" ? null : returnComplementer ;
//     nestingLevel = typeof nestingLevel === "undefined" ? null : nestingLevel ;
//     cutOutString.complementer = typeof cutOutString.complementer === "undefined" ? "" : cutOutString.complementer ;
//     if ( is_array ( bigStr ) )
//     {
//         foreach ( bigStr as key => element )
//         {
//             bigStr[ key ] = self::cutOutString ( element , str1 , str2 , returnComplementer , nestingLevel + 1 );
//         }
//         currentComplementer = complementer;
//         complementer        = nestingLevel === 0 ? "" : complementer;
//
//         return returnComplementer === FALSE ? bigStr : currentComplementer;
//     }
//     toReplace    = str1 . self::getStringBetween ( bigStr , str1 , str2 ) . str2;
//     complementer .= toReplace;
//     if ( mb_strpos ( ( bigStr = str_replace ( toReplace , "" , bigStr ) ) , str1 ) !== FALSE )
//     {
//         return self::cutOutString ( bigStr , str1 , str2 , returnComplementer , nestingLevel + 1 );
//     }
//     currentComplementer = complementer;
//     complementer        = nestingLevel === 0 ? "" : complementer;
//
//     return returnComplementer === FALSE ? bigStr : currentComplementer;
// }

function findElementsByCss ( css , defaultNotToShow , defaultNotToShow2 )
{
    uf = -1;
    $ ( "*" ).each ( function ( i )
                     {
                         vall = $ ( this ).css ( css );
                         if ( strlen ( vall !== 0 ) )
                         {
                             value = vall;
                             if ( value === defaultNotToShow ){return;
                             }
                             if ( value === defaultNotToShow2 ){return;
                             }
                             id = $ ( this ).idh ();
                             if ( id === "#undefined" )
                             {
                                 uf++;
                                 id = id + uf;
                                 thisid = generateID ( $ ( this ) );
                                 parentid = $ ( this ).parent ().idh ();
                                 grandparentid = $ ( this ).parent ().parent ().idh ();
                                 id = id + " (parent:" + parentid + "/" + grandparentid + ") => " + thisid;
                             }
                             s = id + "::" + css + "::" + value;
                             console.log ( s );
                         }
                     } );
}

function errorFinder ()
{
    //allCzucc = $('body').html()
    fullSource = new XMLSerializer ().serializeToString ( document );
    if ( strpos ( fullSource , "Filename:" ) !== FALSE && strpos ( fullSource , "Line Number:" ) !== FALSE && strpos ( fullSource , "Message:" ) !== FALSE )
    {
        pos = strpos ( fullSource , "Message:" );
        copied = substr ( fullSource , pos , 999999 );

        $ ( 'body' ).html ( "<textarea id=hiddenErrorTA1 style='background-color:#ffffaa;width:100%;height:calc(100%);'></textarea>" );
        $ ( '#hiddenErrorTA1' ).val ( copied );
        //$('#hiddenErrorTA1').val(html_entity_decode(copied));

    }
}


// comparing 2 strings not too strictly.... case sensitivity and control characters don't matter!
function isLazyEqual ( s1 , s2 )
{
    s1 = trim ( strtoupper ( str_replace ( [ " " , " " , "'" , chr ( 10 ) , chr ( 13 ) , chr ( 9 ) , chr ( 0 ) ] , [ "" , "" , '"' , "" , "" , "" , "" ] , trim ( s1 ) ) ) );
    s2 = trim ( strtoupper ( str_replace ( [ " " , " " , "'" , chr ( 10 ) , chr ( 13 ) , chr ( 9 ) , chr ( 0 ) ] , [ "" , "" , '"' , "" , "" , "" , "" ] , trim ( s2 ) ) ) );
    return s1 === s2;
}

function dateObjectToString ( dateObj )
{
    return dateObj.toISOString ().substring ( 0 , 10 );
}




function mb_hex2bin( str )
{
    return utf8_decode(hex2bin(str));
}

function mb_bin2hex (str )
{
    return bin2hex(utf8_encode(str));
}

function getmicrotime()
{
    return microtime();
}

function alrt3_start_stopper ()
{
    alrt3_stopper1 = getmicrotime ();
}

function alrt3_reset_stopper ()
{
    bsstop2 = getmicrotime ();
    tkime = bsstop2 - alrt3_stopper1;
    truntime = round ( tkime * 100 ) / 100;
    alrt3_stopper1 = getmicrotime ();
    return round ( truntime , 2 );
}

function alrt3_get_stopper ()
{
    bsstop2 = getmicrotime ();
    tkime = bsstop2 - alrt3_stopper1;
    truntime = round ( tkime * 100 ) / 100;
    retval = round ( tkime , 3 );
    retval += strlen ( retval ) < 6 ? "0" : "";
    retval += strlen ( retval ) < 6 ? "0" : "";
    retval += strlen ( retval ) < 6 ? "0" : "";
    retval += strlen ( retval ) < 6 ? "0" : "";
    retval += strlen ( retval ) < 6 ? "0" : "";
    return retval;
}

function alrt3_stop_stopper ()
{
    bsstop2 = getmicrotime ();
    tkime = bsstop2 - alrt3_stopper1;
    truntime = round ( tkime * 100 ) / 100;
    return round ( truntime , 2 );
}

function alrt3_alert_stopper ()
{
    bsstop2 = getmicrotime ();
    tkime = bsstop2 - alrt3_stopper1;
    truntime = round ( tkime * 100 ) / 100;
    return round ( truntime , 2 );
}


var alert3_linecounter = 0;
var alert3_lastline = "-----------------";
var alert3_repnumcounter = 1;
var alert3_repnumcountermax = 50;
var alert3_maxlines = 30000;
var alert3_initede = false;

function alert3cls ()
{
    $ ( '#alert3_divv' ).remove ();
    alert3 ( '#CLS - screen cleared' );
}

var siArrayRunnable = [];
var siArrayIntervals = [];
var siArrayRunCounts = [];


function si ( p1 , p2 )
{
    if ( typeof p2 === 'undefined' || p2 === '' )
    {
        p2 = 1;
    }
    if ( in_array ( p1 , siArrayRunnable ) )
    {
        i = array_search ( p1 , siArrayRunnable );
        siArrayIntervals[ i ] = p2;
        siArrayRunCounts [ i ]++;
        return;
    }
    array_push ( siArrayRunnable , p1 );
    array_push ( siArrayIntervals , p2 );
    array_push ( siArrayRunCounts , 0 );
    i = count ( siArrayRunnable ) - 1;
    setInterval ( p1 , p2 * siSoSlowingRatio );
    setInterval ( "sipoll(" + i + ")" , p2 * siSoSlowingRatio );
}

function sipoll ( i )
{
    siArrayRunCounts[ i ]++;
    if ( siSoVerbose )
    {
        alert3 ( "SI:" + siArrayRunCounts + ":" + siArrayRunnable[ i ] );
        console.log ( "SI:" + siArrayRunCounts + ":" + siArrayRunnable[ i ] );
    }
}

function son ()
{
    so_ison = true;
}

function soff ()
{
    so_ison = false;
}


function so ( p1 , p2 )
{

    /*
     if (strpos ( p1, "launchClock" ) !== false ) return;
     if (strpos ( p1, "arrangeTaskBoxes_core" ) !== false ) return;
     if (strpos ( p1, "ToDescs" ) !== false ) return;
     if (strpos ( p1, "arrangeDevBoxes_core" ) !== false ) return;
     */

    if ( typeof p2 == 'undefined' )
    {
        p2 = 500;
    }
    if ( so_ison === true )
    {
        if ( siSoVerbose )
        {
            if ( !is_string ( p1 ) )
            {
                alert3 ( 'cannot log function! unknown' );
                console.log ( 'cannot log function! unknown' );
            }
            else
            {
                alert3 ( "SO : ( " + p2 + " ) : " + p1 );
                console.log ( "SO:" + p1 );
            }
        }

        if ( strpos ( p2 , "," ) === false )
        {

            if ( is_string ( p2 ) === false )
            {
                p2 = p2 + "";
            }
            if ( ctype_digit ( p2 ) === false )
            {
                return;
            }
            p2 = parseInt ( p2 , 10 );
            setTimeout ( p1 , p2 * siSoSlowingRatio );
            return;
        }
        p2 = explode ( "," , p2 );
        for ( I = 0 ; I < count ( p2 ) ; I++ )
        {
            p2[ I ] = parseInt ( p2[ I ] , 10 );
            setTimeout ( p1 , p2[ I ] * siSoSlowingRatio );
        }
    }
}


function alert3 ( str , str2 , str3 , str4 , str5 , htmlallowed )
{
    if ( alert3_initede === false )
    {
        alrt3_start_stopper ();
        alert3_initede = true;
    }
    emptinesss = false;
    if ( (!(typeof str == 'undefined')) && (is_string ( str )) && (strlen ( str ) === 0) )
    {
        str = "<span style='opacity:0.3'>&lt;empty string&gt;</span>";
        emptinesss = true;
    }
    /* # @formatter:off */
    if ( typeof str == 'undefined' ) str = 'MYNULL';
    if ( typeof htmlallowed == 'undefined' ) htmlallowed = false;
    if ( typeof str == 'undefined' ) str = '';
    if ( typeof str2 == 'undefined' ) str2 = '';
    if ( typeof str3 == 'undefined' ) str3 = '';
    if ( typeof str4 == 'undefined' ) str4 = '';
    if ( typeof str5 == 'undefined' ) str5 = '';
    if ( str === true ) str = "''(true)''";
    else if ( str === false ) str = "''(false)''";
    if ( str2 === true ) str2 = "''(true)''";
    else if ( str2 === false ) str2 = "''(false)''";
    if ( str3 === true ) str3 = "''(true)''";
    else if ( str3 === false ) str3 = "''(false)''";
    if ( str4 === true ) str4 = "''(true)''";
    else if ( str4 === false ) str4 = "''(false)''";
    if ( str5 === true ){str5 = "''(true)''";
    }else if ( str5 === false ){str5 = "''(false)''";
    }
    if ( str2 != '' ){str += ' ; ' + str2;
    }
    if ( str3 != '' ){str += ' ; ' + str3;
    }
    if ( str4 != '' ){str += ' ; ' + str4;
    }
    if ( str5 != '' ){str += ' ; ' + str5;
    }
    /* # @formatter:on */
    if ( !htmlallowed ){if ( emptinesss === false ){str = str_replace ( '<' , '&lt;' , str );
    }
    }
    if ( !htmlallowed ){if ( emptinesss === false ){str = str_replace ( '>' , '&gt;' , str );
    }
    }
    str = str_replace ( "<br>" , "<br>\\n" , str );
    if ( strlen ( str ) !== strlen ( trim ( str ) ) )
    {
        str = str_replace_onlythelast ( " " , "·" , str );
        str = str_replace_onlyiffirst ( " " , "·" , str );
    }
    {
        if ( object_exists ( 'alert3_divv' ) === false ){$ ( 'body' ).append ( "<div id=alert3_divv oncontextmenu='$(this).hide()'><b id=myalerttitle1 style='color:yellow;letter-spacing:2px;'>ALERT3:</b><br><br></div>" );
        }
    }
    {

        $ ( '#alert3_divv' ).append ( "<div ondblclick=\"alert2($(this).html())\" style='white-space:wrap; break-word:break-all'><span style='color:black;'><span style='color:green;'>" + alrt3_get_stopper () + "s </span>#" + alert3_linecounter + "</span> <span style='background-color:rgba(255,255,255,0.3)'>" + str + "</span><span style='color:#d5d5d5;' id='lncntr" + alert3_linecounter + "'</div>" );
        alert3_repnumcounter = 1;
        $ ( '#alert3_divv' ).animate ( { scrollTop : 999999999 } , "slow" );
    }
    alert3_lastline = str;
    $ ( '#alert3_divv' ).show ().draggable ().resizable ();
    alert3_linecounter++;
    if ( alert3_linecounter > alert3_maxlines ){$ ( '#alert3_divv' ).remove ();
    }
}


function px2int ( px2int )
{
    px2int = typeof px2int === "undefined" ? "0" : px2int;
    try
    {
        px2int = parseInt ( str_ireplace ( "px" , "" , px2int ) );
    }
    catch ( e )
    {
        return 0;
    }
    px2int = isNaN ( px2int ) ? "0" : px2int;
    return parseInt ( px2int , 10 );
}

function conlog ( str1 , str2 , str3 , str4 , str5 , str6 , str7 , str8 )
{
    if ( typeof str1 === 'undefined' )
    {
        //console.log("Null given");
    }
    else
    {
        console.log ( str1 );
    }
    if ( typeof str2 !== 'undefined' ){console.log ( str2 );
    }
    if ( typeof str3 !== 'undefined' ){console.log ( str3 );
    }
    if ( typeof str4 !== 'undefined' ){console.log ( str4 );
    }
    if ( typeof str5 !== 'undefined' ){console.log ( str5 );
    }
    if ( typeof str6 !== 'undefined' ){console.log ( str6 );
    }
    if ( typeof str7 !== 'undefined' ){console.log ( str7 );
    }
    if ( typeof str8 !== 'undefined' ){console.log ( str8 );
    }
    //console.log("-");
}


function ismail ( s )
{
    if ( s.search ( /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/ ) != -1 ){return true;
    }else {return false;
    }
}

var objecloadonid = false;

// Load on
var isLoadOn = false;

function lon ( timer )
{
    isLoadOn = true;
    if ( typeof timer === undefined ){timer = 500;
    }
    timer = !is_numeric ( timer ) ? 500 : timer;
    $ ( '#loadIconDiv1' ).animate ( { 'opacity' : 1 } , timer ).dequeue ();
    $ ( '#loadIconDiv1' ).fadeIn ( timer ).dequeue ();
    $ ( '#hiderLayer1' ).fadeIn ( timer ).dequeue ();
    hueRotation ();
}

function lON(timer)
{
    lon(timer);
}

function lOn(timer)
{
    lon(timer);
}


// Load on - light version = without layer
function lonlight ( timer )
{
        isLoadOn = true;
        if ( typeof timer === undefined ){timer = 500;
        }
        timer = !is_numeric ( timer ) ? 500 : timer;
        $ ( '#loadIconDiv1' ).animate ( { 'opacity' : 1 } , timer ).dequeue ();
        $ ( '#loadIconDiv1' ).fadeIn ( timer ).dequeue ();
        $ ( '#hiderLayer1' ).fadeOut ( timer ).dequeue ();
        hueRotation ();

}


function lon_core ( objectid )
{
    //$('#loadIconDiv1').animate ( { 'opacity' : 1 } , 500 ).dequeue ();
    //$('#loadIconDiv1').fadeIn(500).dequeue();
    if ( (typeof objectid === "undefined") || (objectid === "undefined") ){$.LoadingOverlay ( "show" );
    }else
    {
        if ( is_string ( objectid ) === true )
        {
            objectid = strpos ( objectid , "#" ) !== 0 ? "#" + objectid : objectid;
            objecloadonid = $ ( objectid );
        }
        objecloadonid = $ ( objectid );
        $ ( objecloadonid ).LoadingOverlay ( "show" );
    }
}

var lon_hue = 0;
var hueRotator = 0;

function hueRotation ()
{
    if ( hueRotator !== 0 ){return;
    }
    hueRotator++;
    lon_hue = lon_hue > 360 ? 0 : lon_hue + 11;

    $ ( '#loadIconDiv1' ).css ( { filter : 'hue-rotate(' + lon_hue + 'deg) saturate(800%)' } );
    if ( isvis ( '#loadIconDiv1' ) === false )
    {
        hueRotator--;
        return;
    }
    so ( "hueRotator--;hueRotation();" , 50 );
}

function lonold ()
{
    lon ();

}

var skipALoadoff = 0 ;

function loff ()
{
    if (skipALoadoff === 0)
    {
        isLoadOn = false;
        $ ( '#loadIconDiv1' ).fadeOut ( 500 ).dequeue ();
        $ ( '#hiderLayer1' ).fadeOut ( 500 ).dequeue ();
        $ ( '.loadiconClass' ).animate ( { opacity : '0' } , 500 ).dequeue ();
    }
    else
    {
        skipALoadoff--;
    }
}

function lOff()
{
    loff();
}

function lOFF()
{
    loff();
}

function isvis ( objid )
{
    if ( is_string ( objid ) ){return ($ ( str_replace ( '##' , '#' , '#' + objid ) ).is ( ':visible' ));
    }else {return $ ( objid ).is ( ':visible' );
    }
}

function object_exists ( obj )
{
    try
    {
        origobj = obj;
        if ( is_string ( obj ) ){obj = $ ( str_replace ( '##' , '#' , '#' + obj + '' ) );
        }
        return $ ( obj ).object_exists ();
    } catch ( e )
    {
    }
}

function dump_object( objid )
{
    str = $(objid).getStyleObject()    ;
    str = array_filter ( str, function (k,v) { if (stripos (v,"webkit")!==false)  return false; else return true; },"ARRAY_FILTER_USE_BOTH")
    ksort(str);
    str=print_r(str,true);
    console.log(str);
    str = str_replace ("\n","<br>",str) ;
    alert3(str,null,null,null,null,true);
}

/*############################################
 ## GENERATES ID FOR IDLESS HTML ELEMENTS...
 #############################################*/
function generateID ( $ )
{
    thisid = $.prop ( 'id' );
    if ( strlen ( thisid ) === 0 )
    {
        thisid = "GenID_" + str_pad ( generateID_counter + "" , 4 , "0" , STR_PAD_LEFT );
        generateID_counter++;
        $.prop ( 'id' , thisid );
    }
    return thisid;
}


function my_isset ( varname )
{
    result = -1;
    eval ( "result = typeof " + varname + " === 'undefined'; " );
    return !result;
}

var vardebugArray = [];

function vardebug ( varname , id )
{
    if ( typeof(id) === "undefined" )
    {
        if ( in_array ( varname , vardebugArray ) )
        {
            return;
        }
        id = "var_" + mt_rand ( 1 , 1000 );
        posx = mt_rand ( 1 , 500 );
        posy = mt_rand ( 1 , 500 );
        r = mt_rand ( 1 , 80 );
        g = mt_rand ( 1 , 80 );
        b = mt_rand ( 1 , 80 );
        color = "rgb(" + r + "," + g + "," + b + ")";
        $ ( 'body' ).append ( "<div id='" + id + "' class=vardebug1 style='background-color:" + color + ";left:" + posx + "px;top:" + posy + "px'></div>" );
        $ ( '#' + id ).draggable ();
        array_push ( vardebugArray , varname );
    }
    varData = "?!";
    try
    {
        eval ( "try{varData = " + varname + ";} catch(e) {}" );
    } catch ( e )
    {
    }
    $ ( '#' + id ).html ( "<i>varname:</i><br><span style='color:#ffffff'>" + varname + "</span><br><br><i>value:</i><br><span style='color:#ffffff'> " + varData + "</span><br><br><i>type:</i><br><span style='color:#ffffff'>" + gettype(varData) +"</span>");
    sozni = "vardebug(\"" + varname + "\",\"" + id + "\")";
    so ( sozni , 50 );
}


function nop ( paramOfSilence )
{

}

function str_replace_first ( search , rep , str , limit )
{
    if ( typeof limit == "undefined" )
    {
        limit = 1;
    }
    if ( is_bool ( pos = (strpos ( str , search )) ) )
    {
        return str;
    }
    search_len = strlen ( search );
    for ( i = 0 ; i < limit ; i++ )
    {
        str = substr_replace ( str , rep , pos , search_len );
        if ( is_bool ( pos = (strpos ( str , search )) ) )
        {
            break;
        }
    }
    return str;
}

function parseInt2 ( aaa )
{
    return parseInt ( aaa , 10 );
}


function explode_get0 ( c , str )
{
    str = explode ( c , str );
    return (str[ 0 ] + "" == "undefined" ? "" : str[ 0 ]);
}

function explode_get1 ( c , str )
{
    str = explode ( c , str );
    return (str[ 1 ] + "" == "undefined" ? "" : str[ 1 ]);
}

function explode_get2 ( c , str )
{
    str = explode ( c , str );
    return (str[ 2 ] + "" == "undefined" ? "" : str[ 2 ]);
}

function explode_get3 ( c , str )
{
    str = explode ( c , str );
    return (str[ 3 ] + "" == "undefined" ? "" : str[ 3 ]);
}

function explode_get4 ( c , str )
{
    str = explode ( c , str );
    return (str[ 4 ] + "" == "undefined" ? "" : str[ 4 ]);
}

function explode_get5 ( c , str )
{
    str = explode ( c , str );
    return (str[ 5 ] + "" == "undefined" ? "" : str[ 5 ]);
}

function explode_get6 ( c , str )
{
    str = explode ( c , str );
    return (str[ 6 ] + "" == "undefined" ? "" : str[ 6 ]);
}

function explode_getlast ( c , str )
{
    str = explode ( c , str );
    countt = count ( str ) - 1;
    //count=str.length;
    return (str[ countt ]);
}

function myparseInt ( x )
{
    try
    {
        retval = parseInt ( x );
    } catch ( e )
    {
        retval = 0;
    }
    if ( isNaN ( retval ) )
    {
        retval = 0;
    }
    return retval;
}

function myparseFloat ( x )
{
    try
    {
        retval = parseFloat ( x );
    } catch ( e )
    {
        retval = 0;
    }
    if ( isNaN ( retval ) )
    {
        retval = 0;
    }
    return retval;
}

function crop_after ( sstring , cchar )
{
    posika = strpos ( sstring , cchar );
    if ( posika === false )
    {
        return (sstring);
    }
    return (substr ( sstring , 0 , posika ));
}

function leadstr ( leaderchar , maxlength , str )
{
    str += '';
    if ( strlen ( str ) >= maxlength )
    {
        return (str);
    }
    str = leadstr ( leaderchar , maxlength , leaderchar + str );
    return (str);
}

var koh_mystack = new Array ();

function push ( value )
{
    array_push ( koh_mystack , value );
}

function pop ()
{
    return array_pop ( koh_mystack );
}

function time2stamp ( d )
{
    //YY.HH.NN OO:PP:MM
    date = trim ( d );
    if ( strlen ( date ) <= 11 )
    {
        date += " 13:00:00";
    }
    date = str_replace ( "-" , "." , date );
    date = explode ( " " , date );
    timi = date[ 1 ];
    date = date[ 0 ];
    date = explode ( "." , date );
    timi = explode ( ":" , timi );
    stamp = mktime ( timi[ 0 ] , timi[ 1 ] , timi[ 2 ] , date[ 1 ] , date[ 2 ] , date[ 0 ] );
    return stamp;
}

function str_replace_until ( mit , mire , hol )
{
    db = 0;
    len1 = strlen ( hol );
    hol = str_replace ( mit , mire , hol );
    if ( strlen ( hol ) != len1 )
    {
        return str_replace_until ( mit , mire , hol );
    }
    else
    {
        return hol;
    }
}

function reu ( mit , mire , hol )
{
    return str_replace_until ( mit , mire , hol );
}

function replace_until ( mit , mire , hol )
{
    return str_replace_until ( mit , mire , hol );
}

function str_replace_first ( search , replace , string , limit )
{
    if ( typeof limit === 'undefined' )
    {
        limit = 1;
    }
    if ( is_bool ( pos = (strpos ( string , search )) ) )
    {
        return string;
    }
    search_len = strlen ( search );
    for ( i = 0 ; i < limit ; i++ )
    {
        string = substr_replace ( string , replace , pos , search_len );
        if ( is_bool ( pos = (strpos ( string , search )) ) )
        {
            break;
        }
    }
    return string;
}

function str_replace_last ( search , replace , subject )
{
    pos = strrpos ( subject , search );
    if ( pos !== false )
    {
        subject = substr_replace ( subject , replace , pos , strlen ( search ) );
    }
    return subject;
}

function time2 ()
{
    return Math.floor ( new Date ().getTime () / 1000 );
}

function var_dump2 ( m , b , a )
{
    var t = ((Object.prototype.toString.call ( a ) === "[object Array]" || Object.prototype.toString.call ( a ) === "[object Object]") ? a : {
        string    : "String" ,
        array     : "Array" ,
        float     : "Float" ,
        integer   : "Integer" ,
        object    : "Object" ,
        NaN       : "NaN" ,
        undefined : "Undefined" ,
        null      : "Null" ,
        function  : "Func" ,
        xml       : "XML" ,
        boolean   : "Bool"
    });
    var i = (typeof m);
    var o = '';
    if ( m === null || m + '' === 'NaN' )
    {
        o += t[ m + '' ];
    }
    else if ( i == 'object' || i == 'xml' )
    {
        var tmp = Object.prototype.toString.call ( m ).slice ( 8 , -1 );
        o += ((tmp === "Array") ? t[ 'array' ] : t[ 'object' ] + " " + tmp) + ((m.length === undefined) ? '' : '(' + m.length + ')');
        if ( !b && (m.length > 0) )
        {
            o += '{';
            for ( var k in m )
            {
                o += (" [" + k + "] => " + var_dump ( m[ k ] , false , a ) + ",");
            }
            o = o.slice ( 0 , -1 ) + '}';
        }
    }
    else if ( i == 'undefined' || i == 'function' )
    {
        o += t[ i ];
    }
    else
    {
        i = ((i === "number") ? ((((m + '').indexOf ( "." ) == -1) ? 'integer' : 'float')) : i);
        o += t[ i ] + ((i === 'boolean') ? '(' + m + ')' : ((i == 'integer' || i == 'float') ? '(' + m + ')' : '(' + (m.length) + ') \"' + m + '\"'));
    }
    return o;
}


function secToTime ( timeVar , cropZeroSeconds )
{
    cropZeroSeconds = typeof cropZeroSeconds === 'undefined' ? false : cropZeroSeconds;
    seconds = timeVar % 60;
    minutes = floor ( timeVar / 60 );
    minutes = minutes % 60;
    hours = floor ( timeVar / 60 / 60 );
    hours = hours % 24;
    days = parseInt ( floor ( timeVar / 60 / 60 / 24 ) , 10 );
    seconds = ":" + ( parseInt ( seconds , 10 ) < 10 ? "0" : "" ) + seconds;
    seconds = cropZeroSeconds && seconds === ":00" ? "" : seconds;
    minutes_ = minutes;
    minutes = (parseInt ( minutes , 10 ) < 10 ? "0" : "") + minutes;
    hours = (parseInt ( hours , 10 ) < 10 ? "0" : "") + hours;
    return days === 0 ? ( hours + ":" + minutes + seconds ) : ( days + "d " + hours + ":" + minutes + seconds );
}

function timeToSec ( timeVar )
{
    timeVar = trim ( strip_tags ( timeVar ) );
    if ( substr_count ( timeVar , ":" ) === 2 )
    {
        timeVar = timeVar + ":00";
    }
    if ( strpos ( timeVar , "d" ) === false )
    {
        timeVar = "0d " + timeVar;
    }
    timeVar = str_replace ( "d" , ":" , timeVar );
    timeVar = explode ( ":" , timeVar );
    sec = parseInt ( timeVar [ 0 ] * 24 * 60 * 60 , 10 ) + parseInt ( timeVar [ 1 ] * 60 * 60 , 10 ) + parseInt ( timeVar [ 2 ] * 60 , 10 ) + parseInt ( timeVar [ 3 ] , 10 );

    return sec;
}

function randomstring ( length , i )
{
    if ( typeof i == 'undefined' )
    {
        i = 0;
    }
    rep = "0123456789qwertzuiopasdfghjklyxcvbnm";
    return i >= length ? "" : rep [ mt_rand ( ( i === 0 && strpos ( rep , "0123456789" ) ? 10 : 0 ) , strlen ( rep ) - 1 ) ] + randomstring ( length , i + 1 );
}

function isValidDateTime( s )
{
    if ( typeof s == 'undefined' )
    {
        return false;
    }
    validDate = isvaliddate( explode (" ",s)[0] );
    validTime = isValidTime( explode (" ",s)[1] );
    return validDate && validTime;
}

function isValidTime(s)
{
    s = explode (":",s);
    return parseInt(s[0],10)>=0 && parseInt(s[0],10)<24  && parseInt(s[1],10)>=0   && parseInt(s[1],10)<60 && parseInt(s[2],10)>=0   && parseInt(s[2],10)<60;
}

function isvaliddate ( s )
{
    if ( typeof s == 'undefined' )
    {
        return false;
    }
    try
    {
        s = str_replace ( "-" , "." , s );
        var bits = s.split ( '.' );
        var y = bits[ 0 ] , m = bits[ 1 ] , d = bits[ 2 ];
        var daysInMonth = [ 31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31 ];
        if ( (!(y % 4) && y % 100) || !(y % 400) )
        {
            daysInMonth[ 1 ] = 29;
        }
        if ( d === 0 )
        {
            return false;
        }
        if ( y < 1900 )
        {
            return false;
        }
        return d <= daysInMonth[ --m ];
    }
    catch ( e )
    {
        return false;
    }
}

function str_replace_onlythelast ( search , replace , subject )
{
    if ( strpos_last ( subject , search ) )
    {
        return str_replace_last ( search , replace , subject );
    }
    return subject;
}

function str_replace_onlyiffirst ( search , replace , subject )
{
    return str_replace_onlythefirst ( search , replace , subject );
}

function str_replace_onlythefirst ( search , replace , subject )
{
    if ( strpos ( subject , search ) === 0 )
    {
        return str_replace_first ( search , replace , subject );
    }
    return subject;
}


function strpos_last ( s , f )
{
    if ( substr ( s , -1 * strlen ( f ) ) == f )
    {
        return true;
    }
    else
    {
        return false;
    }
}


function getCSS ( el )
{
    var style = window.getComputedStyle ( el );
    return Object.keys ( style ).reduce ( function ( acc , k )
                                          {
                                              var name  = style[ k ] ,
                                                  value = style.getPropertyValue ( name );
                                              if ( value !== null )
                                              {
                                                  acc[ name ] = value;
                                              }
                                              return acc;
                                          } , {} );
};

function css ( a )
{
    var sheets = document.styleSheets , o = {};
    for ( var i in sheets )
    {
        var rules = sheets[ i ].rules || sheets[ i ].cssRules;
        for ( var r in rules )
        {
            if ( a.is ( rules[ r ].selectorText ) )
            {
                o = $.extend ( o , css2json ( rules[ r ].style ) , css2json ( a.attr ( 'style' ) ) );
            }
        }
    }
    return o;
}

function css2json ( css )
{
    var s = {};
    if ( !css )
    {
        return s;
    }
    if ( css instanceof CSSStyleDeclaration )
    {
        for ( var i in css )
        {
            if ( (css[ i ]).toLowerCase )
            {
                s[ (css[ i ]).toLowerCase () ] = (css[ css[ i ] ]);
            }
        }
    }
    else if ( typeof css == "string" )
    {
        css = css.split ( "; " );
        for ( var i in css )
        {
            var l = css[ i ].split ( ": " );
            s[ l[ 0 ].toLowerCase () ] = (l[ 1 ]);
        }
    }
    return s;
}


function keepbefore_str ( str , bigstr )
{
    pos1 = strpos ( bigstr , str );
    return pos1 !== false ? substr ( bigstr , 0 , pos1 ) : bigstr;
}


function keepafter_str ( str , bigstr )
{
    pos1 = strpos ( bigstr , str );
    return pos1 !== false ? substr ( bigstr , pos1 + strlen ( str ) , strlen ( bigstr ) ) : bigstr;
}


function getHexColorLuminance ( hexColor )
{
    hexColor = ltrim ( hexColor , "#" );
    r = 0.2126 * hexdec ( substr ( hexColor , 0 , 2 ) );
    g = 0.7152 * hexdec ( substr ( hexColor , 2 , 2 ) );
    b = 0.0722 * hexdec ( substr ( hexColor , 4 , 2 ) );

    return round ( ( r + g + b ) * ( 100 / 255 ) , 1 );
}

function getContrastYIQ ( hexColor )
{
    hexColor = stripos ( hexColor , "rgb" ) !== false ? rgb2hex ( hexColor ) : hexColor;
    hexColor = ltrim ( hexColor , "#" );
    r = hexdec ( substr ( hexColor , 0 , 2 ) );
    g = hexdec ( substr ( hexColor , 2 , 2 ) );
    b = hexdec ( substr ( hexColor , 4 , 2 ) );
    yiq = ( ( r * 299 ) + ( g * 587 ) + ( b * 114 ) ) / 1000;
    return ( yiq >= 128 ) ? 'black' : 'white';
}

function disableSelection(target){

    if (typeof target.onselectstart!="undefined") //IE route
        target.onselectstart=function(){return false}

    else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
        target.style.MozUserSelect="none"

    else //All other route (ie: Opera)
        target.onmousedown=function(){return false}

    target.style.cursor = "default"
}

function jqueryextender ()
{

    //setData => data + attr setter
    //id, idh
    //tag

    $.fn.extend ( {
                      tag : function ()
                      {
                          return this.prop("tagName");;
                      }
                  } );


    (function($){
        $.fn.getStyleObject = function(){
            var dom = this.get(0);
            var style;
            var returns = {};
            if(window.getComputedStyle){
                var camelize = function(a,b){
                    return b.toUpperCase();
                };
                style = window.getComputedStyle(dom, null);
                for(var i = 0, l = style.length; i < l; i++){
                    var prop = style[i];
                    var camel = prop.replace(/\-([a-z])/g, camelize);
                    var val = style.getPropertyValue(prop);
                    returns[camel] = val;
                };
                return returns;
            };
            if(style = dom.currentStyle){
                for(var prop in style){
                    returns[prop] = style[prop];
                };
                return returns;
            };
            return this.css();
        }
    })(jQuery);

    $.fn.extend ( {
                      setData : function ( varname, value )
                      {
                          this.data(varname, value);
                          this.attr('data-'+varname, value);
                          return this;
                      }
                  } );


    $.fn.extend ( {
                      id : function ( newid )
                      {
                          if ( typeof(newid) === "undefined" ){return this.attr ( 'id' );
                          }
                          this.prop ( 'id' , str_replace ( "#" , "" , newid ) );
                          return this.attr ( 'id' );
                      }
                  } );

    $.fn.extend ( {
                      offsetLeft : function ()
                      {
                          offSett = this.offset ();
                          return offSett.left;
                      }
                  } );

    $.fn.extend ( {
                      offsetTop : function ()
                      {
                          try
                          {
                              offSett = this.offset ();
                              return offSett.top;
                          } catch ( e )
                          {
                              return 0;
                          }
                      }
                  } );


    $.fn.extend ( {
                      addRandomId : function ()
                      {
                          return this.prop ( 'id' , "x" + mt_rand ( 1 , 100000 ) );
                      }
                  } );


    $.fn.extend ( {
                      idh : function ()
                      {
                          return "#" + this.attr ( 'id' );
                      }
                  } );


    jQuery.fn.activate = function ()
    {
        if ( ( $ ( this ).is ( 'img' ) === true) && (stripos ( this.attr ( 'src' ) , 'off' ) === false ) )
        {
            return $ ( this );
        }
        this.trigger ( 'click' );
        return $ ( this );
    };


    jQuery.fn.second = function ()
    {
        return $ ( this ).first ().next ();
    };


    jQuery.fn.selectText = function ()
    {
        return $ ( this ).each ( function ( index , el )
                                 {
                                     if ( document.selection )
                                     {
                                         var range = document.body.createTextRange ();
                                         range.moveToElementText ( el );
                                         range.select ();
                                     }
                                     else if ( window.getSelection )
                                     {
                                         var range = document.createRange ();
                                         range.selectNode ( el );
                                         window.getSelection ().addRange ( range );
                                     }
                                 } );
    };

    try
    {
        jQuery.fn.prettify = function ()
        {
            this.html ( prettyPrintOne ( this.html () ) );
        };
    } catch ( e )
    {
    }
    jQuery.fn.object_exists = function ()
    {
        return jQuery ( this ).length > 0;
    };
    $ ( window ).bind ( "pageshow" , function ( event )
    {
        if ( event.originalEvent.persisted )
        {
            window.location.reload ();
        }
    } );
    // jQuery(function ($) {
    //   $(document).mousemove(function (event) {
    //     currentMousePos.x = event.pageX;
    //     currentMousePos.y = event.pageY;
    //   });
    // });
    (function ( $ )
    {
        $.fn.extend ( {
                          slideOFF : function ( a , b )
                          {
                              return this.slideUp ( a , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          slideON : function ( a , b )
                          {
                              return this.slideDown ( a , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S0 : function ( a , b )
                          {
                              return this.slideUp ( a , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S0Q0 : function ( a , b )
                          {
                              S0Qinprogress = true;
                              return this.stop ( true , false ).slideUp ( {
                                                                              duration : 0 , queue : false , complete : function ()
                                  {
                                      S0Qinprogress = false;
                                  }
                                                                          } , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S1Q0 : function ( a , b )
                          {
                              S0Qinprogress = true;
                              return this.stop ( true , false ).slideDown ( {
                                                                                duration : 0 , queue : false , complete : function ()
                                  {
                                      S0Qinprogress = false;
                                  }
                                                                            } , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S0Q250 : function ( a , b )
                          {
                              if ( gs != 0 )
                              {
                                  S0Qinprogress = true;
                                  return this.stop ( true , true ).slideUp ( {
                                                                                 duration : 250 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                             } , b );
                              }
                              else
                              {
                                  return this.stop ( true , true ).slideUp ( {
                                                                                 duration : 0 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                             } , b );
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S0Q500 : function ( a , b )
                          {
                              if ( gs != 0 )
                              {
                                  S0Qinprogress = true;
                                  return this.stop ( true , true ).slideUp ( {
                                                                                 duration : 500 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                             } , b );
                              }
                              else
                              {
                                  return this.stop ( true , true ).slideUp ( {
                                                                                 duration : 0 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                             } , b );
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S0Q1000 : function ( a , b )
                          {
                              if ( gs != 0 )
                              {
                                  S0Qinprogress = true;
                                  return this.stop ( true , false ).slideUp ( {
                                                                                  duration : 1000 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                              } , b );
                              }
                              else
                              {
                                  return this.stop ( true , false ).slideUp ( {
                                                                                  duration : 0 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                              } , b );
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S1Q250 : function ( a , b )
                          {
                              if ( gs != 0 )
                              {
                                  S0Qinprogress = true;
                                  return this.stop ( true , true ).slideDown ( {
                                                                                   duration : 250 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                               } , b );
                              }
                              else
                              {
                                  return this.stop ( true , true ).slideDown ( {
                                                                                   duration : 0 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                               } , b );
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S1Q500 : function ( a , b )
                          {
                              if ( gs != 0 )
                              {
                                  S0Qinprogress = true;
                                  return this.stop ( true , true ).slideDown ( {
                                                                                   duration : 500 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                               } , b );
                              }
                              else
                              {
                                  return this.stop ( true , true ).slideDown ( {
                                                                                   duration : 0 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                               } , b );
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S1Q1000 : function ( a , b )
                          {
                              if ( gs != 0 )
                              {
                                  S0Qinprogress = true;
                                  return this.stop ( true , false ).slideDown ( {
                                                                                    duration : 1000 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                                } , b );
                              }
                              else
                              {
                                  return this.stop ( true , false ).slideDown ( {
                                                                                    duration : 0 , queue : false , complete : function ()
                                      {
                                          S0Qinprogress = false;
                                      }
                                                                                } , b );
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          S1 : function ( a , b )
                          {
                              return this.slideDown ( a , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          FIB0 : function ( a , b )
                          {
                              return this.dequeue ().fadeOut ( a , b ).css ( 'display' , 'inline' ).dequeue ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          FIB1 : function ( a , b )
                          {
                              return this.dequeue ().fadeIn ( a , b ).css ( 'display' , 'inline' ).dequeue ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          F0 : function ( a , b )
                          {
                              return this.fadeOut ( a , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          F1 : function ( a , b )
                          {
                              return this.fadeIn ( a , b );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          rA : function ()
                          {
                              return this.removeAttr ( 'checked' );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          tR : function ()
                          {

                              return this.trigger ( 'change' );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          F : function ()
                          {
                              return this.first ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          C : function ( a )
                          {
                              return this.children ( a );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          firstChild : function ( a )
                          {
                              return this.children ( a ).first ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          valtrim : function ( a )
                          {
                              if ( typeof a === "undefined" ){return trim ( this.val () );
                              }
                              return this.val ( trim ( a ) );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          pseudofocus : function ()
                          {
                              return '';
                          }
                      } );
    }) ( jQuery );

    (function ( $ )
    {
        $.fn.extend ( {
                          grandparent : function ()
                          {
                              return this.parent ().parent ();
                          }
                      } );
    }) ( jQuery );

    (function ( $ )
    {
        $.fn.extend ( {
                          fadein : function ()
                          {
                              return this.animate ( { opacity : 1 } );
                          }
                      } );
    }) ( jQuery );

    (function ( $ )
    {
        $.fn.extend ( {
                          fadeout : function ()
                          {
                              return this.animate ( { opacity : 0 } );
                          }
                      } );
    }) ( jQuery );


    (function ( $ )
    {
        $.fn.extend ( {
                          greatparent : function ()
                          {
                              return this.parent ().parent ().parent ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          greatgreatparent : function ()
                          {
                              return this.parent ().parent ().parent ().parent ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          O0 : function ( t )
                          {
                              if ( typeof t == "undefined" ){t = 200;
                              }
                              return this.animate ( { opacity : 0 } , t );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          O1 : function ( t )
                          {
                              if ( typeof t == "undefined" ){t = 200;
                              }
                              return this.animate ( { opacity : 1 } , t );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          htmltrim : function ()
                          {
                              return trim ( this.html () );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          selfhtml : function ( htmlToSet )
                          {
                              if ( typeof(htmlToSet) === "undefined" )
                              {
                                  retval = trim ( this.clone ().wrap ( '<p>' ).parent ().html () );
                                  retval = retval === "null" ? "" : retval;
                                  return retval;
                              }
                              this.wrap ( "<div id=tempwrapper1></div>" );
                              $ ( '#tempwrapper1' ).html ( htmlToSet );
                              this.unwrap ( "<div id=tempwrapper1></div>" );
                              return htmlToSet;
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          trimhtml : function ()
                          {
                              return trim ( this.html () );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          trimval : function ()
                          {
                              return trim ( this.val () );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          focus3s : function ()
                          {
                              if ( /*1==2*/ sec3_passed === true ){return this.focus ();
                              }else {return;
                              }
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          getmaxzindex : function ()
                          {
                              return Math.max.apply ( null , jQuery ( this ).map ( function ()
                                                                                   {
                                                                                       var z;
                                                                                       return isNaN ( z = parseInt ( jQuery ( this ).not ( ".skipfrommaxzindexfunction" ).css ( "z-index" ) , 10 ) ) ? 0 : z;
                                                                                   } ) );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          getmaxzindex_super : function ()
                          {
                              return Math.max.apply ( null , jQuery ( this ).map ( function ()
                                                                                   {
                                                                                       var z;
                                                                                       return isNaN ( z = parseInt ( jQuery ( this ).css ( "z-index" ) , 10 ) ) ? 0 : z;
                                                                                   } ) );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          getmaxzindex_visible_absolutemax : function ()
                          {
                              return $ ( '* :visible' ).getmaxzindex ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          getmaxzindex_visible_absolutemax_super : function ()
                          {
                              return $ ( '* :visible' ).getmaxzindex_super ();
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          getmaxzindex_visible : function ()
                          {
                              $ ( ".skipfrommaxzindexfunction" ).each ( function ( i )
                                                                        {
                                                                            $ ( this ).data ( 'oldzindex' , $ ( this ).css ( 'z-index' ) ).css ( 'z-index' , '1' );
                                                                        } );
                              maxzindex = -1;
                              $ ( '* :visible' ).each ( function ( i )
                                                        {
                                                            thisz = $ ( this ).css ( 'z-index' );
                                                            if ( strlen ( thisz ) > 0 ){if ( is_numeric ( thisz ) ){if ( parseInt2 ( thisz ) > maxzindex )
                                                            {
                                                                maxzindex = parseInt2 ( thisz );
                                                            }
                                                            }
                                                            }
                                                        } );
                              $ ( ".skipfrommaxzindexfunction" ).each ( function ( i )
                                                                        {
                                                                            $ ( this ).css ( 'z-index' , $ ( this ).data ( 'oldzindex' ) );
                                                                        } );
                              return maxzindex;
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          img_on2off : function ()
                          {
                              return $ ( this ).attr ( 'src' , 'valami.png' );
                          }
                      } );
    }) ( jQuery );

    jQuery.fn.autoGrow = function(options) {
        return this.each(function() {
            var settings = jQuery.extend({
                                             extraLine: true,
                                         }, options);

            var createMirror = function(textarea) {
                jQuery(textarea).after('<div class="autogrow-textarea-mirror"></div>');
                return jQuery(textarea).next('.autogrow-textarea-mirror')[0];
            }

            var sendContentToMirror = function (textarea) {
                mirror.innerHTML = String(textarea.value)
                                   .replace(/&/g, '&amp;')
                                    .replace(/"/g, '&quot;')
                                    .replace(/'/g, '&#39;')
                                    .replace(/</g, '&lt;')
                                    .replace(/>/g, '&gt;')
                                    .replace(/\n/g, '<br />') +
                                   (settings.extraLine? '.<br/>.' : '')
                ;

                if (jQuery(textarea).height() != jQuery(mirror).height())
                    jQuery(textarea).height(jQuery(mirror).height());
            }

            var growTextarea = function () {
                sendContentToMirror(this);
            }

            // Create a mirror
            var mirror = createMirror(this);

            // Style the mirror
            mirror.style.display = 'none';
            mirror.style.wordWrap = 'break-word';
            mirror.style.whiteSpace = 'pre-wrap';
            mirror.style.padding = jQuery(this).css('paddingTop') + ' ' +
                                   jQuery(this).css('paddingRight') + ' ' +
                                   jQuery(this).css('paddingBottom') + ' ' +
                                   jQuery(this).css('paddingLeft');

            mirror.style.borderStyle = jQuery(this).css('borderTopStyle') + ' ' +
                                       jQuery(this).css('borderRightStyle') + ' ' +
                                       jQuery(this).css('borderBottomStyle') + ' ' +
                                       jQuery(this).css('borderLeftStyle');

            mirror.style.borderWidth = jQuery(this).css('borderTopWidth') + ' ' +
                                       jQuery(this).css('borderRightWidth') + ' ' +
                                       jQuery(this).css('borderBottomWidth') + ' ' +
                                       jQuery(this).css('borderLeftWidth');

            mirror.style.width = jQuery(this).css('width');
            mirror.style.fontFamily = jQuery(this).css('font-family');
            mirror.style.fontSize = jQuery(this).css('font-size');
            mirror.style.lineHeight = jQuery(this).css('line-height');
            mirror.style.letterSpacing = jQuery(this).css('letter-spacing');

            // Style the textarea
            this.style.overflow = "hidden";
            this.style.minHeight = this.rows+"em";

            // Bind the textarea's event
            this.onkeyup = growTextarea;
            this.onfocus = growTextarea;

            // Fire the event for text already present
            sendContentToMirror(this);

        });
    };

    // (function ( $ )
    // {
    //     $.fn.autogrow = function ( options )
    //     {
    //         return this.filter ( 'textarea' ).each ( function ()
    //                                                  {
    //                                                      var self = this;
    //                                                      var dollar_self = $ ( self );
    //                                                      var minHeight = dollar_self.height () + 20;
    //                                                      var noFlickerPad = dollar_self.hasClass ( 'autogrow-short' ) ? 0 : parseInt ( dollar_self.css ( 'lineHeight' ) ) || 0;
    //                                                      var settings = $.extend ( {
    //                                                                                    preGrowCallback : null , postGrowCallback : null
    //                                                                                } , options );
    //                                                      var shadow = $ ( '<div></div>' ).css ( {
    //                                                                                                 position    : 'absolute' ,
    //                                                                                                 top         : -10000 ,
    //                                                                                                 left        : -10000 ,
    //                                                                                                 width       : dollar_self.width () ,
    //                                                                                                 fontSize    : dollar_self.css ( 'fontSize' ) ,
    //                                                                                                 fontFamily  : dollar_self.css ( 'fontFamily' ) ,
    //                                                                                                 fontWeight  : dollar_self.css ( 'fontWeight' ) ,
    //                                                                                                 lineHeight  : dollar_self.css ( 'lineHeight' ) ,
    //                                                                                                 resize      : 'none' ,
    //                                                                                                 'word-wrap' : 'break-word'
    //                                                                                             } ).appendTo ( document.body );
    //                                                      var update = function ( event )
    //                                                      {
    //                                                          var times = function ( string , number )
    //                                                          {
    //                                                              for ( var i = 0 , r = '' ; i < number ; i++ ){r += string;
    //                                                              }
    //                                                              return r;
    //                                                          };
    //
    //                                                          var val = self.value.replace ( /&/g , '&amp;' ).replace ( /</g , '&lt;' ).replace ( />/g , '&gt;' ).replace ( /\\n$/ , '<br/>&nbsp;' ).replace ( /\\n/g , '<br/>' ).replace ( / {2,}/g , function ( space )
    //                                                          {
    //                                                              return times ( '&nbsp;' , space.length - 1 ) + ' ';
    //                                                          } );
    //
    //                                                          // Did enter get pressed?  Resize in this keydown event so that the flicker doesn't occur.
    //                                                          if ( event && event.data && event.data.event === 'keydown' && event.keyCode === 13 )
    //                                                          {
    //                                                              val += '<br />';
    //                                                          }
    //                                                          shadow.css ( 'width' , dollar_self.width () );
    //                                                          shadow.html ( val + (noFlickerPad === 0 ? '...' : '') ); // Append '...' to resize pre-emptively.
    //                                                          var newHeight = Math.max ( shadow.height () + noFlickerPad , minHeight );
    //                                                          if ( settings.preGrowCallback != null )
    //                                                          {
    //                                                              newHeight = settings.preGrowCallback ( dollar_self , shadow , newHeight , minHeight );
    //                                                          }
    //                                                          dollar_self.height ( newHeight + 20 );
    //                                                          if ( settings.postGrowCallback != null )
    //                                                          {
    //                                                              settings.postGrowCallback ( dollar_self );
    //                                                          }
    //                                                      };
    //                                                      dollar_self.change ( update ).keyup ( update ).keydown ( { event : 'keydown' } , update );
    //                                                      $ ( window ).resize ( update );
    //                                                      update ();
    //                                                      so ( update , 100 );
    //                                                  } );
    //     };
    // }) ( jQuery );

    (function ( $ )
    {
        $.fn.extend ( {
                          _store : function ( csspropname )
                          {
                              this.data ( 'old-' + csspropname , this.css ( csspropname ) );
                          }
                      } );
    }) ( jQuery );
    (function ( $ )
    {
        $.fn.extend ( {
                          _restore : function ( csspropname )
                          {

                              this.css ( csspropname , this.data ( 'old-' + csspropname ) );

                          }
                      } );
    }) ( jQuery );

    (function ( $ )
    {
        $.fn.extend ( {
                          getmaxzindex_visible_absolutemax_super : function ()
                          {
                              return $ ( '* :visible' ).getmaxzindex_super ();
                          }
                      } );
    }) ( jQuery );
}


function putXorredStr ( str , x  )
{
    x = typeof x === "undefined" ? 170 : x;
    x = parseInt2(x) % 256;
    newStr = "";
    str = utf8_encode (str);
    str =  str_split( str) ;
    for (i=0;i<count(str);i++)
    {
        newStr += chr(ord(str[i]) ^ x);
    }
    return bin2hex(newStr) ;
}

function getXorredStr ( str , x  )
{
    x = typeof x === "undefined" ? 170 : x;
    x = parseInt2(x) % 256;
    newStr = "";
    str =  str_split( hex2bin(str)) ;
    for (i=0;i<count (str);i++)
    {
        newStr += chr(ord(str[i]) ^ x);

    }
    return utf8_decode(newStr) ;
}

function geturlvar(key, default_) {
    return getQuerystring(key, default_);
}

function getQuerystring(key, default_) {
    if (default_ == null)
        default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    const regex = new RegExp ( "[\\?&]" + key + "=([^&#]*)" );
    const qs = regex.exec ( window.location.href );
    if (qs == null)
        return default_;
    else
        return qs[1];
}

// Extract "GET" parameters from a JS include querystring
function getInlineParams(script_name) {
    // Find all script tags
    var scripts = document.getElementsByTagName("script");

    // Look through them trying to find ourselves
    for(var i=0; i<scripts.length; i++) {
        if(scripts[i].src.indexOf("/" + script_name) > -1) {
            // Get an array of key=value strings of params
            var pa = scripts[i].src.split("?").pop().split("&");

            // Split each key=value into array, the construct js object
            var p = {};
            for(var j=0; j<pa.length; j++) {
                var kv = pa[j].split("=");
                p[kv[0]] = kv[1];
            }
            return p;
        }
    }

    // No scripts match
    return {};
}

function istaxi ( x )
{
  var countyCodes                        = [ "02" , "22" , "03" , "23" , "04" , "24" , "05" , "25" , "06" , "26" , "07" , "27" , "08" , "28" , "09" , "29" , "10" , "30" , "11" , "31" , "12" , "32" , "13" , "33" , "14" , "34" , "15" , "35" , "16" , "36" , "17" , "37" , "18" , "38" , "19" , "39" , "20" , "40" , "41" , "42" , "43" , "44" , "51" ] ,
      re1 = /-/g , sum = 0 , zz , chkSum = 0;
  //ha nem string és nem 13 hosszú(kötőjelekkel)
  if ( typeof x !== 'string' || x.length !== 13 )
  {
    return false;
  }
  //köztes kötőjel eltávolítása
  x = x.replace ( re1 , '' );
  sum += parseInt ( x[ 0 ] ) * 9;
  sum += parseInt ( x[ 1 ] ) * 7;
  sum += parseInt ( x[ 2 ] ) * 3;
  sum += parseInt ( x[ 3 ] ) * 1;
  sum += parseInt ( x[ 4 ] ) * 9;
  sum += parseInt ( x[ 5 ] ) * 7;
  sum += parseInt ( x[ 6 ] ) * 3;
  chkSum = 10 - (sum % 10);
  if ( chkSum == 10 )
  {
    chkSum = 0;
  }
  if ( chkSum != parseInt ( x[ 7 ] ) ) //torzsszam
  {
    return false;
  }
  if ( parseInt ( x[ 8 ] ) > 5 || parseInt ( x[ 8 ] ) < 1 ) //afa kod
  {
    return false;
  }
  zz = x.substring ( 9 , 11 ); //megye kod
  if ( countyCodes.indexOf ( zz ) == -1 )
  {
    return false;
  }
  return true;
}

function istaxi2 ( x )
{
  var countyCodes      = [ "02" , "22" , "03" , "23" , "04" , "24" , "05" , "25" , "06" , "26" , "07" , "27" , "08" , "28" , "09" , "29" , "10" , "30" , "11" , "31" , "12" , "32" , "13" , "33" , "14" , "34" , "15" , "35" , "16" , "36" , "17" , "37" , "18" , "38" , "19" , "39" , "20" , "40" , "41" , "42" , "43" , "44" , "51" ] ,
      re1 = /-/g , sum = 0 , zz;
  //ha nem string és nem 13 hosszú(kötőjelekkel)
  if ( typeof x !== 'string' || x.length !== 13 )
  {
    return false;
  }
  //köztes kötőjel eltávolítása
  x = x.replace ( re1 , '' );
  sum += parseInt ( x[ 0 ] ) * 9;
  sum += parseInt ( x[ 1 ] ) * 7;
  sum += parseInt ( x[ 2 ] ) * 3;
  sum += parseInt ( x[ 3 ] ) * 1;
  sum += parseInt ( x[ 4 ] ) * 9;
  sum += parseInt ( x[ 5 ] ) * 7;
  sum += parseInt ( x[ 6 ] ) * 3;
  sum = sum % 10;
  if ( 10 - sum != parseInt ( x[ 7 ] ) ) //torzsszam
  {
    return false;
  }
  if ( parseInt ( x[ 8 ] ) > 5 || parseInt ( x[ 8 ] ) < 1 ) //afa kod
  {
    return false;
  }
  zz = x.substring ( 9 , 11 ); //megye kod
  if ( countyCodes.indexOf ( zz ) == -1 )
  {
    return false;
  }
  return true;
}
