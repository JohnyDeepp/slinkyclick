$(document).on('click', function (e) {
	$('<div class="cursor">')
		.css({
			top: e.clientY,
			left: e.clientX
		})
		.appendTo($(document.body))
		.on('animationend webkitAnimationEnd', function (e) {
			$(this).remove();
		});
});
