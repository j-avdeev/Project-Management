(function ($){
  $.fn.issuesFilter = function (options){
       var $el = this;
       var issues = options.issues;
       var selectFrame = options.frame|0 ? options.frame : 0;


       $el.on('change', 'select[name="iss_y"]', function(evt){
           var currentYear =  $(this).val();
           var $monthSelect = $el.find('select[name="iss_m"]');
           var $monthImage = $el.find('ul');
           var i =0;
           if(currentYear in issues){
               $monthSelect.empty();
               $monthImage.empty();
               $.each(issues[currentYear], function(k, v) {
                $monthSelect.append( $('<option data-url="' + v['url'] + '" data-frame="' + i + '" value="' + v['id'] + '">' + v['month'] + '</option>') );
                i++;
              });
           }
       });

       $el.on('change', 'select[name="iss_m"]',function(evt){
          $('.js-link').attr('href', $(evt.currentTarget).find('option:selected').attr('data-url'));
          window.location.href = $(evt.currentTarget).find('option:selected').attr('data-url');
       });

       return this;
  };

})(jQuery);
