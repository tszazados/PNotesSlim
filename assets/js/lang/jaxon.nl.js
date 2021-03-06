/**
 * translation for: jaxon v.x.x
 * @version: 1.0.0
 * @author: jeffrey <walkingsoul@gmail.com>
 * @copyright jaxon project
 * @license GNU/GPL
 * @package jaxon x.x.x
 * @since v.x.x.x
 * save as UTF-8
 */

if ('undefined' != typeof jaxon.debug) {
    /*
        Array: text
    */
    jaxon.debug.messages = {
        warning: 'FOUTMELDING: ',
        error: 'FOUT: ',
        heading: 'JAXON FOUTMELDINGS BERICHT:\n',
        request: {
            uri: 'URI: ',
            init: 'INITIALISATIE AANVRAAG',
            creating: 'INITIALISATIE OBJECT AANVRAAG',
            starting: 'BEGIN JAXON AANVRAAG',
            preparing: 'VOORBEREIDING AANVRAAG',
            calling: 'AANROEPING: ',
            sending: 'VERZENDING AANVRAAG',
            sent: 'VERZONDEN [{length} bytes]'
        },
        response: {
            long: '...\n[LANG ANTWOORD]\n...',
            success: 'ONTVANGEN [status: {status}, omvang: {length} bytes, Zeit: {duration}ms]:\n',
            content: 'De server retourneert de volgende HTTP-status: {status}\nONTVANGEN:\n{text}',
            redirect: 'De server retourneert een doorverwijzing naar:<br />{location}',
            no_processor: 'Er is geen verwerkingsbestand gespecificeerd om de aanvraag te verwerken.\n',
            check_errors: '.\nBekijk foutmeldingen van de server.'
        },
        processing: {
            parameters: 'VERWERKING PARAMETERS [{count}]',
            no_parameters: 'GEEN PARAMETERS OM TE VERWERKEN',
            calling: 'BEGIN JAXON AANVRAAG (verouderd: gebruik jaxon.request)',
            calling: 'JAXON AANVRAAG ({cmd}, {options})',
            done: 'KLAAR [{duration}ms]'
        }
    };

    /*
        Array: exceptions
    */
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Ongeldig XML-antwoord: het antwoord bevat een onbekende tag: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: XMLHttpRequest is niet beschikbaar, XajaX is uitgeschakeld.';
    jaxon.debug.exceptions[10003] = 'Wachtrij limiet overschreden: kan het object niet in de wachtrij plaatsen, omdat die vol is.';
    jaxon.debug.exceptions[10004] = 'Ongeldig XML-antwoord: het antwoord bevat een onverwachte tag of tekst: {data}.';
    jaxon.debug.exceptions[10005] = 'Ongeldige Request-URI: Ongeldige of ontbrekende URI; automatische detectie faalt; specificeer een URI expliciet.';
    jaxon.debug.exceptions[10006] = 'Ongeldig antwoord bevel: misvormd antwoord bevel ontvangen.';
    jaxon.debug.exceptions[10007] = 'Ongeldig antwoord bevel: Bevel [{data}] is niet bekend.';
    jaxon.debug.exceptions[10008] = 'Element met het ID [{data}] kon niet in het document worden gevonden.';
    jaxon.debug.exceptions[10009] = 'Ongeldige aanvraag: Missende functie parameter - naam.';
    jaxon.debug.exceptions[10010] = 'Ongeldige aanvraag: Missende functie parameter - object.';

    jaxon.debug.lang = {
        isLoaded: true
    };
}

if (typeof jaxon.config != 'undefined' && typeof jaxon.config.status != 'undefined') {
    /*
        Object: update
    */
    jaxon.config.status.update = function() {
        return {
            onRequest: function() {
                window.status = "Verzenden aanvraag...";
            },
            onWaiting: function() {
                window.status = "Wachten op antwoord...";
            },
            onProcessing: function() {
                window.status = "Verwerking...";
            },
            onComplete: function() {
                window.status = "Afgesloten.";
            }
        }
    }
}
