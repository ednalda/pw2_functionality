/*  
	Your Project Title
	Author: You
*/

(function($){
	
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

	/* ===============================================
	======================================== EVENTS	
	*/

	/* sortable*/
	$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });
    /* datapicker*/
    $(function() {
    $( ".mydatepicker" ).datepicker();
  });

    /* Pagination */
$(function() {
    $(.selector).pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});


	$('ul.tabs').each(function)(){
		var $active, $content, $links = $(this).find('a');
		$active = $($links.filter('[href= "' + location.hash' "]')[0] || $links[0]);
		$active.addClass('active');
		$content=$($active)[0].hash;

		$links.not($active).each(function(){
			$(this.hash).hide();
		});

		$(this).on('click','a', function(e){
			$active.removeClass='active';
			$content=hide();
		})
	}
	// Update the variables with the new link and content
	$active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
     e.preventDefault();

});
});

	/*  Add Modal */

	$('.modalClick').on('click', function(event){
		event.preventDefault();
		$('#new')
		.fadeIn()
		.find('#add')
		.fadeIn();

	});
	$('.close').on('click',function(event){
		event.preventDefault();
		$('#new')
			.fadeOut()
			.find('#add')
			.fadeOut();
	});

	$('.status').mouseover(function(){
		$("img").fadeOut(1000);

	});

	$('.status').mouseout(function(){
		$("img").fadeIn(1000);
	});



var projects = function(){

$.ajax({
url: 'xhr/get_projects.php',
type: 'get',
dataType: 'json',
success: function(response){
if(response.error){
console.log(response.error);
}else{

for(var i=0, j=response.projects.length; i < j; i++){
var result = response.projects[i];

$(".projects").append(
'<div id="sortable" class="ui-state-default">' +
" <input class='projectid' type='hidden' value='" + result.id + "'>" +
" Project Name: " + result.projectName + "<br>" +
" Project Description: " + result.projectDescription + "<br>" +
" Project Status: " + result.status + "<br>"
+ '<button>Delete</button>'
+ '<button>Edit</button>'
+ '</div> <br>'
);
};
$('.deletebtn').on('click', function(e){
var pid = $(this).parent().find(".projectid").val();
console.log('test delete');
$.ajax({
url: 'xhr/delete_project.php',
data: {
projectID: pid
},
type: 'POST',
dataType: 'json',
success: function(response){
console.log('Testing for success');

if(response.error) {
alert(response.error);
} else {
//console.log(result.id);
window.location.assign("projects.html");
};
}
}); 
}); // End Delete


	/* new project add */

    $('#formAdd').on('click', function(e){
    	e.preventDefault();
    	var pid = $(this).parent().find(".projectid").val(); 
    	var projName=$('#projectName').val(),
    	projDesc=$('#projectDescription').val(),
    	projDue=$('#projectDueData').val(),
    	status=$('input[name = "status"]:checked').prop("id");

    	$.ajax({
    		url:"xhr/new_project.php",
    		type:"post",
    		data:{
    			projectID: pid,
    			projectName:projName,
    			projectDescription:projDesc,
    			dueData:projDue,
    			status:status

    		}
    		dataType: 'json',
    		success:function(response){

    			if(response.error){
    				alert(response.error);
    				}
    				else{
    					window.location.assign("projects.html");
    				}
    			}
    		});

    	});//Edit


    } 
}
})
}
projects(); 


	/*	
	==================================== END EVENTS 
	===============================================
	*/
		
		

	
})(jQuery); // end private scope




