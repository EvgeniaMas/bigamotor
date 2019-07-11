    /**
 * jQuery.browser.mobile (http://detectmobilebrowser.com/) */
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);



$(function(){

  // $("img.lazy").lazyload();
	// $('.color-overlay').height($('.bg1').outerHeight());
	// new WOW().init();
	// if($(window).outerWidth()<=991){
	// 	$('input[name="phone"]').removeClass('phone');
	// }
	
	$('.contactform1').submit(function() { 
	  if ( $(this).validationEngine('validate') ) {
	      $(this).ajaxSubmit();
	      yaCounter44976685.reachGoal('order1'); 
		  ga('send', 'event', 'order1', 'order1');
	      $(this).clearForm();
	      $.arcticmodal('close');	      
	      $(".thanks").arcticmodal();
	      // $.post('../php/callback.php', {
	      // 	newphone: newphone
	      // }, function(data, textStatus, xhr) {
	      // 	console.logo(data); 
	      // });
	  }
	  return false;
	}); 



	$('.contactform_q').submit(function() { 

	  if ( $(this).validationEngine('validate') ) {
	  	  
	  	  $('.contactform_q input[name="quiz1"]').val(q1);
	  	  $('.contactform_q input[name="quiz2"]').val(q2);
	  	  $('.contactform_q input[name="quiz3"]').val(q3);
	  	  $('.contactform_q input[name="quiz4"]').val(q4);
	  	  $('.contactform_q input[name="quiz5"]').val(q5);
	  	  $('.contactform_q input[name="quiz6"]').val(q6);
	  	  $('.contactform_q input[name="quizsale"]').val('Скидка: ' + $('.fades8 .counternew').text());

	      $(this).ajaxSubmit();
	      yaCounter44976685.reachGoal('order1');
		  ga('send', 'event', 'order1', 'order1');
	      $(this).clearForm();
	      $.arcticmodal('close');	      
	      $(".thanks2").arcticmodal();
	  }
	  return false;
	}); 



	// function alturaMaxima() {
	//   var altura = $(window).height();
	//   $(".full-screen").css('height',altura); 
	  
	// }

	// $(document).ready(function() {
	//   if(jQuery.browser.mobile){
	//   	$('body').css('height','700px');
	//   	$('body').css('min-height','700px');
	//   } else {
	//   	alturaMaxima();
	//   	$(window).bind('resize', alturaMaxima);
	//   }
	// });


	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	  var msViewportStyle = document.createElement('style')
	  msViewportStyle.appendChild(
	    document.createTextNode(
	      '@-ms-viewport{width:auto!important}'
	    )
	  )
	  document.querySelector('head').appendChild(msViewportStyle)
	}

	// $(".callbacks").on("click", function(){
	// 	alert('gghgh');
	//     $(".popup1").arcticmodal();
	//     return false;
	// });

	// $(".navigation a").click(function() {
	// 	var link = $(this).attr('href');
	//     $('html, body').animate({
	//         scrollTop: $(link).offset().top
	//     }, 1000);
	//     return false;
 // 	 });
	

	// var owl = $("#carous1");

	// owl.owlCarousel({
	//     loop:true,
	//     items:1,
	//     margin:0,
	//     nav:false,
	//     mouseDrag:true,
	//     touchDrag:true,
	//     dots:true,
	//     animateOut: 'fadeOut',
 //      autoplay:true,
 //      autoplayTimeout:7000,
 //      autoplayHoverPause:true,
	//     dotsEach:false
	// });

	// $('.bg5 .fa-angle-left').click(function() {
	//   owl2.trigger('prev.owl.carousel');
	// });
	// $('.bg5 .fa-angle-right').click(function() {
	//   owl2.trigger('next.owl.carousel');
	// });


	var q1,q2,q3,q4,q5,q6;

	$(".callback_next").on("click", function(){
	    $('.basic').fadeOut(0);
	    $('.nextblock').fadeIn(300);
	    $('.fadesxs3').fadeIn(300);
	    $('.overlay').addClass('filter');
	    $('.row .width').fadeOut(0);
	});

	$('.fades3 input,.fades4 input,.fades5 input,.fades7 input').on('keydown', function(event) {
		if($(this).length > 0){
			$(this).closest('.block').find('button.mybtn_white').addClass('blockbtn').animate({opacity: 1});;
		}
	});

	$('.fades2 .answers label').click(function(event) {
		if($(this).find('.checkin').html()==''){
			// $(this).closest('.answers').find('.checkin').html('');
			$(this).find('.checkin').html('<i class="fa fa-check">');
		} else {
			$(this).find('.checkin').html('');
			$(this).closest('.block').find('button.mybtn_white').fadeOut(300).removeClass('blockbtn');
		}
		
		$(this).closest('.block').find('button.mybtn_white').addClass('blockbtn').animate({opacity: 1});;
	});

	$('.fades6 .answers label').click(function(event) {
		if($(this).find('.checkin').html()==''){
			$(this).closest('.answers').find('.checkin').html('');
			$(this).find('.checkin').html('<i class="fa fa-check">');
		} else {
			$(this).find('.checkin').html('');
			$(this).closest('.block').find('button.mybtn_white').fadeOut(300).removeClass('blockbtn');
		}
		
		$(this).closest('.block').find('button.mybtn_white').addClass('blockbtn').animate({opacity: 1});;
	});

	var f1,f2,f3,f4;
	f2 = 0;
	f3 = 0;
	f4 = 0;


	$(".null2").on("click", function(){
	    $('.fades2').fadeOut(0);
	    $('.fades3').fadeIn(300);
	    q1 = '-';
	    $('.discount-total-count').text($('span.discount-total-count').text());
	});

	$(".null3").on("click", function(){
	    $('.fades3').fadeOut(0);
	    $('.fades4').fadeIn(300);
	    q2 = '-';
	    $('.discount-total-count').text($('span.discount-total-count').text());
	});

	$(".null4").on("click", function(){
	    $('.fades4').fadeOut(0);
	    $('.fades5').fadeIn(300);
	    q3 = '-';
	    $('.discount-total-count').text($('span.discount-total-count').text());
	});

	$(".null5").on("click", function(){
	    $('.fades5').fadeOut(0);
	    $('.fades6').fadeIn(300);
	    q4 = '-';
	    $('.discount-total-count').text($('span.discount-total-count').text());
	});

	$(".null6").on("click", function(){
	    $('.fades6').fadeOut(0);
	    $('.fades7').fadeIn(300);
	    q5 = '-';
	    $('.discount-total-count').text($('span.discount-total-count').text());
	});

	$(".null7").on("click", function(){
	    $('.fades7').fadeOut(0);
	    $('.fades8').fadeIn(300);
	    $('.fadesxs3').fadeOut(0);
	    q6 = '-';
	    $('.fades8 span.counternew').text($('span.discount-total-count').text());
	});


	$(".nexts2").on("click", function(){
	    $('.fades2').fadeOut(0);
	    $('.fades3').fadeIn(300);
	    $.each($('.fades2 i.fa.fa-check'), function(index, val) {
	    	q1 =  $(val).closest('.div').data('s') + '. ' + q1;
	    });
	    q1 = q1.split('undefined');

	    q1 = q1[0];


	    console.log(q1);
	    q1 = 'Необходимые запчасти: ' + q1;
	    $('.border .counter span').text(parseInt($('span.discount-total-count').text())+1+'%');
	});

	$(".nexts3").on("click", function(){
	    $('.fades3').fadeOut(0);
	    $('.fades4').fadeIn(300);
	    $('.border .counter span').text(parseInt($('span.discount-total-count').text())+1+'%');
	    
	    q2 = 'Марка автомобиля: ' + $('.fades3 label:first-child input').val() + '. Модель автомобиля: ' + $('.fades3 label:nth-child(2) input').val() + '. ';
	    
	    console.log(q2);
	});

	$(".nexts4").on("click", function(){
	    $('.fades4').fadeOut(0);
	    $('.fades5').fadeIn(300);
	    $('.border .counter span').text(parseInt($('span.discount-total-count').text())+1+'%');
	    
	    q3 = 'Год выпуска: ' + $('.fades4 label:first-child input').val() + '. ';
	    
	    console.log(q3);
	});

	$(".nexts5").on("click", function(){
	    $('.fades5').fadeOut(0);
	    $('.fades6').fadeIn(300);
	    $('.border .counter span').text(parseInt($('span.discount-total-count').text())+1+'%');
	    
	    q4 = 'Объем двигателя: ' + $('.fades5 label:first-child input').val() + '. Мощность двигателя: ' + $('.fades5 label:nth-child(2) input').val() + '. ';
	    
	    console.log(q4);
	});

	var summas;

	$(".nexts6").on("click", function(){
	    $('.fades6').fadeOut(0);
	    $('.fades7').fadeIn(300);
	    $('.border .counter span').text(parseInt($('span.discount-total-count').text())+1+'%');
	    $.each($('.fades6 i.fa.fa-check'), function(index, val) {
	    	q5 =  $(val).closest('.div').data('s') + '. ' + q5;
	    });
	    q5 = q5.split('undefined');

	    q5 = q5[0];
	    q5 = 'Вид коробки передач: ' + q5;
	    console.log(q5);
	});

	$(".nexts7").on("click", function(){
	    $('.fades7').fadeOut(0);
	    $('.fadesxs3').fadeOut(0);
	    $('.fades8').fadeIn(300);
	    $('.border .counter span').text(parseInt($('span.discount-total-count').text())+0+'%');
	    q6 = 'Идентификационный номер VIN: ' + $('.fades7 label:first-child input').val() + '. ';
	    
	    console.log(q6);
	    $('.fades8 span.counternew').text($('span.discount-total-count').text());
	});



});