// function loadMyPagingDocument() {
//     var result;
//     $.ajax({
//         type:"GET",
//         url:mxResources.get("localport")+mxResources.get("urlloadmypagingdocument"),
//         data:{
//             projectName:document.getElementById('title').innerText,
//         },
//         async: true,
//         success:function (data) {
//             // alert("成功");
//             result=data.length;
//
//         },
//         error:function (data) {
//             alert("失败");
//             result=[];
//         }
//     });
//     return result;
// }