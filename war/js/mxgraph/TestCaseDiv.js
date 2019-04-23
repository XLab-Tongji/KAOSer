function createTestCaseDiv() {

    var arrow = document.createElement('div');
    arrow.style.backgroundColor="#ffffff";
    var divattr = document.createAttribute("id");
    divattr.value = "detailcontainer";
    arrow.setAttributeNode(divattr);
    //if(flag==1) {
    //创建form
    var form = document.createElement("form");
    var formattr = document.createAttribute("id");
    formattr.value = "detailform";
    form.setAttributeNode(formattr);
    //创建table
    var table = document.createElement("table");
    var tableattr = document.createAttribute("id");
    tableattr.value = "detailtable";
    table.setAttributeNode(tableattr);

    //行 - 名称
    var tr0 = document.createElement("tr");
    var td0_1 = document.createElement("td");
    td0_1.innerHTML = "Name";
    var td0_1_width = document.createAttribute("width");
    td0_1_width.value = "100px";
    td0_1.setAttributeNode(td0_1_width);
    var td0_2 = document.createElement("td");
    var input0 = document.createElement("h4");
    var input0_id = document.createAttribute("id");
    input0_id.value = "testCaseId";
    input0.setAttributeNode(input0_id);
    td0_2.appendChild(input0);
    tr0.appendChild(td0_1);
    tr0.appendChild(td0_2);
    table.appendChild(tr0);

    //行 - Action
    var tr1 = document.createElement("tr");
    var td1_1 = document.createElement("td");
    td1_1.innerHTML = "Action";
    var td1_1_width = document.createAttribute("width");
    td1_1_width.value = "100px";
    td1_1.setAttributeNode(td1_1_width);
    var td1_2 = document.createElement("td");
    var input1 = document.createElement("h4");
    var input1_id = document.createAttribute("id");
    input1_id.value = "Action";
    input1.setAttributeNode(input1_id);
    td1_2.appendChild(input1);
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    table.appendChild(tr1);

    //行 - Checkpoint
    var tr2 = document.createElement("tr");
    var td2_1 = document.createElement("td");
    td2_1.innerHTML = "Checkpoint";
    var td2_1_width = document.createAttribute("width");
    var td2_1_rowspan = document.createAttribute("rowspan");
    td2_1_width.value = "100px";
    td2_1_rowspan.value = "6";
    td2_1.setAttributeNode(td2_1_width);
    td2_1.setAttributeNode(td2_1_rowspan);

    var tr2_2 = document.createElement("tr");
    tr2_2.style.backgroundColor = "#DAE8FC";
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Goal Name";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    input2_id.value = "testGoalname";
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);

    var tr2_3 = document.createElement("tr");
    var td2_3_1 = document.createElement("td");
    td2_3_1.innerHTML = "Description";
    td2_3_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_3_1_width = document.createAttribute("width");
    td2_3_1_width.value = "100px";
    td2_3_1.setAttributeNode(td2_3_1_width);
    var td2_3_2 = document.createElement("td");
    var input3 = document.createElement("h4");
    var input3_id = document.createAttribute("id");
    input3_id.value = "testGoaldesc";
    input3.setAttributeNode(input3_id);
    td2_3_2.appendChild(input3);
    tr2_3.appendChild(td2_3_1);
    tr2_3.appendChild(td2_3_2);

    var tr2_4 = document.createElement("tr");
    var td2_4_1 = document.createElement("td");
    td2_4_1.innerHTML = "Disruption Tolerance";
    td2_4_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_4_1_width = document.createAttribute("width");
    td2_4_1_width.value = "100px";
    td2_4_1.setAttributeNode(td2_4_1_width);
    var td2_4_2 = document.createElement("td");
    var input4 = document.createElement("h4");
    var input4_id = document.createAttribute("id");
    input4_id.value = "testDT";
    input4.setAttributeNode(input4_id);
    td2_4_2.appendChild(input4);
    tr2_4.appendChild(td2_4_1);
    tr2_4.appendChild(td2_4_2);

    var tr2_5 = document.createElement("tr");
    var td2_5_1 = document.createElement("td");
    td2_5_1.innerHTML = "Recovery Time";
    td2_5_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_5_1_width = document.createAttribute("width");
    td2_5_1_width.value = "100px";
    td2_5_1.setAttributeNode(td2_5_1_width);
    var td2_5_2 = document.createElement("td");
    var input5 = document.createElement("h4");
    var input5_id = document.createAttribute("id");
    input5_id.value = "testRT";
    input5.setAttributeNode(input5_id);
    td2_5_2.appendChild(input5);
    tr2_5.appendChild(td2_5_1);
    tr2_5.appendChild(td2_5_2);

    var tr2_6 = document.createElement("tr");
    var td2_6_1 = document.createElement("td");
    td2_6_1.innerHTML = "Quality Loss";
    td2_6_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_6_1_width = document.createAttribute("width");
    td2_6_1_width.value = "100px";
    td2_6_1.setAttributeNode(td2_6_1_width);
    var td2_6_2 = document.createElement("td");
    var input6 = document.createElement("h4");
    var input6_id = document.createAttribute("id");
    input6_id.value = "testQL";
    input6.setAttributeNode(input6_id);
    td2_6_2.appendChild(input6);
    tr2_6.appendChild(td2_6_1);
    tr2_6.appendChild(td2_6_2);

    var tr2_7 = document.createElement("tr");
    var td2_7_1 = document.createElement("td");
    td2_7_1.innerHTML = "Benchmarked By";
    td2_7_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_7_1_width = document.createAttribute("width");
    td2_7_1_width.value = "100px";
    td2_7_1.setAttributeNode(td2_7_1_width);
    var td2_7_2 = document.createElement("td");
    var input7 = document.createElement("h4");
    var input7_id = document.createAttribute("id");
    input7_id.value = "testBench";
    input7.setAttributeNode(input7_id);
    td2_7_2.appendChild(input7);
    tr2_7.appendChild(td2_7_1);
    tr2_7.appendChild(td2_7_2);

    var td2_2 = document.createElement("td");
    var td2_2attr = document.createAttribute("id");
    td2_2attr.value = "checkpointdetail";
    td2_2.setAttributeNode(td2_2attr);
    td2_2.appendChild(tr2_2);
    td2_2.appendChild(tr2_3);
    td2_2.appendChild(tr2_4);
    td2_2.appendChild(tr2_5);
    td2_2.appendChild(tr2_6);
    td2_2.appendChild(tr2_7);


    tr2.appendChild(td2_1);
    tr2.appendChild(td2_2);
    table.appendChild(tr2);

    form.appendChild(table);
    arrow.appendChild(form);

    return arrow;
}

