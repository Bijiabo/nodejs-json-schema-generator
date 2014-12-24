#nodejs-json-schema-generator

**nodejs-json-schema-generator** is a plugin to generate a **schema** / or a **schema with default value** from a json.

###simple use

require nodejs-json-schema-generator

	var JSG = require('./index');
	
get/set a json

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

instantiation a JSG object

	var jsg = new JSG(testData,"moreii");
	
**get schema**
	
	jsg.generateSchema();
	
**get schema with default value**

	jsg.generateEditorSchema();
	
	