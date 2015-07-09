Ext.define('Mba.ux.Environment', {
    extend: 'Ext.Evented',
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