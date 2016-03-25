/**
 * EntandoController
 *
 * @description :: Server-side logic for managing entandoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // api/controllers/SomeController.js
    test: function (req, res) {
        var http = require('http');

        var options = {
            hostname: 'beta.comune.cagliari.it',
            port:80,
            path: '/portale/api/rs/en/jacms/contentType.json?code=NWS',
            method: 'GET',
        };

        var req = http.request(options, function (response) {
            var responseData = '';
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                responseData += chunk;
            });
            response.once('error', function (err) {
                // Some error handling here, e.g.:
                res.serverError(err);
            });

            response.on('end', function () {
                try {
                    // response available as `responseData` in `yourview`
                    res.json(responseData);
                } catch (e) {
                    sails.log.warn('Could not parse response from options.hostname: ' + e);
                }
            });
        }).end();
    }
}
