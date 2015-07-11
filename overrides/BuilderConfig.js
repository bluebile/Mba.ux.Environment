Ext.define('Mba.ux.Environment.overrides.BuilderConfig', {
    override: 'Mba.ux.BuilderConfig',

    set: function(id, value)
    {
        var env = Mba.ux.Environment.get();

        if (env === null) {
            return this.callOverridden([id, value]);
        }

        if (!this.data[id]) {
            this.data[id] = {};
        }

        this.data[id][env] = value;
    },

    get: function(id)
    {
        var env = Mba.ux.Environment.get();

        if (env === null) {
            return this.callOverridden([id]);
        }

        return this.data[id][env];
    }
});
