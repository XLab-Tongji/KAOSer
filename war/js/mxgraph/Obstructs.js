function addObstructs() {
    var tr3 = document.createElement("tr");
    tr3.setAttribute("id","Obstacle");
    var td3_1 = document.createElement("td");
    td3_1.innerHTML = "Obstructs";
    var td3_1_width = document.createAttribute("width");
    td3_1_width.value = "100px";
    td3_1.setAttributeNode(td3_1_width);
    var td3_2 = document.createElement("td");
    var input3 = document.createElement("h4");
    var input3_id = document.createAttribute("id");
    input3_id.value = "IObstructs";
    input3.setAttributeNode(input3_id);
    td3_2.appendChild(input3);
    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    return tr3;
}

function addTarget() {
    var tr3 = document.createElement("tr");
    tr3.setAttribute("id","Targets");
    var td3_1 = document.createElement("td");
    td3_1.innerHTML = "Solve";
    var td3_1_width = document.createAttribute("width");
    td3_1_width.value = "100px";
    td3_1.setAttributeNode(td3_1_width);
    var td3_2 = document.createElement("td");
    var input3 = document.createElement("h4");
    var input3_id = document.createAttribute("id");
    input3_id.value = "Target";
    input3.setAttributeNode(input3_id);
    td3_2.appendChild(input3);
    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    return tr3;
}