$(document).ready(function(){

	$("#size").on("input",function(){
		$("figure svg").css("width",this.value+"px"),
		$("figure svg").css("height",this.value+"px")
	});

	$("#stroke").on("input",function(){
		$("figure svg").css("stroke-width",this.value+"px")
	});


	// load all icons from json and load to dom
	$.getJSON("emerald.json", function(icons) {
		icons.forEach(function(icon, i) {

			$( "#iconlist" ).append( '<figure data-name='+icon.name+' data-tags="'+icon.tags+'"><div></div><h1>'+icon.name+'.svg</h1><span>'+icon.tags+'</span></figure>'  );
			selector = "figure[data-name='"+icon.name+"'] > div";
			loadSvg(selector, "../icons/" + icon.name );




		});
	});

	// live filter by hide stuff whats not part of data-tags
	$("#filter").on('input', function(){

		if ($(this).val())
		{
			$("figure h1").show();
			$("figure span").show();
		}
		else
		{
			$("figure h1").hide();
			$("figure span").hide();		
		}


		search = $(this).val().toLowerCase();
		$('[data-tags]').each(
			function()
				{
				tags = $(this).attr("data-tags").toLowerCase();
				if ( tags.indexOf(search) !== -1 ) { $(this).show();  }
				else { $(this).hide(); }
				}
			);
	});

});


// inject inline-svg into element
function loadSvg(selector, url) {
  var target = document.querySelector(selector);

    var ajax = new XMLHttpRequest();
    ajax.open("GET", url + ".svg", true);
    ajax.send();

    ajax.onload = function(e) {
      target.innerHTML = ajax.responseText;
    }
}

