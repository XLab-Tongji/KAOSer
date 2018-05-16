(function()
{
	// Adds ArchiMate 2.1 shapes
	Sidebar.prototype.addObjectModelPalette = function()
	{
		this.addPaletteFunctions('archimate','Object Modeling', false,
		[
			this.createVertexTemplateEntry('shape=requirement;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#DAE8FC;routingCenterX=-0.5;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Requirement'),
			this.createVertexTemplateEntry('shape=hexagon;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#fff2cc;strokeColor=#FFD306;fontSize=18', 80, 40, '', 'Agent'),
			this.createVertexTemplateEntry('shape=event;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#e1d5e7;strokeColor=#5A5AAD;fontSize=18', 120, 40, '', 'Event'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffcd28;strokeColor=#000000;fontSize=18', 25, 25, '', 'Operation'),
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000;fontSize=18', 180, 40, '', 'Entity'),
		]);
	};
	
})();
