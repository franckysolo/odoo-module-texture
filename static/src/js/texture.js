odoo.debug = true;
odoo.define('texture', function (require) {
  require('website.website');
  var Widget = require('web.Widget');
  var core = require('web.core');
  var ajax = require('web.ajax');
  var qweb = core.qweb;
  var TexturePicker = Widget.extend({
    template: 'texture.TexturePicker',
    init: function () {
      alert('INIT');
      this.eventType = 'click touchstart';
    },
    start: function () {
      alert('START');
      this.menu_dropdown();
      this.action_select();
    },
    menu_dropdown: function () {
      $('.texture-dropdown').on(this.eventType, function (e) {
        e.stopImmediatePropagation();
        if (!$(this).next().hasClass('is-open')) {
          $(this).addClass('is-active');
          $(this).next().addClass('is-open');
        } else {
          $(this).removeClass('is-active');
          $(this).next().removeClass('is-open');
        }
      });
    },
    action_select: function () {
      $('.texture-row').on(this.eventType, function (e) {
        var link = $(this);
        var icon = link.find('.status:first');
        var value = link.attr('data-value')
        var css = link.attr('data-class')
        $('#texture-text').html(value)
        $('#texture-preview').removeAttr('class').addClass(css)
        $('.texture-row').removeClass('is-selected');
        $('.status').addClass('hide');
        link.addClass('is-selected');
        icon.removeClass('hide')
      });
    },
    // renderElement: function () {
    //   .append(qweb.render('texture_picker'))
    // }
  });
  ajax.loadXML('/texture/static/src/xml/texture_picker.xml', qweb);
  base.ready().done(function() {
    var widget = new TexturePicker();
    widget.appendTo($('body'));
  });
  return TexturePicker;
});

/*
odoo.define('texture', function (require) {
  alert('load second module');
  var core = require('web.core');
  var ajax = require('web.ajax');
  var qweb = core.qweb;
  var TexturePicker = require('texture.TexturePicker');
  require('website.website');
  var widget = new TexturePicker();
  widget.appendTo($('body'));
  //ajax.loadXML('/texture/static/src/xml/recent_link.xml', qweb);
  $('#texture').html('hello world');
  return widget;
});
*/
