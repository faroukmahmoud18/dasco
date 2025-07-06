if (jQuery)
	jQuery.noConflict();
	
	
//main slide delay,speed 	
var slide_delay = 5000;
var slide_speed = 500;


jQuery(function($) {
	/******** scrollTop   ***********/

			var top= 0;
			
    
			$(window).on('scroll',function(){
				top=$(window).scrollTop();

                
				if(top>=50){
					$('#container .sub_top_area .navigation').slideUp();
					$("#header").css({"box-shadow":"0 1px 5px #989898"})
				}else{
					$('#container .sub_top_area .navigation').slideDown();
					$("#header").css({"box-shadow":""})
				}
			});
    
    
		
	
/********  //scrollTop  ***********/
	 






	jQuery(".tech_bg").hide();

	jQuery(".tech01").on('click',function(){
		jQuery(".tech_bg01").show();
	});
	jQuery(".tech02").on('click',function(){
		jQuery(".tech_bg02").show();
	});
	jQuery(".tech03").on('click',function(){
		jQuery(".tech_bg03").show();
	});
	jQuery(".tech04").on('click',function(){
		jQuery(".tech_bg04").show();
	});
	jQuery(".tech05").on('click',function(){
		jQuery(".tech_bg05").show();
	});
	jQuery(".tech06").on('click',function(){
		jQuery(".tech_bg06").show();
	});

	jQuery(".route_close img").on('click',function(){
		jQuery(".tech_bg").hide();
	});


	
	//menu  
	$("#gnb li").mouseover(function(){
			$(this).children("ul").show();
	}).mouseout(function(){
			$(this).children("ul").hide();		
	});

	//footer 맨위로 
	$(".btn_top").click(function(){
			$("html,body").animate({scrollTop:0},'slow');
	});
	
	$('.sp_recommend').corner({

		tl: { radius: 8 }, tr: { radius: 8 }, bl: { radius: 8 }, br: { radius: 8 }, antiAlias: true

	});
	// /xe/sub02_03
	$(document).on('mouseover','.sub02_03 .tab li:not(.active) a img ', function(event) {
				$(this).attr("src",$(this).attr("src").replace(".gif","_ov.gif"));
	});
	$(document).on('mouseout','.sub02_03 .tab li:not(.active) a img', function(event) {
	    		$(this).attr("src",$(this).attr("src").replace("_ov.gif",".gif"));
	});	
	
	$('.sitemap-show-bt').click(function () {
		  if ($(this).hasClass('active')) {
			   $(this).text("사이트맵 보기");		  	 
			   $(this).removeClass('active');
			   $(".f_sitemap").slideUp();			
		  } else {
			  $(this).addClass('active');
			  $(this).text("사이트맵 닫기");                
		      $(".f_sitemap").slideDown();	
			  $('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 600,'easeOutExpo');
		  }
		 return false;
	});
});
 

//tab1 1 /xe/sub02_03
function change(num) {
	for ( i = 1; i <= 3; i++) {
		if (i == num) {
			document.getElementById("sub02_03_tab0" + i).style.display = "block";
			jQuery("#image0" + i + " img").attr("src", "/xe/tmast/images/sub/tab0" + i + "_ov.gif");
			jQuery("#image0" + i + " img").parents("li").addClass("active");

		} else {
			document.getElementById("sub02_03_tab0" + i).style.display = "none"
			jQuery("#image0" + i + " img").attr("src", "/xe/tmast/images/sub/tab0" + i + ".gif");
			jQuery("#image0" + i + " img").parents("li").removeClass("active");
		}
	}
}

function aaa(){
	 if(confirm('탈퇴 페이지로 넘어가시겠습니까?')) {
            location.href="/xe/index.php?mid=login&act=dispMemberLeave";

	 }
      return false;
	
}
