$j('html').addClass('js');
$j(document).ready(function() {

	// Bootstrap: ScrollSpy 
	$j('body').imagesLoaded(function( ){
		$j('body').scrollspy({
		});
		$j('[data-spy="scroll"]').each(function () {
			var $spy = $j('body').scrollspy('refresh')
		});
	});
		

	// Bootstrop: ToolTip
	$j('.tip').tooltip()
	

	// Fade In & Out
	$j('.cover-box').hide();
	$j('.cover').hover(function(){
		$j('.cover-box', this).fadeIn('fast');
	}, function() {
		$j('.cover-box', this).fadeOut('fast');
	});
	
	
	/* Fancybox 
	$j("").fancybox();
	*/
		
	// Responsive Slides
	$j(".slide-feature .rslides").responsiveSlides({
		auto: true,
		pause: true,
		pager: true,
		nav: false,
		nextText: "",
		prevText: ""
	});
	
	$j(".slide-gallery .rslides").responsiveSlides({
		auto: false,
		pager: true,
		nav: true,
		nextText: "",
		prevText: ""
	});	
	
	$j(".slide-mini .rslides").responsiveSlides({
		auto: false,
		pager: false,
		nav: true,
		nextText: "",
		prevText: ""
	});
	  
	  
	/* SlideJs 
	$j(function(){
		$j('.slide-features').slides({
			container: 'slide-feature',	
			paginationClass: 'slide-pagination',						
			preload: true,
			effect: 'fade',
			crossfade: true,			
			autoHeight: true,
			autoHeightSpeed: 0		
		});
		$j('.slideFeature').slides({
			container: 'slides',
			preload: true,
			effect: 'fade'
		});
		$j('.slideMinis').slides({
			container: 'slideMini',		
			preload: true,
			generatePagination: false
		});
	});
	*/

	// Smooth 
	$j('.navigation a').smoothScroll({
		//offset: -59 // Menu height plus padding height
	});
	

	// Stickem
	$j('body').imagesLoaded(function( ){
		$j('body').stickem();
	});	


	// Spring 
	$j(".springBox").hide();
	$j(".spring").click(function(){
		$j(".springBox").slideToggle();
		$j(".spring").toggleClass("active");
		$j("#header .logo").toggleClass("active");		
	});	
	
});	