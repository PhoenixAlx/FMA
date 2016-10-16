window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
   window.alert("Your browser doesn't support a stable version of IndexedDB.")
}
 
const dbName = "testDB";
 
var request = indexedDB.open(dbName, 2);
 
request.onerror = function(event) {
    console.log("db error");
};
 
request.onupgradeneeded = function(event) {
    var db = event.target.result;
 
    var productObjectStore = db.createObjectStore("products", { keyPath: "productNumber" });
    
    productObjectStore.createIndex("name", "name", { unique: true });
    
    persistProducts();
    
    console.log("db created");
    
  };
 
function persistProducts(){
	
	var request = indexedDB.open(dbName, 2);
	request.onsuccess = function(event) {
	    
		var db = event.target.result;
 
		var transaction = db.transaction("products", "readwrite");
		
		var objectStore = transaction.objectStore("products");
		
		var data = [{productNumber:1,name:"product1",price:33.22}];
		
		data.forEach( function (product)
		{
			objectStore.put(product);
		});
		
		transaction.oncomplete = function() {
			console.log("products saved");
		};
		
	};
}
 
function getProductByKey(key) {
	
	var request = indexedDB.open(dbName);
	
	request.onsuccess = function(event) {
 
	    var db = event.target.result;
 
	    var transaction = db.transaction("products", "readonly");
	    var objectStore = transaction.objectStore("products");
	    
	    var query = objectStore.get(key);
	    
	    query.onerror = function(queryEvent) {
          console.log("Unable to retrieve data from database!");
        };
        
        query.onsuccess = function(queryEvent) {
        	
        	console.log(queryEvent.target.result);
        	var product1 = queryEvent.target.result;
 
			// do stuff with the product
			// provide a callback parameter to execute here
        	
        };
	};
}
 
function getProductByName(name) {
	
	var request = indexedDB.open(dbName);
	
	request.onsuccess = function(event) {
 
	    var db = event.target.result;
 
	    var transaction = db.transaction("products", "readonly");
	    var objectStore = transaction.objectStore("products");
		var index = objectStore.index('name');
	    
	    var query = index.get(name);
	    
	    query.onerror = function(queryEvent) {
          console.log("Unable to retrieve data from database!");
        };
        
        query.onsuccess = function(queryEvent) {
        	
        	console.log(queryEvent.target.result);
        	var product1 = queryEvent.target.result;
 
			// do stuff with the product
			// provide a callback parameter to execute here
        	
        };
	};
}
 
function deletedb(){
 
	var req = indexedDB.deleteDatabase(dbName);
	console.log("db deleted");
	
}
