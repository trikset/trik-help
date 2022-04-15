# Class «sensor»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Represents a sensor (analog or digital) connected to ports A1, ..., A6, D1, D2.

| Method                                     | Description                                                                               |
| ------------------------------------------ | ----------------------------------------------------------------------------------------- |
| [read](class-sensor.md#read)               | Returns the current reading of the sensor (digital or analog) connected to this port.     |
| [readRawData](class-sensor.md#readrawdata) | Returns the current raw reading of the sensor (digital or analog) connected to this port. |

## read

Returns the current reading of the sensor (digital or analog) connected to this port. The present value is returned, depending on the port configuration, which is described in the file `model-config.xml` in the `trik` folder on the robot.

For example, the IR distance sensor returns a value in centimeters.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var data1 = brick.sensor(sensorName).read();
var data2 = brick.sensor("sensorName").read();
```
{% endtab %}

{% tab title="Python" %}
```
data1 = brick.sensor(sensorName).read();
data2 = brick.sensor("sensorName").read();
```
{% endtab %}
{% endtabs %}

## readRawData

Returns the current raw reading of the sensor (digital or analog) connected to this port. The range of values depends on the specific sensor and does not take into account the configuration of the robot (the physical readings of the sensor are returned, e.g. the delay of the received ultrasonic signal).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var data1 = brick.sensor(sensorName).readRawData();
var data2 = brick.sensor("sensorName").readRawData();
```
{% endtab %}

{% tab title="Python" %}
```
data1 = brick.sensor(sensorName).readRawData();
data2 = brick.sensor("sensorName").readRawData();
```
{% endtab %}
{% endtabs %}
