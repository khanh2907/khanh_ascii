var nextID = 0;
var maxID = 5;
$( document ).ready(function() {

	

	setInterval(frameHandler,200);

	function frameHandler(){
		var frames = $(".frame")
		frames.hide();
		frames.each(function(index){
			var currentFrame = $(this);
			var currentFrameID = currentFrame.attr('id');
			if (currentFrameID == nextID) {
				currentFrame.show();
			}
		})
		nextID++;
		if (nextID > maxID)
			nextID = 0;
	}

});

