$(document).ready(function(){

	var pokeName;

	$("#search").keypress(function(event){
		if(event.keyCode==13){
			$("h2").remove();
			pokeName=$("#search").val().toLowerCase();
			console.log(pokeName);
			$.ajax({
				url:"https://pokeapi.co/api/v2/characteristic/1/?",
				method: "GET",
				dataType:"JSON",
				data:{
					'name':pokeName,
				},
				success: function(data){
					console.log(data);
					for (var i = 0; i<data.descriptions.length; i++){
						var fun = $("<p>"+data.descriptions[i].description+"</p>");
						$("body").append(fun);
					}

					// console.log(data.results);
					// for (var i=0; i<data.results.length; i++){
					// 	console.log(data.results[i].name);
					// 	var characteristicName = data.results[i].name;
					// 	if(i==0){
					// 		var newHeader = $("<h2 id='i+1'><span class='name'>"+pokeName+"</span> has the characteristic <span class='name'>"+characteristicName+"</span></h2>");
					// 	} else{
					// 			var newHeader = $("<h2 id='i+1'><span class='name'>"+pokeName+"</span> also has the characteristic <span class='name'>"+characteristicName+"</span></h2>");
					// 	}
					// 	$("body").append(newHeader);
					// 	$(".name").css("text-transform","capitalize")
					// }
				},
				error: function(data, textStatus, errorThrown){
					console.log("this is the weakest link");
					console.log(errorThrown);
					var newHeader = $("<h2>Sorry, we were not able to find anything according to your request, probably Team rocket getting in our way :/</h2>");
					$("body").append(newHeader);
				}
			})
		}
	})
})
	
