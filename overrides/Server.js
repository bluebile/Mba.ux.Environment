Ext.define('Mba.ux.Environment.overrides.ServerProxy', {
    override: 'Ext.data.proxy.Server',
    requires: [ 'Mba.ux.Environment.config.Url' ],

    getUrl: function(request)
    {
        var url = request ?
            request.getUrl() || this.getApi()[request.getAction()] || this._url :
            this._url;

        return Url.has(url) ? Url.get(url) : url;
    },

    getParams: function(operation) {
        var me = this,
            params = {},
            grouper = operation.getGrouper(),
            sorters = operation.getSorters(),
            filters = operation.getFilters(),
            page = operation.getPage(),
            start = operation.getStart(),
            limit = operation.getLimit(),

            simpleSortMode = me.getSimpleSortMode(),

            pageParam = me.getPageParam(),
            startParam = me.getStartParam(),
            limitParam = me.getLimitParam(),
            groupParam = me.getGroupParam(),
            sortParam = me.getSortParam(),
            filterParam = me.getFilterParam(),
            directionParam = me.getDirectionParam();

        if (me.getEnablePagingParams()) {
            if (pageParam && page !== null) {
                params[pageParam] = page;
            }

            if (startParam && start !== null) {
                params[startParam] = start;
            }

            if (limitParam && limit !== null) {
                params[limitParam] = limit;
            }
        }

        if (groupParam && grouper) {
            // Grouper is a subclass of sorter, so we can just use the sorter method
            params[groupParam] = me.encodeSorters([grouper]);
        }

        if (sortParam && sorters && sorters.length > 0) {
            if (simpleSortMode) {
                params[sortParam] = sorters[0].getProperty();
                params[directionParam] = sorters[0].getDirection();
            } else {
                params[sortParam] = me.encodeSorters(sorters);
            }
        }

        if (filterParam && filters && filters.length > 0) {
            for(var property in filters) {
                params[filters[property].getProperty()] = filters[property].getValue();
            }
        }

        return params;
    }

});
