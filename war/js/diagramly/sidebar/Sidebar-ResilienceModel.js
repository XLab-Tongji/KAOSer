(function()
{
    Sidebar.prototype.addResilienceModelPalette = function()
    {
        this.addPaletteFunctions('normal', 'Resilience Modeling', false,
            [
                this.createVertexTemplateEntry('shape=resilience;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#DAE8FC;strokeColor=#0066CC;fontSize=18', 180, 40, '', 'Resilience Goal'),
                this.createVertexTemplateEntry('shape=disruption;whiteSpace=wrap;html=1;top=0;left=0;fillColor=#ffe6cc;strokeColor=#F19C99;fontSize=18', 180, 40, '', 'Disruption'),
                this.createVertexTemplateEntry('shape=performancebenchmark;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#FFD966;strokeColor=#916740;fontSize=18', 120, 60, '', 'Performannce Benchmark'),
                this.createVertexTemplateEntry('shape=resource;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#e1d5e7;strokeColor=#9673a6;fontSize=18', 120, 40, '', 'Asset'),
                this.createVertexTemplateEntry('shape=testcase;whiteSpace=wrap;html=1;top=0;bottom=0;fillColor=#D5E8D4;strokeColor=#82B366;fontSize=18', 120, 60, '', 'Test Case')
            ]);
    };

})();
