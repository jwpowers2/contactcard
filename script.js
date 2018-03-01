
function handler(){
	$('.user_box').click(function() { 
		$(this).html($(this).data('description'));
	});
}

$(document).ready(function(){

    $('#submit_button').click(function(e){

        e.preventDefault();

        var first = $('#firstname').val();

        var last = $('#lastname').val();

        var description = $('#description').val();

        var insert = `<div class="user_box" data-description="${description}">First Name: ${first}<br>Last Name: ${last}</div>`;
        
        $('.right_panel').append(insert);

        handler();      
        
    });


});