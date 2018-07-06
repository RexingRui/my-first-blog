
$(document).ready(function() {

	/*轮播画面*/
	$(".mySlides:first").addClass("imgShow");
	$(".prev").click(showPrevNext);
	$(".next").click(showPrevNext);
	$(".dot").click(showImg);
});

/*轮播画面*/
function showPrevNext(e) {
	if (e.target.className == 'prev') {
		let prveElement = $(".imgShow").prev('.mySlides').length;
		if (prveElement === 0) {
			$(".imgShow").removeClass("imgShow");
			$(".mySlides:last").addClass("imgShow");
		} else {
			$(".imgShow").removeClass('imgShow').prev().addClass("imgShow");
		}
	} else {
		let nextElement = $(".imgShow").next('.mySlides').length;
		if (nextElement === 0 ) {
			$(".imgShow").removeClass("imgShow");
			$(".mySlides:first").addClass("imgShow");
		} else {
			$(".imgShow").removeClass('imgShow').next().addClass("imgShow");
		}
	}

}

function showImg(event) {
	var dotNum = event.target.getAttribute('id');
	$(".mySlides").removeClass("imgShow").eq(dotNum-1).addClass("imgShow");
	$(".dot").removeClass("active").eq(dotNum-1).addClass("active");
}