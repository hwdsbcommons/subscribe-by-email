jQuery(document).ready(function($) {
	var sbe_settings = {
		init: function() {
			$('.post-type-checkbox').change(this.check_box);
			$('#allow-categories').change(this.submit_form);
			$('.categorydiv input[type=checkbox]').change(this.set_category_box_attrs);
			this.init_categories_boxes();
		},
		check_box: function() {
			var checkbox = $(this);
			var is_checked = checkbox.attr('checked');
			var post_type_slug = checkbox.data('post-slug');

			if ( is_checked ) {
				$('.' + post_type_slug + '-checkbox').attr('disabled',false);
			}
			else {
				$('.' + post_type_slug + '-checkbox').attr('disabled',true);
			}
		},
		submit_form: function(e) {
			$('input[type=submit]').trigger('click');
		},
		set_category_box_attrs: function(e) {
			var the_list = $(this).closest('ul');

			if ( 'all' === e.currentTarget.value ) {
				if ( e.currentTarget.checked ) {
					the_list.find('input:not([value=all])').attr('checked',false);
					the_list.find('input:not([value=all])').attr('disabled',true);
				} else {
					the_list.find('input:not([value=all])').attr('checked',false);
					the_list.find('input:not([value=all])').attr('disabled',false);
				}
			} else {
				the_list.find('input[value=all]').attr('checked',false);
			}

		},
		init_categories_boxes: function() {
			var boxes = $('.postbox').each( function( i, item ) {
				var the_box = $(item);
				if ( the_box.find('input[value=all]').attr('checked') ) {
					the_box.find('input:not([value=all])').attr('checked',false);
					the_box.find('input:not([value=all])').attr('disabled',true);
				}
			});
		}
	}

	sbe_settings.init();
});