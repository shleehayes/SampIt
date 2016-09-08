$( document ).ready(function() {
	
  $("#camera_button").bind('touchstart', function(){
		navigator.camera.getPicture(onSuccess, onFail, 
			{ 
        quality: 75,
    		destinationType: Camera.DestinationType.DATA_URL,
    		sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
			  encodingType: Camera.EncodingType.JPEG,
			  cameraDirection: 1,
        targetWidth: 600,
        targetHeight: 1100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true
      })
  });

  function onSuccess(imageData) {
      var $image = $("#image_store");
      $image.attr("src", "data:image/jpeg;base64," + imageData);
  }

  function onFail(message) {
      alert('Failed because: ' + message);
  }

});

