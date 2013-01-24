$(document).ready(function () {

  function Popup(ref) {

    /**
    ** Fields
    */
    this.content = {
      label: null,
      error: null,
      body: null,
      footer: null
    };
    this.ref = ref;
    this.ajax_complete = false;
    this.shown = false;
    var self = this
    /*
    ** Methods
    */

    this.bindShow = function(selector) {
      $('body').on('ajax:complete', selector, function() {
        self.updateContent();
        self.show();
        
      });
    };

    this.show = function() {
      this.ref.modal('show');
    };

    this.hide = function() {
      this.ref.modal('hide');
    };

    this.bindPopupEvents = function() {
      this.ref.on('shown', function(e) {
        self.shown = true;
      });

      this.ref.on('hidden', function(e) {
        self.shown = false;
        self.emmitShowTrigger();
      });
    };

    this.bindHideThenShow = function(selector) {
      this.ref.on('click', selector, function() {
        self.hide();
      });

      this.ref.on('ajax:complete', selector, function() {
        self.ajax_complete = true;
        self.emmitShowTrigger();
      });
    };

    this.emmitShowTrigger = function() {
      if (!this.shown && this.ajax_complete) {
        this.ajax_complete = false;
        this.ref.trigger('hiden_and_ajax_complete')
      }
    };

    this.catchShowTrigger = function() {
      this.ref.on('hiden_and_ajax_complete', function() {
        setTimeout( function() {
          self.updateContent();
          self.show();
        }, 400);
      });
    };

    this.updateContent = function() {
      var content = self.content;
      var popup = self.ref;

      $(popup).find('#popup-label').html(content['label']);
      $(popup).find('#popup-error').html(content['error']);
      $(popup).find('#popup-body').html(content['body']);
      $(popup).find('#popup-footer').html(content['footer']);
      
    };

    this.init = function () {
      this.catchShowTrigger();
      this.bindPopupEvents();
      this.bindShow('.popup-show');
      this.bindHideThenShow('.popup-hide-show');
    };

    /*
    ** Main
    */

    this.init();
  }

  
  // Call popup
  window.popup = new Popup($('#popup'));

  window.setPopup = function(popup) {
    window.popup.content['label'] = popup['label'] || '';
    window.popup.content['error'] = popup['error'] || '';
    window.popup.content['body'] = popup['body'] || '';
    window.popup.content['footer'] = popup['footer'] || '';
  };

});