const orm = require("../config/orm");

const taco = {
    all: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
 
    insert: function(cols, vals, cb) {
      orm.create(cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("tacos", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("tacos", condition, function(res) {
        cb(res);
      });
    }
  };