var Slider = function(s, t) {

	var slider = $(s);
	var imgs = $(s + ' img');
	var curImg = 0;
	var timer = 0;
	var slideTime = (t) ? t : 3000;
	var fgb = $(imgs[0]).attr('src');
	var firstFade = true;

	slider.css('background','url(' + fgb + ')');

	if ($('html').hasClass('no-opacity')) {
		for (var i = 0; i < imgs.length; i++) {
			$(imgs[i]).css('opacity', '0');
		}
		$(imgs[0]).css('opacity','1');
	} else {
		$(imgs[0]).addClass('show');
	}

	function slideShowCSS() {
		if (timer < slideTime) {
			timer += 10;
		} else if (timer >= slideTime) {
			if (curImg < imgs.length - 1) {
				$(imgs[curImg]).removeClass('show');
				curImg += 1;
				$(imgs[curImg]).addClass('show');
				if (firstFade === true) {
					slider.css('background','');
					firstFade = false;
				}
			} else {
				$(imgs[curImg]).removeClass('show');
				curImg = 0;
				$(imgs[curImg]).addClass('show');
			}
			timer = 0;
		}
	}

	function slideShowjQuery() {
		if (timer < slideTime) {
			timer += 10;
		} else if (timer >= slideTime) {
			if (curImg < imgs.length - 1) {
				$(imgs[curImg]).animate({'opacity': '0'}, slideTime);
				curImg += 1;
				$(imgs[curImg]).animate({'opacity': '1'}, slideTime);
			} else {
				$(imgs[curImg]).animate({'opacity': '0'}, slideTime);
				curImg = 0;
				$(imgs[curImg]).animate({'opacity': '1'}, slideTime);
			}
			timer = 0;
		}
	}

	if ($('html').hasClass('csstransitions')) {
		setInterval(slideShowCSS, 20);
	} else if ($('html').hasClass('no-csstransitions')) {
		setInterval(slideShowjQuery, 20);
	}

}