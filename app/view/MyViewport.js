/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',

    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'center',
                    id: 'myPanel',
                    title: 'My Panel'
                },
                {
                    xtype: 'treepanel',
                    region: 'west',
                    width: 269,
                    title: 'My Tree Grid Panel',
                    store: 'MyJsonPTreeStore',
                    viewConfig: {
                        rootVisible: false
                    },
                    columns: [
                        {
                            xtype: 'treecolumn',
                            dataIndex: 'category',
                            flex: 1,
                            text: 'Nodes'
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'data',
                            text: 'Value'
                        }
                    ],
                    listeners: {
                        select: {
                            fn: me.onTreepanelSelect,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onTreepanelSelect: function(selModel, record, index, options) {

        Ext.getCmp('myPanel').update(record.get('info'));

    }

});