/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MySharedData', { 
    singleton: true,
    foo: 'bar', 
    meh: 42
}); 
Ext.define('ExtAng.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
	
    onItemSelected: function (sender, record) {
		// setting global variable with the selected ID so that the Angular component could grab it and display details for this article item.
		window.fromExtToNg= record.get("id");
		// dispatching even so that Angular app could know when a change to the global variable is made.
		window.dispatchEvent(new CustomEvent('fromExtToNg'));
    }
});
