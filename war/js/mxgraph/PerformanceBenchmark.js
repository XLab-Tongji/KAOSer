function createPerformanceBenchmarkDiv() {

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
    td0_1.innerHTML = "Performance Attribute";
    var td0_1_width = document.createAttribute("width");
    td0_1_width.value = "100px";
    td0_1.setAttributeNode(td0_1_width);
    var td0_2 = document.createElement("td");
    var input0 = document.createElement("h4");
    var input0_id = document.createAttribute("id");
    input0_id.value = "PerformanceId";
    input0.setAttributeNode(input0_id);
    td0_2.appendChild(input0);
    tr0.appendChild(td0_1);
    tr0.appendChild(td0_2);
    table.appendChild(tr0);

    //行 - 描述
    var tr1 = document.createElement("tr");
    var td1_1 = document.createElement("td");
    td1_1.innerHTML = "Value";
    var td1_2 = document.createElement("td");
    var input1 = document.createElement("input");
    var input1_type = document.createAttribute("type");
    input1_type.value = "text";
    input1.setAttributeNode(input1_type);
    var input1_name = document.createAttribute("name");
    input1_name.value = "PerformanceValue";
    input1.setAttributeNode(input1_name);
    var input1_id = document.createAttribute("id");
    input1_id.value = "PerformanceValue";
    input1.setAttributeNode(input1_id);
    var input1_class = document.createAttribute("class");
    input1_class.value = "detailform-single-text";
    input1.setAttributeNode(input1_class);
    td1_2.appendChild(input1);
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    table.appendChild(tr1);

    //行 - 参考
    var tr2 = document.createElement("tr");
    var td2_1 = document.createElement("td");
    td2_1.innerHTML = "TargetAsset";
    var td2_2 = document.createElement("td");
    var input2 = document.createElement("input");
    var input2_type = document.createAttribute("type");
    input2_type.value = "text";
    input2.setAttributeNode(input2_type);
    var input2_name = document.createAttribute("name");
    input2_name.value = "PerformanceTarget";
    input2.setAttributeNode(input2_name);
    var input2_id = document.createAttribute("id");
    input2_id.value = "PerformanceTarget";
    input2.setAttributeNode(input2_id);
    var input2_class = document.createAttribute("class");
    input2_class.value = "detailform-single-text";
    input2.setAttributeNode(input2_class);
    td2_2.appendChild(input2);
    tr2.appendChild(td2_1);
    tr2.appendChild(td2_2);
    table.appendChild(tr2);

    form.appendChild(table);
    arrow.appendChild(form);

    return arrow;
}