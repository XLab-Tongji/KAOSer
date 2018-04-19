package com.test.User;

import org.springframework.data.annotation.Id;

public class RequirementModel extends all{
    @Id
    private String id;
    private String basicEventFlow;
    private String addtionEventFlow;
    private String businessRule;
    private String nonFunctionalRule;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBasicEventFlow() {
        return basicEventFlow;
    }

    public void setBasicEventFlow(String basicEventFlow) {
        this.basicEventFlow = basicEventFlow;
    }

    public String getAddtionEventFlow() {
        return addtionEventFlow;
    }

    public void setAddtionEventFlow(String addtionEventFlow) {
        this.addtionEventFlow = addtionEventFlow;
    }

    public String getBusinessRule() {
        return businessRule;
    }

    public void setBusinessRule(String businessRule) {
        this.businessRule = businessRule;
    }

    public String getNonFunctionalRule() {
        return nonFunctionalRule;
    }

    public void setNonFunctionalRule(String nonFunctionalRule) {
        this.nonFunctionalRule = nonFunctionalRule;
    }
}
