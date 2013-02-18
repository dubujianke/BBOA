<!-- begin of scripts                  ************************ -->
function test() {
	//var url = "local:///assets/oa/OASampleData.json";
	var url = "assets/oa/OASampleData.json";
	$.getJSON(url, function(json) {
		alert(json);
   		console.log(json); 
 });
}

$('#page_OAList').live( "pagebeforecreate", function(e){
	$.ajax({
		url: "assets/oa/OASampleData.json",
		dataType: "json",
		success: function( response ) {
			var markup = "";
			$.each(response, function(index, result) {
				var $template = $('<div><li><a href="#page_BIDetail_bar"><img class="profile"><h1 class="ui-li-heading"></h1> <p class="ui-li-desc"></p> <p class="ui-li-aside"></p></a></li></div>');
				if (result.status == "1")
					$template.find(".profile")
						.attr("src", "assets/images/page.png");
				else if (result.status == "2")
					$template.find(".profile")
						.attr("src", "assets/images/page_accept.png");
				else if (result.status == "3")
					$template.find(".profile")
						.attr("src", "assets/images/page_remove.png");
				$template.find(".ui-li-heading").append(result.author);
				$template.find(".ui-li-desc").append(result.subject);
				$template.find(".ui-li-aside").append(result.createdtime);
				markup += $template.html();
			});
			$( "#OAList" ).append(markup).listview( "refresh", true );
		},
	});
	
	$.mobile.changePage( $("#page_OAList") );
});


$('#page_FieldList').live( "pagebeforecreate", function(e){
	$.ajax({
		url: "assets/field/FieldSampleData.json",
		dataType: "json",
		success: function( response ) {
			var markup = "";
			$.each(response, function(index, result) {
				var $template = $('<div><li><a href="#page_BIDetail_bar"><img class="profile"><h1 class="ui-li-heading"></h1> <p class="ui-li-desc"></p> <p class="ui-li-aside"></p></a></li></div>');
				$template.find(".profile")
					.attr("src", "assets/images/note_accept.png");
				$template.find(".ui-li-heading").append(result.author);
				$template.find(".ui-li-desc").append(result.subject);
				$template.find(".ui-li-aside").append(result.createdtime);
				markup += $template.html();
			});
			$( "#FieldList" ).append(markup).listview( "refresh", true );
		},
	});
	
	$.mobile.changePage( $("#page_FieldList") );
});

$('#page_PhotoList').live( "pagebeforecreate", function(e){
	$.ajax({
		url: "assets/photo/PhotoSampleData.json",
		dataType: "json",
		success: function( response ) {
			var markup = "";
			$.each(response, function(index, result) {
				var $template = $('<div><li><a href="#page_BIDetail_bar"><img class="profile"><h1 class="ui-li-heading"></h1> <p class="ui-li-desc"></p> <p class="ui-li-aside"></p></a></li></div>');
				$template.find(".profile")
					.attr("src", "assets/images/note_accept.png");
				$template.find(".ui-li-heading").append(result.author);
				$template.find(".ui-li-desc").append(result.subject);
				$template.find(".ui-li-aside").append(result.createdtime);
				markup += $template.html();
			});
			$( "#PhotoList" ).append(markup).listview( "refresh", true );
		},
	});
	
	$.mobile.changePage( $("#page_PhotoList") );
});

$('#page_OrderList').live( "pagebeforecreate", function(e){
	$.ajax({
		url: "assets/order/OrderSampleData.json",
		dataType: "json",
		success: function( response ) {
			var markup = "";
			$.each(response, function(index, result) {
				var $template = $('<div><li><a href="#page_BIDetail_bar"><img class="profile"><h1 class="ui-li-heading"></h1> <p class="ui-li-desc"></p> <p class="ui-li-aside"></p></a></li></div>');
				$template.find(".profile")
					.attr("src", "assets/images/note_edit.png");
				$template.find(".ui-li-heading").append(result.author);
				$template.find(".ui-li-desc").append(result.subject);
				$template.find(".ui-li-aside").append(result.createdtime);
				markup += $template.html();
			});
			$( "#OrderList" ).append(markup).listview( "refresh", true );
		},
	});
	
	$.mobile.changePage( $("#page_OrderList") );
});

$('#page_CustomerList').live( "pagebeforecreate", function(e){
	$.ajax({
		url: "assets/customer/CustomerSampleData.json",
		dataType: "json",
		success: function( response ) {
			var markup = "";
			$.each(response, function(index, result) {
				var $template = $('<div><li><a href="#page_BIDetail_bar"><img class="profile"><h1 class="ui-li-heading"></h1> <p class="ui-li-desc"></p> <p class="ui-li-aside"></p></a></li></div>');
				$template.find(".profile")
					.attr("src", "assets/images/she_user.png");
				$template.find(".ui-li-heading").append(result.CustomerName);
				$template.find(".ui-li-desc").append(result.CompanyName);
				$template.find(".ui-li-aside").append(result.Phone);
				markup += $template.html();
			});
			$( "#CustomerList" ).append(markup).listview( "refresh", true );
		},
	});
	
	$.mobile.changePage( $("#page_CustomerList") );
});


<!-- end of scripts                    ************************ -->