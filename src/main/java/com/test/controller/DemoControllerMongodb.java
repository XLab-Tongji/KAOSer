package com.test.controller;

import com.test.User.DemoInfo;
import com.test.Dao.DemoInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class DemoControllerMongodb {
    @Autowired
    private DemoInfoRepository demoInfoRepository;

    @RequestMapping("hello")
    public String hello(){
        return "hello world!";
    }

//    @RequestMapping("save")
//    public String save(){
//        DemoInfo demoInfo = new DemoInfo();
//        demoInfo.setName("张三");
//        demoInfo.setAge(20);
//        demoInfoRepository.save(demoInfo);
//
//        demoInfo = new DemoInfo();
//        demoInfo.setName("李四");
//        demoInfo.setAge(30);
//        demoInfoRepository.save(demoInfo);
//
//        return "Insert Success.";
//    }

    @RequestMapping("delete")
    public String delete(){
        demoInfoRepository.delete(demoInfoRepository.findByName("李四").getId());
        return "Delete Success.";
    }

    @RequestMapping("find")
    public List<DemoInfo> find(){
        return demoInfoRepository.findAll();
    }

    @RequestMapping("findByName")
    public DemoInfo findByName(String name){
        return demoInfoRepository.findByName(name);
    }
}
