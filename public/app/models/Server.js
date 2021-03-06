define(function (require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        App = require('App');

    require('socket_io');
    require('backbone_dualstorage');

    return Backbone.Model.extend({
        url: 'Servers',
        local: true,
        defaults: {
            name: null,
            ipv4: null,
            port: 8890
        },

        parse: function(serverInfo, jqXHR) {
            return serverInfo;
        },

        wsUrl: function() {
            return 'http://' + this.get('ipv4') + ':' + this.get('port');
        },

        wsConnect: function(serverConnection) {
            var ws = window.ws = this.ws = io.connect(this.wsUrl()+'/dash', App.ioConfig);
            ws.on('connect', _.bind(function() {
                serverConnection.set('connection_status', 'connected');
                App.vent.trigger('server:connected', this);
            }, this));
            // Not very DRY, socket.io doesn't seem to support binding multiple events at once
            ws.on('connect_failed', function() {
                serverConnection.set('connection_status', 'connection error');
            });
            ws.on('error', function() {
                serverConnection.set('connection_status', 'connection error');
            });
            ws.on('reconnect_error', function() {
                serverConnection.set('connection_status', 'connection error');
            });
            ws.on('reconnect_failed', function() {
                serverConnection.set('connection_status', 'connection error');
            });
        }
    });
});
