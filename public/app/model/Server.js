// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['underscore', 'backbone'], function(_, Backbone) {
  /**
   * @class Server
   * General purpose Server model.
   * @extends Backbone.Model
  */

  var Server;
  return Server = (function(_super) {

    __extends(Server, _super);

    /**
     * @constructor
     * Creates a new Server model.
     * @param {Object} [options] config options for Backbone.Model.
    */


    function Server(options) {
      if (options == null) {
        options = {};
      }
      this.local = true;
      this.url = 'Servers';
      this.defaults = {
        name: null,
        ipv4: null
      };
      Server.__super__.constructor.apply(this, arguments);
      return;
    }

    /**
     * @method @private
     * Formats data returned from the server after fetch is called.
     * @param {Object} platformInfo JSON data from the server
     * @param {Object} [jqXHR] jQuery jqXHR
     * @return {Object} re-formmated JSON data
    */


    Server.prototype.parse = function(serverInfo, jqXHR) {
      return serverInfo;
    };

    return Server;

  })(Backbone.Model);
});