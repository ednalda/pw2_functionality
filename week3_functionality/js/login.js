
$(document).ready(function(){




/*========================= login =======================*/
	$("#login").click(function(){
		var user= $('#user').val();
		var pass= $('#pass').val();

		$.ajax({
			url:'xhr/login.php',
			type:'post'
			dataType:'json',
			data:{
				username:username,
				password:password,
			},
			sucess:function(response){
				console.log("Test user");
				if(response.error){
					alert(response.error);
				}
				else{
					window.location.assign("adm.html");
				};

			}
		})

	})


	/*========================= logout =======================*/
	$('#logout').click(function(e){
		e.preventDefault;
		$get('xhr/logout.php', function()){
			window.location.assign('index.html')}
	
	});
	

	
});