package com.test.controller;

import com.test.Dao.KaoserFileRepository;
import com.test.User.KaoserFile;
import net.sf.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
@RestController
public class ImportFromMongo {
    @Autowired
    MongoTemplate mongoTemplate;
    @RequestMapping(value = "importFromMongo",method = RequestMethod.GET)
//    public void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException{
//
//        List<KaoserFile> kaoserFiles = find("wd");
//        System.out.println(kaoserFiles);
//
//    }
    public void find(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException{
        String myName = request.getParameter("myname");
        Query query = new Query(Criteria.where("myname").is(myName));
        List<KaoserFile> kaoserFiles = mongoTemplate.find(query,KaoserFile.class);
        JSONArray jsonArray = JSONArray.fromObject(kaoserFiles);

        response.setContentType("application/json;charset=utf-8");
        response.setHeader("Cache-Control", "no-cache");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response. setCharacterEncoding("UTF-8");
        PrintWriter pw = response.getWriter();
        pw.print(jsonArray);
        System.out.println(jsonArray);
    }
    @RequestMapping("he")
    public String hello(){
        return "hello world!";
    }

}
