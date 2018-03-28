function abs ( mixed_number )
{

    return Math.abs ( mixed_number ) || 0;
}

function acosh ( arg )
{

    return Math.log ( arg + Math.sqrt ( arg * arg - 1 ) );
}

function acos ( arg )
{

    return Math.acos ( arg );
}

function addcslashes ( str , charlist )
{

    var target = '' , chrs = [] , i = 0 , j = 0 , c = '' , next = '' , rangeBegin = '' , rangeEnd = '' , chr = '' , begin = 0 , end = 0 , octalLength = 0 ,
        postOctalPos                                                                                                                                  = 0 , cca = 0 , escHexGrp = [] , encoded = '' , percentHex = /%([\dA-Fa-f]+)/g;
    var _pad = function ( n , c )
    {
        if ( (n = n + '').length < c )
        {
            return new Array ( ++c - n.length ).join ( '0' ) + n;
        }
        return n;
    };

    for ( i = 0 ; i < charlist.length ; i++ )
    {
        c = charlist.charAt ( i );
        next = charlist.charAt ( i + 1 );
        if ( c === '\\' && next && (/\d/).test ( next ) )
        {
            rangeBegin = charlist.slice ( i + 1 ).match ( /^\d+/ )[ 0 ];
            octalLength = rangeBegin.length;
            postOctalPos = i + octalLength + 1;
            if ( charlist.charAt ( postOctalPos ) + charlist.charAt ( postOctalPos + 1 ) === '..' )
            {
                begin = rangeBegin.charCodeAt ( 0 );
                if ( (/\\\d/).test ( charlist.charAt ( postOctalPos + 2 ) + charlist.charAt ( postOctalPos + 3 ) ) )
                {
                    rangeEnd = charlist.slice ( postOctalPos + 3 ).match ( /^\d+/ )[ 0 ];
                    i += 1;
                }
                else if ( charlist.charAt ( postOctalPos + 2 ) )
                {
                    rangeEnd = charlist.charAt ( postOctalPos + 2 );
                }
                else
                {
                    throw 'Range with no end point';
                }
                end = rangeEnd.charCodeAt ( 0 );
                if ( end > begin )
                {
                    for ( j = begin ; j <= end ; j++ )
                    {
                        chrs.push ( String.fromCharCode ( j ) );
                    }
                }
                else
                {
                    chrs.push ( '.' , rangeBegin , rangeEnd );
                }
                i += rangeEnd.length + 2;
            }
            else
            {
                chr = String.fromCharCode ( parseInt ( rangeBegin , 8 ) );
                chrs.push ( chr );
            }
            i += octalLength;
        }
        else if ( next + charlist.charAt ( i + 2 ) === '..' )
        {
            rangeBegin = c;
            begin = rangeBegin.charCodeAt ( 0 );
            if ( (/\\\d/).test ( charlist.charAt ( i + 3 ) + charlist.charAt ( i + 4 ) ) )
            {
                rangeEnd = charlist.slice ( i + 4 ).match ( /^\d+/ )[ 0 ];
                i += 1;
            }
            else if ( charlist.charAt ( i + 3 ) )
            {
                rangeEnd = charlist.charAt ( i + 3 );
            }
            else
            {
                throw 'Range with no end point';
            }
            end = rangeEnd.charCodeAt ( 0 );
            if ( end > begin )
            {
                for ( j = begin ; j <= end ; j++ )
                {
                    chrs.push ( String.fromCharCode ( j ) );
                }
            }
            else
            {
                chrs.push ( '.' , rangeBegin , rangeEnd );
            }
            i += rangeEnd.length + 2;
        }
        else
        {
            chrs.push ( c );
        }
    }

    for ( i = 0 ; i < str.length ; i++ )
    {
        c = str.charAt ( i );
        if ( chrs.indexOf ( c ) !== -1 )
        {
            target += '\\';
            cca = c.charCodeAt ( 0 );
            if ( cca < 32 || cca > 126 )
            {
                switch ( c )
                {
                    case '\n':
                        target += 'n';
                        break;
                    case '\t':
                        target += 't';
                        break;
                    case '\u000D':
                        target += 'r';
                        break;
                    case '\u0007':
                        target += 'a';
                        break;
                    case '\v':
                        target += 'v';
                        break;
                    case '\b':
                        target += 'b';
                        break;
                    case '\f':
                        target += 'f';
                        break;
                    default:
//target += _pad(cca.toString(8), 3);break;
                        encoded = encodeURIComponent ( c );


                        if ( (escHexGrp = percentHex.exec ( encoded )) !== null )
                        {
                            target += _pad ( parseInt ( escHexGrp[ 1 ] , 16 ).toString ( 8 ) , 3 );
                        }
                        while ((escHexGrp = percentHex.exec ( encoded )) !== null)
                        {
                            target += '\\' + _pad ( parseInt ( escHexGrp[ 1 ] , 16 ).toString ( 8 ) , 3 );
                        }
                        break;
                }
            }
            else
            {
                target += c;
            }
        }
        else
        {
            target += c;
        }
    }
    return target;
}

function addslashes ( str )
{

    return (str + '').replace ( /[\\"']/g , '\\$&' ).replace ( /\u0000/g , '\\0' );
}

function array_change_key_case ( array , cs )
{

    var case_fn , key , tmp_ar = {};

    if ( Object.prototype.toString.call ( array ) === '[object Array]' )
    {
        return array;
    }
    if ( array && typeof array === 'object' && array.change_key_case )
    {
        return array.change_key_case ( cs );
    }
    if ( array && typeof array === 'object' )
    {
        case_fn = (!cs || cs === 'CASE_LOWER') ? 'toLowerCase' : 'toUpperCase';
        for ( key in array )
        {
            tmp_ar[ key[ case_fn ] () ] = array[ key ];
        }
        return tmp_ar;
    }

    return false;
}

function array_chunk ( input , size , preserve_keys )
{

    var x , p = '' , i = 0 , c = -1 , l = input.length || 0 , n = [];

    if ( size < 1 )
    {
        return null;
    }

    if ( Object.prototype.toString.call ( input ) === '[object Array]' )
    {
        if ( preserve_keys )
        {
            while (i < l)
            {
                (x = i % size) ? n[ c ][ i ] = input[ i ] : n[ ++c ] = {}, n[ c ][ i ] = input[ i ];
                i++;
            }
        }
        else
        {
            while (i < l)
            {
                (x = i % size) ? n[ c ][ x ] = input[ i ] : n[ ++c ] = [ input[ i ] ];
                i++;
            }
        }
    }
    else
    {
        if ( preserve_keys )
        {
            for ( p in input )
            {
                if ( input.hasOwnProperty ( p ) )
                {
                    (x = i % size) ? n[ c ][ p ] = input[ p ] : n[ ++c ] = {}, n[ c ][ p ] = input[ p ];
                    i++;
                }
            }
        }
        else
        {
            for ( p in input )
            {
                if ( input.hasOwnProperty ( p ) )
                {
                    (x = i % size) ? n[ c ][ x ] = input[ p ] : n[ ++c ] = [ input[ p ] ];
                    i++;
                }
            }
        }
    }
    return n;
}

function array_combine ( keys , values )
{

    var new_array = {} , keycount = keys && keys.length , i = 0;

    if ( typeof keys !== 'object' || typeof values !== 'object' ||
         typeof keycount !== 'number' || typeof values.length !== 'number' || !keycount )
    {
        return false;
    }

    if ( keycount != values.length )
    {
        return false;
    }

    for ( i = 0 ; i < keycount ; i++ )
    {
        new_array[ keys[ i ] ] = values[ i ];
    }

    return new_array;
}

function array_count_values ( array )
{

    var tmp_arr = {} , key = '' , t = '';

    var __getType = function ( obj )
    {

        var t = typeof obj;
        t = t.toLowerCase ();
        if ( t === 'object' )
        {
            t = 'array';
        }
        return t;
    };

    var __countValue = function ( value )
    {
        switch ( typeof value )
        {
            case 'number':
                if ( Math.floor ( value ) !== value )
                {
                    return;
                }

            case 'string':
                if ( value in this && this.hasOwnProperty ( value ) )
                {
                    ++this[ value ];
                }
                else
                {
                    this[ value ] = 1;
                }
        }
    };

    t = __getType ( array );
    if ( t === 'array' )
    {
        for ( key in array )
        {
            if ( array.hasOwnProperty ( key ) )
            {
                __countValue.call ( tmp_arr , array[ key ] );
            }
        }
    }

    return tmp_arr;
}

function array_diff_assoc ( arr1 )
{

    var retArr = {} , argl = arguments.length , k1 = '' , i = 1 , k = '' , arr = {};

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < argl ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( arr[ k ] === arr1[ k1 ] && k === k1 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_diff ( arr1 )
{

    var retArr = {} , argl = arguments.length , k1 = '' , i = 1 , k = '' , arr = {};

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < argl ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( arr[ k ] === arr1[ k1 ] )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_diff_key ( arr1 )
{

    var argl = arguments.length , retArr = {} , k1 = '' , i = 1 , k = '' , arr = {};

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < argl ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( k === k1 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_diff_uassoc ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , cb = arguments[ arglm1 ] , arr = {} , i = 1 , k1 = '' , k = '';
    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( arr[ k ] === arr1[ k1 ] && cb ( k , k1 ) === 0 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_diff_ukey ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , cb = arguments[ arglm1 ] , arr = {} , i = 1 , k1 = '' , k = '';

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb ( k , k1 ) === 0 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_fill ( start_index , num , mixed_val )
{

    var key , tmp_arr = {};

    if ( !isNaN ( start_index ) && !isNaN ( num ) )
    {
        for ( key = 0 ; key < num ; key++ )
        {
            tmp_arr[ (key + start_index) ] = mixed_val;
        }
    }

    return tmp_arr;
}

function array_fill_keys ( keys , value )
{

    var retObj = {} , key = '';

    for ( key in keys )
    {
        retObj[ keys[ key ] ] = value;
    }

    return retObj;
}

function array_filter ( arr , func )
{

    var retObj = {} , k;

    func = func || function ( v )
    {
        return v;
    };

    if ( Object.prototype.toString.call ( arr ) === '[object Array]' )
    {
        retObj = [];
    }

    for ( k in arr )
    {
        if ( func ( arr[ k ] ) )
        {
            retObj[ k ] = arr[ k ];
        }
    }

    return retObj;
}

function array_flip ( trans )
{

    var key , tmp_ar = {};

    if ( trans && typeof trans === 'object' && trans.change_key_case )
    {
        return trans.flip ();
    }

    for ( key in trans )
    {
        if ( !trans.hasOwnProperty ( key ) )
        {
            continue;
        }
        tmp_ar[ trans[ key ] ] = key;
    }

    return tmp_ar;
}

function array_intersect_assoc ( arr1 )
{

    var retArr = {} , argl = arguments.length , arglm1 = argl - 1 , k1 = '' , arr = {} , i = 0 , k = '';

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < argl ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( arr[ k ] === arr1[ k1 ] && k === k1 )
                {
                    if ( i === arglm1 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array_intersect ( arr1 )
{

    var retArr = {} , argl = arguments.length , arglm1 = argl - 1 , k1 = '' , arr = {} , i = 0 , k = '';

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < argl ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( arr[ k ] === arr1[ k1 ] )
                {
                    if ( i === arglm1 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array_intersect_key ( arr1 )
{

    var retArr = {} , argl = arguments.length , arglm1 = argl - 1 , k1 = '' , arr = {} , i = 0 , k = '';

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < argl ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( k === k1 )
                {
                    if ( i === arglm1 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array_intersect_uassoc ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , arglm2 = arglm1 - 1 , cb = arguments[ arglm1 ] , k1 = '' , i = 1 , arr = {} , k = '';

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( arr[ k ] === arr1[ k1 ] && cb ( k , k1 ) === 0 )
                {
                    if ( i === arglm2 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array_intersect_ukey ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , arglm2 = arglm1 - 1 , cb = arguments[ arglm1 ] , k1 = '' , i = 1 , arr = {} , k = '';

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb ( k , k1 ) === 0 )
                {
                    if ( i === arglm2 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array ()
{

    try
    {
        this.php_js = this.php_js || {};
    } catch ( e )
    {
        this.php_js = {};
    }

    var arrInst , e , __ , that = this , PHPJS_Array = function PHPJS_Array ()
    {
    };
    mainArgs = arguments, p = this.php_js, _indexOf = function ( value , from , strict )
    {
        var i = from || 0 , nonstrict = !strict , length = this.length;
        while (i < length)
        {
            if ( this[ i ] === value || (nonstrict && this[ i ] == value) )
            {
                return i;
            }
            i++;
        }
        return -1;
    };
    if ( !p.Relator )
    {
        p.Relator = (function ()
        {







            function _indexOf ( value )
            {
                var i = 0 , length = this.length;
                while (i < length)
                {
                    if ( this[ i ] === value )
                    {
                        return i;
                    }
                    i++;
                }
                return -1;
            }

            function Relator ()
            {
                var Stack = [] , Array = [];
                if ( !Stack.indexOf )
                {
                    Stack.indexOf = _indexOf;
                }
                return {

                    $               : function ()
                    {
                        return Relator ();
                    } , constructor : function ( that )
                    {
                        var i = Stack.indexOf ( that );
                        ~i ? Array[ i ] : Array[ Stack.push ( that ) - 1 ] = {};
                        this.method ( that ).that = that;
                        return this.method ( that );
                    } , method      : function ( that )
                    {
                        return Array[ Stack.indexOf ( that ) ];
                    }
                };
            }

            return Relator ();
        } ());
    }

    if ( p && p.ini && p.ini[ 'phpjs.return_phpjs_arrays' ].local_value.toLowerCase () === 'on' )
    {
        if ( !p.PHPJS_Array )
        {


            __ = p.ArrayRelator = p.ArrayRelator || p.Relator.$ ();

            p.PHPJS_Array = function PHPJS_Array ()
            {
                var _ = __.constructor ( this ) , args = arguments , i = 0 , argl , p;
                args = (args.length === 1 && args[ 0 ] && typeof args[ 0 ] === 'object' && args[ 0 ].length && !args[ 0 ].propertyIsEnumerable ( 'length' )) ? args[ 0 ] : args;
                if ( !_.objectChain )
                {
                    _.objectChain = args;
                    _.object = {};
                    _.keys = [];
                    _.values = [];
                }
                for ( argl = args.length ; i < argl ; i++ )
                {
                    for ( p in args[ i ] )
                    {

                        this[ p ] = _.object[ p ] = args[ i ][ p ];

                        _.keys[ _.keys.length ] = p;
                        _.values[ _.values.length ] = args[ i ][ p ];
                        break;
                    }
                }
            };
            e = p.PHPJS_Array.prototype;
            e.change_key_case = function ( cs )
            {
                var _ = __.method ( this ) , oldkey , newkey , i = 0 , kl = _.keys.length , case_fn = (!cs || cs === 'CASE_LOWER') ? 'toLowerCase' : 'toUpperCase';
                while (i < kl)
                {
                    oldkey = _.keys[ i ];
                    newkey = _.keys[ i ] = _.keys[ i ][ case_fn ] ();
                    if ( oldkey !== newkey )
                    {
                        this[ oldkey ] = _.object[ oldkey ] = _.objectChain[ i ][ oldkey ] = null;
                        delete this[ oldkey ];
                        delete _.object[ oldkey ];
                        delete _.objectChain[ i ][ oldkey ];
                        this[ newkey ] = _.object[ newkey ] = _.objectChain[ i ][ newkey ] = _.values[ i ];
                    }
                    i++;
                }
                return this;
            };
            e.flip = function ()
            {
                var _ = __.method ( this ) , i = 0 , kl = _.keys.length;
                while (i < kl)
                {
                    oldkey = _.keys[ i ];
                    newkey = _.values[ i ];
                    if ( oldkey !== newkey )
                    {
                        this[ oldkey ] = _.object[ oldkey ] = _.objectChain[ i ][ oldkey ] = null;
                        delete this[ oldkey ];
                        delete _.object[ oldkey ];
                        delete _.objectChain[ i ][ oldkey ];
                        this[ newkey ] = _.object[ newkey ] = _.objectChain[ i ][ newkey ] = oldkey;
                        _.keys[ i ] = newkey;
                    }
                    i++;
                }
                return this;
            };
            e.walk = function ( funcname , userdata )
            {
                var _ = __.method ( this ) , obj , func , ini , i = 0 , kl = 0;

                try
                {
                    if ( typeof funcname === 'function' )
                    {
                        for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                        {
                            if ( arguments.length > 1 )
                            {
                                funcname ( _.values[ i ] , _.keys[ i ] , userdata );
                            }
                            else
                            {
                                funcname ( _.values[ i ] , _.keys[ i ] );
                            }
                        }
                    }
                    else if ( typeof funcname === 'string' )
                    {
                        this.php_js = this.php_js || {};
                        this.php_js.ini = this.php_js.ini || {};
                        ini = this.php_js.ini[ 'phpjs.no-eval' ];
                        if ( ini && (parseInt ( ini.local_value , 10 ) !== 0 && (!ini.local_value.toLowerCase || ini.local_value.toLowerCase () !== 'off')) )
                        {
                            if ( arguments.length > 1 )
                            {
                                for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                                {
                                    this.window[ funcname ] ( _.values[ i ] , _.keys[ i ] , userdata );
                                }
                            }
                            else
                            {
                                for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                                {
                                    this.window[ funcname ] ( _.values[ i ] , _.keys[ i ] );
                                }
                            }
                        }
                        else
                        {
                            if ( arguments.length > 1 )
                            {
                                for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                                {
                                    eval ( funcname + '(_.values[i], _.keys[i], userdata)' );
                                }
                            }
                            else
                            {
                                for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                                {
                                    eval ( funcname + '(_.values[i], _.keys[i])' );
                                }
                            }
                        }
                    }
                    else if ( funcname && typeof funcname === 'object' && funcname.length === 2 )
                    {
                        obj = funcname[ 0 ];
                        func = funcname[ 1 ];
                        if ( arguments.length > 1 )
                        {
                            for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                            {
                                obj[ func ] ( _.values[ i ] , _.keys[ i ] , userdata );
                            }
                        }
                        else
                        {
                            for ( i = 0, kl = _.keys.length ; i < kl ; i++ )
                            {
                                obj[ func ] ( _.values[ i ] , _.keys[ i ] );
                            }
                        }
                    }
                    else
                    {
                        return false;
                    }
                } catch ( e )
                {
                    return false;
                }

                return this;
            };

            e.keys = function ( search_value , argStrict )
            {
                var _ = __.method ( this ) , pos , search = typeof search_value !== 'undefined' , tmp_arr = [] , strict = !!argStrict;
                if ( !search )
                {
                    return _.keys;
                }
                while ((pos = _indexOf ( _.values , pos , strict )) !== -1)
                {
                    tmp_arr[ tmp_arr.length ] = _.keys[ pos ];
                }
                return tmp_arr;
            };
            e.values = function ()
            {
                var _ = __.method ( this );
                return _.values;
            };

            e.search = function ( needle , argStrict )
            {
                var _ = __.method ( this ) , strict = !!argStrict , haystack = _.values , i , vl , val , flags;
                if ( typeof needle === 'object' && needle.exec )
                {
                    if ( !strict )
                    {
                        flags = 'i' + (needle.global ? 'g' : '') + (needle.multiline ? 'm' : '') + (needle.sticky ? 'y' : '');
                        needle = new RegExp ( needle.source , flags );
                    }
                    for ( i = 0, vl = haystack.length ; i < vl ; i++ )
                    {
                        val = haystack[ i ];
                        if ( needle.test ( val ) )
                        {
                            return _.keys[ i ];
                        }
                    }
                    return false;
                }
                for ( i = 0, vl = haystack.length ; i < vl ; i++ )
                {
                    val = haystack[ i ];
                    if ( (strict && val === needle) || (!strict && val == needle) )
                    {
                        return _.keys[ i ];
                    }
                }
                return false;
            };
            e.sum = function ()
            {
                var _ = __.method ( this ) , sum = 0 , i = 0 , kl = _.keys.length;
                while (i < kl)
                {
                    if ( !isNaN ( parseFloat ( _.values[ i ] ) ) )
                    {
                        sum += parseFloat ( _.values[ i ] );
                    }
                    i++;
                }
                return sum;
            };

            e.foreach = function ( handler )
            {
                var _ = __.method ( this ) , i = 0 , kl = _.keys.length;
                while (i < kl)
                {
                    if ( handler.length === 1 )
                    {
                        handler ( _.values[ i ] );
                    }
                    else
                    {
                        handler ( _.keys[ i ] , _.values[ i ] );
                    }
                    i++;
                }
                return this;
            };
            e.list = function ()
            {
                var key , _ = __.method ( this ) , i = 0 , argl = arguments.length;
                while (i < argl)
                {
                    key = _.keys[ i ];
                    if ( key && key.length === parseInt ( key , 10 ).toString ().length &&
                         parseInt ( key , 10 ) < argl )
                    {
                        that.window[ arguments[ key ] ] = _.values[ key ];
                    }
                    i++;
                }
                return this;
            };

            e.forEach = function ( handler )
            {
                var _ = __.method ( this ) , i = 0 , kl = _.keys.length;
                while (i < kl)
                {
                    handler ( _.values[ i ] , _.keys[ i ] , this );
                    i++;
                }
                return this;
            };

            e.$object = function ()
            {
                var _ = __.method ( this );
                return _.object;
            };
            e.$objectChain = function ()
            {
                var _ = __.method ( this );
                return _.objectChain;
            };
        }
        PHPJS_Array.prototype = p.PHPJS_Array.prototype;
        arrInst = new PHPJS_Array ();
        p.PHPJS_Array.apply ( arrInst , mainArgs );
        return arrInst;
    }
    return Array.prototype.slice.call ( mainArgs );
}

function array_key_exists ( key , search )
{

    if ( !search || (search.constructor !== Array && search.constructor !== Object) )
    {
        return false;
    }

    return key in search;
}

function array_keys ( input , search_value , argStrict )
{

    var search = typeof search_value !== 'undefined' , tmp_arr = [] , strict = !!argStrict , include = true , key = '';

    if ( input && typeof input === 'object' && input.change_key_case )
    {
        return input.keys ( search_value , argStrict );
    }

    for ( key in input )
    {
        if ( input.hasOwnProperty ( key ) )
        {
            include = true;
            if ( search )
            {
                if ( strict && input[ key ] !== search_value )
                {
                    include = false;
                }
                else if ( input[ key ] != search_value )
                {
                    include = false;
                }
            }

            if ( include )
            {
                tmp_arr[ tmp_arr.length ] = key;
            }
        }
    }

    return tmp_arr;
}

function array_map ( callback )
{

    var argc = arguments.length , argv = arguments , glbl = this.window , obj = null , cb = callback , j = argv[ 1 ].length , i = 0 , k = 1 , m = 0 , tmp = [] ,
        tmp_ar                                                                                                                                            = [];

    while (i < j)
    {
        while (k < argc)
        {
            tmp[ m++ ] = argv[ k++ ][ i ];
        }

        m = 0;
        k = 1;

        if ( callback )
        {
            if ( typeof callback === 'string' )
            {
                cb = glbl[ callback ];
            }
            else if ( typeof callback === 'object' && callback.length )
            {
                obj = typeof callback[ 0 ] === 'string' ? glbl[ callback[ 0 ] ] : callback[ 0 ];
                if ( typeof obj === 'undefined' )
                {
                    throw 'Object not found: ' + callback[ 0 ];
                }
                cb = typeof callback[ 1 ] === 'string' ? obj[ callback[ 1 ] ] : callback[ 1 ];
            }
            tmp_ar[ i++ ] = cb.apply ( obj , tmp );
        }
        else
        {
            tmp_ar[ i++ ] = tmp;
        }

        tmp = [];
    }

    return tmp_ar;
}

function array_merge ()
{

    var args = Array.prototype.slice.call ( arguments ) , argl = args.length , arg , retObj = {} , k = '' , argil = 0 , j = 0 , i = 0 , ct = 0 ,
        toStr                                                                                                                              = Object.prototype.toString , retArr                                                                                         = true;

    for ( i = 0 ; i < argl ; i++ )
    {
        if ( toStr.call ( args[ i ] ) !== '[object Array]' )
        {
            retArr = false;
            break;
        }
    }

    if ( retArr )
    {
        retArr = [];
        for ( i = 0 ; i < argl ; i++ )
        {
            retArr = retArr.concat ( args[ i ] );
        }
        return retArr;
    }

    for ( i = 0, ct = 0 ; i < argl ; i++ )
    {
        arg = args[ i ];
        if ( toStr.call ( arg ) === '[object Array]' )
        {
            for ( j = 0, argil = arg.length ; j < argil ; j++ )
            {
                retObj[ ct++ ] = arg[ j ];
            }
        }
        else
        {
            for ( k in arg )
            {
                if ( arg.hasOwnProperty ( k ) )
                {
                    if ( parseInt ( k , 10 ) + '' === k )
                    {
                        retObj[ ct++ ] = arg[ k ];
                    }
                    else
                    {
                        retObj[ k ] = arg[ k ];
                    }
                }
            }
        }
    }
    return retObj;
}

function array_merge_recursive ( arr1 , arr2 )
{

    var idx = '';

    if ( arr1 && Object.prototype.toString.call ( arr1 ) === '[object Array]' && arr2 && Object.prototype.toString.call ( arr2 ) === '[object Array]' )
    {
        for ( idx in arr2 )
        {
            arr1.push ( arr2[ idx ] );
        }
    }
    else if ( (arr1 && (arr1 instanceof Object)) && (arr2 && (arr2 instanceof Object)) )
    {
        for ( idx in arr2 )
        {
            if ( idx in arr1 )
            {
                if ( typeof arr1[ idx ] === 'object' && typeof arr2 === 'object' )
                {
                    arr1[ idx ] = this.array_merge ( arr1[ idx ] , arr2[ idx ] );
                }
                else
                {
                    arr1[ idx ] = arr2[ idx ];
                }
            }
            else
            {
                arr1[ idx ] = arr2[ idx ];
            }
        }
    }

    return arr1;
}

function array_multisort ( arr )
{

    var g , i , j , k , l , sal , vkey , elIndex , lastSorts , tmpArray , zlast;

    var sortFlag = [ 0 ];
    var thingsToSort = [];
    var nLastSort = [];
    var lastSort = [];
    var args = arguments;

    var flags = {
        'SORT_REGULAR' : 16 , 'SORT_NUMERIC' : 17 , 'SORT_STRING' : 18 , 'SORT_ASC' : 32 , 'SORT_DESC' : 40
    };

    var sortDuplicator = function ( a , b )
    {
        return nLastSort.shift ();
    };

    var sortFunctions = [ [

        function ( a , b )
        {
            lastSort.push ( a > b ? 1 : (a < b ? -1 : 0) );
            return a > b ? 1 : (a < b ? -1 : 0);
        } , function ( a , b )
        {
            lastSort.push ( b > a ? 1 : (b < a ? -1 : 0) );
            return b > a ? 1 : (b < a ? -1 : 0);
        } ] , [

        function ( a , b )
        {
            lastSort.push ( a - b );
            return a - b;
        } , function ( a , b )
        {
            lastSort.push ( b - a );
            return b - a;
        } ] , [

        function ( a , b )
        {
            lastSort.push ( (a + '') > (b + '') ? 1 : ((a + '') < (b + '') ? -1 : 0) );
            return (a + '') > (b + '') ? 1 : ((a + '') < (b + '') ? -1 : 0);
        } , function ( a , b )
        {
            lastSort.push ( (b + '') > (a + '') ? 1 : ((b + '') < (a + '') ? -1 : 0) );
            return (b + '') > (a + '') ? 1 : ((b + '') < (a + '') ? -1 : 0);
        } ] ];

    var sortArrs = [ [] ];

    var sortKeys = [ [] ];

    if ( Object.prototype.toString.call ( arr ) === '[object Array]' )
    {
        sortArrs[ 0 ] = arr;
    }
    else if ( arr && typeof arr === 'object' )
    {
        for ( i in arr )
        {
            if ( arr.hasOwnProperty ( i ) )
            {
                sortKeys[ 0 ].push ( i );
                sortArrs[ 0 ].push ( arr[ i ] );
            }
        }
    }
    else
    {
        return false;
    }

//
    var arrMainLength = sortArrs[ 0 ].length;
    var sortComponents = [ 0 , arrMainLength ];

    var argl = arguments.length;
    for ( j = 1 ; j < argl ; j++ )
    {
        if ( Object.prototype.toString.call ( arguments[ j ] ) === '[object Array]' )
        {
            sortArrs[ j ] = arguments[ j ];
            sortFlag[ j ] = 0;
            if ( arguments[ j ].length !== arrMainLength )
            {
                return false;
            }
        }
        else if ( arguments[ j ] && typeof arguments[ j ] === 'object' )
        {
            sortKeys[ j ] = [];
            sortArrs[ j ] = [];
            sortFlag[ j ] = 0;
            for ( i in arguments[ j ] )
            {
                if ( arguments[ j ].hasOwnProperty ( i ) )
                {
                    sortKeys[ j ].push ( i );
                    sortArrs[ j ].push ( arguments[ j ][ i ] );
                }
            }
            if ( sortArrs[ j ].length !== arrMainLength )
            {
                return false;
            }
        }
        else if ( typeof arguments[ j ] === 'string' )
        {
            var lFlag = sortFlag.pop ();

            if ( typeof flags[ arguments[ j ] ] === 'undefined' || ((((flags[ arguments[ j ] ]) >>> 4) & (lFlag >>> 4)) > 0) )
            {
                return false;
            }
            sortFlag.push ( lFlag + flags[ arguments[ j ] ] );
        }
        else
        {
            return false;
        }
    }

    for ( i = 0 ; i !== arrMainLength ; i++ )
    {
        thingsToSort.push ( true );
    }

    for ( i in sortArrs )
    {
        if ( sortArrs.hasOwnProperty ( i ) )
        {
            lastSorts = [];
            tmpArray = [];
            elIndex = 0;
            nLastSort = [];
            lastSort = [];


            if ( sortComponents.length === 0 )
            {
                if ( Object.prototype.toString.call ( arguments[ i ] ) === '[object Array]' )
                {
                    args[ i ] = sortArrs[ i ];
                }
                else
                {
                    for ( k in arguments[ i ] )
                    {
                        if ( arguments[ i ].hasOwnProperty ( k ) )
                        {
                            delete arguments[ i ][ k ];
                        }
                    }
                    sal = sortArrs[ i ].length;
                    for ( j = 0, vkey = 0 ; j < sal ; j++ )
                    {
                        vkey = sortKeys[ i ][ j ];
                        args[ i ][ vkey ] = sortArrs[ i ][ j ];
                    }
                }
                delete sortArrs[ i ];
                delete sortKeys[ i ];
                continue;
            }


            var sFunction = sortFunctions[ (sortFlag[ i ] & 3) ][ ((sortFlag[ i ] & 8) > 0) ? 1 : 0 ];


            for ( l = 0 ; l !== sortComponents.length ; l += 2 )
            {
                tmpArray = sortArrs[ i ].slice ( sortComponents[ l ] , sortComponents[ l + 1 ] + 1 );
                tmpArray.sort ( sFunction );
                lastSorts[ l ] = [].concat ( lastSort );
                elIndex = sortComponents[ l ];
                for ( g in tmpArray )
                {
                    if ( tmpArray.hasOwnProperty ( g ) )
                    {
                        sortArrs[ i ][ elIndex ] = tmpArray[ g ];
                        elIndex++;
                    }
                }
            }


            sFunction = sortDuplicator;
            for ( j in sortArrs )
            {
                if ( sortArrs.hasOwnProperty ( j ) )
                {
                    if ( sortArrs[ j ] === sortArrs[ i ] )
                    {
                        continue;
                    }
                    for ( l = 0 ; l !== sortComponents.length ; l += 2 )
                    {
                        tmpArray = sortArrs[ j ].slice ( sortComponents[ l ] , sortComponents[ l + 1 ] + 1 );
                        nLastSort = [].concat ( lastSorts[ l ] );
                        tmpArray.sort ( sFunction );
                        elIndex = sortComponents[ l ];
                        for ( g in tmpArray )
                        {
                            if ( tmpArray.hasOwnProperty ( g ) )
                            {
                                sortArrs[ j ][ elIndex ] = tmpArray[ g ];
                                elIndex++;
                            }
                        }
                    }
                }
            }


            for ( j in sortKeys )
            {
                if ( sortKeys.hasOwnProperty ( j ) )
                {
                    for ( l = 0 ; l !== sortComponents.length ; l += 2 )
                    {
                        tmpArray = sortKeys[ j ].slice ( sortComponents[ l ] , sortComponents[ l + 1 ] + 1 );
                        nLastSort = [].concat ( lastSorts[ l ] );
                        tmpArray.sort ( sFunction );
                        elIndex = sortComponents[ l ];
                        for ( g in tmpArray )
                        {
                            if ( tmpArray.hasOwnProperty ( g ) )
                            {
                                sortKeys[ j ][ elIndex ] = tmpArray[ g ];
                                elIndex++;
                            }
                        }
                    }
                }
            }


            zlast = null;
            sortComponents = [];
            for ( j in sortArrs[ i ] )
            {
                if ( sortArrs[ i ].hasOwnProperty ( j ) )
                {
                    if ( !thingsToSort[ j ] )
                    {
                        if ( (sortComponents.length & 1) )
                        {
                            sortComponents.push ( j - 1 );
                        }
                        zlast = null;
                        continue;
                    }
                    if ( !(sortComponents.length & 1) )
                    {
                        if ( zlast !== null )
                        {
                            if ( sortArrs[ i ][ j ] === zlast )
                            {
                                sortComponents.push ( j - 1 );
                            }
                            else
                            {
                                thingsToSort[ j ] = false;
                            }
                        }
                        zlast = sortArrs[ i ][ j ];
                    }
                    else
                    {
                        if ( sortArrs[ i ][ j ] !== zlast )
                        {
                            sortComponents.push ( j - 1 );
                            zlast = sortArrs[ i ][ j ];
                        }
                    }
                }
            }

            if ( sortComponents.length & 1 )
            {
                sortComponents.push ( j );
            }
            if ( Object.prototype.toString.call ( arguments[ i ] ) === '[object Array]' )
            {
                args[ i ] = sortArrs[ i ];
            }
            else
            {
                for ( j in arguments[ i ] )
                {
                    if ( arguments[ i ].hasOwnProperty ( j ) )
                    {
                        delete arguments[ i ][ j ];
                    }
                }

                sal = sortArrs[ i ].length;
                for ( j = 0, vkey = 0 ; j < sal ; j++ )
                {
                    vkey = sortKeys[ i ][ j ];
                    args[ i ][ vkey ] = sortArrs[ i ][ j ];
                }

            }
            delete sortArrs[ i ];
            delete sortKeys[ i ];
        }
    }
    return true;
}

function array_pad ( input , pad_size , pad_value )
{

    var pad = [] , newArray = [] , newLength , diff = 0 , i = 0;

    if ( Object.prototype.toString.call ( input ) === '[object Array]' && !isNaN ( pad_size ) )
    {
        newLength = ((pad_size < 0) ? (pad_size * -1) : pad_size);
        diff = newLength - input.length;

        if ( diff > 0 )
        {
            for ( i = 0 ; i < diff ; i++ )
            {
                newArray[ i ] = pad_value;
            }
            pad = ((pad_size < 0) ? newArray.concat ( input ) : input.concat ( newArray ));
        }
        else
        {
            pad = input;
        }
    }

    return pad;
}

function array_pop ( inputArr )
{

    var key = '' , lastKey = '';

    if ( inputArr.hasOwnProperty ( 'length' ) )
    {

        if ( !inputArr.length )
        {

            return null;
        }
        return inputArr.pop ();
    }
    else
    {

        for ( key in inputArr )
        {
            if ( inputArr.hasOwnProperty ( key ) )
            {
                lastKey = key;
            }
        }
        if ( lastKey )
        {
            var tmp = inputArr[ lastKey ];
            delete(inputArr[ lastKey ]);
            return tmp;
        }
        else
        {
            return null;
        }
    }
}

function array_product ( input )
{

    var idx = 0 , product = 1 , il = 0;

    if ( Object.prototype.toString.call ( input ) !== '[object Array]' )
    {
        return null;
    }

    il = input.length;
    while (idx < il)
    {
        product *= (!isNaN ( input[ idx ] ) ? input[ idx ] : 0);
        idx++;
    }
    return product;
}

function array_push ( inputArr )
{

    var i = 0 , pr = '' , argv = arguments , argc = argv.length , allDigits = /^\d$/ , size = 0 , highestIdx = 0 , len = 0;
    if ( inputArr.hasOwnProperty ( 'length' ) )
    {
        for ( i = 1 ; i < argc ; i++ )
        {
            inputArr[ inputArr.length ] = argv[ i ];
        }
        return inputArr.length;
    }

    for ( pr in inputArr )
    {
        if ( inputArr.hasOwnProperty ( pr ) )
        {
            ++len;
            if ( pr.search ( allDigits ) !== -1 )
            {
                size = parseInt ( pr , 10 );
                highestIdx = size > highestIdx ? size : highestIdx;
            }
        }
    }
    for ( i = 1 ; i < argc ; i++ )
    {
        inputArr[ ++highestIdx ] = argv[ i ];
    }
    return len + i - 1;
}

function array_rand ( input , num_req )
{

    var indexes = [];
    var ticks = num_req || 1;
    var checkDuplicate = function ( input , value )
    {
        var exist = false , index = 0 , il = input.length;
        while (index < il)
        {
            if ( input[ index ] === value )
            {
                exist = true;
                break;
            }
            index++;
        }
        return exist;
    };

    if ( Object.prototype.toString.call ( input ) === '[object Array]' && ticks <= input.length )
    {
        while (true)
        {
            var rand = Math.floor ( (Math.random () * input.length) );
            if ( indexes.length === ticks )
            {
                break;
            }
            if ( !checkDuplicate ( indexes , rand ) )
            {
                indexes.push ( rand );
            }
        }
    }
    else
    {
        indexes = null;
    }

    return ((ticks == 1) ? indexes.join () : indexes);
}

function array_reduce ( a_input , callback )
{

    var lon = a_input.length;
    var res = 0 , i = 0;
    var tmp = [];

    for ( i = 0 ; i < lon ; i += 2 )
    {
        tmp[ 0 ] = a_input[ i ];
        if ( a_input[ (i + 1) ] )
        {
            tmp[ 1 ] = a_input[ (i + 1) ];
        }
        else
        {
            tmp[ 1 ] = 0;
        }
        res += callback.apply ( null , tmp );
        tmp = [];
    }

    return res;
}

function array_replace ( arr )
{

    var retObj = {} , i = 0 , p = '' , argl = arguments.length;

    if ( argl < 2 )
    {
        throw new Error ( 'There should be at least 2 arguments passed to array_replace()' );
    }

    for ( p in arr )
    {
        retObj[ p ] = arr[ p ];
    }

    for ( i = 1 ; i < argl ; i++ )
    {
        for ( p in arguments[ i ] )
        {
            retObj[ p ] = arguments[ i ][ p ];
        }
    }
    return retObj;
}

function array_replace_recursive ( arr )
{

    var retObj = {} , i = 0 , p = '' , argl = arguments.length;

    if ( argl < 2 )
    {
        throw new Error ( 'There should be at least 2 arguments passed to array_replace_recursive()' );
    }

    for ( p in arr )
    {
        retObj[ p ] = arr[ p ];
    }

    for ( i = 1 ; i < argl ; i++ )
    {
        for ( p in arguments[ i ] )
        {
            if ( retObj[ p ] && typeof retObj[ p ] === 'object' )
            {
                retObj[ p ] = this.array_replace_recursive ( retObj[ p ] , arguments[ i ][ p ] );
            }
            else
            {
                retObj[ p ] = arguments[ i ][ p ];
            }
        }
    }
    return retObj;
}

function array_reverse ( array , preserve_keys )
{

    var isArray = Object.prototype.toString.call ( array ) === '[object Array]' , tmp_arr = preserve_keys ? {} : [] , key;

    if ( isArray && !preserve_keys )
    {
        return array.slice ( 0 ).reverse ();
    }

    if ( preserve_keys )
    {
        var keys = [];
        for ( key in array )
        {

            keys.push ( key );

        }

        var i = keys.length;
        while (i--)
        {
            key = keys[ i ];



            tmp_arr[ key ] = array[ key ];
        }
    }
    else
    {
        for ( key in array )
        {

            tmp_arr.unshift ( array[ key ] );

        }
    }

    return tmp_arr;
}

function array_search ( needle , haystack , argStrict )
{

    var strict = !!argStrict , key = '';

    if ( haystack && typeof haystack === 'object' && haystack.change_key_case )
    {
        return haystack.search ( needle , argStrict );
    }
    if ( typeof needle === 'object' && needle.exec )
    {
        if ( !strict )
        {
            var flags = 'i' + (needle.global ? 'g' : '') + (needle.multiline ? 'm' : '') + (needle.sticky ? 'y' : '');
            needle = new RegExp ( needle.source , flags );
        }
        for ( key in haystack )
        {
            if ( needle.test ( haystack[ key ] ) )
            {
                return key;
            }
        }
        return false;
    }

    for ( key in haystack )
    {
        if ( (strict && haystack[ key ] === needle) || (!strict && haystack[ key ] == needle) )
        {
            return key;
        }
    }

    return false;
}

function array_shift ( inputArr )
{

    var props = false , shift = undefined , pr = '' , allDigits = /^\d$/ , int_ct = -1 , _checkToUpIndices = function ( arr , ct , key )
    {


        if ( arr[ ct ] !== undefined )
        {
            var tmp = ct;
            ct += 1;
            if ( ct === key )
            {
                ct += 1;
            }
            ct = _checkToUpIndices ( arr , ct , key );
            arr[ ct ] = arr[ tmp ];
            delete arr[ tmp ];
        }
        return ct;
    };

    if ( inputArr.length === 0 )
    {
        return null;
    }
    if ( inputArr.length > 0 )
    {
        return inputArr.shift ();
    }

    /*
     UNFINISHED FOR HANDLING OBJECTS
     for (pr in inputArr) {
     if (inputArr.hasOwnProperty(pr)) {
     props = true;
     shift = inputArr[pr];
     delete inputArr[pr];
     break;
     }
     }
     for (pr in inputArr) {
     if (inputArr.hasOwnProperty(pr)) {
     if (pr.search(allDigits) !== -1) {
     int_ct += 1;
     if (parseInt(pr, 10) === int_ct) {
     continue;
     }
     _checkToUpIndices(inputArr, int_ct, pr);
     arr[int_ct] = arr[pr];
     delete arr[pr];
     }
     }
     }
     if (!props) {
     return null;
     }
     return shift;
     */
}

function array_slice ( arr , offst , lgth , preserve_keys )
{

    /*
     if ('callee' in arr && 'length' in arr) {
     arr = Array.prototype.slice.call(arr);
     }
     */

    var key = '';

    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' || (preserve_keys && offst !== 0) )
    {
        var lgt = 0 , newAssoc = {};
        for ( key in arr )
        {
//if (key !== 'length') {
            lgt += 1;
            newAssoc[ key ] = arr[ key ];
//}
        }
        arr = newAssoc;

        offst = (offst < 0) ? lgt + offst : offst;
        lgth = lgth === undefined ? lgt : (lgth < 0) ? lgt + lgth - offst : lgth;

        var assoc = {};
        var start = false , it = -1 , arrlgth = 0 , no_pk_idx = 0;
        for ( key in arr )
        {
            ++it;
            if ( arrlgth >= lgth )
            {
                break;
            }
            if ( it == offst )
            {
                start = true;
            }
            if ( !start )
            {
                continue;
            }
            ++arrlgth;
            if ( this.is_int ( key ) && !preserve_keys )
            {
                assoc[ no_pk_idx++ ] = arr[ key ];
            }
            else
            {
                assoc[ key ] = arr[ key ];
            }
        }
//assoc.length = arrlgth;
        return assoc;
    }

    if ( lgth === undefined )
    {
        return arr.slice ( offst );
    }
    else if ( lgth >= 0 )
    {
        return arr.slice ( offst , offst + lgth );
    }
    else
    {
        return arr.slice ( offst , lgth );
    }
}

function array_splice ( arr , offst , lgth , replacement )
{

    var _checkToUpIndices = function ( arr , ct , key )
    {


        if ( arr[ ct ] !== undefined )
        {
            var tmp = ct;
            ct += 1;
            if ( ct === key )
            {
                ct += 1;
            }
            ct = _checkToUpIndices ( arr , ct , key );
            arr[ ct ] = arr[ tmp ];
            delete arr[ tmp ];
        }
        return ct;
    };

    if ( replacement && typeof replacement !== 'object' )
    {
        replacement = [ replacement ];
    }
    if ( lgth === undefined )
    {
        lgth = offst >= 0 ? arr.length - offst : -offst;
    }
    else if ( lgth < 0 )
    {
        lgth = (offst >= 0 ? arr.length - offst : -offst) + lgth;
    }

    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        /*if (arr.length !== undefined) {
         delete arr.length;
         }*/
        var lgt = 0 , ct = -1 , rmvd = [] , rmvdObj = {} , repl_ct = -1 , int_ct = -1;
        var returnArr = true , rmvd_ct = 0 , rmvd_lgth = 0 , key = '';

        for ( key in arr )
        {
            lgt += 1;
        }
        offst = (offst >= 0) ? offst : lgt + offst;
        for ( key in arr )
        {
            ct += 1;
            if ( ct < offst )
            {
                if ( this.is_int ( key ) )
                {
                    int_ct += 1;
                    if ( parseInt ( key , 10 ) === int_ct )
                    {
                        continue;
                    }
                    _checkToUpIndices ( arr , int_ct , key );

                    arr[ int_ct ] = arr[ key ];
                    delete arr[ key ];
                }
                continue;
            }
            if ( returnArr && this.is_int ( key ) )
            {
                rmvd.push ( arr[ key ] );
                rmvdObj[ rmvd_ct++ ] = arr[ key ];
            }
            else
            {
                rmvdObj[ key ] = arr[ key ];
                returnArr = false;
            }
            rmvd_lgth += 1;

            if ( replacement && replacement[ ++repl_ct ] )
            {
                arr[ key ] = replacement[ repl_ct ];
            }
            else
            {
                delete arr[ key ];
            }
        }

        return returnArr ? rmvd : rmvdObj;
    }

    if ( replacement )
    {
        replacement.unshift ( offst , lgth );
        return Array.prototype.splice.apply ( arr , replacement );
    }
    return arr.splice ( offst , lgth );
}

function array_sum ( array )
{

    var key , sum = 0;

    if ( array && typeof array === 'object' && array.change_key_case )
    {
        return array.sum.apply ( array , Array.prototype.slice.call ( arguments , 0 ) );
    }

    if ( typeof array !== 'object' )
    {
        return null;
    }

    for ( key in array )
    {
        if ( !isNaN ( parseFloat ( array[ key ] ) ) )
        {
            sum += parseFloat ( array[ key ] );
        }
    }

    return sum;
}

function array_udiff_assoc ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , cb = arguments[ arglm1 ] , arr = {} , i = 1 , k1 = '' , k = '';
    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb ( arr[ k ] , arr1[ k1 ] ) === 0 && k === k1 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_udiff ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , cb = arguments[ arglm1 ] , arr = '' , i = 1 , k1 = '' , k = '';
    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb ( arr[ k ] , arr1[ k1 ] ) === 0 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_udiff_uassoc ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , arglm2 = arglm1 - 1 , cb = arguments[ arglm1 ] , cb0 = arguments[ arglm2 ] , k1 = '' , i = 1 , k = '' ,
        arr                                                                                                                                            = {};

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;
    cb0 = (typeof cb0 === 'string') ? this.window[ cb0 ] : (Object.prototype.toString.call ( cb0 ) === '[object Array]') ? this.window[ cb0[ 0 ] ][ cb0[ 1 ] ] : cb0;

    arr1keys: for ( k1 in arr1 )
    {
        for ( i = 1 ; i < arglm2 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb0 ( arr[ k ] , arr1[ k1 ] ) === 0 && cb ( k , k1 ) === 0 )
                {

                    continue arr1keys;
                }
            }
            retArr[ k1 ] = arr1[ k1 ];
        }
    }

    return retArr;
}

function array_uintersect_assoc ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , arglm2 = arglm1 - 2 , cb = arguments[ arglm1 ] , k1 = '' , i = 1 , arr = {} , k = '';

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( k === k1 && cb ( arr[ k ] , arr1[ k1 ] ) === 0 )
                {
                    if ( i === arglm2 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array_uintersect ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , arglm2 = arglm1 - 1 , cb = arguments[ arglm1 ] , k1 = '' , i = 1 , arr = {} , k = '';

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < arglm1 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb ( arr[ k ] , arr1[ k1 ] ) === 0 )
                {
                    if ( i === arglm2 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }

                    continue arrs;
                }
            }

            continue arr1keys;
        }
    }

    return retArr;
}

function array_uintersect_uassoc ( arr1 )
{

    var retArr = {} , arglm1 = arguments.length - 1 , arglm2 = arglm1 - 1 , cb = arguments[ arglm1 ] , cb0 = arguments[ arglm2 ] , k1 = '' , i = 1 , k = '' ,
        arr                                                                                                                                            = {};

    cb = (typeof cb === 'string') ? this.window[ cb ] : (Object.prototype.toString.call ( cb ) === '[object Array]') ? this.window[ cb[ 0 ] ][ cb[ 1 ] ] : cb;
    cb0 = (typeof cb0 === 'string') ? this.window[ cb0 ] : (Object.prototype.toString.call ( cb0 ) === '[object Array]') ? this.window[ cb0[ 0 ] ][ cb0[ 1 ] ] : cb0;

    arr1keys: for ( k1 in arr1 )
    {
        arrs: for ( i = 1 ; i < arglm2 ; i++ )
        {
            arr = arguments[ i ];
            for ( k in arr )
            {
                if ( cb0 ( arr[ k ] , arr1[ k1 ] ) === 0 && cb ( k , k1 ) === 0 )
                {
                    if ( i === arguments.length - 3 )
                    {
                        retArr[ k1 ] = arr1[ k1 ];
                    }
                    continue arrs;
                }
            }
            continue arr1keys;
        }
    }

    return retArr;
}

function array_unique ( inputArr )
{

    var key = '' , tmp_arr2 = {} , val = '';

    var __array_search = function ( needle , haystack )
    {
        var fkey = '';
        for ( fkey in haystack )
        {
            if ( haystack.hasOwnProperty ( fkey ) )
            {
                if ( (haystack[ fkey ] + '') === (needle + '') )
                {
                    return fkey;
                }
            }
        }
        return false;
    };

    for ( key in inputArr )
    {
        if ( inputArr.hasOwnProperty ( key ) )
        {
            val = inputArr[ key ];
            if ( false === __array_search ( val , tmp_arr2 ) )
            {
                tmp_arr2[ key ] = val;
            }
        }
    }

    return tmp_arr2;
}

function array_unshift ( array )
{

    var i = arguments.length;

    while (--i !== 0)
    {
        arguments[ 0 ].unshift ( arguments[ i ] );
    }

    return arguments[ 0 ].length;
}

function array_values ( input )
{

    var tmp_arr = [] , key = '';

    if ( input && typeof input === 'object' && input.change_key_case )
    {
        return input.values ();
    }

    for ( key in input )
    {
        tmp_arr[ tmp_arr.length ] = input[ key ];
    }

    return tmp_arr;
}

function array_walk ( array , funcname , userdata )
{

    var key , value , ini;

    if ( !array || typeof array !== 'object' )
    {
        return false;
    }
    if ( typeof array === 'object' && array.change_key_case )
    {
        if ( arguments.length > 2 )
        {
            return array.walk ( funcname , userdata );
        }
        else
        {
            return array.walk ( funcname );
        }
    }

    try
    {
        if ( typeof funcname === 'function' )
        {
            for ( key in array )
            {
                if ( arguments.length > 2 )
                {
                    funcname ( array[ key ] , key , userdata );
                }
                else
                {
                    funcname ( array[ key ] , key );
                }
            }
        }
        else if ( typeof funcname === 'string' )
        {
            this.php_js = this.php_js || {};
            this.php_js.ini = this.php_js.ini || {};
            ini = this.php_js.ini[ 'phpjs.no-eval' ];
            if ( ini && (parseInt ( ini.local_value , 10 ) !== 0 && (!ini.local_value.toLowerCase || ini.local_value.toLowerCase () !== 'off')) )
            {
                if ( arguments.length > 2 )
                {
                    for ( key in array )
                    {
                        this.window[ funcname ] ( array[ key ] , key , userdata );
                    }
                }
                else
                {
                    for ( key in array )
                    {
                        this.window[ funcname ] ( array[ key ] , key );
                    }
                }
            }
            else
            {
                if ( arguments.length > 2 )
                {
                    for ( key in array )
                    {
                        eval ( funcname + '(array[key], key, userdata)' );
                    }
                }
                else
                {
                    for ( key in array )
                    {
                        eval ( funcname + '(array[key], key)' );
                    }
                }
            }
        }
        else if ( funcname && typeof funcname === 'object' && funcname.length === 2 )
        {
            var obj = funcname[ 0 ] , func = funcname[ 1 ];
            if ( arguments.length > 2 )
            {
                for ( key in array )
                {
                    obj[ func ] ( array[ key ] , key , userdata );
                }
            }
            else
            {
                for ( key in array )
                {
                    obj[ func ] ( array[ key ] , key );
                }
            }
        }
        else
        {
            return false;
        }
    } catch ( e )
    {
        return false;
    }

    return true;
}

function array_walk_recursive ( array , funcname , userdata )
{

    var key;

    if ( typeof array !== 'object' )
    {
        return false;
    }

    for ( key in array )
    {
        if ( typeof array[ key ] === 'object' )
        {
            return this.array_walk_recursive ( array[ key ] , funcname , userdata );
        }

        if ( typeof userdata !== 'undefined' )
        {
            eval ( funcname + '( array [key] , key , userdata  )' );
        }
        else
        {
            eval ( funcname + '(  userdata ) ' );
        }
    }

    return true;
}

function arsort ( inputArr , sort_flags )
{

    var valArr = [] , valArrLen = 0 , k , i , ret , sorter , that = this , strictForIn = false , populateArr = {};

    switch ( sort_flags )
    {
        case 'SORT_STRING':

            sorter = function ( a , b )
            {
                return that.strnatcmp ( b , a );
            };
            break;
        case 'SORT_LOCALE_STRING':

            var loc = this.i18n_loc_get_default ();
            sorter = this.php_js.i18nLocales[ loc ].sorting;
            break;
        case 'SORT_NUMERIC':

            sorter = function ( a , b )
            {
                return (a - b);
            };
            break;
        case 'SORT_REGULAR':

        default:
            sorter = function ( b , a )
            {
                var aFloat = parseFloat ( a ) , bFloat = parseFloat ( b ) , aNumeric = aFloat + '' === a , bNumeric = bFloat + '' === b;
                if ( aNumeric && bNumeric )
                {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                }
                else if ( aNumeric && !bNumeric )
                {
                    return 1;
                }
                else if ( !aNumeric && bNumeric )
                {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( [ k , inputArr[ k ] ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }
    valArr.sort ( function ( a , b )
                  {
                      return sorter ( a[ 1 ] , b[ 1 ] );
                  } );

    for ( i = 0, valArrLen = valArr.length ; i < valArrLen ; i++ )
    {
        populateArr[ valArr[ i ][ 0 ] ] = valArr[ i ][ 1 ];
    }

    return strictForIn || populateArr;
}

function asinh ( arg )
{

    return Math.log ( arg + Math.sqrt ( arg * arg + 1 ) );
}

function asin ( arg )
{

    return Math.asin ( arg );
}

function asort ( inputArr , sort_flags )
{

    var valArr = [] , valArrLen = 0 , k , i , ret , sorter , that = this , strictForIn = false , populateArr = {};

    switch ( sort_flags )
    {
        case 'SORT_STRING':

            sorter = function ( a , b )
            {
                return that.strnatcmp ( a , b );
            };
            break;
        case 'SORT_LOCALE_STRING':

            var loc = this.i18n_loc_get_default ();
            sorter = this.php_js.i18nLocales[ loc ].sorting;
            break;
        case 'SORT_NUMERIC':

            sorter = function ( a , b )
            {
                return (a - b);
            };
            break;
        case 'SORT_REGULAR':

        default:
            sorter = function ( a , b )
            {
                var aFloat = parseFloat ( a ) , bFloat = parseFloat ( b ) , aNumeric = aFloat + '' === a , bNumeric = bFloat + '' === b;
                if ( aNumeric && bNumeric )
                {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                }
                else if ( aNumeric && !bNumeric )
                {
                    return 1;
                }
                else if ( !aNumeric && bNumeric )
                {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( [ k , inputArr[ k ] ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }

    valArr.sort ( function ( a , b )
                  {
                      return sorter ( a[ 1 ] , b[ 1 ] );
                  } );

    for ( i = 0, valArrLen = valArr.length ; i < valArrLen ; i++ )
    {
        populateArr[ valArr[ i ][ 0 ] ] = valArr[ i ][ 1 ];
    }

    return strictForIn || populateArr;
}

function assert_options ( what , value )
{

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    this.php_js.assert_values = this.php_js.assert_values || {};

    var ini , dflt;
    switch ( what )
    {
        case 'ASSERT_ACTIVE':
            ini = 'assert.active';
            dflt = 1;
            break;
        case 'ASSERT_WARNING':
            ini = 'assert.warning';
            dflt = 1;
            throw 'We have not yet implemented warnings for us to throw in JavaScript (assert_options())';
        case 'ASSERT_BAIL':
            ini = 'assert.bail';
            dflt = 0;
            break;
        case 'ASSERT_QUIET_EVAL':
            ini = 'assert.quiet_eval';
            dflt = 0;
            break;
        case 'ASSERT_CALLBACK':
            ini = 'assert.callback';
            dflt = null;
            break;
        default:
            throw 'Improper type for assert_options()';
    }
    var originalValue = this.php_js.assert_values[ ini ] || (this.php_js.ini[ ini ] && this.php_js.ini[ ini ].local_value) || dflt;

    if ( value )
    {
        this.php_js.assert_values[ ini ] = value;
    }
    return originalValue;
}

function atan2 ( y , x )
{

    return Math.atan2 ( y , x );
}

function atanh ( arg )
{

    return 0.5 * Math.log ( (1 + arg) / (1 - arg) );
}

function atan ( arg )
{

    return Math.atan ( arg );
}

function base64_decode ( data )
{

    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1 , o2 , o3 , h1 , h2 , h3 , h4 , bits , i = 0 , ac = 0 , dec = '' , tmp_arr = [];

    if ( !data )
    {
        return data;
    }

    data += '';

    do
    {
        h1 = b64.indexOf ( data.charAt ( i++ ) );
        h2 = b64.indexOf ( data.charAt ( i++ ) );
        h3 = b64.indexOf ( data.charAt ( i++ ) );
        h4 = b64.indexOf ( data.charAt ( i++ ) );

        bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

        o1 = bits >> 16 & 0xff;
        o2 = bits >> 8 & 0xff;
        o3 = bits & 0xff;

        if ( h3 == 64 )
        {
            tmp_arr[ ac++ ] = String.fromCharCode ( o1 );
        }
        else if ( h4 == 64 )
        {
            tmp_arr[ ac++ ] = String.fromCharCode ( o1 , o2 );
        }
        else
        {
            tmp_arr[ ac++ ] = String.fromCharCode ( o1 , o2 , o3 );
        }
    } while (i < data.length);

    dec = tmp_arr.join ( '' );

    return decodeURIComponent ( escape ( dec.replace ( /\0+$/ , '' ) ) );
}

function base64_encode ( data )
{

    var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var o1 , o2 , o3 , h1 , h2 , h3 , h4 , bits , i = 0 , ac = 0 , enc = '' , tmp_arr = [];

    if ( !data )
    {
        return data;
    }

    data = unescape ( encodeURIComponent ( data ) );

    do
    {
        o1 = data.charCodeAt ( i++ );
        o2 = data.charCodeAt ( i++ );
        o3 = data.charCodeAt ( i++ );

        bits = o1 << 16 | o2 << 8 | o3;

        h1 = bits >> 18 & 0x3f;
        h2 = bits >> 12 & 0x3f;
        h3 = bits >> 6 & 0x3f;
        h4 = bits & 0x3f;


        tmp_arr[ ac++ ] = b64.charAt ( h1 ) + b64.charAt ( h2 ) + b64.charAt ( h3 ) + b64.charAt ( h4 );
    } while (i < data.length);

    enc = tmp_arr.join ( '' );

    var r = data.length % 3;

    return (r ? enc.slice ( 0 , r - 3 ) : enc) + '==='.slice ( r || 3 );
}

function base_convert ( number , frombase , tobase )
{

    return parseInt ( number + '' , frombase | 0 ).toString ( tobase | 0 );
}

function basename ( path , suffix )
{

    var b = path;
    var lastChar = b.charAt ( b.length - 1 );

    if ( lastChar === '/' || lastChar === '\\' )
    {
        b = b.slice ( 0 , -1 );
    }

    b = b.replace ( /^.*[\/\\]/g , '' );

    if ( typeof suffix === 'string' && b.substr ( b.length - suffix.length ) == suffix )
    {
        b = b.substr ( 0 , b.length - suffix.length );
    }

    return b;
}

function bcadd ( left_operand , right_operand , scale )
{

    var libbcmath = this._phpjs_shared_bc ();

    var first , second , result;

    if ( typeof scale === 'undefined' )
    {
        scale = libbcmath.scale;
    }
    scale = ((scale < 0) ? 0 : scale);

    first = libbcmath.bc_init_num ();
    second = libbcmath.bc_init_num ();
    result = libbcmath.bc_init_num ();

    first = libbcmath.php_str2num ( left_operand.toString () );
    second = libbcmath.php_str2num ( right_operand.toString () );

    result = libbcmath.bc_add ( first , second , scale );

    if ( result.n_scale > scale )
    {
        result.n_scale = scale;
    }

    return result.toString ();
}

function bccomp ( left_operand , right_operand , scale )
{

    var libbcmath = this._phpjs_shared_bc ();

    var first , second;//bc_num
    if ( typeof scale === 'undefined' )
    {
        scale = libbcmath.scale;
    }
    scale = ((scale < 0) ? 0 : scale);

    first = libbcmath.bc_init_num ();
    second = libbcmath.bc_init_num ();

    first = libbcmath.bc_str2num ( left_operand.toString () , scale );
    second = libbcmath.bc_str2num ( right_operand.toString () , scale );
    return libbcmath.bc_compare ( first , second , scale );
}

function bcdiv ( left_operand , right_operand , scale )
{

    var libbcmath = this._phpjs_shared_bc ();

    var first , second , result;

    if ( typeof scale === 'undefined' )
    {
        scale = libbcmath.scale;
    }
    scale = ((scale < 0) ? 0 : scale);

    first = libbcmath.bc_init_num ();
    second = libbcmath.bc_init_num ();
    result = libbcmath.bc_init_num ();

    first = libbcmath.php_str2num ( left_operand.toString () );
    second = libbcmath.php_str2num ( right_operand.toString () );

    result = libbcmath.bc_divide ( first , second , scale );
    if ( result === -1 )
    {

        throw new Error ( 11 , '(BC) Division by zero' );
    }
    if ( result.n_scale > scale )
    {
        result.n_scale = scale;
    }
    return result.toString ();
}

function bcmul ( left_operand , right_operand , scale )
{

    var libbcmath = this._phpjs_shared_bc ();

    var first , second , result;

    if ( typeof scale === 'undefined' )
    {
        scale = libbcmath.scale;
    }
    scale = ((scale < 0) ? 0 : scale);

    first = libbcmath.bc_init_num ();
    second = libbcmath.bc_init_num ();
    result = libbcmath.bc_init_num ();

    first = libbcmath.php_str2num ( left_operand.toString () );
    second = libbcmath.php_str2num ( right_operand.toString () );

    result = libbcmath.bc_multiply ( first , second , scale );

    if ( result.n_scale > scale )
    {
        result.n_scale = scale;
    }
    return result.toString ();
}

function bcround ( val , precision )
{

    var libbcmath = this._phpjs_shared_bc ();

    var temp , result , digit;
    var right_operand;

    temp = libbcmath.bc_init_num ();
    temp = libbcmath.php_str2num ( val.toString () );

    if ( precision >= temp.n_scale )
    {

        while (temp.n_scale < precision)
        {
            temp.n_value[ temp.n_len + temp.n_scale ] = 0;
            temp.n_scale++;
        }
        return temp.toString ();
    }

    digit = temp.n_value[ temp.n_len + precision ];

    right_operand = libbcmath.bc_init_num ();
    right_operand = libbcmath.bc_new_num ( 1 , precision );

    if ( digit >= 5 )
    {
//round away from zero by adding 1 (or -1) at the "precision".. ie 1.44999 @ 3dp = (1.44999 + 0.001).toString().substr(0,5)
        right_operand.n_value[ right_operand.n_len + right_operand.n_scale - 1 ] = 1;
        if ( temp.n_sign == libbcmath.MINUS )
        {

            right_operand.n_sign = libbcmath.MINUS;
        }
        result = libbcmath.bc_add ( temp , right_operand , precision );
    }
    else
    {

        result = temp;
    }

    if ( result.n_scale > precision )
    {
        result.n_scale = precision;
    }
    return result.toString ();
}

function bcscale ( scale )
{

    var libbcmath = this._phpjs_shared_bc ();

    scale = parseInt ( scale , 10 );
    if ( isNaN ( scale ) )
    {
        return false;
    }
    if ( scale < 0 )
    {
        return false;
    }
    libbcmath.scale = scale;
    return true;
}

function bcsub ( left_operand , right_operand , scale )
{

    var libbcmath = this._phpjs_shared_bc ();

    var first , second , result;

    if ( typeof scale === 'undefined' )
    {
        scale = libbcmath.scale;
    }
    scale = ((scale < 0) ? 0 : scale);

    first = libbcmath.bc_init_num ();
    second = libbcmath.bc_init_num ();
    result = libbcmath.bc_init_num ();

    first = libbcmath.php_str2num ( left_operand.toString () );
    second = libbcmath.php_str2num ( right_operand.toString () );

    result = libbcmath.bc_sub ( first , second , scale );

    if ( result.n_scale > scale )
    {
        result.n_scale = scale;
    }

    return result.toString ();
}

function bin2hex ( s )
{

    var i , l , o = '' , n;

    s += '';

    for ( i = 0, l = s.length ; i < l ; i++ )
    {
        n = s.charCodeAt ( i ).toString ( 16 );
        o += n.length < 2 ? '0' + n : n;
    }

    return o;
}

function bindec ( binary_string )
{

    binary_string = (binary_string + '').replace ( /[^01]/gi , '' );
    return parseInt ( binary_string , 2 );
}

function call_user_func_array ( cb , parameters )
{

    var func;

    if ( typeof cb === 'string' )
    {
        func = (typeof this[ cb ] === 'function') ? this[ cb ] : func = (new Function ( null , 'return ' + cb )) ();
    }
    else if ( Object.prototype.toString.call ( cb ) === '[object Array]' )
    {
        func = (typeof cb[ 0 ] === 'string') ? eval ( cb[ 0 ] + "['" + cb[ 1 ] + "']" ) : func = cb[ 0 ][ cb[ 1 ] ];
    }
    else if ( typeof cb === 'function' )
    {
        func = cb;
    }

    if ( typeof func !== 'function' )
    {
        throw new Error ( func + ' is not a valid function' );
    }

    return (typeof cb[ 0 ] === 'string') ? func.apply ( eval ( cb[ 0 ] ) , parameters ) : (typeof cb[ 0 ] !== 'object') ? func.apply ( null , parameters ) : func.apply ( cb[ 0 ] , parameters );
}

function call_user_func ( cb )
{

    var func;

    if ( typeof cb === 'string' )
    {
        func = (typeof this[ cb ] === 'function') ? this[ cb ] : func = (new Function ( null , 'return ' + cb )) ();
    }
    else if ( Object.prototype.toString.call ( cb ) === '[object Array]' )
    {
        func = (typeof cb[ 0 ] === 'string') ? eval ( cb[ 0 ] + "['" + cb[ 1 ] + "']" ) : func = cb[ 0 ][ cb[ 1 ] ];
    }
    else if ( typeof cb === 'function' )
    {
        func = cb;
    }

    if ( typeof func !== 'function' )
    {
        throw new Error ( func + ' is not a valid function' );
    }

    var parameters = Array.prototype.slice.call ( arguments , 1 );
    return (typeof cb[ 0 ] === 'string') ? func.apply ( eval ( cb[ 0 ] ) , parameters ) : (typeof cb[ 0 ] !== 'object') ? func.apply ( null , parameters ) : func.apply ( cb[ 0 ] , parameters );
}

function ceil ( value )
{

    return Math.ceil ( value );
}

function checkdate ( m , d , y )
{

    return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date ( y , m , 0 )).getDate ();
}

function chop ( str , charlist )
{

    return this.rtrim ( str , charlist );
}

function chr ( codePt )
{

    if ( codePt > 0xFFFF )
    {



        codePt -= 0x10000;
        return String.fromCharCode ( 0xD800 + (codePt >> 10) , 0xDC00 + (codePt & 0x3FF) );
    }
    return String.fromCharCode ( codePt );
}

function chunk_split ( body , chunklen , end )
{

    chunklen = parseInt ( chunklen , 10 ) || 76;
    end = end || '\r\n';

    if ( chunklen < 1 )
    {
        return false;
    }

    return body.match ( new RegExp ( '.{0,' + chunklen + '}' , 'g' ) ).join ( end );
}

function compact ()
{

    var matrix = {} , that = this;

    var process = function ( value )
    {
        var i = 0 , l = value.length , key_value = '';
        for ( i = 0 ; i < l ; i++ )
        {
            key_value = value[ i ];
            if ( Object.prototype.toString.call ( key_value ) === '[object Array]' )
            {
                process ( key_value );
            }
            else
            {
                if ( typeof that.window[ key_value ] !== 'undefined' )
                {
                    matrix[ key_value ] = that.window[ key_value ];
                }
            }
        }
        return true;
    };

    process ( arguments );
    return matrix;
}

function convert_cyr_string ( str , from , to )
{

    var _cyr_win1251  = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 46 , 154 , 174 , 190 , 46 , 159 , 189 , 46 , 46 , 179 , 191 , 180 , 157 , 46 , 46 , 156 , 183 , 46 , 46 , 182 , 166 , 173 , 46 , 46 , 158 , 163 , 152 , 164 , 155 , 46 , 46 , 46 , 167 , 225 , 226 , 247 , 231 , 228 , 229 , 246 , 250 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 240 , 242 , 243 , 244 , 245 , 230 , 232 , 227 , 254 , 251 , 253 , 255 , 249 , 248 , 252 , 224 , 241 , 193 , 194 , 215 , 199 , 196 , 197 , 214 , 218 , 201 , 202 , 203 , 204 , 205 , 206 , 207 , 208 , 210 , 211 , 212 , 213 , 198 , 200 , 195 , 222 , 219 , 221 , 223 , 217 , 216 , 220 , 192 , 209 , 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 184 , 186 , 32 , 179 , 191 , 32 , 32 , 32 , 32 , 32 , 180 , 162 , 32 , 32 , 32 , 32 , 168 , 170 , 32 , 178 , 175 , 32 , 32 , 32 , 32 , 32 , 165 , 161 , 169 , 254 , 224 , 225 , 246 , 228 , 229 , 244 , 227 , 245 , 232 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 255 , 240 , 241 , 242 , 243 , 230 , 226 , 252 , 251 , 231 , 248 , 253 , 249 , 247 , 250 , 222 , 192 , 193 , 214 , 196 , 197 , 212 , 195 , 213 , 200 , 201 , 202 , 203 , 204 , 205 , 206 , 207 , 223 , 208 , 209 , 210 , 211 , 198 , 194 , 220 , 219 , 199 , 216 , 221 , 217 , 215 , 218 ] ,
        _cyr_cp866    = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 225 , 226 , 247 , 231 , 228 , 229 , 246 , 250 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 240 , 242 , 243 , 244 , 245 , 230 , 232 , 227 , 254 , 251 , 253 , 255 , 249 , 248 , 252 , 224 , 241 , 193 , 194 , 215 , 199 , 196 , 197 , 214 , 218 , 201 , 202 , 203 , 204 , 205 , 206 , 207 , 208 , 35 , 35 , 35 , 124 , 124 , 124 , 124 , 43 , 43 , 124 , 124 , 43 , 43 , 43 , 43 , 43 , 43 , 45 , 45 , 124 , 45 , 43 , 124 , 124 , 43 , 43 , 45 , 45 , 124 , 45 , 43 , 45 , 45 , 45 , 45 , 43 , 43 , 43 , 43 , 43 , 43 , 43 , 43 , 35 , 35 , 124 , 124 , 35 , 210 , 211 , 212 , 213 , 198 , 200 , 195 , 222 , 219 , 221 , 223 , 217 , 216 , 220 , 192 , 209 , 179 , 163 , 180 , 164 , 183 , 167 , 190 , 174 , 32 , 149 , 158 , 32 , 152 , 159 , 148 , 154 , 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 205 , 186 , 213 , 241 , 243 , 201 , 32 , 245 , 187 , 212 , 211 , 200 , 190 , 32 , 247 , 198 , 199 , 204 , 181 , 240 , 242 , 185 , 32 , 244 , 203 , 207 , 208 , 202 , 216 , 32 , 246 , 32 , 238 , 160 , 161 , 230 , 164 , 165 , 228 , 163 , 229 , 168 , 169 , 170 , 171 , 172 , 173 , 174 , 175 , 239 , 224 , 225 , 226 , 227 , 166 , 162 , 236 , 235 , 167 , 232 , 237 , 233 , 231 , 234 , 158 , 128 , 129 , 150 , 132 , 133 , 148 , 131 , 149 , 136 , 137 , 138 , 139 , 140 , 141 , 142 , 143 , 159 , 144 , 145 , 146 , 147 , 134 , 130 , 156 , 155 , 135 , 152 , 157 , 153 , 151 , 154 ] ,
        _cyr_iso88595 = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 179 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 225 , 226 , 247 , 231 , 228 , 229 , 246 , 250 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 240 , 242 , 243 , 244 , 245 , 230 , 232 , 227 , 254 , 251 , 253 , 255 , 249 , 248 , 252 , 224 , 241 , 193 , 194 , 215 , 199 , 196 , 197 , 214 , 218 , 201 , 202 , 203 , 204 , 205 , 206 , 207 , 208 , 210 , 211 , 212 , 213 , 198 , 200 , 195 , 222 , 219 , 221 , 223 , 217 , 216 , 220 , 192 , 209 , 32 , 163 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 241 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 161 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 32 , 238 , 208 , 209 , 230 , 212 , 213 , 228 , 211 , 229 , 216 , 217 , 218 , 219 , 220 , 221 , 222 , 223 , 239 , 224 , 225 , 226 , 227 , 214 , 210 , 236 , 235 , 215 , 232 , 237 , 233 , 231 , 234 , 206 , 176 , 177 , 198 , 180 , 181 , 196 , 179 , 197 , 184 , 185 , 186 , 187 , 188 , 189 , 190 , 191 , 207 , 192 , 193 , 194 , 195 , 182 , 178 , 204 , 203 , 183 , 200 , 205 , 201 , 199 , 202 ] ,
        _cyr_mac      = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 225 , 226 , 247 , 231 , 228 , 229 , 246 , 250 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 240 , 242 , 243 , 244 , 245 , 230 , 232 , 227 , 254 , 251 , 253 , 255 , 249 , 248 , 252 , 224 , 241 , 160 , 161 , 162 , 163 , 164 , 165 , 166 , 167 , 168 , 169 , 170 , 171 , 172 , 173 , 174 , 175 , 176 , 177 , 178 , 179 , 180 , 181 , 182 , 183 , 184 , 185 , 186 , 187 , 188 , 189 , 190 , 191 , 128 , 129 , 130 , 131 , 132 , 133 , 134 , 135 , 136 , 137 , 138 , 139 , 140 , 141 , 142 , 143 , 144 , 145 , 146 , 147 , 148 , 149 , 150 , 151 , 152 , 153 , 154 , 155 , 156 , 179 , 163 , 209 , 193 , 194 , 215 , 199 , 196 , 197 , 214 , 218 , 201 , 202 , 203 , 204 , 205 , 206 , 207 , 208 , 210 , 211 , 212 , 213 , 198 , 200 , 195 , 222 , 219 , 221 , 223 , 217 , 216 , 220 , 192 , 255 , 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20 , 21 , 22 , 23 , 24 , 25 , 26 , 27 , 28 , 29 , 30 , 31 , 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 40 , 41 , 42 , 43 , 44 , 45 , 46 , 47 , 48 , 49 , 50 , 51 , 52 , 53 , 54 , 55 , 56 , 57 , 58 , 59 , 60 , 61 , 62 , 63 , 64 , 65 , 66 , 67 , 68 , 69 , 70 , 71 , 72 , 73 , 74 , 75 , 76 , 77 , 78 , 79 , 80 , 81 , 82 , 83 , 84 , 85 , 86 , 87 , 88 , 89 , 90 , 91 , 92 , 93 , 94 , 95 , 96 , 97 , 98 , 99 , 100 , 101 , 102 , 103 , 104 , 105 , 106 , 107 , 108 , 109 , 110 , 111 , 112 , 113 , 114 , 115 , 116 , 117 , 118 , 119 , 120 , 121 , 122 , 123 , 124 , 125 , 126 , 127 , 192 , 193 , 194 , 195 , 196 , 197 , 198 , 199 , 200 , 201 , 202 , 203 , 204 , 205 , 206 , 207 , 208 , 209 , 210 , 211 , 212 , 213 , 214 , 215 , 216 , 217 , 218 , 219 , 220 , 221 , 222 , 223 , 160 , 161 , 162 , 222 , 164 , 165 , 166 , 167 , 168 , 169 , 170 , 171 , 172 , 173 , 174 , 175 , 176 , 177 , 178 , 221 , 180 , 181 , 182 , 183 , 184 , 185 , 186 , 187 , 188 , 189 , 190 , 191 , 254 , 224 , 225 , 246 , 228 , 229 , 244 , 227 , 245 , 232 , 233 , 234 , 235 , 236 , 237 , 238 , 239 , 223 , 240 , 241 , 242 , 243 , 230 , 226 , 252 , 251 , 231 , 248 , 253 , 249 , 247 , 250 , 158 , 128 , 129 , 150 , 132 , 133 , 148 , 131 , 149 , 136 , 137 , 138 , 139 , 140 , 141 , 142 , 143 , 159 , 144 , 145 , 146 , 147 , 134 , 130 , 156 , 155 , 135 , 152 , 157 , 153 , 151 , 154 ];

    var from_table = null , to_table = null , tmp , i = 0 , retStr = '';

    switch ( from.toUpperCase () )
    {
        case 'W':
            from_table = _cyr_win1251;
            break;
        case 'A':
        case 'D':
            from_table = _cyr_cp866;
            break;
        case 'I':
            from_table = _cyr_iso88595;
            break;
        case 'M':
            from_table = _cyr_mac;
            break;
        case 'K':
            break;
        default:
            throw 'Unknown source charset: ' + from;
    }

    switch ( to.toUpperCase () )
    {
        case 'W':
            to_table = _cyr_win1251;
            break;
        case 'A':
        case 'D':
            to_table = _cyr_cp866;
            break;
        case 'I':
            to_table = _cyr_iso88595;
            break;
        case 'M':
            to_table = _cyr_mac;
            break;
        case 'K':
            break;
        default:
            throw 'Unknown destination charset: ' + to;
    }

    if ( !str )
    {
        return str;
    }

    for ( i = 0 ; i < str.length ; i++ )
    {
        tmp = (from_table === null) ? str.charAt ( i ) : String.fromCharCode ( from_table[ str.charAt ( i ).charCodeAt ( 0 ) ] );
        retStr += (to_table === null) ? tmp : String.fromCharCode ( to_table[ tmp.charCodeAt ( 0 ) + 256 ] );
    }
    return retStr;
}

function convert_uuencode ( str )
{

    var chr = function ( c )
    {
        return String.fromCharCode ( c );
    };

    if ( !str || str === '' )
    {
        return chr ( 0 );
    }
    else if ( !this.is_scalar ( str ) )
    {
        return false;
    }

    var c = 0 , u = 0 , i = 0 , a = 0;
    var encoded = '' , tmp1 = '' , tmp2 = '' , bytes = {};

    var chunk = function ()
    {
        bytes = str.substr ( u , 45 );
        for ( i in bytes )
        {
            bytes[ i ] = bytes[ i ].charCodeAt ( 0 );
        }
        if ( bytes.length != 0 )
        {
            return bytes.length;
        }
        else
        {
            return 0;
        }
    };

    while (chunk () !== 0)
    {
        c = chunk ();
        u += 45;


        encoded += chr ( c + 32 );


        for ( i in bytes )
        {
            tmp1 = bytes[ i ].charCodeAt ( 0 ).toString ( 2 );
            while (tmp1.length < 8)
            {
                tmp1 = '0' + tmp1;
            }
            tmp2 += tmp1;
        }

        while (tmp2.length % 6)
        {
            tmp2 = tmp2 + '0';
        }

        for ( i = 0 ; i <= (tmp2.length / 6) - 1 ; i++ )
        {
            tmp1 = tmp2.substr ( a , 6 );
            if ( tmp1 == '000000' )
            {
                encoded += chr ( 96 );
            }
            else
            {
                encoded += chr ( parseInt ( tmp1 , 2 ) + 32 );
            }
            a += 6;
        }
        a = 0;
        tmp2 = '';
        encoded += '\n';
    }

    encoded += chr ( 96 ) + '\n';

    return encoded;
}

function cosh ( arg )
{

    return (Math.exp ( arg ) + Math.exp ( -arg )) / 2;
}

function cos ( arg )
{

    return Math.cos ( arg );
}

function count_chars ( str , mode )
{

    var result = {} , resultArr = [] , i;

    str = ('' + str).split ( '' ).sort ().join ( '' ).match ( /(.)\1*/g );

    if ( (mode & 1) == 0 )
    {
        for ( i = 0 ; i != 256 ; i++ )
        {
            result[ i ] = 0;
        }
    }

    if ( mode === 2 || mode === 4 )
    {

        for ( i = 0 ; i != str.length ; i += 1 )
        {
            delete result[ str[ i ].charCodeAt ( 0 ) ];
        }
        for ( i in result )
        {
            result[ i ] = (mode === 4) ? String.fromCharCode ( i ) : 0;
        }

    }
    else if ( mode === 3 )
    {

        for ( i = 0 ; i != str.length ; i += 1 )
        {
            result[ i ] = str[ i ].slice ( 0 , 1 );
        }

    }
    else
    {

        for ( i = 0 ; i != str.length ; i += 1 )
        {
            result[ str[ i ].charCodeAt ( 0 ) ] = str[ i ].length;
        }

    }
    if ( mode < 3 )
    {
        return result;
    }

    for ( i in result )
    {
        resultArr.push ( result[ i ] );
    }
    return resultArr.join ( '' );
}

function count ( mixed_var , mode )
{

    var key , cnt = 0;

    if ( mixed_var === null || typeof mixed_var === 'undefined' )
    {
        return 0;
    }
    else if ( mixed_var.constructor !== Array && mixed_var.constructor !== Object )
    {
        return 1;
    }

    if ( mode === 'COUNT_RECURSIVE' )
    {
        mode = 1;
    }
    if ( mode != 1 )
    {
        mode = 0;
    }

    for ( key in mixed_var )
    {
        if ( mixed_var.hasOwnProperty ( key ) )
        {
            cnt++;
            if ( mode == 1 && mixed_var[ key ] && (mixed_var[ key ].constructor === Array || mixed_var[ key ].constructor === Object) )
            {
                cnt += this.count ( mixed_var[ key ] , 1 );
            }
        }
    }

    return cnt;
}

function crc32 ( str )
{

    str = this.utf8_encode ( str );
    var table = '00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D';

    var crc = 0;
    var x = 0;
    var y = 0;

    crc = crc ^ (-1);
    for ( var i = 0 , iTop = str.length ; i < iTop ; i++ )
    {
        y = (crc ^ str.charCodeAt ( i )) & 0xFF;
        x = '0x' + table.substr ( y * 9 , 8 );
        crc = (crc >>> 8) ^ x;
    }

    return crc ^ (-1);
}

function create_function ( args , code )
{

    try
    {
        return Function.apply ( null , args.split ( ',' ).concat ( code ) );
    } catch ( e )
    {
        return false;
    }
}

function ctype_alnum ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.an ) !== -1;
}

function ctype_alpha ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.al ) !== -1;
}

function ctype_cntrl ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.ct ) !== -1;
}

function ctype_digit ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.dg ) !== -1;
}

function ctype_graph ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.gr ) !== -1;
}

function ctype_lower ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.lw ) !== -1;
}

function ctype_print ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.pr ) !== -1;
}

function ctype_punct ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.pu ) !== -1;
}

function ctype_space ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.sp ) !== -1;
}

function ctype_upper ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.up ) !== -1;
}

function ctype_xdigit ( text )
{

    if ( typeof text !== 'string' )
    {
        return false;
    }
    this.setlocale ( 'LC_ALL' , 0 );
    return text.search ( this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.xd ) !== -1;
}

function current ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }
    if ( pointers.indexOf ( arr ) === -1 )
    {
        pointers.push ( arr , 0 );
    }
    var arrpos = pointers.indexOf ( arr );
    var cursor = pointers[ arrpos + 1 ];
    if ( Object.prototype.toString.call ( arr ) === '[object Array]' )
    {
        return arr[ cursor ] || false;
    }
    var ct = 0;
    for ( var k in arr )
    {
        if ( ct === cursor )
        {
            return arr[ k ];
        }
        ct++;
    }
    return false;
}

function date ( format , timestamp )
{

    var that = this;
    var jsdate , f;
    var txt_words = [ 'Sun' , 'Mon' , 'Tues' , 'Wednes' , 'Thurs' , 'Fri' , 'Satur' , 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December' ];
    var formatChr = /\\?(.?)/gi;
    var formatChrCb = function ( t , s )
    {
        return f[ t ] ? f[ t ] () : s;
    };
    var _pad = function ( n , c )
    {
        n = String ( n );
        while (n.length < c)
        {
            n = '0' + n;
        }
        return n;
    };
    f = {

        d     : function ()
        {
            return _pad ( f.j () , 2 );
        } , D : function ()
        {
            return f.l ().slice ( 0 , 3 );
        } , j : function ()
        {
            return jsdate.getDate ();
        } , l : function ()
        {
            return txt_words[ f.w () ] + 'day';
        } , N : function ()
        {
            return f.w () || 7;
        } , S : function ()
        {
            var j = f.j ();
            var i = j % 10;
            if ( i <= 3 && parseInt ( (j % 100) / 10 , 10 ) == 1 )
            {
                i = 0;
            }
            return [ 'st' , 'nd' , 'rd' ][ i - 1 ] || 'th';
        } , w : function ()
        {
            return jsdate.getDay ();
        } , z : function ()
        {
            var a = new Date ( f.Y () , f.n () - 1 , f.j () );
            var b = new Date ( f.Y () , 0 , 1 );
            return Math.round ( (a - b) / 864e5 );
        } ,


        W : function ()
        {
            var a = new Date ( f.Y () , f.n () - 1 , f.j () - f.N () + 3 );
            var b = new Date ( a.getFullYear () , 0 , 4 );
            return _pad ( 1 + Math.round ( (a - b) / 864e5 / 7 ) , 2 );
        } ,


        F     : function ()
        {
            return txt_words[ 6 + f.n () ];
        } , m : function ()
        {
            return _pad ( f.n () , 2 );
        } , M : function ()
        {
            return f.F ().slice ( 0 , 3 );
        } , n : function ()
        {
            return jsdate.getMonth () + 1;
        } , t : function ()
        {
            return (new Date ( f.Y () , f.n () , 0 )).getDate ();
        } ,


        L     : function ()
        {
            var j = f.Y ();
            return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
        } , o : function ()
        {
            var n = f.n ();
            var W = f.W ();
            var Y = f.Y ();
            return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
        } , Y : function ()
        {
            return jsdate.getFullYear ();
        } , y : function ()
        {
            return f.Y ().toString ().slice ( -2 );
        } ,


        a     : function ()
        {
            return jsdate.getHours () > 11 ? 'pm' : 'am';
        } , A : function ()
        {
            return f.a ().toUpperCase ();
        } , B : function ()
        {
            var H = jsdate.getUTCHours () * 36e2;

            var i = jsdate.getUTCMinutes () * 60;

            var s = jsdate.getUTCSeconds ();
            return _pad ( Math.floor ( (H + i + s + 36e2) / 86.4 ) % 1e3 , 3 );
        } , g : function ()
        {
            return f.G () % 12 || 12;
        } , G : function ()
        {
            return jsdate.getHours ();
        } , h : function ()
        {
            return _pad ( f.g () , 2 );
        } , H : function ()
        {
            return _pad ( f.G () , 2 );
        } , i : function ()
        {
            return _pad ( jsdate.getMinutes () , 2 );
        } , s : function ()
        {
            return _pad ( jsdate.getSeconds () , 2 );
        } , u : function ()
        {
            return _pad ( jsdate.getMilliseconds () * 1000 , 6 );
        } ,


        e     : function ()
        {


            /*              return that.date_default_timezone_get();
             */
            throw 'Not supported (see source code of date() for timezone on how to add support)';
        } , I : function ()
        {


            var a = new Date ( f.Y () , 0 );

            var c = Date.UTC ( f.Y () , 0 );

            var b = new Date ( f.Y () , 6 );

            var d = Date.UTC ( f.Y () , 6 );
            return ((a - c) !== (b - d)) ? 1 : 0;
        } , O : function ()
        {
            var tzo = jsdate.getTimezoneOffset ();
            var a = Math.abs ( tzo );
            return (tzo > 0 ? '-' : '+') + _pad ( Math.floor ( a / 60 ) * 100 + a % 60 , 4 );
        } , P : function ()
        {
            var O = f.O ();
            return (O.substr ( 0 , 3 ) + ':' + O.substr ( 3 , 2 ));
        } , T : function ()
        {


            /*              var abbr, i, os, _default;
             if (!tal.length) {
             tal = that.timezone_abbreviations_list();
             }
             if (that.php_js && that.php_js.default_timezone) {
             _default = that.php_js.default_timezone;
             for (abbr in tal) {
             for (i = 0; i < tal[abbr].length; i++) {
             if (tal[abbr][i].timezone_id === _default) {
             return abbr.toUpperCase();
             }
             }
             }
             }
             for (abbr in tal) {
             for (i = 0; i < tal[abbr].length; i++) {
             os = -jsdate.getTimezoneOffset() * 60;
             if (tal[abbr][i].offset === os) {
             return abbr.toUpperCase();
             }
             }
             }
             */
            return 'UTC';
        } , Z : function ()
        {
            return -jsdate.getTimezoneOffset () * 60;
        } ,


        c     : function ()
        {
            return 'Y-m-d\\TH:i:sP'.replace ( formatChr , formatChrCb );
        } , r : function ()
        {
            return 'D, d M Y H:i:s O'.replace ( formatChr , formatChrCb );
        } , U : function ()
        {
            return jsdate / 1000 | 0;
        }
    };
    this.date = function ( format , timestamp )
    {
        that = this;
        jsdate = (timestamp === undefined ? new Date () :
                  (timestamp instanceof Date) ? new Date ( timestamp ) :
                  new Date ( timestamp * 1000 )
        );
        return format.replace ( formatChr , formatChrCb );
    };
    return this.date ( format , timestamp );
}

function date_parse ( date )
{

    this.php_js = this.php_js || {};

    var ts , warningsOffset = this.php_js.warnings ? this.php_js.warnings.length : null , errorsOffset = this.php_js.errors ? this.php_js.errors.length : null;

    try
    {
        this.php_js.date_parse_state = true;
        ts = this.strtotime ( date );
        this.php_js.date_parse_state = false;
    } finally
    {
        if ( !ts )
        {
            return false;
        }
    }

    var dt = new Date ( ts * 1000 );

    var retObj = {
        warning_count : warningsOffset !== null ? this.php_js.warnings.slice ( warningsOffset ).length : 0 ,
        warnings      : warningsOffset !== null ? this.php_js.warnings.slice ( warningsOffset ) : [] ,
        error_count   : errorsOffset !== null ? this.php_js.errors.slice ( errorsOffset ).length : 0 ,
        errors        : errorsOffset !== null ? this.php_js.errors.slice ( errorsOffset ) : []
    };
    retObj.year = dt.getFullYear ();
    retObj.month = dt.getMonth () + 1;
    retObj.day = dt.getDate ();
    retObj.hour = dt.getHours ();
    retObj.minute = dt.getMinutes ();
    retObj.second = dt.getSeconds ();
    retObj.fraction = parseFloat ( '0.' + dt.getMilliseconds () );
    retObj.is_localtime = dt.getTimezoneOffset () !== 0;

    return retObj;
}

function decbin ( number )
{

    if ( number < 0 )
    {
        number = 0xFFFFFFFF + number + 1;
    }
    return parseInt ( number , 10 ).toString ( 2 );
}

function dechex ( number )
{

    if ( number < 0 )
    {
        number = 0xFFFFFFFF + number + 1;
    }
    return parseInt ( number , 10 ).toString ( 16 );
}

function decoct ( number )
{

    if ( number < 0 )
    {
        number = 0xFFFFFFFF + number + 1;
    }
    return parseInt ( number , 10 ).toString ( 8 );
}

function deg2rad ( angle )
{

    return angle * .017453292519943295;
}

function dirname ( path )
{

    return path.replace ( /\\/g , '/' ).replace ( /\/[^\/]*\/?$/ , '' );
}

function doubleval ( mixed_var )
{

    return this.floatval ( mixed_var );
}

function each ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }
    if ( pointers.indexOf ( arr ) === -1 )
    {
        pointers.push ( arr , 0 );
    }
    var arrpos = pointers.indexOf ( arr );
    var cursor = pointers[ arrpos + 1 ];
    var pos = 0;

    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        var ct = 0;
        for ( var k in arr )
        {
            if ( ct === cursor )
            {
                pointers[ arrpos + 1 ] += 1;
                if ( each.returnArrayOnly )
                {
                    return [ k , arr[ k ] ];
                }
                else
                {
                    return {
                        1 : arr[ k ] , value : arr[ k ] , 0 : k , key : k
                    };
                }
            }
            ct++;
        }
        return false;
    }
    if ( arr.length === 0 || cursor === arr.length )
    {
        return false;
    }
    pos = cursor;
    pointers[ arrpos + 1 ] += 1;
    if ( each.returnArrayOnly )
    {
        return [ pos , arr[ pos ] ];
    }
    else
    {
        return {
            1 : arr[ pos ] , value : arr[ pos ] , 0 : pos , key : pos
        };
    }
}

function echo ()
{

    var isNode = typeof module !== 'undefined' && module.exports && typeof global !== "undefined" && {}.toString.call ( global ) == '[object global]';
    if ( isNode )
    {
        var args = Array.prototype.slice.call ( arguments );
        return console.log ( args.join ( ' ' ) );
    }

    var arg = '' , argc = arguments.length , argv = arguments , i = 0 , holder , win = this.window , d = win.document ,
        ns_xhtml                                                                                       = 'http://www.w3.org/1999/xhtml' , ns_xul                                             = 'http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul';
    var stringToDOM = function ( str , parent , ns , container )
    {
        var extraNSs = '';
        if ( ns === ns_xul )
        {
            extraNSs = ' xmlns:html="' + ns_xhtml + '"';
        }
        var stringContainer = '<' + container + ' xmlns="' + ns + '"' + extraNSs + '>' + str + '</' + container + '>';
        var dils = win.DOMImplementationLS , dp = win.DOMParser , ax = win.ActiveXObject;
        if ( dils && dils.createLSInput && dils.createLSParser )
        {




            var lsInput = dils.createLSInput ();

            lsInput.stringData = stringContainer;
            var lsParser = dils.createLSParser ( 1 , null );
            return lsParser.parse ( lsInput ).firstChild;
        }
        else if ( dp )
        {

            try
            {
                var fc = new dp ().parseFromString ( stringContainer , 'text/xml' );
                if ( fc && fc.documentElement && fc.documentElement.localName !== 'parsererror' && fc.documentElement.namespaceURI !== 'http://www.mozilla.org/newlayout/xml/parsererror.xml' )
                {
                    return fc.documentElement.firstChild;
                }

            } catch ( e )
            {

            }
        }
        else if ( ax )
        {
            var axo = new ax ( 'MSXML2.DOMDocument' );
            axo.loadXML ( str );
            return axo.documentElement;
        }
        /*else if (win.XMLHttpRequest) {
         var req = new win.XMLHttpRequest;
         req.open('GET', 'data:application/xml;charset=utf-8,'+encodeURIComponent(str), false);
         if (req.overrideMimeType) {
         req.overrideMimeType('application/xml');
         }
         req.send(null);
         return req.responseXML;
         }*/


//if (d.createElementNS && (d.contentType && d.contentType !== 'text/html')) {
        if ( d.createElementNS &&
             (d.documentElement.namespaceURI ||
              d.documentElement.nodeName.toLowerCase () !== 'html' ||
              (d.contentType && d.contentType !== 'text/html')
            ) )
        {
            holder = d.createElementNS ( ns , container );
        }
        else
        {
            holder = d.createElement ( container );
        }
        holder.innerHTML = str;
        while (holder.firstChild)
        {
            parent.appendChild ( holder.firstChild );
        }
        return false;

    };

    var ieFix = function ( node )
    {
        if ( node.nodeType === 1 )
        {
            var newNode = d.createElement ( node.nodeName );
            var i , len;
            if ( node.attributes && node.attributes.length > 0 )
            {
                for ( i = 0, len = node.attributes.length ; i < len ; i++ )
                {
                    newNode.setAttribute ( node.attributes[ i ].nodeName , node.getAttribute ( node.attributes[ i ].nodeName ) );
                }
            }
            if ( node.childNodes && node.childNodes.length > 0 )
            {
                for ( i = 0, len = node.childNodes.length ; i < len ; i++ )
                {
                    newNode.appendChild ( ieFix ( node.childNodes[ i ] ) );
                }
            }
            return newNode;
        }
        else
        {
            return d.createTextNode ( node.nodeValue );
        }
    };

    var replacer = function ( s , m1 , m2 )
    {


        if ( m1 !== '\\' )
        {
            return m1 + eval ( m2 );
        }
        else
        {
            return s;
        }
    };

    this.php_js = this.php_js || {};
    var phpjs = this.php_js , ini = phpjs.ini , obs = phpjs.obs;
    for ( i = 0 ; i < argc ; i++ )
    {
        arg = argv[ i ];
        if ( ini && ini[ 'phpjs.echo_embedded_vars' ] )
        {
            arg = arg.replace ( /(.?)\{?\$(\w*?\}|\w*)/g , replacer );
        }

        if ( !phpjs.flushing && obs && obs.length )
        {
            obs[ obs.length - 1 ].buffer += arg;
            continue;
        }

        if ( d.appendChild )
        {
            if ( d.body )
            {
                if ( win.navigator.appName === 'Microsoft Internet Explorer' )
                {
                    d.body.appendChild ( stringToDOM ( ieFix ( arg ) ) );
                }
                else
                {
                    var unappendedLeft = stringToDOM ( arg , d.body , ns_xhtml , 'div' ).cloneNode ( true );
                    if ( unappendedLeft )
                    {
                        d.body.appendChild ( unappendedLeft );
                    }
                }
            }
            else
            {
                d.documentElement.appendChild ( stringToDOM ( arg , d.documentElement , ns_xul , 'description' ) );
            }
        }
        else if ( d.write )
        {
            d.write ( arg );
        }
        /* else {
         print(arg);
         }*/
    }
}

function empty ( mixed_var )
{

    var undef , key , i , len;
    var emptyValues = [ undef , null , false , 0 , '' , '0' ];

    for ( i = 0, len = emptyValues.length ; i < len ; i++ )
    {
        if ( mixed_var === emptyValues[ i ] )
        {
            return true;
        }
    }

    if ( typeof mixed_var === 'object' )
    {
        for ( key in mixed_var )
        {

//if (mixed_var.hasOwnProperty(key)) {
            return false;
//}
        }
        return true;
    }

    return false;
}

function end ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }
    if ( pointers.indexOf ( arr ) === -1 )
    {
        pointers.push ( arr , 0 );
    }
    var arrpos = pointers.indexOf ( arr );
    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        var ct = 0;
        var val;
        for ( var k in arr )
        {
            ct++;
            val = arr[ k ];
        }
        if ( ct === 0 )
        {
            return false;
        }
        pointers[ arrpos + 1 ] = ct - 1;
        return val;
    }
    if ( arr.length === 0 )
    {
        return false;
    }
    pointers[ arrpos + 1 ] = arr.length - 1;
    return arr[ pointers[ arrpos + 1 ] ];
}

function escapeshellarg ( arg )
{

    var ret = '';

    ret = arg.replace ( /[^\\]'/g , function ( m , i , s )
    {
        return m.slice ( 0 , 1 ) + '\\\'';
    } );

    return "'" + ret + "'";
}

function exp ( arg )
{

    return Math.exp ( arg );
}

function explode ( delimiter , string , limit )
{

    if ( arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined' )
    {
        return null;
    }
    if ( delimiter === '' || delimiter === false || delimiter === null )
    {
        return false;
    }
    if ( typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string === 'object' )
    {
        return {
            0 : ''
        };
    }
    if ( delimiter === true )
    {
        delimiter = '1';
    }

    delimiter += '';
    string += '';

    var s = string.split ( delimiter );

    if ( typeof limit === 'undefined' )
    {
        return s;
    }

    if ( limit === 0 )
    {
        limit = 1;
    }

    if ( limit > 0 )
    {
        if ( limit >= s.length )
        {
            return s;
        }
        return s.slice ( 0 , limit - 1 ).concat ( [ s.slice ( limit - 1 ).join ( delimiter ) ] );
    }

    if ( -limit >= s.length )
    {
        return [];
    }

    s.splice ( s.length + limit );
    return s;
}

function expm1 ( x )
{

    var ret = 0 , n = 50;
    var factorial = function factorial ( n )
    {
        if ( (n === 0) || (n === 1) )
        {
            return 1;
        }
        else
        {
            var result = (n * factorial ( n - 1 ));
            return result;
        }
    };
    for ( var i = 1 ; i < n ; i++ )
    {
        ret += Math.pow ( x , i ) / factorial ( i );
    }
    return ret;
}

function file_get_contents ( url , flags , context , offset , maxLen )
{

    var tmp , headers = [] , newTmp = [] , k = 0 , i = 0 , href = '' , pathPos = -1 , flagNames = 0 , content = null , http_stream = false;
    var func = function ( value )
    {
        return value.substring ( 1 ) !== '';
    };

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    var ini = this.php_js.ini;
    context = context || this.php_js.default_streams_context || null;

    if ( !flags )
    {
        flags = 0;
    }
    var OPTS = {
        FILE_USE_INCLUDE_PATH : 1 , FILE_TEXT : 32 , FILE_BINARY : 64
    };
    if ( typeof flags === 'number' )
    {
        flagNames = flags;
    }
    else
    {
        flags = [].concat ( flags );
        for ( i = 0 ; i < flags.length ; i++ )
        {
            if ( OPTS[ flags[ i ] ] )
            {
                flagNames = flagNames | OPTS[ flags[ i ] ];
            }
        }
    }

    if ( flagNames & OPTS.FILE_BINARY && (flagNames & OPTS.FILE_TEXT) )
    {
        throw 'You cannot pass both FILE_BINARY and FILE_TEXT to file_get_contents()';
    }

    if ( (flagNames & OPTS.FILE_USE_INCLUDE_PATH) && ini.include_path && ini.include_path.local_value )
    {
        var slash = ini.include_path.local_value.indexOf ( '/' ) !== -1 ? '/' : '\\';
        url = ini.include_path.local_value + slash + url;
    }
    else if ( !/^(https?|file):/.test ( url ) )
    {
        href = this.window.location.href;
        pathPos = url.indexOf ( '/' ) === 0 ? href.indexOf ( '/' , 8 ) - 1 : href.lastIndexOf ( '/' );
        url = href.slice ( 0 , pathPos + 1 ) + url;
    }

    var http_options;
    if ( context )
    {
        http_options = context.stream_options && context.stream_options.http;
        http_stream = !!http_options;
    }

    if ( !context || http_stream )
    {
        var req = this.window.ActiveXObject ? new ActiveXObject ( 'Microsoft.XMLHTTP' ) : new XMLHttpRequest ();
        if ( !req )
        {
            throw new Error ( 'XMLHttpRequest not supported' );
        }

        var method = http_stream ? http_options.method : 'GET';
        var async = !!(context && context.stream_params && context.stream_params[ 'phpjs.async' ]);

        if ( ini[ 'phpjs.ajaxBypassCache' ] && ini[ 'phpjs.ajaxBypassCache' ].local_value )
        {
            url += (url.match ( /\?/ ) == null ? '?' : '&') + (new Date ()).getTime ();
        }

        req.open ( method , url , async );
        if ( async )
        {
            var notification = context.stream_params.notification;
            if ( typeof notification === 'function' )
            {

                if ( 0 && req.addEventListener )
                {
                    /*
                     req.addEventListener('progress', updateProgress, false);
                     req.addEventListener('load', transferComplete, false);
                     req.addEventListener('error', transferFailed, false);
                     req.addEventListener('abort', transferCanceled, false);
                     */
                }
                else
                {
                    req.onreadystatechange = function ( aEvt )
                    {

                        /*
                         PHP Constants:
                         STREAM_NOTIFY_RESOLVE   1       A remote address required for this stream has been resolved, or the resolution failed. See severity  for an indication of which happened.
                         STREAM_NOTIFY_CONNECT   2     A connection with an external resource has been established.
                         STREAM_NOTIFY_AUTH_REQUIRED 3     Additional authorization is required to access the specified resource. Typical issued with severity level of STREAM_NOTIFY_SEVERITY_ERR.
                         STREAM_NOTIFY_MIME_TYPE_IS  4     The mime-type of resource has been identified, refer to message for a description of the discovered type.
                         STREAM_NOTIFY_FILE_SIZE_IS  5     The size of the resource has been discovered.
                         STREAM_NOTIFY_REDIRECTED    6     The external resource has redirected the stream to an alternate location. Refer to message .
                         STREAM_NOTIFY_PROGRESS  7     Indicates current progress of the stream transfer in bytes_transferred and possibly bytes_max as well.
                         STREAM_NOTIFY_COMPLETED 8     There is no more data available on the stream.
                         STREAM_NOTIFY_FAILURE   9     A generic error occurred on the stream, consult message and message_code for details.
                         STREAM_NOTIFY_AUTH_RESULT   10     Authorization has been completed (with or without success).

                         STREAM_NOTIFY_SEVERITY_INFO 0     Normal, non-error related, notification.
                         STREAM_NOTIFY_SEVERITY_WARN 1     Non critical error condition. Processing may continue.
                         STREAM_NOTIFY_SEVERITY_ERR  2     A critical error occurred. Processing cannot continue.
                         */
                        var objContext = {
                            responseText : req.responseText ,
                            responseXML  : req.responseXML ,
                            status       : req.status ,
                            statusText   : req.statusText ,
                            readyState   : req.readyState ,
                            evt          : aEvt
                        };


                        var bytes_transferred;
                        switch ( req.readyState )
                        {
                            case 0:

                                notification.call ( objContext , 0 , 0 , '' , 0 , 0 , 0 );
                                break;
                            case 1:

                                notification.call ( objContext , 0 , 0 , '' , 0 , 0 , 0 );
                                break;
                            case 2:

                                notification.call ( objContext , 0 , 0 , '' , 0 , 0 , 0 );
                                break;
                            case 3:

                                bytes_transferred = req.responseText.length * 2;
                                notification.call ( objContext , 7 , 0 , '' , 0 , bytes_transferred , 0 );
                                break;
                            case 4:

                                if ( req.status >= 200 && req.status < 400 )
                                {
                                    bytes_transferred = req.responseText.length * 2;
                                    notification.call ( objContext , 8 , 0 , '' , req.status , bytes_transferred , 0 );
                                }
                                else if ( req.status === 403 )
                                {
                                    notification.call ( objContext , 10 , 2 , '' , req.status , 0 , 0 );
                                }
                                else
                                {
                                    notification.call ( objContext , 9 , 2 , '' , req.status , 0 , 0 );
                                }
                                break;
                            default:
                                throw 'Unrecognized ready state for file_get_contents()';
                        }
                    };
                }
            }
        }

        if ( http_stream )
        {
            var sendHeaders = http_options.header && http_options.header.split ( /\r?\n/ );
            var userAgentSent = false;
            for ( i = 0 ; i < sendHeaders.length ; i++ )
            {
                var sendHeader = sendHeaders[ i ];
                var breakPos = sendHeader.search ( /:\s*/ );
                var sendHeaderName = sendHeader.substring ( 0 , breakPos );
                req.setRequestHeader ( sendHeaderName , sendHeader.substring ( breakPos + 1 ) );
                if ( sendHeaderName === 'User-Agent' )
                {
                    userAgentSent = true;
                }
            }
            if ( !userAgentSent )
            {
                var user_agent = http_options.user_agent || (ini.user_agent && ini.user_agent.local_value);
                if ( user_agent )
                {
                    req.setRequestHeader ( 'User-Agent' , user_agent );
                }
            }
            content = http_options.content || null;
            /*

             var request_fulluri = http_options.request_fulluri || false;
             var max_redirects = http_options.max_redirects || 20;
             var protocol_version = http_options.protocol_version || 1.0;
             var timeout = http_options.timeout || (ini.default_socket_timeout && ini.default_socket_timeout.local_value);
             var ignore_errors = http_options.ignore_errors || false;
             */
        }

        if ( flagNames & OPTS.FILE_TEXT )
        {
            var content_type = 'text/html';
            if ( http_options && http_options[ 'phpjs.override' ] )
            {
                content_type = http_options[ 'phpjs.override' ];

            }
            else
            {
                var encoding = (ini[ 'unicode.stream_encoding' ] && ini[ 'unicode.stream_encoding' ].local_value) || 'UTF-8';
                if ( http_options && http_options.header && (/^content-type:/im).test ( http_options.header ) )
                {
                    content_type = http_options.header.match ( /^content-type:\s*(.*)$/im )[ 1 ];
                }
                if ( !(/;\s*charset=/).test ( content_type ) )
                {
                    content_type += '; charset=' + encoding;
                }
            }
            req.overrideMimeType ( content_type );
        }


        else if ( flagNames & OPTS.FILE_BINARY )
        {
            req.overrideMimeType ( 'text/plain; charset=x-user-defined' );


        }

        try
        {
            if ( http_options && http_options[ 'phpjs.sendAsBinary' ] )
            {
                req.sendAsBinary ( content );
            }
            else
            {
                req.send ( content );
            }
        } catch ( e )
        {

            return false;
        }

        tmp = req.getAllResponseHeaders ();
        if ( tmp )
        {
            tmp = tmp.split ( '\n' );
            for ( k = 0 ; k < tmp.length ; k++ )
            {
                if ( func ( tmp[ k ] ) )
                {
                    newTmp.push ( tmp[ k ] );
                }
            }
            tmp = newTmp;
            for ( i = 0 ; i < tmp.length ; i++ )
            {
                headers[ i ] = tmp[ i ];
            }
            this.$http_response_header = headers;
        }

        if ( offset || maxLen )
        {
            if ( maxLen )
            {
                return req.responseText.substr ( offset || 0 , maxLen );
            }
            return req.responseText.substr ( offset );
        }
        return req.responseText;
    }
    return false;
}

function floatval ( mixed_var )
{

    return (parseFloat ( mixed_var ) || 0);
}

function floor ( value )
{

    return Math.floor ( value );
}

function fmod ( x , y )
{

    var tmp , tmp2 , p = 0 , pY = 0 , l = 0.0 , l2 = 0.0;

    tmp = x.toExponential ().match ( /^.\.?(.*)e(.+)$/ );
    p = parseInt ( tmp[ 2 ] , 10 ) - (tmp[ 1 ] + '').length;
    tmp = y.toExponential ().match ( /^.\.?(.*)e(.+)$/ );
    pY = parseInt ( tmp[ 2 ] , 10 ) - (tmp[ 1 ] + '').length;

    if ( pY > p )
    {
        p = pY;
    }

    tmp2 = (x % y);

    if ( p < -100 || p > 20 )
    {

        l = Math.round ( Math.log ( tmp2 ) / Math.log ( 10 ) );
        l2 = Math.pow ( 10 , l );

        return (tmp2 / l2).toFixed ( l - p ) * l2;
    }
    else
    {
        return parseFloat ( tmp2.toFixed ( -p ) );
    }
}

function function_exists ( func_name )
{

    if ( typeof func_name === 'string' )
    {
        func_name = this.window[ func_name ];
    }
    return typeof func_name === 'function';
}

function getdate ( timestamp )
{

    var _w = [ 'Sun' , 'Mon' , 'Tues' , 'Wednes' , 'Thurs' , 'Fri' , 'Satur' ];
    var _m = [ 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December' ];
    var d = ((typeof timestamp === 'undefined') ? new Date () :
             (typeof timestamp === 'object') ? new Date ( timestamp ) :
             new Date ( timestamp * 1000 )
    );
    var w = d.getDay ();
    var m = d.getMonth ();
    var y = d.getFullYear ();
    var r = {};

    r.seconds = d.getSeconds ();
    r.minutes = d.getMinutes ();
    r.hours = d.getHours ();
    r.mday = d.getDate ();
    r.wday = w;
    r.mon = m + 1;
    r.year = y;
    r.yday = Math.floor ( (d - (new Date ( y , 0 , 1 ))) / 86400000 );
    r.weekday = _w[ w ] + 'day';
    r.month = _m[ m ];
    r[ '0' ] = parseInt ( d.getTime () / 1000 , 10 );

    return r;
}

function get_defined_functions ()
{

    var i = '' , arr = [] , already = {};

    for ( i in this.window )
    {
        try
        {
            if ( typeof this.window[ i ] === 'function' )
            {
                if ( !already[ i ] )
                {
                    already[ i ] = 1;
                    arr.push ( i );
                }
            }
            else if ( typeof this.window[ i ] === 'object' )
            {
                for ( var j in this.window[ i ] )
                {
                    if ( typeof this.window[ j ] === 'function' && this.window[ j ] && !already[ j ] )
                    {
                        already[ j ] = 1;
                        arr.push ( j );
                    }
                }
            }
        } catch ( e )
        {

        }
    }

    return arr;
}

function getenv ( varname )
{

    if ( !this.php_js || !this.php_js.ENV || !this.php_js.ENV[ varname ] )
    {
        return false;
    }

    return this.php_js.ENV[ varname ];
}

function get_headers ( url , format )
{

    var req = this.window.ActiveXObject ? new ActiveXObject ( 'Microsoft.XMLHTTP' ) : new XMLHttpRequest ();

    if ( !req )
    {
        throw new Error ( 'XMLHttpRequest not supported' );
    }
    var tmp , headers , pair , i , j = 0;
    ß;
    req.open ( 'HEAD' , url , false );
    req.send ( null );

    if ( req.readyState < 3 )
    {
        return false;
    }

    tmp = req.getAllResponseHeaders ();
    tmp = tmp.split ( '\n' );
    tmp = this.array_filter ( tmp , function ( value )
    {
        return value.substring ( 1 ) !== '';
    } );
    headers = format ? {} : [];

    for ( var i in tmp )
    {
        if ( format )
        {
            pair = tmp[ i ].split ( ':' );
            headers[ pair.splice ( 0 , 1 ) ] = pair.join ( ':' ).substring ( 1 );
        }
        else
        {
            headers[ j++ ] = tmp[ i ];
        }
    }

    return headers;
}

function get_html_translation_table ( table , quote_style )
{

    var entities = {} , hash_map = {} , decimal;
    var constMappingTable = {} , constMappingQuoteStyle = {};
    var useTable = {} , useQuoteStyle = {};

    constMappingTable[ 0 ] = 'HTML_SPECIALCHARS';
    constMappingTable[ 1 ] = 'HTML_ENTITIES';
    constMappingQuoteStyle[ 0 ] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[ 2 ] = 'ENT_COMPAT';
    constMappingQuoteStyle[ 3 ] = 'ENT_QUOTES';

    useTable = !isNaN ( table ) ? constMappingTable[ table ] : table ? table.toUpperCase () : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN ( quote_style ) ? constMappingQuoteStyle[ quote_style ] : quote_style ? quote_style.toUpperCase () : 'ENT_COMPAT';

    if ( useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES' )
    {
        throw new Error ( 'Table: ' + useTable + ' not supported' );

    }

    entities[ '38' ] = '&amp;';
    if ( useTable === 'HTML_ENTITIES' )
    {
        entities[ '160' ] = '&nbsp;';
        entities[ '161' ] = '&iexcl;';
        entities[ '162' ] = '&cent;';
        entities[ '163' ] = '&pound;';
        entities[ '164' ] = '&curren;';
        entities[ '165' ] = '&yen;';
        entities[ '166' ] = '&brvbar;';
        entities[ '167' ] = '&sect;';
        entities[ '168' ] = '&uml;';
        entities[ '169' ] = '&copy;';
        entities[ '170' ] = '&ordf;';
        entities[ '171' ] = '&laquo;';
        entities[ '172' ] = '&not;';
        entities[ '173' ] = '&shy;';
        entities[ '174' ] = '&reg;';
        entities[ '175' ] = '&macr;';
        entities[ '176' ] = '&deg;';
        entities[ '177' ] = '&plusmn;';
        entities[ '178' ] = '&sup2;';
        entities[ '179' ] = '&sup3;';
        entities[ '180' ] = '&acute;';
        entities[ '181' ] = '&micro;';
        entities[ '182' ] = '&para;';
        entities[ '183' ] = '&middot;';
        entities[ '184' ] = '&cedil;';
        entities[ '185' ] = '&sup1;';
        entities[ '186' ] = '&ordm;';
        entities[ '187' ] = '&raquo;';
        entities[ '188' ] = '&frac14;';
        entities[ '189' ] = '&frac12;';
        entities[ '190' ] = '&frac34;';
        entities[ '191' ] = '&iquest;';
        entities[ '192' ] = '&Agrave;';
        entities[ '193' ] = '&Aacute;';
        entities[ '194' ] = '&Acirc;';
        entities[ '195' ] = '&Atilde;';
        entities[ '196' ] = '&Auml;';
        entities[ '197' ] = '&Aring;';
        entities[ '198' ] = '&AElig;';
        entities[ '199' ] = '&Ccedil;';
        entities[ '200' ] = '&Egrave;';
        entities[ '201' ] = '&Eacute;';
        entities[ '202' ] = '&Ecirc;';
        entities[ '203' ] = '&Euml;';
        entities[ '204' ] = '&Igrave;';
        entities[ '205' ] = '&Iacute;';
        entities[ '206' ] = '&Icirc;';
        entities[ '207' ] = '&Iuml;';
        entities[ '208' ] = '&ETH;';
        entities[ '209' ] = '&Ntilde;';
        entities[ '210' ] = '&Ograve;';
        entities[ '211' ] = '&Oacute;';
        entities[ '212' ] = '&Ocirc;';
        entities[ '213' ] = '&Otilde;';
        entities[ '214' ] = '&Ouml;';
        entities[ '215' ] = '&times;';
        entities[ '216' ] = '&Oslash;';
        entities[ '217' ] = '&Ugrave;';
        entities[ '218' ] = '&Uacute;';
        entities[ '219' ] = '&Ucirc;';
        entities[ '220' ] = '&Uuml;';
        entities[ '221' ] = '&Yacute;';
        entities[ '222' ] = '&THORN;';
        entities[ '223' ] = '&szlig;';
        entities[ '224' ] = '&agrave;';
        entities[ '225' ] = '&aacute;';
        entities[ '226' ] = '&acirc;';
        entities[ '227' ] = '&atilde;';
        entities[ '228' ] = '&auml;';
        entities[ '229' ] = '&aring;';
        entities[ '230' ] = '&aelig;';
        entities[ '231' ] = '&ccedil;';
        entities[ '232' ] = '&egrave;';
        entities[ '233' ] = '&eacute;';
        entities[ '234' ] = '&ecirc;';
        entities[ '235' ] = '&euml;';
        entities[ '236' ] = '&igrave;';
        entities[ '237' ] = '&iacute;';
        entities[ '238' ] = '&icirc;';
        entities[ '239' ] = '&iuml;';
        entities[ '240' ] = '&eth;';
        entities[ '241' ] = '&ntilde;';
        entities[ '242' ] = '&ograve;';
        entities[ '243' ] = '&oacute;';
        entities[ '244' ] = '&ocirc;';
        entities[ '245' ] = '&otilde;';
        entities[ '246' ] = '&ouml;';
        entities[ '247' ] = '&divide;';
        entities[ '248' ] = '&oslash;';
        entities[ '249' ] = '&ugrave;';
        entities[ '250' ] = '&uacute;';
        entities[ '251' ] = '&ucirc;';
        entities[ '252' ] = '&uuml;';
        entities[ '253' ] = '&yacute;';
        entities[ '254' ] = '&thorn;';
        entities[ '255' ] = '&yuml;';
    }

    if ( useQuoteStyle !== 'ENT_NOQUOTES' )
    {
        entities[ '34' ] = '&quot;';
    }
    if ( useQuoteStyle === 'ENT_QUOTES' )
    {
        entities[ '39' ] = '&#39;';
    }
    entities[ '60' ] = '&lt;';
    entities[ '62' ] = '&gt;';

    for ( decimal in entities )
    {
        if ( entities.hasOwnProperty ( decimal ) )
        {
            hash_map[ String.fromCharCode ( decimal ) ] = entities[ decimal ];
        }
    }

    return hash_map;
}

function getlastmod ()
{

    return new Date ( this.window.document.lastModified ).getTime () / 1000;
}

function get_meta_tags ( file )
{

    var fulltxt = '';

    if ( false )
    {

        fulltxt = '<meta name="author" content="name">' + '<meta name="keywords" content="php documentation">' + '<meta name="DESCRIPTION" content="a php manual">' + '<meta name="geo.position" content="49.33;-86.59">' + '</head>';
    }
    else
    {
        fulltxt = this.file_get_contents ( file ).match ( /^[\s\S]*<\/head>/i );
    }

    var patt = /<meta[^>]*?>/gim;
    var patt1 = /<meta\s+.*?name\s*=\s*(['"]?)(.*?)\1\s+.*?content\s*=\s*(['"]?)(.*?)\3/gim;
    var patt2 = /<meta\s+.*?content\s*=\s*(['"?])(.*?)\1\s+.*?name\s*=\s*(['"]?)(.*?)\3/gim;
    var txt , match , name , arr = {};

    while ((txt = patt.exec ( fulltxt )) !== null)
    {
        while ((match = patt1.exec ( txt )) !== null)
        {
            name = match[ 2 ].replace ( /\W/g , '_' ).toLowerCase ();
            arr[ name ] = match[ 4 ];
        }
        while ((match = patt2.exec ( txt )) !== null)
        {
            name = match[ 4 ].replace ( /\W/g , '_' ).toLowerCase ();
            arr[ name ] = match[ 2 ];
        }
    }
    return arr;
}

function getrandmax ()
{

    return 2147483647;
}

function gettimeofday ( return_float )
{

    var t = new Date () , y = 0;

    if ( return_float )
    {
        return t.getTime () / 1000;
    }

    y = t.getFullYear ();
    return {
        sec         : t.getUTCSeconds () ,
        usec        : t.getUTCMilliseconds () * 1000 ,
        minuteswest : t.getTimezoneOffset () ,
        dsttime     : 0 + (((new Date ( y , 0 )) - Date.UTC ( y , 0 )) !== ((new Date ( y , 6 )) - Date.UTC ( y , 6 )))
    };
}

function gettype ( mixed_var )
{

    var s = typeof mixed_var , name;
    var getFuncName = function ( fn )
    {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
        if ( !name )
        {
            return '(Anonymous)';
        }
        return name[ 1 ];
    };
    if ( s === 'object' )
    {
        if ( mixed_var !== null )
        {
            if ( typeof mixed_var.length === 'number' && !(mixed_var.propertyIsEnumerable ( 'length' )) && typeof mixed_var.splice === 'function' )
            {
                s = 'array';
            }
            else if ( mixed_var.constructor && getFuncName ( mixed_var.constructor ) )
            {
                name = getFuncName ( mixed_var.constructor );
                if ( name === 'Date' )
                {
                    s = 'date';
                }
                else if ( name === 'RegExp' )
                {
                    s = 'regexp';
                }
                else if ( name === 'PHPJS_Resource' )
                {
                    s = 'resource';
                }
            }
        }
        else
        {
            s = 'null';
        }
    }
    else if ( s === 'number' )
    {
        s = this.is_float ( mixed_var ) ? 'double' : 'integer';
    }
    return s;
}

function gmdate ( format , timestamp )
{

    var dt = typeof timestamp === 'undefined' ? new Date () :
             typeof timestamp === 'object' ? new Date ( timestamp ) :
             new Date ( timestamp * 1000 );
    timestamp = Date.parse ( dt.toUTCString ().slice ( 0 , -4 ) ) / 1000;
    return this.date ( format , timestamp );
}

function gmmktime ()
{

    var d = new Date () , r = arguments , i = 0 , e = [ 'Hours' , 'Minutes' , 'Seconds' , 'Month' , 'Date' , 'FullYear' ];

    for ( i = 0 ; i < e.length ; i++ )
    {
        if ( typeof r[ i ] === 'undefined' )
        {
            r[ i ] = d[ 'getUTC' + e[ i ] ] ();
            r[ i ] += (i === 3);
        }
        else
        {
            r[ i ] = parseInt ( r[ i ] , 10 );
            if ( isNaN ( r[ i ] ) )
            {
                return false;
            }
        }
    }

    r[ 5 ] += (r[ 5 ] >= 0 ? (r[ 5 ] <= 69 ? 2e3 : (r[ 5 ] <= 100 ? 1900 : 0)) : 0);

    d.setUTCFullYear ( r[ 5 ] , r[ 3 ] - 1 , r[ 4 ] );

    d.setUTCHours ( r[ 0 ] , r[ 1 ] , r[ 2 ] );

    return (d.getTime () / 1e3 >> 0) - (d.getTime () < 0);
}

function gmstrftime ( format , timestamp )
{

    var dt = ((typeof timestamp === 'undefined') ? new Date () :
              (typeof timestamp === 'object') ? new Date ( timestamp ) :
              new Date ( timestamp * 1000 )
    );
    timestamp = Date.parse ( dt.toUTCString ().slice ( 0 , -4 ) ) / 1000;
    return this.strftime ( format , timestamp );
}

function gopher_parsedir ( dirent )
{

    /* Types
     * 0 = plain text file
     * 1 = directory menu listing
     * 2 = CSO search query
     * 3 = error message
     * 4 = BinHex encoded text file
     * 5 = binary archive file
     * 6 = UUEncoded text file
     * 7 = search engine query
     * 8 = telnet session pointer
     * 9 = binary file
     * g = Graphics file format, primarily a GIF file
     * h = HTML file
     * i = informational message
     * s = Audio file format, primarily a WAV file
     */

    var entryPattern = /^(.)(.*?)\t(.*?)\t(.*?)\t(.*?)\u000d\u000a$/;
    var entry = dirent.match ( entryPattern );

    if ( entry === null )
    {
        throw 'Could not parse the directory entry';

    }

    var type = entry[ 1 ];
    switch ( type )
    {
        case 'i':
            type = 255;
            break;
        case '1':
            type = 1;
            break;
        case '0':
            type = 0;
            break;
        case '4':
            type = 4;
            break;
        case '5':
            type = 5;
            break;
        case '6':
            type = 6;
            break;
        case '9':
            type = 9;
            break;
        case 'h':
            type = 254;
            break;
        default:
            return {
                type : -1 , data : dirent
            };
    }
    return {
        type : type , title : entry[ 2 ] , path : entry[ 3 ] , host : entry[ 4 ] , port : entry[ 5 ]
    };
}

function hexdec ( hex_string )
{

    hex_string = (hex_string + '').replace ( /[^a-f0-9]/gi , '' );
    return parseInt ( hex_string , 16 );
}

function htmlentities ( string , quote_style , charset , double_encode )
{

    var hash_map = this.get_html_translation_table ( 'HTML_ENTITIES' , quote_style ) , symbol = '';
    string = string == null ? '' : string + '';

    if ( !hash_map )
    {
        return false;
    }

    if ( quote_style && quote_style === 'ENT_QUOTES' )
    {
        hash_map[ "'" ] = '&#039;';
    }

    if ( !!double_encode || double_encode == null )
    {
        for ( symbol in hash_map )
        {
            if ( hash_map.hasOwnProperty ( symbol ) )
            {
                string = string.split ( symbol ).join ( hash_map[ symbol ] );
            }
        }
    }
    else
    {
        string = string.replace ( /([\s\S]*?)(&(?:#\d+|#x[\da-f]+|[a-zA-Z][\da-z]*);|$)/g , function ( ignore , text , entity )
        {
            for ( symbol in hash_map )
            {
                if ( hash_map.hasOwnProperty ( symbol ) )
                {
                    text = text.split ( symbol ).join ( hash_map[ symbol ] );
                }
            }

            return text + entity;
        } );
    }

    return string;
}

function html_entity_decode ( string , quote_style )
{

    var hash_map = {} , symbol = '' , tmp_str = '' , entity = '';
    tmp_str = string.toString ();

    if ( false === (hash_map = this.get_html_translation_table ( 'HTML_ENTITIES' , quote_style )) )
    {
        return false;
    }

    delete(hash_map[ '&' ]);
    hash_map[ '&' ] = '&amp;';

    for ( symbol in hash_map )
    {
        entity = hash_map[ symbol ];
        tmp_str = tmp_str.split ( entity ).join ( symbol );
    }
    tmp_str = tmp_str.split ( '&#039;' ).join ( "'" );

    return tmp_str;
}

function htmlspecialchars_decode ( string , quote_style )
{

    var optTemp = 0 , i = 0 , noquotes = false;
    if ( typeof quote_style === 'undefined' )
    {
        quote_style = 2;
    }
    string = string.toString ().replace ( /&lt;/g , '<' ).replace ( /&gt;/g , '>' );
    var OPTS = {
        'ENT_NOQUOTES' : 0 , 'ENT_HTML_QUOTE_SINGLE' : 1 , 'ENT_HTML_QUOTE_DOUBLE' : 2 , 'ENT_COMPAT' : 2 , 'ENT_QUOTES' : 3 , 'ENT_IGNORE' : 4
    };
    if ( quote_style === 0 )
    {
        noquotes = true;
    }
    if ( typeof quote_style !== 'number' )
    {
        quote_style = [].concat ( quote_style );
        for ( i = 0 ; i < quote_style.length ; i++ )
        {

            if ( OPTS[ quote_style[ i ] ] === 0 )
            {
                noquotes = true;
            }
            else if ( OPTS[ quote_style[ i ] ] )
            {
                optTemp = optTemp | OPTS[ quote_style[ i ] ];
            }
        }
        quote_style = optTemp;
    }
    if ( quote_style & OPTS.ENT_HTML_QUOTE_SINGLE )
    {
        string = string.replace ( /&#0*39;/g , "'" );

    }
    if ( !noquotes )
    {
        string = string.replace ( /&quot;/g , '"' );
    }
    string = string.replace ( /&amp;/g , '&' );

    return string;
}

function htmlspecialchars ( string , quote_style , charset , double_encode )
{

    var optTemp = 0 , i = 0 , noquotes = false;
    if ( typeof quote_style === 'undefined' || quote_style === null )
    {
        quote_style = 2;
    }
    string = string.toString ();
    if ( double_encode !== false )
    {
        string = string.replace ( /&/g , '&amp;' );
    }
    string = string.replace ( /</g , '&lt;' ).replace ( />/g , '&gt;' );

    var OPTS = {
        'ENT_NOQUOTES' : 0 , 'ENT_HTML_QUOTE_SINGLE' : 1 , 'ENT_HTML_QUOTE_DOUBLE' : 2 , 'ENT_COMPAT' : 2 , 'ENT_QUOTES' : 3 , 'ENT_IGNORE' : 4
    };
    if ( quote_style === 0 )
    {
        noquotes = true;
    }
    if ( typeof quote_style !== 'number' )
    {
        quote_style = [].concat ( quote_style );
        for ( i = 0 ; i < quote_style.length ; i++ )
        {

            if ( OPTS[ quote_style[ i ] ] === 0 )
            {
                noquotes = true;
            }
            else if ( OPTS[ quote_style[ i ] ] )
            {
                optTemp = optTemp | OPTS[ quote_style[ i ] ];
            }
        }
        quote_style = optTemp;
    }
    if ( quote_style & OPTS.ENT_HTML_QUOTE_SINGLE )
    {
        string = string.replace ( /'/g , '&#039;' );
    }
    if ( !noquotes )
    {
        string = string.replace ( /"/g , '&quot;' );
    }

    return string;
}

function http_build_query ( formdata , numeric_prefix , arg_separator )
{

    var value , key , tmp = [] , that = this;

    var _http_build_query_helper = function ( key , val , arg_separator )
    {
        var k , tmp = [];
        if ( val === true )
        {
            val = '1';
        }
        else if ( val === false )
        {
            val = '0';
        }
        if ( val != null )
        {
            if ( typeof val === 'object' )
            {
                for ( k in val )
                {
                    if ( val[ k ] != null )
                    {
                        tmp.push ( _http_build_query_helper ( key + '[' + k + ']' , val[ k ] , arg_separator ) );
                    }
                }
                return tmp.join ( arg_separator );
            }
            else if ( typeof val !== 'function' )
            {
                return that.urlencode ( key ) + '=' + that.urlencode ( val );
            }
            else
            {
                throw new Error ( 'There was an error processing for http_build_query().' );
            }
        }
        else
        {
            return '';
        }
    };

    if ( !arg_separator )
    {
        arg_separator = '&';
    }
    for ( key in formdata )
    {
        value = formdata[ key ];
        if ( numeric_prefix && !isNaN ( key ) )
        {
            key = String ( numeric_prefix ) + key;
        }
        var query = _http_build_query_helper ( key , value , arg_separator );
        if ( query !== '' )
        {
            tmp.push ( query );
        }
    }

    return tmp.join ( arg_separator );
}

function hypot ( x , y )
{

    return Math.sqrt ( x * x + y * y ) || 0;
}

function i18n_loc_get_default ()
{

    try
    {
        this.php_js = this.php_js || {};
    } catch ( e )
    {
        this.php_js = {};
    }

    return this.php_js.i18nLocale || (i18n_loc_set_default ( 'en_US_POSIX' ), 'en_US_POSIX');
}

function i18n_loc_set_default ( name )
{

    this.php_js = this.php_js || {};

    this.php_js.i18nLocales = {
        en_US_POSIX : {
            sorting : function ( str1 , str2 )
            {
                return (str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1);
            }
        }
    };

    this.php_js.i18nLocale = name;
    return true;
}

function idate ( format , timestamp )
{

    if ( format === undefined )
    {
        throw 'idate() expects at least 1 parameter, 0 given';
    }
    if ( !format.length || format.length > 1 )
    {
        throw 'idate format is one char';
    }

    var date = ((typeof timestamp === 'undefined') ? new Date () :
                (timestamp instanceof Date) ? new Date ( timestamp ) :
                new Date ( timestamp * 1000 )
    ) , a;

    switch ( format )
    {
        case 'B':
            return Math.floor ( ((date.getUTCHours () * 36e2) + (date.getUTCMinutes () * 60) + date.getUTCSeconds () + 36e2) / 86.4 ) % 1e3;
        case 'd':
            return date.getDate ();
        case 'h':
            return date.getHours () % 12 || 12;
        case 'H':
            return date.getHours ();
        case 'i':
            return date.getMinutes ();
        case 'I':




            a = date.getFullYear ();
            return 0 + (((new Date ( a , 0 )) - Date.UTC ( a , 0 )) !== ((new Date ( a , 6 )) - Date.UTC ( a , 6 )));
        case 'L':
            a = date.getFullYear ();
            return (!(a & 3) && (a % 1e2 || !(a % 4e2))) ? 1 : 0;
        case 'm':
            return date.getMonth () + 1;
        case 's':
            return date.getSeconds ();
        case 't':
            return (new Date ( date.getFullYear () , date.getMonth () + 1 , 0 )).getDate ();
        case 'U':
            return Math.round ( date.getTime () / 1000 );
        case 'w':
            return date.getDay ();
        case 'W':
            a = new Date ( date.getFullYear () , date.getMonth () , date.getDate () - (date.getDay () || 7) + 3 );
            return 1 + Math.round ( (a - (new Date ( a.getFullYear () , 0 , 4 ))) / 864e5 / 7 );
        case 'y':
            return parseInt ( (date.getFullYear () + '').slice ( 2 ) , 10 );
        case 'Y':
            return date.getFullYear ();
        case 'z':
            return Math.floor ( (date - new Date ( date.getFullYear () , 0 , 1 )) / 864e5 );
        case 'Z':
            return -date.getTimezoneOffset () * 60;
        default:
            throw 'Unrecognized date format token';
    }
}

function implode ( glue , pieces )
{

    var i = '' , retVal = '' , tGlue = '';
    if ( arguments.length === 1 )
    {
        pieces = glue;
        glue = '';
    }
    if ( typeof pieces === 'object' )
    {
        if ( Object.prototype.toString.call ( pieces ) === '[object Array]' )
        {
            return pieces.join ( glue );
        }
        for ( i in pieces )
        {
            retVal += tGlue + pieces[ i ];
            tGlue = glue;
        }
        return retVal;
    }
    return pieces;
}

function in_array ( needle , haystack , argStrict )
{

    var key = '' , strict = !!argStrict;

//we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
//in just one for, in order to improve the performance
//deciding wich type of comparation will do before walk array
    if ( strict )
    {
        for ( key in haystack )
        {
            if ( haystack[ key ] === needle )
            {
                return true;
            }
        }
    }
    else
    {
        for ( key in haystack )
        {
            if ( haystack[ key ] == needle )
            {
                return true;
            }
        }
    }

    return false;
}

function inet_ntop ( a )
{

    var i = 0 , m = '' , c = [];
    a += '';
    if ( a.length === 4 )
    {
        return [ a.charCodeAt ( 0 ) , a.charCodeAt ( 1 ) , a.charCodeAt ( 2 ) , a.charCodeAt ( 3 ) ].join ( '.' );
    }
    else if ( a.length === 16 )
    {
        for ( i = 0 ; i < 16 ; i++ )
        {
            c.push ( ((a.charCodeAt ( i++ ) << 8) + a.charCodeAt ( i )).toString ( 16 ) );
        }
        return c.join ( ':' ).replace ( /((^|:)0(?=:|$))+:?/g , function ( t )
        {
            m = (t.length > m.length) ? t : m;
            return t;
        } ).replace ( m || ' ' , '::' );
    }
    else
    {
        return false;
    }
}

function inet_pton ( a )
{

    var r , m , x , i , j , f = String.fromCharCode;
    m = a.match ( /^(?:\d{1,3}(?:\.|$)){4}/ );
    if ( m )
    {
        m = m[ 0 ].split ( '.' );
        m = f ( m[ 0 ] ) + f ( m[ 1 ] ) + f ( m[ 2 ] ) + f ( m[ 3 ] );

        return m.length === 4 ? m : false;
    }
    r = /^((?:[\da-f]{1,4}(?::|)){0,8})(::)?((?:[\da-f]{1,4}(?::|)){0,8})$/;
    m = a.match ( r );
    if ( m )
    {

        for ( j = 1 ; j < 4 ; j++ )
        {

            if ( j === 2 || m[ j ].length === 0 )
            {
                continue;
            }
            m[ j ] = m[ j ].split ( ':' );
            for ( i = 0 ; i < m[ j ].length ; i++ )
            {
                m[ j ][ i ] = parseInt ( m[ j ][ i ] , 16 );

                if ( isNaN ( m[ j ][ i ] ) )
                {
                    return false;
                }
                m[ j ][ i ] = f ( m[ j ][ i ] >> 8 ) + f ( m[ j ][ i ] & 0xFF );
            }
            m[ j ] = m[ j ].join ( '' );
        }
        x = m[ 1 ].length + m[ 3 ].length;
        if ( x === 16 )
        {
            return m[ 1 ] + m[ 3 ];
        }
        else if ( x < 16 && m[ 2 ].length > 0 )
        {
            return m[ 1 ] + (new Array ( 16 - x + 1 )).join ( '\x00' ) + m[ 3 ];
        }
    }
    return false;
}

function ini_get ( varname )
{

    if ( this.php_js && this.php_js.ini && this.php_js.ini[ varname ] && this.php_js.ini[ varname ].local_value !== undefined )
    {
        if ( this.php_js.ini[ varname ].local_value === null )
        {
            return '';
        }
        return this.php_js.ini[ varname ].local_value;
    }

    return '';
}

function ini_set ( varname , newvalue )
{

    var oldval = '';
    var self = this;

    try
    {
        this.php_js = this.php_js || {};
    } catch ( e )
    {
        this.php_js = {};
    }

    this.php_js.ini = this.php_js.ini || {};
    this.php_js.ini[ varname ] = this.php_js.ini[ varname ] || {};

    oldval = this.php_js.ini[ varname ].local_value;

    var _setArr = function ( oldval )
    {

        if ( typeof oldval === 'undefined' )
        {
            self.php_js.ini[ varname ].local_value = [];
        }
        self.php_js.ini[ varname ].local_value.push ( newvalue );
    };

    switch ( varname )
    {
        case 'extension':
            if ( typeof this.dl === 'function' )
            {

                this.dl ( newvalue );
            }
            _setArr ( oldval , newvalue );
            break;
        default:
            this.php_js.ini[ varname ].local_value = newvalue;
            break;
    }

    return oldval;
}

function intval ( mixed_var , base )
{

    var tmp;

    var type = typeof mixed_var;

    if ( type === 'boolean' )
    {
        return +mixed_var;
    }
    else if ( type === 'string' )
    {
        tmp = parseInt ( mixed_var , base || 10 );
        return (isNaN ( tmp ) || !isFinite ( tmp )) ? 0 : tmp;
    }
    else if ( type === 'number' && isFinite ( mixed_var ) )
    {
        return mixed_var | 0;
    }
    else
    {
        return 0;
    }
}

function ip2long ( IP )
{

    var i = 0;
    IP = IP.match ( /^([1-9]\d*|0[0-7]*|0x[\da-f]+)(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?(?:\.([1-9]\d*|0[0-7]*|0x[\da-f]+))?$/i );
    if ( !IP )
    {
        return false;
    }
    IP[ 0 ] = 0;
    for ( i = 1 ; i < 5 ; i += 1 )
    {
        IP[ 0 ] += !!((IP[ i ] || '').length);
        IP[ i ] = parseInt ( IP[ i ] ) || 0;
    }
    IP.push ( 256 , 256 , 256 , 256 );
    IP[ 4 + IP[ 0 ] ] *= Math.pow ( 256 , 4 - IP[ 0 ] );
    if ( IP[ 1 ] >= IP[ 5 ] || IP[ 2 ] >= IP[ 6 ] || IP[ 3 ] >= IP[ 7 ] || IP[ 4 ] >= IP[ 8 ] )
    {
        return false;
    }
    return IP[ 1 ] * (IP[ 0 ] === 1 || 16777216) + IP[ 2 ] * (IP[ 0 ] <= 2 || 65536) + IP[ 3 ] * (IP[ 0 ] <= 3 || 256) + IP[ 4 ] * 1;
}

function is_array ( mixed_var )
{

    var ini , _getFuncName = function ( fn )
    {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
        if ( !name )
        {
            return '(Anonymous)';
        }
        return name[ 1 ];
    };
    _isArray = function ( mixed_var )
    {



        if ( !mixed_var || typeof mixed_var !== 'object' || typeof mixed_var.length !== 'number' )
        {
            return false;
        }
        var len = mixed_var.length;
        mixed_var[ mixed_var.length ] = 'bogus';




        if ( len !== mixed_var.length )
        {

            mixed_var.length -= 1;
            return true;
        }




        delete mixed_var[ mixed_var.length ];
        return false;
    };

    if ( !mixed_var || typeof mixed_var !== 'object' )
    {
        return false;
    }

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};

    ini = this.php_js.ini[ 'phpjs.objectsAsArrays' ];

    return _isArray ( mixed_var ) ||

           ((!ini || (
               (parseInt ( ini.local_value , 10 ) !== 0 && (!ini.local_value.toLowerCase || ini.local_value.toLowerCase () !== 'off')))) && (Object.prototype.toString.call ( mixed_var ) === '[object Object]' && _getFuncName ( mixed_var.constructor ) === 'Object'
            ));
}

function is_binary ( vr )
{

    return typeof vr === 'string';
}

function is_bool ( mixed_var )
{

    return (mixed_var === true || mixed_var === false);
}

function is_buffer ( vr )
{

    return typeof vr === 'string';
}

function is_callable ( v , syntax_only , callable_name )
{

    var name = '' , obj = {} , method = '';
    var getFuncName = function ( fn )
    {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
        if ( !name )
        {
            return '(Anonymous)';
        }
        return name[ 1 ];
    };
    if ( typeof v === 'string' )
    {
        obj = this.window;
        method = v;
        name = v;
    }
    else if ( typeof v === 'function' )
    {
        return true;
    }
    else if ( Object.prototype.toString.call ( v ) === '[object Array]' && v.length === 2 && typeof v[ 0 ] === 'object' && typeof v[ 1 ] === 'string' )
    {
        obj = v[ 0 ];
        method = v[ 1 ];
        name = (obj.constructor && getFuncName ( obj.constructor )) + '::' + method;
    }
    else
    {
        return false;
    }
    if ( syntax_only || typeof obj[ method ] === 'function' )
    {
        if ( callable_name )
        {
            this.window[ callable_name ] = name;
        }
        return true;
    }
    return false;
}

function is_double ( mixed_var )
{

    return this.is_float ( mixed_var );
}

function is_finite ( val )
{

    var warningType = '';

    if ( val === Infinity || val === -Infinity )
    {
        return false;
    }

//Some warnings for maximum PHP compatibility
    if ( typeof val === 'object' )
    {
        warningType = (Object.prototype.toString.call ( val ) === '[object Array]' ? 'array' : 'object');
    }
    else if ( typeof val === 'string' && !val.match ( /^[\+\-]?\d/ ) )
    {
//simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
        warningType = 'string';
    }
    if ( warningType )
    {
        throw new Error ( 'Warning: is_finite() expects parameter 1 to be double, ' + warningType + ' given' );
    }

    return true;
}

function is_float ( mixed_var )
{

    return +mixed_var === mixed_var && (!isFinite ( mixed_var ) || !!(mixed_var % 1));
}

function is_infinite ( val )
{

    var warningType = '';

    if ( val === Infinity || val === -Infinity )
    {
        return true;
    }

//Some warnings for maximum PHP compatibility
    if ( typeof val === 'object' )
    {
        warningType = (Object.prototype.toString.call ( val ) === '[object Array]' ? 'array' : 'object');
    }
    else if ( typeof val === 'string' && !val.match ( /^[\+\-]?\d/ ) )
    {
//simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
        warningType = 'string';
    }
    if ( warningType )
    {
        throw new Error ( 'Warning: is_infinite() expects parameter 1 to be double, ' + warningType + ' given' );
    }

    return false;
}

function is_integer ( mixed_var )
{

    return this.is_int ( mixed_var );
}

function is_int ( mixed_var )
{

    return mixed_var === +mixed_var && isFinite ( mixed_var ) && !(mixed_var % 1);
}

function is_long ( mixed_var )
{

    return this.is_float ( mixed_var );
}

function is_nan ( val )
{

    var warningType = '';

    if ( typeof val === 'number' && isNaN ( val ) )
    {
        return true;
    }

//Some errors for maximum PHP compatibility
    if ( typeof val === 'object' )
    {
        warningType = (Object.prototype.toString.call ( val ) === '[object Array]' ? 'array' : 'object');
    }
    else if ( typeof val === 'string' && !val.match ( /^[\+\-]?\d/ ) )
    {
//simulate PHP's behaviour: '-9a' doesn't give a warning, but 'a9' does.
        warningType = 'string';
    }
    if ( warningType )
    {
        throw new Error ( 'Warning: is_nan() expects parameter 1 to be double, ' + warningType + ' given' );
    }

    return false;
}

function is_null ( mixed_var )
{

    return (mixed_var === null);
}

function is_numeric ( mixed_var )
{

    var whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
    return (typeof mixed_var === 'number' || (typeof mixed_var === 'string' && whitespace.indexOf ( mixed_var.slice ( -1 ) ) === -1)) && mixed_var !== '' && !isNaN ( mixed_var );
}

function is_object ( mixed_var )
{

    if ( Object.prototype.toString.call ( mixed_var ) === '[object Array]' )
    {
        return false;
    }
    return mixed_var !== null && typeof mixed_var === 'object';
}

function is_real ( mixed_var )
{

    return this.is_float ( mixed_var );
}

function is_resource ( handle )
{

    var getFuncName = function ( fn )
    {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
        if ( !name )
        {
            return '(Anonymous)';
        }
        return name[ 1 ];
    };
    return !(!handle || typeof handle !== 'object' || !handle.constructor || getFuncName ( handle.constructor ) !== 'PHPJS_Resource');
}

function is_scalar ( mixed_var )
{

    return (/boolean|number|string/).test ( typeof mixed_var );
}

function isset ()
{

    var a = arguments , l = a.length , i = 0 , undef;

    if ( l === 0 )
    {
        throw new Error ( 'Empty isset' );
    }

    while (i !== l)
    {
        if ( a[ i ] === undef || a[ i ] === null )
        {
            return false;
        }
        i++;
    }
    return true;
}

function is_string ( mixed_var )
{

    return (typeof mixed_var === 'string');
}

function is_unicode ( vr )
{

    if ( typeof vr !== 'string' )
    {
        return false;
    }

    var arr                                                                                      = [] , any                                                                           = '([\s\S])' , highSurrogate                                              = '[\uD800-\uDBFF]' , lowSurrogate = '[\uDC00-\uDFFF]' ,
        highSurrogateBeforeAny = new RegExp ( highSurrogate + any , 'g' ) , lowSurrogateAfterAny = new RegExp ( any + lowSurrogate , 'g' ) ,
        singleLowSurrogate                                                                       = new RegExp ( '^' + lowSurrogate + '$' ) , singleHighSurrogate = new RegExp ( '^' + highSurrogate + '$' );

    while ((arr = highSurrogateBeforeAny.exec ( vr )) !== null)
    {
        if ( !arr[ 1 ] || !arr[ 1 ].match ( singleLowSurrogate ) )
        {
            return false;
        }
    }
    while ((arr = lowSurrogateAfterAny.exec ( vr )) !== null)
    {
        if ( !arr[ 1 ] || !arr[ 1 ].match ( singleHighSurrogate ) )
        {
            return false;
        }
    }
    return true;
}

function join ( glue , pieces )
{

    return this.implode ( glue , pieces );
}

function json_decode ( str_json )
{

    /*
     http://www.JSON.org/json2.js
     2008-11-19
     Public Domain.
     NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
     See http://www.JSON.org/js.html
     */

    var json = this.window.JSON;
    if ( typeof json === 'object' && typeof json.parse === 'function' )
    {
        try
        {
            return json.parse ( str_json );
        } catch ( err )
        {
            if ( !(err instanceof SyntaxError) )
            {
                throw new Error ( 'Unexpected error type in json_decode()' );
            }
            this.php_js = this.php_js || {};
            this.php_js.last_error_json = 4;
            return null;
        }
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var j;
    var text = str_json;

    cx.lastIndex = 0;
    if ( cx.test ( text ) )
    {
        text = text.replace ( cx , function ( a )
        {
            return '\\u' + ('0000' + a.charCodeAt ( 0 ).toString ( 16 )).slice ( -4 );
        } );
    }

    if ( (/^[\],:{}\s]*$/).test ( text.replace ( /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g , '@' ).replace ( /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g , ']' ).replace ( /(?:^|:|,)(?:\s*\[)+/g , '' ) ) )
    {





        j = eval ( '(' + text + ')' );

        return j;
    }

    this.php_js = this.php_js || {};
    this.php_js.last_error_json = 4;
    return null;
}

function json_encode ( mixed_val )
{

    /*
     http://www.JSON.org/json2.js
     2008-11-19
     Public Domain.
     NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
     See http://www.JSON.org/js.html
     */
    var retVal , json = this.window.JSON;
    try
    {
        if ( typeof json === 'object' && typeof json.stringify === 'function' )
        {
            retVal = json.stringify ( mixed_val );

            if ( retVal === undefined )
            {
                throw new SyntaxError ( 'json_encode' );
            }
            return retVal;
        }

        var value = mixed_val;

        var quote = function ( string )
        {
            var escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var meta = {
                '\b' : '\\b' , '\t' : '\\t' , '\n' : '\\n' , '\f' : '\\f' , '\r' : '\\r' , '"' : '\\"' , '\\' : '\\\\'
            };

            escapable.lastIndex = 0;
            return escapable.test ( string ) ? '"' + string.replace ( escapable , function ( a )
            {
                var c = meta[ a ];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt ( 0 ).toString ( 16 )).slice ( -4 );
            } ) + '"' : '"' + string + '"';
        };

        var str = function ( key , holder )
        {
            var gap = '';
            var indent = '    ';
            var i = 0;
            var k = '';
            var v = '';
            var length = 0;
            var mind = gap;
            var partial = [];
            var value = holder[ key ];


            if ( value && typeof value === 'object' && typeof value.toJSON === 'function' )
            {
                value = value.toJSON ( key );
            }


            switch ( typeof value )
            {
                case 'string':
                    return quote ( value );

                case 'number':

                    return isFinite ( value ) ? String ( value ) : 'null';

                case 'boolean':
                case 'null':



                    return String ( value );

                case 'object':




                    if ( !value )
                    {
                        return 'null';
                    }
                    if ( (this.PHPJS_Resource && value instanceof this.PHPJS_Resource) || (window.PHPJS_Resource && value instanceof window.PHPJS_Resource) )
                    {
                        throw new SyntaxError ( 'json_encode' );
                    }


                    gap += indent;
                    partial = [];


                    if ( Object.prototype.toString.apply ( value ) === '[object Array]' )
                    {


                        length = value.length;
                        for ( i = 0 ; i < length ; i += 1 )
                        {
                            partial[ i ] = str ( i , value ) || 'null';
                        }



                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join ( ',\n' + gap ) + '\n' + mind + ']' : '[' + partial.join ( ',' ) + ']';
                        gap = mind;
                        return v;
                    }


                    for ( k in value )
                    {
                        if ( Object.hasOwnProperty.call ( value , k ) )
                        {
                            v = str ( k , value );
                            if ( v )
                            {
                                partial.push ( quote ( k ) + (gap ? ': ' : ':') + v );
                            }
                        }
                    }



                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join ( ',\n' + gap ) + '\n' + mind + '}' : '{' + partial.join ( ',' ) + '}';
                    gap = mind;
                    return v;
                case 'undefined':

                case 'function':

                default:
                    throw new SyntaxError ( 'json_encode' );
            }
        };



        return str ( '' , {
            '' : value
        } );

    } catch ( err )
    {

        if ( !(err instanceof SyntaxError) )
        {
            throw new Error ( 'Unexpected error type in json_encode()' );
        }
        this.php_js = this.php_js || {};
        this.php_js.last_error_json = 4;
        return null;
    }
}

function json_last_error ()
{

    /*
     JSON_ERROR_NONE = 0
     JSON_ERROR_DEPTH = 1
     JSON_ERROR_STATE_MISMATCH = 2
     JSON_ERROR_CTRL_CHAR = 3

     JSON_ERROR_SYNTAX = 4
     */
    return this.php_js && this.php_js.last_error_json ? this.php_js.last_error_json : 0;
}

function key ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }

    if ( pointers.indexOf ( arr ) === -1 )
    {
        pointers.push ( arr , 0 );
    }
    var cursor = pointers[ pointers.indexOf ( arr ) + 1 ];
    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        var ct = 0;
        for ( var k in arr )
        {
            if ( ct === cursor )
            {
                return k;
            }
            ct++;
        }
        return false;
    }
    if ( arr.length === 0 )
    {
        return false;
    }
    return cursor;
}

function krsort ( inputArr , sort_flags )
{

    var tmp_arr = {} , keys = [] , sorter , i , k , that = this , strictForIn = false , populateArr = {};

    switch ( sort_flags )
    {
        case 'SORT_STRING':

            sorter = function ( a , b )
            {
                return that.strnatcmp ( b , a );
            };
            break;
        case 'SORT_LOCALE_STRING':

            var loc = this.i18n_loc_get_default ();
            sorter = this.php_js.i18nLocales[ loc ].sorting;
            break;
        case 'SORT_NUMERIC':

            sorter = function ( a , b )
            {
                return (b - a);
            };
            break;
        case 'SORT_REGULAR':

        default:
            sorter = function ( b , a )
            {
                var aFloat = parseFloat ( a ) , bFloat = parseFloat ( b ) , aNumeric = aFloat + '' === a , bNumeric = bFloat + '' === b;
                if ( aNumeric && bNumeric )
                {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                }
                else if ( aNumeric && !bNumeric )
                {
                    return 1;
                }
                else if ( !aNumeric && bNumeric )
                {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            keys.push ( k );
        }
    }
    keys.sort ( sorter );

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( i = 0 ; i < keys.length ; i++ )
    {
        k = keys[ i ];
        tmp_arr[ k ] = inputArr[ k ];
        if ( strictForIn )
        {
            delete inputArr[ k ];
        }
    }
    for ( i in tmp_arr )
    {
        if ( tmp_arr.hasOwnProperty ( i ) )
        {
            populateArr[ i ] = tmp_arr[ i ];
        }
    }

    return strictForIn || populateArr;
}

function ksort ( inputArr , sort_flags )
{

    var tmp_arr = {} , keys = [] , sorter , i , k , that = this , strictForIn = false , populateArr = {};

    switch ( sort_flags )
    {
        case 'SORT_STRING':

            sorter = function ( a , b )
            {
                return that.strnatcmp ( a , b );
            };
            break;
        case 'SORT_LOCALE_STRING':

            var loc = this.i18n_loc_get_default ();
            sorter = this.php_js.i18nLocales[ loc ].sorting;
            break;
        case 'SORT_NUMERIC':

            sorter = function ( a , b )
            {
                return ((a + 0) - (b + 0));
            };
            break;

        default:
            sorter = function ( a , b )
            {
                var aFloat = parseFloat ( a ) , bFloat = parseFloat ( b ) , aNumeric = aFloat + '' === a , bNumeric = bFloat + '' === b;
                if ( aNumeric && bNumeric )
                {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                }
                else if ( aNumeric && !bNumeric )
                {
                    return 1;
                }
                else if ( !aNumeric && bNumeric )
                {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            keys.push ( k );
        }
    }
    keys.sort ( sorter );

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( i = 0 ; i < keys.length ; i++ )
    {
        k = keys[ i ];
        tmp_arr[ k ] = inputArr[ k ];
        if ( strictForIn )
        {
            delete inputArr[ k ];
        }
    }
    for ( i in tmp_arr )
    {
        if ( tmp_arr.hasOwnProperty ( i ) )
        {
            populateArr[ i ] = tmp_arr[ i ];
        }
    }

    return strictForIn || populateArr;
}

function lcfirst ( str )
{

    str += '';
    var f = str.charAt ( 0 ).toLowerCase ();
    return f + str.substr ( 1 );
}

function lcg_value ()
{

    return Math.random ();
}

function levenshtein ( s1 , s2 )
{

    if ( s1 == s2 )
    {
        return 0;
    }

    var s1_len = s1.length;
    var s2_len = s2.length;
    if ( s1_len === 0 )
    {
        return s2_len;
    }
    if ( s2_len === 0 )
    {
        return s1_len;
    }

    var split = false;
    try
    {
        split = !('0')[ 0 ];
    } catch ( e )
    {
        split = true;
    }
    if ( split )
    {
        s1 = s1.split ( '' );
        s2 = s2.split ( '' );
    }

    var v0 = new Array ( s1_len + 1 );
    var v1 = new Array ( s1_len + 1 );

    var s1_idx = 0 , s2_idx = 0 , cost = 0;
    for ( s1_idx = 0 ; s1_idx < s1_len + 1 ; s1_idx++ )
    {
        v0[ s1_idx ] = s1_idx;
    }
    var char_s1 = '' , char_s2 = '';
    for ( s2_idx = 1 ; s2_idx <= s2_len ; s2_idx++ )
    {
        v1[ 0 ] = s2_idx;
        char_s2 = s2[ s2_idx - 1 ];

        for ( s1_idx = 0 ; s1_idx < s1_len ; s1_idx++ )
        {
            char_s1 = s1[ s1_idx ];
            cost = (char_s1 == char_s2) ? 0 : 1;
            var m_min = v0[ s1_idx + 1 ] + 1;
            var b = v1[ s1_idx ] + 1;
            var c = v0[ s1_idx ] + cost;
            if ( b < m_min )
            {
                m_min = b;
            }
            if ( c < m_min )
            {
                m_min = c;
            }
            v1[ s1_idx + 1 ] = m_min;
        }
        var v_tmp = v0;
        v0 = v1;
        v1 = v_tmp;
    }
    return v0[ s1_len ];
}

function localeconv ()
{

    var arr = {} , prop = '';

    this.setlocale ( 'LC_ALL' , 0 );
    for ( prop in this.php_js.locales[ this.php_js.localeCategories.LC_NUMERIC ].LC_NUMERIC )
    {
        arr[ prop ] = this.php_js.locales[ this.php_js.localeCategories.LC_NUMERIC ].LC_NUMERIC[ prop ];
    }
    for ( prop in this.php_js.locales[ this.php_js.localeCategories.LC_MONETARY ].LC_MONETARY )
    {
        arr[ prop ] = this.php_js.locales[ this.php_js.localeCategories.LC_MONETARY ].LC_MONETARY[ prop ];
    }

    return arr;
}

function log10 ( arg )
{

    return Math.log ( arg ) / 2.302585092994046;
}

function log1p ( x )
{

    var ret = 0 , n = 50;
    if ( x <= -1 )
    {
        return '-INF';
    }
    if ( x < 0 || x > 1 )
    {
        return Math.log ( 1 + x );
    }
    for ( var i = 1 ; i < n ; i++ )
    {
        if ( (i % 2) === 0 )
        {
            ret -= Math.pow ( x , i ) / i;
        }
        else
        {
            ret += Math.pow ( x , i ) / i;
        }
    }
    return ret;
}

function log ( arg , base )
{

    return (typeof base === 'undefined') ? Math.log ( arg ) : Math.log ( arg ) / Math.log ( base );
}

function long2ip ( ip )
{

    if ( !isFinite ( ip ) )
    {
        return false;
    }

    return [ ip >>> 24 , ip >>> 16 & 0xFF , ip >>> 8 & 0xFF , ip & 0xFF ].join ( '.' );
}

function ltrim ( str , charlist )
{

    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace ( /([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g , '$1' );
    var re = new RegExp ( '^[' + charlist + ']+' , 'g' );
    return (str + '').replace ( re , '' );
}

function max ()
{

    var ar , retVal , i = 0 , n = 0 , argv = arguments , argc = argv.length , _obj2Array = function ( obj )
    {
        if ( Object.prototype.toString.call ( obj ) === '[object Array]' )
        {
            return obj;
        }
        else
        {
            var ar = [];
            for ( var i in obj )
            {
                if ( obj.hasOwnProperty ( i ) )
                {
                    ar.push ( obj[ i ] );
                }
            }
            return ar;
        }
    };//function _obj2Array
    _compare = function ( current , next )
    {
        var i = 0 , n = 0 , tmp = 0 , nl = 0 , cl = 0;

        if ( current === next )
        {
            return 0;
        }
        else if ( typeof current === 'object' )
        {
            if ( typeof next === 'object' )
            {
                current = _obj2Array ( current );
                next = _obj2Array ( next );
                cl = current.length;
                nl = next.length;
                if ( nl > cl )
                {
                    return 1;
                }
                else if ( nl < cl )
                {
                    return -1;
                }
                for ( i = 0, n = cl ; i < n ; ++i )
                {
                    tmp = _compare ( current[ i ] , next[ i ] );
                    if ( tmp == 1 )
                    {
                        return 1;
                    }
                    else if ( tmp == -1 )
                    {
                        return -1;
                    }
                }
                return 0;
            }
            return -1;
        }
        else if ( typeof next === 'object' )
        {
            return 1;
        }
        else if ( isNaN ( next ) && !isNaN ( current ) )
        {
            if ( current == 0 )
            {
                return 0;
            }
            return (current < 0 ? 1 : -1);
        }
        else if ( isNaN ( current ) && !isNaN ( next ) )
        {
            if ( next == 0 )
            {
                return 0;
            }
            return (next > 0 ? 1 : -1);
        }

        if ( next == current )
        {
            return 0;
        }
        return (next > current ? 1 : -1);
    };//function _compare
    if ( argc === 0 )
    {
        throw new Error ( 'At least one value should be passed to max()' );
    }
    else if ( argc === 1 )
    {
        if ( typeof argv[ 0 ] === 'object' )
        {
            ar = _obj2Array ( argv[ 0 ] );
        }
        else
        {
            throw new Error ( 'Wrong parameter count for max()' );
        }
        if ( ar.length === 0 )
        {
            throw new Error ( 'Array must contain at least one element for max()' );
        }
    }
    else
    {
        ar = argv;
    }

    retVal = ar[ 0 ];
    for ( i = 1, n = ar.length ; i < n ; ++i )
    {
        if ( _compare ( retVal , ar[ i ] ) == 1 )
        {
            retVal = ar[ i ];
        }
    }

    return retVal;
}

function md5_file ( str_filename )
{

    var buf = '';

    buf = this.file_get_contents ( str_filename );

    if ( !buf )
    {
        return false;
    }

    return this.md5 ( buf );
}

function md5 ( str )
{

    var xl;

    var rotateLeft = function ( lValue , iShiftBits )
    {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    };

    var addUnsigned = function ( lX , lY )
    {
        var lX4 , lY4 , lX8 , lY8 , lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if ( lX4 & lY4 )
        {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if ( lX4 | lY4 )
        {
            if ( lResult & 0x40000000 )
            {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else
            {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else
        {
            return (lResult ^ lX8 ^ lY8);
        }
    };

    var _F = function ( x , y , z )
    {
        return (x & y) | ((~x) & z);
    };
    var _G = function ( x , y , z )
    {
        return (x & z) | (y & (~z));
    };
    var _H = function ( x , y , z )
    {
        return (x ^ y ^ z);
    };
    var _I = function ( x , y , z )
    {
        return (y ^ (x | (~z)));
    };

    var _FF = function ( a , b , c , d , x , s , ac )
    {
        a = addUnsigned ( a , addUnsigned ( addUnsigned ( _F ( b , c , d ) , x ) , ac ) );
        return addUnsigned ( rotateLeft ( a , s ) , b );
    };

    var _GG = function ( a , b , c , d , x , s , ac )
    {
        a = addUnsigned ( a , addUnsigned ( addUnsigned ( _G ( b , c , d ) , x ) , ac ) );
        return addUnsigned ( rotateLeft ( a , s ) , b );
    };

    var _HH = function ( a , b , c , d , x , s , ac )
    {
        a = addUnsigned ( a , addUnsigned ( addUnsigned ( _H ( b , c , d ) , x ) , ac ) );
        return addUnsigned ( rotateLeft ( a , s ) , b );
    };

    var _II = function ( a , b , c , d , x , s , ac )
    {
        a = addUnsigned ( a , addUnsigned ( addUnsigned ( _I ( b , c , d ) , x ) , ac ) );
        return addUnsigned ( rotateLeft ( a , s ) , b );
    };

    var convertToWordArray = function ( str )
    {
        var lWordCount;
        var lMessageLength = str.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = new Array ( lNumberOfWords - 1 );
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength)
        {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[ lWordCount ] = (lWordArray[ lWordCount ] | (str.charCodeAt ( lByteCount ) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[ lWordCount ] = lWordArray[ lWordCount ] | (0x80 << lBytePosition);
        lWordArray[ lNumberOfWords - 2 ] = lMessageLength << 3;
        lWordArray[ lNumberOfWords - 1 ] = lMessageLength >>> 29;
        return lWordArray;
    };

    var wordToHex = function ( lValue )
    {
        var wordToHexValue = '' , wordToHexValue_temp = '' , lByte , lCount;
        for ( lCount = 0 ; lCount <= 3 ; lCount++ )
        {
            lByte = (lValue >>> (lCount * 8)) & 255;
            wordToHexValue_temp = '0' + lByte.toString ( 16 );
            wordToHexValue = wordToHexValue + wordToHexValue_temp.substr ( wordToHexValue_temp.length - 2 , 2 );
        }
        return wordToHexValue;
    };

    var x = [] , k , AA , BB , CC , DD , a , b , c , d , S11 = 7 , S12 = 12 , S13 = 17 , S14 = 22 , S21 = 5 , S22 = 9 , S23 = 14 , S24 = 20 , S31 = 4 ,
        S32                                                                                                                                       = 11 , S33 = 16 , S34 = 23 , S41 = 6 , S42                                                                                            = 10 , S43 = 15 , S44 = 21;

    str = this.utf8_encode ( str );
    x = convertToWordArray ( str );
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;

    xl = x.length;
    for ( k = 0 ; k < xl ; k += 16 )
    {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = _FF ( a , b , c , d , x[ k + 0 ] , S11 , 0xD76AA478 );
        d = _FF ( d , a , b , c , x[ k + 1 ] , S12 , 0xE8C7B756 );
        c = _FF ( c , d , a , b , x[ k + 2 ] , S13 , 0x242070DB );
        b = _FF ( b , c , d , a , x[ k + 3 ] , S14 , 0xC1BDCEEE );
        a = _FF ( a , b , c , d , x[ k + 4 ] , S11 , 0xF57C0FAF );
        d = _FF ( d , a , b , c , x[ k + 5 ] , S12 , 0x4787C62A );
        c = _FF ( c , d , a , b , x[ k + 6 ] , S13 , 0xA8304613 );
        b = _FF ( b , c , d , a , x[ k + 7 ] , S14 , 0xFD469501 );
        a = _FF ( a , b , c , d , x[ k + 8 ] , S11 , 0x698098D8 );
        d = _FF ( d , a , b , c , x[ k + 9 ] , S12 , 0x8B44F7AF );
        c = _FF ( c , d , a , b , x[ k + 10 ] , S13 , 0xFFFF5BB1 );
        b = _FF ( b , c , d , a , x[ k + 11 ] , S14 , 0x895CD7BE );
        a = _FF ( a , b , c , d , x[ k + 12 ] , S11 , 0x6B901122 );
        d = _FF ( d , a , b , c , x[ k + 13 ] , S12 , 0xFD987193 );
        c = _FF ( c , d , a , b , x[ k + 14 ] , S13 , 0xA679438E );
        b = _FF ( b , c , d , a , x[ k + 15 ] , S14 , 0x49B40821 );
        a = _GG ( a , b , c , d , x[ k + 1 ] , S21 , 0xF61E2562 );
        d = _GG ( d , a , b , c , x[ k + 6 ] , S22 , 0xC040B340 );
        c = _GG ( c , d , a , b , x[ k + 11 ] , S23 , 0x265E5A51 );
        b = _GG ( b , c , d , a , x[ k + 0 ] , S24 , 0xE9B6C7AA );
        a = _GG ( a , b , c , d , x[ k + 5 ] , S21 , 0xD62F105D );
        d = _GG ( d , a , b , c , x[ k + 10 ] , S22 , 0x2441453 );
        c = _GG ( c , d , a , b , x[ k + 15 ] , S23 , 0xD8A1E681 );
        b = _GG ( b , c , d , a , x[ k + 4 ] , S24 , 0xE7D3FBC8 );
        a = _GG ( a , b , c , d , x[ k + 9 ] , S21 , 0x21E1CDE6 );
        d = _GG ( d , a , b , c , x[ k + 14 ] , S22 , 0xC33707D6 );
        c = _GG ( c , d , a , b , x[ k + 3 ] , S23 , 0xF4D50D87 );
        b = _GG ( b , c , d , a , x[ k + 8 ] , S24 , 0x455A14ED );
        a = _GG ( a , b , c , d , x[ k + 13 ] , S21 , 0xA9E3E905 );
        d = _GG ( d , a , b , c , x[ k + 2 ] , S22 , 0xFCEFA3F8 );
        c = _GG ( c , d , a , b , x[ k + 7 ] , S23 , 0x676F02D9 );
        b = _GG ( b , c , d , a , x[ k + 12 ] , S24 , 0x8D2A4C8A );
        a = _HH ( a , b , c , d , x[ k + 5 ] , S31 , 0xFFFA3942 );
        d = _HH ( d , a , b , c , x[ k + 8 ] , S32 , 0x8771F681 );
        c = _HH ( c , d , a , b , x[ k + 11 ] , S33 , 0x6D9D6122 );
        b = _HH ( b , c , d , a , x[ k + 14 ] , S34 , 0xFDE5380C );
        a = _HH ( a , b , c , d , x[ k + 1 ] , S31 , 0xA4BEEA44 );
        d = _HH ( d , a , b , c , x[ k + 4 ] , S32 , 0x4BDECFA9 );
        c = _HH ( c , d , a , b , x[ k + 7 ] , S33 , 0xF6BB4B60 );
        b = _HH ( b , c , d , a , x[ k + 10 ] , S34 , 0xBEBFBC70 );
        a = _HH ( a , b , c , d , x[ k + 13 ] , S31 , 0x289B7EC6 );
        d = _HH ( d , a , b , c , x[ k + 0 ] , S32 , 0xEAA127FA );
        c = _HH ( c , d , a , b , x[ k + 3 ] , S33 , 0xD4EF3085 );
        b = _HH ( b , c , d , a , x[ k + 6 ] , S34 , 0x4881D05 );
        a = _HH ( a , b , c , d , x[ k + 9 ] , S31 , 0xD9D4D039 );
        d = _HH ( d , a , b , c , x[ k + 12 ] , S32 , 0xE6DB99E5 );
        c = _HH ( c , d , a , b , x[ k + 15 ] , S33 , 0x1FA27CF8 );
        b = _HH ( b , c , d , a , x[ k + 2 ] , S34 , 0xC4AC5665 );
        a = _II ( a , b , c , d , x[ k + 0 ] , S41 , 0xF4292244 );
        d = _II ( d , a , b , c , x[ k + 7 ] , S42 , 0x432AFF97 );
        c = _II ( c , d , a , b , x[ k + 14 ] , S43 , 0xAB9423A7 );
        b = _II ( b , c , d , a , x[ k + 5 ] , S44 , 0xFC93A039 );
        a = _II ( a , b , c , d , x[ k + 12 ] , S41 , 0x655B59C3 );
        d = _II ( d , a , b , c , x[ k + 3 ] , S42 , 0x8F0CCC92 );
        c = _II ( c , d , a , b , x[ k + 10 ] , S43 , 0xFFEFF47D );
        b = _II ( b , c , d , a , x[ k + 1 ] , S44 , 0x85845DD1 );
        a = _II ( a , b , c , d , x[ k + 8 ] , S41 , 0x6FA87E4F );
        d = _II ( d , a , b , c , x[ k + 15 ] , S42 , 0xFE2CE6E0 );
        c = _II ( c , d , a , b , x[ k + 6 ] , S43 , 0xA3014314 );
        b = _II ( b , c , d , a , x[ k + 13 ] , S44 , 0x4E0811A1 );
        a = _II ( a , b , c , d , x[ k + 4 ] , S41 , 0xF7537E82 );
        d = _II ( d , a , b , c , x[ k + 11 ] , S42 , 0xBD3AF235 );
        c = _II ( c , d , a , b , x[ k + 2 ] , S43 , 0x2AD7D2BB );
        b = _II ( b , c , d , a , x[ k + 9 ] , S44 , 0xEB86D391 );
        a = addUnsigned ( a , AA );
        b = addUnsigned ( b , BB );
        c = addUnsigned ( c , CC );
        d = addUnsigned ( d , DD );
    }

    var temp = wordToHex ( a ) + wordToHex ( b ) + wordToHex ( c ) + wordToHex ( d );

    return temp.toLowerCase ();
}

function metaphone ( word , max_phonemes )
{

    var type = typeof word;

    if ( type === 'undefined' || type === 'object' && word !== null )
    {
        return null;
    }

    if ( type === 'number' )
    {
        if ( isNaN ( word ) )
        {
            word = 'NAN';
        }
        else if ( !isFinite ( word ) )
        {
            word = 'INF';
        }
    }

    if ( max_phonemes < 0 )
    {
        return false;
    }

    max_phonemes = Math.floor ( +max_phonemes ) || 0;

    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' , vowel = 'AEIOU' , soft = 'EIY' , leadingNonAlpha = new RegExp ( '^[^' + alpha + ']+' );

    word = typeof word === 'string' ? word : '';
    word = word.toUpperCase ().replace ( leadingNonAlpha , '' );

    if ( !word )
    {
        return '';
    }

    var is = function ( p , c )
    {
        return c !== '' && p.indexOf ( c ) !== -1;
    };

    var i                      = 0 , cc = word.charAt ( 0 ) ,
        nc                     = word.charAt ( 1 ) ,
        nnc ,
        pc ,
        l = word.length , meta = '' ,

        traditional            = true;

    switch ( cc )
    {
        case 'A':
            meta += nc === 'E' ? nc : cc;
            i += 1;
            break;
        case 'G':
        case 'K':
        case 'P':
            if ( nc === 'N' )
            {
                meta += nc;
                i += 2;
            }
            break;
        case 'W':
            if ( nc === 'R' )
            {
                meta += nc;
                i += 2;
            }
            else if ( nc === 'H' || is ( vowel , nc ) )
            {
                meta += 'W';
                i += 2;
            }
            break;
        case 'X':
            meta += 'S';
            i += 1;
            break;
        case 'E':
        case 'I':
        case 'O':
        case 'U':
            meta += cc;
            i++;
            break;
    }

    for ( ; i < l && (max_phonemes === 0 || meta.length < max_phonemes) ; i += 1 )
    {
        cc = word.charAt ( i );
        nc = word.charAt ( i + 1 );
        pc = word.charAt ( i - 1 );
        nnc = word.charAt ( i + 2 );

        if ( cc === pc && cc !== 'C' )
        {
            continue;
        }

        switch ( cc )
        {
            case 'B':
                if ( pc !== 'M' )
                {
                    meta += cc;
                }
                break;
            case 'C':
                if ( is ( soft , nc ) )
                {
                    if ( nc === 'I' && nnc === 'A' )
                    {
                        meta += 'X';
                    }
                    else if ( pc !== 'S' )
                    {
                        meta += 'S';
                    }
                }
                else if ( nc === 'H' )
                {
                    meta += !traditional && (nnc === 'R' || pc === 'S') ? 'K' : 'X';
                    i += 1;
                }
                else
                {
                    meta += 'K';
                }
                break;
            case 'D':
                if ( nc === 'G' && is ( soft , nnc ) )
                {
                    meta += 'J';
                    i += 1;
                }
                else
                {
                    meta += 'T';
                }
                break;
            case 'G':
                if ( nc === 'H' )
                {
                    if ( !(is ( 'BDH' , word.charAt ( i - 3 ) ) || word.charAt ( i - 4 ) === 'H') )
                    {
                        meta += 'F';
                        i += 1;
                    }
                }
                else if ( nc === 'N' )
                {
                    if ( is ( alpha , nnc ) && word.substr ( i + 1 , 3 ) !== 'NED' )
                    {
                        meta += 'K';
                    }
                }
                else if ( is ( soft , nc ) && pc !== 'G' )
                {
                    meta += 'J';
                }
                else
                {
                    meta += 'K';
                }
                break;
            case 'H':
                if ( is ( vowel , nc ) && !is ( 'CGPST' , pc ) )
                {
                    meta += cc;
                }
                break;
            case 'K':
                if ( pc !== 'C' )
                {
                    meta += 'K';
                }
                break;
            case 'P':
                meta += nc === 'H' ? 'F' : cc;
                break;
            case 'Q':
                meta += 'K';
                break;
            case 'S':
                if ( nc === 'I' && is ( 'AO' , nnc ) )
                {
                    meta += 'X';
                }
                else if ( nc === 'H' )
                {
                    meta += 'X';
                    i += 1;
                }
                else if ( !traditional && word.substr ( i + 1 , 3 ) === 'CHW' )
                {
                    meta += 'X';
                    i += 2;
                }
                else
                {
                    meta += 'S';
                }
                break;
            case 'T':
                if ( nc === 'I' && is ( 'AO' , nnc ) )
                {
                    meta += 'X';
                }
                else if ( nc === 'H' )
                {
                    meta += '0';
                    i += 1;
                }
                else if ( word.substr ( i + 1 , 2 ) !== 'CH' )
                {
                    meta += 'T';
                }
                break;
            case 'V':
                meta += 'F';
                break;
            case 'W':
            case 'Y':
                if ( is ( vowel , nc ) )
                {
                    meta += cc;
                }
                break;
            case 'X':
                meta += 'KS';
                break;
            case 'Z':
                meta += 'S';
                break;
            case 'F':
            case 'J':
            case 'L':
            case 'M':
            case 'N':
            case 'R':
                meta += cc;
                break;
        }
    }

    return meta;

    /*
     "    abc", "ABK",
     "1234.678!@abc", "ABK",
     "aero", "ER",
     "air", "AR",
     "egg", "EK",
     "if", "IF",
     "of", "OF",
     "use", "US",
     "xAEIOU", "S",
     "gnome", "NM",
     "knight", "NFT",
     "pneumatic", "NMTK",
     "wrong", "RNK",
     "wheel", "WL",
     "xerox", "SRKS",
     "exchange", "EKSXNJ",
     "accuracy", "AKKRS",
     "blogger", "BLKR",
     "fffound", "FNT",
     "billboard", "BLBRT",
     "symbol", "SML",
     "special", "SPXL",
     "science", "SNS",
     "dance", "TNS",
     "change", "XNJ",
     "school", "SXL",
     "micro", "MKR",
     "bridge", "BRJ",
     "pidgin", "PJN",
     "edgy", "EJ",
     "handgun", "HNTKN",
     "draw", "TR",
     //'GN\b' 'GNED' -> ignore 'G'
     "sign", "SN",
     "signed", "SNT",
     "signs", "SKNS",
     "agency", "AJNS",
     "night", "NFT",
     "bright", "BRT",
     "height", "HT",
     "midnight", "MTNT",
     "jogger", "JKR",
     "horse", "HRS",
     "adhere", "ATHR",
     "mahjong", "MJNK",
     "fight", "FFT",
     "ghost", "FST",
     "ski", "SK",
     "brick", "BRK",
     "phrase", "FRS",
     "hypnotic", "PNTK",
     "topnotch", "TPNX",
     "quit", "KT",
     "squid", "SKT",
     "version", "FRXN",
     "silesia", "SLX",
     "enthusiasm", "EN0XSM",
     "shell", "XL",
     "spy", "SP",
     "system", "SSTM",
     "ratio", "RX",
     "nation", "NXN",
     "spatial", "SPXL",
     "the", "0",
     "nth", "N0",
     "truth", "TR0",
     "watch", "WX",
     "vote", "FT",
     "tweet", "TWT",
     "evolve", "EFLF",
     "rewrite", "RRT",
     "outwrite", "OTRT",
     "artwork", "ARTWRK",
     "excel", "EKSSL",
     "cyan", "SYN",
     "way", "W",
     "hybrid", "BRT",
     "zip", "SP",
     "zoom", "SM",
     "jazz", "JS",
     "zigzag", "SKSK",
     "abc abc", "ABKBK"
     */
}

function microtime ( get_as_float )
{

    var now = new Date ().getTime () / 1000;
    var s = parseInt ( now , 10 );

    return (get_as_float) ? now : (Math.round ( (now - s) * 1000 ) / 1000) + ' ' + s;
}

function min ()
{

    var ar , retVal , i = 0 , n = 0 , argv = arguments , argc = argv.length , _obj2Array = function ( obj )
    {
        if ( Object.prototype.toString.call ( obj ) === '[object Array]' )
        {
            return obj;
        }
        var ar = [];
        for ( var i in obj )
        {
            if ( obj.hasOwnProperty ( i ) )
            {
                ar.push ( obj[ i ] );
            }
        }
        return ar;
    };//function _obj2Array
    _compare = function ( current , next )
    {
        var i = 0 , n = 0 , tmp = 0 , nl = 0 , cl = 0;

        if ( current === next )
        {
            return 0;
        }
        else if ( typeof current === 'object' )
        {
            if ( typeof next === 'object' )
            {
                current = _obj2Array ( current );
                next = _obj2Array ( next );
                cl = current.length;
                nl = next.length;
                if ( nl > cl )
                {
                    return 1;
                }
                else if ( nl < cl )
                {
                    return -1;
                }
                for ( i = 0, n = cl ; i < n ; ++i )
                {
                    tmp = _compare ( current[ i ] , next[ i ] );
                    if ( tmp == 1 )
                    {
                        return 1;
                    }
                    else if ( tmp == -1 )
                    {
                        return -1;
                    }
                }
                return 0;
            }
            return -1;
        }
        else if ( typeof next === 'object' )
        {
            return 1;
        }
        else if ( isNaN ( next ) && !isNaN ( current ) )
        {
            if ( current == 0 )
            {
                return 0;
            }
            return (current < 0 ? 1 : -1);
        }
        else if ( isNaN ( current ) && !isNaN ( next ) )
        {
            if ( next == 0 )
            {
                return 0;
            }
            return (next > 0 ? 1 : -1);
        }

        if ( next == current )
        {
            return 0;
        }
        return (next > current ? 1 : -1);
    };//function _compare
    if ( argc === 0 )
    {
        throw new Error ( 'At least one value should be passed to min()' );
    }
    else if ( argc === 1 )
    {
        if ( typeof argv[ 0 ] === 'object' )
        {
            ar = _obj2Array ( argv[ 0 ] );
        }
        else
        {
            throw new Error ( 'Wrong parameter count for min()' );
        }
        if ( ar.length === 0 )
        {
            throw new Error ( 'Array must contain at least one element for min()' );
        }
    }
    else
    {
        ar = argv;
    }

    retVal = ar[ 0 ];
    for ( i = 1, n = ar.length ; i < n ; ++i )
    {
        if ( _compare ( retVal , ar[ i ] ) == -1 )
        {
            retVal = ar[ i ];
        }
    }

    return retVal;
}

function mktime ()
{

    var d = new Date () , r = arguments , i = 0 , e = [ 'Hours' , 'Minutes' , 'Seconds' , 'Month' , 'Date' , 'FullYear' ];

    for ( i = 0 ; i < e.length ; i++ )
    {
        if ( typeof r[ i ] === 'undefined' )
        {
            r[ i ] = d[ 'get' + e[ i ] ] ();
            r[ i ] += (i === 3);
        }
        else
        {
            r[ i ] = parseInt ( r[ i ] , 10 );
            if ( isNaN ( r[ i ] ) )
            {
                return false;
            }
        }
    }

    r[ 5 ] += (r[ 5 ] >= 0 ? (r[ 5 ] <= 69 ? 2e3 : (r[ 5 ] <= 100 ? 1900 : 0)) : 0);

    d.setFullYear ( r[ 5 ] , r[ 3 ] - 1 , r[ 4 ] );

    d.setHours ( r[ 0 ] , r[ 1 ] , r[ 2 ] );

    return (d.getTime () / 1e3 >> 0) - (d.getTime () < 0);
}

function money_format ( format , number )
{



    if ( typeof number !== 'number' )
    {
        return null;
    }
    var regex = /%((=.|[+^(!-])*?)(\d*?)(#(\d+))?(\.(\d+))?([in%])/g;

    this.setlocale ( 'LC_ALL' , 0 );
    var monetary = this.php_js.locales[ this.php_js.localeCategories[ 'LC_MONETARY' ] ][ 'LC_MONETARY' ];

    var doReplace = function ( n0 , flags , n2 , width , n4 , left , n6 , right , conversion )
    {
        var value = '' , repl = '';
        if ( conversion === '%' )
        {
            return '%';
        }
        var fill = flags && (/=./).test ( flags ) ? flags.match ( /=(.)/ )[ 1 ] : ' ';
        var showCurrSymbol = !flags || flags.indexOf ( '!' ) === -1;
        width = parseInt ( width , 10 ) || 0;

        var neg = number < 0;
        number = number + '';
        number = neg ? number.slice ( 1 ) : number;

        var decpos = number.indexOf ( '.' );
        var integer = decpos !== -1 ? number.slice ( 0 , decpos ) : number;
        var fraction = decpos !== -1 ? number.slice ( decpos + 1 ) : '';

        var _str_splice = function ( integerStr , idx , thous_sep )
        {
            var integerArr = integerStr.split ( '' );
            integerArr.splice ( idx , 0 , thous_sep );
            return integerArr.join ( '' );
        };

        var init_lgth = integer.length;
        left = parseInt ( left , 10 );
        var filler = init_lgth < left;
        if ( filler )
        {
            var fillnum = left - init_lgth;
            integer = new Array ( fillnum + 1 ).join ( fill ) + integer;
        }
        if ( flags.indexOf ( '^' ) === -1 )
        {

            var thous_sep = monetary.mon_thousands_sep;
            var mon_grouping = monetary.mon_grouping;

            if ( mon_grouping[ 0 ] < integer.length )
            {
                for ( var i = 0 , idx = integer.length ; i < mon_grouping.length ; i++ )
                {
                    idx -= mon_grouping[ i ];
                    if ( idx <= 0 )
                    {
                        break;
                    }
                    if ( filler && idx < fillnum )
                    {
                        thous_sep = fill;
                    }
                    integer = _str_splice ( integer , idx , thous_sep );
                }
            }
            if ( mon_grouping[ i - 1 ] > 0 )
            {
                while (idx > mon_grouping[ i - 1 ])
                {
                    idx -= mon_grouping[ i - 1 ];
                    if ( filler && idx < fillnum )
                    {
                        thous_sep = fill;
                    }
                    integer = _str_splice ( integer , idx , thous_sep );
                }
            }
        }


        if ( right === '0' )
        {
            value = integer;
        }
        else
        {
            var dec_pt = monetary.mon_decimal_point;
            if ( right === '' || right === undefined )
            {
                right = conversion === 'i' ? monetary.int_frac_digits : monetary.frac_digits;
            }
            right = parseInt ( right , 10 );

            if ( right === 0 )
            {
                fraction = '';
                dec_pt = '';
            }
            else if ( right < fraction.length )
            {
                fraction = Math.round ( parseFloat ( fraction.slice ( 0 , right ) + '.' + fraction.substr ( right , 1 ) ) ) + '';
                if ( right > fraction.length )
                {
                    fraction = new Array ( right - fraction.length + 1 ).join ( '0' ) + fraction;
                }
            }
            else if ( right > fraction.length )
            {
                fraction += new Array ( right - fraction.length + 1 ).join ( '0' );
            }
            value = integer + dec_pt + fraction;
        }

        var symbol = '';
        if ( showCurrSymbol )
        {
            symbol = conversion === 'i' ? monetary.int_curr_symbol : monetary.currency_symbol;
        }
        var sign_posn = neg ? monetary.n_sign_posn : monetary.p_sign_posn;




        var sep_by_space = neg ? monetary.n_sep_by_space : monetary.p_sep_by_space;


        var cs_precedes = neg ? monetary.n_cs_precedes : monetary.p_cs_precedes;


        if ( flags.indexOf ( '(' ) !== -1 )
        {



            repl = (cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') : '') + value + (!cs_precedes ? (sep_by_space === 1 ? ' ' : '') + symbol : '');
            if ( neg )
            {
                repl = '(' + repl + ')';
            }
            else
            {
                repl = ' ' + repl + ' ';
            }
        }
        else
        {
            var pos_sign = monetary.positive_sign;
            var neg_sign = monetary.negative_sign;
            var sign = neg ? (neg_sign) : (pos_sign);
            var otherSign = neg ? (pos_sign) : (neg_sign);
            var signPadding = '';
            if ( sign_posn )
            {
                signPadding = new Array ( otherSign.length - sign.length + 1 ).join ( ' ' );
            }

            var valueAndCS = '';
            switch ( sign_posn )
            {





                case 0:
                    valueAndCS = cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol;
                    repl = '(' + valueAndCS + ')';
                    break;
                case 1:
                    valueAndCS = cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol;
                    repl = signPadding + sign + (sep_by_space === 2 ? ' ' : '') + valueAndCS;
                    break;
                case 2:
                    valueAndCS = cs_precedes ? symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol;
                    repl = valueAndCS + (sep_by_space === 2 ? ' ' : '') + sign + signPadding;
                    break;
                case 3:
                    repl = cs_precedes ? signPadding + sign + (sep_by_space === 2 ? ' ' : '') + symbol + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + sign + signPadding + (sep_by_space === 2 ? ' ' : '') + symbol;
                    break;
                case 4:
                    repl = cs_precedes ? symbol + (sep_by_space === 2 ? ' ' : '') + signPadding + sign + (sep_by_space === 1 ? ' ' : '') + value : value + (sep_by_space === 1 ? ' ' : '') + symbol + (sep_by_space === 2 ? ' ' : '') + sign + signPadding;
                    break;
            }
        }

        var padding = width - repl.length;
        if ( padding > 0 )
        {
            padding = new Array ( padding + 1 ).join ( ' ' );

            if ( flags.indexOf ( '-' ) !== -1 )
            {
                repl += padding;
            }
            else
            {
                repl = padding + repl;
            }
        }
        return repl;
    };

    return format.replace ( regex , doReplace );
}

function mt_getrandmax ()
{

    return 2147483647;
}

function mt_rand ( min , max )
{

    var argc = arguments.length;
    if ( argc === 0 )
    {
        min = 0;
        max = 2147483647;
    }
    else if ( argc === 1 )
    {
        throw new Error ( 'Warning: mt_rand() expects exactly 2 parameters, 1 given' );
    }
    else
    {
        min = parseInt ( min , 10 );
        max = parseInt ( max , 10 );
    }
    return Math.floor ( Math.random () * (max - min + 1) ) + min;
}

function natcasesort ( inputArr )
{

    var valArr = [] , k , i , ret , that = this , strictForIn = false , populateArr = {};

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( [ k , inputArr[ k ] ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }
    valArr.sort ( function ( a , b )
                  {
                      return that.strnatcasecmp ( a[ 1 ] , b[ 1 ] );
                  } );

    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ valArr[ i ][ 0 ] ] = valArr[ i ][ 1 ];
    }

    return strictForIn || populateArr;
}

function natsort ( inputArr )
{

    var valArr = [] , k , i , ret , that = this , strictForIn = false , populateArr = {};

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( [ k , inputArr[ k ] ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }
    valArr.sort ( function ( a , b )
                  {
                      return that.strnatcmp ( a[ 1 ] , b[ 1 ] );
                  } );

    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ valArr[ i ][ 0 ] ] = valArr[ i ][ 1 ];
    }

    return strictForIn || populateArr;
}

function next ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }
    if ( pointers.indexOf ( arr ) === -1 )
    {
        pointers.push ( arr , 0 );
    }
    var arrpos = pointers.indexOf ( arr );
    var cursor = pointers[ arrpos + 1 ];
    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        var ct = 0;
        for ( var k in arr )
        {
            if ( ct === cursor + 1 )
            {
                pointers[ arrpos + 1 ] += 1;
                return arr[ k ];
            }
            ct++;
        }
        return false;
    }
    if ( arr.length === 0 || cursor === (arr.length - 1) )
    {
        return false;
    }
    pointers[ arrpos + 1 ] += 1;
    return arr[ pointers[ arrpos + 1 ] ];
}

function nl2br ( str , is_xhtml )
{

    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br ' + '/>' : '<br>';

    return (str + '').replace ( /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g , '$1' + breakTag + '$2' );
}

function nl_langinfo ( item )
{

    this.setlocale ( 'LC_ALL' , 0 );
    var loc = this.php_js.locales[ this.php_js.localeCategories.LC_TIME ];
    if ( item.indexOf ( 'ABDAY_' ) === 0 )
    {
        return loc.LC_TIME.a[ parseInt ( item.replace ( /^ABDAY_/ , '' ) , 10 ) - 1 ];
    }
    else if ( item.indexOf ( 'DAY_' ) === 0 )
    {
        return loc.LC_TIME.A[ parseInt ( item.replace ( /^DAY_/ , '' ) , 10 ) - 1 ];
    }
    else if ( item.indexOf ( 'ABMON_' ) === 0 )
    {
        return loc.LC_TIME.b[ parseInt ( item.replace ( /^ABMON_/ , '' ) , 10 ) - 1 ];
    }
    else if ( item.indexOf ( 'MON_' ) === 0 )
    {
        return loc.LC_TIME.B[ parseInt ( item.replace ( /^MON_/ , '' ) , 10 ) - 1 ];
    }
    else
    {
        switch ( item )
        {

            case 'AM_STR':
                return loc.LC_TIME.p[ 0 ];
            case 'PM_STR':
                return loc.LC_TIME.p[ 1 ];
            case 'D_T_FMT':
                return loc.LC_TIME.c;
            case 'D_FMT':
                return loc.LC_TIME.x;
            case 'T_FMT':
                return loc.LC_TIME.X;
            case 'T_FMT_AMPM':
                return loc.LC_TIME.r;
            case 'ERA':

            case 'ERA_YEAR':
            case 'ERA_D_T_FMT':
            case 'ERA_D_FMT':
            case 'ERA_T_FMT':
                return loc.LC_TIME[ item ];
        }
        loc = this.php_js.locales[ this.php_js.localeCategories.LC_MONETARY ];
        if ( item === 'CRNCYSTR' )
        {
            item = 'CURRENCY_SYMBOL';
        }
        switch ( item )
        {
            case 'INT_CURR_SYMBOL':

            case 'CURRENCY_SYMBOL':
            case 'MON_DECIMAL_POINT':
            case 'MON_THOUSANDS_SEP':
            case 'POSITIVE_SIGN':
            case 'NEGATIVE_SIGN':
            case 'INT_FRAC_DIGITS':
            case 'FRAC_DIGITS':
            case 'P_CS_PRECEDES':
            case 'P_SEP_BY_SPACE':
            case 'N_CS_PRECEDES':
            case 'N_SEP_BY_SPACE':
            case 'P_SIGN_POSN':
            case 'N_SIGN_POSN':
                return loc.LC_MONETARY[ item.toLowerCase () ];
            case 'MON_GROUPING':

                return loc.LC_MONETARY[ item.toLowerCase () ];
        }
        loc = this.php_js.locales[ this.php_js.localeCategories.LC_NUMERIC ];
        switch ( item )
        {
            case 'RADIXCHAR':

            case 'DECIMAL_POINT':
                return loc.LC_NUMERIC[ item.toLowerCase () ];
            case 'THOUSEP':

            case 'THOUSANDS_SEP':
                return loc.LC_NUMERIC[ item.toLowerCase () ];
            case 'GROUPING':

                return loc.LC_NUMERIC[ item.toLowerCase () ];
        }
        loc = this.php_js.locales[ this.php_js.localeCategories.LC_MESSAGES ];
        switch ( item )
        {
            case 'YESEXPR':

            case 'NOEXPR':
            case 'YESSTR':
            case 'NOSTR':
                return loc.LC_MESSAGES[ item ];
        }
        loc = this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ];
        if ( item === 'CODESET' )
        {
            return loc.LC_CTYPE[ item ];
        }
        return false;
    }
}

function number_format ( number , decimals , dec_point , thousands_sep )
{

    number = (number + '').replace ( /[^0-9+\-Ee.]/g , '' );
    var n                                                                                                                                   = !isFinite ( +number ) ? 0 : +number , prec = !isFinite ( +decimals ) ? 0 : Math.abs ( decimals ) ,
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep , dec = (typeof dec_point === 'undefined') ? '.' : dec_point , s = '' ,
        toFixedFix                                                                                                                          = function ( n , prec )
        {
            var k = Math.pow ( 10 , prec );
            return '' + (Math.round ( n * k ) / k).toFixed ( prec );
        };
    s = (prec ? toFixedFix ( n , prec ) : '' + Math.round ( n )).split ( '.' );
    if ( s[ 0 ].length > 3 )
    {
        s[ 0 ] = s[ 0 ].replace ( /\B(?=(?:\d{3})+(?!\d))/g , sep );
    }
    if ( (s[ 1 ] || '').length < prec )
    {
        s[ 1 ] = s[ 1 ] || '';
        s[ 1 ] += new Array ( prec - s[ 1 ].length + 1 ).join ( '0' );
    }
    return s.join ( dec );
}

function octdec ( oct_string )
{

    oct_string = (oct_string + '').replace ( /[^0-7]/gi , '' );
    return parseInt ( oct_string , 8 );
}

function ord ( string )
{

    var str = string + '' , code = str.charCodeAt ( 0 );
    if ( 0xD800 <= code && code <= 0xDBFF )
    {
        var hi = code;
        if ( str.length === 1 )
        {
            return code;

        }
        var low = str.charCodeAt ( 1 );
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if ( 0xDC00 <= code && code <= 0xDFFF )
    {
        return code;

    }
    return code;
}

function pack ( format )
{

    var formatPointer = 0 , argumentPointer = 1 , result = '' , argument = '' , i = 0 , r = [] , instruction , quantifier , word , precisionBits , exponentBits ,
        extraNullCount;

    var bias , minExp , maxExp , minUnnormExp , status , exp , len , bin , signal , n , intPart , floatPart , lastBit , rounded , j , k , tmpResult;

    while (formatPointer < format.length)
    {
        instruction = format.charAt ( formatPointer );
        quantifier = '';
        formatPointer++;
        while ((formatPointer < format.length) && (format.charAt ( formatPointer ).match ( /[\d\*]/ ) !== null))
        {
            quantifier += format.charAt ( formatPointer );
            formatPointer++;
        }
        if ( quantifier === '' )
        {
            quantifier = '1';
        }


        switch ( instruction )
        {
            case 'a':

            case 'A':

                if ( typeof arguments[ argumentPointer ] === 'undefined' )
                {
                    throw new Error ( 'Warning:  pack() Type ' + instruction + ': not enough arguments' );
                }
                else
                {
                    argument = String ( arguments[ argumentPointer ] );
                }
                if ( quantifier === '*' )
                {
                    quantifier = argument.length;
                }
                for ( i = 0 ; i < quantifier ; i++ )
                {
                    if ( typeof argument[ i ] === 'undefined' )
                    {
                        if ( instruction === 'a' )
                        {
                            result += String.fromCharCode ( 0 );
                        }
                        else
                        {
                            result += ' ';
                        }
                    }
                    else
                    {
                        result += argument[ i ];
                    }
                }
                argumentPointer++;
                break;
            case 'h':

            case 'H':

                if ( typeof arguments[ argumentPointer ] === 'undefined' )
                {
                    throw new Error ( 'Warning: pack() Type ' + instruction + ': not enough arguments' );
                }
                else
                {
                    argument = arguments[ argumentPointer ];
                }
                if ( quantifier === '*' )
                {
                    quantifier = argument.length;
                }
                if ( quantifier > argument.length )
                {
                    throw new Error ( 'Warning: pack() Type ' + instruction + ': not enough characters in string' );
                }

                for ( i = 0 ; i < quantifier ; i += 2 )
                {

                    word = argument[ i ];
                    if ( ((i + 1) >= quantifier) || typeof argument[ i + 1 ] === 'undefined' )
                    {
                        word += '0';
                    }
                    else
                    {
                        word += argument[ i + 1 ];
                    }

                    if ( instruction === 'h' )
                    {
                        word = word[ 1 ] + word[ 0 ];
                    }
                    result += String.fromCharCode ( parseInt ( word , 16 ) );
                }
                argumentPointer++;
                break;

            case 'c':

            case 'C':


                if ( quantifier === '*' )
                {
                    quantifier = arguments.length - argumentPointer;
                }
                if ( quantifier > (arguments.length - argumentPointer) )
                {
                    throw new Error ( 'Warning:  pack() Type ' + instruction + ': too few arguments' );
                }

                for ( i = 0 ; i < quantifier ; i++ )
                {
                    result += String.fromCharCode ( arguments[ argumentPointer ] );
                    argumentPointer++;
                }
                break;

            case 's':

            case 'S':

            case 'v':

                if ( quantifier === '*' )
                {
                    quantifier = arguments.length - argumentPointer;
                }
                if ( quantifier > (arguments.length - argumentPointer) )
                {
                    throw new Error ( 'Warning:  pack() Type ' + instruction + ': too few arguments' );
                }

                for ( i = 0 ; i < quantifier ; i++ )
                {
                    result += String.fromCharCode ( arguments[ argumentPointer ] & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 8 & 0xFF );
                    argumentPointer++;
                }
                break;

            case 'n':

                if ( quantifier === '*' )
                {
                    quantifier = arguments.length - argumentPointer;
                }
                if ( quantifier > (arguments.length - argumentPointer) )
                {
                    throw new Error ( 'Warning: pack() Type ' + instruction + ': too few arguments' );
                }

                for ( i = 0 ; i < quantifier ; i++ )
                {
                    result += String.fromCharCode ( arguments[ argumentPointer ] & 0xFF );
                    argumentPointer++;
                }
                break;

            case 'i':

            case 'I':

            case 'l':

            case 'L':

            case 'V':

                if ( quantifier === '*' )
                {
                    quantifier = arguments.length - argumentPointer;
                }
                if ( quantifier > (arguments.length - argumentPointer) )
                {
                    throw new Error ( 'Warning:  pack() Type ' + instruction + ': too few arguments' );
                }

                for ( i = 0 ; i < quantifier ; i++ )
                {
                    result += String.fromCharCode ( arguments[ argumentPointer ] & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 8 & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 16 & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 24 & 0xFF );
                    argumentPointer++;
                }

                break;
            case 'N':

                if ( quantifier === '*' )
                {
                    quantifier = arguments.length - argumentPointer;
                }
                if ( quantifier > (arguments.length - argumentPointer) )
                {
                    throw new Error ( 'Warning:  pack() Type ' + instruction + ': too few arguments' );
                }

                for ( i = 0 ; i < quantifier ; i++ )
                {
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 24 & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 16 & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] >> 8 & 0xFF );
                    result += String.fromCharCode ( arguments[ argumentPointer ] & 0xFF );
                    argumentPointer++;
                }
                break;

            case 'f':

            case 'd':


                precisionBits = 23;
                exponentBits = 8;
                if ( instruction === 'd' )
                {
                    precisionBits = 52;
                    exponentBits = 11;
                }

                if ( quantifier === '*' )
                {
                    quantifier = arguments.length - argumentPointer;
                }
                if ( quantifier > (arguments.length - argumentPointer) )
                {
                    throw new Error ( 'Warning:  pack() Type ' + instruction + ': too few arguments' );
                }
                for ( i = 0 ; i < quantifier ; i++ )
                {
                    argument = arguments[ argumentPointer ];
                    bias = Math.pow ( 2 , exponentBits - 1 ) - 1;
                    minExp = -bias + 1;
                    maxExp = bias;
                    minUnnormExp = minExp - precisionBits;
                    status = isNaN ( n = parseFloat ( argument ) ) || n === -Infinity || n === +Infinity ? n : 0;
                    exp = 0;
                    len = 2 * bias + 1 + precisionBits + 3;
                    bin = new Array ( len );
                    signal = (n = status !== 0 ? 0 : n) < 0;
                    n = Math.abs ( n );
                    intPart = Math.floor ( n );
                    floatPart = n - intPart;

                    for ( k = len ; k ; )
                    {
                        bin[ --k ] = 0;
                    }
                    for ( k = bias + 2 ; intPart && k ; )
                    {
                        bin[ --k ] = intPart % 2;
                        intPart = Math.floor ( intPart / 2 );
                    }
                    for ( k = bias + 1 ; floatPart > 0 && k ; --floatPart )
                    {
                        (bin[ ++k ] = ((floatPart *= 2) >= 1) - 0);
                    }
                    for ( k = -1 ; ++k < len && !bin[ k ] ; )
                    {
                    }

                    if ( bin[ (lastBit = precisionBits - 1 + (k = (exp = bias + 1 - k) >= minExp && exp <= maxExp ? k + 1 : bias + 1 - (exp = minExp - 1))) + 1 ] )
                    {
                        if ( !(rounded = bin[ lastBit ]) )
                        {
                            for ( j = lastBit + 2 ; !rounded && j < len ; rounded = bin[ j++ ] )
                            {
                            }
                        }
                        for ( j = lastBit + 1 ; rounded && --j >= 0 ; (bin[ j ] = !bin[ j ] - 0) && (rounded = 0) )
                        {
                        }
                    }

                    for ( k = k - 2 < 0 ? -1 : k - 3 ; ++k < len && !bin[ k ] ; )
                    {
                    }

                    if ( (exp = bias + 1 - k) >= minExp && exp <= maxExp )
                    {
                        ++k;
                    }
                    else
                    {
                        if ( exp < minExp )
                        {
                            if ( exp !== bias + 1 - len && exp < minUnnormExp )
                            { /*"encodeFloat::float underflow" */
                            }
                            k = bias + 1 - (exp = minExp - 1);
                        }
                    }

                    if ( intPart || status !== 0 )
                    {
                        exp = maxExp + 1;
                        k = bias + 2;
                        if ( status === -Infinity )
                        {
                            signal = 1;
                        }
                        else if ( isNaN ( status ) )
                        {
                            bin[ k ] = 1;
                        }
                    }

                    n = Math.abs ( exp + bias );
                    tmpResult = '';

                    for ( j = exponentBits + 1 ; --j ; )
                    {
                        tmpResult = (n % 2) + tmpResult;
                        n = n >>= 1;
                    }

                    n = 0;
                    j = 0;
                    k = (tmpResult = (signal ? '1' : '0') + tmpResult + bin.slice ( k , k + precisionBits ).join ( '' )).length;
                    r = [];

                    for ( ; k ; )
                    {
                        n += (1 << j) * tmpResult.charAt ( --k );
                        if ( j === 7 )
                        {
                            r[ r.length ] = String.fromCharCode ( n );
                            n = 0;
                        }
                        j = (j + 1) % 8;
                    }

                    r[ r.length ] = n ? String.fromCharCode ( n ) : '';
                    result += r.join ( '' );
                    argumentPointer++;
                }
                break;

            case 'x':

                if ( quantifier === '*' )
                {
                    throw new Error ( 'Warning: pack(): Type x: \'*\' ignored' );
                }
                for ( i = 0 ; i < quantifier ; i++ )
                {
                    result += String.fromCharCode ( 0 );
                }
                break;

            case 'X':

                if ( quantifier === '*' )
                {
                    throw new Error ( 'Warning: pack(): Type X: \'*\' ignored' );
                }
                for ( i = 0 ; i < quantifier ; i++ )
                {
                    if ( result.length === 0 )
                    {
                        throw new Error ( 'Warning: pack(): Type X:' + ' outside of string' );
                    }
                    else
                    {
                        result = result.substring ( 0 , result.length - 1 );
                    }
                }
                break;

            case '@':

                if ( quantifier === '*' )
                {
                    throw new Error ( 'Warning: pack(): Type X: \'*\' ignored' );
                }
                if ( quantifier > result.length )
                {
                    extraNullCount = quantifier - result.length;
                    for ( i = 0 ; i < extraNullCount ; i++ )
                    {
                        result += String.fromCharCode ( 0 );
                    }
                }
                if ( quantifier < result.length )
                {
                    result = result.substring ( 0 , quantifier );
                }
                break;

            default:
                throw new Error ( 'Warning:  pack() Type ' + instruction + ': unknown format code' );
        }
    }
    if ( argumentPointer < arguments.length )
    {
        throw new Error ( 'Warning: pack(): ' + (arguments.length - argumentPointer) + ' arguments unused' );
    }

    return result;
}

function parse_str ( str , array )
{

    var strArr = String ( str ).replace ( /^&/ , '' ).replace ( /&$/ , '' ).split ( '&' ) , sal = strArr.length , i , j , ct , p , lastObj , obj , lastIter , undef , chr , tmp , key , value , postLeftBracketPos , keys , keysLen ,
        fixStr                                                                                  = function ( str )
        {
            return decodeURIComponent ( str.replace ( /\+/g , '%20' ) );
        };

    if ( !array )
    {
        array = this.window;
    }

    for ( i = 0 ; i < sal ; i++ )
    {
        tmp = strArr[ i ].split ( '=' );
        key = fixStr ( tmp[ 0 ] );
        value = (tmp.length < 2) ? '' : fixStr ( tmp[ 1 ] );

        while (key.charAt ( 0 ) === ' ')
        {
            key = key.slice ( 1 );
        }
        if ( key.indexOf ( '\x00' ) > -1 )
        {
            key = key.slice ( 0 , key.indexOf ( '\x00' ) );
        }
        if ( key && key.charAt ( 0 ) !== '[' )
        {
            keys = [];
            postLeftBracketPos = 0;
            for ( j = 0 ; j < key.length ; j++ )
            {
                if ( key.charAt ( j ) === '[' && !postLeftBracketPos )
                {
                    postLeftBracketPos = j + 1;
                }
                else if ( key.charAt ( j ) === ']' )
                {
                    if ( postLeftBracketPos )
                    {
                        if ( !keys.length )
                        {
                            keys.push ( key.slice ( 0 , postLeftBracketPos - 1 ) );
                        }
                        keys.push ( key.substr ( postLeftBracketPos , j - postLeftBracketPos ) );
                        postLeftBracketPos = 0;
                        if ( key.charAt ( j + 1 ) !== '[' )
                        {
                            break;
                        }
                    }
                }
            }
            if ( !keys.length )
            {
                keys = [ key ];
            }
            for ( j = 0 ; j < keys[ 0 ].length ; j++ )
            {
                chr = keys[ 0 ].charAt ( j );
                if ( chr === ' ' || chr === '.' || chr === '[' )
                {
                    keys[ 0 ] = keys[ 0 ].substr ( 0 , j ) + '_' + keys[ 0 ].substr ( j + 1 );
                }
                if ( chr === '[' )
                {
                    break;
                }
            }

            obj = array;
            for ( j = 0, keysLen = keys.length ; j < keysLen ; j++ )
            {
                key = keys[ j ].replace ( /^['"]/ , '' ).replace ( /['"]$/ , '' );
                lastIter = j !== keys.length - 1;
                lastObj = obj;
                if ( (key !== '' && key !== ' ') || j === 0 )
                {
                    if ( obj[ key ] === undef )
                    {
                        obj[ key ] = {};
                    }
                    obj = obj[ key ];
                }
                else
                {
                    ct = -1;
                    for ( p in obj )
                    {
                        if ( obj.hasOwnProperty ( p ) )
                        {
                            if ( +p > ct && p.match ( /^\d+$/g ) )
                            {
                                ct = +p;
                            }
                        }
                    }
                    key = ct + 1;
                }
            }
            lastObj[ key ] = value;
        }
    }
}

function parse_url ( str , component )
{

    var query ,
        key                                                                                                                                                  = [ 'source' , 'scheme' , 'authority' , 'userInfo' , 'user' , 'pass' , 'host' , 'port' , 'relative' , 'path' , 'directory' , 'file' , 'query' , 'fragment' ] ,
        ini = (this.php_js && this.php_js.ini) || {} , mode = (ini[ 'phpjs.parse_url.mode' ] && ini[ 'phpjs.parse_url.mode' ].local_value) || 'php' , parser = {
            php    : /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/ ,
            strict : /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/ ,
            loose  : /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        };

    var m = parser[ mode ].exec ( str ) , uri = {} , i = 14;
    while (i--)
    {
        if ( m[ i ] )
        {
            uri[ key[ i ] ] = m[ i ];
        }
    }

    if ( component )
    {
        return uri[ component.replace ( 'PHP_URL_' , '' ).toLowerCase () ];
    }
    if ( mode !== 'php' )
    {
        var name = (ini[ 'phpjs.parse_url.queryKey' ] && ini[ 'phpjs.parse_url.queryKey' ].local_value) || 'queryKey';
        parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
        uri[ name ] = {};
        query = uri[ key[ 12 ] ] || '';
        query.replace ( parser , function ( $0 , $1 , $2 )
        {
            if ( $1 )
            {
                uri[ name ][ $1 ] = $2;
            }
        } );
    }
    delete uri.source;
    return uri;
}

function pathinfo ( path , options )
{

    var opt = '' , optName = '' , optTemp = 0 , tmp_arr = {} , cnt = 0 , i = 0;
    var have_basename = false , have_extension = false , have_filename = false;

    if ( !path )
    {
        return false;
    }
    if ( !options )
    {
        options = 'PATHINFO_ALL';
    }

    var OPTS = {
        'PATHINFO_DIRNAME' : 1 , 'PATHINFO_BASENAME' : 2 , 'PATHINFO_EXTENSION' : 4 , 'PATHINFO_FILENAME' : 8 , 'PATHINFO_ALL' : 0
    };
    for ( optName in OPTS )
    {
        OPTS.PATHINFO_ALL = OPTS.PATHINFO_ALL | OPTS[ optName ];
    }
    if ( typeof options !== 'number' )
    {
        options = [].concat ( options );
        for ( i = 0 ; i < options.length ; i++ )
        {

            if ( OPTS[ options[ i ] ] )
            {
                optTemp = optTemp | OPTS[ options[ i ] ];
            }
        }
        options = optTemp;
    }

    var __getExt = function ( path )
    {
        var str = path + '';
        var dotP = str.lastIndexOf ( '.' ) + 1;
        return !dotP ? false : dotP !== str.length ? str.substr ( dotP ) : '';
    };

    if ( options & OPTS.PATHINFO_DIRNAME )
    {
        var dirName = path.replace ( /\\/g , '/' ).replace ( /\/[^\/]*\/?$/ , '' );
        tmp_arr.dirname = dirName === path ? '.' : dirName;
    }

    if ( options & OPTS.PATHINFO_BASENAME )
    {
        if ( false === have_basename )
        {
            have_basename = this.basename ( path );
        }
        tmp_arr.basename = have_basename;
    }

    if ( options & OPTS.PATHINFO_EXTENSION )
    {
        if ( false === have_basename )
        {
            have_basename = this.basename ( path );
        }
        if ( false === have_extension )
        {
            have_extension = __getExt ( have_basename );
        }
        if ( false !== have_extension )
        {
            tmp_arr.extension = have_extension;
        }
    }

    if ( options & OPTS.PATHINFO_FILENAME )
    {
        if ( false === have_basename )
        {
            have_basename = this.basename ( path );
        }
        if ( false === have_extension )
        {
            have_extension = __getExt ( have_basename );
        }
        if ( false === have_filename )
        {
            have_filename = have_basename.slice ( 0 , have_basename.length - (have_extension ? have_extension.length + 1 : have_extension === false ? 0 : 1) );
        }

        tmp_arr.filename = have_filename;
    }

    cnt = 0;
    for ( opt in tmp_arr )
    {
        cnt++;
    }
    if ( cnt == 1 )
    {
        return tmp_arr[ opt ];
    }

    return tmp_arr;
}

function _phpjs_shared_bc ()
{
    /**
     * BC Math Library for Javascript
     * Ported from the PHP5 bcmath extension source code,
     * which uses the libbcmath package...
     *    Copyright (C) 1991, 1992, 1993, 1994, 1997 Free Software Foundation, Inc.
     *    Copyright (C) 2000 Philip A. Nelson
     *     The Free Software Foundation, Inc.
     *     59 Temple Place, Suite 330
     *     Boston, MA 02111-1307 USA.
     *      e-mail:  philnelson@acm.org
     *     us-mail:  Philip A. Nelson
     *               Computer Science Department, 9062
     *               Western Washington University
     *               Bellingham, WA 98226-9062
     *
     * bcmath-js homepage:
     *
     * This code is covered under the LGPL licence, and can be used however you want :)
     * Be kind and share any decent code changes.
     */

    /**
     * Binary Calculator (BC) Arbitrary Precision Mathematics Lib v0.10  (LGPL)
     * Copy of libbcmath included in PHP5 src
     *
     * Note: this is just the shared library file and does not include the php-style functions.
     *       use bcmath{-min}.js for functions like bcadd, bcsub etc.
     *
     * Feel free to use how-ever you want, just email any bug-fixes/improvements to the sourceforge project:
     *
     *
     * Ported from the PHP5 bcmath extension source code,
     * which uses the libbcmath package...
     *    Copyright (C) 1991, 1992, 1993, 1994, 1997 Free Software Foundation, Inc.
     *    Copyright (C) 2000 Philip A. Nelson
     *     The Free Software Foundation, Inc.
     *     59 Temple Place, Suite 330
     *     Boston, MA 02111-1307 USA.
     *      e-mail:  philnelson@acm.org
     *     us-mail:  Philip A. Nelson
     *               Computer Science Department, 9062
     *               Western Washington University
     *               Bellingham, WA 98226-9062
     */

    var libbcmath = {
        PLUS   : '+' , MINUS : '-' , BASE : 10 ,
        scale  : 0 ,
        /**
         * Basic number structure
         */
        bc_num : function ()
        {
            this.n_sign = null;
            this.n_len = null;
            /* (int) The number of digits before the decimal point. */
            this.n_scale = null;
            /* (int) The number of digits after the decimal point. */
//this.n_refs = null; /* (int) The number of pointers to this number. */
//this.n_text = null; /* ?? Linked list for available list. */
            this.n_value = null;
            /* array as value, where 1.23 = [1,2,3] */
            this.toString = function ()
            {
                var r , tmp;
                tmp = this.n_value.join ( '' );


                r = ((this.n_sign == libbcmath.PLUS) ? '' : this.n_sign) + tmp.substr ( 0 , this.n_len );


                if ( this.n_scale > 0 )
                {
                    r += '.' + tmp.substr ( this.n_len , this.n_scale );
                }
                return r;
            };
        } ,

        /**
         * Base add function
         *



         *
         * @param {bc_num} n1
         * @param {bc_num} n2
         * @param {int} scale_min
         * @return bc_num
         */
        bc_add : function ( n1 , n2 , scale_min )
        {
            var sum , cmp_res , res_scale;

            if ( n1.n_sign === n2.n_sign )
            {
                sum = libbcmath._bc_do_add ( n1 , n2 , scale_min );
                sum.n_sign = n1.n_sign;
            }
            else
            { /* subtraction must be done. */
                cmp_res = libbcmath._bc_do_compare ( n1 , n2 , false , false );
                /* Compare magnitudes. */
                switch ( cmp_res )
                {
                    case -1:
                        /* n1 is less than n2, subtract n1 from n2. */
                        sum = libbcmath._bc_do_sub ( n2 , n1 , scale_min );
                        sum.n_sign = n2.n_sign;
                        break;

                    case 0:
                        /* They are equal! return zero with the correct scale! */
                        res_scale = libbcmath.MAX ( scale_min , libbcmath.MAX ( n1.n_scale , n2.n_scale ) );
                        sum = libbcmath.bc_new_num ( 1 , res_scale );
                        libbcmath.memset ( sum.n_value , 0 , 0 , res_scale + 1 );
                        break;

                    case 1:
                        /* n2 is less than n1, subtract n2 from n1. */
                        sum = libbcmath._bc_do_sub ( n1 , n2 , scale_min );
                        sum.n_sign = n1.n_sign;
                }
            }
            return sum;
        } ,

        /**
         * This is the "user callable" routine to compare numbers N1 and N2.
         * @param {bc_num} n1
         * @param {bc_num} n2
         * @return int -1, 0, 1  (n1 < n2, ==, n1 > n2)
         */
        bc_compare : function ( n1 , n2 )
        {
            return libbcmath._bc_do_compare ( n1 , n2 , true , false );
        } ,

        _one_mult : function ( num , n_ptr , size , digit , result , r_ptr )
        {
            var carry , value;
            var nptr , rptr;
            if ( digit === 0 )
            {
                libbcmath.memset ( result , 0 , 0 , size );//memset (result, 0, size);
            }
            else
            {
                if ( digit == 1 )
                {
                    libbcmath.memcpy ( result , r_ptr , num , n_ptr , size );//memcpy (result, num, size);
                }
                else
                { /*  Initialize */
                    nptr = n_ptr + size - 1;//nptr = (unsigned char *) (num+size-1);
                    rptr = r_ptr + size - 1;//rptr = (unsigned char *) (result+size-1);
                    carry = 0;

                    while (size-- > 0)
                    {
                        value = num[ nptr-- ] * digit + carry;//value = *nptr-- * digit + carry;
//result[rptr--] = libbcmath.cint(value % libbcmath.BASE);
                        result[ rptr-- ] = value % libbcmath.BASE;
//carry = libbcmath.cint(value / libbcmath.BASE);
                        carry = Math.floor ( value / libbcmath.BASE );
                    }

                    if ( carry !== 0 )
                    {
                        result[ rptr ] = carry;
                    }
                }
            }
        } ,

        bc_divide : function ( n1 , n2 , scale )
        {
            var quot;
            var qval;
            var num1 , num2;
            var ptr1 , ptr2 , n2ptr , qptr;
            var scale1 , val;
            var len1 , len2 , scale2 , qdigits , extra , count;
            var qdig , qguess , borrow , carry;
            var mval;
            var zero;
            var norm;
            var ptrs;
            /* Test for divide by zero. (return failure) */
            if ( libbcmath.bc_is_zero ( n2 ) )
            {
                return -1;
            }

            /* Test for zero divide by anything (return zero) */
            if ( libbcmath.bc_is_zero ( n1 ) )
            {
                return libbcmath.bc_new_num ( 1 , scale );
            }

            /* Test for n1 equals n2 (return 1 as n1 nor n2 are zero)
             if (libbcmath.bc_compare(n1, n2, libbcmath.MAX(n1.n_scale, n2.n_scale)) === 0) {
             quot=libbcmath.bc_new_num(1, scale);
             quot.n_value[0] = 1;
             return quot;
             }
             */

            /* Test for divide by 1.  If it is we must truncate. */

            if ( n2.n_scale === 0 )
            {
                if ( n2.n_len === 1 && n2.n_value[ 0 ] === 1 )
                {
                    qval = libbcmath.bc_new_num ( n1.n_len , scale );//qval = bc_new_num (n1->n_len, scale);
                    qval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
                    libbcmath.memset ( qval.n_value , n1.n_len , 0 , scale );//memset (&qval->n_value[n1->n_len],0,scale);
                    libbcmath.memcpy ( qval.n_value , 0 , n1.n_value , 0 , n1.n_len + libbcmath.MIN ( n1.n_scale , scale ) );//memcpy (qval->n_value, n1->n_value, n1->n_len + MIN(n1->n_scale,scale));


                }
            }

            /* Set up the divide.  Move the decimal point on n1 by n2's scale.
             Remember, zeros on the end of num2 are wasted effort for dividing. */
            scale2 = n2.n_scale;//scale2 = n2->n_scale;
            n2ptr = n2.n_len + scale2 - 1;//n2ptr = (unsigned char *) n2.n_value+n2.n_len+scale2-1;
            while ((scale2 > 0) && (n2.n_value[ n2ptr-- ] === 0))
            {
                scale2--;
            }

            len1 = n1.n_len + scale2;
            scale1 = n1.n_scale - scale2;
            if ( scale1 < scale )
            {
                extra = scale - scale1;
            }
            else
            {
                extra = 0;
            }

            num1 = libbcmath.safe_emalloc ( 1 , n1.n_len + n1.n_scale , extra + 2 );//num1 = (unsigned char *) safe_emalloc (1, n1.n_len+n1.n_scale, extra+2);
            if ( num1 === null )
            {
                libbcmath.bc_out_of_memory ();
            }
            libbcmath.memset ( num1 , 0 , 0 , n1.n_len + n1.n_scale + extra + 2 );//memset (num1, 0, n1->n_len+n1->n_scale+extra+2);
            libbcmath.memcpy ( num1 , 1 , n1.n_value , 0 , n1.n_len + n1.n_scale );//memcpy (num1+1, n1.n_value, n1.n_len+n1.n_scale);
            len2 = n2.n_len + scale2;
            num2 = libbcmath.safe_emalloc ( 1 , len2 , 1 );//num2 = (unsigned char *) safe_emalloc (1, len2, 1);
            if ( num2 === null )
            {
                libbcmath.bc_out_of_memory ();
            }
            libbcmath.memcpy ( num2 , 0 , n2.n_value , 0 , len2 );//memcpy (num2, n2.n_value, len2);
            num2[ len2 ] = 0;
            n2ptr = 0;//n2ptr = num2;
            while (num2[ n2ptr ] === 0)
            {
                n2ptr++;
                len2--;
            }

            /* Calculate the number of quotient digits. */
            if ( len2 > len1 + scale )
            {
                qdigits = scale + 1;
                zero = true;
            }
            else
            {
                zero = false;
                if ( len2 > len1 )
                {
                    qdigits = scale + 1;
                    /* One for the zero integer part. */
                }
                else
                {
                    qdigits = len1 - len2 + scale + 1;
                }
            }

            /* Allocate and zero the storage for the quotient. */
            qval = libbcmath.bc_new_num ( qdigits - scale , scale );//qval = bc_new_num (qdigits-scale,scale);
            libbcmath.memset ( qval.n_value , 0 , 0 , qdigits );//memset (qval->n_value, 0, qdigits);
            /* Allocate storage for the temporary storage mval. */
            mval = libbcmath.safe_emalloc ( 1 , len2 , 1 );//mval = (unsigned char *) safe_emalloc (1, len2, 1);
            if ( mval === null )
            {
                libbcmath.bc_out_of_memory ();
            }

            /* Now for the full divide algorithm. */
            if ( !zero )
            { /* Normalize */
//norm = libbcmath.cint(10 / (libbcmath.cint(n2.n_value[n2ptr]) + 1));//norm =  10 / ((int)*n2ptr + 1);
                norm = Math.floor ( 10 / (n2.n_value[ n2ptr ] + 1) );//norm =  10 / ((int)*n2ptr + 1);
                if ( norm != 1 )
                {
                    libbcmath._one_mult ( num1 , 0 , len1 + scale1 + extra + 1 , norm , num1 , 0 );//libbcmath._one_mult(num1, len1+scale1+extra+1, norm, num1);
                    libbcmath._one_mult ( n2.n_value , n2ptr , len2 , norm , n2.n_value , n2ptr );//libbcmath._one_mult(n2ptr, len2, norm, n2ptr);

                }

                /* Initialize divide loop. */
                qdig = 0;
                if ( len2 > len1 )
                {
                    qptr = len2 - len1;//qptr = (unsigned char *) qval.n_value+len2-len1;
                }
                else
                {
                    qptr = 0;//qptr = (unsigned char *) qval.n_value;
                }

                /* Loop */
                while (qdig <= len1 + scale - len2)
                { /* Calculate the quotient digit guess. */
                    if ( n2.n_value[ n2ptr ] == num1[ qdig ] )
                    {
                        qguess = 9;
                    }
                    else
                    {
                        qguess = Math.floor ( (num1[ qdig ] * 10 + num1[ qdig + 1 ]) / n2.n_value[ n2ptr ] );
                    }
                    /* Test qguess. */

                    if ( n2.n_value[ n2ptr + 1 ] * qguess > (num1[ qdig ] * 10 + num1[ qdig + 1 ] - n2.n_value[ n2ptr ] * qguess) * 10 + num1[ qdig + 2 ] )
                    {//if (n2ptr[1]*qguess > (num1[qdig]*10 + num1[qdig+1] - *n2ptr*qguess)*10 + num1[qdig+2]) {
                        qguess--;
                        /* And again. */
                        if ( n2.n_value[ n2ptr + 1 ] * qguess > (num1[ qdig ] * 10 + num1[ qdig + 1 ] - n2.n_value[ n2ptr ] * qguess) * 10 + num1[ qdig + 2 ] )
                        {//if (n2ptr[1]*qguess > (num1[qdig]*10 + num1[qdig+1] - *n2ptr*qguess)*10 + num1[qdig+2])
                            qguess--;
                        }
                    }

                    /* Multiply and subtract. */
                    borrow = 0;
                    if ( qguess !== 0 )
                    {
                        mval[ 0 ] = 0;//*mval = 0;
                        libbcmath._one_mult ( n2.n_value , n2ptr , len2 , qguess , mval , 1 );//_one_mult (n2ptr, len2, qguess, mval+1);
                        ptr1 = qdig + len2;//(unsigned char *) num1+qdig+len2;
                        ptr2 = len2;//(unsigned char *) mval+len2;


                        for ( count = 0 ; count < len2 + 1 ; count++ )
                        {
                            if ( ptr2 < 0 )
                            {
//val = libbcmath.cint(num1[ptr1]) - 0 - borrow;//val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                val = num1[ ptr1 ] - 0 - borrow;//val = (int) *ptr1 - (int) *ptr2-- - borrow;
                            }
                            else
                            {
//val = libbcmath.cint(num1[ptr1]) - libbcmath.cint(mval[ptr2--]) - borrow;//val = (int) *ptr1 - (int) *ptr2-- - borrow;
                                val = num1[ ptr1 ] - mval[ ptr2-- ] - borrow;//val = (int) *ptr1 - (int) *ptr2-- - borrow;
                            }
                            if ( val < 0 )
                            {
                                val += 10;
                                borrow = 1;
                            }
                            else
                            {
                                borrow = 0;
                            }
                            num1[ ptr1-- ] = val;
                        }
                    }

                    /* Test for negative result. */
                    if ( borrow == 1 )
                    {
                        qguess--;
                        ptr1 = qdig + len2;//(unsigned char *) num1+qdig+len2;
                        ptr2 = len2 - 1;//(unsigned char *) n2ptr+len2-1;
                        carry = 0;
                        for ( count = 0 ; count < len2 ; count++ )
                        {
                            if ( ptr2 < 0 )
                            {
//val = libbcmath.cint(num1[ptr1]) + 0 + carry;//val = (int) *ptr1 + (int) *ptr2-- + carry;
                                val = num1[ ptr1 ] + 0 + carry;//val = (int) *ptr1 + (int) *ptr2-- + carry;
                            }
                            else
                            {
//val = libbcmath.cint(num1[ptr1]) + libbcmath.cint(n2.n_value[ptr2--]) + carry;//val = (int) *ptr1 + (int) *ptr2-- + carry;
                                val = num1[ ptr1 ] + n2.n_value[ ptr2-- ] + carry;//val = (int) *ptr1 + (int) *ptr2-- + carry;
                            }
                            if ( val > 9 )
                            {
                                val -= 10;
                                carry = 1;
                            }
                            else
                            {
                                carry = 0;
                            }
                            num1[ ptr1-- ] = val;//*ptr1-- = val;
                        }
                        if ( carry == 1 )
                        {
                            num1[ ptr1 ] = (num1[ ptr1 ] + 1) % 10;
                        }
                    }

                    /* We now know the quotient digit. */
                    qval.n_value[ qptr++ ] = qguess;//*qptr++ =  qguess;
                    qdig++;
                }
            }

            /* Clean up and return the number. */
            qval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
            if ( libbcmath.bc_is_zero ( qval ) )
            {
                qval.n_sign = libbcmath.PLUS;
            }
            libbcmath._bc_rm_leading_zeros ( qval );

            return qval;

//return 0;    /* Everything is OK. */
        } ,


        MUL_BASE_DIGITS : 80 , MUL_SMALL_DIGITS : (this.MUL_BASE_DIGITS / 4) ,//#define MUL_SMALL_DIGITS mul_base_digits/4

        /* The multiply routine.  N2 times N1 is put int PROD with the scale of
         the result being MIN(N2 scale+N1 scale, MAX (SCALE, N2 scale, N1 scale)).
         */
        /**
         * @param n1 bc_num
         * @param n2 bc_num
         * @param scale [int] optional
         */
        bc_multiply : function ( n1 , n2 , scale )
        {
            var pval;
            var len1 , len2;
            var full_scale , prod_scale;

            len1 = n1.n_len + n1.n_scale;
            len2 = n2.n_len + n2.n_scale;
            full_scale = n1.n_scale + n2.n_scale;
            prod_scale = libbcmath.MIN ( full_scale , libbcmath.MAX ( scale , libbcmath.MAX ( n1.n_scale , n2.n_scale ) ) );

//pval = libbcmath.bc_init_num();

            pval = libbcmath._bc_rec_mul ( n1 , len1 , n2 , len2 , full_scale );


            pval.n_sign = (n1.n_sign == n2.n_sign ? libbcmath.PLUS : libbcmath.MINUS);
//pval.n_value = pval.n_ptr;
            pval.n_len = len2 + len1 + 1 - full_scale;
            pval.n_scale = prod_scale;
            libbcmath._bc_rm_leading_zeros ( pval );
            if ( libbcmath.bc_is_zero ( pval ) )
            {
                pval.n_sign = libbcmath.PLUS;
            }
//bc_free_num (prod);
            return pval;
        } ,

        new_sub_num : function ( length , scale , value )
        {
            var temp = new libbcmath.bc_num ();
            temp.n_sign = libbcmath.PLUS;
            temp.n_len = length;
            temp.n_scale = scale;
            temp.n_value = value;
            return temp;
        } ,

        _bc_simp_mul : function ( n1 , n1len , n2 , n2len , full_scale )
        {
            var prod;
            var n1ptr , n2ptr , pvptr;
            var n1end , n2end;//char *n1end, *n2end;        /* To the end of n1 and n2. */
            var indx , sum , prodlen;//int indx, sum, prodlen;
            prodlen = n1len + n2len + 1;

            prod = libbcmath.bc_new_num ( prodlen , 0 );

            n1end = n1len - 1;//(char *) (n1->n_value + n1len - 1);
            n2end = n2len - 1;//(char *) (n2->n_value + n2len - 1);
            pvptr = prodlen - 1;//(char *) ((*prod)->n_value + prodlen - 1);
            sum = 0;


            for ( indx = 0 ; indx < prodlen - 1 ; indx++ )
            {
                n1ptr = n1end - libbcmath.MAX ( 0 , indx - n2len + 1 );//(char *) (n1end - MAX(0, indx-n2len+1));
                n2ptr = n2end - libbcmath.MIN ( indx , n2len - 1 );//(char *) (n2end - MIN(indx, n2len-1));
                while ((n1ptr >= 0) && (n2ptr <= n2end))
                {
                    sum += n1.n_value[ n1ptr-- ] * n2.n_value[ n2ptr++ ];//sum += *n1ptr-- * *n2ptr++;
                }
                prod.n_value[ pvptr-- ] = Math.floor ( sum % libbcmath.BASE );//*pvptr-- = sum % BASE;
                sum = Math.floor ( sum / libbcmath.BASE );//sum = sum / BASE;
            }
            prod.n_value[ pvptr ] = sum;//*pvptr = sum;
            return prod;
        } ,


        /* A special adder/subtractor for the recursive divide and conquer
         multiply algorithm.  Note: if sub is called, accum must
         be larger that what is being subtracted.  Also, accum and val
         must have n_scale = 0.  (e.g. they must look like integers. *) */
        _bc_shift_addsub : function ( accum , val , shift , sub )
        {
            var accp , valp;//signed char *accp, *valp;
            var count , carry;//int  count, carry;
            count = val.n_len;
            if ( val.n_value[ 0 ] === 0 )
            {
                count--;
            }

//assert (accum->n_len+accum->n_scale >= shift+count);
            if ( accum.n_len + accum.n_scale < shift + count )
            {
                throw new Error ( 'len + scale < shift + count' );
            }


            accp = accum.n_len + accum.n_scale - shift - 1;
            valp = val.n_len = 1;//(signed char *)(val->n_value + val->n_len - 1);
            carry = 0;
            if ( sub )
            {

                while (count--)
                {
                    accum.n_value[ accp ] -= val.n_value[ valp-- ] + carry;//*accp -= *valp-- + carry;
                    if ( accum.n_value[ accp ] < 0 )
                    {//if (*accp < 0)
                        carry = 1;
                        accum.n_value[ accp-- ] += libbcmath.BASE;//*accp-- += BASE;
                    }
                    else
                    {
                        carry = 0;
                        accp--;
                    }
                }
                while (carry)
                {
                    accum.n_value[ accp ] -= carry;//*accp -= carry;
                    if ( accum.n_value[ accp ] < 0 )
                    {//if (*accp < 0)
                        accum.n_value[ accp-- ] += libbcmath.BASE;
                    }
                    else
                    {
                        carry = 0;
                    }
                }
            }
            else
            {

                while (count--)
                {
                    accum.n_value[ accp ] += val.n_value[ valp-- ] + carry;//*accp += *valp-- + carry;
                    if ( accum.n_value[ accp ] > (libbcmath.BASE - 1) )
                    {//if (*accp > (BASE-1))
                        carry = 1;
                        accum.n_value[ accp-- ] -= libbcmath.BASE;//*accp-- -= BASE;
                    }
                    else
                    {
                        carry = 0;
                        accp--;
                    }
                }
                while (carry)
                {
                    accum.n_value[ accp ] += carry;//*accp += carry;
                    if ( accum.n_value[ accp ] > (libbcmath.BASE - 1) )
                    {//if (*accp > (BASE-1))
                        accum.n_value[ accp-- ] -= libbcmath.BASE;//*accp-- -= BASE;
                    }
                    else
                    {
                        carry = 0;
                    }
                }
            }
            return true;
        } ,

        /* Recursive divide and conquer multiply algorithm.
         original by
         Let u = u0 + u1*(b^n)
         Let v = v0 + v1*(b^n)
         Then uv = (B^2n+B^n)*u1*v1 + B^n*(u1-u0)*(v0-v1) + (B^n+1)*u0*v0

         B is the base of storage, number of digits in u1,u0 close to equal.
         */
        _bc_rec_mul : function ( u , ulen , v , vlen , full_scale )
        {
            var prod;
            var u0 , u1 , v0 , v1;//bc_num
            var u0len , v0len;//int
            var m1 , m2 , m3 , d1 , d2;//bc_num
            var n , prodlen , m1zero;
            var d1len , d2len;

            if ( (ulen + vlen) < libbcmath.MUL_BASE_DIGITS || ulen < libbcmath.MUL_SMALL_DIGITS || vlen < libbcmath.MUL_SMALL_DIGITS )
            {
                return libbcmath._bc_simp_mul ( u , ulen , v , vlen , full_scale );
            }


            n = Math.floor ( (libbcmath.MAX ( ulen , vlen ) + 1) / 2 );


            if ( ulen < n )
            {
                u1 = libbcmath.bc_init_num ();//u1 = bc_copy_num (BCG(_zero_));
                u0 = libbcmath.new_sub_num ( ulen , 0 , u.n_value );
            }
            else
            {
                u1 = libbcmath.new_sub_num ( ulen - n , 0 , u.n_value );
                u0 = libbcmath.new_sub_num ( n , 0 , u.n_value + ulen - n );
            }
            if ( vlen < n )
            {
                v1 = libbcmath.bc_init_num ();//bc_copy_num (BCG(_zero_));
                v0 = libbcmath.new_sub_num ( vlen , 0 , v.n_value );
            }
            else
            {
                v1 = libbcmath.new_sub_num ( vlen - n , 0 , v.n_value );
                v0 = libbcmath.new_sub_num ( n , 0 , v.n_value + vlen - n );
            }
            libbcmath._bc_rm_leading_zeros ( u1 );
            libbcmath._bc_rm_leading_zeros ( u0 );
            u0len = u0.n_len;
            libbcmath._bc_rm_leading_zeros ( v1 );
            libbcmath._bc_rm_leading_zeros ( v0 );
            v0len = v0.n_len;

            m1zero = libbcmath.bc_is_zero ( u1 ) || libbcmath.bc_is_zero ( v1 );


            d1 = libbcmath.bc_init_num ();
            d2 = libbcmath.bc_init_num ();
            d1 = libbcmath.bc_sub ( u1 , u0 , 0 );
            d1len = d1.n_len;

            d2 = libbcmath.bc_sub ( v0 , v1 , 0 );
            d2len = d2.n_len;


            if ( m1zero )
            {
                m1 = libbcmath.bc_init_num ();//bc_copy_num (BCG(_zero_));
            }
            else
            {
//m1 = libbcmath.bc_init_num();//allow pass-by-ref
                m1 = libbcmath._bc_rec_mul ( u1 , u1.n_len , v1 , v1.n_len , 0 );
            }
            if ( libbcmath.bc_is_zero ( d1 ) || libbcmath.bc_is_zero ( d2 ) )
            {
                m2 = libbcmath.bc_init_num ();//bc_copy_num (BCG(_zero_));
            }
            else
            {
//m2 = libbcmath.bc_init_num();//allow pass-by-ref
                m2 = libbcmath._bc_rec_mul ( d1 , d1len , d2 , d2len , 0 );
            }

            if ( libbcmath.bc_is_zero ( u0 ) || libbcmath.bc_is_zero ( v0 ) )
            {
                m3 = libbcmath.bc_init_num ();//bc_copy_num (BCG(_zero_));
            }
            else
            {
//m3 = libbcmath.bc_init_num();//allow pass-by-ref
                m3 = libbcmath._bc_rec_mul ( u0 , u0.n_len , v0 , v0.n_len , 0 );
            }


            prodlen = ulen + vlen + 1;
            prod = libbcmath.bc_new_num ( prodlen , 0 );

            if ( !m1zero )
            {
                libbcmath._bc_shift_addsub ( prod , m1 , 2 * n , 0 );
                libbcmath._bc_shift_addsub ( prod , m1 , n , 0 );
            }
            libbcmath._bc_shift_addsub ( prod , m3 , n , 0 );
            libbcmath._bc_shift_addsub ( prod , m3 , 0 , 0 );
            libbcmath._bc_shift_addsub ( prod , m2 , n , d1.n_sign != d2.n_sign );

            return prod;

//bc_free_num (&u1);
//bc_free_num (&u0);
//bc_free_num (&v1);
//bc_free_num (&m1);
//bc_free_num (&v0);
//bc_free_num (&m2);
//bc_free_num (&m3);
//bc_free_num (&d1);
//bc_free_num (&d2);
        } ,


        /**
         *
         * @param {bc_num} n1
         * @param {bc_num} n2
         * @param {boolean} use_sign
         * @param {boolean} ignore_last
         * @return -1, 0, 1 (see bc_compare)
         */
        _bc_do_compare : function ( n1 , n2 , use_sign , ignore_last )
        {
            var n1ptr , n2ptr;
            var count;
            /* First, compare signs. */
            if ( use_sign && (n1.n_sign != n2.n_sign) )
            {
                if ( n1.n_sign == libbcmath.PLUS )
                {
                    return (1);
                    /* Positive N1 > Negative N2 */
                }
                else
                {
                    return (-1);
                    /* Negative N1 < Positive N1 */
                }
            }

            /* Now compare the magnitude. */
            if ( n1.n_len != n2.n_len )
            {
                if ( n1.n_len > n2.n_len )
                { /* Magnitude of n1 > n2. */
                    if ( !use_sign || (n1.n_sign == libbcmath.PLUS) )
                    {
                        return (1);
                    }
                    else
                    {
                        return (-1);
                    }
                }
                else
                { /* Magnitude of n1 < n2. */
                    if ( !use_sign || (n1.n_sign == libbcmath.PLUS) )
                    {
                        return (-1);
                    }
                    else
                    {
                        return (1);
                    }
                }
            }

            /* If we get here, they have the same number of integer digits.
             check the integer part and the equal length part of the fraction. */
            count = n1.n_len + Math.min ( n1.n_scale , n2.n_scale );
            n1ptr = 0;
            n2ptr = 0;

            while ((count > 0) && (n1.n_value[ n1ptr ] == n2.n_value[ n2ptr ]))
            {
                n1ptr++;
                n2ptr++;
                count--;
            }

            if ( ignore_last && (count == 1) && (n1.n_scale == n2.n_scale) )
            {
                return (0);
            }

            if ( count !== 0 )
            {
                if ( n1.n_value[ n1ptr ] > n2.n_value[ n2ptr ] )
                { /* Magnitude of n1 > n2. */
                    if ( !use_sign || n1.n_sign == libbcmath.PLUS )
                    {
                        return (1);
                    }
                    else
                    {
                        return (-1);
                    }
                }
                else
                { /* Magnitude of n1 < n2. */
                    if ( !use_sign || n1.n_sign == libbcmath.PLUS )
                    {
                        return (-1);
                    }
                    else
                    {
                        return (1);
                    }
                }
            }

            /* They are equal up to the last part of the equal part of the fraction. */
            if ( n1.n_scale != n2.n_scale )
            {
                if ( n1.n_scale > n2.n_scale )
                {
                    for ( count = (n1.n_scale - n2.n_scale) ; count > 0 ; count-- )
                    {
                        if ( n1.n_value[ n1ptr++ ] !== 0 )
                        { /* Magnitude of n1 > n2. */
                            if ( !use_sign || n1.n_sign == libbcmath.PLUS )
                            {
                                return (1);
                            }
                            else
                            {
                                return (-1);
                            }
                        }
                    }
                }
                else
                {
                    for ( count = (n2.n_scale - n1.n_scale) ; count > 0 ; count-- )
                    {
                        if ( n2.n_value[ n2ptr++ ] !== 0 )
                        { /* Magnitude of n1 < n2. */
                            if ( !use_sign || n1.n_sign == libbcmath.PLUS )
                            {
                                return (-1);
                            }
                            else
                            {
                                return (1);
                            }
                        }
                    }
                }
            }

            /* They must be equal! */
            return (0);
        } ,


        /* Here is the full subtract routine that takes care of negative numbers.
         N2 is subtracted from N1 and the result placed in RESULT.  SCALE_MIN
         is the minimum scale for the result. */
        bc_sub : function ( n1 , n2 , scale_min )
        {
            var diff;
            var cmp_res , res_scale;//int
            if ( n1.n_sign != n2.n_sign )
            {
                diff = libbcmath._bc_do_add ( n1 , n2 , scale_min );
                diff.n_sign = n1.n_sign;
            }
            else
            { /* subtraction must be done. */
                /* Compare magnitudes. */
                cmp_res = libbcmath._bc_do_compare ( n1 , n2 , false , false );
                switch ( cmp_res )
                {
                    case -1:
                        /* n1 is less than n2, subtract n1 from n2. */
                        diff = libbcmath._bc_do_sub ( n2 , n1 , scale_min );
                        diff.n_sign = (n2.n_sign == libbcmath.PLUS ? libbcmath.MINUS : libbcmath.PLUS);
                        break;
                    case 0:
                        /* They are equal! return zero! */
                        res_scale = libbcmath.MAX ( scale_min , libbcmath.MAX ( n1.n_scale , n2.n_scale ) );
                        diff = libbcmath.bc_new_num ( 1 , res_scale );
                        libbcmath.memset ( diff.n_value , 0 , 0 , res_scale + 1 );
                        break;
                    case 1:
                        /* n2 is less than n1, subtract n2 from n1. */
                        diff = libbcmath._bc_do_sub ( n1 , n2 , scale_min );
                        diff.n_sign = n1.n_sign;
                        break;
                }
            }

            /* Clean up and return. */
//bc_free_num (result);
//*result = diff;
            return diff;
        } ,


        _bc_do_add : function ( n1 , n2 , scale_min )
        {
            var sum;
            var sum_scale , sum_digits;
            var n1ptr , n2ptr , sumptr;
            var carry , n1bytes , n2bytes;
            var tmp;


            sum_scale = libbcmath.MAX ( n1.n_scale , n2.n_scale );
            sum_digits = libbcmath.MAX ( n1.n_len , n2.n_len ) + 1;
            sum = libbcmath.bc_new_num ( sum_digits , libbcmath.MAX ( sum_scale , scale_min ) );


            /* Not needed?
             if (scale_min > sum_scale) {
             sumptr = (char *) (sum->n_value + sum_scale + sum_digits);
             for (count = scale_min - sum_scale; count > 0; count--) {
             *sumptr++ = 0;
             }
             }
             */


            n1bytes = n1.n_scale;
            n2bytes = n2.n_scale;
            n1ptr = (n1.n_len + n1bytes - 1);
            n2ptr = (n2.n_len + n2bytes - 1);
            sumptr = (sum_scale + sum_digits - 1);


            if ( n1bytes != n2bytes )
            {
                if ( n1bytes > n2bytes )
                {

                    while (n1bytes > n2bytes)
                    {
                        sum.n_value[ sumptr-- ] = n1.n_value[ n1ptr-- ];

                        n1bytes--;
                    }
                }
                else
                {

                    while (n2bytes > n1bytes)
                    {
                        sum.n_value[ sumptr-- ] = n2.n_value[ n2ptr-- ];

                        n2bytes--;
                    }
                }
            }


            n1bytes += n1.n_len;
            n2bytes += n2.n_len;
            carry = 0;
            while ((n1bytes > 0) && (n2bytes > 0))
            {


                tmp = n1.n_value[ n1ptr-- ] + n2.n_value[ n2ptr-- ] + carry;


                if ( tmp >= libbcmath.BASE )
                {
                    carry = 1;
                    tmp -= libbcmath.BASE;
                }
                else
                {
                    carry = 0;
                }
                sum.n_value[ sumptr ] = tmp;
                sumptr--;
                n1bytes--;
                n2bytes--;
            }


            if ( n1bytes === 0 )
            {

                while (n2bytes-- > 0)
                {
                    tmp = n2.n_value[ n2ptr-- ] + carry;

                    if ( tmp >= libbcmath.BASE )
                    {
                        carry = 1;
                        tmp -= libbcmath.BASE;
                    }
                    else
                    {
                        carry = 0;
                    }
                    sum.n_value[ sumptr-- ] = tmp;
                }
            }
            else
            {

                while (n1bytes-- > 0)
                {
                    tmp = n1.n_value[ n1ptr-- ] + carry;

                    if ( tmp >= libbcmath.BASE )
                    {
                        carry = 1;
                        tmp -= libbcmath.BASE;
                    }
                    else
                    {
                        carry = 0;
                    }
                    sum.n_value[ sumptr-- ] = tmp;
                }
            }


            if ( carry == 1 )
            {
                sum.n_value[ sumptr ] += 1;

            }


            libbcmath._bc_rm_leading_zeros ( sum );
            return sum;
        } ,

        /**
         * Perform a subtraction
         *




         *
         * Basic school maths says to subtract 2 numbers..
         * 1. make them the same length, the decimal places, and the integer part
         * 2. start from the right and subtract the two numbers from each other
         * 3. if the sum of the 2 numbers < 0, carry -1 to the next set and add 10 (ie 18 > carry 1 becomes 8). thus 0.9 + 0.9 = 1.8
         *
         * @param {bc_num} n1
         * @param {bc_num} n2
         * @param {int} scale_min
         * @return bc_num
         */
        _bc_do_sub : function ( n1 , n2 , scale_min )
        {
            var diff;//bc_num
            var diff_scale , diff_len;
            var min_scale , min_len;
            var n1ptr , n2ptr , diffptr;
            var borrow , count , val;

            diff_len = libbcmath.MAX ( n1.n_len , n2.n_len );
            diff_scale = libbcmath.MAX ( n1.n_scale , n2.n_scale );
            min_len = libbcmath.MIN ( n1.n_len , n2.n_len );
            min_scale = libbcmath.MIN ( n1.n_scale , n2.n_scale );
            diff = libbcmath.bc_new_num ( diff_len , libbcmath.MAX ( diff_scale , scale_min ) );

            /* Not needed?

             if (scale_min > diff_scale) {
             diffptr = (char *) (diff->n_value + diff_len + diff_scale);
             for (count = scale_min - diff_scale; count > 0; count--) {
             *diffptr++ = 0;
             }
             }
             */


            n1ptr = (n1.n_len + n1.n_scale - 1);
            n2ptr = (n2.n_len + n2.n_scale - 1);
            diffptr = (diff_len + diff_scale - 1);


            borrow = 0;


            if ( n1.n_scale != min_scale )
            {

                for ( count = n1.n_scale - min_scale ; count > 0 ; count-- )
                {
                    diff.n_value[ diffptr-- ] = n1.n_value[ n1ptr-- ];

                }
            }
            else
            {

                for ( count = n2.n_scale - min_scale ; count > 0 ; count-- )
                {
                    val = 0 - n2.n_value[ n2ptr-- ] - borrow;
//val = - *n2ptr-- - borrow;
                    if ( val < 0 )
                    {
                        val += libbcmath.BASE;
                        borrow = 1;
                    }
                    else
                    {
                        borrow = 0;
                    }
                    diff.n_value[ diffptr-- ] = val;
//*diffptr-- = val;
                }
            }


            for ( count = 0 ; count < min_len + min_scale ; count++ )
            {
                val = n1.n_value[ n1ptr-- ] - n2.n_value[ n2ptr-- ] - borrow;
//val = *n1ptr-- - *n2ptr-- - borrow;
                if ( val < 0 )
                {
                    val += libbcmath.BASE;
                    borrow = 1;
                }
                else
                {
                    borrow = 0;
                }
                diff.n_value[ diffptr-- ] = val;
//*diffptr-- = val;
            }


            if ( diff_len != min_len )
            {
                for ( count = diff_len - min_len ; count > 0 ; count-- )
                {
                    val = n1.n_value[ n1ptr-- ] - borrow;

                    if ( val < 0 )
                    {
                        val += libbcmath.BASE;
                        borrow = 1;
                    }
                    else
                    {
                        borrow = 0;
                    }
                    diff.n_value[ diffptr-- ] = val;
                }
            }


            libbcmath._bc_rm_leading_zeros ( diff );
            return diff;
        } ,

        /**
         *
         * @param {int} length
         * @param {int} scale
         * @return bc_num
         */
        bc_new_num : function ( length , scale )
        {
            var temp;
            temp = new libbcmath.bc_num ();
            temp.n_sign = libbcmath.PLUS;
            temp.n_len = length;
            temp.n_scale = scale;
            temp.n_value = libbcmath.safe_emalloc ( 1 , length + scale , 0 );
            libbcmath.memset ( temp.n_value , 0 , 0 , length + scale );
            return temp;
        } ,

        safe_emalloc : function ( size , len , extra )
        {
            return Array ( (size * len) + extra );
        } ,

        /**
         * Create a new number
         */
        bc_init_num : function ()
        {
            return new libbcmath.bc_new_num ( 1 , 0 );

        } ,

        _bc_rm_leading_zeros : function ( num )
        { /* We can move n_value to point to the first non zero digit! */
            while ((num.n_value[ 0 ] === 0) && (num.n_len > 1))
            {
                num.n_value.shift ();
                num.n_len--;
            }
        } ,

        /**
         * Convert to bc_num detecting scale
         */
        php_str2num : function ( str )
        {
            var p;
            p = str.indexOf ( '.' );
            if ( p == -1 )
            {
                return libbcmath.bc_str2num ( str , 0 );
            }
            else
            {
                return libbcmath.bc_str2num ( str , (str.length - p) );
            }

        } ,

        CH_VAL : function ( c )
        {
            return c - '0';//??
        } ,

        BCD_CHAR : function ( d )
        {
            return d + '0';
        } ,

        isdigit : function ( c )
        {
            return (isNaN ( parseInt ( c , 10 ) ) ? false : true);
        } ,

        bc_str2num : function ( str_in , scale )
        {
            var str , num , ptr , digits , strscale , zero_int , nptr;

            /* Check for valid number and count digits. */

            str = str_in.split ( '' );
            ptr = 0;
            digits = 0;
            strscale = 0;
            zero_int = false;
            if ( (str[ ptr ] === '+') || (str[ ptr ] === '-') )
            {
                ptr++;
                /* Sign */
            }
            while (str[ ptr ] === '0')
            {
                ptr++;
                /* Skip leading zeros. */
            }
//while (libbcmath.isdigit(str[ptr])) {
            while ((str[ ptr ]) % 1 === 0)
            {//libbcmath.isdigit(str[ptr])) {
                ptr++;
                digits++;
                /* digits */
            }

            if ( str[ ptr ] === '.' )
            {
                ptr++;
                /* decimal point */
            }
//while (libbcmath.isdigit(str[ptr])) {
            while ((str[ ptr ]) % 1 === 0)
            {//libbcmath.isdigit(str[ptr])) {
                ptr++;
                strscale++;
                /* digits */
            }

            if ( (str[ ptr ]) || (digits + strscale === 0) )
            {

                return libbcmath.bc_init_num ();
//*num = bc_copy_num (BCG(_zero_));
            }

            /* Adjust numbers and allocate storage and initialize fields. */
            strscale = libbcmath.MIN ( strscale , scale );
            if ( digits === 0 )
            {
                zero_int = true;
                digits = 1;
            }

            num = libbcmath.bc_new_num ( digits , strscale );

            /* Build the whole number. */
            ptr = 0;
            if ( str[ ptr ] === '-' )
            {
                num.n_sign = libbcmath.MINUS;
//(*num)->n_sign = MINUS;
                ptr++;
            }
            else
            {
                num.n_sign = libbcmath.PLUS;
//(*num)->n_sign = PLUS;
                if ( str[ ptr ] === '+' )
                {
                    ptr++;
                }
            }
            while (str[ ptr ] === '0')
            {
                ptr++;
                /* Skip leading zeros. */
            }

            nptr = 0;//(*num)->n_value;
            if ( zero_int )
            {
                num.n_value[ nptr++ ] = 0;
                digits = 0;
            }
            for ( ; digits > 0 ; digits-- )
            {
                num.n_value[ nptr++ ] = libbcmath.CH_VAL ( str[ ptr++ ] );
//*nptr++ = CH_VAL(*ptr++);
            }

            /* Build the fractional part. */
            if ( strscale > 0 )
            {
                ptr++;
                /* skip the decimal point! */
                for ( ; strscale > 0 ; strscale-- )
                {
                    num.n_value[ nptr++ ] = libbcmath.CH_VAL ( str[ ptr++ ] );
                }
            }

            return num;
        } ,

        cint : function ( v )
        {
            if ( typeof v === 'undefined' )
            {
                v = 0;
            }
            var x = parseInt ( v , 10 );
            if ( isNaN ( x ) )
            {
                x = 0;
            }
            return x;
        } ,

        /**
         * Basic min function
         * @param {int} a
         * @param {int} b
         */
        MIN : function ( a , b )
        {
            return ((a > b) ? b : a);
        } ,

        /**
         * Basic max function
         * @param {int} a
         * @param {int} b
         */
        MAX : function ( a , b )
        {
            return ((a > b) ? a : b);
        } ,

        /**
         * Basic odd function
         * @param {int} a
         */
        ODD : function ( a )
        {
            return (a & 1);
        } ,

        /**
         * replicate c function
         * @param {array} r     return (by reference)
         * @param {int} ptr
         * @param {string} chr    char to fill
         * @param {int} len       length to fill
         */
        memset : function ( r , ptr , chr , len )
        {
            var i;
            for ( i = 0 ; i < len ; i++ )
            {
                r[ ptr + i ] = chr;
            }
        } ,

        /**
         * Replacement c function
         * Obviously can't work like c does, so we've added an "offset" param so you could do memcpy(dest+1, src, len) as memcpy(dest, 1, src, len)
         * Also only works on arrays
         */
        memcpy : function ( dest , ptr , src , srcptr , len )
        {
            var i;
            for ( i = 0 ; i < len ; i++ )
            {
                dest[ ptr + i ] = src[ srcptr + i ];
            }
            return true;
        } ,


        /**
         * Determine if the number specified is zero or not
         * @param {bc_num} num    number to check
         * @return boolean      true when zero, false when not zero.
         */
        bc_is_zero : function ( num )
        {
            var count;
            var nptr;
            /* Quick check. */
//if (num == BCG(_zero_)) return TRUE;
            /* Initialize */
            count = num.n_len + num.n_scale;
            nptr = 0;//num->n_value;
            /* The check */
            while ((count > 0) && (num.n_value[ nptr++ ] === 0))
            {
                count--;
            }

            if ( count !== 0 )
            {
                return false;
            }
            else
            {
                return true;
            }
        } ,

        bc_out_of_memory : function ()
        {
            throw new Error ( '(BC) Out of memory' );
        }
    };
    return libbcmath;
}

function pi ()
{

    return 3.141592653589793;
}

function pos ( arr )
{

    return this.current ( arr );
}

function pow ( base , exp )
{

    return Math.pow ( base , exp );
}

function preg_grep ( pattern , input , flags )
{

    var p = '';
    var retObj = {};
    var invert = (flags === 1 || flags === 'PREG_GREP_INVERT');

    if ( typeof pattern === 'string' )
    {
        pattern = eval ( pattern );
    }

    if ( invert )
    {
        for ( p in input )
        {
            if ( (input[ p ] + '').search ( pattern ) === -1 )
            {
                retObj[ p ] = input[ p ];
            }
        }
    }
    else
    {
        for ( p in input )
        {
            if ( (input[ p ] + '').search ( pattern ) !== -1 )
            {
                retObj[ p ] = input[ p ];
            }
        }
    }

    return retObj;
}

function preg_quote ( str , delimiter )
{

    return String ( str ).replace ( new RegExp ( '[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]' , 'g' ) , '\\$&' );
}

function prev ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }
    var arrpos = pointers.indexOf ( arr );
    var cursor = pointers[ arrpos + 1 ];
    if ( pointers.indexOf ( arr ) === -1 || cursor === 0 )
    {
        return false;
    }
    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        var ct = 0;
        for ( var k in arr )
        {
            if ( ct === cursor - 1 )
            {
                pointers[ arrpos + 1 ] -= 1;
                return arr[ k ];
            }
            ct++;
        }

    }
    if ( arr.length === 0 )
    {
        return false;
    }
    pointers[ arrpos + 1 ] -= 1;
    return arr[ pointers[ arrpos + 1 ] ];
}

function printf ()
{

    var body , elmt , d = this.window.document;
    var ret = '';

    var HTMLNS = 'http://www.w3.org/1999/xhtml';
    body = d.getElementsByTagNameNS ? (d.getElementsByTagNameNS ( HTMLNS , 'body' )[ 0 ] ? d.getElementsByTagNameNS ( HTMLNS , 'body' )[ 0 ] : d.documentElement.lastChild) : d.getElementsByTagName ( 'body' )[ 0 ];

    if ( !body )
    {
        return false;
    }

    ret = this.sprintf.apply ( this , arguments );

    elmt = d.createTextNode ( ret );
    body.appendChild ( elmt );

    return ret.length;
}

function print_r ( array , return_val )
{

    var output = '' , pad_char = ' ' , pad_val = 4 , d = this.window.document , getFuncName = function ( fn )
    {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
        if ( !name )
        {
            return '(Anonymous)';
        }
        return name[ 1 ];
    };
    repeat_char = function ( len , pad_char )
    {
        var str = '';
        for ( var i = 0 ; i < len ; i++ )
        {
            str += pad_char;
        }
        return str;
    };
    formatArray = function ( obj , cur_depth , pad_val , pad_char )
    {
        if ( cur_depth > 0 )
        {
            cur_depth++;
        }

        var base_pad = repeat_char ( pad_val * cur_depth , pad_char );
        var thick_pad = repeat_char ( pad_val * (cur_depth + 1) , pad_char );
        var str = '';

        if ( typeof obj === 'object' && obj !== null && obj.constructor && getFuncName ( obj.constructor ) !== 'PHPJS_Resource' )
        {
            str += 'Array\n' + base_pad + '(\n';
            for ( var key in obj )
            {
                if ( Object.prototype.toString.call ( obj[ key ] ) === '[object Array]' )
                {
                    str += thick_pad + '[' + key + '] => ' + formatArray ( obj[ key ] , cur_depth + 1 , pad_val , pad_char );
                }
                else
                {
                    str += thick_pad + '[' + key + '] => ' + obj[ key ] + '\n';
                }
            }
            str += base_pad + ')\n';
        }
        else if ( obj === null || obj === undefined )
        {
            str = '';
        }
        else
        {
            str = obj.toString ();
        }

        return str;
    };

    output = formatArray ( array , 0 , pad_val , pad_char );

    if ( return_val !== true )
    {
        if ( d.body )
        {
            this.echo ( output );
        }
        else
        {
            try
            {
                d = XULDocument;
                this.echo ( '<pre xmlns="http://www.w3.org/1999/xhtml" style="white-space:pre;">' + output + '</pre>' );
            } catch ( e )
            {
                this.echo ( output );
            }
        }
        return true;
    }
    return output;
}

function quoted_printable_decode ( str )
{

    var RFC2045Decode1    = /=\r\n/gm ,
        RFC2045Decode2IN  = /=([0-9A-F]{2})/gim ,

        RFC2045Decode2OUT = function ( sMatch , sHex )
        {
            return String.fromCharCode ( parseInt ( sHex , 16 ) );
        };
    return str.replace ( RFC2045Decode1 , '' ).replace ( RFC2045Decode2IN , RFC2045Decode2OUT );
}

function quoted_printable_encode ( str )
{

    var hexChars                                                         = [ '0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'A' , 'B' , 'C' , 'D' , 'E' , 'F' ] ,
        RFC2045Encode1IN = / \r\n|\r\n|[^!-<>-~ ]/gm , RFC2045Encode1OUT = function ( sMatch )
        {


            if ( sMatch.length > 1 )
            {
                return sMatch.replace ( ' ' , '=20' );
            }

            var chr = sMatch.charCodeAt ( 0 );
            return '=' + hexChars[ ((chr >>> 4) & 15) ] + hexChars[ (chr & 15) ];
        };
    RFC2045Encode2IN = /.{1,72}(?!\r\n)[^=]{0,3}/g, RFC2045Encode2OUT = function ( sMatch )
    {
        if ( sMatch.substr ( sMatch.length - 2 ) === '\r\n' )
        {
            return sMatch;
        }
        return sMatch + '=\r\n';
    };
    str = str.replace ( RFC2045Encode1IN , RFC2045Encode1OUT ).replace ( RFC2045Encode2IN , RFC2045Encode2OUT );
    return str.substr ( 0 , str.length - 3 );
}

function quotemeta ( str )
{

    return (str + '').replace ( /([\.\\\+\*\?\[\^\]\$\(\)])/g , '\\$1' );
}

function rad2deg ( angle )
{

    return angle * 57.29577951308232;
}

function rand ( min , max )
{

    var argc = arguments.length;
    if ( argc === 0 )
    {
        min = 0;
        max = 2147483647;
    }
    else if ( argc === 1 )
    {
        throw new Error ( 'Warning: rand() expects exactly 2 parameters, 1 given' );
    }
    return Math.floor ( Math.random () * (max - min + 1) ) + min;

    /*

     var rand_seed, ctx, PHP_RAND_MAX=2147483647;

     if (!this.php_js || this.php_js.rand_seed === undefined) {
     this.srand();
     }
     rand_seed = this.php_js.rand_seed;

     var argc = arguments.length;
     if (argc === 1) {
     throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
     }

     var do_rand = function (ctx) {
     return ((ctx * 1103515245 + 12345) % (PHP_RAND_MAX + 1));
     };

     var php_rand = function (ctxArg) {
     this.php_js.rand_seed = do_rand(ctxArg);
     return parseInt(this.php_js.rand_seed, 10);
     };

     var number = php_rand(rand_seed);

     if (argc === 2) {
     number = min + parseInt(parseFloat(parseFloat(max) - min + 1.0) * (number/(PHP_RAND_MAX + 1.0)), 10);
     }
     return number;
     */
}

function range ( low , high , step )
{

    var matrix = [];
    var inival , endval , plus;
    var walker = step || 1;
    var chars = false;

    if ( !isNaN ( low ) && !isNaN ( high ) )
    {
        inival = low;
        endval = high;
    }
    else if ( isNaN ( low ) && isNaN ( high ) )
    {
        chars = true;
        inival = low.charCodeAt ( 0 );
        endval = high.charCodeAt ( 0 );
    }
    else
    {
        inival = (isNaN ( low ) ? 0 : low);
        endval = (isNaN ( high ) ? 0 : high);
    }

    plus = ((inival > endval) ? false : true);
    if ( plus )
    {
        while (inival <= endval)
        {
            matrix.push ( ((chars) ? String.fromCharCode ( inival ) : inival) );
            inival += walker;
        }
    }
    else
    {
        while (inival >= endval)
        {
            matrix.push ( ((chars) ? String.fromCharCode ( inival ) : inival) );
            inival -= walker;
        }
    }

    return matrix;
}

function rawurldecode ( str )
{

    return decodeURIComponent ( (str + '').replace ( /%(?![\da-f]{2})/gi , function ()
    {

        return '%25';
    } ) );
}

function rawurlencode ( str )
{

    str = (str + '').toString ();

    return encodeURIComponent ( str ).replace ( /!/g , '%21' ).replace ( /'/g , '%27' ).replace ( /\(/g , '%28' ).replace ( /\)/g , '%29' ).replace ( /\*/g , '%2A' );
}

function realpath ( path )
{

    var p = 0 , arr = [];
    /* Save the root, if not given */
    var r = this.window.location.href;
    /* Avoid input failures */
    path = (path + '').replace ( '\\' , '/' );
    /* Check if there's a port in path (like 'http://') */
    if ( path.indexOf ( '://' ) !== -1 )
    {
        p = 1;
    }
    /* Ok, there's not a port in path, so let's take the root */
    if ( !p )
    {
        path = r.substring ( 0 , r.lastIndexOf ( '/' ) + 1 ) + path;
    }
    /* Explode the given path into it's parts */
    arr = path.split ( '/' );
    /* The path is an array now */
    path = [];
    /* Foreach part make a check */
    for ( var k in arr )
    { /* This is'nt really interesting */
        if ( arr[ k ] == '.' )
        {
            continue;
        }
        /* This reduces the realpath */
        if ( arr[ k ] == '..' )
        {
            /* But only if there more than 3 parts in the path-array.
             * The first three parts are for the uri */
            if ( path.length > 3 )
            {
                path.pop ();
            }
        } /* This adds parts to the realpath */
        else
        {
            /* But only if the part is not empty or the uri
             * (the first three parts ar needed) was not
             * saved */
            if ( (path.length < 2) || (arr[ k ] !== '') )
            {
                path.push ( arr[ k ] );
            }
        }
    }
    /* Returns the absloute path as a string */
    return path.join ( '/' );
}

function reset ( arr )
{

    this.php_js = this.php_js || {};
    this.php_js.pointers = this.php_js.pointers || [];
    var indexOf = function ( value )
    {
        for ( var i = 0 , length = this.length ; i < length ; i++ )
        {
            if ( this[ i ] === value )
            {
                return i;
            }
        }
        return -1;
    };
    var pointers = this.php_js.pointers;
    if ( !pointers.indexOf )
    {
        pointers.indexOf = indexOf;
    }
    if ( pointers.indexOf ( arr ) === -1 )
    {
        pointers.push ( arr , 0 );
    }
    var arrpos = pointers.indexOf ( arr );
    if ( Object.prototype.toString.call ( arr ) !== '[object Array]' )
    {
        for ( var k in arr )
        {
            if ( pointers.indexOf ( arr ) === -1 )
            {
                pointers.push ( arr , 0 );
            }
            else
            {
                pointers[ arrpos + 1 ] = 0;
            }
            return arr[ k ];
        }
        return false;
    }
    if ( arr.length === 0 )
    {
        return false;
    }
    pointers[ arrpos + 1 ] = 0;
    return arr[ pointers[ arrpos + 1 ] ];
}

function round ( value , precision , mode )
{

    var m , f , isHalf , sgn;
    precision |= 0;
    m = Math.pow ( 10 , precision );
    value *= m;
    sgn = (value > 0) | -(value < 0);
    isHalf = value % 1 === 0.5 * sgn;
    f = Math.floor ( value );

    if ( isHalf )
    {
        switch ( mode )
        {
            case 'PHP_ROUND_HALF_DOWN':
                value = f + (sgn < 0);
                break;
            case 'PHP_ROUND_HALF_EVEN':
                value = f + (f % 2 * sgn);
                break;
            case 'PHP_ROUND_HALF_ODD':
                value = f + !(f % 2);
                break;
            default:
                value = f + (sgn > 0);
        }
    }

    return (isHalf ? value : Math.round ( value )) / m;
}

function rsort ( inputArr , sort_flags )
{

    var valArr = [] , k = '' , i = 0 , sorter = false , that = this , strictForIn = false , populateArr = [];

    switch ( sort_flags )
    {
        case 'SORT_STRING':

            sorter = function ( a , b )
            {
                return that.strnatcmp ( b , a );
            };
            break;
        case 'SORT_LOCALE_STRING':

            var loc = this.i18n_loc_get_default ();
            sorter = this.php_js.i18nLocales[ loc ].sorting;
            break;
        case 'SORT_NUMERIC':

            sorter = function ( a , b )
            {
                return (b - a);
            };
            break;
        case 'SORT_REGULAR':

        default:
            sorter = function ( b , a )
            {
                var aFloat = parseFloat ( a ) , bFloat = parseFloat ( b ) , aNumeric = aFloat + '' === a , bNumeric = bFloat + '' === b;
                if ( aNumeric && bNumeric )
                {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                }
                else if ( aNumeric && !bNumeric )
                {
                    return 1;
                }
                else if ( !aNumeric && bNumeric )
                {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }

    try
    {
        this.php_js = this.php_js || {};
    } catch ( e )
    {
        this.php_js = {};
    }

    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( inputArr[ k ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }

    valArr.sort ( sorter );

    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ i ] = valArr[ i ];
    }
    return strictForIn || populateArr;
}

function rtrim ( str , charlist )
{

    charlist = !charlist ? ' \\s\u00A0' : (charlist + '').replace ( /([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g , '\\$1' );
    var re = new RegExp ( '[' + charlist + ']+$' , 'g' );
    return (str + '').replace ( re , '' );
}

function serialize ( mixed_value )
{

    var val , key , okey , ktype = '' , vals = '' , count = 0 , _utf8Size = function ( str )
    {
        var size = 0 , i = 0 , l = str.length , code = '';
        for ( i = 0 ; i < l ; i++ )
        {
            code = str.charCodeAt ( i );
            if ( code < 0x0080 )
            {
                size += 1;
            }
            else if ( code < 0x0800 )
            {
                size += 2;
            }
            else
            {
                size += 3;
            }
        }
        return size;
    };
    _getType = function ( inp )
    {
        var match , key , cons , types , type = typeof inp;

        if ( type === 'object' && !inp )
        {
            return 'null';
        }
        if ( type === 'object' )
        {
            if ( !inp.constructor )
            {
                return 'object';
            }
            cons = inp.constructor.toString ();
            match = cons.match ( /(\w+)\(/ );
            if ( match )
            {
                cons = match[ 1 ].toLowerCase ();
            }
            types = [ 'boolean' , 'number' , 'string' , 'array' ];
            for ( key in types )
            {
                if ( cons == types[ key ] )
                {
                    type = types[ key ];
                    break;
                }
            }
        }
        return type;
    };
    type = _getType ( mixed_value );

    switch ( type )
    {
        case 'function':
            val = '';
            break;
        case 'boolean':
            val = 'b:' + (mixed_value ? '1' : '0');
            break;
        case 'number':
            val = (Math.round ( mixed_value ) == mixed_value ? 'i' : 'd') + ':' + mixed_value;
            break;
        case 'string':
            val = 's:' + _utf8Size ( mixed_value ) + ':"' + mixed_value + '"';
            break;
        case 'array':
        case 'object':
            val = 'a';
            /*
             if (type === 'object') {
             var objname = mixed_value.constructor.toString().match(/(\w+)\(\)/);
             if (objname == undefined) {
             return;
             }
             objname[1] = this.serialize(objname[1]);
             val = 'O' + objname[1].substring(1, objname[1].length - 1);
             }
             */

            for ( key in mixed_value )
            {
                if ( mixed_value.hasOwnProperty ( key ) )
                {
                    ktype = _getType ( mixed_value[ key ] );
                    if ( ktype === 'function' )
                    {
                        continue;
                    }

                    okey = (key.match ( /^[0-9]+$/ ) ? parseInt ( key , 10 ) : key);
                    vals += this.serialize ( okey ) + this.serialize ( mixed_value[ key ] );
                    count++;
                }
            }
            val += ':' + count + ':{' + vals + '}';
            break;
        case 'undefined':

        default:

            val = 'N';
            break;
    }
    if ( type !== 'object' && type !== 'array' )
    {
        val += ';';
    }
    return val;
}

function setcookie ( name , value , expires , path , domain , secure )
{

    return this.setrawcookie ( name , encodeURIComponent ( value ) , expires , path , domain , secure );
}

function setlocale ( category , locale )
{

    var categ = '' , cats = [] , i = 0 , d = this.window.document;

    var _copy = function _copy ( orig )
    {
        if ( orig instanceof RegExp )
        {
            return new RegExp ( orig );
        }
        else if ( orig instanceof Date )
        {
            return new Date ( orig );
        }
        var newObj = {};
        for ( var i in orig )
        {
            if ( typeof orig[ i ] === 'object' )
            {
                newObj[ i ] = _copy ( orig[ i ] );
            }
            else
            {
                newObj[ i ] = orig[ i ];
            }
        }
        return newObj;
    };

    var _nplurals1 = function ( n )
    {
        return 0;
    };
    var _nplurals2a = function ( n )
    {
        return n !== 1 ? 1 : 0;
    };
    var _nplurals2b = function ( n )
    {
        return n > 1 ? 1 : 0;
    };
    var _nplurals2c = function ( n )
    {
        return n % 10 === 1 && n % 100 !== 11 ? 0 : 1;
    };
    var _nplurals3a = function ( n )
    {
        return n % 10 === 1 && n % 100 !== 11 ? 0 : n !== 0 ? 1 : 2;
    };
    var _nplurals3b = function ( n )
    {
        return n === 1 ? 0 : n === 2 ? 1 : 2;
    };
    var _nplurals3c = function ( n )
    {
        return n === 1 ? 0 : (n === 0 || (n % 100 > 0 && n % 100 < 20)) ? 1 : 2;
    };
    var _nplurals3d = function ( n )
    {
        return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    };
    var _nplurals3e = function ( n )
    {
        return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    };
    var _nplurals3f = function ( n )
    {
        return n === 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2;
    };
    var _nplurals3g = function ( n )
    {
        return n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
    };
    var _nplurals3h = function ( n )
    {
        return n % 10 === 1 ? 0 : n % 10 === 2 ? 1 : 2;
    };
    var _nplurals4a = function ( n )
    {
        return n % 100 === 1 ? 0 : n % 100 === 2 ? 1 : n % 100 === 3 || n % 100 === 4 ? 2 : 3;
    };
    var _nplurals4b = function ( n )
    {
        return n === 1 ? 0 : n === 0 || (n % 100 && n % 100 <= 10) ? 1 : n % 100 >= 11 && n % 100 <= 19 ? 2 : 3;
    };
    var _nplurals5 = function ( n )
    {
        return n === 1 ? 0 : n === 2 ? 1 : n >= 3 && n <= 6 ? 2 : n >= 7 && n <= 10 ? 3 : 4;
    };
    var _nplurals6 = function ( n )
    {
        return n === 0 ? 5 : n === 1 ? 0 : n === 2 ? 1 : n % 100 >= 3 && n % 100 <= 10 ? 2 : n % 100 >= 11 && n % 100 <= 99 ? 3 : 4;
    };
    try
    {
        this.php_js = this.php_js || {};
    } catch ( e )
    {
        this.php_js = {};
    }

    var phpjs = this.php_js;

    if ( !phpjs.locales )
    {

        phpjs.locales = {};

        phpjs.locales.en = {
            'LC_COLLATE'       :

                function ( str1 , str2 )
                {
                    return (str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1);
                } , 'LC_CTYPE' : {
                an      : /^[A-Za-z\d]+$/g ,
                al      : /^[A-Za-z]+$/g ,
                ct      : /^[\u0000-\u001F\u007F]+$/g ,
                dg      : /^[\d]+$/g ,
                gr      : /^[\u0021-\u007E]+$/g ,
                lw      : /^[a-z]+$/g ,
                pr      : /^[\u0020-\u007E]+$/g ,
                pu      : /^[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]+$/g ,
                sp      : /^[\f\n\r\t\v ]+$/g ,
                up      : /^[A-Z]+$/g ,
                xd      : /^[A-Fa-f\d]+$/g ,
                CODESET : 'UTF-8' ,
                lower   : 'abcdefghijklmnopqrstuvwxyz' ,
                upper   : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            } , 'LC_TIME'      : {
                a : [ 'Sun' , 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' ] ,
                A : [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ] ,
                b : [ 'Jan' , 'Feb' , 'Mar' , 'Apr' , 'May' , 'Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct' , 'Nov' , 'Dec' ] ,
                B : [ 'January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December' ] ,
                c : '%a %d %b %Y %r %Z' ,
                p : [ 'AM' , 'PM' ] ,
                P : [ 'am' , 'pm' ] ,
                r : '%I:%M:%S %p' ,
                x : '%m/%d/%Y' ,
                X : '%r' ,

                alt_digits : '' ,
                ERA        : '' , ERA_YEAR : '' , ERA_D_T_FMT : '' , ERA_D_FMT : '' , ERA_T_FMT : ''
            } ,

            'LC_MONETARY'     : {
                int_curr_symbol   : 'USD' ,
                currency_symbol   : '$' ,
                mon_decimal_point : '.' ,
                mon_thousands_sep : ',' ,
                mon_grouping      : [ 3 ] ,
                positive_sign     : '' ,
                negative_sign     : '-' ,
                int_frac_digits   : 2 ,
                frac_digits       : 2 ,
                p_cs_precedes     : 1 ,
                p_sep_by_space    : 0 ,
                n_cs_precedes     : 1 ,
                n_sep_by_space    : 0 ,
                p_sign_posn       : 3 ,
                n_sign_posn       : 0
            } , 'LC_NUMERIC'  : {
                decimal_point : '.' , thousands_sep : ',' , grouping : [ 3 ]
            } , 'LC_MESSAGES' : {
                YESEXPR : '^[yY].*' , NOEXPR : '^[nN].*' , YESSTR : '' , NOSTR : ''
            } , nplurals      : _nplurals2a
        };
        phpjs.locales.en_US = _copy ( phpjs.locales.en );
        phpjs.locales.en_US.LC_TIME.c = '%a %d %b %Y %r %Z';
        phpjs.locales.en_US.LC_TIME.x = '%D';
        phpjs.locales.en_US.LC_TIME.X = '%r';

        phpjs.locales.en_US.LC_MONETARY.int_curr_symbol = 'USD ';
        phpjs.locales.en_US.LC_MONETARY.p_sign_posn = 1;
        phpjs.locales.en_US.LC_MONETARY.n_sign_posn = 1;
        phpjs.locales.en_US.LC_MONETARY.mon_grouping = [ 3 , 3 ];
        phpjs.locales.en_US.LC_NUMERIC.thousands_sep = '';
        phpjs.locales.en_US.LC_NUMERIC.grouping = [];

        phpjs.locales.en_GB = _copy ( phpjs.locales.en );
        phpjs.locales.en_GB.LC_TIME.r = '%l:%M:%S %P %Z';

        phpjs.locales.en_AU = _copy ( phpjs.locales.en_GB );
        phpjs.locales.C = _copy ( phpjs.locales.en );
        phpjs.locales.C.LC_CTYPE.CODESET = 'ANSI_X3.4-1968';
        phpjs.locales.C.LC_MONETARY = {
            int_curr_symbol   : '' ,
            currency_symbol   : '' ,
            mon_decimal_point : '' ,
            mon_thousands_sep : '' ,
            mon_grouping      : [] ,
            p_cs_precedes     : 127 ,
            p_sep_by_space    : 127 ,
            n_cs_precedes     : 127 ,
            n_sep_by_space    : 127 ,
            p_sign_posn       : 127 ,
            n_sign_posn       : 127 ,
            positive_sign     : '' ,
            negative_sign     : '' ,
            int_frac_digits   : 127 ,
            frac_digits       : 127
        };
        phpjs.locales.C.LC_NUMERIC = {
            decimal_point : '.' , thousands_sep : '' , grouping : []
        };
        phpjs.locales.C.LC_TIME.c = '%a %b %e %H:%M:%S %Y';
        phpjs.locales.C.LC_TIME.x = '%m/%d/%y';
        phpjs.locales.C.LC_TIME.X = '%H:%M:%S';
        phpjs.locales.C.LC_MESSAGES.YESEXPR = '^[yY]';
        phpjs.locales.C.LC_MESSAGES.NOEXPR = '^[nN]';

        phpjs.locales.fr = _copy ( phpjs.locales.en );
        phpjs.locales.fr.nplurals = _nplurals2b;
        phpjs.locales.fr.LC_TIME.a = [ 'dim' , 'lun' , 'mar' , 'mer' , 'jeu' , 'ven' , 'sam' ];
        phpjs.locales.fr.LC_TIME.A = [ 'dimanche' , 'lundi' , 'mardi' , 'mercredi' , 'jeudi' , 'vendredi' , 'samedi' ];
        phpjs.locales.fr.LC_TIME.b = [ 'jan' , 'f\u00E9v' , 'mar' , 'avr' , 'mai' , 'jun' , 'jui' , 'ao\u00FB' , 'sep' , 'oct' , 'nov' , 'd\u00E9c' ];
        phpjs.locales.fr.LC_TIME.B = [ 'janvier' , 'f\u00E9vrier' , 'mars' , 'avril' , 'mai' , 'juin' , 'juillet' , 'ao\u00FBt' , 'septembre' , 'octobre' , 'novembre' , 'd\u00E9cembre' ];
        phpjs.locales.fr.LC_TIME.c = '%a %d %b %Y %T %Z';
        phpjs.locales.fr.LC_TIME.p = [ '' , '' ];
        phpjs.locales.fr.LC_TIME.P = [ '' , '' ];
        phpjs.locales.fr.LC_TIME.x = '%d.%m.%Y';
        phpjs.locales.fr.LC_TIME.X = '%T';

        phpjs.locales.fr_CA = _copy ( phpjs.locales.fr );
        phpjs.locales.fr_CA.LC_TIME.x = '%Y-%m-%d';
    }
    if ( !phpjs.locale )
    {
        phpjs.locale = 'en_US';
        var NS_XHTML = 'http://www.w3.org/1999/xhtml';
        var NS_XML = 'http://www.w3.org/XML/1998/namespace';
        if ( d.getElementsByTagNameNS && d.getElementsByTagNameNS ( NS_XHTML , 'html' )[ 0 ] )
        {
            if ( d.getElementsByTagNameNS ( NS_XHTML , 'html' )[ 0 ].getAttributeNS && d.getElementsByTagNameNS ( NS_XHTML , 'html' )[ 0 ].getAttributeNS ( NS_XML , 'lang' ) )
            {
                phpjs.locale = d.getElementsByTagName ( NS_XHTML , 'html' )[ 0 ].getAttributeNS ( NS_XML , 'lang' );
            }
            else if ( d.getElementsByTagNameNS ( NS_XHTML , 'html' )[ 0 ].lang )
            {
                phpjs.locale = d.getElementsByTagNameNS ( NS_XHTML , 'html' )[ 0 ].lang;
            }
        }
        else if ( d.getElementsByTagName ( 'html' )[ 0 ] && d.getElementsByTagName ( 'html' )[ 0 ].lang )
        {
            phpjs.locale = d.getElementsByTagName ( 'html' )[ 0 ].lang;
        }
    }
    phpjs.locale = phpjs.locale.replace ( '-' , '_' );
    if ( !(phpjs.locale in phpjs.locales) )
    {
        if ( phpjs.locale.replace ( /_[a-zA-Z]+$/ , '' ) in phpjs.locales )
        {
            phpjs.locale = phpjs.locale.replace ( /_[a-zA-Z]+$/ , '' );
        }
    }

    if ( !phpjs.localeCategories )
    {
        phpjs.localeCategories = {
            'LC_COLLATE'  : phpjs.locale ,
            'LC_CTYPE'    : phpjs.locale ,
            'LC_MONETARY' : phpjs.locale ,
            'LC_NUMERIC'  : phpjs.locale ,
            'LC_TIME'     : phpjs.locale ,
            'LC_MESSAGES' : phpjs.locale
        };
    }
    if ( locale === null || locale === '' )
    {
        locale = this.getenv ( category ) || this.getenv ( 'LANG' );
    }
    else if ( Object.prototype.toString.call ( locale ) === '[object Array]' )
    {
        for ( i = 0 ; i < locale.length ; i++ )
        {
            if ( !(locale[ i ] in this.php_js.locales) )
            {
                if ( i === locale.length - 1 )
                {
                    return false;
                }
                continue;
            }
            locale = locale[ i ];
            break;
        }
    }

    if ( locale === '0' || locale === 0 )
    {
        if ( category === 'LC_ALL' )
        {
            for ( categ in this.php_js.localeCategories )
            {
                cats.push ( categ + '=' + this.php_js.localeCategories[ categ ] );
            }
            return cats.join ( ';' );
        }
        return this.php_js.localeCategories[ category ];
    }

    if ( !(locale in this.php_js.locales) )
    {
        return false;
    }

    if ( category === 'LC_ALL' )
    {
        for ( categ in this.php_js.localeCategories )
        {
            this.php_js.localeCategories[ categ ] = locale;
        }
    }
    else
    {
        this.php_js.localeCategories[ category ] = locale;
    }
    return locale;
}

function setrawcookie ( name , value , expires , path , domain , secure )
{

    if ( typeof expires === 'string' && (/^\d+$/).test ( expires ) )
    {
        expires = parseInt ( expires , 10 );
    }

    if ( expires instanceof Date )
    {
        expires = expires.toGMTString ();
    }
    else if ( typeof expires === 'number' )
    {
        expires = (new Date ( expires * 1e3 )).toGMTString ();
    }

    var r = [ name + '=' + value ] , s = {} , i = '';
    s = {
        expires : expires , path : path , domain : domain
    };
    for ( i in s )
    {
        if ( s.hasOwnProperty ( i ) )
        {
            s[ i ] && r.push ( i + '=' + s[ i ] );
        }
    }

    return secure && r.push ( 'secure' ), this.window.document.cookie = r.join ( ';' ), true;
}

function set_time_limit ( seconds )
{

    this.php_js = this.php_js || {};

    this.window.setTimeout ( function ()
                             {
                                 if ( !this.php_js.timeoutStatus )
                                 {
                                     this.php_js.timeoutStatus = true;
                                 }
                                 throw 'Maximum execution time exceeded';
                             } , seconds * 1000 );
}

function settype ( vr , type )
{

    var is_array = function ( arr )
    {
        return typeof arr === 'object' && typeof arr.length === 'number' && !(arr.propertyIsEnumerable ( 'length' )) && typeof arr.splice === 'function';
    };
    var v , mtch , i , obj;
    v = this[ vr ] ? this[ vr ] : vr;

    try
    {
        switch ( type )
        {
            case 'boolean':
                if ( is_array ( v ) && v.length === 0 )
                {
                    this[ vr ] = false;
                }
                else if ( v === '0' )
                {
                    this[ vr ] = false;
                }
                else if ( typeof v === 'object' && !is_array ( v ) )
                {
                    var lgth = false;
                    for ( i in v )
                    {
                        lgth = true;
                    }
                    this[ vr ] = lgth;
                }
                else
                {
                    this[ vr ] = !!v;
                }
                break;
            case 'integer':
                if ( typeof v === 'number' )
                {
                    this[ vr ] = parseInt ( v , 10 );
                }
                else if ( typeof v === 'string' )
                {
                    mtch = v.match ( /^([+\-]?)(\d+)/ );
                    if ( !mtch )
                    {
                        this[ vr ] = 0;
                    }
                    else
                    {
                        this[ vr ] = parseInt ( v , 10 );
                    }
                }
                else if ( v === true )
                {
                    this[ vr ] = 1;
                }
                else if ( v === false || v === null )
                {
                    this[ vr ] = 0;
                }
                else if ( is_array ( v ) && v.length === 0 )
                {
                    this[ vr ] = 0;
                }
                else if ( typeof v === 'object' )
                {
                    this[ vr ] = 1;
                }

                break;
            case 'float':
                if ( typeof v === 'string' )
                {
                    mtch = v.match ( /^([+\-]?)(\d+(\.\d+)?|\.\d+)([eE][+\-]?\d+)?/ );
                    if ( !mtch )
                    {
                        this[ vr ] = 0;
                    }
                    else
                    {
                        this[ vr ] = parseFloat ( v , 10 );
                    }
                }
                else if ( v === true )
                {
                    this[ vr ] = 1;
                }
                else if ( v === false || v === null )
                {
                    this[ vr ] = 0;
                }
                else if ( is_array ( v ) && v.length === 0 )
                {
                    this[ vr ] = 0;
                }
                else if ( typeof v === 'object' )
                {
                    this[ vr ] = 1;
                }
                break;
            case 'string':
                if ( v === null || v === false )
                {
                    this[ vr ] = '';
                }
                else if ( is_array ( v ) )
                {
                    this[ vr ] = 'Array';
                }
                else if ( typeof v === 'object' )
                {
                    this[ vr ] = 'Object';
                }
                else if ( v === true )
                {
                    this[ vr ] = '1';
                }
                else
                {
                    this[ vr ] += '';
                }
                break;
            case 'array':
                if ( v === null )
                {
                    this[ vr ] = [];
                }
                else if ( typeof v !== 'object' )
                {
                    this[ vr ] = [ v ];
                }
                break;
            case 'object':
                if ( v === null )
                {
                    this[ vr ] = {};
                }
                else if ( is_array ( v ) )
                {
                    for ( i = 0, obj = {} ; i < v.length ; i++ )
                    {
                        obj[ i ] = v;
                    }
                    this[ vr ] = obj;
                }
                else if ( typeof v !== 'object' )
                {
                    this[ vr ] = {
                        scalar : v
                    };
                }
                break;
            case 'null':
                delete this[ vr ];
                break;
        }
        return true;
    } catch ( e )
    {
        return false;
    }
}

function sha1_file ( str_filename )
{

    var buf = this.file_get_contents ( str_filename );

    return this.sha1 ( buf );
}

function sha1 ( str )
{

    var rotate_left = function ( n , s )
    {
        var t4 = (n << s) | (n >>> (32 - s));
        return t4;
    };

    /*var lsb_hex = function (val) {
     var str="";
     var i;
     var vh;
     var vl;

     for ( i=0; i<=6; i+=2 ) {
     vh = (val>>>(i*4+4))&0x0f;
     vl = (val>>>(i*4))&0x0f;
     str += vh.toString(16) + vl.toString(16);
     }
     return str;
     };*/

    var cvt_hex = function ( val )
    {
        var str = '';
        var i;
        var v;

        for ( i = 7 ; i >= 0 ; i-- )
        {
            v = (val >>> (i * 4)) & 0x0f;
            str += v.toString ( 16 );
        }
        return str;
    };

    var blockstart;
    var i , j;
    var W = new Array ( 80 );
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A , B , C , D , E;
    var temp;

    str = this.utf8_encode ( str );
    var str_len = str.length;

    var word_array = [];
    for ( i = 0 ; i < str_len - 3 ; i += 4 )
    {
        j = str.charCodeAt ( i ) << 24 | str.charCodeAt ( i + 1 ) << 16 | str.charCodeAt ( i + 2 ) << 8 | str.charCodeAt ( i + 3 );
        word_array.push ( j );
    }

    switch ( str_len % 4 )
    {
        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = str.charCodeAt ( str_len - 1 ) << 24 | 0x0800000;
            break;
        case 2:
            i = str.charCodeAt ( str_len - 2 ) << 24 | str.charCodeAt ( str_len - 1 ) << 16 | 0x08000;
            break;
        case 3:
            i = str.charCodeAt ( str_len - 3 ) << 24 | str.charCodeAt ( str_len - 2 ) << 16 | str.charCodeAt ( str_len - 1 ) << 8 | 0x80;
            break;
    }

    word_array.push ( i );

    while ((word_array.length % 16) != 14)
    {
        word_array.push ( 0 );
    }

    word_array.push ( str_len >>> 29 );
    word_array.push ( (str_len << 3) & 0x0ffffffff );

    for ( blockstart = 0 ; blockstart < word_array.length ; blockstart += 16 )
    {
        for ( i = 0 ; i < 16 ; i++ )
        {
            W[ i ] = word_array[ blockstart + i ];
        }
        for ( i = 16 ; i <= 79 ; i++ )
        {
            W[ i ] = rotate_left ( W[ i - 3 ] ^ W[ i - 8 ] ^ W[ i - 14 ] ^ W[ i - 16 ] , 1 );
        }

        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;

        for ( i = 0 ; i <= 19 ; i++ )
        {
            temp = (rotate_left ( A , 5 ) + ((B & C) | (~B & D)) + E + W[ i ] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left ( B , 30 );
            B = A;
            A = temp;
        }

        for ( i = 20 ; i <= 39 ; i++ )
        {
            temp = (rotate_left ( A , 5 ) + (B ^ C ^ D) + E + W[ i ] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left ( B , 30 );
            B = A;
            A = temp;
        }

        for ( i = 40 ; i <= 59 ; i++ )
        {
            temp = (rotate_left ( A , 5 ) + ((B & C) | (B & D) | (C & D)) + E + W[ i ] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left ( B , 30 );
            B = A;
            A = temp;
        }

        for ( i = 60 ; i <= 79 ; i++ )
        {
            temp = (rotate_left ( A , 5 ) + (B ^ C ^ D) + E + W[ i ] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left ( B , 30 );
            B = A;
            A = temp;
        }

        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }

    temp = cvt_hex ( H0 ) + cvt_hex ( H1 ) + cvt_hex ( H2 ) + cvt_hex ( H3 ) + cvt_hex ( H4 );
    return temp.toLowerCase ();
}

function shuffle ( inputArr )
{

    var valArr = [] , k = '' , i = 0 , strictForIn = false , populateArr = [];

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( inputArr[ k ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }
    valArr.sort ( function ()
                  {
                      return 0.5 - Math.random ();
                  } );

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ i ] = valArr[ i ];
    }

    return strictForIn || populateArr;
}

function similar_text ( first , second , percent )
{

    if ( first === null || second === null || typeof first === 'undefined' || typeof second === 'undefined' )
    {
        return 0;
    }

    first += '';
    second += '';

    var pos1 = 0 , pos2 = 0 , max = 0 , firstLength = first.length , secondLength = second.length , p , q , l , sum;

    max = 0;

    for ( p = 0 ; p < firstLength ; p++ )
    {
        for ( q = 0 ; q < secondLength ; q++ )
        {
            for ( l = 0 ; (p + l < firstLength) && (q + l < secondLength) && (first.charAt ( p + l ) === second.charAt ( q + l )) ; l++ )
            {
                ;
            }
            if ( l > max )
            {
                max = l;
                pos1 = p;
                pos2 = q;
            }
        }
    }

    sum = max;

    if ( sum )
    {
        if ( pos1 && pos2 )
        {
            sum += this.similar_text ( first.substr ( 0 , pos1 ) , second.substr ( 0 , pos2 ) );
        }

        if ( (pos1 + max < firstLength) && (pos2 + max < secondLength) )
        {
            sum += this.similar_text ( first.substr ( pos1 + max , firstLength - pos1 - max ) , second.substr ( pos2 + max , secondLength - pos2 - max ) );
        }
    }

    if ( !percent )
    {
        return sum;
    }
    else
    {
        return (sum * 200) / (firstLength + secondLength);
    }
}

function sinh ( arg )
{

    return (Math.exp ( arg ) - Math.exp ( -arg )) / 2;
}

function sin ( arg )
{

    return Math.sin ( arg );
}

function sizeof ( mixed_var , mode )
{

    return this.count ( mixed_var , mode );
}

function sort ( inputArr , sort_flags )
{

    var valArr = [] , keyArr = [] , k = '' , i = 0 , sorter = false , that = this , strictForIn = false , populateArr = [];

    switch ( sort_flags )
    {
        case 'SORT_STRING':

            sorter = function ( a , b )
            {
                return that.strnatcmp ( a , b );
            };
            break;
        case 'SORT_LOCALE_STRING':

            var loc = this.i18n_loc_get_default ();
            sorter = this.php_js.i18nLocales[ loc ].sorting;
            break;
        case 'SORT_NUMERIC':

            sorter = function ( a , b )
            {
                return (a - b);
            };
            break;
        case 'SORT_REGULAR':

        default:
            sorter = function ( a , b )
            {
                var aFloat = parseFloat ( a ) , bFloat = parseFloat ( b ) , aNumeric = aFloat + '' === a , bNumeric = bFloat + '' === b;
                if ( aNumeric && bNumeric )
                {
                    return aFloat > bFloat ? 1 : aFloat < bFloat ? -1 : 0;
                }
                else if ( aNumeric && !bNumeric )
                {
                    return 1;
                }
                else if ( !aNumeric && bNumeric )
                {
                    return -1;
                }
                return a > b ? 1 : a < b ? -1 : 0;
            };
            break;
    }

    try
    {
        this.php_js = this.php_js || {};
    } catch ( e )
    {
        this.php_js = {};
    }

    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( inputArr[ k ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }

    valArr.sort ( sorter );

    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ i ] = valArr[ i ];
    }
    return strictForIn || populateArr;
}

function soundex ( str )
{

    str = (str + '').toUpperCase ();
    if ( !str )
    {
        return '';
    }
    var sdx = [ 0 , 0 , 0 , 0 ] , m = {
        B : 1 , F : 1 , P : 1 , V : 1 , C : 2 , G : 2 , J : 2 , K : 2 , Q : 2 , S : 2 , X : 2 , Z : 2 , D : 3 , T : 3 , L : 4 , M : 5 , N : 5 , R : 6
    } , i   = 0 , j , s = 0 , c , p;

    while ((c = str.charAt ( i++ )) && s < 4)
    {
        if ( j = m[ c ] )
        {
            if ( j !== p )
            {
                sdx[ s++ ] = p = j;
            }
        }
        else
        {
            s += i === 1;
            p = 0;
        }
    }

    sdx[ 0 ] = str.charAt ( 0 );
    return sdx.join ( '' );
}

function split ( delimiter , string )
{

    return this.explode ( delimiter , string );
}

function sprintf ()
{

    var regex = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
    var a = arguments;
    var i = 0;
    var format = a[ i++ ];

    var pad = function ( str , len , chr , leftJustify )
    {
        if ( !chr )
        {
            chr = ' ';
        }
        var padding = (str.length >= len) ? '' : new Array ( 1 + len - str.length >>> 0 ).join ( chr );
        return leftJustify ? str + padding : padding + str;
    };

    var justify = function ( value , prefix , leftJustify , minWidth , zeroPad , customPadChar )
    {
        var diff = minWidth - value.length;
        if ( diff > 0 )
        {
            if ( leftJustify || !zeroPad )
            {
                value = pad ( value , minWidth , customPadChar , leftJustify );
            }
            else
            {
                value = value.slice ( 0 , prefix.length ) + pad ( '' , diff , '0' , true ) + value.slice ( prefix.length );
            }
        }
        return value;
    };

    var formatBaseX = function ( value , base , prefix , leftJustify , minWidth , precision , zeroPad )
    {

        var number = value >>> 0;
        prefix = prefix && number && {
            '2' : '0b' , '8' : '0' , '16' : '0x'
        }[ base ] || '';
        value = prefix + pad ( number.toString ( base ) , precision || 0 , '0' , false );
        return justify ( value , prefix , leftJustify , minWidth , zeroPad );
    };

    var formatString = function ( value , leftJustify , minWidth , precision , zeroPad , customPadChar )
    {
        if ( precision != null )
        {
            value = value.slice ( 0 , precision );
        }
        return justify ( value , '' , leftJustify , minWidth , zeroPad , customPadChar );
    };

    var doFormat = function ( substring , valueIndex , flags , minWidth , _ , precision , type )
    {
        var number , prefix , method , textTransform , value;

        if ( substring === '%%' )
        {
            return '%';
        }


        var leftJustify = false;
        var positivePrefix = '';
        var zeroPad = false;
        var prefixBaseX = false;
        var customPadChar = ' ';
        var flagsl = flags.length;
        for ( var j = 0 ; flags && j < flagsl ; j++ )
        {
            switch ( flags.charAt ( j ) )
            {
                case ' ':
                    positivePrefix = ' ';
                    break;
                case '+':
                    positivePrefix = '+';
                    break;
                case '-':
                    leftJustify = true;
                    break;
                case "'":
                    customPadChar = flags.charAt ( j + 1 );
                    break;
                case '0':
                    zeroPad = true;
                    customPadChar = '0';
                    break;
                case '#':
                    prefixBaseX = true;
                    break;
            }
        }



        if ( !minWidth )
        {
            minWidth = 0;
        }
        else if ( minWidth === '*' )
        {
            minWidth = +a[ i++ ];
        }
        else if ( minWidth.charAt ( 0 ) == '*' )
        {
            minWidth = +a[ minWidth.slice ( 1 , -1 ) ];
        }
        else
        {
            minWidth = +minWidth;
        }


        if ( minWidth < 0 )
        {
            minWidth = -minWidth;
            leftJustify = true;
        }

        if ( !isFinite ( minWidth ) )
        {
            throw new Error ( 'sprintf: (minimum-)width must be finite' );
        }

        if ( !precision )
        {
            precision = 'fFeE'.indexOf ( type ) > -1 ? 6 : (type === 'd') ? 0 : undefined;
        }
        else if ( precision === '*' )
        {
            precision = +a[ i++ ];
        }
        else if ( precision.charAt ( 0 ) == '*' )
        {
            precision = +a[ precision.slice ( 1 , -1 ) ];
        }
        else
        {
            precision = +precision;
        }


        value = valueIndex ? a[ valueIndex.slice ( 0 , -1 ) ] : a[ i++ ];

        switch ( type )
        {
            case 's':
                return formatString ( String ( value ) , leftJustify , minWidth , precision , zeroPad , customPadChar );
            case 'c':
                return formatString ( String.fromCharCode ( +value ) , leftJustify , minWidth , precision , zeroPad );
            case 'b':
                return formatBaseX ( value , 2 , prefixBaseX , leftJustify , minWidth , precision , zeroPad );
            case 'o':
                return formatBaseX ( value , 8 , prefixBaseX , leftJustify , minWidth , precision , zeroPad );
            case 'x':
                return formatBaseX ( value , 16 , prefixBaseX , leftJustify , minWidth , precision , zeroPad );
            case 'X':
                return formatBaseX ( value , 16 , prefixBaseX , leftJustify , minWidth , precision , zeroPad ).toUpperCase ();
            case 'u':
                return formatBaseX ( value , 10 , prefixBaseX , leftJustify , minWidth , precision , zeroPad );
            case 'i':
            case 'd':
                number = +value || 0;
                number = Math.round ( number - number % 1 );
                prefix = number < 0 ? '-' : positivePrefix;
                value = prefix + pad ( String ( Math.abs ( number ) ) , precision , '0' , false );
                return justify ( value , prefix , leftJustify , minWidth , zeroPad );
            case 'e':
            case 'E':
            case 'f':
            case 'F':
            case 'g':
            case 'G':
                number = +value;
                prefix = number < 0 ? '-' : positivePrefix;
                method = [ 'toExponential' , 'toFixed' , 'toPrecision' ][ 'efg'.indexOf ( type.toLowerCase () ) ];
                textTransform = [ 'toString' , 'toUpperCase' ][ 'eEfFgG'.indexOf ( type ) % 2 ];
                value = prefix + Math.abs ( number )[ method ] ( precision );
                return justify ( value , prefix , leftJustify , minWidth , zeroPad )[ textTransform ] ();
            default:
                return substring;
        }
    };

    return format.replace ( regex , doFormat );
}

function sql_regcase ( str )
{

    this.setlocale ( 'LC_ALL' , 0 );
    var i = 0 , upper = '' , lower = '' , pos = 0 , retStr = '';

    upper = this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.upper;
    lower = this.php_js.locales[ this.php_js.localeCategories.LC_CTYPE ].LC_CTYPE.lower;

    for ( i = 0 ; i < str.length ; i++ )
    {
        if ( ((pos = upper.indexOf ( str.charAt ( i ) )) !== -1) || ((pos = lower.indexOf ( str.charAt ( i ) )) !== -1) )
        {
            retStr += '[' + upper.charAt ( pos ) + lower.charAt ( pos ) + ']';
        }
        else
        {
            retStr += str.charAt ( i );
        }
    }
    return retStr;
}

function sqrt ( arg )
{

    return Math.sqrt ( arg );
}

function sscanf ( str , format )
{

    var retArr = [] , num = 0 , _NWS = /\S/ , args = arguments , that = this , digit;

    var _setExtraConversionSpecs = function ( offset )
    {



//var matches = format.match(/%[+-]?([ 0]|'.)?-?\d*(\.\d+)?[bcdeufFosxX]/g);
        var matches = format.slice ( offset ).match ( /%[cdeEufgosxX]/g );

        if ( matches )
        {
            var lgth = matches.length;
            while (lgth--)
            {
                retArr.push ( null );
            }
        }
        return _finish ();
    };

    var _finish = function ()
    {
        if ( args.length === 2 )
        {
            return retArr;
        }
        for ( var i = 0 ; i < retArr.length ; ++i )
        {
            that.window[ args[ i + 2 ] ] = retArr[ i ];
        }
        return i;
    };

    var _addNext = function ( j , regex , cb )
    {
        if ( assign )
        {
            var remaining = str.slice ( j );
            var check = width ? remaining.substr ( 0 , width ) : remaining;
            var match = regex.exec ( check );
            var testNull = retArr[ digit !== undefined ? digit : retArr.length ] = match ? (cb ? cb.apply ( null , match ) : match[ 0 ]) : null;
            if ( testNull === null )
            {
                throw 'No match in string';
            }
            return j + match[ 0 ].length;
        }
        return j;
    };

    if ( arguments.length < 2 )
    {
        throw 'Not enough arguments passed to sscanf';
    }

    for ( var i = 0 , j = 0 ; i < format.length ; i++ )
    {

        var width = 0 , assign = true;

        if ( format.charAt ( i ) === '%' )
        {
            if ( format.charAt ( i + 1 ) === '%' )
            {
                if ( str.charAt ( j ) === '%' )
                {
                    ++i, ++j;
                    continue;
                }

                return _setExtraConversionSpecs ( i + 2 );
            }



            var prePattern = new RegExp ( '^(?:(\\d+)\\$)?(\\*)?(\\d*)([hlL]?)' , 'g' );

            var preConvs = prePattern.exec ( format.slice ( i + 1 ) );

            var tmpDigit = digit;
            if ( tmpDigit && preConvs[ 1 ] === undefined )
            {
                throw 'All groups in sscanf() must be expressed as numeric if any have already been used';
            }
            digit = preConvs[ 1 ] ? parseInt ( preConvs[ 1 ] , 10 ) - 1 : undefined;

            assign = !preConvs[ 2 ];
            width = parseInt ( preConvs[ 3 ] , 10 );
            var sizeCode = preConvs[ 4 ];
            i += prePattern.lastIndex;


            if ( sizeCode )
            {
                switch ( sizeCode )
                {
                    case 'h':

                    case 'l':


                    case 'L':

                        break;
                    default:
                        throw 'Unexpected size specifier in sscanf()!';
                        break;
                }
            }

            try
            {
                switch ( format.charAt ( i + 1 ) )
                {




                    case 'F':



                        break;
                    case 'g':


                        break;
                    case 'G':


                        break;
                    case 'b':


                        break;
                    case 'i':

                        j = _addNext ( j , /([+-])?(?:(?:0x([\da-fA-F]+))|(?:0([0-7]+))|(\d+))/ , function ( num , sign , hex , oct , dec )
                        {
                            return hex ? parseInt ( num , 16 ) : oct ? parseInt ( num , 8 ) : parseInt ( num , 10 );
                        } );
                        break;
                    case 'n':

                        retArr[ digit !== undefined ? digit : retArr.length - 1 ] = j;
                        break;

                    case 'c':


                        j = _addNext ( j , new RegExp ( '.{1,' + (width || 1) + '}' ) );
                        break;
                    case 'D':

                    case 'd':

                        j = _addNext ( j , /([+-])?(?:0*)(\d+)/ , function ( num , sign , dec )
                        {

                            var decInt = parseInt ( (sign || '') + dec , 10 );
                            if ( decInt < 0 )
                            {
                                return decInt < -2147483648 ? -2147483648 : decInt;
                            }
                            else
                            {
                                return decInt < 2147483647 ? decInt : 2147483647;
                            }
                        } );
                        break;
                    case 'f':

                    case 'E':

                    case 'e':
                        j = _addNext ( j , /([+-])?(?:0*)(\d*\.?\d*(?:[eE]?\d+)?)/ , function ( num , sign , dec )
                        {
                            if ( dec === '.' )
                            {
                                return null;
                            }
                            return parseFloat ( (sign || '') + dec );
                        } );
                        break;
                    case 'u':


                        j = _addNext ( j , /([+-])?(?:0*)(\d+)/ , function ( num , sign , dec )
                        {

                            var decInt = parseInt ( dec , 10 );
                            if ( sign === '-' )
                            {
                                return 4294967296 - decInt;
                            }
                            else
                            {
                                return decInt < 4294967295 ? decInt : 4294967295;
                            }
                        } );
                        break;
                    case 'o':

                        j = _addNext ( j , /([+-])?(?:0([0-7]+))/ , function ( num , sign , oct )
                        {
                            return parseInt ( num , 8 );
                        } );
                        break;
                    case 's':

                        j = _addNext ( j , /\S+/ );
                        break;
                    case 'X':

                    case 'x':


                        j = _addNext ( j , /([+-])?(?:(?:0x)?([\da-fA-F]+))/ , function ( num , sign , hex )
                        {
                            return parseInt ( num , 16 );
                        } );
                        break;
                    case '':

                        throw 'Missing character after percent mark in sscanf() format argument';
                    default:
                        throw 'Unrecognized character after percent mark in sscanf() format argument';
                }
            } catch ( e )
            {
                if ( e === 'No match in string' )
                {
                    return _setExtraConversionSpecs ( i + 2 );
                }
            }
            ++i;
        }
        else if ( format.charAt ( i ) !== str.charAt ( j ) )
        {

            _NWS.lastIndex = 0;
            if ( (_NWS).test ( str.charAt ( j ) ) || str.charAt ( j ) === '' )
            {
                return _setExtraConversionSpecs ( i + 1 );
            }
            else
            {

                str = str.slice ( 0 , j ) + str.slice ( j + 1 );
                i--;
            }
        }
        else
        {
            j++;
        }
    }

    return _finish ();
}

function strcasecmp ( f_string1 , f_string2 )
{

    var string1 = (f_string1 + '').toLowerCase ();
    var string2 = (f_string2 + '').toLowerCase ();

    if ( string1 > string2 )
    {
        return 1;
    }
    else if ( string1 == string2 )
    {
        return 0;
    }

    return -1;
}

function strchr ( haystack , needle , bool )
{

    return this.strstr ( haystack , needle , bool );
}

function strcmp ( str1 , str2 )
{

    return ((str1 == str2) ? 0 : ((str1 > str2) ? 1 : -1));
}

function strcoll ( str1 , str2 )
{

    this.setlocale ( 'LC_ALL' , 0 );
    var cmp = this.php_js.locales[ this.php_js.localeCategories.LC_COLLATE ].LC_COLLATE;
    return cmp ( str1 , str2 );
}

function strcspn ( str , mask , start , length )
{

    start = start ? start : 0;
    var count = (length && ((start + length) < str.length)) ? start + length : str.length;
    strct: for ( var i = start , lgth = 0 ; i < count ; i++ )
    {
        for ( var j = 0 ; j < mask.length ; j++ )
        {
            if ( str.charAt ( i ).indexOf ( mask[ j ] ) !== -1 )
            {
                continue strct;
            }
        }
        ++lgth;
    }

    return lgth;
}

function strftime ( fmt , timestamp )
{

    this.php_js = this.php_js || {};
    this.setlocale ( 'LC_ALL' , 0 );
    var phpjs = this.php_js;

    var _xPad = function ( x , pad , r )
    {
        if ( typeof r === 'undefined' )
        {
            r = 10;
        }
        for ( ; parseInt ( x , 10 ) < r && r > 1 ; r /= 10 )
        {
            x = pad.toString () + x;
        }
        return x.toString ();
    };

    var locale = phpjs.localeCategories.LC_TIME;
    var locales = phpjs.locales;
    var lc_time = locales[ locale ].LC_TIME;

    var _formats = {
        a       : function ( d )
        {
            return lc_time.a[ d.getDay () ];
        } , A   : function ( d )
        {
            return lc_time.A[ d.getDay () ];
        } , b   : function ( d )
        {
            return lc_time.b[ d.getMonth () ];
        } , B   : function ( d )
        {
            return lc_time.B[ d.getMonth () ];
        } , C   : function ( d )
        {
            return _xPad ( parseInt ( d.getFullYear () / 100 , 10 ) , 0 );
        } , d   : [ 'getDate' , '0' ] , e : [ 'getDate' , ' ' ] , g : function ( d )
        {
            return _xPad ( parseInt ( this.G ( d ) / 100 , 10 ) , 0 );
        } , G   : function ( d )
        {
            var y = d.getFullYear ();
            var V = parseInt ( _formats.V ( d ) , 10 );
            var W = parseInt ( _formats.W ( d ) , 10 );

            if ( W > V )
            {
                y++;
            }
            else if ( W === 0 && V >= 52 )
            {
                y--;
            }

            return y;
        } , H   : [ 'getHours' , '0' ] , I : function ( d )
        {
            var I = d.getHours () % 12;
            return _xPad ( I === 0 ? 12 : I , 0 );
        } , j   : function ( d )
        {
            var ms = d - new Date ( '' + d.getFullYear () + '/1/1 GMT' );
            ms += d.getTimezoneOffset () * 60000;

            var doy = parseInt ( ms / 60000 / 60 / 24 , 10 ) + 1;
            return _xPad ( doy , 0 , 100 );
        } , k   : [ 'getHours' , '0' ] ,
        l       : function ( d )
        {
            var l = d.getHours () % 12;
            return _xPad ( l === 0 ? 12 : l , ' ' );
        } , m   : function ( d )
        {
            return _xPad ( d.getMonth () + 1 , 0 );
        } , M   : [ 'getMinutes' , '0' ] , p : function ( d )
        {
            return lc_time.p[ d.getHours () >= 12 ? 1 : 0 ];
        } , P   : function ( d )
        {
            return lc_time.P[ d.getHours () >= 12 ? 1 : 0 ];
        } , s   : function ( d )
        {
            return Date.parse ( d ) / 1000;
        } , S   : [ 'getSeconds' , '0' ] , u : function ( d )
        {
            var dow = d.getDay ();
            return ((dow === 0) ? 7 : dow);
        } , U   : function ( d )
        {
            var doy = parseInt ( _formats.j ( d ) , 10 );
            var rdow = 6 - d.getDay ();
            var woy = parseInt ( (doy + rdow) / 7 , 10 );
            return _xPad ( woy , 0 );
        } , V   : function ( d )
        {
            var woy = parseInt ( _formats.W ( d ) , 10 );
            var dow1_1 = (new Date ( '' + d.getFullYear () + '/1/1' )).getDay ();





            var idow = woy + (dow1_1 > 4 || dow1_1 <= 1 ? 0 : 1);
            if ( idow === 53 && (new Date ( '' + d.getFullYear () + '/12/31' )).getDay () < 4 )
            {
                idow = 1;
            }
            else if ( idow === 0 )
            {
                idow = _formats.V ( new Date ( '' + (d.getFullYear () - 1) + '/12/31' ) );
            }
            return _xPad ( idow , 0 );
        } , w   : 'getDay' , W : function ( d )
        {
            var doy = parseInt ( _formats.j ( d ) , 10 );
            var rdow = 7 - _formats.u ( d );
            var woy = parseInt ( (doy + rdow) / 7 , 10 );
            return _xPad ( woy , 0 , 10 );
        } , y   : function ( d )
        {
            return _xPad ( d.getFullYear () % 100 , 0 );
        } , Y   : 'getFullYear' , z : function ( d )
        {
            var o = d.getTimezoneOffset ();
            var H = _xPad ( parseInt ( Math.abs ( o / 60 ) , 10 ) , 0 );
            var M = _xPad ( o % 60 , 0 );
            return (o > 0 ? '-' : '+') + H + M;
        } , Z   : function ( d )
        {
            return d.toString ().replace ( /^.*\(([^)]+)\)$/ , '$1' );
            /*

             var tz = d.toString().replace(/^.*:\d\d( GMT[+-]\d+)? \(?([A-Za-z ]+)\)?\d*$/, '$2').replace(/[a-z ]/g, '');
             if(tz.length > 4) {
             tz = Dt.formats.z(d);
             }
             return tz;
             */
        } , '%' : function ( d )
        {
            return '%';
        }
    };
    /* Fix: Locale alternatives are supported though not documented in PHP; see http://linux.die.net/man/3/strptime
     Ec
     EC
     Ex
     EX
     Ey
     EY
     Od or Oe
     OH
     OI
     Om
     OM
     OS
     OU
     Ow
     OW
     Oy
     */

    var _date = ((typeof timestamp === 'undefined') ? new Date () :
                 (typeof timestamp === 'object') ? new Date ( timestamp ) :
                 new Date ( timestamp * 1000 )
    );

    var _aggregates = {
        c : 'locale' , D : '%m/%d/%y' , F : '%y-%m-%d' , h : '%b' , n : '\n' , r : 'locale' , R : '%H:%M' , t : '\t' , T : '%H:%M:%S' , x : 'locale' , X : 'locale'
    };

    while (fmt.match ( /%[cDFhnrRtTxX]/ ))
    {
        fmt = fmt.replace ( /%([cDFhnrRtTxX])/g , function ( m0 , m1 )
        {
            var f = _aggregates[ m1 ];
            return (f === 'locale' ? lc_time[ m1 ] : f);
        } );
    }

    var str = fmt.replace ( /%([aAbBCdegGHIjklmMpPsSuUVwWyYzZ%])/g , function ( m0 , m1 )
    {
        var f = _formats[ m1 ];
        if ( typeof f === 'string' )
        {
            return _date[ f ] ();
        }
        else if ( typeof f === 'function' )
        {
            return f ( _date );
        }
        else if ( typeof f === 'object' && typeof f[ 0 ] === 'string' )
        {
            return _xPad ( _date[ f[ 0 ] ] () , f[ 1 ] );
        }
        else
        {
            return m1;
        }
    } );
    return str;
}

function str_getcsv ( input , delimiter , enclosure , escape )
{

    /*
     str_getcsv('"row2""cell1",row2cell2,row2cell3', null, null, '"');
     ['row2"cell1', 'row2cell2', 'row2cell3']

     str_getcsv('row1cell1,"row1,cell2",row1cell3', null, null, '"');
     ['row1cell1', 'row1,cell2', 'row1cell3']

     str_getcsv('"row2""cell1",row2cell2,"row2""""cell3"');
     ['row2"cell1', 'row2cell2', 'row2""cell3']

     str_getcsv('row1cell1,"row1,cell2","row1"",""cell3"', null, null, '"');
     ['row1cell1', 'row1,cell2', 'row1","cell3'];

     Should also test newlines within
     */
    var i , inpLen , output = [];
    var backwards = function ( str )
    {
//an escaped enclosure even if followed by the delimiter and another enclosure mark)
        return str.split ( '' ).reverse ().join ( '' );
    };
    var pq = function ( str )
    {
        return String ( str ).replace ( /([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<\>\|\:])/g , '\\$1' );
    };

    delimiter = delimiter || ',';
    enclosure = enclosure || '"';
    escape = escape || '\\';
    var pqEnc = pq ( enclosure );
    var pqEsc = pq ( escape );

    input = input.replace ( new RegExp ( '^\\s*' + pqEnc ) , '' ).replace ( new RegExp ( pqEnc + '\\s*$' ) , '' );

    input = backwards ( input ).split ( new RegExp ( pqEnc + '\\s*' + pq ( delimiter ) + '\\s*' + pqEnc + '(?!' + pqEsc + ')' , 'g' ) ).reverse ();

    for ( i = 0, inpLen = input.length ; i < inpLen ; i++ )
    {
        output.push ( backwards ( input[ i ] ).replace ( new RegExp ( pqEsc + pqEnc , 'g' ) , enclosure ) );
    }

    return output;
}

function stripos ( f_haystack , f_needle , f_offset )
{

    var haystack = (f_haystack + '').toLowerCase ();
    var needle = (f_needle + '').toLowerCase ();
    var index = 0;

    if ( (index = haystack.indexOf ( needle , f_offset )) !== -1 )
    {
        return index;
    }
    return false;
}

function stripslashes ( str )
{

    return (str + '').replace ( /\\(.?)/g , function ( s , n1 )
    {
        switch ( n1 )
        {
            case '\\':
                return '\\';
            case '0':
                return '\u0000';
            case '':
                return '';
            default:
                return n1;
        }
    } );
}

function strip_tags ( input , allowed )
{

    allowed = (((allowed || '') + '').toLowerCase ().match ( /<[a-z][a-z0-9]*>/g ) || []).join ( '' );
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi , commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return input.replace ( commentsAndPhpTags , '' ).replace ( tags , function ( $0 , $1 )
    {
        return allowed.indexOf ( '<' + $1.toLowerCase () + '>' ) > -1 ? $0 : '';
    } );
}

function str_ireplace ( search , replace , subject )
{

    var i , k = '';
    var searchl = 0;
    var reg;

    var escapeRegex = function ( s )
    {
        return s.replace ( /([\\\^\$*+\[\]?{}.=!:(|)])/g , '\\$1' );
    };

    search += '';
    searchl = search.length;
    if ( Object.prototype.toString.call ( replace ) !== '[object Array]' )
    {
        replace = [ replace ];
        if ( Object.prototype.toString.call ( search ) === '[object Array]' )
        {


            while (searchl > replace.length)
            {
                replace[ replace.length ] = replace[ 0 ];
            }
        }
    }

    if ( Object.prototype.toString.call ( search ) !== '[object Array]' )
    {
        search = [ search ];
    }
    while (search.length > replace.length)
    {


        replace[ replace.length ] = '';
    }

    if ( Object.prototype.toString.call ( subject ) === '[object Array]' )
    {


        for ( k in subject )
        {
            if ( subject.hasOwnProperty ( k ) )
            {
                subject[ k ] = str_ireplace ( search , replace , subject[ k ] );
            }
        }
        return subject;
    }

    searchl = search.length;
    for ( i = 0 ; i < searchl ; i++ )
    {
        reg = new RegExp ( escapeRegex ( search[ i ] ) , 'gi' );
        subject = subject.replace ( reg , replace[ i ] );
    }

    return subject;
}

function stristr ( haystack , needle , bool )
{

    var pos = 0;

    haystack += '';
    pos = haystack.toLowerCase ().indexOf ( (needle + '').toLowerCase () );
    if ( pos == -1 )
    {
        return false;
    }
    else
    {
        if ( bool )
        {
            return haystack.substr ( 0 , pos );
        }
        else
        {
            return haystack.slice ( pos );
        }
    }
}

function strlen ( string )
{

    var str = string + '';
    var i = 0 , chr = '' , lgth = 0;

    if ( !this.php_js || !this.php_js.ini || !this.php_js.ini[ 'unicode.semantics' ] || this.php_js.ini[ 'unicode.semantics' ].local_value.toLowerCase () !== 'on' )
    {
        return string.length;
    }

    var getWholeChar = function ( str , i )
    {
        var code = str.charCodeAt ( i );
        var next = '' , prev = '';
        if ( 0xD800 <= code && code <= 0xDBFF )
        {
            if ( str.length <= (i + 1) )
            {
                throw 'High surrogate without following low surrogate';
            }
            next = str.charCodeAt ( i + 1 );
            if ( 0xDC00 > next || next > 0xDFFF )
            {
                throw 'High surrogate without following low surrogate';
            }
            return str.charAt ( i ) + str.charAt ( i + 1 );
        }
        else if ( 0xDC00 <= code && code <= 0xDFFF )
        {
            if ( i === 0 )
            {
                throw 'Low surrogate without preceding high surrogate';
            }
            prev = str.charCodeAt ( i - 1 );
            if ( 0xD800 > prev || prev > 0xDBFF )
            {//(could change last hex to 0xDB7F to treat high private surrogates as single characters)
                throw 'Low surrogate without preceding high surrogate';
            }
            return false;
        }
        return str.charAt ( i );
    };

    for ( i = 0, lgth = 0 ; i < str.length ; i++ )
    {
        if ( (chr = getWholeChar ( str , i )) === false )
        {
            continue;
        }
        lgth++;
    }
    return lgth;
}

function strnatcasecmp ( str1 , str2 )
{

    var a = (str1 + '').toLowerCase ();
    var b = (str2 + '').toLowerCase ();

    var isWhitespaceChar = function ( a )
    {
        return a.charCodeAt ( 0 ) <= 32;
    };

    var isDigitChar = function ( a )
    {
        var charCode = a.charCodeAt ( 0 );
        return (charCode >= 48 && charCode <= 57);
    };

    var compareRight = function ( a , b )
    {
        var bias = 0;
        var ia = 0;
        var ib = 0;

        var ca;
        var cb;





        for ( var cnt = 0 ; true ; ia++, ib++ )
        {
            ca = a.charAt ( ia );
            cb = b.charAt ( ib );

            if ( !isDigitChar ( ca ) && !isDigitChar ( cb ) )
            {
                return bias;
            }
            else if ( !isDigitChar ( ca ) )
            {
                return -1;
            }
            else if ( !isDigitChar ( cb ) )
            {
                return 1;
            }
            else if ( ca < cb )
            {
                if ( bias === 0 )
                {
                    bias = -1;
                }
            }
            else if ( ca > cb )
            {
                if ( bias === 0 )
                {
                    bias = 1;
                }
            }
            else if ( ca === '0' && cb === '0' )
            {
                return bias;
            }
        }
    };

    var ia = 0 , ib = 0;
    var nza = 0 , nzb = 0;
    var ca , cb;
    var result;

    while (true)
    {

        nza = nzb = 0;

        ca = a.charAt ( ia );
        cb = b.charAt ( ib );


        while (isWhitespaceChar ( ca ) || ca === '0')
        {
            if ( ca === '0' )
            {
                nza++;
            }
            else
            {

                nza = 0;
            }

            ca = a.charAt ( ++ia );
        }

        while (isWhitespaceChar ( cb ) || cb === '0')
        {
            if ( cb === '0' )
            {
                nzb++;
            }
            else
            {

                nzb = 0;
            }

            cb = b.charAt ( ++ib );
        }


        if ( isDigitChar ( ca ) && isDigitChar ( cb ) )
        {
            if ( (result = compareRight ( a.substring ( ia ) , b.substring ( ib ) )) !== 0 )
            {
                return result;
            }
        }

        if ( ca === '0' && cb === '0' )
        {


            return nza - nzb;
        }

        if ( ca < cb )
        {
            return -1;
        }
        else if ( ca > cb )
        {
            return +1;
        }


        if ( ia >= a.length && ib >= b.length )
        {
            return 0;
        }

        ++ia;
        ++ib;
    }
}

function strnatcmp ( f_string1 , f_string2 , f_version )
{

    var i = 0;

    if ( f_version == undefined )
    {
        f_version = false;
    }

    var __strnatcmp_split = function ( f_string )
    {
        var result = [];
        var buffer = '';
        var chr = '';
        var i = 0 , f_stringl = 0;

        var text = true;

        f_stringl = f_string.length;
        for ( i = 0 ; i < f_stringl ; i++ )
        {
            chr = f_string.substring ( i , i + 1 );
            if ( chr.match ( /\d/ ) )
            {
                if ( text )
                {
                    if ( buffer.length > 0 )
                    {
                        result[ result.length ] = buffer;
                        buffer = '';
                    }

                    text = false;
                }
                buffer += chr;
            }
            else if ( (text == false) && (chr === '.') && (i < (f_string.length - 1)) && (f_string.substring ( i + 1 , i + 2 ).match ( /\d/ )) )
            {
                result[ result.length ] = buffer;
                buffer = '';
            }
            else
            {
                if ( text == false )
                {
                    if ( buffer.length > 0 )
                    {
                        result[ result.length ] = parseInt ( buffer , 10 );
                        buffer = '';
                    }
                    text = true;
                }
                buffer += chr;
            }
        }

        if ( buffer.length > 0 )
        {
            if ( text )
            {
                result[ result.length ] = buffer;
            }
            else
            {
                result[ result.length ] = parseInt ( buffer , 10 );
            }
        }

        return result;
    };

    var array1 = __strnatcmp_split ( f_string1 + '' );
    var array2 = __strnatcmp_split ( f_string2 + '' );

    var len = array1.length;
    var text = true;

    var result = -1;
    var r = 0;

    if ( len > array2.length )
    {
        len = array2.length;
        result = 1;
    }

    for ( i = 0 ; i < len ; i++ )
    {
        if ( isNaN ( array1[ i ] ) )
        {
            if ( isNaN ( array2[ i ] ) )
            {
                text = true;

                if ( (r = this.strcmp ( array1[ i ] , array2[ i ] )) != 0 )
                {
                    return r;
                }
            }
            else if ( text )
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
        else if ( isNaN ( array2[ i ] ) )
        {
            if ( text )
            {
                return -1;
            }
            else
            {
                return 1;
            }
        }
        else
        {
            if ( text || f_version )
            {
                if ( (r = (array1[ i ] - array2[ i ])) != 0 )
                {
                    return r;
                }
            }
            else
            {
                if ( (r = this.strcmp ( array1[ i ].toString () , array2[ i ].toString () )) != 0 )
                {
                    return r;
                }
            }

            text = false;
        }
    }

    return result;
}

function strncasecmp ( argStr1 , argStr2 , len )
{

    var diff , i = 0;
    var str1 = (argStr1 + '').toLowerCase ().substr ( 0 , len );
    var str2 = (argStr2 + '').toLowerCase ().substr ( 0 , len );

    if ( str1.length !== str2.length )
    {
        if ( str1.length < str2.length )
        {
            len = str1.length;
            if ( str2.substr ( 0 , str1.length ) == str1 )
            {
                return str1.length - str2.length;
            }
        }
        else
        {
            len = str2.length;

            if ( str1.substr ( 0 , str2.length ) == str2 )
            {
                return str1.length - str2.length;
            }
        }
    }
    else
    {

        len = str1.length;
    }

    for ( diff = 0, i = 0 ; i < len ; i++ )
    {
        diff = str1.charCodeAt ( i ) - str2.charCodeAt ( i );
        if ( diff !== 0 )
        {
            return diff;
        }
    }

    return 0;
}

function strncmp ( str1 , str2 , lgth )
{

    var s1 = (str1 + '').substr ( 0 , lgth );
    var s2 = (str2 + '').substr ( 0 , lgth );

    return ((s1 == s2) ? 0 : ((s1 > s2) ? 1 : -1));
}

function str_pad ( input , pad_length , pad_string , pad_type )
{

    var half = '' , pad_to_go;

    var str_pad_repeater = function ( s , len )
    {
        var collect = '' , i;

        while (collect.length < len)
        {
            collect += s;
        }
        collect = collect.substr ( 0 , len );

        return collect;
    };

    input += '';
    pad_string = pad_string !== undefined ? pad_string : ' ';

    if ( pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH' )
    {
        pad_type = 'STR_PAD_RIGHT';
    }
    if ( (pad_to_go = pad_length - input.length) > 0 )
    {
        if ( pad_type === 'STR_PAD_LEFT' )
        {
            input = str_pad_repeater ( pad_string , pad_to_go ) + input;
        }
        else if ( pad_type === 'STR_PAD_RIGHT' )
        {
            input = input + str_pad_repeater ( pad_string , pad_to_go );
        }
        else if ( pad_type === 'STR_PAD_BOTH' )
        {
            half = str_pad_repeater ( pad_string , Math.ceil ( pad_to_go / 2 ) );
            input = half + input + half;
            input = input.substr ( 0 , pad_length );
        }
    }

    return input;
}

function strpbrk ( haystack , char_list )
{

    for ( var i = 0 , len = haystack.length ; i < len ; ++i )
    {
        if ( char_list.indexOf ( haystack.charAt ( i ) ) >= 0 )
        {
            return haystack.slice ( i );
        }
    }
    return false;
}

function strpos ( haystack , needle , offset )
{

    var i = (haystack + '').indexOf ( needle , (offset || 0) );
    return i === -1 ? false : i;
}

function strptime ( dateStr , format )
{



    var retObj = {
        tm_sec : 0 , tm_min : 0 , tm_hour : 0 , tm_mday : 0 , tm_mon : 0 , tm_year : 0 , tm_wday : 0 , tm_yday : 0 , unparsed : ''
    } , i      = 0 , that = this , amPmOffset = 0 , prevHour = false , _reset = function ( dateObj , realMday )
    {


        var jan1 , o = retObj , d = dateObj;
        o.tm_sec = d.getUTCSeconds ();
        o.tm_min = d.getUTCMinutes ();
        o.tm_hour = d.getUTCHours ();
        o.tm_mday = realMday === 0 ? realMday : d.getUTCDate ();
        o.tm_mon = d.getUTCMonth ();
        o.tm_year = d.getUTCFullYear () - 1900;
        o.tm_wday = realMday === 0 ? (d.getUTCDay () > 0 ? d.getUTCDay () - 1 : 6) : d.getUTCDay ();
        jan1 = new Date ( Date.UTC ( d.getUTCFullYear () , 0 , 1 ) );
        o.tm_yday = Math.ceil ( (d - jan1) / (1000 * 60 * 60 * 24) );
    } , _date  = function ()
    {
        var o = retObj;

        return _reset ( new Date ( Date.UTC ( o.tm_year + 1900 , o.tm_mon , o.tm_mday || 1 , o.tm_hour , o.tm_min , o.tm_sec ) ) , o.tm_mday );
    };

    var _NWS = /\S/ , _WS = /\s/;

    var _aggregates = {
        c : 'locale' , D : '%m/%d/%y' , F : '%y-%m-%d' , r : 'locale' , R : '%H:%M' , T : '%H:%M:%S' , x : 'locale' , X : 'locale'
    };

    /* Fix: Locale alternatives are supported though not documented in PHP; see http://linux.die.net/man/3/strptime
     Ec
     EC
     Ex
     EX
     Ey
     EY
     Od or Oe
     OH
     OI
     Om
     OM
     OS
     OU
     Ow
     OW
     Oy
     */
    var _preg_quote = function ( str )
    {
        return (str + '').replace ( /([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g , '\\$1' );
    };

    this.php_js = this.php_js || {};
    this.setlocale ( 'LC_ALL' , 0 );

    var phpjs = this.php_js;
    var locale = phpjs.localeCategories.LC_TIME;
    var locales = phpjs.locales;
    var lc_time = locales[ locale ].LC_TIME;

    while (format.match ( /%[cDFhnrRtTxX]/ ))
    {
        format = format.replace ( /%([cDFhnrRtTxX])/g , function ( m0 , m1 )
        {
            var f = _aggregates[ m1 ];
            return (f === 'locale' ? lc_time[ m1 ] : f);
        } );
    }

    var _addNext = function ( j , regex , cb )
    {
        if ( typeof regex === 'string' )
        {
            regex = new RegExp ( '^' + regex , 'i' );
        }
        var check = dateStr.slice ( j );
        var match = regex.exec ( check );

        var testNull = match ? cb.apply ( null , match ) : null;
        if ( testNull === null )
        {
            throw 'No match in string';
        }
        return j + match[ 0 ].length;
    };

    var _addLocalized = function ( j , formatChar , category )
    {
        return _addNext ( j , that.array_map ( _preg_quote , lc_time[ formatChar ] ).join ( '|' ) ,

                          function ( m )
                          {
                              var match = lc_time[ formatChar ].search ( new RegExp ( '^' + _preg_quote ( m ) + '$' , 'i' ) );
                              if ( match )
                              {
                                  retObj[ category ] = match[ 0 ];
                              }
                          } );
    };

    for ( i = 0, j = 0 ; i < format.length ; i++ )
    {
        if ( format.charAt ( i ) === '%' )
        {
            var literalPos = [ '%' , 'n' , 't' ].indexOf ( format.charAt ( i + 1 ) );
            if ( literalPos !== -1 )
            {
                if ( [ '%' , '\n' , '\t' ].indexOf ( dateStr.charAt ( j ) ) === literalPos )
                {
                    ++i;
                    ++j;
                    continue;
                }

                return false;
            }
            var formatChar = format.charAt ( i + 1 );
            try
            {
                switch ( formatChar )
                {
                    case 'a':

                    case 'A':

                        j = _addLocalized ( j , formatChar , 'tm_wday' );
                        break;
                    case 'h':

                    case 'b':

                        j = _addLocalized ( j , 'b' , 'tm_mon' );
                        _date ();
                        break;
                    case 'B':

                        j = _addLocalized ( j , formatChar , 'tm_mon' );
                        _date ();
                        break;
                    case 'C':

                        j = _addNext ( j , /^\d?\d/ ,

                                       function ( d )
                                       {
                                           var year = (parseInt ( d , 10 ) - 19) * 100;
                                           retObj.tm_year = year;
                                           _date ();
                                           if ( !retObj.tm_yday )
                                           {
                                               retObj.tm_yday = -1;
                                           }

                                       } );
                        break;
                    case 'd':

                    case 'e':

                        j = _addNext ( j , formatChar === 'd' ? /^(0[1-9]|[1-2]\d|3[0-1])/ : /^([1-2]\d|3[0-1]|[1-9])/ , function ( d )
                        {
                            var dayMonth = parseInt ( d , 10 );
                            retObj.tm_mday = dayMonth;
                            _date ();
                        } );
                        break;
                    case 'g':

                        break;
                    case 'G':

                        break;
                    case 'H':

                        j = _addNext ( j , /^([0-1]\d|2[0-3])/ , function ( d )
                        {
                            var hour = parseInt ( d , 10 );
                            retObj.tm_hour = hour;

                        } );
                        break;
                    case 'l':

                    case 'I':

                        j = _addNext ( j , formatChar === 'l' ? /^([1-9]|1[0-2])/ : /^(0[1-9]|1[0-2])/ , function ( d )
                        {
                            var hour = parseInt ( d , 10 ) - 1 + amPmOffset;
                            retObj.tm_hour = hour;
                            prevHour = true;

                        } );
                        break;
                    case 'j':

                        j = _addNext ( j , /^(00[1-9]|0[1-9]\d|[1-2]\d\d|3[0-6][0-6])/ , function ( d )
                        {
                            var dayYear = parseInt ( d , 10 ) - 1;
                            retObj.tm_yday = dayYear;

                        } );
                        break;
                    case 'm':

                        j = _addNext ( j , /^(0[1-9]|1[0-2])/ , function ( d )
                        {
                            var month = parseInt ( d , 10 ) - 1;
                            retObj.tm_mon = month;
                            _date ();
                        } );
                        break;
                    case 'M':

                        j = _addNext ( j , /^[0-5]\d/ , function ( d )
                        {
                            var minute = parseInt ( d , 10 );
                            retObj.tm_min = minute;

                        } );
                        break;
                    case 'P':

                        return false;
                    case 'p':

                        j = _addNext ( j , /^(am|pm)/i , function ( d )
                        {


                            amPmOffset = (/a/).test ( d ) ? 0 : 12;
                            if ( prevHour )
                            {
                                retObj.tm_hour += amPmOffset;
                            }
                        } );
                        break;
                    case 's':

                        j = _addNext ( j , /^\d+/ , function ( d )
                        {
                            var timestamp = parseInt ( d , 10 );
                            var date = new Date ( Date.UTC ( timestamp * 1000 ) );
                            _reset ( date );

                        } );
                        break;
                    case 'S':

                        j = _addNext ( j , /^[0-5]\d/ ,

                                       function ( d )
                                       {
                                           var second = parseInt ( d , 10 );
                                           retObj.tm_sec = second;

                                       } );
                        break;
                    case 'u':

                    case 'w':

                        j = _addNext ( j , /^\d/ , function ( d )
                        {
                            retObj.tm_wday = d - (formatChar === 'u');

                        } );
                        break;
                    case 'U':

                    case 'V':

                    case 'W':

                        break;
                    case 'y':

                        j = _addNext ( j , /^\d?\d/ ,

                                       function ( d )
                                       {
                                           d = parseInt ( d , 10 );
                                           var year = d >= 69 ? d : d + 100;
                                           retObj.tm_year = year;
                                           _date ();
                                           if ( !retObj.tm_yday )
                                           {
                                               retObj.tm_yday = -1;
                                           }

                                       } );
                        break;
                    case 'Y':

                        j = _addNext ( j , /^\d{1,4}/ ,

                                       function ( d )
                                       {
                                           var year = (parseInt ( d , 10 )) - 1900;
                                           retObj.tm_year = year;
                                           _date ();
                                           if ( !retObj.tm_yday )
                                           {
                                               retObj.tm_yday = -1;
                                           }

                                       } );
                        break;
                    case 'z':

                        break;
                    case 'Z':

                        break;
                    default:
                        throw 'Unrecognized formatting character in strptime()';
                }
            } catch ( e )
            {
                if ( e === 'No match in string' )
                {
                    return false;
                }
            }
            ++i;
        }
        else if ( format.charAt ( i ) !== dateStr.charAt ( j ) )
        {




            if ( dateStr.charAt ( j ).search ( _WS ) !== -1 )
            {
                j++;
                i--;
            }
            else if ( format.charAt ( i ).search ( _NWS ) !== -1 )
            {

                return false;
            }



        }
        else
        {
            j++;
        }
    }

    retObj.unparsed = dateStr.slice ( j );
    return retObj;
}

function strrchr ( haystack , needle )
{

    var pos = 0;

    if ( typeof needle !== 'string' )
    {
        needle = String.fromCharCode ( parseInt ( needle , 10 ) );
    }
    needle = needle.charAt ( 0 );
    pos = haystack.lastIndexOf ( needle );
    if ( pos === -1 )
    {
        return false;
    }

    return haystack.substr ( pos );
}

function str_repeat ( input , multiplier )
{

    var y = '';
    while (true)
    {
        if ( multiplier & 1 )
        {
            y += input;
        }
        multiplier >>= 1;
        if ( multiplier )
        {
            input += input;
        }
        else
        {
            break;
        }
    }
    return y;
}

function str_replace ( search , replace , subject , count )
{

    var i = 0 , j = 0 , temp = '' , repl = '' , sl = 0 , fl = 0 , f = [].concat ( search ) , r = [].concat ( replace ) , s = subject ,
        ra                                                                                                                 = Object.prototype.toString.call ( r ) === '[object Array]' , sa = Object.prototype.toString.call ( s ) === '[object Array]';
    s = [].concat ( s );
    if ( count )
    {
        this.window[ count ] = 0;
    }

    for ( i = 0, sl = s.length ; i < sl ; i++ )
    {
        if ( s[ i ] === '' )
        {
            continue;
        }
        for ( j = 0, fl = f.length ; j < fl ; j++ )
        {
            temp = s[ i ] + '';
            repl = ra ? (r[ j ] !== undefined ? r[ j ] : '') : r[ 0 ];
            s[ i ] = (temp).split ( f[ j ] ).join ( repl );
            if ( count && s[ i ] !== temp )
            {
                this.window[ count ] += (temp.length - s[ i ].length) / f[ j ].length;
            }
        }
    }
    return sa ? s : s[ 0 ];
}

function strrev ( string )
{

    string = string + '';

    var grapheme_extend = /(.)([\uDC00-\uDFFF\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065E\u0670\u06D6-\u06DC\u06DE-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0901-\u0903\u093C\u093E-\u094D\u0951-\u0954\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F90-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B6-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAA\u1C24-\u1C37\u1DC0-\u1DE6\u1DFE\u1DFF\u20D0-\u20F0\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA67C\uA67D\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA926-\uA92D\uA947-\uA953\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uFB1E\uFE00-\uFE0F\uFE20-\uFE26]+)/g;
    string = string.replace ( grapheme_extend , '$2$1' );
    return string.split ( '' ).reverse ().join ( '' );
}

function strripos ( haystack , needle , offset )
{

    haystack = (haystack + '').toLowerCase ();
    needle = (needle + '').toLowerCase ();

    var i = -1;
    if ( offset )
    {
        i = (haystack + '').slice ( offset ).lastIndexOf ( needle );

        if ( i !== -1 )
        {
            i += offset;
        }
    }
    else
    {
        i = (haystack + '').lastIndexOf ( needle );
    }
    return i >= 0 ? i : false;
}

function str_rot13 ( str )
{

    return (str + '').replace ( /[a-z]/gi , function ( s )
    {
        return String.fromCharCode ( s.charCodeAt ( 0 ) + (s.toLowerCase () < 'n' ? 13 : -13) );
    } );
}

function strrpos ( haystack , needle , offset )
{

    var i = -1;
    if ( offset )
    {
        i = (haystack + '').slice ( offset ).lastIndexOf ( needle );

        if ( i !== -1 )
        {
            i += offset;
        }
    }
    else
    {
        i = (haystack + '').lastIndexOf ( needle );
    }
    return i >= 0 ? i : false;
}

function str_shuffle ( str )
{

    if ( arguments.length === 0 )
    {
        throw 'Wrong parameter count for str_shuffle()';
    }

    if ( str == null )
    {
        return '';
    }

    str += '';

    var newStr = '' , rand , i = str.length;

    while (i)
    {
        rand = Math.floor ( Math.random () * i );
        newStr += str.charAt ( rand );
        str = str.substring ( 0 , rand ) + str.substr ( rand + 1 );
        i--;
    }

    return newStr;
}


function strspn ( str1 , str2 , start , lgth )
{

    var found;
    var stri;
    var strj;
    var j = 0;
    var i = 0;

    start = start ? (start < 0 ? (str1.length + start) : start) : 0;
    lgth = lgth ? ((lgth < 0) ? (str1.length + lgth - start) : lgth) : str1.length - start;
    str1 = str1.substr ( start , lgth );

    for ( i = 0 ; i < str1.length ; i++ )
    {
        found = 0;
        stri = str1.substring ( i , i + 1 );
        for ( j = 0 ; j <= str2.length ; j++ )
        {
            strj = str2.substring ( j , j + 1 );
            if ( stri == strj )
            {
                found = 1;
                break;
            }
        }
        if ( found != 1 )
        {
            return i;
        }
    }

    return i;
}

function strstr ( haystack , needle , bool )
{

    var pos = 0;

    haystack += '';
    pos = haystack.indexOf ( needle );
    if ( pos == -1 )
    {
        return false;
    }
    else
    {
        if ( bool )
        {
            return haystack.substr ( 0 , pos );
        }
        else
        {
            return haystack.slice ( pos );
        }
    }
}

function strtok ( str , tokens )
{

    this.php_js = this.php_js || {};
    if ( tokens === undefined )
    {
        tokens = str;
        str = this.php_js.strtokleftOver;
    }
    if ( str.length === 0 )
    {
        return false;
    }
    if ( tokens.indexOf ( str.charAt ( 0 ) ) !== -1 )
    {
        return this.strtok ( str.substr ( 1 ) , tokens );
    }
    for ( var i = 0 ; i < str.length ; i++ )
    {
        if ( tokens.indexOf ( str.charAt ( i ) ) !== -1 )
        {
            break;
        }
    }
    this.php_js.strtokleftOver = str.substr ( i + 1 );
    return str.substring ( 0 , i );
}

function strtolower ( str )
{

    return (str + '').toLowerCase ();
}

function strtotime ( text , now )
{

    var parsed , match , today , year , date , days , ranges , len , times , regex , i , fail = false;

    if ( !text )
    {
        return fail;
    }

    text = text.replace ( /^\s+|\s+$/g , '' ).replace ( /\s{2,}/g , ' ' ).replace ( /[\t\r\n]/g , '' ).toLowerCase ();

    match = text.match ( /^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/ );

    if ( match && match[ 2 ] === match[ 4 ] )
    {
        if ( match[ 1 ] > 1901 )
        {
            switch ( match[ 2 ] )
            {
                case '-':
                {
                    if ( match[ 3 ] > 12 || match[ 5 ] > 31 )
                    {
                        return fail;
                    }

                    return new Date ( match[ 1 ] , parseInt ( match[ 3 ] , 10 ) - 1 , match[ 5 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
                case '.':
                {
                    return fail;
                }
                case '/':
                {
                    if ( match[ 3 ] > 12 || match[ 5 ] > 31 )
                    {
                        return fail;
                    }

                    return new Date ( match[ 1 ] , parseInt ( match[ 3 ] , 10 ) - 1 , match[ 5 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
            }
        }
        else if ( match[ 5 ] > 1901 )
        {
            switch ( match[ 2 ] )
            {
                case '-':
                {
                    if ( match[ 3 ] > 12 || match[ 1 ] > 31 )
                    {
                        return fail;
                    }

                    return new Date ( match[ 5 ] , parseInt ( match[ 3 ] , 10 ) - 1 , match[ 1 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
                case '.':
                {
                    if ( match[ 3 ] > 12 || match[ 1 ] > 31 )
                    {
                        return fail;
                    }

                    return new Date ( match[ 5 ] , parseInt ( match[ 3 ] , 10 ) - 1 , match[ 1 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
                case '/':
                {
                    if ( match[ 1 ] > 12 || match[ 3 ] > 31 )
                    {
                        return fail;
                    }

                    return new Date ( match[ 5 ] , parseInt ( match[ 1 ] , 10 ) - 1 , match[ 3 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
            }
        }
        else
        {
            switch ( match[ 2 ] )
            {
                case '-':
                {
                    if ( match[ 3 ] > 12 || match[ 5 ] > 31 || (match[ 1 ] < 70 && match[ 1 ] > 38) )
                    {
                        return fail;
                    }

                    year = match[ 1 ] >= 0 && match[ 1 ] <= 38 ? +match[ 1 ] + 2000 : match[ 1 ];
                    return new Date ( year , parseInt ( match[ 3 ] , 10 ) - 1 , match[ 5 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
                case '.':
                {
                    if ( match[ 5 ] >= 70 )
                    {
                        if ( match[ 3 ] > 12 || match[ 1 ] > 31 )
                        {
                            return fail;
                        }

                        return new Date ( match[ 5 ] , parseInt ( match[ 3 ] , 10 ) - 1 , match[ 1 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                    }
                    if ( match[ 5 ] < 60 && !match[ 6 ] )
                    {
                        if ( match[ 1 ] > 23 || match[ 3 ] > 59 )
                        {
                            return fail;
                        }

                        today = new Date ();
                        return new Date ( today.getFullYear () , today.getMonth () , today.getDate () , match[ 1 ] || 0 , match[ 3 ] || 0 , match[ 5 ] || 0 , match[ 9 ] || 0 ) / 1000;
                    }

                    return fail;
                }
                case '/':
                {
                    if ( match[ 1 ] > 12 || match[ 3 ] > 31 || (match[ 5 ] < 70 && match[ 5 ] > 38) )
                    {
                        return fail;
                    }

                    year = match[ 5 ] >= 0 && match[ 5 ] <= 38 ? +match[ 5 ] + 2000 : match[ 5 ];
                    return new Date ( year , parseInt ( match[ 1 ] , 10 ) - 1 , match[ 3 ] , match[ 6 ] || 0 , match[ 7 ] || 0 , match[ 8 ] || 0 , match[ 9 ] || 0 ) / 1000;
                }
                case ':':
                {
                    if ( match[ 1 ] > 23 || match[ 3 ] > 59 || match[ 5 ] > 59 )
                    {
                        return fail;
                    }

                    today = new Date ();
                    return new Date ( today.getFullYear () , today.getMonth () , today.getDate () , match[ 1 ] || 0 , match[ 3 ] || 0 , match[ 5 ] || 0 ) / 1000;
                }
            }
        }
    }

    if ( text === 'now' )
    {
        return now === null || isNaN ( now ) ? new Date ().getTime () / 1000 | 0 : now | 0;
    }
    if ( !isNaN ( parsed = Date.parse ( text ) ) )
    {
        return parsed / 1000 | 0;
    }

    date = now ? new Date ( now * 1000 ) : new Date ();
    days = {
        'sun' : 0 , 'mon' : 1 , 'tue' : 2 , 'wed' : 3 , 'thu' : 4 , 'fri' : 5 , 'sat' : 6
    };
    ranges = {
        'yea' : 'FullYear' , 'mon' : 'Month' , 'day' : 'Date' , 'hou' : 'Hours' , 'min' : 'Minutes' , 'sec' : 'Seconds'
    };

    function lastNext ( type , range , modifier )
    {
        var diff , day = days[ range ];

        if ( typeof day !== 'undefined' )
        {
            diff = day - date.getDay ();

            if ( diff === 0 )
            {
                diff = 7 * modifier;
            }
            else if ( diff > 0 && type === 'last' )
            {
                diff -= 7;
            }
            else if ( diff < 0 && type === 'next' )
            {
                diff += 7;
            }

            date.setDate ( date.getDate () + diff );
        }
    }

    function process ( val )
    {
        var splt                                                                                                = val.split ( ' ' ) ,
            type = splt[ 0 ] , range = splt[ 1 ].substring ( 0 , 3 ) , typeIsNumber = /\d+/.test ( type ) , ago = splt[ 2 ] === 'ago' ,
            num                                                                                                 = (type === 'last' ? -1 : 1) * (ago ? -1 : 1);

        if ( typeIsNumber )
        {
            num *= parseInt ( type , 10 );
        }

        if ( ranges.hasOwnProperty ( range ) && !splt[ 1 ].match ( /^mon(day|\.)?$/i ) )
        {
            return date[ 'set' + ranges[ range ] ] ( date[ 'get' + ranges[ range ] ] () + num );
        }

        if ( range === 'wee' )
        {
            return date.setDate ( date.getDate () + (num * 7) );
        }

        if ( type === 'next' || type === 'last' )
        {
            lastNext ( type , range , num );
        }
        else if ( !typeIsNumber )
        {
            return false;
        }

        return true;
    }

    times = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' + '|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?' + '|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';
    regex = '([+-]?\\d+\\s' + times + '|' + '(last|next)\\s' + times + ')(\\sago)?';

    match = text.match ( new RegExp ( regex , 'gi' ) );
    if ( !match )
    {
        return fail;
    }

    for ( i = 0, len = match.length ; i < len ; i++ )
    {
        if ( !process ( match[ i ] ) )
        {
            return fail;
        }
    }


    return (date.getTime () / 1000);
}

function strtoupper ( str )
{

    return (str + '').toUpperCase ();
}

function strtr ( str , from , to )
{

    var fr = '' , i = 0 , j = 0 , lenStr = 0 , lenFrom = 0 , tmpStrictForIn = false , fromTypeStr = '' , toTypeStr = '' , istr = '';
    var tmpFrom = [];
    var tmpTo = [];
    var ret = '';
    var match = false;

    if ( typeof from === 'object' )
    {
        tmpStrictForIn = this.ini_set ( 'phpjs.strictForIn' , false );
        from = this.krsort ( from );
        this.ini_set ( 'phpjs.strictForIn' , tmpStrictForIn );

        for ( fr in from )
        {
            if ( from.hasOwnProperty ( fr ) )
            {
                tmpFrom.push ( fr );
                tmpTo.push ( from[ fr ] );
            }
        }

        from = tmpFrom;
        to = tmpTo;
    }

    lenStr = str.length;
    lenFrom = from.length;
    fromTypeStr = typeof from === 'string';
    toTypeStr = typeof to === 'string';

    for ( i = 0 ; i < lenStr ; i++ )
    {
        match = false;
        if ( fromTypeStr )
        {
            istr = str.charAt ( i );
            for ( j = 0 ; j < lenFrom ; j++ )
            {
                if ( istr == from.charAt ( j ) )
                {
                    match = true;
                    break;
                }
            }
        }
        else
        {
            for ( j = 0 ; j < lenFrom ; j++ )
            {
                if ( str.substr ( i , from[ j ].length ) == from[ j ] )
                {
                    match = true;

                    i = (i + from[ j ].length) - 1;
                    break;
                }
            }
        }
        if ( match )
        {
            ret += toTypeStr ? to.charAt ( j ) : to[ j ];
        }
        else
        {
            ret += str.charAt ( i );
        }
    }

    return ret;
}

function strval ( str )
{

    var type = '';

    if ( str === null )
    {
        return '';
    }

    type = this.gettype ( str );

    switch ( type )
    {
        case 'boolean':
            if ( str === true )
            {
                return '1';
            }
            return '';
        case 'array':
            return 'Array';
        case 'object':
            return 'Object';
    }

    return str;
}

function str_word_count ( str , format , charlist )
{

    var len = str.length , cl = charlist && charlist.length , chr = '' , tmpStr = '' , i = 0 , c = '' , wArr = [] , wC = 0 , assoc = {} , aC = 0 , reg = '' ,
        match                                                                                                                                          = false;

    var _preg_quote = function ( str )
    {
        return (str + '').replace ( /([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g , '\\$1' );
    };
    _getWholeChar = function ( str , i )
    {
        var code = str.charCodeAt ( i );
        if ( code < 0xD800 || code > 0xDFFF )
        {
            return str.charAt ( i );
        }
        if ( 0xD800 <= code && code <= 0xDBFF )
        {
            if ( str.length <= (i + 1) )
            {
                throw 'High surrogate without following low surrogate';
            }
            var next = str.charCodeAt ( i + 1 );
            if ( 0xDC00 > next || next > 0xDFFF )
            {
                throw 'High surrogate without following low surrogate';
            }
            return str.charAt ( i ) + str.charAt ( i + 1 );
        }

        if ( i === 0 )
        {
            throw 'Low surrogate without preceding high surrogate';
        }
        var prev = str.charCodeAt ( i - 1 );
        if ( 0xD800 > prev || prev > 0xDBFF )
        {
            throw 'Low surrogate without preceding high surrogate';
        }
        return false;
    };
    if ( cl )
    {
        reg = '^(' + _preg_quote ( _getWholeChar ( charlist , 0 ) );
        for ( i = 1 ; i < cl ; i++ )
        {
            if ( (chr = _getWholeChar ( charlist , i )) === false )
            {
                continue;
            }
            reg += '|' + _preg_quote ( chr );
        }
        reg += ')$';
        reg = new RegExp ( reg );
    }

    for ( i = 0 ; i < len ; i++ )
    {
        if ( (c = _getWholeChar ( str , i )) === false )
        {
            continue;
        }
        match = this.ctype_alpha ( c ) || (reg && c.search ( reg ) !== -1) || ((i !== 0 && i !== len - 1) && c === '-') ||
                (i !== 0 && c === "'");
        if ( match )
        {
            if ( tmpStr === '' && format === 2 )
            {
                aC = i;
            }
            tmpStr = tmpStr + c;
        }
        if ( i === len - 1 || !match && tmpStr !== '' )
        {
            if ( format !== 2 )
            {
                wArr[ wArr.length ] = tmpStr;
            }
            else
            {
                assoc[ aC ] = tmpStr;
            }
            tmpStr = '';
            wC++;
        }
    }

    if ( !format )
    {
        return wC;
    }
    else if ( format === 1 )
    {
        return wArr;
    }
    else if ( format === 2 )
    {
        return assoc;
    }

    throw 'You have supplied an incorrect format';
}

function substr_compare ( main_str , str , offset , length , case_insensitivity )
{

    if ( !offset && offset !== 0 )
    {
        throw 'Missing offset for substr_compare()';
    }

    if ( offset < 0 )
    {
        offset = main_str.length + offset;
    }

    if ( length && length > (main_str.length - offset) )
    {
        return false;
    }
    length = length || main_str.length - offset;

    main_str = main_str.substr ( offset , length );
    str = str.substr ( 0 , length );
    if ( case_insensitivity )
    {
        main_str = (main_str + '').toLowerCase ();
        str = (str + '').toLowerCase ();
        if ( main_str == str )
        {
            return 0;
        }
        return (main_str > str) ? 1 : -1;
    }
    return ((main_str == str) ? 0 : ((main_str > str) ? 1 : -1));
}

function substr_count ( haystack , needle , offset , length )
{

    var cnt = 0;

    haystack += '';
    needle += '';
    if ( isNaN ( offset ) )
    {
        offset = 0;
    }
    if ( isNaN ( length ) )
    {
        length = 0;
    }
    if ( needle.length == 0 )
    {
        return false;
    }
    offset--;

    while ((offset = haystack.indexOf ( needle , offset + 1 )) != -1)
    {
        if ( length > 0 && (offset + needle.length) > length )
        {
            return false;
        }
        cnt++;
    }

    return cnt;
}

function substr ( str , start , len )
{

    var i = 0 , allBMP = true , es = 0 , el = 0 , se = 0 , ret = '';
    str += '';
    var end = str.length;

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    switch ( (this.php_js.ini[ 'unicode.semantics' ] && this.php_js.ini[ 'unicode.semantics' ].local_value.toLowerCase ()) )
    {
        case 'on':


            for ( i = 0 ; i < str.length ; i++ )
            {
                if ( /[\uD800-\uDBFF]/.test ( str.charAt ( i ) ) && /[\uDC00-\uDFFF]/.test ( str.charAt ( i + 1 ) ) )
                {
                    allBMP = false;
                    break;
                }
            }

            if ( !allBMP )
            {
                if ( start < 0 )
                {
                    for ( i = end - 1, es = (start += end) ; i >= es ; i-- )
                    {
                        if ( /[\uDC00-\uDFFF]/.test ( str.charAt ( i ) ) && /[\uD800-\uDBFF]/.test ( str.charAt ( i - 1 ) ) )
                        {
                            start--;
                            es--;
                        }
                    }
                }
                else
                {
                    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
                    while ((surrogatePairs.exec ( str )) != null)
                    {
                        var li = surrogatePairs.lastIndex;
                        if ( li - 2 < start )
                        {
                            start++;
                        }
                        else
                        {
                            break;
                        }
                    }
                }

                if ( start >= end || start < 0 )
                {
                    return false;
                }
                if ( len < 0 )
                {
                    for ( i = end - 1, el = (end += len) ; i >= el ; i-- )
                    {
                        if ( /[\uDC00-\uDFFF]/.test ( str.charAt ( i ) ) && /[\uD800-\uDBFF]/.test ( str.charAt ( i - 1 ) ) )
                        {
                            end--;
                            el--;
                        }
                    }
                    if ( start > end )
                    {
                        return false;
                    }
                    return str.slice ( start , end );
                }
                else
                {
                    se = start + len;
                    for ( i = start ; i < se ; i++ )
                    {
                        ret += str.charAt ( i );
                        if ( /[\uD800-\uDBFF]/.test ( str.charAt ( i ) ) && /[\uDC00-\uDFFF]/.test ( str.charAt ( i + 1 ) ) )
                        {
                            se++;
                        }
                    }
                    return ret;
                }
                break;
            }

        case 'off':


        default:
            if ( start < 0 )
            {
                start += end;
            }
            end = typeof len === 'undefined' ? end : (len < 0 ? len + end : len + start);




            return start >= str.length || start < 0 || start > end ? !1 : str.slice ( start , end );
    }
    return undefined;
}

function substr_replace ( str , replace , start , length )
{

    if ( start < 0 )
    {
        start = start + str.length;
    }
    length = length !== undefined ? length : str.length;
    if ( length < 0 )
    {
        length = length + str.length - start;
    }

    return str.slice ( 0 , start ) + replace.substr ( 0 , length ) + replace.slice ( length ) + str.slice ( start + length );
}

function tanh ( arg )
{

    return (Math.exp ( arg ) - Math.exp ( -arg )) / (Math.exp ( arg ) + Math.exp ( -arg ));
}

function tan ( arg )
{

    return Math.tan ( arg );
}

function time ()
{

    return Math.floor ( new Date ().getTime () / 1000 );
}

function time_sleep_until ( timestamp )
{

    while (new Date () < timestamp * 1000)
    {
    }
    return true;
}

function trim ( str , charlist )
{

    var whitespace , l = 0 , i = 0;
    str += '';

    if ( !charlist )
    {

        whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    }
    else
    {

        charlist += '';
        whitespace = charlist.replace ( /([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g , '$1' );
    }

    l = str.length;
    for ( i = 0 ; i < l ; i++ )
    {
        if ( whitespace.indexOf ( str.charAt ( i ) ) === -1 )
        {
            str = str.substring ( i );
            break;
        }
    }

    l = str.length;
    for ( i = l - 1 ; i >= 0 ; i-- )
    {
        if ( whitespace.indexOf ( str.charAt ( i ) ) === -1 )
        {
            str = str.substring ( 0 , i + 1 );
            break;
        }
    }

    return whitespace.indexOf ( str.charAt ( 0 ) ) === -1 ? str : '';
}

function uasort ( inputArr , sorter )
{

    var valArr = [] , tempKeyVal , tempValue , ret , k = '' , i = 0 , strictForIn = false , populateArr = {};

    if ( typeof sorter === 'string' )
    {
        sorter = this[ sorter ];
    }
    else if ( Object.prototype.toString.call ( sorter ) === '[object Array]' )
    {
        sorter = this[ sorter[ 0 ] ][ sorter[ 1 ] ];
    }

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( [ k , inputArr[ k ] ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }
    valArr.sort ( function ( a , b )
                  {
                      return sorter ( a[ 1 ] , b[ 1 ] );
                  } );

    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ valArr[ i ][ 0 ] ] = valArr[ i ][ 1 ];
    }

    return strictForIn || populateArr;
}

function ucfirst ( str )
{

    str += '';
    var f = str.charAt ( 0 ).toUpperCase ();
    return f + str.substr ( 1 );
}

function ucwords ( str )
{

    return (str + '').replace ( /^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g , function ( $1 )
    {
        return $1.toUpperCase ();
    } );
}

function uksort ( inputArr , sorter )
{

    var tmp_arr = {} , keys = [] , i = 0 , k = '' , strictForIn = false , populateArr = {};

    if ( typeof sorter === 'string' )
    {
        sorter = this.window[ sorter ];
    }

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            keys.push ( k );
        }
    }

    try
    {
        if ( sorter )
        {
            keys.sort ( sorter );
        }
        else
        {
            keys.sort ();
        }
    } catch ( e )
    {
        return false;
    }

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( i = 0 ; i < keys.length ; i++ )
    {
        k = keys[ i ];
        tmp_arr[ k ] = inputArr[ k ];
        if ( strictForIn )
        {
            delete inputArr[ k ];
        }
    }
    for ( i in tmp_arr )
    {
        if ( tmp_arr.hasOwnProperty ( i ) )
        {
            populateArr[ i ] = tmp_arr[ i ];
        }
    }
    return strictForIn || populateArr;
}

function uniqid ( prefix , more_entropy )
{

    if ( typeof prefix === 'undefined' )
    {
        prefix = '';
    }

    var retId;
    var formatSeed = function ( seed , reqWidth )
    {
        seed = parseInt ( seed , 10 ).toString ( 16 );
        if ( reqWidth < seed.length )
        {
            return seed.slice ( seed.length - reqWidth );
        }
        if ( reqWidth > seed.length )
        {
            return Array ( 1 + (reqWidth - seed.length) ).join ( '0' ) + seed;
        }
        return seed;
    };

    if ( !this.php_js )
    {
        this.php_js = {};
    }
    if ( !this.php_js.uniqidSeed )
    {
        this.php_js.uniqidSeed = Math.floor ( Math.random () * 0x75bcd15 );
    }
    this.php_js.uniqidSeed++;

    retId = prefix;
    retId += formatSeed ( parseInt ( new Date ().getTime () / 1000 , 10 ) , 8 );
    retId += formatSeed ( this.php_js.uniqidSeed , 5 );
    if ( more_entropy )
    {

        retId += (Math.random () * 10).toFixed ( 8 ).toString ();
    }

    return retId;
}

function unserialize ( data )
{

    var that = this , utf8Overhead = function ( chr )
    {

        var code = chr.charCodeAt ( 0 );
        if ( code < 0x0080 )
        {
            return 0;
        }
        if ( code < 0x0800 )
        {
            return 1;
        }
        return 2;
    };
    error = function ( type , msg , filename , line )
    {
        throw new that.window[ type ] ( msg , filename , line );
    };
    read_until = function ( data , offset , stopchr )
    {
        var i = 2 , buf = [] , chr = data.slice ( offset , offset + 1 );

        while (chr != stopchr)
        {
            if ( (i + offset) > data.length )
            {
                error ( 'Error' , 'Invalid' );
            }
            buf.push ( chr );
            chr = data.slice ( offset + (i - 1) , offset + i );
            i += 1;
        }
        return [ buf.length , buf.join ( '' ) ];
    };
    read_chrs = function ( data , offset , length )
    {
        var i , chr , buf;

        buf = [];
        for ( i = 0 ; i < length ; i++ )
        {
            chr = data.slice ( offset + (i - 1) , offset + i );
            buf.push ( chr );
            length -= utf8Overhead ( chr );
        }
        return [ buf.length , buf.join ( '' ) ];
    };
    _unserialize = function ( data , offset )
    {
        var dtype , dataoffset , keyandchrs , keys , contig , length , array , readdata , readData , ccount , stringlength , i , key , kprops , kchrs , vprops ,
            vchrs , value , chrs = 0 , typeconvert = function ( x )
            {
                return x;
            };

        if ( !offset )
        {
            offset = 0;
        }
        dtype = (data.slice ( offset , offset + 1 )).toLowerCase ();

        dataoffset = offset + 2;

        switch ( dtype )
        {
            case 'i':
                typeconvert = function ( x )
                {
                    return parseInt ( x , 10 );
                };
                readData = read_until ( data , dataoffset , ';' );
                chrs = readData[ 0 ];
                readdata = readData[ 1 ];
                dataoffset += chrs + 1;
                break;
            case 'b':
                typeconvert = function ( x )
                {
                    return parseInt ( x , 10 ) !== 0;
                };
                readData = read_until ( data , dataoffset , ';' );
                chrs = readData[ 0 ];
                readdata = readData[ 1 ];
                dataoffset += chrs + 1;
                break;
            case 'd':
                typeconvert = function ( x )
                {
                    return parseFloat ( x );
                };
                readData = read_until ( data , dataoffset , ';' );
                chrs = readData[ 0 ];
                readdata = readData[ 1 ];
                dataoffset += chrs + 1;
                break;
            case 'n':
                readdata = null;
                break;
            case 's':
                ccount = read_until ( data , dataoffset , ':' );
                chrs = ccount[ 0 ];
                stringlength = ccount[ 1 ];
                dataoffset += chrs + 2;

                readData = read_chrs ( data , dataoffset + 1 , parseInt ( stringlength , 10 ) );
                chrs = readData[ 0 ];
                readdata = readData[ 1 ];
                dataoffset += chrs + 2;
                if ( chrs != parseInt ( stringlength , 10 ) && chrs != readdata.length )
                {
                    error ( 'SyntaxError' , 'String length mismatch' );
                }
                break;
            case 'a':
                readdata = {};

                keyandchrs = read_until ( data , dataoffset , ':' );
                chrs = keyandchrs[ 0 ];
                keys = keyandchrs[ 1 ];
                dataoffset += chrs + 2;

                length = parseInt ( keys , 10 );
                contig = true;

                for ( i = 0 ; i < length ; i++ )
                {
                    kprops = _unserialize ( data , dataoffset );
                    kchrs = kprops[ 1 ];
                    key = kprops[ 2 ];
                    dataoffset += kchrs;

                    vprops = _unserialize ( data , dataoffset );
                    vchrs = vprops[ 1 ];
                    value = vprops[ 2 ];
                    dataoffset += vchrs;

                    if ( key !== i )
                    {
                        contig = false;
                    }

                    readdata[ key ] = value;
                }

                if ( contig )
                {
                    array = new Array ( length );
                    for ( i = 0 ; i < length ; i++ )
                    {
                        array[ i ] = readdata[ i ];
                    }
                    readdata = array;
                }

                dataoffset += 1;
                break;
            default:
                error ( 'SyntaxError' , 'Unknown / Unhandled data type(s): ' + dtype );
                break;
        }
        return [ dtype , dataoffset - offset , typeconvert ( readdata ) ];
    };

    return _unserialize ( (data + '') , 0 )[ 2 ];
}

function urldecode ( str )
{

    return decodeURIComponent ( (str + '').replace ( /%(?![\da-f]{2})/gi , function ()
    {

        return '%25';
    } ).replace ( /\+/g , '%20' ) );
}

function urlencode ( str )
{

    str = (str + '').toString ();

    return encodeURIComponent ( str ).replace ( /!/g , '%21' ).replace ( /'/g , '%27' ).replace ( /\(/g , '%28' ).replace ( /\)/g , '%29' ).replace ( /\*/g , '%2A' ).replace ( /%20/g , '+' );
}

function usort ( inputArr , sorter )
{

    var valArr = [] , k = '' , i = 0 , strictForIn = false , populateArr = {};

    if ( typeof sorter === 'string' )
    {
        sorter = this[ sorter ];
    }
    else if ( Object.prototype.toString.call ( sorter ) === '[object Array]' )
    {
        sorter = this[ sorter[ 0 ] ][ sorter[ 1 ] ];
    }

    this.php_js = this.php_js || {};
    this.php_js.ini = this.php_js.ini || {};
    strictForIn = this.php_js.ini[ 'phpjs.strictForIn' ] && this.php_js.ini[ 'phpjs.strictForIn' ].local_value && this.php_js.ini[ 'phpjs.strictForIn' ].local_value !== 'off';
    populateArr = strictForIn ? inputArr : populateArr;

    for ( k in inputArr )
    {
        if ( inputArr.hasOwnProperty ( k ) )
        {
            valArr.push ( inputArr[ k ] );
            if ( strictForIn )
            {
                delete inputArr[ k ];
            }
        }
    }
    try
    {
        valArr.sort ( sorter );
    } catch ( e )
    {
        return false;
    }
    for ( i = 0 ; i < valArr.length ; i++ )
    {
        populateArr[ i ] = valArr[ i ];
    }

    return strictForIn || populateArr;
}

function utf8_decode ( str_data )
{

    var tmp_arr = [] , i = 0 , ac = 0 , c1 = 0 , c2 = 0 , c3 = 0 , c4 = 0;

    str_data += '';

    while (i < str_data.length)
    {
        c1 = str_data.charCodeAt ( i );
        if ( c1 <= 191 )
        {
            tmp_arr[ ac++ ] = String.fromCharCode ( c1 );
            i++;
        }
        else if ( c1 <= 223 )
        {
            c2 = str_data.charCodeAt ( i + 1 );
            tmp_arr[ ac++ ] = String.fromCharCode ( ((c1 & 31) << 6) | (c2 & 63) );
            i += 2;
        }
        else if ( c1 <= 239 )
        {

            c2 = str_data.charCodeAt ( i + 1 );
            c3 = str_data.charCodeAt ( i + 2 );
            tmp_arr[ ac++ ] = String.fromCharCode ( ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63) );
            i += 3;
        }
        else
        {
            c2 = str_data.charCodeAt ( i + 1 );
            c3 = str_data.charCodeAt ( i + 2 );
            c4 = str_data.charCodeAt ( i + 3 );
            c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
            c1 -= 0x10000;
            tmp_arr[ ac++ ] = String.fromCharCode ( 0xD800 | ((c1 >> 10) & 0x3FF) );
            tmp_arr[ ac++ ] = String.fromCharCode ( 0xDC00 | (c1 & 0x3FF) );
            i += 4;
        }
    }

    return tmp_arr.join ( '' );
}

function utf8_encode ( argString )
{

    if ( argString === null || typeof argString === 'undefined' )
    {
        return '';
    }

    var string = (argString + '');
    var utftext = '' , start , end , stringl = 0;

    start = end = 0;
    stringl = string.length;
    for ( var n = 0 ; n < stringl ; n++ )
    {
        var c1 = string.charCodeAt ( n );
        var enc = null;

        if ( c1 < 128 )
        {
            end++;
        }
        else if ( c1 > 127 && c1 < 2048 )
        {
            enc = String.fromCharCode ( (c1 >> 6) | 192 , (c1 & 63) | 128 );
        }
        else if ( (c1 & 0xF800) != 0xD800 )
        {
            enc = String.fromCharCode ( (c1 >> 12) | 224 , ((c1 >> 6) & 63) | 128 , (c1 & 63) | 128 );
        }
        else
        {
            if ( (c1 & 0xFC00) != 0xD800 )
            {
                throw new RangeError ( 'Unmatched trail surrogate at ' + n );
            }
            var c2 = string.charCodeAt ( ++n );
            if ( (c2 & 0xFC00) != 0xDC00 )
            {
                throw new RangeError ( 'Unmatched lead surrogate at ' + (n - 1) );
            }
            c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
            enc = String.fromCharCode ( (c1 >> 18) | 240 , ((c1 >> 12) & 63) | 128 , ((c1 >> 6) & 63) | 128 , (c1 & 63) | 128 );
        }
        if ( enc !== null )
        {
            if ( end > start )
            {
                utftext += string.slice ( start , end );
            }
            utftext += enc;
            start = end = n + 1;
        }
    }

    if ( end > start )
    {
        utftext += string.slice ( start , stringl );
    }

    return utftext;
}

function var_dump ()
{

    var output = '' , pad_char = ' ' , pad_val = 4 , lgth = 0 , i = 0;

    var _getFuncName = function ( fn )
    {
        var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
        if ( !name )
        {
            return '(Anonymous)';
        }
        return name[ 1 ];
    };

    var _repeat_char = function ( len , pad_char )
    {
        var str = '';
        for ( var i = 0 ; i < len ; i++ )
        {
            str += pad_char;
        }
        return str;
    };
    var _getInnerVal = function ( val , thick_pad )
    {
        var ret = '';
        if ( val === null )
        {
            ret = 'NULL';
        }
        else if ( typeof val === 'boolean' )
        {
            ret = 'bool(' + val + ')';
        }
        else if ( typeof val === 'string' )
        {
            ret = 'string(' + val.length + ') "' + val + '"';
        }
        else if ( typeof val === 'number' )
        {
            if ( parseFloat ( val ) == parseInt ( val , 10 ) )
            {
                ret = 'int(' + val + ')';
            }
            else
            {
                ret = 'float(' + val + ')';
            }
        }

        else if ( typeof val === 'undefined' )
        {
            ret = 'undefined';
        }
        else if ( typeof val === 'function' )
        {
            var funcLines = val.toString ().split ( '\n' );
            ret = '';
            for ( var i = 0 , fll = funcLines.length ; i < fll ; i++ )
            {
                ret += (i !== 0 ? '\n' + thick_pad : '') + funcLines[ i ];
            }
        }
        else if ( val instanceof Date )
        {
            ret = 'Date(' + val + ')';
        }
        else if ( val instanceof RegExp )
        {
            ret = 'RegExp(' + val + ')';
        }
        else if ( val.nodeName )
        {
            switch ( val.nodeType )
            {
                case 1:
                    if ( typeof val.namespaceURI === 'undefined' || val.namespaceURI === 'http://www.w3.org/1999/xhtml' )
                    {
                        ret = 'HTMLElement("' + val.nodeName + '")';
                    }
                    else
                    {
                        ret = 'XML Element("' + val.nodeName + '")';
                    }
                    break;
                case 2:
                    ret = 'ATTRIBUTE_NODE(' + val.nodeName + ')';
                    break;
                case 3:
                    ret = 'TEXT_NODE(' + val.nodeValue + ')';
                    break;
                case 4:
                    ret = 'CDATA_SECTION_NODE(' + val.nodeValue + ')';
                    break;
                case 5:
                    ret = 'ENTITY_REFERENCE_NODE';
                    break;
                case 6:
                    ret = 'ENTITY_NODE';
                    break;
                case 7:
                    ret = 'PROCESSING_INSTRUCTION_NODE(' + val.nodeName + ':' + val.nodeValue + ')';
                    break;
                case 8:
                    ret = 'COMMENT_NODE(' + val.nodeValue + ')';
                    break;
                case 9:
                    ret = 'DOCUMENT_NODE';
                    break;
                case 10:
                    ret = 'DOCUMENT_TYPE_NODE';
                    break;
                case 11:
                    ret = 'DOCUMENT_FRAGMENT_NODE';
                    break;
                case 12:
                    ret = 'NOTATION_NODE';
                    break;
            }
        }
        return ret;
    };

    var _formatArray = function ( obj , cur_depth , pad_val , pad_char )
    {
        var someProp = '';
        if ( cur_depth > 0 )
        {
            cur_depth++;
        }

        var base_pad = _repeat_char ( pad_val * (cur_depth - 1) , pad_char );
        var thick_pad = _repeat_char ( pad_val * (cur_depth + 1) , pad_char );
        var str = '';
        var val = '';

        if ( typeof obj === 'object' && obj !== null )
        {
            if ( obj.constructor && _getFuncName ( obj.constructor ) === 'PHPJS_Resource' )
            {
                return obj.var_dump ();
            }
            lgth = 0;
            for ( someProp in obj )
            {
                lgth++;
            }
            str += 'array(' + lgth + ') {\n';
            for ( var key in obj )
            {
                var objVal = obj[ key ];
                if ( typeof objVal === 'object' && objVal !== null && !(objVal instanceof Date) && !(objVal instanceof RegExp) && !objVal.nodeName )
                {
                    str += thick_pad + '[' + key + '] =>\n' + thick_pad + _formatArray ( objVal , cur_depth + 1 , pad_val , pad_char );
                }
                else
                {
                    val = _getInnerVal ( objVal , thick_pad );
                    str += thick_pad + '[' + key + '] =>\n' + thick_pad + val + '\n';
                }
            }
            str += base_pad + '}\n';
        }
        else
        {
            str = _getInnerVal ( obj , thick_pad );
        }
        return str;
    };

    output = _formatArray ( arguments[ 0 ] , 0 , pad_val , pad_char );
    for ( i = 1 ; i < arguments.length ; i++ )
    {
        output += '\n' + _formatArray ( arguments[ i ] , 0 , pad_val , pad_char );
    }

    this.echo ( output );
}

function var_export ( mixed_expression , bool_return )
{

    var retstr                                                                             = '' , iret = '' , value , cnt = 0 , x                                      = [] , i = 0 , funcParts = [] ,

        idtLevel = arguments[ 2 ] || 2 , innerIndent = '' , outerIndent = '' , getFuncName = function ( fn )
        {
            var name = (/\W*function\s+([\w\$]+)\s*\(/).exec ( fn );
            if ( !name )
            {
                return '(Anonymous)';
            }
            return name[ 1 ];
        };
    _makeIndent = function ( idtLevel )
    {
        return (new Array ( idtLevel + 1 )).join ( ' ' );
    };
    __getType = function ( inp )
    {
        var i = 0 , match , types , cons , type = typeof inp;
        if ( type === 'object' && (inp && inp.constructor) && getFuncName ( inp.constructor ) === 'PHPJS_Resource' )
        {
            return 'resource';
        }
        if ( type === 'function' )
        {
            return 'function';
        }
        if ( type === 'object' && !inp )
        {
            return 'null';
        }
        if ( type === 'object' )
        {
            if ( !inp.constructor )
            {
                return 'object';
            }
            cons = inp.constructor.toString ();
            match = cons.match ( /(\w+)\(/ );
            if ( match )
            {
                cons = match[ 1 ].toLowerCase ();
            }
            types = [ 'boolean' , 'number' , 'string' , 'array' ];
            for ( i = 0 ; i < types.length ; i++ )
            {
                if ( cons === types[ i ] )
                {
                    type = types[ i ];
                    break;
                }
            }
        }
        return type;
    };
    type = __getType ( mixed_expression );

    if ( type === null )
    {
        retstr = 'NULL';
    }
    else if ( type === 'array' || type === 'object' )
    {
        outerIndent = _makeIndent ( idtLevel - 2 );
        innerIndent = _makeIndent ( idtLevel );
        for ( i in mixed_expression )
        {
            value = this.var_export ( mixed_expression[ i ] , 1 , idtLevel + 2 );
            value = typeof value === 'string' ? value.replace ( /</g , '&lt;' ).replace ( />/g , '&gt;' ) : value;
            x[ cnt++ ] = innerIndent + i + ' => ' + (__getType ( mixed_expression[ i ] ) === 'array' ? '\n' : '') + value;
        }
        iret = x.join ( ',\n' );
        retstr = outerIndent + 'array (\n' + iret + '\n' + outerIndent + ')';
    }
    else if ( type === 'function' )
    {
        funcParts = mixed_expression.toString ().match ( /function .*?\((.*?)\) \{([\s\S]*)\}/ );








        retstr = "create_function ('" + funcParts[ 1 ] + "', '" + funcParts[ 2 ].replace ( new RegExp ( "'" , 'g' ) , "\\'" ) + "')";
    }
    else if ( type === 'resource' )
    {
        retstr = 'NULL';
    }
    else
    {
        retstr = typeof mixed_expression !== 'string' ? mixed_expression : "'" + mixed_expression.replace ( /(["'])/g , '\\$1' ).replace ( /\0/g , '\\0' ) + "'";
    }

    if ( !bool_return )
    {
        this.echo ( retstr );
        return null;
    }

    return retstr;
}

function version_compare ( v1 , v2 , operator )
{

    this.php_js = this.php_js || {};
    this.php_js.ENV = this.php_js.ENV || {};
    var i = 0 , x = 0 , compare = 0 ,






        vm                      = {
            'dev' : -6 , 'alpha' : -5 , 'a' : -5 , 'beta' : -4 , 'b' : -4 , 'RC' : -3 , 'rc' : -3 , '#' : -2 , 'p' : 1 , 'pl' : 1
        } ,








        prepVersion             = function ( v )
        {
            v = ('' + v).replace ( /[_\-+]/g , '.' );
            v = v.replace ( /([^.\d]+)/g , '.$1.' ).replace ( /\.{2,}/g , '.' );
            return (!v.length ? [ -8 ] : v.split ( '.' ));
        };
    numVersion = function ( v )
    {
        return !v ? 0 : (isNaN ( v ) ? vm[ v ] || -7 : parseInt ( v , 10 ));
    };
    v1 = prepVersion ( v1 );
    v2 = prepVersion ( v2 );
    x = Math.max ( v1.length , v2.length );
    for ( i = 0 ; i < x ; i++ )
    {
        if ( v1[ i ] == v2[ i ] )
        {
            continue;
        }
        v1[ i ] = numVersion ( v1[ i ] );
        v2[ i ] = numVersion ( v2[ i ] );
        if ( v1[ i ] < v2[ i ] )
        {
            compare = -1;
            break;
        }
        else if ( v1[ i ] > v2[ i ] )
        {
            compare = 1;
            break;
        }
    }
    if ( !operator )
    {
        return compare;
    }

    switch ( operator )
    {
        case '>':
        case 'gt':
            return (compare > 0);
        case '>=':
        case 'ge':
            return (compare >= 0);
        case '<=':
        case 'le':
            return (compare <= 0);
        case '==':
        case '=':
        case 'eq':
            return (compare === 0);
        case '<>':
        case '!=':
        case 'ne':
            return (compare !== 0);
        case '':
        case '<':
        case 'lt':
            return (compare < 0);
        default:
            return null;
    }
}

function vprintf ( format , args )
{

    var body , elmt;
    var ret = '' , d = this.window.document;

    var HTMLNS = 'http://www.w3.org/1999/xhtml';
    body = d.getElementsByTagNameNS ? (d.getElementsByTagNameNS ( HTMLNS , 'body' )[ 0 ] ? d.getElementsByTagNameNS ( HTMLNS , 'body' )[ 0 ] : d.documentElement.lastChild) : d.getElementsByTagName ( 'body' )[ 0 ];

    if ( !body )
    {
        return false;
    }

    ret = this.sprintf.apply ( this , [ format ].concat ( args ) );

    elmt = d.createTextNode ( ret );
    body.appendChild ( elmt );

    return ret.length;
}

function vsprintf ( format , args )
{

    return this.sprintf.apply ( this , [ format ].concat ( args ) );
}

function wordwrap ( str , int_width , str_break , cut )
{

    var m = ((arguments.length >= 2) ? arguments[ 1 ] : 75);
    var b = ((arguments.length >= 3) ? arguments[ 2 ] : '\n');
    var c = ((arguments.length >= 4) ? arguments[ 3 ] : false);

    var i , j , l , s , r;

    str += '';

    if ( m < 1 )
    {
        return str;
    }

    for ( i = -1, l = (r = str.split ( /\r\n|\n|\r/ )).length ; ++i < l ; r[ i ] += s )
    {
        for ( s = r[ i ], r[ i ] = '' ; s.length > m ; r[ i ] += s.slice ( 0 , j ) + ((s = s.slice ( j )).length ? b : '') )
        {
            j = c == 2 || (j = s.slice ( 0 , m + 1 ).match ( /\S*(\s)?$/ ))[ 1 ] ? m : j.input.length - j[ 0 ].length || c == 1 && m || j.input.length + (j = s.slice ( m ).match ( /^\S*/ ))[ 0 ].length;
        }
    }

    return r.join ( '\n' );
}

function xdiff_string_diff ( old_data , new_data , context_lines , minimal )
{


    var i                                                                                                                = 0 , j                                                                                                        = 0 , k                                                                                                = 0 , ori_hunk_start , new_hunk_start , ori_hunk_end , new_hunk_end , ori_hunk_line_no , new_hunk_line_no ,
        ori_hunk_size , new_hunk_size ,
        MAX_CONTEXT_LINES                                                                                                = Number.POSITIVE_INFINITY , MIN_CONTEXT_LINES = 0 , DEFAULT_CONTEXT_LINES = 3 ,//
        HEADER_PREFIX                                                                                                    = '@@ ' , HEADER_SUFFIX = ' @@' , ORIGINAL_INDICATOR = '-' , NEW_INDICATOR = '+' , RANGE_SEPARATOR = ',' ,
        CONTEXT_INDICATOR = ' ' , DELETION_INDICATOR = '-' , ADDITION_INDICATOR = '+' , ori_lines , new_lines , NEW_LINE = '\n' , /**
         * Trims string
         */
        trim                                                                                                             = function ( text )
        {
            if ( typeof text !== 'string' )
            {
                throw new Error ( 'String parameter required' );
            }

            return text.replace ( /(^\s*)|(\s*$)/g , '' );
        } , /**
         * Verifies type of arguments
         */
        verify_type                                                                                                      = function ( type )
        {
            var args                                                                                                                        = arguments , args_len                                                                                                 = arguments.length ,
                basic_types = [ 'number' , 'boolean' , 'string' , 'function' , 'object' , 'undefined' ] , basic_type , i , j , type_of_type = typeof type;
            if ( type_of_type !== 'string' && type_of_type !== 'function' )
            {
                throw new Error ( 'Bad type parameter' );
            }

            if ( args_len < 2 )
            {
                throw new Error ( 'Too few arguments' );
            }

            if ( type_of_type === 'string' )
            {
                type = trim ( type );

                if ( type === '' )
                {
                    throw new Error ( 'Bad type parameter' );
                }

                for ( j = 0 ; j < basic_types.length ; j++ )
                {
                    basic_type = basic_types[ j ];

                    if ( basic_type == type )
                    {
                        for ( i = 1 ; i < args_len ; i++ )
                        {
                            if ( typeof args[ i ] !== type )
                            {
                                throw new Error ( 'Bad type' );
                            }
                        }

                        return;
                    }
                }

                throw new Error ( 'Bad type parameter' );
            }


            for ( i = 1 ; i < args_len ; i++ )
            {
                if ( !(args[ i ] instanceof type) )
                {
                    throw new Error ( 'Bad type' );
                }
            }
        } , /**
         * Checks if the specified array contains an element with specified value
         */
        has_value                                                                                                        = function ( array , value )
        {
            var i;
            verify_type ( Array , array );

            for ( i = 0 ; i < array.length ; i++ )
            {
                if ( array[ i ] === value )
                {
                    return true;
                }
            }

            return false;
        } , /**
         * Checks the type of arguments
         * @param {String | Function} type Specifies the desired type
         * @return {Boolean} Return true if all arguments after the type argument are of specified type. Else false
         */
        are_type_of                                                                                                      = function ( type )
        {
            var args                                                                                                                        = arguments , args_len                                                                                                 = arguments.length ,
                basic_types = [ 'number' , 'boolean' , 'string' , 'function' , 'object' , 'undefined' ] , basic_type , i , j , type_of_type = typeof type;
            if ( type_of_type !== 'string' && type_of_type !== 'function' )
            {
                throw new Error ( 'Bad type parameter' );
            }

            if ( args_len < 2 )
            {
                throw new Error ( 'Too few arguments' );
            }

            if ( type_of_type === 'string' )
            {
                type = trim ( type );

                if ( type === '' )
                {
                    return false;
                }

                for ( j = 0 ; j < basic_types.length ; j++ )
                {
                    basic_type = basic_types[ j ];

                    if ( basic_type == type )
                    {
                        for ( i = 1 ; i < args_len ; i++ )
                        {
                            if ( typeof args[ i ] != type )
                            {
                                return false;
                            }
                        }

                        return true;
                    }
                }

                throw new Error ( 'Bad type parameter' );
            }


            for ( i = 1 ; i < args_len ; i++ )
            {
                if ( !(args[ i ] instanceof type) )
                {
                    return false;
                }
            }

            return true;
        } , /*
         * Initialize and return an array with specified size and initial value
         */
        get_initialized_array                                                                                            = function ( array_size , init_value )
        {
            var array = [] , i;
            verify_type ( 'number' , array_size );

            for ( i = 0 ; i < array_size ; i++ )
            {
                array.push ( init_value );
            }

            return array;
        } , /**
         * Splits text into lines and return as a string array
         */
        split_into_lines                                                                                                 = function ( text )
        {
            verify_type ( 'string' , text );

            if ( text === '' )
            {
                return [];
            }
            return text.split ( '\n' );
        } , is_empty_array                                                                                               = function ( obj )
        {
            return are_type_of ( Array , obj ) && obj.length === 0;
        } , /**
         * Finds longest common sequence between two sequences
         * @see {@link http://wordaligned.org/articles/longest-common-subsequence}
         */
        find_longest_common_sequence                                                                                     = function ( seq1 , seq2 , seq1_is_in_lcs , seq2_is_in_lcs )
        {
            if ( !are_type_of ( Array , seq1 , seq2 ) )
            {
                throw new Error ( 'Array parameters are required' );
            }


            if ( is_empty_array ( seq1 ) || is_empty_array ( seq2 ) )
            {
                return [];
            }


            var lcs_lens = function ( xs , ys )
                {
                    var i , j , prev , curr = get_initialized_array ( ys.length + 1 , 0 );

                    for ( i = 0 ; i < xs.length ; i++ )
                    {
                        prev = curr.slice ( 0 );
                        for ( j = 0 ; j < ys.length ; j++ )
                        {
                            if ( xs[ i ] === ys[ j ] )
                            {
                                curr[ j + 1 ] = prev[ j ] + 1;
                            }
                            else
                            {
                                curr[ j + 1 ] = Math.max ( curr[ j ] , prev[ j + 1 ] );
                            }
                        }
                    }

                    return curr;
                } ,
                find_lcs = function ( xs , xidx , xs_is_in , ys )
                {
                    var i , xb , xe , ll_b , ll_e , pivot , max , yb , ye , nx = xs.length , ny = ys.length;

                    if ( nx === 0 )
                    {
                        return [];
                    }
                    if ( nx === 1 )
                    {
                        if ( has_value ( ys , xs[ 0 ] ) )
                        {
                            xs_is_in[ xidx ] = true;
                            return [ xs[ 0 ] ];
                        }
                        return [];
                    }
                    i = Math.floor ( nx / 2 );
                    xb = xs.slice ( 0 , i );
                    xe = xs.slice ( i );
                    ll_b = lcs_lens ( xb , ys );
                    ll_e = lcs_lens ( xe.slice ( 0 ).reverse () , ys.slice ( 0 ).reverse () );

                    pivot = 0;
                    max = 0;
                    for ( j = 0 ; j <= ny ; j++ )
                    {
                        if ( ll_b[ j ] + ll_e[ ny - j ] > max )
                        {
                            pivot = j;
                            max = ll_b[ j ] + ll_e[ ny - j ];
                        }
                    }
                    yb = ys.slice ( 0 , pivot );
                    ye = ys.slice ( pivot );
                    return find_lcs ( xb , xidx , xs_is_in , yb ).concat ( find_lcs ( xe , xidx + i , xs_is_in , ye ) );
                };


            find_lcs ( seq1 , 0 , seq1_is_in_lcs , seq2 );

            return find_lcs ( seq2 , 0 , seq2_is_in_lcs , seq1 );
        };

    if ( are_type_of ( 'string' , old_data , new_data ) === false )
    {
        return false;
    }

    if ( old_data == new_data )
    {
        return '';
    }

    if ( typeof context_lines !== 'number' || context_lines > MAX_CONTEXT_LINES || context_lines < MIN_CONTEXT_LINES )
    {
        context_lines = DEFAULT_CONTEXT_LINES;
    }

    ori_lines = split_into_lines ( old_data );
    new_lines = split_into_lines ( new_data );
    var ori_len                                                                                                           = ori_lines.length , new_len = new_lines.length , ori_is_in_lcs = get_initialized_array ( ori_len , false ) ,
        new_is_in_lcs                                                                                                     = get_initialized_array ( new_len , false ) ,
        lcs_len = find_longest_common_sequence ( ori_lines , new_lines , ori_is_in_lcs , new_is_in_lcs ).length , unidiff = '';

    if ( lcs_len === 0 )
    {
        unidiff = HEADER_PREFIX + ORIGINAL_INDICATOR + (ori_len > 0 ? '1' : '0') + RANGE_SEPARATOR + ori_len + ' ' + NEW_INDICATOR + (new_len > 0 ? '1' : '0') + RANGE_SEPARATOR + new_len + HEADER_SUFFIX;

        for ( i = 0 ; i < ori_len ; i++ )
        {
            unidiff += NEW_LINE + DELETION_INDICATOR + ori_lines[ i ];
        }

        for ( j = 0 ; j < new_len ; j++ )
        {
            unidiff += NEW_LINE + ADDITION_INDICATOR + new_lines[ j ];
        }

        return unidiff;
    }

    var leading_context = [] , trailing_context = [] , actual_leading_context = [] , actual_trailing_context = [] ,


        regularize_leading_context                                                                           = function ( context )
        {
            if ( context.length === 0 || context_lines === 0 )
            {
                return [];
            }

            var context_start_pos = Math.max ( context.length - context_lines , 0 );

            return context.slice ( context_start_pos );
        } ,


        regularize_trailing_context                                                                          = function ( context )
        {
            if ( context.length === 0 || context_lines === 0 )
            {
                return [];
            }

            return context.slice ( 0 , Math.min ( context_lines , context.length ) );
        };

    while (i < ori_len && ori_is_in_lcs[ i ] === true && new_is_in_lcs[ i ] === true)
    {
        leading_context.push ( ori_lines[ i ] );
        i++;
    }

    j = i;
    k = i;
    ori_hunk_start = i;
    new_hunk_start = j;
    ori_hunk_end = i;
    new_hunk_end = j;

    while (i < ori_len || j < new_len)
    {
        while (i < ori_len && ori_is_in_lcs[ i ] === false)
        {
            i++;
        }
        ori_hunk_end = i;

        while (j < new_len && new_is_in_lcs[ j ] === false)
        {
            j++;
        }
        new_hunk_end = j;


        trailing_context = [];
        while (i < ori_len && ori_is_in_lcs[ i ] === true && j < new_len && new_is_in_lcs[ j ] === true)
        {
            trailing_context.push ( ori_lines[ i ] );
            k++;
            i++;
            j++;
        }

        if ( k >= lcs_len ||
             trailing_context.length >= 2 * context_lines )
        {
            if ( trailing_context.length < 2 * context_lines )
            {
                trailing_context = [];


                i = ori_len;
                j = new_len;


                ori_hunk_end = ori_len;
                new_hunk_end = new_len;
            }




            actual_leading_context = regularize_leading_context ( leading_context );
            actual_trailing_context = regularize_trailing_context ( trailing_context );

            ori_hunk_start -= actual_leading_context.length;
            new_hunk_start -= actual_leading_context.length;
            ori_hunk_end += actual_trailing_context.length;
            new_hunk_end += actual_trailing_context.length;

            ori_hunk_line_no = ori_hunk_start + 1;
            new_hunk_line_no = new_hunk_start + 1;
            ori_hunk_size = ori_hunk_end - ori_hunk_start;
            new_hunk_size = new_hunk_end - new_hunk_start;


            unidiff += HEADER_PREFIX + ORIGINAL_INDICATOR + ori_hunk_line_no + RANGE_SEPARATOR + ori_hunk_size + ' ' + NEW_INDICATOR + new_hunk_line_no + RANGE_SEPARATOR + new_hunk_size + HEADER_SUFFIX + NEW_LINE;


            while (ori_hunk_start < ori_hunk_end || new_hunk_start < new_hunk_end)
            {
                if ( ori_hunk_start < ori_hunk_end && ori_is_in_lcs[ ori_hunk_start ] === true && new_is_in_lcs[ new_hunk_start ] === true )
                {
                    unidiff += CONTEXT_INDICATOR + ori_lines[ ori_hunk_start ] + NEW_LINE;
                    ori_hunk_start++;
                    new_hunk_start++;
                }
                else if ( ori_hunk_start < ori_hunk_end && ori_is_in_lcs[ ori_hunk_start ] === false )
                {
                    unidiff += DELETION_INDICATOR + ori_lines[ ori_hunk_start ] + NEW_LINE;
                    ori_hunk_start++;
                }
                else if ( new_hunk_start < new_hunk_end && new_is_in_lcs[ new_hunk_start ] === false )
                {
                    unidiff += ADDITION_INDICATOR + new_lines[ new_hunk_start ] + NEW_LINE;
                    new_hunk_start++;
                }
            }


            ori_hunk_start = i;
            new_hunk_start = j;
            leading_context = trailing_context;
        }
    }

    if ( unidiff.length > 0 && unidiff.charAt ( unidiff.length ) === NEW_LINE )
    {
        unidiff = unidiff.slice ( 0 , -1 );
    }

    return unidiff;
}

function xdiff_string_patch ( originalStr , patch , flags , error )
{

    var getNativeFlags                                                                                         = function ( regex )
        {
            return (regex.global ? 'g' : '') + (regex.ignoreCase ? 'i' : '') + (regex.multiline ? 'm' : '') + (regex.extended ? 'x' : '') +
                   (regex.sticky ? 'y' : '');
        } , cbSplit                                                                                            = function ( string , sep /* separator */ )
        {

            if ( !(sep instanceof RegExp) )
            {
                return String.prototype.split.apply ( string , arguments );
            }
            var str = String ( string ) , output = [] , lastLastIndex = 0 , match , lastLength , limit = Infinity ,



                x                                                                                      = sep._xregexp , s = new RegExp ( sep.source , getNativeFlags ( sep ) + 'g' );
            if ( x )
            {
                s._xregexp = {
                    source : x.source , captureNames : x.captureNames ? x.captureNames.slice ( 0 ) : null
                };
            }

            while ((match = s.exec ( str )))
            {
                if ( s.lastIndex > lastLastIndex )
                {
                    output.push ( str.slice ( lastLastIndex , match.index ) );

                    if ( match.length > 1 && match.index < str.length )
                    {
                        Array.prototype.push.apply ( output , match.slice ( 1 ) );
                    }

                    lastLength = match[ 0 ].length;
                    lastLastIndex = s.lastIndex;

                    if ( output.length >= limit )
                    {
                        break;
                    }
                }

                if ( s.lastIndex === match.index )
                {
                    s.lastIndex++;
                }
            }

            if ( lastLastIndex === str.length )
            {
                if ( !s.test ( '' ) || lastLength )
                {
                    output.push ( '' );
                }
            }
            else
            {
                output.push ( str.slice ( lastLastIndex ) );
            }

            return output.length > limit ? output.slice ( 0 , limit ) : output;
        } , i                                                                                                  = 0 , ll                                                                                         = 0 , ranges = [] , lastLinePos = 0 , firstChar = '' , rangeExp = /^@@\s+-(\d+),(\d+)\s+\+(\d+),(\d+)\s+@@$/ ,
        lineBreaks = /\r?\n/ , lines = cbSplit ( patch.replace ( /(\r?\n)+$/ , '' ) , lineBreaks ) , origLines = cbSplit ( originalStr , lineBreaks ) ,
        newStrArr                                                                                              = [] , linePos = 0 , errors = '' ,
        optTemp                                                                                                = 0 , OPTS = {
            'XDIFF_PATCH_NORMAL' : 1 , 'XDIFF_PATCH_REVERSE' : 2 , 'XDIFF_PATCH_IGNORESPACE' : 4
        };

    if ( typeof originalStr !== 'string' || !patch )
    {
        return false;
    }
    if ( !flags )
    {
        flags = 'XDIFF_PATCH_NORMAL';
    }

    if ( typeof flags !== 'number' )
    {
        flags = [].concat ( flags );
        for ( i = 0 ; i < flags.length ; i++ )
        {

            if ( OPTS[ flags[ i ] ] )
            {
                optTemp = optTemp | OPTS[ flags[ i ] ];
            }
        }
        flags = optTemp;
    }

    if ( flags & OPTS.XDIFF_PATCH_NORMAL )
    {
        for ( i = 0, ll = lines.length ; i < ll ; i++ )
        {
            ranges = lines[ i ].match ( rangeExp );
            if ( ranges )
            {
                lastLinePos = linePos;
                linePos = ranges[ 1 ] - 1;
                while (lastLinePos < linePos)
                {
                    newStrArr[ newStrArr.length ] = origLines[ lastLinePos++ ];
                }
                while (lines[ ++i ] && (rangeExp.exec ( lines[ i ] )) === null)
                {
                    firstChar = lines[ i ].charAt ( 0 );
                    switch ( firstChar )
                    {
                        case '-':
                            ++linePos;
                            break;
                        case '+':
                            newStrArr[ newStrArr.length ] = lines[ i ].slice ( 1 );
                            break;
                        case ' ':
                            newStrArr[ newStrArr.length ] = origLines[ linePos++ ];
                            break;
                        default:
                            throw 'Unrecognized initial character in unidiff line';
                    }
                }
                if ( lines[ i ] )
                {
                    i--;
                }
            }
        }
        while (linePos > 0 && linePos < origLines.length)
        {
            newStrArr[ newStrArr.length ] = origLines[ linePos++ ];
        }
    }
    else if ( flags & OPTS.XDIFF_PATCH_REVERSE )
    {
        for ( i = 0, ll = lines.length ; i < ll ; i++ )
        {
            ranges = lines[ i ].match ( rangeExp );
            if ( ranges )
            {
                lastLinePos = linePos;
                linePos = ranges[ 3 ] - 1;
                while (lastLinePos < linePos)
                {
                    newStrArr[ newStrArr.length ] = origLines[ lastLinePos++ ];
                }
                while (lines[ ++i ] && (rangeExp.exec ( lines[ i ] )) === null)
                {
                    firstChar = lines[ i ].charAt ( 0 );
                    switch ( firstChar )
                    {
                        case '-':
                            newStrArr[ newStrArr.length ] = lines[ i ].slice ( 1 );
                            break;
                        case '+':
                            ++linePos;
                            break;
                        case ' ':
                            newStrArr[ newStrArr.length ] = origLines[ linePos++ ];
                            break;
                        default:
                            throw 'Unrecognized initial character in unidiff line';
                    }
                }
                if ( lines[ i ] )
                {
                    i--;
                }
            }
        }
        while (linePos > 0 && linePos < origLines.length)
        {
            newStrArr[ newStrArr.length ] = origLines[ linePos++ ];
        }
    }
    if ( typeof error === 'string' )
    {
        this.window[ error ] = errors;
    }
    return newStrArr.join ( '\n' );
}


function hex2bin ( s )
{
    var ret = [];
    var i = 0;
    var l;
    s += '';
    for ( l = s.length ; i < l ; i += 2 )
    {
        var c = parseInt ( s.substr ( i , 1 ) , 16 );
        var k = parseInt ( s.substr ( i + 1 , 1 ) , 16 );
        if ( isNaN ( c ) || isNaN ( k ) )
        {
            return false;
        }
        ret.push ( (c << 4) | k );
    }
    return String.fromCharCode.apply ( String , ret );
}

// function str_split ( string , split_length )
// {
//
//     if ( split_length === null )
//     {
//         split_length = 1;
//     }
//     if ( string === null || split_length < 1 )
//     {
//         return false;
//     }
//     string += '';
//     var chunks = [] , pos = 0 , len = string.length;
//     while (pos < len)
//     {
//         chunks.push ( string.slice ( pos , pos += split_length ) );
//     }
//
//     return chunks;
// }
//


function str_split (string, splitLength) { // eslint-disable-line camelcase
                                           //  discuss at: http://locutus.io/php/str_split/
                                           // original by: Martijn Wieringa
                                           // improved by: Brett Zamir (http://brett-zamir.me)
                                           // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
                                           //  revised by: Theriault (https://github.com/Theriault)
                                           //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
                                           //    input by: Bjorn Roesbeke (http://www.bjornroesbeke.be/)
                                           //   example 1: str_split('Hello Friend', 3)
                                           //   returns 1: ['Hel', 'lo ', 'Fri', 'end']

    splitLength = typeof splitLength === "undefined" ? 1 : splitLength ;
    if (splitLength === null) {
        splitLength = 1
    }
    if (string === null || splitLength < 1) {
        return false
    }

    string += ''
    var chunks = []
    var pos = 0
    var len = string.length

    while (pos < len) {
        chunks.push(string.slice(pos, pos += splitLength))
    }

    return chunks
}




