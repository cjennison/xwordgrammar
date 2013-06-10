$(function(){
	
	
	$("#check-out-option #xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#check-out-option").removeClass('active')
	})
	
	initBookNav();
	addSampleListener();
	purchaseBooks();
});


var upbtn,
	downbtn;
	
var scroll_pos = 0;


function purchaseBooks(){
	$("#check-out").click(function(e){
		$("#shadowbox").removeClass("sb_inactive");
		$("#shadowbox").addClass("sb_active");
		$("#check-out-option").addClass('active')
	})
	$("#order-form #xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#order-form").removeClass('active')
	})
	$("#phone-info #xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#phone-info").removeClass('active')
	})
	$("#shadowbox").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#check-out-option").removeClass('active')
		$("#phone-info").removeClass('active')
		$("#order-form").removeClass('active')
	})
	$("#check-out-option #email").click(function(e){
		$("#check-out-option").removeClass('active')
		$("#order-form").addClass('active')
	})
	
	$("#check-out-option #phone").click(function(e){
		$("#check-out-option").removeClass('active')
		$("#phone-info").addClass('active')
	})
	
}

function initBookNav(){
	upbtn = $("#up");
	downbtn = $("#down");
	
	$(up).click(function(){
		if(scroll_pos < 3){
			scroll_pos++;
			moveBookNavigator("up");
		}
	})
	
	$(down).click(function(){
		if(scroll_pos >= 0){
			scroll_pos--;
			moveBookNavigator("down");
		}
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

function addSampleListener(){
	$("#view-samples").click(function(e){
		$("#shadowbox").removeClass("sb_inactive");
		$("#shadowbox").addClass("sb_active");
		$("#page-sampler-container").removeClass("inactive");
		$("#page-sampler-container").addClass("active");
	})
	$("#xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#page-sampler-container").addClass("inactive");
		$("#page-sampler-container").removeClass("active");
	})
	$("#shadowbox").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#page-sampler-container").addClass("inactive");
		$("#page-sampler-container").removeClass("active");
	})
	
}
