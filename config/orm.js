//Import mysql Connection

var connection = require("../config/connection.js");

var orm = {
    all: function (table, callback) {
        var queryString = "select * from " + table + ";";
        connection.query(queryString, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },
    create: function (table, objcolumsandvalues, callback) {
        var queryString = "INSERT INTO " +table+ " SET?";
        
        connection.query(queryString, objcolumsandvalues, function (error, result) {
            if (error) throw error;
            callback(result);
        })
    },
    update: function (table, objcolumsandvalues,condition, callback ) {
        var queryString = "update " + table + " set? where " + condition;
        connection.query(queryString, objcolumsandvalues, function (error, result) {
            if (error) throw error;
            callback(result);
        });
    },
    delete:function(table,condition,callback){
        var queryString = "DELETE FROM " +table+ " where " +condition;
        connection.query(queryString,function(error,result){
            if (error) throw error;
            callback(result);
        })
    }
};

module.exports = orm;