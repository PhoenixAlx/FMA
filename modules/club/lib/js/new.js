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
    var errorMSG=document.getElementById("errorMSG");
    if (propierties.saveMessage){
        propierties.saveMessage=false;
        errorMSG.innerHTML=propierties.message;
    }else{
        errorMSG.innerHTML="";
    }
   
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
		 var name=$('#name').val();
		 var dateCreation=$('#dateCreation').val();
		 var errorMSG=document.getElementById("errorMSG");
		 var namesClubs=Object.keys(clubs);

		 if ($.trim(name) == ""){
			 errorMSG.innerHTML="<span> El nombre no puede estar en blanco</span>";
		 }else if ($.trim(dateCreation) == ""){
			 errorMSG.innerHTML="<span> La fecha no puede estar en blanco</span>";
		 }else if ( validate_date(dateCreation)){
			 errorMSG.innerHTML="<span> La fecha no tiene formato válido</span>";
		 }else if (namesClubs.indexOf(name)>-1){
			 errorMSG.innerHTML="<span> Esa peña ya existe</span>";
		 }else{
			 
			 insertClubs(name,dateCreation,function(){
                    propierties.message="Peña añadida";
                    propierties.saveMessage=true;
                    
                    goSubModule('new');
                 });
            
		 }//validate name that it isn't on database
	});
     
     
     //clubs maybe 
     
     /*       
     
    	var mybase = new alasql.Database('mybase');

	var res = mybase.exec("SELECT * FROM one");
    */
}
//window.onload=loadInit();
