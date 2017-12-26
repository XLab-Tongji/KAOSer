(function()
{
	Sidebar.prototype.addBpmnPalette = function()
	{
		var sb=this;
		this.addPaletteFunctions('bpmnGateways', 'Goal Modeling', false,
		[
			 this.createVertexTemplateEntry('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#000000', 120, 40, '', 'Goal'),
			 this.createVertexTemplateEntry('shape=requirement;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#F5F5F5;routingCenterX=-0.5;strokeColor=#000000', 120, 40, '', 'Requirement'),
			 this.createVertexTemplateEntry('shape=parallelogram;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=#cccc00;strokeColor=#000000', 120, 40, '', 'Expectation'),
			 this.createVertexTemplateEntry('shape=obstacle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#FF9999;strokeColor=#000000', 120, 40, '', 'Obstacle'),
			 this.createVertexTemplateEntry('shape=domain_property;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#E1D5E7;strokeColor=#000000', 120, 40, '', 'Domain Property'),
			this.addEntry('FF', function()
			{
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=classic;endFill=1;endSize=10;html=1;strokeColor=#CC0000');
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
				var edge = new mxCell('', new mxGeometry(0, 0, 0, 0), 'startArrow=none;endArrow=none;html=1;strokeColor=#000000');
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
		]);

	};
})();
