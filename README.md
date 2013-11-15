focussify
=========

a jquery plugin that blurs all screen except the element you want to focus on.

Requirements
-----------
* jQuery
* [Foggy jQuery plugin] (http://nbartlomiej.github.io/foggy/)


Usage
-----

```javascript
// focus on an element
$("#myElement").focussify({
  opacity: 0.6 // dark layer opacity (optional)
  tent_color: 'black' // dark layer color name (optional)
  foggy_options: { // options for foggy plugin (optional)
     blurRadius: 2,          // In pixels.
     opacity: 0.8,           // Falls back to a filter for IE.
     cssFilterSupport: true  // Use "-webkit-filter" where available.
  }
});

// defocus an element
$("#myElement").focussify(false);

```
