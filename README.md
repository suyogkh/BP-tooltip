# BP-tooltip
Free tooltip plugin
#### Demo
This is a codepen [demo for BP-tooltip !](http://codepen.io/suyogkh/pen/XMbgqM)

#### Getting Started
To install the BP-tooltip you can download this repository

Next you need to include the CSS file in the `<head>` section of your HTML and you need to include the script before the `</body>` tag in your HTML.

Note, Including index.css file part is optional.

Include JQuery file before our script file.

```
  <html>
  <head>
      ...
      <link rel="stylesheet" href="/path/to/BP-tooltip.min.css">
      ...
  </head>
  <body>
      ...
      <script src="/path/to/jQuery.min.js"></script>
      <script src="/path/to/BP-tooltip.min.js"></script>
  </body>
  </html>
```
Next you need to set up your HTML where you want to show tooltip in your page. It should look something like this:
```
  <div class="gfooter">
    <div class="button" data-bp-tooltip="This is a tooltip example for button 1" data-bp-direction="left"> 
      <span>Hello</span>
    </div>
  </div>
```
Note: In your CSS file button holder or parent `div` like `<div class="gfooter">` should have `position: relative`.

Finally you can show your tooltip by using the following Javascript:
```
  $(document).tooltip();
```
