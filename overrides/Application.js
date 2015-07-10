Ext.define('Mba.ux.Environment.overrides.Application', {
    override: 'Ext.app.Application',
    requires: [ 'Mba.ux.Environment' ],

    initConfig: function(config)
    {
        this.superclass.beforeInitConfig = config.beforeInitConfig || Ext.emptyFn;
        if (config.env) {
            Mba.ux.Environment.set(config.env);
        }

        this.callOverridden(arguments);
    }
});