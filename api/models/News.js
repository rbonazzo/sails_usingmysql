/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'news',
    adapter: 'localMysqlServer',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        idnews: {
            type: 'int',
            unique: true,
            primaryKey: true,
            id: true
        },
        id_autore: {
            type: 'int'
        },
        id_news_categ: {
            type: 'int'
        },
        img_thumb: {
            type: 'string'
        },
        img_thumb_hp_colonna3: {
            type: 'string'
        },
        img_zoom: {
            type: 'string'
        },
        img_zoom_homepage: {
            type: 'string'
        },
        img_zoom_homepage2: {
            type: 'string'
        },
        img_zoom_homechannel: {
            type: 'string'
        },
        img_zoom_archive: {
            type: 'string'
        },
        img_zoom_full: {
            type: 'string'
        },
        img_zoom_didascalia: {
            type: 'string'
        },
        date: {
            type: 'datetime'
        },
        data_scadenza: {
            type: 'datetime'
        },
        title: {
            type: 'string'
        },
        abstract_fonte: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        attivo: {
            type: 'int'
        },
        data_inserimento: {
            type: 'datetime'
        },
        data_modifica: {
            type: 'datetime'
        },
        idadm_amministratore_inserimento: {
            type: 'int'
        },
        idadm_amministratore_modifica: {
            type: 'int'
        },
        ip_addr: {
            type: 'string'
        },
        pie_pagina: {
            type: 'string'
        },
        parole_chiave_ricerca: {
            type: 'string'
        },
        in_newsletter: {
            type: 'int'
        },
        in_evidenza: {
            type: 'int'
        },
        articolo_riservato: {
            type: 'int'
        },
        hp_media_url: {
            type: 'string'
        },
        hp_media_title: {
            type: 'string'
        },
        id_homepage_news_media: {
            type: 'int'
        },
        is_avviso_mappa: {
            type: 'int'
        },
        id_youtube: {
            type: 'int'
        },
        foto_video: {
            type: 'int'
        },
        id_photogallery_correlata: {
            type: 'int'
        },
        toJSON: function () {
            var obj = this.toObject();
            delete obj.id_autore;
            delete obj.id_news_categ;
            delete obj.date;
            delete obj.data_scadenza;
            delete obj.attivo;
            delete obj.data_inserimento;
            delete obj.data_modifica;
            delete obj.idadm_amministratore_inserimento;
            delete obj.idadm_amministratore_modifica;
            delete obj.ip_addr;
            delete obj.pie_pagina;
            delete obj.parole_chiave_ricerca;
            delete obj.in_newsletter;
            delete obj.in_evidenza;
            delete obj.articolo_riservato;
            return obj;
        }
    }

};
