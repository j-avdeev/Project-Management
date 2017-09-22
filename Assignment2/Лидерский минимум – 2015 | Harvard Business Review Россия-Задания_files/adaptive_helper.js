var AdaptiveHelper = function() {

    /**
     * private variables
     */

    var _this = this;
    var breakpoints = [
      {
        name: 'mobile',
        resolution:  0
      },
      {
        name: 'tablet',
        resolution:  768
      },
      {
        name: 'desktop',
        resolution:  960
      },
      {
        name: 'wide',
        resolution:  1280
      }
    ];



    /**
     * public functions
     */

    // относительно ширины окна
    this.getBreakpoint = function() {

      var doc_width = window.innerWidth;
      var bp = _.sortBy(breakpoints, 'resolution').reverse();

      var current_bp = _.find(
        bp,
        function(o) {
          return o.resolution <= doc_width;
        }
      );

      return current_bp;
    };


    this.getBreakpointName = function() {
      return _this.getBreakpoint().name;
    };


    this.getBreakpointResolution = function() {
      return _this.getBreakpoint().resolution;
    };


    // относительно разрешения дисплеяz
    this.getScreenBreakpoint = function() {

      var doc_width = window.screen.availWidth;
      var bp = _.sortBy(breakpoints, 'resolution').reverse();

      var current_bp = _.find(
        bp,
        function(o) {
          return o.resolution <= doc_width;
        }
      );

      return current_bp;
    };


    this.getScreenBreakpointName = function() {
      return _this.getScreenBreakpoint().name;
    };


    this.getScreenBreakpointResolution = function() {
      return _this.getScreenBreakpoint().resolution;
    };


    this.onBpChange = function(func) {
    	var last_bp = _this.getBreakpointName();
    	$(window).resize(
    		_.debounce(
    			function() {
    				var new_bp = _this.getBreakpointName();
    				if (new_bp != last_bp)
    				{
    					console.log('bp change')
    					func();
    				}

    				last_bp = new_bp;
    			},
    			500
    		)
    	);
    };


    /**
     * private functions
     */



    var init = function() {

        return _this;
    };


    init.call(this);
};


window.AdaptiveHelper = AdaptiveHelper;