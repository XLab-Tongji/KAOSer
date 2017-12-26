(function()
{
	Sidebar.prototype.addAzurePalette = function()
	{
		
		this.addPaletteFunctions('azure', 'Object Modeling', false,
		[
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000', 120, 40, '', 'Entity'),
			this.createVertexTemplateEntry('shape=rhombus;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ffff33;strokeColor=#000000', 120, 40, '', 'N-ARY Association'),

		]);
	};
})();
