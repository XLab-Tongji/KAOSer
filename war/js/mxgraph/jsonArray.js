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

// 三个参数
// s - > graph.getModel()
// id_value - > 当前id
// SOD - > 信息
// function getmyWant(s,id_value,SOD){
//     getJSONs(s);
//     //alert(jsonText);
//     var jsonResult= JSON.stringify(JSON.parse(jsonText).mxGraphModel.root.mxCell);
//
//     //alert(jsonResult);
//
//     var jsons = jQuery.parseJSON(jsonResult);
//     var i,j,k;
//     var results;
//     //var getUseful;
//
//     var bridges = new Array();
//     var valueResults = new Array();
//     if(SOD=="RefinesTo"){
//         for(i=0;i<jsons.length;i++){
//             if(("-target" in jsons[i])&&(jsons[i]["-target"]==id_value)){
//                 bridges.push(jsons[i]["-source"]);
//             }
//         }
//         //alert(source);
//         for(i=0;i<jsons.length;i++){
//             for(j=0;j<bridges.length;j++){
//                 if(("-id" in jsons[i])&&(jsons[i]["-id"]==bridges[j])&&(jsons[i]['-flag']=="goal")){
//                     valueResults.push(jsons[i]["-value"]);
//                 }
//             }
//
//         }
//
//     }
//     else if(SOD=="RefinedBy"){
//         for(i=0;i<jsons.length;i++){
//             if(("-source" in jsons[i])&&(jsons[i]["-source"]==id_value)){
//                 bridges.push(jsons[i]["-target"]);
//             }
//         }
//
//         for(i=0;i<jsons.length;i++){
//             for(j=0;j<bridges.length;j++){
//                 if(("-id" in jsons[i])&&(jsons[i]["-id"]==bridges[j])&&(jsons[i]['-flag']=="goal")){
//                     valueResults.push(jsons[i]["-value"]);
//                 }
//             }
//
//         }
//
//     }
//     else if(SOD=="ResolveObstacle"){
//         for(i=0;i<jsons.length;i++){
//             if(("-source" in jsons[i])&&(jsons[i]["-source"]==id_value)){
//                 bridges.push(jsons[i]["-target"]);
//             }
//         }
//
//         for(i=0;i<jsons.length;i++){
//             for(j=0;j<bridges.length;j++){
//                 if(("-id" in jsons[i])&&(jsons[i]["-id"]==bridges[j])&&(jsons[i]['-flag']=="obstacle")){
//                     valueResults.push(jsons[i]["-value"]);
//                 }
//             }
//
//         }
//
//     }
//     else if(SOD=='Obstructs'){
//         for(i=0;i<jsons.length;i++){
//             if(("-source" in jsons[i])&&(jsons[i]["-source"]==id_value)){
//                 bridges.push(jsons[i]["-target"]);
//             }
//         }
//
//         for(i=0;i<jsons.length;i++){
//             for(j=0;j<bridges.length;j++){
//                 if(("-id" in jsons[i])&&(jsons[i]["-id"]==bridges[j])&&(jsons[i]['-flag']=="goals")){
//                     valueResults.push(jsons[i]["-value"]);
//                 }
//             }
//         }
//
//     }
//     results=wirtieResults(valueResults);
//     return results;
//
// }



// 五个参数
// s - > graph.getModel()
// id_value - > 当前的id
// SurceorTarget - > 当前作为source或者target（source,target)
// flag - >目标的形状
// information - > 信息参数
function getmyWant(s,id_value,SourceorTarget,flag,information){
    getJSONs(s);
    //alert(jsonText);
    var jsonResult= JSON.stringify(JSON.parse(jsonText).mxGraphModel.root.mxCell);

    //alert(jsonResult);

    var jsons = jQuery.parseJSON(jsonResult);
    var i,j,k;
    var results;
    //var getUseful;

    var bridges = new Array();
    var valueResults = new Array();

    var sourceorTarget = '-'+SourceorTarget;

    var sot ;
    if(sourceorTarget=='-source'){
        sot = '-target';
    }else if(sourceorTarget == '-target'){
        sot = '-source';
    }

    for(i=0;i<jsons.length;i++){
        if((sourceorTarget in jsons[i])&&(jsons[i][sourceorTarget]==id_value)){
            bridges.push(jsons[i][sot]);
        }
    }

    for(i=0;i<jsons.length;i++){
        for(j=0;j<bridges.length;j++){
            if(("-id" in jsons[i])&&(jsons[i]["-id"]==bridges[j])&&(jsons[i]['-flag']==flag)){
                valueResults.push(jsons[i]["-value"]);
            }
        }
    }
    results=wirtieResults(valueResults);
    return results;
}

function wirtieResults(array) {
    var results;
    if(array.length==0){
        results='';
    }
    else{
        results = '- '+array[0];
        for(var k=1;k<array.length;k++){
            results+='</br>'+'- '+array[k];
        }
    }
    return results;
}