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


ObstacleShape.prototype.constraints = mxRectangleShape.prototype.constraints;
GoalShape.prototype.constraints = mxRectangleShape.prototype.constraints;
DomainPropertyShape.prototype.constraints = mxRectangleShape.prototype.constraints;
EventShape.prototype.constraints = mxRectangleShape.prototype.constraints;

// function mxLine(bounds, stroke, strokewidth)
// {
//     mxShape.call(this);
//     this.bounds = bounds;
//     this.stroke = stroke;
//     this.strokewidth = (strokewidth != null) ? strokewidth : 1;
// };
// mxUtils.extend(mxLine, mxShape);
//
//
// mxLine.prototype.paintVertexShape = function(path, x, y, w, h)
// {
//     var mid = y + h / 2;
//
//     path.begin();
//     path.moveTo(x, mid);
//     path.lineTo(x + w, mid);
//     path.stroke();
// };
// mxLine.prototype.defaultEdge['myline']=mxLine;

