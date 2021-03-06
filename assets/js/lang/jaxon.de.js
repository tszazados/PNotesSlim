/**
 * translation for: jaxon v.x.x
 * @version: 1.0.0
 * @author: mic <info@joomx.com>
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
        warning: 'WARNUNG: ',
        error: 'FEHLER: ',
        heading: 'JAXON FEHLERSUCHE NACHRICHT:\n',
        request: {
            uri: 'URI: ',
            init: 'BEGINNE ANFRAGE',
            creating: 'INITIALISIERE REQUEST OBJEKT',
            starting: 'BEGINNE JAXON ANFRAGE',
            preparing: 'BEREITE REQUEST VOR',
            calling: 'STARTE AUFRUF: ',
            sending: 'SENDE ANFRAGE',
            sent: 'GESENDET [{length} bytes]'
        },
        response: {
            long: '...\n[UMGFANGREICHE ANTWORT]\n...',
            success: 'ERHALTEN [status: {status}, Größe: {length} bytes, Zeit: {duration}ms]:\n',
            content: 'Der Server hat folgenden HTTP-Status zurück gesendet: {status}\nERHALTEN:\n{text}',
            redirect: 'Der Server lieferte einen Redirect nach:<br />{location}',
            no_processor: 'Die vom Server erhaltenen Daten konnten nicht verarbeitet werden.\n',
            check_errors: '.\nPrüfe auf Fehlermeldungen des Servers.'
        },
        processing: {
            parameters: 'PARAMETER IN BEARBEITUNG [{count}]',
            no_parameters: 'KEINE PARAMETER ZU VERARBEITEN',
            calling: 'BEGINNE JAXON CALL (veraltet: verwendet stattdessen jaxon.request)',
            calling: 'JAXON CALL ({cmd}, {options})',
            done: 'ABGESCHLOSSEN [{duration}ms]'
        }
    };

    /*
        Array: exceptions
    */
    jaxon.debug.exceptions = [];
    jaxon.debug.exceptions[10001] = 'Ungültige XML-Antwort: die Antwort enthält ein ungültiges Tag: {data}.';
    jaxon.debug.exceptions[10002] = 'GetRequestObject: XMLHttpRequest ist nicht verfügbar, XajaX ist nicht verfügbar.';
    jaxon.debug.exceptions[10003] = 'Warteschleife-Überlauf: kann Objekt nicht an Warteschleife übergeben da diese voll ist.';
    jaxon.debug.exceptions[10004] = 'Ungültige XML-Antwort: die Antwort enthält einen unerwarteten Tag oder Text: {data}.';
    jaxon.debug.exceptions[10005] = 'Ungültige Request-URI: Ungültige oder Fehlende URI; Autoerkennung fehlgeschlagen; bitte nur eine einzige URI angeben.';
    jaxon.debug.exceptions[10006] = 'Ungültiges Antwort-Befehl: Unvollständiges Objekt zurück erhalten.';
    jaxon.debug.exceptions[10007] = 'Ungültiges Antwort-Befehl: Befehl [{data}] ist nicht bekannt.';
    jaxon.debug.exceptions[10008] = 'Es konnte kein Element mit der ID [{data}] konnte im Dokument gefunden werden.';
    jaxon.debug.exceptions[10009] = 'Ungültige Anfrage: Fehlender Funktionsparameter - name.';
    jaxon.debug.exceptions[10010] = 'Ungültige Anfrage: Fehlender Funktionsparameter - object.';

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
                window.status = 'Sende Anfrage...';
            },
            onWaiting: function() {
                window.status = 'Warten auf Antwort...';
            },
            onProcessing: function() {
                window.status = 'Verarbeitung...';
            },
            onComplete: function() {
                window.status = 'Fertig.';
            }
        }
    }
}
