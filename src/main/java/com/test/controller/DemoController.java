package com.test.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class DemoController {
    @RequestMapping("/file")
    public String sideBar(){
        return "/filedownload";
    }
    @RequestMapping("/index")
    public String index(){
        return "/index";
    }

}
