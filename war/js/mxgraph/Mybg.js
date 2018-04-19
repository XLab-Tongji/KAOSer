//背景
var mybg = document.createElement("div");
var displayDiv=function()
{
    mybg.setAttribute("id","fade");
    mybg.style.width = "100%";
    mybg.style.height = "100%";
    mybg.style.backgroundColor= "#000000";
    mybg.style.position = "absolute";//绝对位置显示
    mybg.style.zIndex = "998";//z轴位置
    mybg.style.opacity = "0.8";//透明度
    mybg.style.top = "0%";
    mybg.style.left = "0%";
    mybg.style.filter = "Alpha(opacity=80)";//滤镜显示透明度
    mybg.style.display="block";
    document.body.appendChild(mybg);
};
var removeDiv=function(mdiv)
{
    document.body.removeChild(mdiv);
};