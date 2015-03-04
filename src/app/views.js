'use strict';

module.exports = function(App) {

    App.WelcomeDemoView = require('./RouteViews/WelcomeDemoView.js');
    App.WorkspaceMatcherView = require('./RouteViews/WorkspaceMatcherView.js');
    App.ProjectThumbnailView = require('./views/ProjectThumbnailView.js');
    App.DemoThumbnailView = require('./views/DemoThumbnailView.js');
    App.ImageLoaderView = require('./views/ImageLoaderView.js');
    App.CpuSettingView = require('./views/CpuSettingView.js');
    App.SiftView = require('./views/SiftView.js');
    App.StateBarView = require('./views/StateBarView.js');
    App.TwoViewMatchingView = require('./views/TwoViewMatchingView.js');
    App.ProjectCreatorView = require('./views/ProjectCreatorView.js');

};