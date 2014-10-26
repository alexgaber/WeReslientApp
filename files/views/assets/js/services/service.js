/*
 * Service settings
 */
var SendGrid_Settings = {
    "api_user": "intalex",
    "api_key": "magic1"
}

/*
 * Services
 */
var CameraService = new Apperyio.CameraService({});
var ContactsService = new Apperyio.ContactsService({});
var GeolocationService = new Apperyio.GeolocationService({});

var SendGrid_MailSend = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'proxyHeaders': {
        'appery-proxy-url': 'http://sendgrid.com/api/mail.send.json',
        'appery-transformation': 'checkTunnel',
        'appery-key': '1414284597234',
        'appery-rest': '1460589'
    },
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': SendGrid_Settings
});