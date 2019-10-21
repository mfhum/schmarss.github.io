jQuery(document).ready(function($){
	//if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
	var MQL = 1170;

	//primary navigation slide-in effect
	if($(window).width() > MQL) {
		var headerHeight = $('.box-header').height();
		$(window).on('scroll',
		{
	        previousTop: 0
	    },
	    function () {
		    var currentTop = $(window).scrollTop();
		    //check if user is scrolling up
		    if (currentTop < this.previousTop ) {
		    	//if scrolling up...
		    	if (currentTop > 0 && $('.box-header').hasClass('is-fixed')) {
		    		$('.box-header').addClass('is-visible');
		    	} else {
		    		$('.box-header').removeClass('is-visible is-fixed');
		    	}
		    } else {
		    	//if scrolling down...
		    	$('.box-header').removeClass('is-visible');
		    	if( currentTop > headerHeight && !$('.box-header').hasClass('is-fixed')) $('.box-header').addClass('is-fixed');
		    }
		    this.previousTop = currentTop;
		});

			}

	if( document.getElementById('myonoffswitch').checked ) {
		document.getElementById("myonoffswitch").checked = true;
		checkdarkmode( true );
	} else if( !document.getElementById('myonoffswitch').checked ) {
		document.getElementById("myonoffswitch").checked = false;
		checkdarkmode( false );

	}
	$('body').delay(550).css({
			'overflow': 'visible'
	})

	// change darkmodetof if clicked
	$('.onoffswitch-checkbox').on('click', function(){
		if( document.getElementById('myonoffswitch').checked ) {
		  checkdarkmode( true );
		} else if( !document.getElementById('myonoffswitch').checked ) {
			checkdarkmode( false );
	 }
	});

	function checkdarkmode( darkmodecheck ) {
		if( darkmodecheck ) {
	    getDarkmode();
		} else if( !darkmodecheck ) {
			getLightmode();
		}
	}




	//open/close primary navigation
	$('.box-primary-nav-trigger').on('click', function(){
		$('.box-menu-icon').toggleClass('is-clicked');
		$('.box-header').toggleClass('menu-is-open');

		//in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
		if( $('.box-primary-nav').hasClass('is-visible') ) {
			$('.box-primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').removeClass('overflow-hidden');
			});
		} else {
			$('.box-primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
				$('body').addClass('overflow-hidden');
			});
		}
	});
});




// changes to darkmode
function getDarkmode(){
	console.log( "Darkmode" );
	$('body').addClass('is-dark');
	$('.box-words-wrapper').addClass('is-dark');
	$('.box-logo-light').addClass('is-dark');
	$('.box-logo-dark').addClass('is-dark');
	$('h1').addClass('is-dark');
	$('p').addClass('is-dark');
	$('a').addClass('is-dark');
}

// changes to lightmode
function getLightmode(){
	console.log( "Lightmode" );
	$('body').removeClass('is-dark');
	$('.box-words-wrapper').removeClass('is-dark');
	$('.box-logo-light').removeClass('is-dark');
	$('.box-logo-dark').removeClass('is-dark');
	$('h1').removeClass('is-dark');
	$('p').removeClass('is-dark');
	$('a').removeClass('is-dark');
}
