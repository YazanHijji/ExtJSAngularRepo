/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtAng.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'ExtAng.view.main.MainController',
        'ExtAng.view.main.MainModel',
        'ExtAng.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        bodyPadding: 20
    },
	layout: 'column',
	items: [
		{
			xtype: 'panel',
			title: 'List of articles',
			height: 300,
			columnWidth: 0.3,
			items: [
				{
					xtype: 'mainlist'
				}
			]
		},
		{
			xtype: 'ngapp',
			ngRootTag: 'app-root',
			ngAppPath: './angularapp'
		}
	]
});
