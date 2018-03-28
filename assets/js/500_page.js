//TODO: Need to be fixed for Internet Explorer...
//#@formatter:off
var thisFileName = gsc__ ();function gsc__ () {function failSafe () {try {var s = document.getElementsByTagName ( "script" );var f2 = (document.currentScript || s[ s.length - 1 ]).src;return "2:" + f2.split ( "/" ).pop ();} catch ( e ) {return "unknown";}}try {var er = new er () , source , l = new RegExp ( /.+\/(.*?):\d+(:\d+)*$/ ) , c = new RegExp ( /getScriptName \(.+\/(.*):\d+:\d+\)/ );if ( (source = l.exec ( er.stack.trim () )) && source[ 1 ] != "" ) {return source[ 1 ];} else if ( (source = c.exec ( er.stack.trim () )) ) {return source[ 1 ];} else if ( er.fileName !== undefined ) {return er.fileName;}return failSafe ();} catch ( e ) {return failSafe ();}}
//#@formatter:on

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
// ▓▓                                                   ▓▓
// ▓▓     @thisFileName global has been created! */     ▓▓
// ▓▓                                                   ▓▓
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓


var pageJsCompleted = false;

function initPageJs ()
{
    if ( typeof pageJsCompleted !== undefined && pageJsCompleted !== true )
    {
        pageJsCompleted = true;
        //...on ready
        //...
        //...
        //...

        let urlVarArray = [];
        parse_str( parse_url(thisFileName)["query"] , urlVarArray);
        //dynamic js kloading is disabled !
        //$.getScript ( "./tmp/"+urlVarArray["jxnhsh"]+".js" );
        jqueryextender ();
        fixTextareaDummyContent ();
        dynamicItems ();

        //Catching the browser resize event and recalculating content.
        $ ( window ).resize ( function ()
                              {
                                  dynamicItems ();
                              } );
    }
}

$ ( document ).ready ( initPageJs );
$ ( window ).on ( "load" , initPageJs );


/*
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 */



var NULL = null;
var animationInProgress = false;
var DEFAREA_TEXT = "Enter your message here...";

// *    Page onready's code..
$ ( function ()
    {



    } );

function dynamicItems ()
{
    recalcPage ();
    textareaSizer ();
}

function createMessage ()
{
    let message;
    if ( (message = $ ( '#mainmessage' ).valtrim ()) !== "" && message !== DEFAREA_TEXT )
    {
        JxClass.sendMessage ( putXorredStr ( message ) );
    }
    else
    {
        $('#mainmessage').focus();
    }

}

function areaFocus ()
{
    textareaSizer ( "focus" );
}

function areaBlur ()
{
    textareaSizer ( "blur" );
}


function textareaSizer ( mode )
{
    mode = typeof mode === undefined ? "normal" : mode;
    if ( animationInProgress )
    {
        so ( textareaSizer , 1000 );
        return;
    }
    /*_et*/
    mainMessageVal = $ ( '#mainmessage' ).val ();
    if ( mode === "focus" )
    {
        if ( mainMessageVal === DEFAREA_TEXT )
        {
            $ ( '#mainmessage' ).val ( "" );
        }
        $ ( '#mainmessage' ).removeClass ( 'grayme' );
    }
    else if ( mainMessageVal === "" )
    {
        $ ( '#mainmessage' ).val ( DEFAREA_TEXT ).addClass ( 'grayme' );
    }
    else if ( mainMessageVal !== DEFAREA_TEXT )
    {
        $ ( '#mainmessage' ).removeClass ( 'grayme' );
    }
    /*_et*/
    allHeight = $ ( '#content' ).outerHeight ();
    /*_et*/
    newHeight = allHeight - $ ( '#titleHolder' ).outerHeight () - 100;
    animationInProgress = true;
    multi = $ ( '#mainmessage' ).height () > newHeight ? 0 : 1;
    $ ( '#mainmessage' ).animate ( { height : newHeight } , 500 * multi , "easeOutCubic" , function ()
    {
        animationInProgress = false;
    } );
}

/*****************************
 * Fixing textareas' init value if the content contains only with spaces and tabs - due to the html format
 */
function fixTextareaDummyContent ()
{
    $ ( 'textarea' ).each ( function ( i )
                            {
                                areaContent = $ ( this ).val ();
                                if ( strlen ( areaContent = $ ( this ).val () ) > 0 )
                                {
                                    areaContent = str_replace ( [ chr ( 9 ) , " " ] , [ "" , "" ] , areaContent );
                                    if ( strlen ( areaContent ) === 0 )
                                    {
                                        $ ( this ).val ( "" );
                                    }
                                }
                            } );
}

function calcDivContent ( object )
{
    object = is_string ( object ) ? $ ( "#" + ltrim ( object , "#" ) ) : object;
    heightSum = 0;
    $ ( object ).each ( function ( i )
                        {
                            heightSum += $ ( this ).outerHeight ();
                            //console.log(heightSum);

                        }
    );
}

/*******************************
 * Calculates and sets middle "content" div's height    */
function recalcPage ()
{
    /*_et*/
    contentObject = $ ( '#content' );
    /*_et*/
    calculatedHeight = 0;
    /*_et*/
    screenHeight = $ ( window ).outerHeight ();

    $ ( contentObject ).siblings ().each ( function ( i )
                                           {
                                               if ( strpos ( $ ( this ).getID () , "__" ) !== 0 )
                                               {
                                                   return;
                                               }
                                               calculatedHeight += $ ( this ).outerHeight ();
                                               //console.log ( $ ( this ).outerHeight () );
                                               //console.log ( $ ( this ).getID () );
                                               //console.log(calculatedHeight)
                                           } );
    //console.log(calculatedHeight);
    /*_et*/
    contentHeight = screenHeight - calculatedHeight;
    $ ( "#content" ).outerHeight ( contentHeight );
}


//console.log (thisFileName);




