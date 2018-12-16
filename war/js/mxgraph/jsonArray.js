var jsonText;
//序列化后的json
var jsonStr;

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
    jsonStr = JSON.stringify(jsonText);
    console.log(jsonStr);
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
    var i,j,k,m;
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
    var term ;


    if(sourceorTarget=='-source') {
        for (i = 0; i < jsons.length; i++) {
            if ((sourceorTarget in jsons[i]) && (jsons[i][sourceorTarget] == id_value) && (!('-flag' in jsons[i]))) {
                bridges.push(jsons[i][sot]);
            }

            else if (('-flag' in jsons[i]) && (jsons[i]['-flag'] != 'and') && (sot in jsons[i])&&(jsons[i][sot] == id_value)) {
                for (m = 0; m < jsons.length; m++) {
                    if ((jsons[m]['-id'] == jsons[i][sourceorTarget]) && (jsons[m]['-flag'] == 'middle')) {
                        term=jsons[m]['-id'];
                        //alert(term);
                    }
                }
                for(m = 0;m<jsons.length;m++){
                    if((sourceorTarget in jsons[m])&&(jsons[m][sourceorTarget]==term)&&(sot in jsons[m])&&(jsons[m]['-flag']!='tem')){
                        bridges.push([jsons[m][sot]]);
                        //alert(bridges);
                    }
                }
            }
        }
    }
    else if(sourceorTarget=='-target'){
        for (i = 0; i < jsons.length; i++) {
            if ((sourceorTarget in jsons[i]) && (jsons[i][sourceorTarget] == id_value) && (!('-flag' in jsons[i]))&&(findSource(jsons,jsons[i]['-source'])==-1)) {
                bridges.push(jsons[i][sot]);
            }
            // else if ((('-flag' in jsons[i]) && (jsons[i]['-flag'] != 'tem') && (jsons[i][sourceorTarget] == id_value)&&(findSource(jsons,jsons[i]['-source'])=='1'))) {
            //     for (m = 0; m < jsons.length; m++) {
            //         if ((jsons[m]['-id'] == jsons[i][sot]) && (jsons[m]['-flag'] == 'middle')) {
            //             term=jsons[m]['-id'];
            //         }
            //     }
            //     for(m = 0;m<jsons.length;m++){
            //         if((jsons[m][sot]==term)&&(jsons[m]['-flag']=='tem')){
            //             bridges.push([jsons[m]['-target']]);
            //             //alert(bridges);
            //         }
            //     }
            // }
            else if((jsons[i][sourceorTarget] == id_value)&&(findSource(jsons,jsons[i]['-source'])!=-1)&&((!('-flag' in jsons[i]))||(('-flag' in jsons[i])&&(jsons[i]['-flag']!='tem')))){
                for (m = 0; m < jsons.length; m++) {
                    if ((jsons[m]['-id'] == jsons[i][sot]) && (jsons[m]['-flag'] == 'middle')) {
                        term=jsons[m]['-id'];
                    }
                }
                for(m = 0;m<jsons.length;m++){
                    if((jsons[m][sot]==term)&&(jsons[m]['-flag']=='tem')){
                        bridges.push([jsons[m]['-target']]);
                        //alert(bridges);
                    }
                }
            }
        }
    }


    for(i=0;i<jsons.length;i++){
        for(j=0;j<bridges.length;j++){
            if(("-id" in jsons[i])&&(jsons[i]["-id"]==bridges[j])&&(jsons[i]['-flag']==flag)){
                valueResults.push(jsons[i]["-value"]);
            }
        }
    }
    results=wirtieResults(uniqueArray(valueResults));
    return results;
}

function wirtieResults(array) {
    var results;
    if(array.length==0){
        results='';
        return results;
    }
    else{
        results = array[0];
        for(var k=1;k<array.length;k++){
            results+='</br>'+ array[k];
        }
        return results;
    }

}
function uniqueArray(array){
    var n = {}, r = [], len = array.length, val, type;
    for (var i = 0; i < array.length; i++) {
        val = array[i];
        type = typeof val;
        if (!n[val]) {
            n[val] = [type];
            r.push(val);
        } else if (n[val].indexOf(type) < 0) {
            n[val].push(type);
            r.push(val);
        }
    }
    return r;
}

function findSource(jsons,jid) {
    var s=-1;
    for(var h=0;h<jsons.length;h++){
        if((jsons[h]["-id"]==jid)&&(jsons[h]['-flag']=='middle')) {
            s=h;
        }
    }
    return s;
}