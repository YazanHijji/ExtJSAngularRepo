Ext.define('ExtAng.store.Article', {
    extend: 'Ext.data.Store',

    alias: 'store.article',

    fields: [
        'userId', 'id', 'title', 'body'
    ],
	//ToDo: model to be separated in the model folder
	autoLoad: true,
	autoSync: true,
    /*data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},*/
	proxy: {
		type: 'rest',
		url: "https://jsonplaceholder.typicode.com/posts?userId=1",
		headers: {
			'Content-Type': "text/plain" 
		},
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json'
		}
	}	
    /*proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }*/
});
