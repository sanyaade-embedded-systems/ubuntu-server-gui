define([
    'jquery',
    'underscore',
    'backbone'

], ($, _, Backbone) ->
    
    ###*
     * @class ServerOverview
     * Server cpu and memory utilization data.
     * @extends Backbone.Model
     ###
    class ServerOverview extends Backbone.Model
        
        ###*
         * @constructor
         * Creates a new ServerOverview model.
         * @param {Object} [options] config options for Backbone.Model
         ###
        constructor: (options={}) ->
            @remote = true
            @defaults =
                'cpu': 0
                'memory': 0

            @url = 'http://10.0.1.6:3000/cpumem'


            super
            @fetch()
            # poll ever 5 seconds
            ###
            setInterval(() =>
                @fetch()
                return
            , 5000)
            ###
            return
        
        ###*
         * @method @private
         * Formats data returned from the server after fetch is called.
         * @param {Object} stats JSON data from the server
         * @param {Object} [jqXHR] jQuery jqXHR
         * @return {Object} re-formmated JSON data
         ###
        parse: (stats, xhr) ->
            totalCpulUtilization = 0
            stats.cpus.forEach((item, index, allItems) ->
                totalCpulUtilization =+ item.utilization
            )
            
            if(totalCpulUtilization > 1)
                totalCpulUtilization = Math.round(totalCpulUtilization)
            else
                totalCpulUtilization = String(totalCpulUtilization).slice(1)

            totalMemUtilization = 0
            if(stats.mem.utilization > 1)
                totalMemUtilization = Math.round(stats.mem.utilization)
            else
                totalMemUtilization = String(totalMemUtilization).slice(1)
            
            return {cpu: totalCpulUtilization, memory: totalMemUtilization}

)