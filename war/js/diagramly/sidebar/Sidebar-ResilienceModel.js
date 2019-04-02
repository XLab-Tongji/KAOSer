(function()
{
    Sidebar.prototype.addResilienceModelPalette = function()
    {
        this.addPaletteFunctions('normal', 'Resilience Modeling', false,
            [
                this.createVertexTemplateEntry('shape=resilience;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Resilience Goal'),
                this.createVertexTemplateEntry('shape=disruption;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#ffe6cc;strokeColor=#F19C99;fontSize=18', 180, 40, '', 'Disruption'),
            ]);
    };

})();

