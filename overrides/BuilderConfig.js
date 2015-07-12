Ext.define('Mba.ux.Environment.overrides.BuilderConfig', {
    override: 'Mba.ux.BuilderConfig',

    set: function(id, value, setterEnv)
    {
        var env = Mba.ux.Environment.get();

        if (typeof setterEnv === 'undefined') {
            setterEnv = true;
        }

        if (env === null) {
            return this.callOverridden([id, value]);
        }

        if (!this.data[id]) {
            this.data[id] = {};
        }

        if (setterEnv) {
            this.data[id][env] = value;
            return;
        }

        this.callOverridden([id, value]);
    },

    get: function(id)
    {
        var env = Mba.ux.Environment.get(),
            result = this.callOverridden([id]);
        if (env === null) {
            return result;
        }

        return this.data[id][env];
    }
});
