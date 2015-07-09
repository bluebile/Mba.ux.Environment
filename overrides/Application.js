Ext.define('Mba.ux.Environment.overrides.Application', {
    override: 'Ext.app.Application',

    initConfig: function(config)
    {
        if (config.env) {
            Mba.ux.Environment.setEnv(config.env);
        }
        this.callOverridden([config]);
    }
});