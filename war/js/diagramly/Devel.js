/*
 * $Id: Devel.js,v 1.27 2014/01/08 16:38:06 gaudenz Exp $
 * Copyright (c) 2006-2013, JGraph Ltd
 */
// This provides an indirection to make sure the mxClient.js
// loads before the dependent classes below are loaded. This
// is used for development mode where the JS is in separate
// files and the mxClient.js loads other files.
// Adds external dependencies
mxscript('js/spin/spin.min.js');
mxscript('js/deflate/pako.min.js');
mxscript('js/deflate/base64.js');
mxscript('js/sanitizer/sanitizer.min.js');

// Uses grapheditor from devhost
mxscript('js/mxgraph/Editor.js');
mxscript('js/mxgraph/EditorUi.js');
mxscript('js/mxgraph/Sidebar.js');
mxscript('js/mxgraph/mydiv.js');
mxscript('js/mxgraph/RequirementDiv.js');
mxscript('js/mxgraph/divforOthers.js');
mxscript('js/mxgraph/Graph.js');
mxscript('js/mxgraph/Shapes.js');
mxscript('js/mxgraph/Actions.js');
mxscript('js/mxgraph/Menus.js');
mxscript('js/mxgraph/Format.js');
mxscript('js/mxgraph/Toolbar.js');
mxscript('js/mxgraph/Dialogs.js');
mxscript('js/mxgraph/myShaps.js');
mxscript('js/mxgraph/myLineShapes.js');

// Loads main classes
mxscript('js/diagramly/sidebar/Sidebar.js');

mxscript('js/diagramly/sidebar/Sidebar-ObjectModel.js');
mxscript('js/diagramly/sidebar/Sidebar-OperationModel.js');
mxscript('js/diagramly/sidebar/Sidebar-RespModel.js');
mxscript('js/diagramly/sidebar/Sidebar-GoalModel.js');

mxscript('js/diagramly/util/mxJsCanvas.js');
mxscript('js/diagramly/util/mxAsyncCanvas.js');

mxscript('js/diagramly/DrawioFile.js');
mxscript('js/diagramly/LocalFile.js');
mxscript('js/diagramly/LocalLibrary.js');
mxscript('js/diagramly/StorageFile.js');
mxscript('js/diagramly/StorageLibrary.js');
mxscript('js/diagramly/Dialogs.js');
mxscript('js/diagramly/Editor.js');
mxscript('js/diagramly/EditorUi.js');
mxscript('js/diagramly/Settings.js');

// Excluded in base.min.js
mxscript('js/diagramly/DrawioClient.js');
mxscript('js/diagramly/DrawioUser.js');
mxscript('js/diagramly/UrlLibrary.js');
mxscript('js/diagramly/DriveRealtime.js');
mxscript('js/diagramly/RealtimeMapping.js');
mxscript('js/diagramly/DriveFile.js');
mxscript('js/diagramly/DriveLibrary.js');
mxscript('js/diagramly/DriveClient.js');
mxscript('js/diagramly/DropboxFile.js');
mxscript('js/diagramly/DropboxLibrary.js');
mxscript('js/diagramly/DropboxClient.js');
mxscript('js/diagramly/GitHubFile.js');
mxscript('js/diagramly/GitHubLibrary.js');
mxscript('js/diagramly/GitHubClient.js');
mxscript('js/diagramly/OneDriveFile.js');
mxscript('js/diagramly/OneDriveLibrary.js');
mxscript('js/diagramly/OneDriveClient.js');
mxscript('js/diagramly/TrelloFile.js');
mxscript('js/diagramly/TrelloLibrary.js');
mxscript('js/diagramly/TrelloClient.js');
mxscript('js/diagramly/ChatWindow.js');

mxscript('js/diagramly/App.js');
mxscript('js/diagramly/Menus.js');
mxscript('js/diagramly/Pages.js');
mxscript('js/diagramly/Trees.js');
mxscript('js/diagramly/DevTools.js');

// Vsdx Export
mxscript('js/diagramly/vsdx/VsdxExport.js');
mxscript('js/diagramly/vsdx/mxVsdxCanvas2D.js');
mxscript('js/jszip/jszip.min.js');

// mxRuler
mxscript('js/diagramly/ruler/mxRuler.js');

//EquiSpaced Guides
if (urlParams['equiGuides'] == '1')
{
	mxscript('js/diagramly/mxEquiSpacedGuides.js');
}