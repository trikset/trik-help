# Class «gyroscope»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Represents [the gyroscope](./#gyroscope) of the TRIK controller. At rest, the average value of the gyroscope output is not zero and is called a `bias` or `bias error`.

The parameter is determined by many factors and can vary, for example, depending on the ambient temperature.

In order for the gyroscope to work properly it is necessary to subtract the zero offset from the incoming values. This can be calculated using the "[calibrate](class-gyroscope.md#calibrate)" method.

Since calibration takes a long time, if you run the model frequently, you can do it once, then store the value in a variable with "[getCalibrationVaules](class-gyroscope.md#getcalibrationvalues)", and call "[setCalibrationValues](class-gyroscope.md#setcalibrationvalues)" instead of calibration when you run the program.

| Method                                                          | Description                                                                                                                            |
| --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [calibrate](class-gyroscope.md#calibrate)                       | Calculates a zero offset within a specified time and initializes the gyroscope with this parameter, resets the current tilt angles.    |
| [getCalibrationValues](class-gyroscope.md#getcalibrationvalues) | Returns an object that contains the necessary zero-offset data.                                                                        |
| [isCalibrated](class-gyroscope.md#iscalibrated)                 | Returns true if calibration is complete, false otherwise.                                                                              |
| [read](class-gyroscope.md#read)                                 | Returns an array of seven elements: angular velocities on the three axes, time of the last measurement, tilt angles on the three axes. |
| [readRawData](class-gyroscope.md#readrawdata)                   | Returns an array of three elements with angular velocities on the three axes.                                                          |
| [setCalibrationValues](class-gyroscope.md#setcalibrationvalues) | Sets the object containing the necessary parameters about the zero offset.                                                             |

| Сигнал                                                        | Описание                                                        |
| ------------------------------------------------------------- | --------------------------------------------------------------- |
| [calibrationFinished](class-gyroscope.md#calibrationfinished) | The signal sent by the sensor after the end of the calibration. |
| [newData](class-gyroscope.md#newdata)                         | The signal sent by the sensor when it has new data ready.       |

## calibrate

Calculates a zero offset within a specified time and initializes the gyroscope with this parameter, resets the current tilt angles. The recommended calibration time is 10-20 seconds.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.gyroscope().calibrate(msec);
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope().calibrate(msec);
```
{% endtab %}
{% endtabs %}

Parameter:

* `msec` — time in milliseconds.

## calibrationFinished

The signal sent by the sensor after the end of the calibration.

## getCalibrationValues

Returns an object that contains the necessary zero-offset data.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.gyroscope().getCalibrationValues();
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope().getCalibrationValues();
```
{% endtab %}
{% endtabs %}

## isCalibrated

Returns `true` if calibration is complete, `false` otherwise.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.gyroscope().isCalibrated();
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope().isCalibrated();
```
{% endtab %}
{% endtabs %}

## newData

The signal sent by the sensor when it has new data ready.

## read

Returns an array of seven elements:

* 0−2 — angular velocities on the three axes (in milligrades/seconds),
* 3 — a time of the last measurement (in microseconds),
* 4−6 — tilt angles on the three axes (in milligrads).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.gyroscope().read();
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope().read();
```
{% endtab %}
{% endtabs %}

## readRawData

Returns an array of three elements with angular velocities on the three axes.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.gyroscope().readRawData();
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope().readRawData();
```
{% endtab %}
{% endtabs %}

## setCalibrationValues

Sets the object containing the necessary parameters about the zero offset.

{% hint style="warning" %}
Since calibration takes a long time, if you run the model frequently, you can do it once, then store the value in a variable with "[getCalibrationVaules](class-gyroscope.md#getcalibrationvalues)", and call "setCalibrationValues" instead of calibration when you run the program.
{% endhint %}

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.gyroscope().setCalibrationValues(values);
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope().setCalibrationValues(values);
```
{% endtab %}
{% endtabs %}

Parameter:

* `values` — object containing bias data.
