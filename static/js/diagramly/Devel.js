/*
 * $Id: Devel.js,v 1.27 2014/01/08 16:38:06 gaudenz Exp $
 * Copyright (c) 2006-2013, JGraph Ltd
 */
// This provides an indirection to make sure the mxClient.js
// loads before the dependent classes below are loaded. This
// is used for development mode where the JS is in separate
// files and the mxClient.js loads other files.
// Adds external dependencies
mxscript('static/js/spin/spin.min.js');
mxscript('static/js/deflate/pako.min.js');
mxscript('static/js/deflate/base64.js');
mxscript('static/js/sanitizer/sanitizer.min.js');

// Uses grapheditor from devhost
mxscript('./static/js/mxgraph/Editor.js');
mxscript('./static/js/mxgraph/EditorUi.js');
mxscript('./static/js/mxgraph/Sidebar.js');
mxscript('./static/js/mxgraph/mydiv.js');
mxscript('./static/js/mxgraph/RequirementDiv.js');
mxscript('./static/js/mxgraph/divforOthers.js');
mxscript('./static/js/mxgraph/Graph.js');
mxscript('./static/js/mxgraph/Shapes.js');
mxscript('./static/js/mxgraph/Actions.js');
mxscript('./static/js/mxgraph/Menus.js');
mxscript('./static/js/mxgraph/Format.js');
mxscript('./static/js/mxgraph/Toolbar.js');
mxscript('./static/js/mxgraph/Dialogs.js');
mxscript('./static/js/mxgraph/myShaps.js');
mxscript('./static/js/mxgraph/myLineShapes.js');

// Loads main classes
mxscript('./static/js/diagramly/sidebar/Sidebar.js');
mxscript('./static/js/diagramly/sidebar/Sidebar-ObjectModel.js');
mxscript('./static/js/diagramly/sidebar/Sidebar-OperationModel.js');
mxscript('./static/js/diagramly/sidebar/Sidebar-RespModel.js');
mxscript('./static/js/diagramly/sidebar/Sidebar-GoalModel.js');


mxscript('./static/js/diagramly/util/mxJsCanvas.js');
mxscript('./static/js/diagramly/util/mxAsyncCanvas.js');

mxscript('./static/js/diagramly/DrawioFile.js');
mxscript('./static/js/diagramly/LocalFile.js');
mxscript('./static/js/diagramly/LocalLibrary.js');
mxscript('./static/js/diagramly/StorageFile.js');
mxscript('./static/js/diagramly/StorageLibrary.js');
mxscript('./static/js/diagramly/Dialogs.js');
mxscript('./static/js/diagramly/Editor.js');
mxscript('./static/js/diagramly/EditorUi.js');
mxscript('./static/js/diagramly/Settings.js');

// Excluded in base.min.js
mxscript('./static/js/diagramly/DrawioClient.js');
mxscript('./static/js/diagramly/DrawioUser.js');
mxscript('./static/js/diagramly/UrlLibrary.js');
mxscript('./static/js/diagramly/DriveRealtime.js');
mxscript('./static/js/diagramly/RealtimeMapping.js');
mxscript('./static/js/diagramly/DriveFile.js');
mxscript('./static/js/diagramly/DriveLibrary.js');
mxscript('./static/js/diagramly/DriveClient.js');
mxscript('./static/js/diagramly/DropboxFile.js');
mxscript('./static/js/diagramly/DropboxLibrary.js');
mxscript('./static/js/diagramly/DropboxClient.js');
mxscript('./static/js/diagramly/GitHubFile.js');
mxscript('./static/js/diagramly/GitHubLibrary.js');
mxscript('./static/js/diagramly/GitHubClient.js');
mxscript('./static/js/diagramly/OneDriveFile.js');
mxscript('./static/js/diagramly/OneDriveLibrary.js');
mxscript('./static/js/diagramly/OneDriveClient.js');
mxscript('./static/js/diagramly/TrelloFile.js');
mxscript('./static/js/diagramly/TrelloLibrary.js');
mxscript('./static/js/diagramly/TrelloClient.js');
mxscript('./static/js/diagramly/ChatWindow.js');

mxscript('./static/js/diagramly/App.js');
mxscript('./static/js/diagramly/Menus.js');
mxscript('./static/js/diagramly/Pages.js');
mxscript('./static/js/diagramly/Trees.js');
mxscript('./static/js/diagramly/DevTools.js');

// Vsdx Export
mxscript('./static/js/diagramly/vsdx/VsdxExport.js');
mxscript('./static/js/diagramly/vsdx/mxVsdxCanvas2D.js');
mxscript('./static/js/jszip/jszip.min.js');

// mxRuler
mxscript('./static/js/diagramly/ruler/mxRuler.js');

//EquiSpaced Guides
if (urlParams['equiGuides'] == '1')
{
	mxscript('./static/js/diagramly/mxEquiSpacedGuides.js');
}
