//TODO: Need to be fixed for Internet Explorer...
//#@formatter:off
var thisFileName = gsc__ ();function gsc__ () {function failSafe () {try {var s = document.getElementsByTagName ( "script" );var f2 = (document.currentScript || s[ s.length - 1 ]).src;return "2:" + f2.split ( "/" ).pop ();} catch ( e ) {return "unknown";}}try {var er = new er () , source , l = new RegExp ( /.+\/(.*?):\d+(:\d+)*$/ ) , c = new RegExp ( /getScriptName \(.+\/(.*):\d+:\d+\)/ );if ( (source = l.exec ( er.stack.trim () )) && source[ 1 ] != "" ) {return source[ 1 ];} else if ( (source = c.exec ( er.stack.trim () )) ) {return source[ 1 ];} else if ( er.fileName !== undefined ) {return er.fileName;}return failSafe ();} catch ( e ) {return failSafe ();}}
//#@formatter:on

// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
// ▓▓                                                   ▓▓
// ▓▓     @thisFileName global has been created! */     ▓▓
// ▓▓                                                   ▓▓
// ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓


var jQExtenderCompleted = false;

function initJQExtender ()
{
    if ( typeof jQExtenderCompleted !== undefined && jQExtenderCompleted !== true )
    {
        jQExtenderCompleted = true;


        //...on ready
        //...
        //...
        //...
    }
}

$ ( document ).ready ( initJQExtender );
$ ( window ).on ( "load" , initJQExtender );


/*
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 */




jqueryextender();


//var global_currentMousePos;

function jqueryextender ()
{

    /**********************
     * Getting ID of an element, if not present: autogenerating it.
     *
     * @returns {*}
     */

    $.fn.extend ( {
                      getID : function ( varname , value )
                      {
                          id = $ ( this ).attr ( 'id' );
                          if ( (typeof id === "undefined" || id === null) || (id === "") )
                          {
                              randomID = "_gen" + str_pad ( global_idSeq++ , 6 , "0" , "STR_PAD_LEFT" );
                              $ ( this ).prop ( 'id' , randomID );
                              return randomID;
                          }
                          return id;
                      }
                  } );
    

    //setData => data + attr setter
    //id, idh
    //tag


    $.fn.extend ( {
                      ggetID : function ()
                      {
                          return "#" + this.attr ( 'id' );
                      }
                  } );

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







