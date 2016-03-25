module.exports = {
    getNews: function (next) {
        News.find().exec(function (err, news) {
            if (err) throw err;
            next(news);
        });
    },
    getText: function (next) {
        News.query('SELECT news.text FROM news where id>0', function (err, news) {
            if (err) throw err;
            next(news);
        });
    }
};