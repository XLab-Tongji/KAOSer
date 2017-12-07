/**
 * Created by admin on 2017/11/30.
 */
function lbogMarker(c, shape, type, pe, unitX, unitY, size, source, sw, filled)
{
    var nx = unitX * (size + sw + 1);
    var ny = unitY * (size + sw + 1);
    var endOffsetX = unitX * sw * 1.118;
    var endOffsetY = unitY * sw * 1.118;

    unitX = unitX * (size + sw);
    unitY = unitY * (size + sw);

    var pt = pe.clone();
    pt.x -= endOffsetX;
    pt.y -= endOffsetY;
    return function()
    {
        c.begin();
        c.moveTo(pe.x - (3*nx)/2 - ny / 2, pe.y - (3*ny)/2 + nx / 2);
        c.lineTo(pe.x - (3*nx)/2 + ny / 2, pe.y - (3*ny)/2 - nx / 2);
        c.stroke();
        c.begin();
        c.moveTo(pe.x,pe.y);
        c.lineTo(pt.x - unitX - unitY / 2, pt.y - unitY + unitX / 2);
        c.lineTo(pt.x - unitX * 3 / 4, pt.y - unitY * 3 / 4);
        c.lineTo(pt.x + unitY / 2 - unitX, pt.y - unitY - unitX / 2);
        c.close();

        if (filled)
        {
            c.fillAndStroke();
        }
        else
        {
            c.stroke();
        }
    };
};

mxMarker.addMarker('lbog', lbogMarker);
function conflictMarker(c, shape, type, pe, unitX, unitY, size, source, sw, filled)
{
    var nx = unitX * (size + sw + 1);
    var ny = unitY * (size + sw + 1);
    var endOffsetX = unitX * sw * 1.118;
    var endOffsetY = unitY * sw * 1.118;

    unitX = unitX * (size + sw);
    unitY = unitY * (size + sw);

    var pt = pe.clone();
    pt.x -= endOffsetX;
    pt.y -= endOffsetY;
    return function()
    {
        c.begin();
        c.moveTo(pe.x - (6*nx)/2 - ny / 3, pe.y - (6*ny)/2 + nx / 3);
        c.lineTo(pe.x - (5*nx)/2 + ny, pe.y - (5*ny)/2 - nx);
        c.lineTo(pe.x-(5*nx)/2+ny/3,pe.y-(5*ny)/2-nx/3);
        c.lineTo(pe.x-(4*nx)/2+ny/3,pe.y-(4*ny)/2-nx/3);
        c.lineTo(pe.x-(5*nx)/2-ny,pe.y-(5*ny)/2+nx);
        c.lineTo(pe.x-(5*nx)/2-ny/3,pe.y-(5*ny)/2+nx/3);
        c.close();


        if (filled)
        {
            c.fillAndStroke();
            c.strokecolor="#CC0000";
            c.fillColor="#CC0000";
        }
        else
        {
            c.stroke();
        }
    };
};

mxMarker.addMarker('conflict', conflictMarker);