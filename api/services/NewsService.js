module.exports = {
    getNews: function (next) {
        News.find().exec(function (err, news) {
            if (err) throw err;
            //console.log('The user records: ', news.length);
            for (idx in news) {
                var newContent = {
                    idcontents: idx,
                    contentype: 'ANW',
                    contentid: 'ANW' + idx,
                    descr: news[idx].title,
                    status: 'PUBLIC',
                    created: new Date(),
                    lastmodified: new Date(),
                    maingroup: 'ufficio_stampa',
                    currentversion: '1.0',
                    lasteditor: 'admin',
                    workxml: '<?xml version="1.0" encoding="UTF-8"?><content id="ANW' + idx + '" typecode="ANW" typedescr="Archivio News"><descr>' + news[idx].title + '</descr><groups mainGroup="ufficio_stampa" /><categories><category id="archivio" /></categories><attributes><attribute name="title" attributetype="Monotext"><monotext>' + news[idx].title + '</monotext></attribute><attribute name="abstract_fonte" attributetype="Hypertext"><hypertext lang="it"><![CDATA[_Abstract_]]>' + news[idx].abstract_fonte + '</hypertext></attribute><attribute name="text" attributetype="Hypertext"><hypertext lang="it"><![CDATA[_descr]]>' + news[idx].descr + '</hypertext></attribute><attribute name="img_thumb" attributetype="Monotext"><monotext>' + news[idx].img_thumb + '</monotext></attribute><attribute name="img_thumb_hp_col3" attributetype="Monotext"><monotext>' + news[idx].img_thumb_hp_colonna3 + '</monotext ></attribute > <attribute name="img_zoom" attributetype="Monotext"><monotext>' + news[idx].img_zoom + '</monotext></attribute> <attribute name="img_zoom_homepage" attributetype="Monotext"><monotext>' + news[idx].img_zoom_homepage + '</monotext></attribute> <attribute name="img_zoom_homepage2" attributetype="Monotext"><monotext>' + news[idx].img_zoom_homepage2 + '</monotext></attribute> <attribute name="img_zoom_homechannel" attributetype="Monotext"><monotext>' + news[idx].img_zoom_homechannel + '</monotext></attribute> <attribute name="img_zoom_archive" attributetype="Monotext"><monotext>' + news[idx].img_zoom_archive + '</monotext></attribute> <attribute name="img_zoom_full" attributetype="Monotext"><monotext>' + news[idx].img_zoom_full + '</monotext></attribute> <attribute name="img_zoom_didascalia" attributetype="Monotext"><monotext>' + news[idx].img_zoom_didascalia + '</monotext></attribute> <attribute name="hp_media_url" attributetype="Monotext"><monotext>' + news[idx].hp_media_url + '</monotext></attribute> <attribute name="hp_media_title" attributetype="Monotext"><monotext>' + news[idx].hp_media_title + '</monotext></attribute> <attribute name="id_homepage_news" attributetype="Monotext"><monotext>' + news[idx].id_homepage_news_media + '</monotext></attribute> <attribute name="is_avviso_mappa" attributetype="Monotext"><monotext>' + news[idx].is_avviso_mappa + '</monotext></attribute> <attribute name="id_youtube" attributetype="Monotext"><monotext>' + news[idx].id_youtube + '</monotext></attribute> <attribute name="foto_video" attributetype="Monotext"><monotext>' + news[idx].foto_video + '</monotext></attribute> <attribute name="id_photogallery_corr" attributetype="Monotext"><monotext>' + news[idx].id_photogallery_correlata + '</monotext></attribute></attributes > <status>PUBLIC</status> <version>2.0</version> <lastEditor>admin</lastEditor> <created>20160428090000</created> <lastModified>20160428090000</lastModified></content >',
                    onlinexml: '<?xml version="1.0" encoding="UTF-8"?><content id="ANW' + idx + '" typecode="ANW" typedescr="Archivio News"><descr>' + news[idx].title + '</descr><groups mainGroup="ufficio_stampa" /><categories><category id="archivio" /></categories><attributes><attribute name="title" attributetype="Monotext"><monotext>' + news[idx].title + '</monotext></attribute><attribute name="abstract_fonte" attributetype="Hypertext"><hypertext lang="it"><![CDATA[_Abstract_]]>' + news[idx].abstract_fonte + '</hypertext></attribute><attribute name="text" attributetype="Hypertext"><hypertext lang="it"><![CDATA[_descr]]>' + news[idx].descr + '</hypertext></attribute><attribute name="img_thumb" attributetype="Monotext"><monotext>' + news[idx].img_thumb + '</monotext></attribute><attribute name="img_thumb_hp_col3" attributetype="Monotext"><monotext>' + news[idx].img_thumb_hp_colonna3 + '</monotext ></attribute > <attribute name="img_zoom" attributetype="Monotext"><monotext>' + news[idx].img_zoom + '</monotext></attribute> <attribute name="img_zoom_homepage" attributetype="Monotext"><monotext>' + news[idx].img_zoom_homepage + '</monotext></attribute> <attribute name="img_zoom_homepage2" attributetype="Monotext"><monotext>' + news[idx].img_zoom_homepage2 + '</monotext></attribute> <attribute name="img_zoom_homechannel" attributetype="Monotext"><monotext>' + news[idx].img_zoom_homechannel + '</monotext></attribute> <attribute name="img_zoom_archive" attributetype="Monotext"><monotext>' + news[idx].img_zoom_archive + '</monotext></attribute> <attribute name="img_zoom_full" attributetype="Monotext"><monotext>' + news[idx].img_zoom_full + '</monotext></attribute> <attribute name="img_zoom_didascalia" attributetype="Monotext"><monotext>' + news[idx].img_zoom_didascalia + '</monotext></attribute> <attribute name="hp_media_url" attributetype="Monotext"><monotext>' + news[idx].hp_media_url + '</monotext></attribute> <attribute name="hp_media_title" attributetype="Monotext"><monotext>' + news[idx].hp_media_title + '</monotext></attribute> <attribute name="id_homepage_news" attributetype="Monotext"><monotext>' + news[idx].id_homepage_news_media + '</monotext></attribute> <attribute name="is_avviso_mappa" attributetype="Monotext"><monotext>' + news[idx].is_avviso_mappa + '</monotext></attribute> <attribute name="id_youtube" attributetype="Monotext"><monotext>' + news[idx].id_youtube + '</monotext></attribute> <attribute name="foto_video" attributetype="Monotext"><monotext>' + news[idx].foto_video + '</monotext></attribute> <attribute name="id_photogallery_corr" attributetype="Monotext"><monotext>' + news[idx].id_photogallery_correlata + '</monotext></attribute></attributes > <status>PUBLIC</status> <version>2.0</version> <lastEditor>admin</lastEditor> <created>20160428090000</created> <lastModified>20160428090000</lastModified></content >'
                }
                Contents.create(newContent).exec(function (err, result) {
                    if (err) {
                        console.log('Error creating new content ' + err);
                    }
                });
                console.log(news[idx].title);
            }
        });
    },
    getText: function (next) {
        News.query('SELECT news.text FROM news where idnews>0', function (err, news) {
            if (err) throw err;
            next(news);
        });
    }
};