function addGoalName(i) {
    var tr2_2 = document.createElement("tr");
    tr2_2.style.backgroundColor = "#DAE8FC";
    var tr2_2_id = document.createAttribute("id");
    var idtemp = "TestGoalName"+i;
    tr2_2_id.value = idtemp;
    tr2_2.setAttributeNode(tr2_2_id);
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Goal Name";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    var inputtemp = "testGoalname"+i;
    input2_id.value = inputtemp;
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);
    return tr2_2;
}
function addGoalDesc(i) {
    var tr2_2 = document.createElement("tr");
    var tr2_2_id = document.createAttribute("id");
    var idtemp = "TestGoalDesc"+i;
    tr2_2_id.value = idtemp;
    tr2_2.setAttributeNode(tr2_2_id);
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Description";
    td2_2_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    var inputtemp = "testGoaldesc"+i;
    input2_id.value = inputtemp;
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);
    return tr2_2;
}

function addGoalDT(i) {
    var tr2_2 = document.createElement("tr");
    var tr2_2_id = document.createAttribute("id");
    var idtemp = "TestGoalDT"+i;
    tr2_2_id.value = idtemp;
    tr2_2.setAttributeNode(tr2_2_id);
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Disruption Tolerance";
    td2_2_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    var inputtemp = "testGoalDT"+i;
    input2_id.value = inputtemp;
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);
    return tr2_2;
}

function addGoalRT(i) {
    var tr2_2 = document.createElement("tr");
    var tr2_2_id = document.createAttribute("id");
    var idtemp = "TestGoalRT"+i;
    tr2_2_id.value = idtemp;
    tr2_2.setAttributeNode(tr2_2_id);
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Recovery Time";
    td2_2_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    var inputtemp = "testGoalRT"+i;
    input2_id.value = inputtemp;
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);
    return tr2_2;
}

function addGoalQL(i) {
    var tr2_2 = document.createElement("tr");
    var tr2_2_id = document.createAttribute("id");
    var idtemp = "TestGoalQL"+i;
    tr2_2_id.value = idtemp;
    tr2_2.setAttributeNode(tr2_2_id);
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Quality Loss";
    td2_2_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    var inputtemp = "testGoalQL"+i;
    input2_id.value = inputtemp;
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);
    return tr2_2;
}

function addGoalBench(i) {
    var tr2_2 = document.createElement("tr");
    var tr2_2_id = document.createAttribute("id");
    var idtemp = "TestGoalBench"+i;
    tr2_2_id.value = idtemp;
    tr2_2.setAttributeNode(tr2_2_id);
    var td2_2_1 = document.createElement("td");
    td2_2_1.innerHTML = "Benchmarked By";
    td2_2_1.style.borderBottom ="solid 1px #d4d4d4";
    var td2_2_1_width = document.createAttribute("width");
    td2_2_1_width.value = "100px";
    td2_2_1.setAttributeNode(td2_2_1_width);
    var td2_2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    var inputtemp = "testGoalBench"+i;
    input2_id.value = inputtemp;
    input2.setAttributeNode(input2_id);
    td2_2_2.appendChild(input2);
    tr2_2.appendChild(td2_2_1);
    tr2_2.appendChild(td2_2_2);
    return tr2_2;
}
