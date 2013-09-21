
$(document).ready(function(){
var baner1 = $('.baner-levi'),
					prva = $('.baner-levi img:first-child'),
					druga = $('.baner-levi img:last-child');
				baner1.on('mouseenter', function(){
					druga.animate({
						'top':'-1px'
					},800);
					prva.animate({
								'top':'250px'
					},600);
		
				});
				baner1.on('mouseleave', function(){
					
					druga.animate({
						'top':'-250px'
					},800);
					prva.animate({
						'top':'0px'
					},800);
				});
						
});

$(document).ready(function(){
var baner2 = $('.baner-desni'),
					prva = $('.baner-desni img:first-child'),
					druga = $('.baner-desni img:last-child');
				baner2.on('mouseenter', function(){
					druga.animate({
						'top':'1px'
					},600);
					
					prva.animate({
								'top':'250px'
					},600);
				});
				baner2.on('mouseleave', function(){
					druga.animate({
						'top':'-250px'
					},800);
						prva.animate({
						'top':'0px'
					},800);
				});
				



});
	$(document).ready(function(){
	var work1 = $('.onas, .storitve, .oprema, .kontakt'),
				prva = $('.onas img:first-child, .storitve img:first-child, .oprema img:first-child, .kontakt img:first-child'),
				druga = $('.onas img:last-child, .storitve img:last-child, .oprema img:last-child, .kontakt img:last-child');
			prva.on('mouseenter', function(){
				$(this).fadeOut(700);
				});
			prva.on('mouseleave', function(){
				prva.fadeIn(600);
				});		
					});		
				
				
				
				
				
				
				
				






