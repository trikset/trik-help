# Class «colorSensor»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

The camera in color sensor mode.

| Method                             | Description                                                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [init​](class-colorsensor.md#init) | Turns the camera on and initializes it in color sensor mode.                                                           |
| [read​](class-colorsensor.md#read) | Returns an array with the coordinates of the dominant color in the RGB color scale in the specified area of the frame. |
| [stop](class-colorsensor.md#stop)  | Turns off the camera and stops the sensor.                                                                             |

## init

Turns the camera on and initializes it in color sensor mode.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1").init(true);
```
{% endtab %}

{% tab title="Python" %}
```
brick.colorSensor("video1").init(True);
```
{% endtab %}
{% endtabs %}

The boolean parameter defines whether to display the image from the camera:

* `true` — output,
* `false` — do not output

## read

Returns an array with the coordinates of the dominant color in the RGB color scale in the specified area of the frame.

The frame is divided into squares by a grid, by default 3 by 3, the dimensionality of the grid can be set in `model-config.xml` on the robot. Squares are indexed from 1. That is, (1, 1) is the upper-left edge of the frame, (2, 2) is its center.

The return value is an array of three elements from 0 to 255, indexed from 0. The zero element contains the intensity of red (0 - none at all, 255 - very much), the first - the intensity of green, the second - the intensity of blue. For example, (0, 0, 0) is black, (255, 255, 255) is white, (255, 0, 0) is red.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1").read(x, y);
```
{% endtab %}

{% tab title="Python" %}
```
brick.colorSensor("video1").read(x, y);
```
{% endtab %}
{% endtabs %}

As a parameter, it is necessary to specify the indices of the square `x` and `y`.

## stop

Turns off the camera and stops the sensor.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1").stop();
```
{% endtab %}

{% tab title="Python" %}
```
brick.colorSensor("video1").stop();
```
{% endtab %}
{% endtabs %}
