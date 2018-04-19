(function()
{
	Sidebar.prototype.addOperationModelPalette = function()
	{
		
		this.addPaletteFunctions('azure', 'Operation Modeling', false,
		[
			this.createVertexTemplateEntry('whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFFFFF;strokeColor=#000000;fontSize=18', 120, 40, '', 'Entity'),
			this.createVertexTemplateEntry('shape=rhombus;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#ff2cc;strokeColor=#FFD306;fontSize=18', 120, 40, '', 'N-ARY Association'),

		]);
	};
})();
