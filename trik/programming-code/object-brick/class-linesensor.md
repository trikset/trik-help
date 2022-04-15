# Class «lineSensor»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Camera in line sensor mode.

| Method                               | Description                                                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [detect](class-linesensor.md#detect) | Detects the dominant color in the vertical bar in the center of the frame and remembers it as a line color.                                                              |
| [init](class-linesensor.md#init)     | Turns the camera on and initializes it inline sensor mode.                                                                                                               |
| [read](class-linesensor.md#read)     | Returns an array with the X coordinate of the center of the line relative to the center of the frame, the probability of a crossover, and the relative size of the line. |
| [stop](class-linesensor.md#stop)     | Turns off the video camera and stops the sensor.                                                                                                                         |

## detect

Detects the dominant color in the vertical bar in the center of the frame and remembers it as a line color. Then the "[read](class-linesensor.md#read)" method starts returning data for that line.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.lineSensor().detect();
```
{% endtab %}

{% tab title="Python" %}
```
brick.lineSensor().detect();
```
{% endtab %}
{% endtabs %}

## init

Turns the camera on and initializes it inline sensor mode. The boolean parameter determines whether to display the image from the camera (`true` - display).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.lineSensor().init(true);
```
{% endtab %}

{% tab title="Python" %}
```
brick.lineSensor().init(True);
```
{% endtab %}
{% endtabs %}

The boolean parameter defines whether to display the image from the camera:

* `true` — output,
* `false` — don't output.

## read

Returns an array with the following data in its cells:

* the zero cell is the X coordinate of the line center relative to the center of the frame (from -100 to 100, -100 is the center of the line on the edge of the frame on the left);
* in the first cell - the probability of crossing (the number from 0 to 100, showing how many points of the line color are in the horizontal stripe in the frame center);
* the second cell - the relative size of the line, a number from 0 to 100 (100 - the line occupies almost the whole frame, 0 - the line is absent in the frame).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.lineSensor().read();
```
{% endtab %}

{% tab title="Python" %}
```
brick.lineSensor().read();
```
{% endtab %}
{% endtabs %}

## stop

Turns off the video camera and stops the sensor.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.lineSensor().stop();
```
{% endtab %}

{% tab title="Python" %}
```
brick.lineSensor().stop();
```
{% endtab %}
{% endtabs %}
