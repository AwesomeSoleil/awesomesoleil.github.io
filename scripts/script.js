$(document).ready(function() {
	
	var api;
	
	$.getJSON( "http://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg,RU&units=metric&&APPID=bf03de8120fbabf27fdd083f9d1fddc0", function(data) {
		$.each( data, function(key, value) {
			console.log(key + " =>=> " + value);
		});
		api = data;
		console.log(data);
		console.log("data.weather is: ");
		for (var i = 0; i < data.weather.length; i++) {
			console.log(data.weather[i]);
		}
	});
	
	$("#getMessage").click(function() {
		var pressure = Math.round(api.main.pressure * 0.750061561303);
		$(".message").html("Weather report for " + api.name);
		$("#temp").html("Temperature is " + api.main.temp + "&#8451;");
		$("#humidity").html("Humidity is " + api.main.humidity + "&#x00025;");
		$("#pressure").html("Pressure is " + pressure + " mmHg");
		var imgSource = "http://openweathermap.org/img/w/" + api.weather[0].icon + ".png";
		$("#iconImage").attr("src", imgSource);
	});
});
