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
		this.addPaletteFunctions('basic', mxResources.get('basic'), false,
		[
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 80, 40, '', 'Entity'),
			this.createVertexTemplateEntry('shape=goal;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#000000', 80, 40, '', 'Goal'),
			this.createVertexTemplateEntry('shape=parallelogram;strokeWidth=5;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#F5F5F5;routingCenterX=-0.5;strokeColor=#000000', 80, 40, '', 'Requirement'),
			this.createVertexTemplateEntry('shape=parallelogram;whiteSpace=wrap;html=1;bottom=0;right=0;fillColor=#cccc00;strokeColor=#000000', 80, 40, '', 'Expectation'),
			this.createVertexTemplateEntry('shape=obstacle;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#FF9999;strokeColor=#000000', 80, 40, '', 'Obstacle'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;strokeColor=#000000', 80, 40, '', 'Operation'),
			this.createVertexTemplateEntry('shape=rhombus;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;strokeColor=#000000', 80, 40, '', 'N-ARY Association'),
			this.createVertexTemplateEntry('shape=domain_property;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#E1D5E7;strokeColor=#000000', 80, 40, '', 'Domain Property'),
			this.createVertexTemplateEntry('shape=event;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 80, 40, '', 'Event'),
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


			//this.createVertexTemplateEntry(s2 + '4_point_star', w, h, '', '4 Point Star', null, null, this.getTagsForStencil(gn, '4_point_star', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + '6_point_star', w, h * 0.9, '', '6 Point Star', null, null, this.getTagsForStencil(gn, '6_point_star', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + '8_point_star', w, h, '', '8 Point Star', null, null, this.getTagsForStencil(gn, '8_point_star', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'banner', w, h * 0.5, '', 'Banner', null, null, this.getTagsForStencil(gn, 'banner', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'cloud_callout', w * 0.9, h * 0.6, '', 'Cloud Callout', null, null, this.getTagsForStencil(gn, 'cloud_callout', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'cone', w, h, '', 'Cone', null, null, this.getTagsForStencil(gn, 'cone', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'cross2;dx=15;', w, h, '', 'Cross', null, null, this.getTagsForStencil(gn, 'cross', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'document', w, h, '', 'Document', null, null, this.getTagsForStencil(gn, 'document', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'flash', w * 0.6, h, '', 'Flash', null, null, this.getTagsForStencil(gn, 'flash', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'half_circle', w, h * 0.5, '', 'Half Circle', null, null, this.getTagsForStencil(gn, 'half_circle', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'heart', w, h, '', 'Heart', null, null, this.getTagsForStencil(gn, 'heart', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'loud_callout', w, h * 0.6, '', 'Loud Callout', null, null, this.getTagsForStencil(gn, 'loud_callout', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'moon', w * 0.75, h, '', 'Moon', null, null, this.getTagsForStencil(gn, 'moon', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'no_symbol', w, h, '', 'No Symbol', null, null, this.getTagsForStencil(gn, 'no_symbol', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'octagon', w, h, '', 'Octagon', null, null, this.getTagsForStencil(gn, 'octagon', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'orthogonal_triangle', w, h, '', 'Orthogonal Triangle', null, null, this.getTagsForStencil(gn, 'orthogonal_triangle', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'oval_callout', w, h * 0.6, '', 'Oval Callout', null, null, this.getTagsForStencil(gn, 'oval_callout', dt).join(' ')),
			// this.createVertexTemplateEntry(s3 + 'parallelogram;whiteSpace=wrap;align=center;size=0.24;', w, h * 0.6, '', 'Parallelepiped', null, null, this.getTagsForStencil(gn, 'parallelepiped', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'pentagon', w, h * 0.9, '', 'Pentagon', null, null, this.getTagsForStencil(gn, 'pentagon', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'rectCallout;dx=30;dy=15;boundedLbl=1;', w, h * 0.6, '', 'Rectangular Callout', null, null, this.getTagsForStencil(gn, 'rectangular_callout', dt).join(' ')),
			// this.createVertexTemplateEntry(s + 'roundRectCallout;dx=30;dy=15;size=5;boundedLbl=1;', w, h * 0.6, '', 'Rounded Rectangular Callout', null, null, this.getTagsForStencil(gn, 'rectangular_callout', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'smiley', w, h, '', 'Smiley', null, null, this.getTagsForStencil(gn, 'smiley', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'star', w, h * 0.95, '', 'Star', null, null, this.getTagsForStencil(gn, 'star', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'sun', w, h, '', 'Sun', null, null, this.getTagsForStencil(gn, 'sun', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'tick', w * 0.85, h, '', 'Tick', null, null, this.getTagsForStencil(gn, 'tick', dt).join(' ')),
			// this.createVertexTemplateEntry(s3 + 'trapezoid;size=0.24;', w, h, '', 'Trapezoid', null, null, this.getTagsForStencil(gn, 'trapezoid', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'wave2;dy=0.3;', w, h * 0.6, '', 'Wave', null, null, this.getTagsForStencil(gn, 'wave', dt).join(' ')),
			// this.createVertexTemplateEntry(s2 + 'x', w, h, '', 'X', null, null, this.getTagsForStencil(gn, 'x', dt).join(' '))
			//
		]);
	};

})();
