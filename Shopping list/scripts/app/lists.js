var app = app || {};

app.lists = (function(a) {
	var lists = new kendo.data.DataSource({
		data:[
			{
				Name:"List 1", 
				Id:1
			},{
				Name:"List 2",
				Id:2
			}
		]
	});
	var currentListId;
	var newListName = kendo.observable({
		newListName:"asd",
	});
	function init() {
		//httpRequester.getJSON("http://localhost:1557/api/lists").
		//then(function(recievedLists) {
		//	//lists.data = recievedLists;
		//}, function(error) {
		//});		
	}
	function listClicked(e) {
		a.records.selectedListId = e.dataItem.Id;
		a.items.currentListName.set("name", e.dataItem.Name);
	}
	function addList() {
		if (newListName.length == 0)
			return;
		lists.add({
			Name:"Added list",
			Id:1,
		});
		$("#flat-listview").data("kendoMobileListView").refresh()
		
	}
	kendo.bind($("#newListNameInput"), newListName);
	return {	
		init:init,
		data:lists,
		listClicked:listClicked,
		currentListId:currentListId,
		addList:addList,
	};
}(app));