(function()
{
	Sidebar.prototype.addOperationModelPalette = function()
	{
		
		this.addPaletteFunctions('azure', 'Operation Modeling', false,
		[
			this.createVertexTemplateEntry('shape=requirement;strokeWidth=3;whiteSpace=wrap;html=1;right=0;top=0;bottom=0;fillColor=#DAE8FC;routingCenterX=-0.5;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Requirement'),
			this.createVertexTemplateEntry('shape=hexagon;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#fff2cc;strokeColor=#FFD306;fontSize=18', 80, 40, '', 'Agent'),
		]);
	};
})();
