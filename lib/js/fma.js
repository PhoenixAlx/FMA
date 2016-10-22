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
var propiertiesModule=null;
function loadFMA(){
  
    $.getJSON('fma.json', function (data) {
		propierties=data;
		goModule("main");
		
	});
}




function loadJsonModule(name){
	nameJson=propierties[0].pathModule+name+".json";
	console.log("json "); 
	console.log(nameJson);
	console.log(propierties[0].pathModule);
    $.getJSON(nameJson, function (data) {
		propiertiesModule=data;
		name=propiertiesModule[0].module;
		console.log("getjson "); 
		console.log(name);
		console.log(propierties[0].pathModule);
		if (propiertiesModule[0].subModule!= null && propiertiesModule[0].subModule!="" && propiertiesModule[0].subModule.length>0) {
			propierties[0].pathModule=propierties[0].pathModules+"/"+name+"/";
			
		}
		loadCssModule();
		
	});
    
}
function loadJsModule(){
	if (propiertiesModule[0].jsFile!= null && propiertiesModule[0].jsFile!=""){
			fileJS=propierties[0].pathModule+propiertiesModule[0].jsFile;
			console.log(fileJS);   

			
			$.getScript(fileJS)
				.done(function() {
					// Assuming json data is wrapped in square brackets as Drew suggests 
					console.log("module js");       
					if (propiertiesModule[0].jsInit!= null && propiertiesModule[0].jsInit!=""){
						var functionLoad=propiertiesModule[0].jsInit;
						console.log('functionLoad');
						window[functionLoad]();
					}
				})
			

			//console.log(propiertiesModule[0].subModule);
			//loadModule("main");

	}else{
		console.log(" not module js");  
	}
	
}
function loadCssModule(){
	/*if (propiertiesModule[0].jsFile!= null && propiertiesModule[0].cssFile!=""){
		nameJson=propierties[0].pathModules+"/"+name+"/"+propiertiesModule[0].cssFile;
		console.log(nameJson);   
		loadFile(function(response) {
			// Do Something with the response e.g.
			$("#cssModule").html(response);  
			// Assuming json data is wrapped in square brackets as Drew suggests 
			console.log("module css");       
			//console.log(propiertiesModule[0].subModule);
			//loadModule("main");

		},nameJson);
	}else{
		console.log(" not module css");  
	}*/
	if (propiertiesModule[0].cssFile!= null && propiertiesModule[0].cssFile!=""){
		file=propierties[0].pathModule+propiertiesModule[0].cssFile;
		$(function(){
			$('#cssModule').load(file); 
		});
		console.log("module css");   
	}else{
		console.log(" not module css");  
	}
	loadHtmlModule();
}

function loadHtmlModule(){
    file=propierties[0].pathModule;
    naem=propierties[0].module;
    if (propiertiesModule[0].subModule!= null && propiertiesModule[0].subModule!="" && propiertiesModule[0].subModule.length>0){
			file=propierties[0].pathModule+propiertiesModule[0].subModule+".html";

			
	}
    $(function(){
        $('#module').load(file);
        loadJsModule(name); 
    });
    
    
}

function goModule(name){
	propierties[0].pathModule=propierties[0].pathModules+"/"+name+"/";
	loadJsonModule(name);
    //loadCssModule(name)
    //loadHtmlModule(name);
    //loadJsModule(name);
    
}
function goSubModule(name){
	console.log("submodule "); 
	console.log(name);      
	loadJsonModule(name);
    //loadCssModule(name)
    //loadHtmlModule(name);
    //loadJsModule(name);
    
}

window.onload=loadFMA();

