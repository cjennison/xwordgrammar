$(function(){
	
	
	$("#check-out-option #xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#check-out-option").removeClass('active')
	})
	
	//initBookNav();
	addSampleListener();
	purchaseBooks();
	addBookListener();
	updateBook($("#book-list-container ul#book-list li")[0])
});


var upbtn,
	downbtn;
	
var scroll_pos = 0;

function addBookListener(){
	var books = $("#book-list-container ul#book-list li");
	console.log(books);
	for(var i = 0;i<books.length;i++){
		console.log("ED")
		$(books[i]).on("click", function(){
			updateBook(this);
		})
		
	}
	
	var add_cart = $("#add-to-cart");
	$(add_cart).on("click", function(){
		var curbook = {
			title:$("#book-title").html(),
			cost:$("#book-cost").html()
		}
		var li = $("<li>" + curbook.title + "..." + curbook.cost + "</li>")
		$('#book-cart-list').append(li);
		
		var total = 0;
		var cart_books = $("#book-cart-list li");
		for(var i = 0;i < cart_books.length;i++){
			var cost = $(cart_books[i]).html();
			cost = cost.split("...");
			cost = cost[1].split("$");
			console.log(cost)
			total += Number(cost[1]);
		}
		total = Math.round(total * 100) / 100
		$("#checkout-total").html("Total: $" + total);
		console.log(total);
		
		console.log(curbook);
	});
}

function updateBook(books){
	console.log(books);
	$("#book-title").html($(books).attr("data-title"));
	$("#book-cost").html($(books).attr("data-cost"))
}


function operatePhoneInfo(){
	var checkout_list = $("#book-cart-list li");
	var new_list = $("#phone-cart-list");
	$(new_list).empty();

	for(var i = 0; i < checkout_list.length;i++){
		var li = checkout_list[i];
		console.log(li);
		$(new_list).append(li);
	}
}

function repopInfo(){
	var checkout_list = $("#book-cart-list");
	var new_list = $("#phone-cart-list li");

	for(var i = 0; i < new_list.length;i++){
		var li = new_list[i];
		$(checkout_list).append(li);
	}
}

function purchaseBooks(){
	$("#check-out").click(function(e){
		$("#shadowbox").removeClass("sb_inactive");
		$("#shadowbox").addClass("sb_active");
		$("#phone-info").addClass('active')
		operatePhoneInfo();
	})

	$("#order-form #xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#order-form").removeClass('active')
	})
	$("#phone-info #xbtn").click(function(e){
		$("#shadowbox").removeClass("sb_active");
		$("#shadowbox").addClass("sb_inactive");
		$("#phone-info").removeClass('active');
		repopInfo();
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
