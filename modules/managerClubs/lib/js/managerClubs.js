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

	console.log("loadInit gestor peñas")
 
    createSelectClub();
}
function createSelectClub(){
	loadClubs(function(clubs){
		 //validate field, firs is not empty
		 var namesClubs=Object.keys(clubs);
		 var numberClubs=Object.keys(clubs).length;
		 var newOptions='<option id="nullOption" value="" selected>TUS PEÑAS</option>';
		 for (var i=0;i<numberClubs;i++){
			 nameClub=namesClubs[i];
			 dateCreation=clubs[nameClub]["dateCreation"];
             idclub=clubs[nameClub]["idclub"];
			 newOptions=newOptions+'<option id="'+nameClub+'" value="'+nameClub+"*"+dateCreation+"*"+idclub+'">'+nameClub+'</option>';
			 
		 }
		 $("#selectClub").html(newOptions);
		 $('select').on('change', function() {
				if ($(this).val()!=""){
					datasClub=$(this).val();
					arrayDatasClub=datasClub.split("*") // or $(this).val()
					name=arrayDatasClub[0];
					dateCreation=arrayDatasClub[1];
                    idclub=arrayDatasClub[2];
					loadInput(true)
				}else{

					loadInput(false)
				}
			});
		 
		 
		
	});
	
}
function loadInput(activeButtons){
	if (activeButtons){
		$('#divManagerClubs').show();
	}else{
		$('#divManagerClubs').hide();
	}
	
    
}
