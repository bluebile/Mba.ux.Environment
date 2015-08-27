Ext.define('Mba.ux.Environment.overrides.ServerProxy', {
    override: 'Ext.data.proxy.Server',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    getUrl: function(request)
    {
        return request ?
               Url.get(request.getUrl() || this.getApi()[request.getAction()] || this._url) :
               Url.get(this._url);
    }
});
