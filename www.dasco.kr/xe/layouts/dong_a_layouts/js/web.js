
jQuery(window).scroll(function () {
	if (jQuery(window).scrollTop() > 100) {
	   jQuery("header").removeClass("large").addClass("small");
	} else {
	   jQuery("header").removeClass("small").addClass("large");
	}
});
// 헤더리사이징

jQuery(function(){ 

   jQuery(".btn-top").click(function(){
         jQuery("html,body").animate({scrollTop:0},'slow');
   });

})
// 탑스크롤
jQuery(function () {

    jQuery(".tab_content").hide();
    jQuery(".tab_content:first").show();

    jQuery("ul.tabs li").click(function () {
        jQuery("ul.tabs li").removeClass("active").css("color", "#333");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        jQuery(this).addClass("active").css("color", "darkred");
        jQuery(".tab_content").hide()
        var activeTab = jQuery(this).attr("rel");
        jQuery("#" + activeTab).fadeIn()
    });
});
// tab

//menu  
jQuery(function($) {

	jQuery("#nav li").mouseover(function(){
			jQuery(this).children("ul").show();
	}).mouseout(function(){
			jQuery(this).children("ul").hide();		
	});
});


jQuery(document).ready(function() {

/*
	var showmenuToggled = true;
	jQuery('#showmenu').click(function() {
			//jQuery('.menu').slideToggle("fast");
			if(showmenuToggled) {
					jQuery('.menu').show("fast");
					showmenuToggled = false;
			}
			else
			{
				jQuery('.menu').hide("fast");
				showmenuToggled = true;
			}
	});
*/
	
	jQuery('#showmenu').click(function() {
		jQuery('.menu').show("fast");
	
	});

	jQuery(".co_site_close_btn img").click(function(){
		jQuery(".menu").hide("fast");
	});
	
	
});  