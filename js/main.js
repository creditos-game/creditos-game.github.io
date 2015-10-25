var appTabs = ( function( window, undefined ) {
   
    return {
        
    }
})( window, undefined );

if ($(window).width() < 1000) {
	$(".show-menu").click(function () {
		$(".header-nav-content").toggleClass("expanded");
	});
}

