var wods = [];

function WODListUpdate(){

	//When you click the add button then this is to store the input value into var
	var inExerName = document.getElementById('inputExerName').value;
	var inExerDesc = document.getElementById('inputExerDesc').value;
	var inAssignee = document.getElementById('inputAssignee').value;
	var inDifficulty = document.getElementById('inputDifficulty').value;

	var newWod = {
		Name: inExerName,
		Description: inExerDesc,
		Assignee: inAssignee,
		Difficulty: inDifficulty,
		Completed: false
	}

	//If the input value is empty or null then will not execute the logic after this. This to make sure user do enter input value
	if(inExerName == "" || inExerName == null || inExerDesc == "" || inExerDesc == null || inAssignee == "" || inAssignee == null || inDifficulty == "" || inDifficulty == null){
		alert("Form must completely filled out!")
		return false;
	}

	//Create new td for the new input value
	var	newTd1 = document.createElement("td")
	var	newTd2 = document.createElement("td")
	var	newTd3 = document.createElement("td")
	var	newTd4 = document.createElement("td")

	//Put the new input value into td1-td4
	newTd1.innerHTML = inExerName;
	newTd2.innerHTML = inExerDesc;
	newTd3.innerHTML = inAssignee;
	newTd4.innerHTML = inDifficulty;

	//Create new tr
	var newTr = document.createElement("tr");
	newTr.wod = newWod;

	//Define which td that want to insert the new row of data
	var wodtbody = document.getElementById("myTableData")
	newTr.appendChild(newTd1)
	newTr.appendChild(newTd2)
	newTr.appendChild(newTd3)
	newTr.appendChild(newTd4)
	wodtbody.appendChild(newTr)

	//If we click the row on the myTableData then it will display into the WODdetails list and unhide it
	newTr.addEventListener('click', function(){
		console.log(newWod);
		document.getElementById("WODDetails").hidden = false;
		document.getElementById("detailsName").innerHTML = "Mock Name: " + newWod.Name;
		document.getElementById("detailsDesc").innerHTML = "Mock Description: " + newWod.Description;
		document.getElementById("detailsAssignee").innerHTML = "Mock Assignee: " + newWod.Assignee;
		document.getElementById("detailsDifficulty").innerHTML = "Mock Difficulty: " + newWod.Difficulty;
		document.getElementById("detailsStatus").innerHTML = "Status: " + newWod.status;
	})

	function deletePressed(){

	}

	function markAsDonePressed(){
		
	}

	// var table = document.getElementById("myTableData");
	// var row = table.insertRow(0);
	// var cell1 = row.insertCell(0);
	// var cell2 = row.insertCell(1);
	// var cell3 = row.insertCell(2);
	// var cell4 = row.insertCell(3);
	// cell1.innerHTML = inExerName;
	// cell2.innerHTML = inExerDesc;
	// cell3.innerHTML = inAssignee;
	// cell4.innerHTML = inDifficulty;

}


