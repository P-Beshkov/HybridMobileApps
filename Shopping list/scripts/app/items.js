var app = app || {};

app.items = (function() {
	var items = new kendo.data.DataSource({
		data:[
			{Name:"Item 1", CategoryName: "Category 1"},
			{Name:"Item 2", CategoryName: "Category 2"},
			{Name:"Item 3", CategoryName: "Category 2"},
			{Name:"Item 4", CategoryName: "Category 1"}
		],
		group:"CategoryName",
	});
	
	function init() {
		//httpRequester.getJSON("http://localhost:1557/api/items").
		//then(function(recievedLists) {
		//	//lists.data = recievedLists;
		//}, function(error) {
		//});
		kendo.bind($("#listName"), listName);		
	}
	function itemClicked(e) {
	}
	var name = "None";
	var listName = new kendo.data.ObservableObject({
		name: name
	});
	return {	
		init:init,
		data:items,
		itemClicked: itemClicked,
		currentListName : listName
	};	
}(app));