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
        //Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
		/*MySharedData.foo="change me";
		console.log("yash item selected, data="+MySharedData.foo);*/
		window.fromExtToNg="I am being passed from Ext to Angular!";
		console.log("Global variable set : "+window.fromExtToNg);
		
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
