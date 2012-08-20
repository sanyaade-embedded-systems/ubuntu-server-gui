// Generated by CoffeeScript 1.3.3
var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['jquery', 'underscore', 'app', 'model/Server', 'collection/ServerList', 'view/BaseForm', 'text!view/modal/tpl/add-server.html', 'bootstrap_modal', 'bootstrap_transition'], function($, _, App, Server, ServerList, BaseForm, addServerTpl) {
  /**
   * @class AddServerModal
   * Add server modal dialog.
   * @extends BackboneMarionette.ItemView
  */

  var AddServerModal;
  return AddServerModal = (function(_super) {

    __extends(AddServerModal, _super);

    /**
     * @constructor
     * Creates a new AddServerModal instance.
     * @param {Object} [options] config options for BackboneMarionette.ItemView.
    */


    function AddServerModal(options) {
      if (options == null) {
        options = {};
      }
      this.App = App;
      this.template = _.template(addServerTpl);
      this.tagName = 'div';
      this.id = 'modal_add_server';
      this.className = 'modal hide fade';
      this.App.vent.on('server:add-via-modal', this.showModal, this);
      this.events = {
        'click #add_server_btn': 'onSubmit',
        'keyup input': 'onInputKeyup'
      };
      AddServerModal.__super__.constructor.apply(this, arguments);
      return;
    }

    AddServerModal.prototype.hideModal = function() {
      $('#modal_add_server').modal('hide');
      this.clearForm();
    };

    AddServerModal.prototype.onSubmit = function(eventObj) {
      var ipv4, name, server;
      eventObj.stopPropagation();
      eventObj.preventDefault();
      eventObj.returnValue = false;
      this.hideError();
      this.disableForm();
      name = $.trim($('input[name=name]').val());
      ipv4 = $.trim($('input[name=ipv4]').val());
      server = new Server({
        name: name,
        ipv4: ipv4
      });
      server.save();
      this.App.vent.trigger('server:new-server-added');
      this.hideModal();
    };

    AddServerModal.prototype.onInputKeyup = function(eventObj) {
      eventObj.stopPropagation();
      eventObj.preventDefault();
      eventObj.returnValue = false;
      if (eventObj.keyCode === 13) {
        this.onSubmit(eventObj);
      }
      return false;
    };

    AddServerModal.prototype.onAddServerError = function() {
      this.showError(this.model.get('errorMsg'));
    };

    AddServerModal.prototype.render = function() {
      var _this = this;
      AddServerModal.__super__.render.apply(this, arguments);
      $('#main_footerbar_container').after(this.el);
      $('#modal_add_server').modal({
        show: false
      }).on('hidden', function() {
        _this.clearForm();
      });
      return this.el;
    };

    AddServerModal.prototype.showError = function(msg) {
      this.enableForm();
      $('#error_alert').text(msg).show();
    };

    AddServerModal.prototype.showModal = function() {
      $('#modal_add_server').modal('show');
      $('#modal_add_server input').first().focus();
    };

    return AddServerModal;

  })(BaseForm);
});
