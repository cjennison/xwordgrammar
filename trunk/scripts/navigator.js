var navItems;
var selector;

function initNav(page){
	navItems = $("#navigation ul li a");
	selector = $("#nav-selector");
	console.log(navItems);
	
	for(var i = 0;i < navItems.length;i++){
		//Place the navigator on the correct item
		if($(navItems[i]).html() == page){
			switch(page){
				case "Home":
					$(selector).css("left", "-19px")
					break;
				
				case "Books":
					$(selector).css("left", "152px")
					break;
				
				case "About":
					$(selector).css("left", "328px")
					break;
			}
		}
		
		//Add event listeners
		$(navItems[i]).mouseover(function(){
			switch($(this).html()){
				case "Home":
					$(selector).css("left", "-19px")
					break;
				
				case "Books":
					$(selector).css("left", "152px")
					break;
				
				case "About":
					$(selector).css("left", "328px")
					break;
			}
		})
	}
	
	
}
