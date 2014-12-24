'use strict';
/**
 * Created by bijiabo on 14/12/23.
 */
var AST = require('./lib/ast'),
    utils = require('./lib/utils'),
    COMPILER = require('./lib/compiler');

var jsonSchemaGenerator = function(json,title){
    if(!this instanceof  jsonSchemaGenerator)
    {
        return new jsonSchemaGenerator(json);
    }

    if(utils.isString(title))
    {
        this.title = title;
    }
    else
    {
        this.title = "";
    }

    this.json = json;
}

jsonSchemaGenerator.prototype.generateSchema = function(){
    var ast = new AST();
    ast.build(this.json);

    var compiler = new COMPILER(this.title);
    compiler.compile(ast.tree);
    this.schema = compiler.schema;
    this.editorSchema = this.schema;
    return compiler.schema;
}

jsonSchemaGenerator.prototype.propertiesForeach = function(data,editorSchemaPart){
    for(var key in data)
    {
        if(editorSchemaPart[key])
        {
            if(editorSchemaPart[key].type == 'object')
            {
                this.propertiesForeach(data[key], editorSchemaPart[key]["properties"]);
            }
            else
            {
                if(editorSchemaPart[key].type)
                {
                    if(!editorSchemaPart[key].default)
                    {
                        editorSchemaPart[key].default = {};
                    }
                    editorSchemaPart[key].default = data[key];
                }

            }
        }

    }
}

jsonSchemaGenerator.prototype.generateEditorSchema = function(){
    this.generateSchema();
    this.propertiesForeach(this.json, this.editorSchema.properties);
    return this.editorSchema;
}

module.exports  = jsonSchemaGenerator;