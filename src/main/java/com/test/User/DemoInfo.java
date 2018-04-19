package com.test.User;

import org.springframework.data.annotation.Id;


public class DemoInfo {

    //id属性是给mongodb用的，用@Id注解修饰
    @Id
    private String id;

    private String name;

    private int age;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return "DemoInfo [id=" + id + ", name=" + name + ", age=" + age + "]";
    }
}