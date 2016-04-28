/**
 * NewsController
 *
 * @description :: Server-side logic for managing news
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getNews: function (req, res) {
        NewsService.getNews(function (news) {
            res.json(news);
        });
    },
    getText: function (req, res) {
        NewsService.getText(function (news) {
            res.json(news);
        });
    }
};