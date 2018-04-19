var downLoadDiv = document.createElement("div");
//downLoadDiv.setAttribute("id","DownloadDiv");
function showDownloadDiv(){
    downLoadDiv.setAttribute("id","DownloadDiv");
    downLoadDiv.setAttribute("class","white_content");
    var h = document.createElement("h3");
    h.innerHTML="Quick Export";
    var fieldset1 = document.createElement("fieldset");
    var dlbutton = document.createElement("button");
    dlbutton.setAttribute("id","downloadBtn");
    dlbutton.onclick = downloadFile;
    dlbutton.setAttribute("type","button");
    dlbutton.innerHTML = "下载";
    var fieldset2 = document.createElement("fieldset");
    var gubutton = document.createElement("button");
    gubutton.setAttribute("id","giveup");
    dlbutton.setAttribute("type","button");
    gubutton.innerHTML = "取消";
    gubutton.onclick = function (ev) {
        document.body.removeChild(downLoadDiv);
    }
    fieldset1.appendChild(dlbutton);
    fieldset2.appendChild(gubutton);
    downLoadDiv.appendChild(h);
    downLoadDiv.appendChild(fieldset1);
    downLoadDiv.appendChild(fieldset2);
    downLoadDiv.style.display = 'block';
    document.body.appendChild(downLoadDiv);
}
function downloadFile() {
    document.getElementById("DownloadDiv").style.display="none";
    console.log("ajaxDownloadSynchronized");
    var url = "http://localhost:8880/ServletDownload";
    var fileName = document.getElementById("txtname1").value;
    var form = $("<form></form>").attr("action", url).attr("method", "post");
    form.append($("<input />").attr("type", "hidden").attr("name", "fileName").attr("value", fileName));
    form.appendTo('body').submit().remove();
};
