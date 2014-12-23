/**
 * Created by bijiabo on 14/12/23.
 */

function base() {
    this.name = 'this is the name';
    this.getname = function() {alert(this.name)};
    this.setname = function(name) {this.name = name}
}
module.export = base;