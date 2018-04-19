package com.test.controller;

import freemarker.template.TemplateException;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class salaryTest {
    @RequestMapping(value = "test",method = RequestMethod.POST)
    public void test(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }
}
