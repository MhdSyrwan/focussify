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
});

// defocus an element
$("#myElement").focussify(false);

```
