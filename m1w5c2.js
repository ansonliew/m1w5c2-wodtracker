function WODListUpdate(){

	var inExerName = document.getElementById('inputExerName').value;
	var inExerDesc = document.getElementById('inputExerDesc').value;
	var inAssignee = document.getElementById('inputAssignee').value;
	var inDifficulty = document.getElementById('inputDifficulty').value;

	if(inExerName == "" || inExerName == null || inExerDesc == "" || inExerDesc == null || inAssignee == "" || inAssignee == null || inDifficulty == "" || inDifficulty == null){
		alert("Form must completely filled out!")
		return false;
	}

	var table = document.getElementById("myTableData");
	var row = table.insertRow(0);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = inExerName;
	cell2.innerHTML = inExerDesc;
	cell3.innerHTML = inAssignee;
	cell4.innerHTML = inDifficulty;

}


