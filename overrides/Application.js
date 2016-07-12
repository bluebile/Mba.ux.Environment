Ext.define('Mba.ux.Environment.overrides.Application', {
    override: 'Ext.app.Application',
    requires: [ 'Mba.ux.Environment', 'Mba.ux.Environment.overrides.Controller' ],

    initConfig: function(config)
    {
        if (config.env) {
            Mba.ux.Environment.set(config.env);
        }

        this.callOverridden(arguments);
    }
});
