$(document).ready(function(){

/*========================= signup =======================*/

$('#register').on('click' , function()){
	var firstname=$('#first').val(),
	lastname=$('#last').val(),
	email=$('#email').val(),
	username=$('#username'.val),
	password=$('#password').val();

	$.ajax({
		url:'xhr/register.php',
		type:'post',
		dataType:'json',
		data:{
			firstname:firstName,
			lastname:lastname,
			email:email,
			password:password;
		},
		sucess:function(response){
			if(response.error){
				alert(reponse.error);
			}else{
				window.location.assign('home.html');
			}
		}
	})

}


})