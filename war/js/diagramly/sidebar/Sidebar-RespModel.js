(function()
{
	Sidebar.prototype.addRespModelPalette = function()
	{
		var sb=this;
		this.addPaletteFunctions('basic', "Responsibility Modeling", false,
		[
			//this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 120, 40, '', 'Entity'),
			//this.createVertexTemplateEntry('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#000000', 120, 40, '', 'Goal'),
			this.createVertexTemplateEntry('shape=requirement;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#fff2cc;routingCenterX=-0.5;strokeColor=#D1BB7E;fontSize=18', 180, 40, '', 'Requirement'),
			this.createVertexTemplateEntry('shape=hexagon;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#fff2cc;strokeColor=#D1BB7E;fontSize=18', 80, 40, '', 'Agent'),
			this.createVertexTemplateEntry('shape=event;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#e1d5e7;strokeColor=#5A5AAD;fontSize=18', 120, 40, '', 'Event'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffcd28;strokeColor=#FFD306;fontSize=18', 25, 25, '', 'Operation'),
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000;fontSize=18;fontSize=18', 180, 40, '', 'Entity'),
			this.createVertexTemplateEntry('shape=parallelogram;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=#fff2cc;strokeColor=#000000;fontSize=18', 160, 40, '', 'Expectation'),
			this.createVertexTemplateEntry('shape=obstacle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#ffe6cc;strokeColor=#F19C99;fontSize=18', 160, 40, '', 'Obstacle'),
			this.addEntry('FF', function()
			{
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=classic;endFill=1;endSize=10;html=1;strokeColor=#CC0000;strokeWidth=2');
				edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
				edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
				edge.geometry.relative = true;
				edge.edge = true;

				var cell = new mxCell('', new mxGeometry(0, 0, 18, 18), 'shape=ellipse;html=1;strokeColor=#000000;fillColor=#CC0000');
				cell.geometry.relative = true;
				cell.setConnectable(false);
				cell.vertex = true;
				cell.geometry.offset = new mxPoint(-9, -9);
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
            this.addEntry('ObstructLine', function()
            {
                var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=classic;endFill=1;endSize=10;html=1;strokeColor=#CC0000;strokeWidth=2');
                edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
                edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
                edge.geometry.relative = true;
                edge.edge = true;

                var cell = new mxCell('', new mxGeometry(0, 0, 18, 18), 'shape=crossSign;html=1;strokeColor=#000000;strokeWidth=2');
                cell.geometry.relative = true;
                cell.setConnectable(false);
                cell.vertex = true;
                cell.geometry.offset = new mxPoint(-9, -9);
                edge.insert(cell);

                return sb.createEdgeTemplateFromCells([edge], 100, 0, 'Obstruct');
            }),
            this.addEntry('resolve', function()
            {
                var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=classic;endFill=1;endSize=10;html=1;strokeColor=#82b366;strokeWidth=2');
                edge.geometry.setTerminalPoint(new mxPoint(0, 0), true);
                edge.geometry.setTerminalPoint(new mxPoint(100, 0), false);
                edge.geometry.relative = true;
                edge.edge = true;

                var cell = new mxCell('', new mxGeometry(0, 0, 18, 18), 'shape=ellipse;html=1;strokeColor=#82b366;fillColor=#ffffff;strokeWidth=2');
                cell.geometry.relative = true;
                cell.setConnectable(false);
                cell.vertex = true;
                cell.geometry.offset = new mxPoint(-9, -9);
                edge.insert(cell);

                return sb.createEdgeTemplateFromCells([edge], 100, 0, 'resolve');
            }),

		]);
	};

})();
