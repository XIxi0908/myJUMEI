window.onload = function() {
	$(".myjm_li_box").hover(
				function(){
					$(".nav_jm").css({"display":"block"});
					
					$(".shangbiao1").css({
						"opacity": '1'
					});
					$(".xiabiao1").css({
						"opacity": '0'
					});
				},
				function(){
					$(".nav_jm").css({"display":"none"});
					$(".shangbiao1").css({
						"opacity": '0'
					});
					$(".xiabiao1").css({
						"opacity": '1'
					});
				}
			)
		$(".more_li_box").hover(
			function(){
				$(".nav_more").css({"display":"block"});
				$(".shangbiao2").css({
					"opacity": '1'
				});
				$(".xiabiao2").css({
					"opacity": '0'
				});
			},
			function(){
				$(".nav_more").css({"display":"none"});
				$(".shangbiao2").css({
					"opacity": '0'
				});
				$(".xiabiao2").css({
					"opacity": '1'
				});
			}
		);
		$(".mz_shopping").hover(
			function(){
				$(".shangbiao4").animate({
					"opacity": '1'
				});

				$(".shangbiao4").css({
					"color": '#999',
					// "transform": 'rotate(180deg)'
				});
				
				$(".xiabiao4").css({
					"opacity": '0'
				});
				
				$(".textarea_box").css({
					"display":"block",
					// "transiton":"2s"
				});

				$(".textarea_box").animate({
					top: '+38',
				   	// opacity: '1'
				}, "slow");

			},
			function(){
				$(".shangbiao4").css({
					"opacity": '0'
				});
				$(".xiabiao4").css({
					"opacity": '1'
				});
				$(".textarea_box").css({"display":"none"});
			}
		);
		$(".box_imglist").hover(
			function(){
				$(".box_imglist img").animate({
					   opacity: '1'
					}, "slow");
			},
			function(){
				$(".box_imglist img").animate({
					   opacity: '.8',
					   "transform": 'scale(1.5)'
					}, "normal");
			}
		);
		$(".min_login").hover(
			function(){
				$(".status_logout").css({"display":"block"});
			},
			function(){
				$(".status_logout").css({"display":"none"});
			}
		);
		$(".item_01").hover(
			function(){
				$(".item_01").css({"box-shadow":"gray 0px 0px 30px"});
				$(".search_list_tags").css({"display":"block"});
			},
			function(){
				$(".search_list_tags").css({"display":"none"});
				$(".item_01").css({"box-shadow":"none"});
			}
		);
}   