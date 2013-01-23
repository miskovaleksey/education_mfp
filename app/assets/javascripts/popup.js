$(document).ready(function () {

  function Popup(ref) {
    this.content ={
      label: null,
      error: null,
      body: null,
      footer: null
    };
    this.ref = ref;
    this.test = null;

    var self = this
    /*
    ** Methods
    */

    this.bindShow = function(selector) {
      $('body').on('ajax:complete', selector, function(){
        self.updateContent();
        self.show();
        
      });
    };

    this.show = function() {
      this.ref.modal('show');
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
      this.bindShow('.popup-show');
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