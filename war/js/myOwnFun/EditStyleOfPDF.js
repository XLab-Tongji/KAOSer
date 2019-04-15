function EditStyle(data){
    var pos = data.indexOf("shape")
    while(pos > -1){
        var shape = data.substring(pos+6,pos+10);
        var beforeShape = data.substring(0,pos+6);
        if(shape== "goal")
            data = beforeShape + "parallelogram" + data.substring(pos+10);
        else if(shape == "obst")
            data = beforeShape + "parallelogram;flipV=1" + data.substring(pos+14);
        else if(shape== "requ")
            data = beforeShape + "parallelogram" + data.substring(pos+17);
        else if(shape == "doma")
            data = beforeShape + "offPageConnector;flipV=1" + data.substring(pos+21);
        else if(shape == "reso")
            data = beforeShape + "hexagon" + data.substring(pos+14);
        else if(shape == "test")
            data = beforeShape + "offPageConnector;flipV=1" + data.substring(pos+14);
        else if(shape == "resi")
            data = beforeShape + "parallelogram" + data.substring(pos+16);
        else if(shape == "disr")
            data = beforeShape + "parallelogram;flipV=1" + data.substring(pos+16);
        else if(shape == "cros")
            data = beforeShape + "cross;size=0;rotation=45" + data.substring(pos+15);
        pos = data.indexOf("shape",pos+1);
    }
    return data
}