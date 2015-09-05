

window.onload=function(){

	//车型 滑动
	$(function(){
		$('#slide,#slide .slide_bg').height($(window).height());
		
		//展开
		$('.pro_car_list_s').on('click',function(){
			$('#slide').show();
			// window.scrollTo(0,0);
			// $('body,html').css({'overflow':'hidden','height':'100%'});
			var a = parseInt($(window).width()*0.24) + 'px';
			$('.slide_fix_nav').text($(this).find('.right').text())
			$('#slide .slide').animate({
				left:a
			},300,'ease-out')
		})

		//收缩
		$('#slide .slide_bg').tap(function(){
			close_slide();
		})

		$('#slide .slide').on('swipeRight',function(){
			close_slide();
		})

		function close_slide(){
			var a = parseInt($(window).width());
			$('#slide .slide').animate({
				left:a
			},600,'ease-out',function(){
				$('#slide').hide();
				$('body,html').css({'overflow':'','height':''});
			})
		}

	})

	//颜色 适配选择
	$('.interior_color .interior_list').tap(function(){
		var _this =$(this);
		$('.interior_color .interior_list').each(function(){
			$(this).removeClass('checked_this');
			$(this).find('em img').attr('src','statics/img/icon_check.gif');
		})
		_this.addClass('checked_this');
		_this.find('em img').attr('src','statics/img/icon_checked.gif');

	});

	$(function(){
		var a = $(window).height(),b=$('body').height();
		if(a > b + 100){
			$('a.btn1').addClass('p_fix').css('bottom','1rem')
		}
	})

}