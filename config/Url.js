Ext.define('Mba.ux.Environment.config.Url', {
    singleton: true,
    requires: [ 'Mba.ux.Environment' ],
    mixins: [
        'Mba.ux.BuilderConfig.mixin.BuilderConfig'
    ],
    alternateClassName: 'Url',

    constructor: function()
    {
        var env = Mba.ux.Environment.get();
        if (env === null) {
            throw 'E requerido atribuir o ambiente';
        }
    },

    set: function(id, value)
    {
        var all = this.getAll(), index;
        for (index in all) {
            all[index][id] = value
        }
    },

    has: function(id)
    {
        return Ext.isObject(Mba.ux.BuilderConfig.get('url')) && id in Mba.ux.BuilderConfig.get('url');
    },

    get: function(id)
    {
        return Mba.ux.BuilderConfig.get('url')[id];
    },

    getAll: function()
    {
        return Mba.ux.BuilderConfig.get('url');
    }
});