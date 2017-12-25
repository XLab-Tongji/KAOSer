(function()
{
	Sidebar.prototype.addBasicPalette = function()
	{
		// var w = 100;
		// var h = 100;
		// var s = 'strokeWidth=2;whiteSpace=wrap;html=1;shape=mxgraph.basic.';
		// var s2 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;strokeWidth=2;shape=mxgraph.basic.';
		// var s3 = mxConstants.STYLE_VERTICAL_LABEL_POSITION + '=bottom;' + mxConstants.STYLE_VERTICAL_ALIGN + '=top;html=1;strokeWidth=2;shape=';
		// var gn = 'mxgraph.basic';
		// var dt = '';
		var sb=this;
		this.addPaletteFunctions('basic', "HELLO", false,
		[
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 120, 40, '', 'Entity'),
			this.createVertexTemplateEntry('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#000000', 120, 40, '', 'Goal'),
			this.createVertexTemplateEntry('shape=parallelogram;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#F5F5F5;routingCenterX=-0.5;strokeColor=#000000', 120, 40, '', 'Requirement'),
			this.createVertexTemplateEntry('shape=parallelogram;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=#cccc00;strokeColor=#000000', 120, 40, '', 'Expectation'),
			this.createVertexTemplateEntry('shape=obstacle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#FF9999;strokeColor=#000000', 120, 40, '', 'Obstacle'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;strokeColor=#000000', 120, 40, '', 'Operation'),
			this.createVertexTemplateEntry('shape=rhombus;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;strokeColor=#000000', 120, 40, '', 'N-ARY Association'),
			this.createVertexTemplateEntry('shape=domain_property;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#E1D5E7;strokeColor=#000000', 120, 40, '', 'Domain Property'),
			this.createVertexTemplateEntry('shape=event;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 120, 40, '', 'Event'),
			this.createVertexTemplateEntry('shape=hexagon;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 80, 40, '', 'Agent'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;aspect=fixed;strokeColor=#000000', 20, 20, '', ' '),
			//this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#CC0000;aspect=fixed;strokeColor=#000000', 20, 20, '', ' '),
			//this.createEdgeTemplateEntry('startArrow=none;startSize=7;endArrow=classic;endFill=1;endSize=10;dashed=1;html=1;', 100, 0, '', 'Message Flow 1', null, 'bpmn message flow'),
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
