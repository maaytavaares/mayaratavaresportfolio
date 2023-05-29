/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Cursor
3. Header
4. Menu
5. Scrolling
6. Home Animation
7. Morphext
8. Services
9. Testimonials
10. CTA Animation
11. Work Slider
12. Accordions


******************************/

jQuery.event.special.touchstart = 
{
	setup: function( _, ns, handle )
	{
		if ( ns.includes("noPreventDefault") )
		{
			this.addEventListener("touchstart", handle, { passive: false });
		}
		else
		{
			this.addEventListener("touchstart", handle, { passive: true });
		}
	}
};

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var homeTL = gsap.timeline({});
	var ctaTL = gsap.timeline({});

	initCursor();
	initHeader();
	initMenu();
	initScrolling();
	initHomeAnimation();
	initMorphext();
	initServices();
	initTestimonials();
	initCtaAnimation();
	initWorkSlider();
	initAccordions();

	$(window).on('resize', function()
	{
		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		initHeader();
	});

	/* 

	2. Cursor

	*/

	function initCursor()
	{

		const cursor = document.querySelector(".cursor_circle");

		$(document).mousemove(function(e)
		{
			var hovered_element = $(e.target);
			if(hovered_element.hasClass('cursor_hide'))
			{
				$("#cursor_circle").css({opacity: "0"});
			}
			else
			{
				$("#cursor_circle").css({opacity: "1"});
			}
			
  			setTimeout(() =>
			{
    			cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
  			}, 100);
		});
	}

	/* 

	3. Header

	*/

	function initHeader()
	{
		var header = $('.header');
		var hamb = $('.hamburger_container');

		if($(window).scrollTop() > 180)
		{
			header.addClass('scrolled');
			hamb.addClass('scrolled');	
		}
		else
		{
			header.removeClass('scrolled');
			hamb.removeClass('scrolled');
		}
	}

	/* 

	4. Menu

	*/

	function initMenu()
	{
		var hamb = $('.hamburger_container');
		var menu = $('.menu');
		var contentContainer = $('.content_container');
		var menuOverlay = $('.menu_overlay');
		var isActive = false;

		hamb.on('click', function()
		{
			menu.toggleClass('active');
			hamb.toggleClass('active');
			contentContainer.toggleClass('active');
			menuOverlay.toggleClass('active');
			if(!isActive)
			{
				$('.menu_text').fadeOut(function()
				{
					$(this).text('close').fadeIn();
				});
				isActive = true;
			}
			else
			{
				$('.menu_text').fadeOut(function()
				{
					$(this).text('menu').fadeIn();
				});
				isActive = false;
			}
		});
	}

	/* 

	5. Scrolling

	*/

	function initScrolling()
	{
		var hamb = $('.hamburger_container');
		var menu = $('.menu');
		var contentContainer = $('.content_container');
		var menuOverlay = $('.menu_overlay');
		
		if($('.main_nav ul li a').length)
		{
			var links = $('.scroll_link');
	    	links.each(function()
	    	{
	    		var ele = $(this);
	    		var target = ele.data('scroll-to');
	    		ele.on('click', function(e)
	    		{
	    			e.preventDefault();
	    			gsap.to(window, {duration: 2, scrollTo: {y: target, offsetY: 100, autoKill: false, ease: Power4.easeInOut}});
	    			if($('.menu').hasClass('active'))
	    			{
	    				menu.toggleClass('active');
						hamb.toggleClass('active');
						contentContainer.toggleClass('active');
						menuOverlay.toggleClass('active');
	    			};
	    		});
	    	});
		}	
	}

	/* 

	6. Home Animation

	*/

	function initHomeAnimation()
	{
		// TweenMax
		
		homeTL.set(".rect1", {rotation: 24.75, x: 100, y: 10});
		homeTL.set(".rect2", {rotation: -129, x: 36, y: 262});
		homeTL.set(".rect3", {rotation: 27.5, x: 226, y: 12});
		homeTL.set(".rect4", {rotation: -135, x: 100, y: 370});
		homeTL.set(".rect5", {rotation: 28.65, x: 339, y: 28});
		homeTL.set(".rect6", {rotation: -136, x: 178, y: 439});
		homeTL.set(".rect7", {rotation: 22, x: 392, y: 110});
		homeTL.set(".rect8", {rotation: -135.6, x: 320, y: 422});
		homeTL.set(".rect9", {rotation: 23.5, x: 522, y: 109});
		homeTL.set(".rect10", {rotation: -132.5, x: 418, y: 472});
		homeTL.set(".rect11", {rotation: 22.5, x: 612, y: 192});
		homeTL.set(".rect12", {rotation: -132.5, x: 547, y: 476});
		homeTL.set(".rect13", {rotation: 10, x: 642, y: 284});
		homeTL.set("#svg_clip_path > rect", {visibility: "hidden"});

		homeTL.to(".rect1",
		{
			delay: 1,
			duration: 0.6,
			onComplete: function()
			{
				$('.rect1').css({visibility: "visible"})
			}
		}).to(".rect1",
		{
			duration: 0.6,
			ease: 'power1.in',
			height: 245,
			onComplete: function()
			{
				$('.rect2').css({visibility: "visible"})
			}
		}).to(".rect2",
		{
			duration: 0.25,
			ease: 'linear.none',
			height: 320,
			onComplete: function()
			{
				$('.rect3').css({visibility: "visible"})
			}
		}).to(".rect3",
		{
			duration: 0.2,
			ease: 'linear.none',
			height: 368,
			onComplete: function()
			{
				$('.rect4').css({visibility: "visible"})
			}
		}).to(".rect4",
		{
			duration: 0.15,
			ease: 'linear.none',
			height: 422,
			onComplete: function()
			{
				$('.rect5').css({visibility: "visible"})
			}
		}).to(".rect5",
		{
			duration: 0.13,
			ease: 'linear.none',
			height: 432,
			onComplete: function()
			{
				$('.rect6').css({visibility: "visible"})
			}
		}).to(".rect6",
		{
			duration: 0.12,
			ease: 'linear.none',
			height: 401,
			onComplete: function()
			{
				$('.rect7').css({visibility: "visible"})
			}
		}).to(".rect7",
		{
			duration: 0.12,
			ease: 'linear.none',
			height: 307,
			onComplete: function()
			{
				$('.rect8').css({visibility: "visible"})
			}
		}).to(".rect8",
		{
			duration: 0.13,
			ease: 'linear.none',
			height: 380,
			onComplete: function()
			{
				$('.rect9').css({visibility: "visible"})
			}
		}).to(".rect9",
		{
			duration: 0.13,
			ease: 'linear.none',
			height: 364,
			onComplete: function()
			{
				$('.rect10').css({visibility: "visible"})
			}
		}).to(".rect10",
		{
			duration: 0.15,
			ease: 'linear.none',
			height: 350,
			onComplete: function()
			{
				$('.rect11').css({visibility: "visible"})
			}
		}).to(".rect11",
		{
			duration: 0.2,
			ease: 'linear.none',
			height: 277,
			onComplete: function()
			{
				$('.rect12').css({visibility: "visible"})
			}
		}).to(".rect12",
		{
			duration: 0.25,
			ease: 'linear.none',
			height: 227,
			onComplete: function()
			{
				$('.rect13').css({visibility: "visible"})
			}
		}).to(".rect13",
		{
			duration: 0.5,
			ease: 'power1.out',
			height: 170
		});
	}

	/* 

	7. Morphext

	*/

	function initMorphext()
	{
		$("#js-rotating").Morphext({
			// The [in] animation type. Refer to Animate.css for a list of available animations.
			animation: "fadeIn",
			// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
			separator: ",",
			// The delay between the changing of each phrase in milliseconds.
			speed: 5000,
			complete: function () {
				// Called after the entrance animation is executed.
			}
		});
	}

	/* 

	8. Services

	*/

	function initServices()
	{
		var ele = document.querySelector('.services_list_container');
		var services = $('.service');
		var servicesCtrl = new ScrollMagic.Controller();
		if(services.length > 0)
		{
			var scene = new ScrollMagic.Scene(
			{
				triggerElement: ele,
				triggerHook: "onEnter",
				offset: 200,
				reverse: false
			})
			.on('start', function()
			{
				gsap.to(".service", 
				{
					duration: 1,
					alpha: 1,
					y: 0,
					ease: Power3.easeOut,
					stagger: 0.175
				})
			})
			.addTo(servicesCtrl);
		}	
	}

	/* 

	9. Testimonials

	*/

	function initTestimonials()
	{
		$('.testimonials_slider').owlCarousel(
		{
			loop:true,
			margin:10,
			nav:false,
			dots:false,
			center:true,
			items:3,
			responsive:{
				1921:{
					items:4
				},
				991:
				{
					items:3
				},
				0:
				{
					items:1
				}
			}
		});
	}

	/* 

	10. CTA Animation

	*/

	function initCtaAnimation()
	{
		var ctaCtrl = new ScrollMagic.Controller();
		var ele = document.querySelector('.cta_erase_container');
		var scene = new ScrollMagic.Scene(
			{
				triggerElement: ele,
				triggerHook: "onEnter",
        		reverse: false
			}
		);
		
		scene.on('start', function()
		{
			// TweenMax
			
			ctaTL.set(".rect14", {rotation: -149, x: 3, y: 316});
			ctaTL.set(".rect15", {rotation: 1.95, x: 163, y: 50});
			ctaTL.set(".rect16", {rotation: -142, x: 155, y: 281});
			ctaTL.set(".rect17", {rotation: 13.3, x: 359, y: 20});
			ctaTL.set(".rect18", {rotation: -142.7, x: 270, y: 395});
			ctaTL.set(".rect19", {rotation: 9.9, x: 506, y: 86});
			ctaTL.set(".rect20", {rotation: -141.55, x: 469, y: 299});
			ctaTL.set(".rect21", {rotation: 12.57, x: 705, y: 2});
			ctaTL.set(".rect22", {rotation: -144.1, x: 616, y: 401});
			ctaTL.set(".rect23", {rotation: 3.5, x: 854, y: 72});
			ctaTL.set(".rect24", {rotation: -150.8, x: 834, y: 398});
			ctaTL.set("#cta_erase_clip_path > rect", {visibility: "hidden"});

			ctaTL.to(".rect14",
			{
				duration: 0.6,
				onComplete: function()
				{
					$('.rect14').css({visibility: "visible"})
				}
			})
			.to(".rect14",
			{
				duration: 0.6,
				ease: 'power1.in',
				height: 426,
				onComplete: function()
				{
					$('.rect15').css({visibility: "visible"})
				}
			})
			.to(".rect15",
			{
				duration: 0.25,
				ease: 'power1.in',
				height: 346,
				onComplete: function()
				{
					$('.rect16').css({visibility: "visible"})
				}
			})
			.to(".rect16",
			{
				duration: 0.2,
				ease: 'power1.in',
				height: 447,
				onComplete: function()
				{
					$('.rect17').css({visibility: "visible"})
				}
			})
			.to(".rect17",
			{
				duration: 0.15,
				ease: 'power1.in',
				height: 501,
				onComplete: function()
				{
					$('.rect18').css({visibility: "visible"})
				}
			})
			.to(".rect18",
			{
				duration: 0.13,
				ease: 'power1.in',
				height: 504,
				onComplete: function()
				{
					$('.rect19').css({visibility: "visible"})
				}
			})
			.to(".rect19",
			{
				duration: 0.12,
				ease: 'power1.in',
				height: 332,
				onComplete: function()
				{
					$('.rect20').css({visibility: "visible"})
				}
			})
			.to(".rect20",
			{
				duration: 0.12,
				ease: 'power1.in',
				height: 495,
				onComplete: function()
				{
					$('.rect21').css({visibility: "visible"})
				}
			})
			.to(".rect21",
			{
				duration: 0.12,
				ease: 'power1.in',
				height: 524,
				onComplete: function()
				{
					$('.rect22').css({visibility: "visible"})
				}
			})
			.to(".rect22",
			{
				duration: 0.15,
				ease: 'power1.in',
				height: 522,
				onComplete: function()
				{
					$('.rect23').css({visibility: "visible"})
				}
			})
			.to(".rect23",
			{
				duration: 0.2,
				ease: 'power1.in',
				height: 442,
				onComplete: function()
				{
					$('.rect24').css({visibility: "visible"})
				}
			})
			.to(".rect24",
			{
				duration: 0.4,
				ease: 'power1.out',
				height: 502
			});
		})
		.addTo(ctaCtrl);
	}

	/* 

	11. Work Slider

	*/

	function initWorkSlider()
	{
		var work_slider = $('.work_slider');
		const work_cursor = document.querySelector('.work_cursor');

		work_slider.owlCarousel(
		{
			loop:true,
			margin:30,
			nav:false,
			dots:false,
			items:1,
			responsive:{
				1200:{
					items:2,
					margin:30
				},
				992:{
					items:2,
					margin:30
				},
				769:{
					items:2,
					margin:20
				},
				0:{
					items:1,
					margin:0
				}
			}
		});

		work_slider.on('mouseenter', function()
		{
			$("#cursor_circle").css({display: "none"});
			$(work_cursor).css({"display": "block"});
			const moveCursor = (e)=>
			{
				const mouseY = e.clientY;
				const mouseX = e.clientX;
				 
				$(work_cursor).css({"transform": "translate3d(" + (e.clientX - 40) + "px, " + (e.clientY - 17) + "px, 0px)"});
			}

			window.addEventListener('mousemove', moveCursor);
		});
		
		work_slider.on('mouseleave', function()
		{
			$("#cursor_circle").css({display: "block"});
			$(work_cursor).css({"display": "none"});
		});

		work_slider.on('mousedown', function()
		{
			$(work_cursor).find('.work_cursor_left').css({"left": "10px"});
			$(work_cursor).find('.work_cursor_right').css({"right": "10px"});
			$(work_cursor).find('.work_cursor_circle').css({"background-color": "#ff6d7f"});
		});
		
		work_slider.on('mouseup', function()
		{
			$(work_cursor).find('.work_cursor_left').css({"left": "0px"});
			$(work_cursor).find('.work_cursor_right').css({"right": "0px"});
			$(work_cursor).find('.work_cursor_circle').css({"background-color": "transparent"});
		});
	}

	/* 

	12. Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);
				var panel = $(acc.find($('.accordion_panel')));

				if(acc.hasClass('active'))
				{
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						close_all();
					}
					else
					{
						open_acc();
					}

					setTimeout(function()
					{
						$(window).trigger('resize.px.parallax');
					}, 500);
				});

				function close_all()
				{
					accs.removeClass('active');
					accs.each(function()
					{
						var tempAcc = $(this);
						var tempPanel = $(tempAcc.find($('.accordion_panel')));
						tempPanel.css('max-height', "0px");
					});
				};

				function open_acc()
				{
					close_all();
					acc.addClass('active');
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				};
			});
		}

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 500);
	}

});