var rekl = (function() {

	var sticky_settings = [];
	var dfp_items = {};
	var dfp_banner_ids = [];

	var listener = function(event) {
		try {
			if (event.source == undefined || event.source.location == undefined || event.source.location.pathname.indexOf('/banners/') == -1) {
				return;
			}

			if (!$.parseJSON(event.data).dimensions) {
				return;
			}

			var obj = $.parseJSON(event.data);

			if (!obj.iframe_id) {
				return;
			}

			if (obj.dimensions) {
				$('#' + obj.iframe_id).height(obj.dimensions.height);
				$('#' + obj.iframe_id).trigger('resize');

				updateSticky();

				// $('#' + obj.iframe_id).width(obj.dimensions.width);
			}
		}
		catch (e) {
			// console.log(event)
			// console.log(e)
		}
	};

	var updateSticky = function() {
		_.each(sticky_settings, function(v, k) {
			new TVRAIN.StickyBehavior(v);
		})
	};

	var displaySrc = function($iframe) {
		var bp = new AdaptiveHelper().getBreakpointName();
		if ($iframe.attr('data-src-'+bp) != undefined) {
			if ($iframe[0].src != window.location.origin + $iframe.attr('data-src-'+bp)) {
				$iframe[0].src = $iframe.attr('data-src-'+bp);
			}
		}
		else if ($iframe[0].src != window.location.origin + $iframe.attr('data-src-default')) {
			$iframe[0].src = $iframe.attr('data-src-default');
		}
	};


	return {
		registerDFP: function(nest_id, breakpoint, code) {

			//$('#' + nest_id).append('<div id="' + banner_id + '"></div>');

			// dfp_banner_ids.push(banner_id);
			dfp_items[breakpoint] = dfp_items[breakpoint] || [];

			var bnr = {
				nest_id: nest_id,
				code: code
			};

			dfp_items[breakpoint].push(bnr);
		},


		runDFP: function() {
			if (typeof googletag.destroySlots !== 'undefined')
				googletag.destroySlots();

			var bp = new AdaptiveHelper().getBreakpointName();
			if (dfp_items[bp])
			{
				_.each(dfp_items[bp], function(v, k) {
					v['code']();
				});
			};

			this.reloadDFP();
		},


		reloadDFP: function(slot_id)
		{
			googletag.cmd.push(function() {
				if (slot_id)
					googletag.pubads().refresh(slot_id);
				else
					googletag.pubads().refresh();
			});
		},


		addSticky: function(s) {
			sticky_settings.push(s);
		},

		getSticky: function() {
			return sticky_settings;
		},

		getDfpItems: function() {
			return dfp_items;
		}
	}

})();