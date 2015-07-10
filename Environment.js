Ext.define('Mba.ux.Environment', {
    requires: [ 'Mba.ux.BuilderConfig', 'Mba.ux.Environment.overrides.BuilderConfig' ],
    singleton: true,
    env: null,

    set: function(env)
    {
        this.env = env;
    },

    get: function()
    {
        return this.env;
    }
});