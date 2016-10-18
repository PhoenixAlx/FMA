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
 function loadInit(){


    // Insert two rows: (1,111) and (2,222)
    
     $.fn.datepicker.defaults.format = "dd/mm/yyyy";
     $('#dateCreation').datepicker({
    });
}
function loadDatabase(){
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    //prefixes of window.IDB objects
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.");
    }
               
     /*      const studentData = [
       
    ];*/
    var db;
    var request = window.indexedDB.open("fmaDB", 1);
    request.onerror = function(event) {
        console.log("error: ");
    };
    request.onsuccess = function(event) {
        db = request.result;
        console.log("success: "+ db);
    };
     
    
    return db;
}
function goModule(nameModule){
    window.open("../../modules/"+nameModule+"/index.html","_self");
    return 0;
}
function goAction(nameAction){
    window.open(nameAction+".html","_self");
    return 0;
}
function backPrincipal(){
    window.open("../../fma.html","_self");
    return 0;
}
window.onload=loadInit();
function validate_date(dateInput){

    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");

 

    if(dateInput.search(patron)==0)

    {

        var values=fecha.split("/");

        if(isValidDate(values[2],values[1],values[0]))

        {

            return true;

        }

    }

    return false;

}
function save(){
    

	

      

    //validate field, firs is not empty
     var name=$('#name').val();
     var dateCreation=$('#dateCreation').val();
     var errorMSG=document.getElementById("errorMSG");
     if ($.trim(name) == ""){
         errorMSG.innerHTML="<span> El nombre no puede estar en blanco</span>";
     }else if ($.trim(dateCreation) == ""){
         errorMSG.innerHTML="<span> La fecha no puede estar en blanco</span>";
     }else if ( validate_date(dateCreation)){
         errorMSG.innerHTML="<span> La fecha no tiene formato válido</span>";
     }else{
         errorMSG.innerHTML="";
     }//validate name that it isn't on database
     
     /*       
     
    	var mybase = new alasql.Database('mybase');

	var res = mybase.exec("SELECT * FROM one");
    */
