package com.test.User;

import org.springframework.data.annotation.Id;

public class GoalModel extends all{
    @Id
    private String id;
    private String usecaseDiscription;
    private String participant;
    private String preCondition;
    private String aftCondition;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsecaseDiscription() {
        return usecaseDiscription;
    }

    public void setUsecaseDiscription(String usecaseDiscription) {
        this.usecaseDiscription = usecaseDiscription;
    }

    public String getParticipant() {
        return participant;
    }

    public void setParticipant(String participant) {
        this.participant = participant;
    }

    public String getPreCondition() {
        return preCondition;
    }

    public void setPreCondition(String preCondition) {
        this.preCondition = preCondition;
    }

    public String getAftCondition() {
        return aftCondition;
    }

    public void setAftCondition(String aftCondition) {
        this.aftCondition = aftCondition;
    }
}
