(function()
{
	Sidebar.prototype.addGoalModelPalette = function()
	{
		var sb=this;
		this.addPaletteFunctions('bpmnGateways', 'Goal Modeling', false,
		[
			 this.createVertexTemplateEntry('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Goal'),
			 this.createVertexTemplateEntry('shape=requirement;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#fff2cc;routingCenterX=-0.5;strokeColor=#D1BB7E;fontSize=18', 160, 40, '', 'Requirement'),
			 this.createVertexTemplateEntry('shape=expectation;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=#f8cecc;strokeColor=#99004D;fontSize=18', 180, 40, '', 'Expectation'),
			 this.createVertexTemplateEntry('shape=obstacle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#ffe6cc;strokeColor=#F19C99;fontSize=18', 180, 40, '', 'Obstacle'),
			 this.createVertexTemplateEntry('shape=domain_property;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFD966;strokeColor=#FFD306;fontSize=18', 120, 40, '', 'Domain Property'),
			this.addEntry('FF', function()
			{
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=classic;endFill=1;endSize=10;html=1;strokeColor=#000000;strokeWidth=3');
				edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
				edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
				edge.geometry.relative = true;
				edge.edge = true;

				var cell = new mxCell('', new mxGeometry(0, 0, 14, 14), 'shape=ellipse;html=1;strokeColor=#000000;fillColor=#CC0000');
				cell.geometry.relative = true;
				cell.setConnectable(false);
				cell.vertex = true;
				cell.geometry.offset = new mxPoint(-7, -7);
				edge.insert(cell);

				return sb.createEdgeTemplateFromCells([edge], 100, 0, 'ff');
			}),
			this.addEntry('conflict', function()
			{
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=none;html=1;strokeColor=#000000;strokeWidth=3');
				edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
				edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
				edge.geometry.relative = true;
				edge.edge = true;

				var cell = new mxCell('', new mxGeometry(0, 0, 30, 30), 'shape=myconflict;html=1;fillColor=#CC0000');
				cell.geometry.relative = true;
				cell.setConnectable(false);
				cell.vertex = true;
				cell.geometry.offset = new mxPoint(-15, -15);
				edge.insert(cell);

				return sb.createEdgeTemplateFromCells([edge], 100, 0, 'Conflict');
			}),
            this.addEntry('and', function()
            {
                var cell = new mxCell('', new mxGeometry(0, 0, 30, 30), 'shape=ellipse;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;');
                cell.vertex = true;
                cell.flag = 'middle';

                var edge1 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;align=left;verticalAlign=bottom;endArrow=classic;endSize=8;strokeWidth=2;strokeColor=#000000');
                edge1.geometry.setTerminalPoint(new mxPoint(60, 60), false);
                edge1.geometry.relative = true;
                edge1.geometry.x = -1;
                edge1.edge = true;
				edge1.flag = 'and';
                cell.insertEdge(edge1, true);

                var edge2 = new mxCell('', new mxGeometry(0, 0, 0, 0), 'html=1;align=left;verticalAlign=top;endArrow=classic;endSize=8;strokeWidth=2;strokeColor=#000000');
                edge2.geometry.setTerminalPoint(new mxPoint(-30, 60), false);
                edge2.geometry.relative = true;
                edge2.geometry.x = -1;
                edge2.edge = true;
                edge2.flag = 'and';
                cell.insertEdge(edge2, true);


                var edge3 = new mxCell('',new mxGeometry(0,0,0,0),'html=1;align=left;verticalAlign=top;endArrow=none;endSize=8;strokeWidth=2;strokeColor=#000000');
                edge3.geometry.setTerminalPoint(new mxPoint(15, -50), false);
                edge3.geometry.relative = true;
                edge3.geometry.x = -1;
                edge3.edge = true;
                edge3.flag = 'tem';
                cell.insertEdge(edge3, true);

                return sb.createVertexTemplateFromCells([cell, edge1, edge2,edge3], 180, 100, 'And');
            }),
		]);

	};
})();
