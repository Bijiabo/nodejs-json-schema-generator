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
        movie : ['spider man']
    },
    website : 'http://cafa.me',
    phone : {
        number : 15901026760,
        area : 86
    }
};

var jsg = new JSG(testData,"moreii");
var jsg_schema = jsg.generateSchema();
console.log(jsg_schema);

var jsg_editorSchema = jsg.generateEditorSchema();
console.log(jsg_editorSchema);
console.log(jsg_editorSchema.properties.like.properties.movie);
console.log(jsg_editorSchema.properties.like.properties.book);

console.log(JSON.stringify(jsg_editorSchema));