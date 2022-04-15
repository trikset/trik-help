# Class «objectSensor»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Camera in object sensor mode. Captures a contrasting object in the center of the frame and returns its coordinates and size in the frame.

| Method                                 | Description                                                                                                                                                                                                      |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [detect](class-objectsensor.md#detect) | Detects the dominant color in the center of the frame and remembers it as the color of the object.                                                                                                               |
| [init](class-objectsensor.md#init)     | Switches the camcorder on and initializes it in object sensor mode.                                                                                                                                              |
| [read](class-objectsensor.md#read)     | Returns an array with the X coordinate of the object center relative to the center of the frame, the Y coordinate of the object center relative to the center of the frame, and the relative size of the object. |
| [stop](class-objectsensor.md#stop)     | Turns off the camera and stops the sensor.                                                                                                                                                                       |

## detect

Detects the dominant color in the center of the frame and remembers it as the color of the object. After that, the "[read](class-objectsensor.md#read)" method starts to return data for the object.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.objectSensor().detect();
```
{% endtab %}

{% tab title="Python" %}
```
brick.objectSensor().detect();
```
{% endtab %}
{% endtabs %}

## init

Switches the camcorder on and initializes it in object sensor mode. The boolean parameter determines whether to display the image from the camera (`true` — display).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.objectSensor().init(true);
```
{% endtab %}

{% tab title="Python" %}
```
brick.objectSensor().init(True);
```
{% endtab %}
{% endtabs %}

The boolean parameter defines whether to display the image from the camera:

* `true` — output,
* `false` — don't output.

## read

Returns an array that contains the following data in its cells:

* In the zero cell, the X-axis coordinate of the object center relative to the center of the frame (-100 to 100, -100 is the center of the object on the edge of the frame on the left);
* The Y-coordinate of the object's center relative to the frame center (from -100 to 100, -100 is the center of the object on the frame edge at the top);&#x20;
* The second cell is the relative size of the object, a number from 0 to 100 (100 - the object occupies almost the entire frame, 0 - the object is not on the frame).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.objectSensor().read();
```
{% endtab %}

{% tab title="Python" %}
```
brick.objectSensor().read();
```
{% endtab %}
{% endtabs %}

## stop

Turns off the camera and stops the sensor.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.objectSensor().stop();
```
{% endtab %}

{% tab title="Python" %}
```
brick.objectSensor().stop();
```
{% endtab %}
{% endtabs %}
