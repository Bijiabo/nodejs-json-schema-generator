/**
 * Created by bijiabo on 14/12/23.
 */
var JSG = require('./index');

var testData = {
    name : 'bijiabo',
    age : 22,
    mail : 'hu@cafa.me',
    like : {
        book : ['Key' , 'MR. J', 'node.js'],
        food : ['baozi', 'noodle'],
        drink : ['tea'],
        move : ['spider man']
    },
    website : 'http://cafa.me',
    phone : {
        number : 15901026760,
        area : 86
    }
};

var jsg = new JSG(testData);
var jsg_schema = jsg.generateSchema();
console.log(jsg_schema);

