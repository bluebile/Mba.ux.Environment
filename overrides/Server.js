Ext.define('Mba.ux.Environment.overrides.ServerProxy', {
    override: 'Ext.data.proxy.Server',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    buildUrl: function(request)
    {
        var url = request.getUrl();
        if (Url.has(url)) {
            return this.callParent([request]);
        }

        if (this.getNoCache()) {
            url = Ext.urlAppend(url, Ext.String.format("{0}={1}", this.getCacheString(), Ext.Date.now()));
        }

        return url;
    },

    getUrl: function(request)
    {
        return request ?
            Url.get(request.getUrl() || this.getApi()[request.getAction()] || this._url) :
            Url.get(this._url);
    }
});
