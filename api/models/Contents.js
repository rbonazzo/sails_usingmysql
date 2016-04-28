/**
 * Contents.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'contents',
    adapter: 'localMysqlServer',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
        idcontents: {
            type: 'int',
            unique: true,
            primaryKey: true,
            //id: true
        },
        contentid: {
            type: 'string',
            unique: true
        },
        contentype: {
            type: 'string'
        },
        descr: {
            type: 'string'
        },
        status: {
            type: 'string'
        },
        workxml: {
            type: 'string'
        },
        created: {
            type: 'datetime'
        },
        lastmodified: {
            type: 'datetime'
        },
        onlinexml: {
            type: 'string'
        },
        maingroup: {
            type: 'string'
        },
        currentversion: {
            type: 'string'
        },
        lasteditor: {
            type: 'string'
        }
    }
};