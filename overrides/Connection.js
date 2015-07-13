Ext.define('Mba.ux.Environment.overrides.Connection', {
    override: 'Ext.data.Connection',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    setupUrl: function(options, url)
    {
        var form = this.getForm(options);
        if (form) {
            url = url || form.action;
        }

        if (!Mba.ux.Environment.config.Url.has(url)) {
            return url;
        }

        return Mba.ux.Environment.config.Url.get(url);
    }
});