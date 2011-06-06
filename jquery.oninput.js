jQuery.fn.input = function(fn) {
	var $this = this;
	return fn
		?
			$this.bind({
				'input.input': function(event) {
					$this.unbind('keydown.input');
					fn.call(this, event);
				},
				'keydown.input': function(event) {
					fn.call(this, event);
				}
			})
		:
			$this.trigger('keydown.input');
};