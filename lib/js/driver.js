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
function createTables(nameTable){
    if (nameTable =='clubs'){
         alasql('CREATE TABLE IF NOT EXISTS FMADB.clubs (id_club INT PRIMARY KEY, name STRING, dateCreation STRING)');
    }
}
function createDatabase(){
    console.log(" creamos")
    
    alasql('CREATE  DATABASE IF NOT EXISTS FMADB;');
    console.log(" attach")
    //alasql('ATTACH INDEXEDDB DATABASE FMADB');
    console.log(" tablas")
    alasql('USE FMADB;');
    var res2=alasql('CREATE TABLE IF NOT EXISTS clubs (id_club INT , nameClub STRING, dateCreation STRING);');
    console.log(res2);
    console.log(" show database ")
    var res = alasql("SHOW DATABASES LIKE 'FMADB'");
    console.log(res);
    res = alasql("SHOW TABLES LIKE 'FMADB.clubs'");
    console.log(res);
    var mybase = new alasql.Database('FMADB');
    console.log(mybase);
    return mybase;
    
    
}

function loadDatabase(){
    var mybase=null;
    var nameDB='FMADB';
    //check if exist database
    var res = alasql("SHOW DATABASES LIKE 'FMADB'");
    console.log(res)
    if (res.indexOf(nameDB)<0){
        //don't exist and it is neccesary to create
        console.log(" no existe")
        mybase=createDatabase();
    }else{
        //check if all tables exist
        var allTables=["clubs"];
        var mybase = new alasql.Database('FMADB');
        var res = alasql('SHOW TABLES FROM FMADB');
        for (var i=0;i<allTables.length;i++){
            t=allTables[i];
            if (res.indexOf(t)<0){
               //create table
               createTables(t);
            }
        }
    }
        
    //var mybase = new alasql.Database('FMADB');
    console.log(mybase)
}

function goModule(nameModule){
    window.open("modules/"+nameModule+"/index.html","_self");
    return 0;
}
window.onload=loadDatabase();
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
