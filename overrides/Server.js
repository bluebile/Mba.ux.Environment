Ext.define('Mba.ux.Environment.overrides.ServerProxy', {
    override: 'Ext.data.proxy.Server',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    getUrl: function(request)
    {
        var url = request ?
            request.getUrl() || this.getApi()[request.getAction()] || this._url :
            this._url;

        return Url.has(url) ? Url.get(url) : url;
    }
});
