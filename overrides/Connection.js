Ext.define('Mba.ux.Environment.overrides.Connection', {
    override: 'Ext.data.Connection',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    setupHeaders: function(xhr, options, data, params)
    {
        headers = this.callOverridden(arguments);
        if (!headers['Origin']) {
            headers['Origin'] = location.protocol + '//' + location.hostname;
        }
        return headers;
    },

    setupUrl: function(options, url)
    {
        var form = this.getForm(options);
        if (form) {
            url = url || form.action;
        }

        if (!Mba.ux.Environment.config.Url.has(url)) {
            return this.replaceParamsUrl(options, url);
        }

        url = Mba.ux.Environment.config.Url.get(url);

        return this.replaceParamsUrl(options, url);
    },

    getUrlBase: function(service) {
        var env = Mba.ux.Environment.get();

        if(service.indexOf(".json") === -1) {
            if(env === 'production') {
                var store = Ext.getStore('ConfiguracaoStore');
                var record = store.getData().all;

                if(record.length > 0) {
                    return record[0].get('urlBase').toString().concat(service);
                }
            }
        }

        return service;
    },

    replaceParamsUrl: function(options, url)
    {
        var regex, params;
        if (options.params) {

            if (typeof(options.params) === 'string'){
                params = Ext.JSON.decode(options.params);
            } else {
                params = options.params;
            }

            for (var i in params) {
                regex = new RegExp('\{' + i + '\}', 'i');
                url = url.replace(regex, params[i]);
                if (url.match(regex)) {
                    delete options.params[i];
                }
            }
        }
        return this.getUrlBase(url);
    }

});
