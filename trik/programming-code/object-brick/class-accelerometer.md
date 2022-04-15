# Class «accelerometer»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Represents the [accelerometer](./#accelerometer) of the TRIK controller.

| Method                              | Description                                                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [read](class-accelerometer.md#read) | Returns the current sensor reading as an array of three elements corresponding to the sensor readings along each axis. |

| Signal                                    | Description                                           |
| ----------------------------------------- | ----------------------------------------------------- |
| [newData](class-accelerometer.md#newdata) | The signal sent by the sensor when new data is ready. |

## read

Returns the current sensor reading as an array of three elements corresponding to the sensor readings along each axis.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.accelerometer().read();
```
{% endtab %}

{% tab title="Python" %}
```
brick.accelerometer().read();
```
{% endtab %}
{% endtabs %}

## newData

The signal sent by the sensor when new data is ready.
