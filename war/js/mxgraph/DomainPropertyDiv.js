function createDomainPropertyDiv() {

    var arrow = document.createElement('div');
    arrow.style.backgroundColor="#ffffff";
    var divattr = document.createAttribute("id");
    divattr.value = "detailcontainer6";
    arrow.setAttributeNode(divattr);
    //if(flag==1) {
    //创建form
    var form = document.createElement("form");
    var formattr = document.createAttribute("id");
    formattr.value = "detailform6";
    form.setAttributeNode(formattr);
    //创建table
    var table = document.createElement("table");
    var tableattr = document.createAttribute("id");
    tableattr.value = "detailtable6";
    table.setAttributeNode(tableattr);

    //行 - 描述
    var tr1 = document.createElement("tr");
    var td1_1 = document.createElement("td");
    td1_1.innerHTML = "Description";
    var td1_1_width = document.createAttribute("width");
    td1_1_width.value = "100px";
    td1_1.setAttributeNode(td1_1_width);
    var td1_2 = document.createElement("td");
    var input1 = document.createElement("h4");
    var input1_id = document.createAttribute("id");
    input1_id.value = "domainPropertyId";
    input1.setAttributeNode(input1_id);
    td1_2.appendChild(input1);
    tr1.appendChild(td1_1);
    tr1.appendChild(td1_2);
    table.appendChild(tr1);

    //行 - 参考
    var tr2 = document.createElement("tr");
    var td2_1 = document.createElement("td");
    td2_1.innerHTML = "Reference";
    var td2_2 = document.createElement("td");
    var input2 = document.createElement("input");
    var input2_type = document.createAttribute("type");
    input2_type.value = "text";
    input2.setAttributeNode(input2_type);
    var input2_name = document.createAttribute("name");
    input2_name.value = "domainPropertyRef";
    input2.setAttributeNode(input2_name);
    var input2_id = document.createAttribute("id");
    input2_id.value = "domainPropertyRef";
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