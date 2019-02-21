
window.onload = function(){
	// banner
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
		$(".today_tm").click(function(){
			$(".today_tm").css({"background": "#666","color": "#e6e6e6"});
			$(".today").css({"background": "#f7f7f7","color": "black","border-bottom": "1px solid #666"});
			$(".tm").css({"display": "block"});
			$(".ts").css({"display":"none"});
			$(".tab_box_02").css({"display":"block"});
			$(".tab_box_01").css({"display":"none"});
		})
		$(".today").click(function(){
			$(".today_tm").css({"background": "#f7f7f7","color": "black","border-bottom": "1px solid #666"});
			$(".today").css({"background": "#666","color": "#e6e6e6"});
			$(".ts").css({"display":"block"});
			$(".tm").css({"display": "none"});
			$(".tab_box_02").css({"display":"none"});
			$(".tab_box_01").css({"display":"block"});
		})
		//今日上新单品动画
		$(".n_1").hover(
			function(){
				$(".c_1").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_1").css({"display":"none"});
			}
		)
		$(".n_2").hover(
			function(){
				$(".c_2").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_2").css({"display":"none"});
			}
		)
		$(".n_3").hover(
			function(){
				$(".c_3").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_3").css({"display":"none"});
			}
		)
		$(".n_4").hover(
			function(){
				$(".c_4").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_4").css({"display":"none"});
			}
		)
		$(".n_5").hover(
			function(){
				$(".c_5").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_5").css({"display":"none"});
			}
		)
		$(".n_6").hover(
			function(){
				$(".c_6").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_6").css({"display":"none"});
			}
		)
		$(".n_7").hover(
			function(){
				$(".c_7").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_7").css({"display":"none"});
			}
		)
		$(".n_8").hover(
			function(){
				$(".c_8").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_8").css({"display":"none"});
			}
		)
		$(".n_9").hover(
			function(){
				$(".c_9").css({"display":"block","opacity":".7"});
			},
			function(){
				$(".c_9").css({"display":"none"});
			}
		)
		$(".t1").hover(
			function(){
				$(".i1").css({"opacity":".7"});
				$(".s1").css({"display":"block"});
			},
			function(){
				$(".i1").css({"opacity":"1"});
				$(".s1").css({"display":"none"});
			}
		)
		$(".t2").hover(
			function(){
				$(".i2").css({"opacity":".7"});
				$(".s2").css({"display":"block"});
			},
			function(){
				$(".i2").css({"opacity":"1"});
				$(".s2").css({"display":"none"});
			}
		)
		$(".t3").hover(
			function(){
				$(".i3").css({"opacity":".7"});
				$(".s3").css({"display":"block"});
			},
			function(){
				$(".i3").css({"opacity":"1"});
				$(".s3").css({"display":"none"});
			}
		)
		// 侧边栏
		$(".min_login").hover(
			function(){
				$(".status_logout").css({"display":"block"});
			},
			function(){
				$(".status_logout").css({"display":"none"});
			}
		);
}
function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}