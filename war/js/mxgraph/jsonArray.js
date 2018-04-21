var jsonText;
//序列化后的json
//var jsonStr;

var result;
function getJSONs(s) {
    var encoder = new mxCodec();
    var node = encoder.encode(s);
    result=mxUtils.getXml(node,'\n');
    var xotree = new XML.ObjTree();
    var json = xotree.parseXML(result);
    //将json对象转为格式化的字符串
    var dumper = new JKL.Dumper();
    jsonText = dumper.dump(json);
    //mxUtils.popup(jsonText, true);
}

function getmyWant(s,id_value,SOD){
    getJSONs(s);
    //alert(jsonText);
    var jsonResult= JSON.stringify(JSON.parse(jsonText).mxGraphModel.root.mxCell);

    //alert(jsonResult);

    var jsons = jQuery.parseJSON(jsonResult);
    var i,j,k;
    var results;
    //var getUseful;
    if(SOD=="RefinesTo"){
        var source = new Array();
        for(i=0;i<jsons.length;i++){
            if(("-target" in jsons[i])&&(jsons[i]["-target"]==id_value)){
                source.push(jsons[i]["-source"]);
            }
        }
        //alert(source);
        var resultRefinesTo = new Array();
        for(i=0;i<jsons.length;i++){
            for(j=0;j<source.length;j++){
                if(("-id" in jsons[i])&&(jsons[i]["-id"]==source[j])&&(jsons[i]['-flag']=="goal")){
                    resultRefinesTo.push(jsons[i]["-value"]);
                }
            }

        }

        //alert(resultRefinesTo.length);
        if(resultRefinesTo.length==0){
            results='';
        }else {
            results ="- " +resultRefinesTo[0];
            for(k=1;k<resultRefinesTo.length;k++){
                results+="</br>"+'- '+resultRefinesTo[k];
            }
        }

        //alert(results);

    }
    else if(SOD=="RefinedBy"){
        var target = new Array();
        for(i=0;i<jsons.length;i++){
            if(("-source" in jsons[i])&&(jsons[i]["-source"]==id_value)){
                target.push(jsons[i]["-target"]);
            }
        }
        //alert(source);
        var resultRefinedBy = new Array();

        for(i=0;i<jsons.length;i++){
            for(j=0;j<target.length;j++){
                if(("-id" in jsons[i])&&(jsons[i]["-id"]==target[j])&&(jsons[i]['-flag']=="goal")){
                    resultRefinedBy.push(jsons[i]["-value"]);
                }
            }

        }
        if(resultRefinedBy.length==0){
            results='';
        }else {
            results = '- '+resultRefinedBy[0];
            for(k=1;k<resultRefinedBy.length;k++){
                results+='</br>'+'- '+resultRefinedBy[k];
            }
        }


    }
    else if(SOD=="ResolveObstacle"){
        var target = new Array();
        for(i=0;i<jsons.length;i++){
            if(("-source" in jsons[i])&&(jsons[i]["-source"]==id_value)){
                target.push(jsons[i]["-target"]);
            }
        }
        var resolveObstacle = new Array();
        for(i=0;i<jsons.length;i++){
            for(j=0;j<target.length;j++){
                if(("-id" in jsons[i])&&(jsons[i]["-id"]==target[j])&&(jsons[i]['-flag']=="obstacle")){
                    resolveObstacle.push(jsons[i]["-value"]);
                }
            }

        }
        if(resolveObstacle.length==0){
            results='';
        }else{
            results = '- '+resolveObstacle[0];
            for(k=1;k<resolveObstacle.length;k++){
                results+='</br>'+'- '+resolveObstacle[k];
            }
        }

    }
    return results;

}
