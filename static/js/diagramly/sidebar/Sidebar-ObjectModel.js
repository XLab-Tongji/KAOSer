(function()
{
	// Adds ArchiMate 2.1 shapes
	Sidebar.prototype.addObjectModelPalette = function()
	{
		this.addPaletteFunctions('archimate','Object Modeling', false,
		[
			this.createVertexTemplateEntry('shape=requirement;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#F5F5F5;routingCenterX=-0.5;strokeColor=#000000', 120, 40, '', 'Requirement'),
			this.createVertexTemplateEntry('shape=hexagon;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 80, 40, '', 'Agent'),
			this.createVertexTemplateEntry('shape=event;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 120, 40, '', 'Event'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;strokeColor=#000000', 25, 25, '', 'Operation'),
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 120, 40, '', 'Entity'),
		]);
	};
	
})();
