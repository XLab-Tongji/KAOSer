/**
 * Created by admin on 2018/1/16.
 */
function createOtherDiv() {
    var flag=whatType();

    var arrow = document.createElement('div');
    arrow.style.backgroundColor="#ffffff";
    var divattr = document.createAttribute("id");
    divattr.value = "detailcontainer3";
    arrow.setAttributeNode(divattr);
    if(flag==1) {
        //创建form
        var form = document.createElement("form");
        var formattr = document.createAttribute("id");
        formattr.value = "detailform3";
        form.setAttributeNode(formattr);
        //创建table
        var table = document.createElement("table");
        var tableattr = document.createAttribute("id");
        tableattr.value = "detailtable3";
        table.setAttributeNode(tableattr);

        //行 - 用例名
        var tr1 = document.createElement("tr");
        var td1_1 = document.createElement("td");
        td1_1.innerHTML = "value";
        var td1_1_width = document.createAttribute("width");
        td1_1_width.value = "100px";
        td1_1.setAttributeNode(td1_1_width);
        var td1_2 = document.createElement("td");
        var input1 = document.createElement("h4");
        var input1_id = document.createAttribute("id");
        input1_id.value = "othId";
        input1.setAttributeNode(input1_id);
        td1_2.appendChild(input1);
        tr1.appendChild(td1_1);
        tr1.appendChild(td1_2);
        table.appendChild(tr1);

        //行 - 细节
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = "补充说明";
        var td_colspan = document.createAttribute("colspan");
        td_colspan.value = "2";
        td.setAttributeNode(td_colspan);
        var br = document.createElement("br");
        td.appendChild(br);
        var textarea = document.createElement("textarea");
        var textarea_name = document.createAttribute("name");
        textarea_name.value = "detail";
        textarea.setAttributeNode(textarea_name);
        var textarea_class = document.createAttribute("class");
        textarea_class.value = "detailform-textarea";
        textarea.setAttributeNode(textarea_class);
        var input_id = document.createAttribute("id");
        input_id.value = "detail";
        textarea.setAttributeNode(input_id);
        td.appendChild(textarea);
        tr.appendChild(td);
        table.appendChild(tr);

        form.appendChild(table);
        arrow.appendChild(form);

    }
    else {

    }
    return arrow;
}