/**
 * Created by admin on 2017/12/26.
 */
function createRequirementDiv() {
    var flag=whatType();

    var arrow = document.createElement('div');
    arrow.style.backgroundColor="#ffffff";
    var divattr = document.createAttribute("id");
    divattr.value = "detailcontainer2";
    arrow.setAttributeNode(divattr);
    //if(flag==1) {
        //创建form
        var form = document.createElement("form");
        var formattr = document.createAttribute("id");
        formattr.value = "detailform2";
        form.setAttributeNode(formattr);
        //创建table
        var table = document.createElement("table");
        var tableattr = document.createAttribute("id");
        tableattr.value = "detailtable2";
        table.setAttributeNode(tableattr);

        //行 - 用例名
        var tr1 = document.createElement("tr");
        var td1_1 = document.createElement("td");
        td1_1.innerHTML = "Name";
        var td1_1_width = document.createAttribute("width");
        td1_1_width.value = "100px";
        td1_1.setAttributeNode(td1_1_width);
        var td1_2 = document.createElement("td");
        var input1 = document.createElement("h4");
        var input1_id = document.createAttribute("id");
        input1_id.value = "reqId";
        input1.setAttributeNode(input1_id);
        td1_2.appendChild(input1);
        tr1.appendChild(td1_1);
        tr1.appendChild(td1_2);
        table.appendChild(tr1);

        //行 - 基本事件流
        var tr6 = document.createElement("tr");
        var td6 = document.createElement("td");
        td6.innerHTML = "Basic Event Flow";
        var td6_colspan = document.createAttribute("colspan");
        td6_colspan.value = "2";
        td6.setAttributeNode(td6_colspan);
        var br6 = document.createElement("br");
        td6.appendChild(br6);
        var textarea6 = document.createElement("textarea");
        var textarea6_name = document.createAttribute("name");
        textarea6_name.value = "basicEventFlow";
        textarea6.setAttributeNode(textarea6_name);
        var textarea6_class = document.createAttribute("class");
        textarea6_class.value = "detailform-textarea"
        textarea6.setAttributeNode(textarea6_class);
        var input6_id = document.createAttribute("id");
        input6_id.value = "basicEventFlow";
        textarea6.setAttributeNode(input6_id);
        td6.appendChild(textarea6);
        tr6.appendChild(td6);
        table.appendChild(tr6);

        //行 - 附加事件流
        var tr7 = document.createElement("tr");
        var td7 = document.createElement("td");
        td7.innerHTML = "Addition Event Flow";
        var td7_colspan = document.createAttribute("colspan");
        td7_colspan.value = "2";
        td7.setAttributeNode(td7_colspan);
        var br7 = document.createElement("br");
        td7.appendChild(br7);
        var textarea7 = document.createElement("textarea");
        var textarea7_name = document.createAttribute("name");
        textarea7_name.value = "addtionEventFlow";
        textarea7.setAttributeNode(textarea7_name);
        var textarea7_class = document.createAttribute("class");
        textarea7_class.value = "detailform-textarea"
        textarea7.setAttributeNode(textarea7_class);
        var input7_id = document.createAttribute("id");
        input7_id.value = "addtionEventFlow";
        textarea7.setAttributeNode(input7_id);
        td7.appendChild(textarea7);
        tr7.appendChild(td7);
        table.appendChild(tr7);

        //行 - 补充说明-业务规则
        var tr8 = document.createElement("tr");
        var td8 = document.createElement("td");
        td8.innerHTML = "Business Rule";
        var td8_colspan = document.createAttribute("colspan");
        td8_colspan.value = "2";
        td8.setAttributeNode(td8_colspan);
        var br8 = document.createElement("br");
        td8.appendChild(br8);
        var textarea8 = document.createElement("textarea");
        var textarea8_name = document.createAttribute("name");
        textarea8_name.value = "businessRule";
        textarea8.setAttributeNode(textarea8_name);
        var textarea8_class = document.createAttribute("class");
        textarea8_class.value = "detailform-textarea"
        textarea8.setAttributeNode(textarea8_class);
        var input8_id = document.createAttribute("id");
        input8_id.value = "businessRule";
        textarea8.setAttributeNode(input8_id);
        td8.appendChild(textarea8);
        tr8.appendChild(td8);
        table.appendChild(tr8);

        //行 - 补充说明-非功能性需求
        var tr9 = document.createElement("tr");
        var td9 = document.createElement("td");
        td9.innerHTML = "Description";
        var td9_colspan = document.createAttribute("colspan");
        td9_colspan.value = "2";
        td9.setAttributeNode(td9_colspan);
        var br9 = document.createElement("br");
        td9.appendChild(br9);
        var textarea9 = document.createElement("textarea");
        var textarea9_name = document.createAttribute("name");
        textarea9_name.value = "Description";
        textarea9.setAttributeNode(textarea9_name);
        var textarea9_class = document.createAttribute("class");
        textarea9_class.value = "detailform-textarea"
        textarea9.setAttributeNode(textarea9_class);
        var input9_id = document.createAttribute("id");
        input9_id.value = "Description";
        textarea9.setAttributeNode(input9_id);
        td9.appendChild(textarea9);
        tr9.appendChild(td9);
        table.appendChild(tr9);

        //添加样式
        //arrow.style.height = "600px";
        //arrow.style.width = "430px";
        //return arrow;

        //行 - RefinesToReq
        var tr11 = document.createElement("tr");
        var td11_1 = document.createElement("td");
        td11_1.innerHTML = "Refines To";
        var td11_1_width = document.createAttribute("width");
        td11_1_width.value = "100px";
        td11_1.setAttributeNode(td11_1_width);
        var td11_2 = document.createElement("td");
        var input11 = document.createElement("h4");
        var input11_id = document.createAttribute("id");
        input11_id.value = "RefinesToReq";
        input11.setAttributeNode(input11_id);
        td11_2.appendChild(input11);
        tr11.appendChild(td11_1);
        tr11.appendChild(td11_2);
        table.appendChild(tr11);

        //行 - agent
        var tr10 = document.createElement("tr");
        var td10_1 = document.createElement("td");
        td10_1.innerHTML = "Agents";
        var td10_1_width = document.createAttribute("width");
        td10_1_width.value = "100px";
        td10_1.setAttributeNode(td10_1_width);
        var td10_2 = document.createElement("td");
        var input10 = document.createElement("h4");
        var input10_id = document.createAttribute("id");
        input10_id.value = "Agents";
        input10.setAttributeNode(input10_id);
        td10_2.appendChild(input10);
        tr10.appendChild(td10_1);
        tr10.appendChild(td10_2);
        table.appendChild(tr10);
    // }
    // else {
    //     //return arrow;
    // }
    form.appendChild(table);
    arrow.appendChild(form);
    return arrow;
}