package com.test.User;

import org.springframework.data.annotation.Id;

public class Relation {
    @Id
    private String id;
    private String myid;
    private String styles;
    private String source;
    private String target;
    private String mxGeometry;
    private String edge;
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMyid() {
        return myid;
    }

    public void setMyid(String myid) {
        this.myid = myid;
    }

    public String getStyles() {
        return styles;
    }

    public void setStyles(String style) {
        this.styles = style;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getMxGeometry() {
        return mxGeometry;
    }

    public void setMxGeometry(String mxGeometry) {
        this.mxGeometry = mxGeometry;
    }

    public String getEdge() {
        return edge;
    }

    public void setEdge(String edge) {
        this.edge = edge;
    }
}
