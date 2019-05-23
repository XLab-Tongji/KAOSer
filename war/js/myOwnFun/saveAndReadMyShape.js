function ReadMyShape(myShapesModel) {
    var table = document.createElement("table");
    table.style.fontSize = "12px";
    var tr = document.createElement("tr");
    var shape_td = document.createElement("td");
    shape_td.style.width = "40px";
    shape_td.style.border = "solid 1px #d4d4d4";
    shape_td.appendChild(this.sidebar.createVertexTemplateFromCells(
        cells, bounds.width, bounds.height, mytitle || '', true, false, false));
    var type_td = document.createElement("td");
    type_td.innerHTML = cells[0].flag;
    type_td.style.width = "40px";
    type_td.style.border = "solid 1px #d4d4d4";
    var id_td = document.createElement("td");
    id_td.innerHTML = index;
    id_td.style.width = "40px";
    id_td.style.border = "solid 1px #d4d4d4";
    tr.appendChild(shape_td);
    tr.appendChild(type_td);
    tr.appendChild(id_td);
    table.appendChild(tr);
    myShapesModel.appendChild(table);
    shape_td.appendChild(this.sidebar.createVertexTemplate('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Goal'));
}
function SaveMyShape(id,cells,geo) {
    var result;
    for(var i in cells){
        var ttt =1;
        $.ajax({
            type:"POST",
            url:mxResources.get("localport")+mxResources.get("urlsavemyshape"),
            data:{
                id:id,
                style:cells[i].style,
                width:geo.width,
                height:geo.height,
                title:cells[i].flag
            },
            async: false,
            success:function (data) {

                var obj = JSON.parse(data);
                if(obj.name=="success"){
                    alert("保存成功");
                    result = true
                }
                else{
                    alert("保存失败，该名称已存在");
                    result = false
                }
            },
            error:function (data) {
                alert("失败");
                result = false;
            }
        });
        //cells[i].style geo.width,geo.height,cells[i].flag
    }
    return result;
    //shape_td.appendChild(this.sidebar.createVertexTemplate('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Goal'));
}
var loadMyCells = mxUtils.bind(this, function (cells, bounds, index, evt, mytitle) {
    cells = graph.cloneCells(mxUtils.sortCells(graph.model.getTopmostCells(cells)));

    // Translates cells to origin
    for (var i = 0; i < cells.length; i++) {
        var geo = graph.getCellGeometry(cells[i]);

        if (geo != null) {
            geo.translate(-bounds.x, -bounds.y);
        }
    }

    var table = document.createElement("table");
    table.style.fontSize = "12px";
    var tr = document.createElement("tr");
    var shape_td = document.createElement("td");
    shape_td.style.width = "40px";
    shape_td.style.border = "solid 1px #d4d4d4";
    shape_td.appendChild(this.sidebar.createVertexTemplateFromCells(
        cells, bounds.width, bounds.height, mytitle || '', true, false, false));
    var type_td = document.createElement("td");
    type_td.innerHTML = cells[0].flag;
    type_td.style.width = "40px";
    type_td.style.border = "solid 1px #d4d4d4";
    var id_td = document.createElement("td");
    id_td.innerHTML = index;
    id_td.style.width = "40px";
    id_td.style.border = "solid 1px #d4d4d4";
    tr.appendChild(shape_td);
    tr.appendChild(type_td);
    tr.appendChild(id_td);
    table.appendChild(tr);
    myShapesModel.appendChild(table);


    //	contentDiv.appendChild(this.sidebar.createVertexTemplateFromCells(
    //		cells, bounds.width, bounds.height, title || '', true, false, false));

    var xml = mxUtils.getXml(this.editor.graph.encodeCells(cells));
    var xotree = new XML.ObjTree();
    var json = xotree.parseXML(xml);
    //将json对象转为格式化的字符串
    var dumper = new JKL.Dumper();
    jsonText = dumper.dump(json);
    //对数组进行json序列化，不然无法传递到服务端
    jsonStr = JSON.stringify(jsonText);
    console.log(jsonStr);
    // var entry = {xml: xml, w: bounds.width, h: bounds.height};
    //
    // if (title != null) {
    // 	entry.title = title;
    // }
    //
    // images.push(xml);
    // console.log(images);
    // saveLibrary(evt);

    if (dropTarget != null && dropTarget.parentNode != null && images.length > 0) {
        dropTarget.parentNode.removeChild(dropTarget);
        dropTarget = null;
    }

});
