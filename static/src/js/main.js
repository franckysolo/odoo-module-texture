odoo.debug = true;
odoo.define('texture', function (require) {
  require('website.website');
  var Widget = require('web.Widget');
  var core = require('web.core');
  var ajax = require('web.ajax');
  var base = require('web_editor.base');
  var qweb = core.qweb;
  var Picker = Widget.extend({
    init: function () {
      //
    },
    start: function () {
      alert('start');
      this.$el.append(qweb.render("HomePageTemplate"));
    }
  });

  // ajax.loadXML('/texture/static/src/xml/texture_picker.xml', qweb);
  base.ready().done(function() {
    var widget = new Picker();
    widget.appendTo($('#texture'));
  });

});
