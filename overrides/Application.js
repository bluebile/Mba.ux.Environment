Ext.define('Mba.ux.Environment.overrides.Application', {
    override: 'Ext.app.Application',
    requires: [ 'Mba.ux.Environment', 'Mba.ux.Environment.overrides.Controller' ],

    statics: {
        appInstance: null
    },

    initConfig: function(config)
    {
        if (config.env) {
            Mba.ux.Environment.set(config.env);
        }

        this.callOverridden(arguments);
        Ext.app.Application.appInstance = this;
    }

});
