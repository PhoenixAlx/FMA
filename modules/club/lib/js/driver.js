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
     $('#textDate').datepicker({
    format: 'DD-MM-YYYY',)});
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
function goAction(nameAction){
    window.open(nameAction+".html","_self");
    return 0;
}
function backPrincipal(){
    window.open("../../fma.html","_self");
    return 0;
}
window.onload=loadInit();
function save(){
    //
    var db=loadDatabase();
    var idPerson=document.getElementById("idPerson");
            var namePerson=document.getElementById("namePerson");
            var agePerson=document.getElementById("agePerson");
                
   var request = db.transaction(["student"], "readwrite")
   .objectStore("student")
   .add({ id: idPerson.value, name: namePerson.value, age: agePerson.value});
     
   request.onsuccess = function(event) {
      alert("New Record has been added to your database.");
   };
     
   request.onerror = function(event) {
      alert("Unable to add data\r\nRecord is already exist in database! ");
   }
}
/*           
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("student", {keyPath: "id"});
              
            for (var i in studentData) {
               objectStore.add(studentData[i]);
            }
         }
           
         function readData() {
   var transaction = db.transaction(["student"]);
   var objectStore = transaction.objectStore("student");
   var request = objectStore.get("01");
     
   request.onerror = function(event) {
      alert("Unable to retrieve data from database!");
   };
     
   request.onsuccess = function(event) {
      if(request.result) {
         alert("Name: " + request.result.name + ", Age: " + request.result.age);
      }
        
      else {
         alert("Record not found in database!");
      }
   };
}
  
function readAllData() {
   var objectStore = db.transaction("student").objectStore("student");
     
   objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
        
      if (cursor) {
         alert("Name for id " + cursor.key + " is " + cursor.value.name + ", Age: " + cursor.value.age);
         cursor.continue();
      }      
      else {
         alert("No more records!");
      }
};
}
           
         function addData() {
            var idPerson=document.getElementById("idPerson");
            var namePerson=document.getElementById("namePerson");
            var agePerson=document.getElementById("agePerson");
                
   var request = db.transaction(["student"], "readwrite")
   .objectStore("student")
   .add({ id: idPerson.value, name: namePerson.value, age: agePerson.value});
     
   request.onsuccess = function(event) {
      alert("New Record has been added to your database.");
   };
     
   request.onerror = function(event) {
      alert("Unable to add data\r\nRecord is already exist in database! ");
   }
}
       
   
  function removeData() {
   var request = db.transaction(["student"], "readwrite")
   .objectStore("student")
   .delete("01");
     
   request.onsuccess = function(event) {
      alert("Record has been deleted from your database.");
   };
  
}
    */
