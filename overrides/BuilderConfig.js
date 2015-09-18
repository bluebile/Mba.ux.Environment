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

        if (setterEnv) {
            this.validateId(id);
            if (!this.data[id]) {
                this.data[id] = {};
            }
            this.data[id][env] = value;
            return;
        }

        this.callOverridden([id, value]);
    },

    get: function(id, idExtra)
    {
        var env = Mba.ux.Environment.get(),
            data;
        if (env === null) {
            return this.callOverridden([id]);
        }

        if (Ext.isObject(this.data[id]) && this.data[id][env]) {
            data = this.data[id][env];
            if (typeof idExtra != 'undefined') {
                data = data[idExtra];
            }
            if (!data) {
                return '';
            }
            return this.extractValue(data, id);
        }

        return this.callOverridden([id]);
    },

    getExtraValue: function(id, idMain)
    {
        return this.get(idMain, id);
    }
});
