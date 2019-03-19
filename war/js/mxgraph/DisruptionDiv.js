function createDisruptionDiv() {
    var flag = whatType();
    var arrow = document.createElement('div');
    arrow.style.backgroundColor = "#ffffff";
    var divattr = document.createAttribute("id");
    divattr.value = "detailcontainer";
    arrow.setAttributeNode(divattr);
    // if(flag==1) {
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

    //行 - 用例名
    var tr1 = document.createElement("tr");
    var td1_1 = document.createElement("td");
    td1_1.innerHTML = "Name";
    var td1_1_width = document.createAttribute("width");
    td1_1_width.value = "130px";
    td1_1.setAttributeNode(td1_1_width);
    var td1_2 = document.createElement("td");
    var input1 = document.createElement("h4");
    var input1_id = document.createAttribute("id");
    input1_id.value = "disruptionId";
    input1.setAttributeNode(input1_id);
    td1_2.appendChild(input1);
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    table.appendChild(tr1);

    //行 - Target to Resource
    var tr2 = document.createElement("tr");
    var td2_1 = document.createElement("td");
    td2_1.innerHTML = "Target";
    var td2_1_width = document.createAttribute("width");
    td2_1_width.value = "100px";
    td2_1.setAttributeNode(td2_1_width);
    var td2_2 = document.createElement("td");
    var input2 = document.createElement("h4");
    var input2_id = document.createAttribute("id");
    input2_id.value = "TargetResDis";
    input2.setAttributeNode(input2_id);
    td2_2.appendChild(input2);
    tr2.appendChild(td2_1);
    tr2.appendChild(td2_2);
    table.appendChild(tr2);


    //行 - 描述
    var tr3 = document.createElement("tr");
    var td3_1 = document.createElement("td");
    td3_1.innerHTML = "Description";
    var td3_2 = document.createElement("td");
    var input3 = document.createElement("input");
    var input3_type = document.createAttribute("type");
    input3_type.value = "text";
    input3.setAttributeNode(input3_type)
    var input3_name = document.createAttribute("name");
    input3_name.value = "description";
    input3.setAttributeNode(input3_name);
    var input3_class = document.createAttribute("class");
    input3_class.value = "detailform-single-text"
    input3.setAttributeNode(input3_class);
    var input3_id = document.createAttribute("id");
    input3_id.value = "description";
    input3.setAttributeNode(input3_id);
    td3_2.appendChild(input3);
    tr3.appendChild(td3_1);
    tr3.appendChild(td3_2);
    table.appendChild(tr3);

    //Disruption Tolerance
    var tr4 = document.createElement("tr");
    var td4_1 = document.createElement("td");
    td4_1.innerHTML = "Disruption Tolerance";
    var td4_2 = document.createElement("td");
    var input4 = document.createElement("input");
    var input4_type = document.createAttribute("type");
    input4_type.value = "text";
    input4.setAttributeNode(input4_type)
    var input4_name = document.createAttribute("name");
    input4_name.value = "DisruptionTol";
    input4.setAttributeNode(input4_name);
    var input4_class = document.createAttribute("class");
    input4_class.value = "detailform-single-text"
    input4.setAttributeNode(input4_class);
    var input4_id = document.createAttribute("id");
    input4_id.value = "DisruptionTol";
    input4.setAttributeNode(input4_id);
    td4_2.appendChild(input4);
    tr4.appendChild(td4_1);
    tr4.appendChild(td4_2);
    table.appendChild(tr4);

    //Recovery Time
    var tr5 = document.createElement("tr");
    var td5_1 = document.createElement("td");
    td5_1.innerHTML = "Recovery Time";
    var td5_2 = document.createElement("td");
    var input5 = document.createElement("input");
    var input5_type = document.createAttribute("type");
    input5_type.value = "text";
    input5.setAttributeNode(input5_type)
    var input5_name = document.createAttribute("name");
    input5_name.value = "RecoveryTime";
    input5.setAttributeNode(input5_name);
    var input5_class = document.createAttribute("class");
    input5_class.value = "detailform-single-text"
    input5.setAttributeNode(input5_class);
    var input5_id = document.createAttribute("id");
    input5_id.value = "RecoveryTime";
    input5.setAttributeNode(input5_id);
    td5_2.appendChild(input5);
    tr5.appendChild(td5_1);
    tr5.appendChild(td5_2);
    table.appendChild(tr5);

    //Quality Loss
    var tr6 = document.createElement("tr");
    var td6_1 = document.createElement("td");
    td6_1.innerHTML = "Quality Loss";
    var td6_2 = document.createElement("td");
    var input6 = document.createElement("input");
    var input6_type = document.createAttribute("type");
    input6_type.value = "text";
    input6.setAttributeNode(input6_type)
    var input6_name = document.createAttribute("name");
    input6_name.value = "QualityLoss";
    input6.setAttributeNode(input6_name);
    var input6_class = document.createAttribute("class");
    input6_class.value = "detailform-single-text"
    input6.setAttributeNode(input6_class);
    var input6_id = document.createAttribute("id");
    input6_id.value = "QualityLoss";
    input6.setAttributeNode(input6_id);
    td6_2.appendChild(input6);
    tr6.appendChild(td6_1);
    tr6.appendChild(td6_2);
    table.appendChild(tr6);

    //行 — Obstructs
    var tr7= document.createElement("tr");
    var td7_1 = document.createElement("td");
    td7_1.innerHTML = "Obstructs";
    var td7_1_width = document.createAttribute("width");
    td7_1_width.value = "100px";
    td7_1.setAttributeNode(td7_1_width);
    var td7_2 = document.createElement("td");
    var input7 = document.createElement("h4");
    var input7_id = document.createAttribute("id");
    input7_id.value = "ObstructsDis";
    input7.setAttributeNode(input7_id);
    td7_2.appendChild(input7);
    tr7.appendChild(td7_1);
    tr7.appendChild(td7_2);
    table.appendChild(tr7);

    //Resolved by
    var tr8= document.createElement("tr");
    var td8_1 = document.createElement("td");
    td8_1.innerHTML = "Resolved by";
    var td8_1_width = document.createAttribute("width");
    td8_1_width.value = "100px";
    td8_1.setAttributeNode(td8_1_width);
    var td8_2 = document.createElement("td");
    var input8 = document.createElement("h4");
    var input8_id = document.createAttribute("id");
    input8_id.value = "ResolvedByDis";
    input8.setAttributeNode(input8_id);
    td8_2.appendChild(input8);
    tr8.appendChild(td8_1);
    tr8.appendChild(td8_2);
    table.appendChild(tr8);



    form.appendChild(table);
    arrow.appendChild(form);
    return arrow;
}