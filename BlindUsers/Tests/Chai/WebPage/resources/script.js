// function readURL(input) {
// 	if (input.files && input.files[0]) {
// 		var reader = new FileReader();

// 		reader.onload = function(e) {
// 			$("#uploaded-image").attr('src', e.target.result);
// 		}

// 		reader.readAsDataURL(input.files[0]);
// 	}

	

// }

// $("#customFile").change(function(){
// 	readURL(this);
// });
function readURL() {
	$("#uploaded-image").removeClass('d-none')
	$("#uploaded-image").addClass('d-block')

	$("#alt-text").removeClass('d-none')
	$("#alt-text").addClass('d-block')
	
	$("#upload-button").removeClass('disabled')
	$("#upload-button").removeClass('btn-secondary')
	$("#upload-button").addClass('btn-primary')
}