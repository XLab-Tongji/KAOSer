/**
 * Created by admin on 2017/12/13.
 */
function createDiv() {
    var arrow = document.createElement('div');
    arrow.style.backgroundColor="#ffffff";
    var divattr = document.createAttribute("id");
         divattr.value = "detailcontainer";
         arrow.setAttributeNode(divattr);
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
         td1_1.innerHTML = "用例名";
         var td1_1_width = document.createAttribute("width");
         td1_1_width.value = "100px";
         td1_1.setAttributeNode(td1_1_width);
         var td1_2 = document.createElement("td");
         var input1 = document.createElement("h4");
         var input1_id=document.createAttribute("id");
         input1_id.value="usecaseId";
         input1.setAttributeNode(input1_id);
         td1_2.appendChild(input1);
         tr1.appendChild(td1_1);
         tr1.appendChild(td1_2);
         table.appendChild(tr1);

         //行 - 简要描述
        var tr2 = document.createElement("tr");
         var td2_1 = document.createElement("td");
         td2_1.innerHTML = "简要描述";
         var td2_2 = document.createElement("td");
         var input2 = document.createElement("input");
         var input2_type = document.createAttribute("type");
         input2_type.value = "text";
         input2.setAttributeNode(input2_type);
         var input2_name = document.createAttribute("name");
         input2_name.value = "usecaseDiscription";
         input2.setAttributeNode(input2_name);
         var input2_id=document.createAttribute("id");
         input2_id.value="usecaseDiscription";
         input2.setAttributeNode(input2_id);
         var input2_class = document.createAttribute("class");
         input2_class.value = "detailform-single-text"
         input2.setAttributeNode(input2_class);
         td2_2.appendChild(input2);
         tr2.appendChild(td2_1);
         tr2.appendChild(td2_2);
         table.appendChild(tr2);

         //行 - 参与者
         var tr3 = document.createElement("tr");
         var td3_1 = document.createElement("td");
         td3_1.innerHTML = "参与者";
         var td3_2 = document.createElement("td");
         var input3 = document.createElement("input");
         var input3_type = document.createAttribute("type");
         input3_type.value = "text";
         input3.setAttributeNode(input3_type)
         var input3_name = document.createAttribute("name");
         input3_name.value = "participant";
         input3.setAttributeNode(input3_name);
         var input3_class = document.createAttribute("class");
         input3_class.value = "detailform-single-text"
         input3.setAttributeNode(input3_class);
         var input3_id=document.createAttribute("id");
         input3_id.value="participant";
         input3.setAttributeNode(input3_id);
         td3_2.appendChild(input3);
         tr3.appendChild(td3_1);
         tr3.appendChild(td3_2);
         table.appendChild(tr3);

         //行 - 前置条件
         var tr4= document.createElement("tr");
         var td4_1 = document.createElement("td");
         td4_1.innerHTML = "前置条件";
         var td4_2 = document.createElement("td");
         var input4 = document.createElement("input");
         var input4_type = document.createAttribute("type");
         input4_type.value = "text";
         input4.setAttributeNode(input4_type)
         var input4_name = document.createAttribute("name");
         input4_name.value = "preCondition";
         input4.setAttributeNode(input4_name);
         var input4_class = document.createAttribute("class");
         input4_class.value = "detailform-single-text"
         input4.setAttributeNode(input4_class);
         var input4_id=document.createAttribute("id");
         input4_id.value="preCondition";
         input4.setAttributeNode(input4_id);
         td4_2.appendChild(input4);
         tr4.appendChild(td4_1);
         tr4.appendChild(td4_2);
         table.appendChild(tr4);

         //行 - 后置条件
         var tr5= document.createElement("tr");
         var td5_1 = document.createElement("td");
         td5_1.innerHTML = "后置条件";
         var td5_2 = document.createElement("td");
         var input5 = document.createElement("input");
         var input5_type = document.createAttribute("type");
         input5_type.value = "text";
         input5.setAttributeNode(input5_type)
         var input5_name = document.createAttribute("name");
         input5_name.value = "aftCondition";
         input5.setAttributeNode(input5_name);
         var input5_class = document.createAttribute("class");
         input5_class.value = "detailform-single-text"
         input5.setAttributeNode(input5_class);
         var input5_id=document.createAttribute("id");
         input5_id.value="aftCondition";
         input5.setAttributeNode(input5_id);
         td5_2.appendChild(input5);
         tr5.appendChild(td5_1);
         tr5.appendChild(td5_2);
         table.appendChild(tr5);

         //行 - 基本事件流
         var tr6= document.createElement("tr");
         var td6 = document.createElement("td");
         td6.innerHTML = "基本事件流";
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
         var input6_id=document.createAttribute("id");
         input6_id.value="basicEventFlow";
         textarea6.setAttributeNode(input6_id);
         td6.appendChild(textarea6);
         tr6.appendChild(td6);
         table.appendChild(tr6);

         //行 - 附加事件流
         var tr7= document.createElement("tr");
         var td7 = document.createElement("td");
         td7.innerHTML = "附加事件流";
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
         var input7_id=document.createAttribute("id");
         input7_id.value="addtionEventFlow";
         textarea7.setAttributeNode(input7_id);
         td7.appendChild(textarea7);
         tr7.appendChild(td7);
         table.appendChild(tr7);

         //行 - 补充说明-业务规则
         var tr8= document.createElement("tr");
         var td8 = document.createElement("td");
         td8.innerHTML = "补充说明-业务规则";
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
         var input8_id=document.createAttribute("id");
         input8_id.value="businessRule";
         textarea8.setAttributeNode(input8_id);
         td8.appendChild(textarea8);
         tr8.appendChild(td8);
         table.appendChild(tr8);

         //行 - 补充说明-非功能性需求
         var tr9= document.createElement("tr");
         var td9 = document.createElement("td");
         td9.innerHTML = "补充说明-非功能性需求";
         var td9_colspan = document.createAttribute("colspan");
         td9_colspan.value = "2";
         td9.setAttributeNode(td9_colspan);
         var br9 = document.createElement("br");
         td9.appendChild(br9);
         var textarea9 = document.createElement("textarea");
         var textarea9_name = document.createAttribute("name");
         textarea9_name.value = "nonFunctionalRule";
         textarea9.setAttributeNode(textarea9_name);
         var textarea9_class = document.createAttribute("class");
         textarea9_class.value = "detailform-textarea"
         textarea9.setAttributeNode(textarea9_class);
         var input9_id=document.createAttribute("id");
         input9_id.value="nonFunctionalRule";
         textarea9.setAttributeNode(input9_id);
         td9.appendChild(textarea9);
         tr9.appendChild(td9);
         table.appendChild(tr9);

        form.appendChild(table);
        arrow.appendChild(form);

        //添加样式
        //arrow.style.height = "600px";
        //arrow.style.width = "430px";
    return arrow;
};
