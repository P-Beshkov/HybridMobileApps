var app = app || {};

(function(a) {
	var records = new kendo.data.DataSource({
		data:new kendo.data.ObservableArray([
			{
				ItemName:"Item 1", 
				Id:1, 
				Category:"Demo", 
				ListId:1,
				Finished:"Pending",
				buttonStyle:"inline-block",
			},{
				ItemName:"Item 2", 
				Id:1, 
				Category:"Demo", 
				ListId:1,
				Finished:"Pending",
				buttonStyle:"inline-block",
			},{
				ItemName:"Item 5", 
				Id:1, Category:"Test", 
				ListId:1,
				Finished:"Ready",
				buttonStyle:"none",
			},
		]),
		group: "Finished",
	});
	var selectedListId;
	function init() {
	}
	
	function addItem(e) {
		var parentChilds = e.button.context.parentElement.childNodes;
		var itemName = parentChilds[1].innerText;
		var itemCategory = parentChilds[3].innerText;
		records.add({
			ItemName:itemName,
			Id:1,
			Category:itemCategory,
			ListId:1,
			Finished:"Pending",
			buttonStyle:"inline-block",
		});
	}
	
	function itemFinished(e) {
		var itemName = e.button.context.parentElement.childNodes[1].innerText;
		var data = records.data();
		for (var i = 0; i < data.length;i++) {
			if (data[i].ItemName === itemName) {
				data[i].Finished = Ready;
				data[i].buttonStyle = "none";
				$("#recordsListView").data("kendoMobileListView").refresh()
				break;
			}
		}
	}
	
	a.records = {	
		init:init,
		data:records,
		selectedListId:selectedListId,
		addItem:addItem,
		itemFinished:itemFinished,
	};
}(app));