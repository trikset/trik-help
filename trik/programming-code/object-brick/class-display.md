# Class «display»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Provides access to the display of the robot.

{% hint style="info" %}
Screen size: 240\*320 pixels.
{% endhint %}

| Method                                               | Description                                                                                                                                   |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| [addLabel](class-display.md#addlabel)                | Print the specified text on the screen, starting from the specified coordinate.                                                               |
| [clear](class-display.md#clear)                      | Clear the drawing window.                                                                                                                     |
| [drawArc](class-display.md#drawarc)                  | Draw an arc of an ellipse inscribed into a rectangle with the upper left corner at specified coordinates and having a given width and height. |
| [drawEllipse](class-display.md#drawellipse)          | Draw an ellipse inscribed into a rectangle with the upper left corner at specified coordinates and having a given width and height.           |
| [drawLine](class-display.md#drawline)                | Draw a line with the beginning and the end at the given coordinates.                                                                          |
| [drawPoint](class-display.md#drawpoint)              | Draw a point at given coordinates.                                                                                                            |
| [drawRect](class-display.md#drawrect)                | Draw a rectangle with the upper left corner at the specified coordinates and having the specified width and height.                           |
| [hide](class-display.md#hide)                        | Close and clear the drawing window.                                                                                                           |
| [redraw](class-display.md#redraw)                    | Redraw the window to draw. The changes to the display will only happen after this method is called.                                           |
| [removeLabels](class-display.md#removelabels)        | Remove from the screen all text added to it by calls to the "addLabel" method.                                                                |
| [setBackground](class-display.md#setbackground)      | Set the screen background to the color you specify.                                                                                           |
| [setPainterColor](class-display.md#setpaintercolor)  | Set the color of the brush used to draw the graphical primitives.                                                                             |
| [setPainterWidth](class-display.md#setpainterwidth)	 | Set the thickness of the brush used to draw the graphical primitives, in pixels.                                                              |
| [show](class-display.md#show)                        | Display the image generated in the one-dimensional array on the controller.                                                                   |
| [showImage](class-display.md#showimage)              | Display the image previously loaded on the robot.                                                                                             |

## addLabel

Print the specified text on the screen, starting from the specified coordinate. If there was already text in the specified coordinates, it will be replaced by the new text.

The changes on the display will occur only after calling the method "[redraw](class-display.md#redraw)".

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().addLabel("text", x, y);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().addLabel("text", x, y);
```
{% endtab %}
{% endtabs %}

Parameters:

* `text` — display text,
* `x`, `y` — screen coordinates.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().addLabel('Hello, world!', 1, 1);
```
{% endtab %}

{% tab title="" %}
```
brick.display().addLabel('Hello, world!', 1, 1);
```
{% endtab %}
{% endtabs %}

## clear

Clear the drawing window.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().clear();
```
{% endtab %}

{% tab title="" %}
```
brick.display().clear();
```
{% endtab %}
{% endtabs %}

## drawArc

Draw an arc of an ellipse inscribed into a rectangle with the upper left corner at specified coordinates and having a given width and height. The changes on the display will occur only after calling the method "[redraw](class-display.md#redraw)".

{% tabs %}
{% tab title="JavaScript" %}
```
brick.display().drawArc(x, y, l, h, from, to);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawArc(x, y, l, h, from, to);
```
{% endtab %}
{% endtabs %}

Parameters:

* `x`, `y` — the coordinates of the upper left corner of the rectangle on the screen,
* `l` — rectangle width,
* `h` — rectangle height,
* `from` __ — initial angle bounding the arc,
* `to` __ — finite angle bounding the arc.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawArc(0, 0, 10, 10, 20, 50);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawArc(0, 0, 10, 10, 20, 50);
```
{% endtab %}
{% endtabs %}

## drawEllipse

Draw an ellipse inscribed into a rectangle with the upper left corner at specified coordinates and having a given width and height. The changes on the display will occur only after calling the method "[redraw](class-display.md#redraw)".

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawEllipse(x, y, l, h);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawEllipse(x, y, l, h);
```
{% endtab %}
{% endtabs %}

Parameters:

* `x`, `y` — coordinates of the upper left corner of the rectangle,
* `l` — rectangle width,
* `h` — rectangle height.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawEllipse(0, 0, 10, 10);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawEllipse(0, 0, 10, 10);
```
{% endtab %}
{% endtabs %}

## drawLine

Draw a line with the beginning and the end at the given coordinates. The changes on the display will occur only after calling the method "[redraw](class-display.md#redraw)".

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawLine(x0, y0, x1, y1);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawLine(x0, y0, x1, y1);
```
{% endtab %}
{% endtabs %}

Parameters:

* `x0`, `y0` — line origin coordinates,
* `x1`, `y1` — line end coordinates.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawLine(0, 0, 10, 10);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawLine(0, 0, 10, 10);
```
{% endtab %}
{% endtabs %}

## drawPoint

Draw a point at given coordinates. The changes on the display will occur only after calling the method "[redraw](class-display.md#redraw)".

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawPoint(x, y);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawPoint(x, y);
```
{% endtab %}
{% endtabs %}

Parameters:

* point coordinates `x`, `y`.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```
brick.display().drawPoint(10, 10);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawPoint(10, 10);
```
{% endtab %}
{% endtabs %}

## drawRect

Draw a rectangle with the upper left corner at the specified coordinates and having the specified width and height. The changes on the display will occur only after calling the method "[redraw](class-display.md#redraw)".

{% tabs %}
{% tab title="JavaScript" %}
```
brick.display().drawRect(x, y, l, h);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawRect(x, y, l, h);
```
{% endtab %}
{% endtabs %}

Parameters:

* `x`, `y` — coordinates of the upper left corner of the rectangle,
* `l` — rectangle width,
* `h` — rectangle height.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().drawRect(0, 0, 10, 10);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().drawRect(0, 0, 10, 10);
```
{% endtab %}
{% endtabs %}

## hide

Close and clear the drawing window.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().hide();
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().hide();
```
{% endtab %}
{% endtabs %}

## redraw

Redraw the window to draw. The changes to the display will only happen after this method is called.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().redraw();
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().redraw();
```
{% endtab %}
{% endtabs %}

## removeLabels

Remove from the screen all text added to it by calls to the "[addLabel](class-display.md#addlabel)" method.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().removeLabels();
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().removeLabels();
```
{% endtab %}
{% endtabs %}

## setBackground

Set the screen background to the color you specify.

Available colors:

* white,
* red, darkRed,
* green, darkGreen,
* blue, darkBlue,
* cyan, darkCyan,
* magenta, darkMagenta,
* yellow, darkYellow,
* gray, darkGray, lightGray,
* black.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().setBackground("color");
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().setBackground("color");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the color.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().setBackground("red");
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().setBackground("red");
```
{% endtab %}
{% endtabs %}

## setPainterColor

Set the color of the brush used to draw the graphical primitives.

Available colors:

* white,
* red, darkRed,
* green, darkGreen,
* blue, darkBlue,
* cyan, darkCyan,
* magenta, darkMagenta,
* yellow, darkYellow,
* gray, darkGray, lightGray,
* black.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().setPainterColor("color");
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().setPainterColor("color");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the color.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().setPainterColor("red");
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().setPainterColor("red");
```
{% endtab %}
{% endtabs %}

## setPainterWidth

Set the thickness of the brush used to draw the graphical primitives, in pixels.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().setPainterWidth(d);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().setPainterWidth(d);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the thickness `d`.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().setPainterWidth(5);
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().setPainterWidth(5);
```
{% endtab %}
{% endtabs %}

## show

Display the image generated in the one-dimensional array on the controller.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().show(array, width, height, format)
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().show(array, width, height, format)
```
{% endtab %}
{% endtabs %}

Parameters:

* `array` — a one-dimensional integer array with dimensions `width`×`height`
* `width` **** и `height` **** — the width and height of the image, respectively
* The **format** in which each element of the array is represented should be passed as the format parameter. The formats currently supported are: «rgb32», «grayscale8», «rgb888».

#### Example

Examples of using `show()` on an image taken with[`getPhoto()`](../function-getphoto.md).

{% tabs %}
{% tab title="JavaScript" %}
```javascript
//rgb32
var photo = getPhoto();
brick.display().show(photo, 160, 120, "rgb32");
script.wait(5000);

//rgb888
pic = []
photo = getPhoto();
l = photo.length;
for (i = 0; i < l; i++) {
    var p = photo[i];
    pic.push((p&0xff0000)>>16);
    pic.push((p&0xff00)>>8);
    pic.push((p&0xff));
}
brick.display().show(pic, 160, 120, "rgb888");
script.wait(5000);                            

//grayscale8                                   
pic = []                                      
photo = getPhoto();
l = photo.length;                             
for (i = 0; i < l; i++) {                     
        var p = photo[i];                     
        pic.push(((p&0xff0000)>>18) + ((p&0xff00)>>10) + ((p&0xff)>>2));                
}                                             
                                              
brick.display().show(pic, 160, 120, "grayscale8");
script.wait(5000);
```
{% endtab %}

{% tab title="Python" %}
```
#rgb32
photo = getPhoto();
brick.display().show(photo, 160, 120, "rgb32");
script.wait(5000);

#rgb888
pic = []
photo = getPhoto();
l = len(photo);
for i in range(l):
    p = photo[i];
    pic.append((p&0xff0000)>>16);
    pic.append((p&0xff00)>>8);
    pic.append((p&0xff));

brick.display().show(pic, 160, 120, "rgb888");
script.wait(5000);                            

#grayscale8                                   
pic = []                                      
photo = getPhoto();
l = len(photo);                             
for i in range(l):                    
    p = photo[i];                     
    pic.append(((p&0xff0000)>>18) + ((p&0xff00)>>10) + ((p&0xff)>>2));                
                                         
                                              
brick.display().show(pic, 160, 120, "grayscale8");
script.wait(5000);

```
{% endtab %}
{% endtabs %}

## showImage

Display the image previously loaded on the robot.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().showImage("imagePath");
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().showImage("imagePath");
```
{% endtab %}
{% endtabs %}

The name of the image file (in BMP, GIF, JPG, JPEG, PNG, PBM, PGM, PPM, TIFF, XBM, XPM formats) must be specified as a parameter, the path is specified either as absolute or relative to the `trik` folder.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display().showImage("media/trik_smile_sad.png");
```
{% endtab %}

{% tab title="Python" %}
```
brick.display().showImage("media/trik_smile_sad.png");
```
{% endtab %}
{% endtabs %}
