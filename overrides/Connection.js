Ext.define('Mba.ux.Environment.overrides.Connection', {
    override: 'Ext.data.Connection',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    setupUrl: function(options, url)
    {
        var form = this.getForm(options),
            regex = null;
        if (form) {
            url = url || form.action;
        }

        if (!Mba.ux.Environment.config.Url.has(url)) {
            return url;
        }

        url = Mba.ux.Environment.config.Url.get(url);

        if (options.paramsUrl) {
            for (var i in paramsUrl) {
                regex = new RegExp('\{' + i + '\}', i);
                url = url.replace(regex, paramsUrl[i]);
            }
        }
        return url;
    }
});
