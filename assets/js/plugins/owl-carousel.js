var OwlCarousel = function () {

    return {

        //Owl Carousel
        initOwlCarousel: function () {
	        //Owl Slider v1
			jQuery(".owl-slider").owlCarousel({
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet: [600,3],
                itemsMobile : [479,2]
            });
            // Custom Navigation Events
            jQuery(".next-v1").click(function(){
                owl.trigger('owl.next');
            })
            jQuery(".prev-v1").click(function(){
                owl.trigger('owl.prev');
            })


	        //Owl Slider v2
			jQuery(".owl-slider-v2").owlCarousel({
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet: [600,3],
                itemsMobile : [479,2],
                slideSpeed: 1000
            });
            // Custom Navigation Events
            jQuery(".next-v2").click(function(){
                owl.trigger('owl.next');
            })
            jQuery(".prev-v2").click(function(){
                owl.trigger('owl.prev');
            })


	        //Owl Slider v3
			jQuery(".owl-slider-v3").owlCarousel({
            	items : 9,
            	autoPlay : 5000,
				itemsDesktop : [1000,5],
				itemsDesktopSmall : [900,4],
				itemsTablet: [600,3],
				itemsMobile : [300,2]
            });


	        //Owl Slider v4
			jQuery(".owl-slider-v4").owlCarousel({
                items:3,
                itemsDesktop : [1000,3],
                itemsTablet : [600,2],
                itemsMobile : [479,1]
            });

            //Owl Twitter v1
            jQuery(".owl-twitter-v1").owlCarousel({
                singleItem : true,
                slideSpeed : 1000,
                autoPlay : 10000
            });


            //Owl Testimonials v1
            jQuery(".owl-ts-v1").owlCarousel({
                slideSpeed : 600,
                singleItem : true,
                navigation : true,
                navigationText : ["",""]
            });

            //Owl Clients v1
            jQuery(".owl-clients-v1").owlCarousel({
                items : 7,
                autoPlay : 5000,
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet: [600,3],
                itemsMobile : [300,2]
            });

            //Owl Clients v2
            jQuery(".owl-clients-v2").owlCarousel({
                items : 5,
                autoPlay : 10000,
                itemsDesktop : [1000,5],
                itemsDesktopSmall : [900,4],
                itemsTablet : [600,3],
                itemsMobile : [479,1]
            });

            //Owl ads
            jQuery(".ads-slider").owlCarousel({
                items : 2,
                autoPlay : 5000,
                itemsDesktop : [1000,2],
                itemsDesktopSmall : [900,2],
                itemsTablet : [600,1],
                itemsMobile : [479,1],
                loop:true,
                autoWidth:true
            });
		}

    };

}();
