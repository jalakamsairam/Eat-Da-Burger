//import the orm to create functions

var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burger", function (res) {
            cb(res);
        });
    },
    create: function (objcolumsandvalues,cb) {
        orm.create("burger", objcolumsandvalues, function (res) {
            cb(res);
        });
    },
    update: function (objcolumsandvalues,condition,cb) {
        orm.update("burger", objcolumsandvalues , condition , function (res) {
            cb(res);
        });
    },
    delete: function(condition,cb){
        orm.delete("burger",condition,function(res){
            cb(res);
        });
    }
};

module.exports = burger;