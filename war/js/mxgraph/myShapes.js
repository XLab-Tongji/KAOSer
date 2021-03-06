//设置图形样式
function GoalShape()
{
    mxActor.call(this);
};
mxUtils.extend(GoalShape, mxActor);
GoalShape.prototype.size = 0.2;
GoalShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0, h), new mxPoint(dx, 0), new mxPoint(w, 0), new mxPoint(w - dx, h)],
        this.isRounded, arcSize, true);
    c.end();
};
mxCellRenderer.prototype.defaultShapes['goal'] = GoalShape;

function ResilienceShape()
{
    mxActor.call(this);
};
mxUtils.extend(ResilienceShape, mxActor);
ResilienceShape.prototype.size = 0.2;
ResilienceShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0, h), new mxPoint(dx, 0), new mxPoint(w, 0), new mxPoint(w - dx, h)],
        this.isRounded, arcSize, true);
    c.end();
};
mxCellRenderer.prototype.defaultShapes['resilience'] = ResilienceShape;


function ExpectationShape()
{
    mxActor.call(this);
};
mxUtils.extend(ExpectationShape, mxActor);
ExpectationShape.prototype.size = 0.2;
ExpectationShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0, h), new mxPoint(dx, 0), new mxPoint(w, 0), new mxPoint(w - dx, h)],
        this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['expectation'] = ExpectationShape;
function RequirementShape()
{
    mxActor.call(this);
};
mxUtils.extend(RequirementShape, mxActor);
RequirementShape.prototype.size = 0.2;
RequirementShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0, h), new mxPoint(dx, 0), new mxPoint(w, 0), new mxPoint(w - dx, h)],
        this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['requirement'] = RequirementShape;

function ObstacleShape()
{
    mxActor.call(this);
};
mxUtils.extend(ObstacleShape, mxActor);
ObstacleShape.prototype.size = 0.2;
ObstacleShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(dx, h), new mxPoint(0, 0), new mxPoint(w-dx, 0), new mxPoint(w , h)],
        this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['obstacle'] = ObstacleShape;

function DisruptionShape(){
    mxActor.call(this);
};
mxUtils.extend(DisruptionShape, mxActor);
DisruptionShape.prototype.size = 0.2;
DisruptionShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var dx = w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(dx, h), new mxPoint(0, 0), new mxPoint(w-dx, 0), new mxPoint(w , h)],
        this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['disruption'] = DisruptionShape;



function DomainPropertyShape()
{
    mxActor.call(this);
};
mxUtils.extend(DomainPropertyShape, mxActor);
DomainPropertyShape.prototype.size = 0.2;
DomainPropertyShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var s =  w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(w/2, 0), new mxPoint(w, s), new mxPoint(w, h), new mxPoint(0, h),
        new mxPoint(0, s)], this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['domain_property'] = DomainPropertyShape;

function PerformanceShape()
{
    mxActor.call(this);
};
mxUtils.extend(PerformanceShape, mxActor);
PerformanceShape.prototype.size = 0.2;
PerformanceShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var s =  w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(w/2, 0), new mxPoint(w, s), new mxPoint(w, h), new mxPoint(0, h),
        new mxPoint(0, s)], this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['performancebenchmark'] = PerformanceShape;

function TestCaseShape()
{
    mxActor.call(this);
};
mxUtils.extend(TestCaseShape, mxActor);
TestCaseShape.prototype.size = 0.2;
TestCaseShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var s =  w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(w/2, 0), new mxPoint(w, s), new mxPoint(w, h), new mxPoint(0, h),
        new mxPoint(0, s)], this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['testcase'] = TestCaseShape;


function ResourceShape()
{
    mxActor.call(this);
};
mxUtils.extend(ResourceShape, mxActor);
ResourceShape.prototype.size = 0.2;
ResourceShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0.25 * w, 0), new mxPoint(0.75 * w, 0), new mxPoint(w, 0.5 * h), new mxPoint(0.75 * w, h),
        new mxPoint(0.25 * w, h), new mxPoint(0, 0.5 * h)], this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['resource'] = ResourceShape;

function EventShape()
{
    mxActor.call(this);
};
mxUtils.extend(EventShape, mxActor);
EventShape.prototype.size = 0.2;
EventShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var s =  w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(0, 0), new mxPoint(w - s, 0), new mxPoint(w, h / 2), new mxPoint(w - s, h),
        new mxPoint(0, h)], this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['event'] = EventShape;


function ConflictShape()
{
    mxActor.call(this);
};
mxUtils.extend(ConflictShape, mxActor);
ConflictShape.prototype.size = 0.2;
ConflictShape.prototype.redrawPath = function(c, x, y, w, h)
{
    var s =  w * Math.max(0, Math.min(1, parseFloat(mxUtils.getValue(this.style, 'size', this.size))));
    var arcSize = mxUtils.getValue(this.style, mxConstants.STYLE_ARCSIZE, mxConstants.LINE_ARCSIZE) / 2;
    this.addPoints(c, [new mxPoint(w / 2, 0), new mxPoint(w / 2, (1 * h) / 3), new mxPoint((2 * w) / 3,(2 * h) / 7), new mxPoint(w / 2, h),
        new mxPoint(w / 2, (2 * h) / 3),new mxPoint((1 * w) / 3, (5 * h) / 7)], this.isRounded, arcSize, true);
    c.end();
};

mxCellRenderer.prototype.defaultShapes['myconflict'] = ConflictShape;

function CrossSign(){
    mxActor.call(this);
}
mxUtils.extend(CrossSign, mxActor);
CrossSign.prototype.size = 0.2;
CrossSign.prototype.redrawPath = function(c, x, y, w, h){
      //c.begin();
      c.moveTo(0,0);
      c.lineTo(w,h);
      c.end();


      c.moveTo(w,0);
      c.lineTo(0,h);
      c.close();
};
mxCellRenderer.prototype.defaultShapes['crossSign'] = CrossSign;



ObstacleShape.prototype.constraints = mxRectangleShape.prototype.constraints;
GoalShape.prototype.constraints = mxRectangleShape.prototype.constraints;
DomainPropertyShape.prototype.constraints = mxRectangleShape.prototype.constraints;
TestCaseShape.prototype.constraints = mxRectangleShape.prototype.constraints;
EventShape.prototype.constraints = mxRectangleShape.prototype.constraints;
RequirementShape.prototype.constraints = mxRectangleShape.prototype.constraints;
ExpectationShape.prototype.constraints = mxRectangleShape.prototype.constraints;
ResourceShape.prototype.constraints = mxRectangleShape.prototype.constraints;
ResilienceShape.prototype.constraints = mxRectangleShape.prototype.constraints;
DisruptionShape.prototype.constraints = mxRectangleShape.prototype.constraints;



