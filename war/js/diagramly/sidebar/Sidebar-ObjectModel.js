(function()
{
	// Adds ArchiMate 2.1 shapes
	Sidebar.prototype.addObjectModelPalette = function()
	{
		this.addPaletteFunctions('archimate','Object Modeling', false,
		[
			this.createVertexTemplateEntry('shape=event;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#e1d5e7;strokeColor=#5A5AAD;fontSize=18', 120, 40, '', 'Event'),
			this.createVertexTemplateEntry('shape=ellipse;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffcd28;strokeColor=#000000;fontSize=18', 25, 25, '', 'Operation'),
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000;fontSize=18', 180, 40, '', 'Entity'),
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000;fontSize=18', 120, 40, '', 'Entity'),
			this.createVertexTemplateEntry('shape=rhombus;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ff2cc;strokeColor=#FFD306;fontSize=18', 120, 40, '', 'N-ARY Association'),
		]);
	};
	
})();
