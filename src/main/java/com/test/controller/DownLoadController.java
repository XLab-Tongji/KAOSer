package com.test.controller;

import com.test.User.GoalModel;
import com.test.User.OthersModel;
import com.test.User.Relation;
import com.test.User.RequirementModel;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class DownLoadController {
    @Autowired
    freemarker.template.Configuration configuration;

    @Autowired
    MongoTemplate mongoTemplateModel;

    List<GoalModel> goalModels=new ArrayList<>();
    List<RequirementModel> requirementModels=new ArrayList<>();
    List<OthersModel> othersModels=new ArrayList<>();
    List<Relation> relations=new ArrayList<>();

    @RequestMapping(value = "/template/{templateID}" ,method = RequestMethod.POST)
    public void getResults(HttpServletRequest request,
                           HttpServletResponse response,@PathVariable String templateID)
            throws ServletException, IOException, TemplateException {
        System.out.println("Find department with ID: " + templateID);
        String jsonName=request.getParameter("jsname");
        String jsonGet=request.getParameter("jsonStr");
        System.out.println(jsonGet);
        //String myjson=jsonGet.substring(1,jsonGet.length()-1);

        StringBuffer sb=new StringBuffer(jsonGet);

        //get the useful jsonArray
        JSONArray jsonArrayTemplate=getUseful(jsonGet);

        String content;
        Map<String,Object> name=new HashMap<String, Object>();
        name.put("name",jsonName);

        Template myname = null;
        if(templateID.equals("md")){
            myname = configuration.getTemplate("mdftl/namemd.ftl","UTF-8");
        }
        else {
            myname = configuration.getTemplate("rstftl/namerst.ftl","UTF-8");
        }
        content = FreeMarkerTemplateUtils.processTemplateIntoString(myname, name);
        String results=content;
        results=temp(jsonArrayTemplate,results,content,jsonName,templateID);

        WriteStringToFile(jsonName,results,templateID);

        response.setContentType("text/html;charset=utf-8");
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response. setCharacterEncoding("UTF-8");
        System.out.println(results);

        response.getWriter().print(results);
        response.getWriter().flush();
        response.getWriter().close();
    }


    public JSONArray getUseful(String sb){
//        for(int i=0;i<sb.length();i++){
//            if(sb.charAt(i)=='{'){
//                if(sb.charAt(i+1)=='\\'&&sb.charAt(i+2)=='n'){
//                    sb.replace(i+1,i+3,"");
//                }
//
//            }
//            if(sb.charAt(i)=='['){
//                if(sb.charAt(i+1)=='\\'&&sb.charAt(i+2)=='n'){
//                    sb.replace(i+1,i+3,"");
//                }
//            }
//            if(sb.charAt(i)=='"'){
//                if(sb.charAt(i-1)=='\\'){
//                    sb.replace(i-1,i," ");
//                }
//                if(sb.charAt(i+1)=='\\'&&sb.charAt(i+2)=='n'){
//                    sb.replace(i+1,i+3,"");
//                }
//            }
//            if((sb.charAt(i)==',')&&((sb.charAt(i-1)==',')||(sb.charAt(i-1)=='"')||(sb.charAt(i-1)=='}'))){
//                if(sb.charAt(i+1)=='\\'&&sb.charAt(i+2)=='n'){
//                    sb.replace(i+1,i+3,"");
//                }
//            }
//            if(((sb.charAt(i)==']')||(sb.charAt(i)=='}'))&&i!=sb.length()-1){
//                if(sb.charAt(i+1)=='\\'&&sb.charAt(i+2)=='n'){
//                    sb.replace(i+1,i+3,"");
//                }
//            }
//        }
        JSONObject jsonObject=JSONObject.fromObject(sb);
        JSONArray myjsonArray=JSONArray.fromObject(jsonObject.getJSONObject("mxGraphModel").getJSONObject("root").getJSONArray("mxCell"));
        int length=myjsonArray.size();
        JSONArray jsonArrayTemplate=new JSONArray();
        for(int i=2;i<length;i++){
            JSONObject job=myjsonArray.getJSONObject(i);
            jsonArrayTemplate.add(job);
        }
        return jsonArrayTemplate;
    }

    public String temp(JSONArray jsonArray,String result,String content,String jsonName,@PathVariable String templateID)
            throws IOException, TemplateException{
        for(int j=0;j<jsonArray.size();j++){
            JSONObject job=jsonArray.getJSONObject(j);
            System.out.println(job);
            String flag;
            if(job.has("-flag")) {
                flag=job.getString("-flag");
                if (flag.equals("goal")) {
                    Map<String, Object> model = new HashMap<String, Object>();
                    String value = job.getString("-value");
                    GoalModel goalModel=new GoalModel();
                    String myId = job.getString("-id");
                    goalModel.setParent(jsonName);
                    goalModel.setName(jsonName);
                    goalModel.setValue(value);
                    goalModel.setMyid(myId);
                    goalModel.setVertex(job.getString("-vertex"));
                    if (job.has("-usecaseDiscription")) {
                        String usecaseDiscription = job.getString("-usecaseDiscription");
                        model.put("usecaseDiscription", usecaseDiscription);
                        goalModel.setUsecaseDiscription(usecaseDiscription);
                    }
                    if (!job.has("-usecaseDiscription")) {
                        model.put("usecaseDiscription", "未定义");
                    }
                    if (job.has("-participant")) {
                        String participant = job.getString("-participant");
                        model.put("participant", participant);
                        goalModel.setParticipant(participant);
                    }
                    if (!job.has("-participant")) {
                        model.put("participant", "未定义");
                    }
                    if (job.has("-preCondition")) {
                        String preCondition = job.getString("-preCondition");
                        model.put("preCondition", preCondition);
                        goalModel.setPreCondition(preCondition);
                    }
                    if (!job.has("-preCondition")) {
                        model.put("preCondition", "未定义");
                    }
                    if (job.has("-aftCondition")) {
                        String aftCondition = job.getString("-aftCondition");
                        model.put("aftCondition", aftCondition);
                        goalModel.setAftCondition(aftCondition);
                    }
                    if (!job.has("-aftCondition")) {
                        model.put("aftCondition", "未定义");
                    }
                    model.put("value", value);
                    Template t = null;
                    if(templateID.equals("md")){
                        t = configuration.getTemplate("mdftl/goalmd.ftl","UTF-8");
                    }
                    else {
                        t = configuration.getTemplate("rstftl/goalrst.ftl","UTF-8");
                    }
                    content = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

                    //goalModelRepository.save(goalModel);
                    String myStyle=job.getString("-style");
                    goalModel.setStyles(myStyle);
                    goalModel.setParent(job.getString("-parent"));
                    goalModel.setMxGeometry(job.getString("mxGeometry"));
                    goalModel.setFlag("goal");
                    goalModels.add(goalModel);

                    //System.out.println(content);
                } else if (flag.equals("requirement")) {
                    Map<String, Object> model = new HashMap<String, Object>();
                    RequirementModel requirementModel = new RequirementModel();
                    String value = job.getString("-value");
                    requirementModel.setName(jsonName);
                    requirementModel.setValue(value);
                    requirementModel.setStyles(job.getString("-style"));
                    requirementModel.setMyid(job.getString("-id"));
                    requirementModel.setParent(job.getString("-parent"));
                    requirementModel.setMxGeometry(job.getString("mxGeometry"));
                    requirementModel.setVertex(job.getString("-vertex"));
                    if (job.has("-basicEventFlow")) {
                        String basicEventFlow = job.getString("-basicEventFlow");
                        model.put("basicEventFlow", basicEventFlow);
                        requirementModel.setBasicEventFlow(basicEventFlow);
                    }
                    if (!job.has("-basicEventFlow")) {
                        model.put("basicEventFlow", "未定义");
                    }
                    if (job.has("-addtionEventFlow")) {
                        String addtionEventFlow = job.getString("-addtionEventFlow");
                        model.put("addtionEventFlow", addtionEventFlow);
                        requirementModel.setAddtionEventFlow(addtionEventFlow);
                    }
                    if (!job.has("-addtionEventFlow")) {
                        model.put("addtionEventFlow", "未定义");
                    }
                    if (job.has("-businessRule")) {
                        String businessRule = job.getString("-businessRule");
                        model.put("businessRule", businessRule);
                        requirementModel.setBusinessRule(businessRule);
                    }
                    if (!job.has("-businessRule")) {
                        model.put("businessRule", "未定义");
                    }
                    if (job.has("-nonFunctionalRule")) {
                        String nonFunctionalRule = job.getString("-nonFunctionalRule");
                        model.put("nonFunctionalRule", nonFunctionalRule);
                        requirementModel.setNonFunctionalRule(nonFunctionalRule);
                    }
                    if (!job.has("-nonFunctionalRule")) {
                        model.put("nonFunctionalRule", "未定义");
                    }
                    model.put("value", value);
                    Template t = null;
                    if(templateID.equals("md")){
                        t = configuration.getTemplate("mdftl/requirementmd.ftl","UTF-8");
                    }
                    else {
                        t = configuration.getTemplate("rstftl/requirementrst.ftl","UTF-8");
                    }
                    content = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
                    requirementModel.setFlag("requirement");
                    requirementModels.add(requirementModel);
                    //System.out.println(content);
                } else if (!flag.equals("ellipse")){
                    String value = job.getString("-value");
                    OthersModel othersModel = new OthersModel();
                    othersModel.setName(jsonName);
                    othersModel.setValue(value);
                    othersModel.setMyid(job.getString("-id"));
                    othersModel.setMxGeometry(job.getString("mxGeometry"));
                    othersModel.setParent(job.getString("-parent"));
                    othersModel.setFlag(job.getString("-flag"));
                    othersModel.setVertex(job.getString("-vertex"));
                    Map<String, Object> model = new HashMap<String, Object>();
                    if (job.has("-gedetail")) {
                        String detail = job.getString("-gedetail");
                        model.put("detail", detail);
                        othersModel.setGedetail(detail);
                    }
                    if (!job.has("-gedetail")) {
                        model.put("detail", "未定义");
                    }
                    model.put("value", value);
                    model.put("flag", flag);

                    Template t = null;
                    if(templateID.equals("md"))
                    {
                        t = configuration.getTemplate("mdftl/othersmd.ftl","UTF-8");
                    }
                    else {
                        t = configuration.getTemplate("rstftl/othersrst.ftl","UTF-8");
                    }
                    content = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
                    //System.out.println(content);
                    othersModels.add(othersModel);
                }
                result += content;
            }
            else{
                Relation relation = new Relation();
                relation.setName(jsonName);
                relation.setEdge(job.getString("-edge"));
                relation.setMyid(job.getString("-id"));
                relation.setMxGeometry(job.getString("mxGeometry"));
                relation.setSource(job.getString("-source"));
                relation.setTarget(job.getString("-target"));
                relation.setStyles(job.getString("-style"));
                relations.add(relation);
            }
        }

        return result;
    }

    public void WriteStringToFile(String name,String result,@PathVariable String templateID) {
        PrintStream ps=null;
        try {
            File file=null;
            if(templateID.equals("md")) {
                file = new File(ResourceUtils.getURL("src").getPath(),"main/resources/templates/files/md/"+name+".md");
            }else if(templateID.equals("rst")){
                file = new File(ResourceUtils.getURL("src").getPath(),"main/resources/templates/files/rst/"+name+".rst");
            }
            ps = new PrintStream(new FileOutputStream(file));
            ps.println(result);// 往文件里写入字符串

        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        finally {
            ps.close();
        }
    }
}
