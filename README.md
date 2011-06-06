# [HTML5 `oninput` polyfill](http://mathiasbynens.be/notes/oninput) as a jQuery plugin

## Example Usage

### HTML

``` html
<input>
<textarea></textarea>
```

### jQuery

``` js
$('input, textarea').input(function(event) {
  // `this` is the DOM element
  // `event` is the jQuery event object
  alert(this.value);
  event.preventDefault();
});
```

## Notes

* Works in all A-grade browsers, including IE6. In case `oninput` is not supported, `onkeydown` is used instead.
* This plugin doesn’t support event delegation.

## License

This plugin is dual licensed under the MIT and GPL licenses, just like jQuery itself.

## Author

[Mathias Bynens](http://mathiasbynens.be/)