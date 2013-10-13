/// <reference path="jquery.min.js" />
var httpRequester = (function () {
	function getJSON(url) {
		var promise = new RSVP.Promise(function(resolve, reject){
			$.ajax({
				url:url,
				type:"GET",
				dataType:"json",
				contentType:"application/json",
				timeout:5000,
				success:function(data){
					resolve(data);
                },
				error: function(data){
					reject(date);
                },
            });
        });
		return promise;
	}
	function postJSON(url, data, success, error) {
		 
		$.ajax({
			url: url,
			type: "POST",
			contentType: "application/json",
			timeout: 5000,
			data: JSON.stringify(data),
			success: success,
			error: error
		});
	}
	return {
		getJSON: getJSON,
		postJSON: postJSON
	};
}());