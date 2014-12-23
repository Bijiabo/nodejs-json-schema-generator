'use strict';
/**
 * Created by bijiabo on 14/12/23.
 */
var AST = require('./lib/ast'),
    COMPILER = require('./lib/compiler');

var jsonSchemaGenerator = function(json){
    if(!this instanceof  jsonSchemaGenerator)
    {
        return new jsonSchemaGenerator(json);
    }

    this.json = json;
}

jsonSchemaGenerator.prototype.generateSchema = function(){
    var ast = new AST();
    ast.build(this.json);

    var compiler = new COMPILER();
    compiler.compile(ast.tree);

    return compiler.schema;
}

module.exports  = jsonSchemaGenerator;