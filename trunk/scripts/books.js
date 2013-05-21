$(function(){
	initBookNav();
});


var upbtn,
	downbtn;

function initBookNav(){
	upbtn = $("#up");
	downbtn = $("#down");
	
	$(up).click(function(){
		moveBookNavigator("up");
	})
	
	$(down).click(function(){
		moveBookNavigator("down");
	})
}

function moveBookNavigator(dir){
	console.log(dir);
	var book_list = $("#book-list");
	var current_pos_y = parseFloat($(book_list).css("top"));
	console.log($(book_list).css("top"))
	console.log(current_pos_y)
	if(dir == "up"){
		$(book_list).css("top", current_pos_y - 170);
	}
	if(dir == "down"){
		$(book_list).css("top", current_pos_y + 170);
	}
}
