var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    
    return arr.toString();
}
function objToSql(object) {
    var arr = [];

    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            arr.push(key + "=" + object[key]);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function(burgers, callback) {
        var queryString = "SELECT * FROM " + burgers + ";";
        connection.query(queryString, function(err, result){
            if(err) throw err;
            callback(result);
        });
    },

    insertOne: function(table, columns, values, callback) {
        var queryString = "INSERT INTO " + table;

        queryString = queryString + " (";
        queryString = queryString + columns;
        queryString = queryString + ") ";
        queryString = queryString + "VALUES (";
        queryString = queryString + printQuestionMarks(values.length);
        queryString = queryString + "); ";

        console.log(queryString);

        connection.query(queryString, values, function(err,result){
            if(err) throw err;
            callback(result);
        });
    },

    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table;

        queryString = queryString + " SET ";
        queryString = queryString + objToSql(objColVals);
        queryString = queryString + " WHERE ";
        queryString = queryString + condition;

        console.log(queryString);

        connection.query(queryString, function(err, result){
            if(err) throw err;
            callback(result);
        })
    }
}

module.exports = orm;