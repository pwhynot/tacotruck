const express = require("express");
const connection = require("../config/connection");

function printQuestionMarks(num) {
   const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    const arr = [];

    for (const key in ob) {
      const value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }

  const orm = {
    selectAll : function (cb){
        connection.query("SELECT * FROM tacos;", function(err, data) {
            if (err) {
            }
            cb(data);
        });
    },
    insertOne: function( cols, vals, cb) {
        const queryString = "INSERT INTO tacos";
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },

    updateOne: function (){
        connection.query(function(err) {
            if (err) throw err;
            connection.query(`UPDATE ${item} FROM tacos`, function (err, res){
                console.log(res);
            })
        });
    },
    delete: function(table, condition, cb) {
        const queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
  };

  module.exports = orm;