Ext.define('Mba.ux.Environment.overrides.Controller', {
    override: 'Ext.app.Controller',
    requires: [ 'Mba.ux.Environment' ],

    initConfig: function(config)
    {
        if (config.env) {
            Mba.ux.Environment.set(config.env);
        }
        this.callOverridden(arguments);
    },

    applyServices: function(services) {
        return this.getFullyQualified(services, 'service');
    },

    getServices: function() {
        return this.config.services || [];
    },

    getFullyQualified: function(items, namespace) {
        var length  = items.length,
            appName = this.getApplication().getName(),
            name, i;
        for (i = 0; i < length; i++) {
            name = items[i];

            //we check name === appName to allow MyApp.profile.MyApp to exist
            if (Ext.isString(name) && (Ext.Loader.getPrefix(name) === "" || name === appName) &&
                name.indexOf(':') === -1) {
                items[i] = appName + '.' + namespace + '.' + name;
            } else {
                items[i] = name.replace(':', '.' + namespace + '.');
            }
        }

        return items;
    }
});
