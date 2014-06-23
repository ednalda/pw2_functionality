/*  
	Your Project Title
	Author: You
*/

(function($){
	
	
	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
	
	
	var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};
	
	

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
		
	/*
	===============================================
	======================================== EVENTS	
	*/
	
	$('ul.tabs').each(function)(){
		var $active, $content, $links = $(this).find('a');
		$active = $($links.filter('[href="'location.hash+'"]')[0] || $links [0]);
		$active.addClass('active');
		$content =$($active(0).hash);
		$links.not($active).each(function(){
			$(this.hash).hide();
		});
		$(this).on('click','a', function(e){
			$active.removeClass('active');
			$content.hide();
		})
	}
	

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

	/* new project add */

    $('#formAdd').on('click', function(e){
    	e.preventDefault();
    	var projName=$('#projectName').val(),
    	projDesc=$('#projectDescription').val(),
    	projDue=$('#projectDueData').val(),
    	status=$('#status').val();

    	$.ajax({
    		url:"xhr/new_project.php",
    		type:"post",
    		dataType:"json",
    		data:{
    			projectName:projName,
    			projectDescription:projDesc,
    			dueData:projDue,
    			status:status

    		}
    		success:function(response){
    			console.log('Test for success');

    			if(response.error){
    				alert(response.error);
    				}
    				else{
    					window.location.assign("projects.html");
    				}
    			}
    		}

    	});


    });

	/*	
	==================================== END EVENTS 
	===============================================
	*/
		
		

	
})(jQuery); // end private scope




