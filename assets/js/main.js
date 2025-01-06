window.onload = function() {
	if ( window.location.protocol === "file:" ) {
		alert( "This sample requires an HTTP server. Please serve this file with a web server." );
	}

	var saveButton = document.querySelector('#save-button')
		, editor = document.querySelector(".ck-content").ckeditorInstance
	;
	saveButton.addEventListener('click', () => {
		const content = editor.getData();
		console.log('Content saved:', content);
	});
};
