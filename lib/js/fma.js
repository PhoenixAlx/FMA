/*
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 */
var propierties=null;
function loadFMA(){
    var propiertiesLoad=null;
    loadJSON(function(response) {
    // Do Something with the response e.g.
    propiertiesLoad = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    console.log(propiertiesLoad[0].modulesActive);

    },"fma.json");
    console.log(propiertiesLoad[0].modulesActive);
    propierties=propiertiesLoad;
    loadModule("main");
}

function loadJSON(callback,nameJson) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', nameJson, true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}
function loadJsonModule(name){
    
}
function loadJsModule(name){
}
function loadCssModule(name){
}
function loadHtmlModule(name){
    file=propierties[0].pathModules+"/"+name+"index.html";
    $(function(){
        $('#module').load(file); 
    });
}
function loadModule(name){
    
    loadHtmlModule(name);
    
}
function goModule(nameModule){
    window.open("modules/"+nameModule+"/index.html","_self");
    return 0;
}
window.onload=loadFMA();

