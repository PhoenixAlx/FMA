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
    createSelectClub();
    
}
function createSelectClub(){
	loadClubs(function(clubs){
		 //validate field, firs is not empty
		 var namesClubs=Object.keys(clubs);
		 var numberClubs=Object.keys(clubs).length;
		 var newOptions='<option id="nullOption" value="" selected></option>';
		 for (var i=0;i<numberClubs;i++){
			 nameClub=namesClubs[i];
			 dateCreation=clubs[nameClub]["dateCreation"];
			 newOptions=newOptions+'<option id="'+nameClub+'" value="'+nameClub+'">'+nameClub+'</option>';
			 
		 }
		 $("#selectClub").html(newOptions);
		 $('select').on('change', function() {
			  alert( this.value ); // or $(this).val()
			});
		 for (var i=0;i<numberClubs;i++){
			 nameClub=namesClubs[i];
			 dateCreation=clubs[nameClub]["dateCreation"];
			 $("#"+nameClub).blur(function(){
					alert(nameClub+dateCreation);
					loadInput(nameClub,dateCreation)
			 });
		 }
		 
		
	});
	
}
function loadInput(name,dateCreation){
	var name=$('#name').val(name);
	var dateCreation=$('#dateCreation').val(dateCreation);
}
function loadDatabase(){
     
    initDB();
}


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
    

	loadClubs(function(clubs){
		 //validate field, firs is not empty
		 console.log("clubs");
		 console.log(clubs);
		 var name=$('#name').val();
		 var dateCreation=$('#dateCreation').val();
		 var errorMSG=document.getElementById("errorMSG");
		 var namesClubs=Object.keys(clubs);
		 console.log("namesClubs");
		 console.log(namesClubs);
		 console.log("dateCreation");
		 console.log(dateCreation);
		 if ($.trim(name) == ""){
			 errorMSG.innerHTML="<span> El nombre no puede estar en blanco</span>";
		 }else if ($.trim(dateCreation) == ""){
			 errorMSG.innerHTML="<span> La fecha no puede estar en blanco</span>";
		 }else if ( validate_date(dateCreation)){
			 errorMSG.innerHTML="<span> La fecha no tiene formato válido</span>";
		 }else if (namesClubs.indexOf(name)>-1){
			 errorMSG.innerHTML="<span> Esa peña ya existe</span>";
		 }else{
			 errorMSG.innerHTML="";
			 insertClubs(name,dateCreation);
		 }//validate name that it isn't on database
	});
     
     
     //clubs maybe 
     
     /*       
     
    	var mybase = new alasql.Database('mybase');

	var res = mybase.exec("SELECT * FROM one");
    */
}
window.onload=loadInit();
