package com.test.User;

import org.springframework.data.annotation.Id;

public class OthersModel extends all{
    @Id
    private String id;
    private String gedetail;

    public void setId(String id) {
        this.id = id;
    }

    public String getId(String id){
        return this.id;
    }

    public String getGedetail() {
        return gedetail;
    }

    public void setGedetail(String gedetail) {
        this.gedetail = gedetail;
    }
}
