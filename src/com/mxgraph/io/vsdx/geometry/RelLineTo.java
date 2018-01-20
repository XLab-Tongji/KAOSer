package com.mxgraph.io.vsdx.geometry;

import com.mxgraph.io.vsdx.Shape;
import com.mxgraph.util.mxPoint;

public class RelLineTo extends Row 
{

	public RelLineTo(int index, Double x, Double y) 
	{
		super(index, x, y);
	}

	@Override
	public String handle(mxPoint p, Shape shape)
	{
		double x = p.getX(), y = p.getY();
		
		if (this.x != null && this.y != null)
		{
			x = this.x * 100;
			y = 100 - this.y * 100;
		}
		
		x = Math.round(x * 100.0) / 100.0;
		y = Math.round(y * 100.0) / 100.0;
		
		p.setX(x);
		p.setY(y);
		shape.setLastX(x);
		shape.setLastY(y);

		return "<" + "line" + " x=\"" + String.valueOf(x) + "\" y=\"" + String.valueOf(y) + "\"/>";
	}

}
