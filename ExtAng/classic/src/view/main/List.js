 /**
 * This view is an example list of Articles.
 */
Ext.define('ExtAng.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ExtAng.store.Article'
    ],

    title: 'Article',

    store: {
        type: 'article'
    },

    columns: [
        { text: 'User ID',  dataIndex: 'userId' },
        { text: 'Article ID', dataIndex: 'id' },
        { text: 'Title', dataIndex: 'title' },
		{ text: 'Body', dataIndex: 'body', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
