# Class «motor»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Provides control of the robot motor (power or servo motor) connected to ports M1, ..., M4, S1, ..., S6.

| Method                              | Description                                          |
| ----------------------------------- | ---------------------------------------------------- |
| [brake](class-motor.md#brake)       | Blocking of motors for braking for a specified time. |
| [power](class-motor.md#power)       | Returns the current motor power.                     |
| [powerOff](class-motor.md#poweroff) | Turns the motor off.                                 |
| [setPower](class-motor.md#setpower) | Turns on the motor with the specified power.         |

## brake

Blocking of motors for braking for a specified time in milliseconds.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.motor(motorName).brake(durationMs);
brick.motor("motorName").brake(durationMs);
```
{% endtab %}

{% tab title="Python" %}
```
brick.motor(motorName).brake(durationMs);
brick.motor("motorName").brake(durationMs);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the time in milliseconds.

## power

Returns the current motor power (-100 to 100).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var pow1 = brick.motor(motorName).power();
var pow2 = brick.motor("motorName").power();
```
{% endtab %}

{% tab title="Python" %}
```
pow1 = brick.motor(motorName).power();
pow2 = brick.motor("motorName").power();
```
{% endtab %}
{% endtabs %}

## powerOff

Turns the motor off.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.motor(motorName).powerOff();
brick.motor("motorName").powerOff();
```
{% endtab %}

{% tab title="Python" %}
```
brick.motor(motorName).powerOff();
brick.motor("motorName").powerOff();
```
{% endtab %}
{% endtabs %}

## setPower

Turns on the motor with the specified power.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.motor(motorName).setPower(power);
brick.motor("motorName").setPower(power);
```
{% endtab %}

{% tab title="Python" %}
```
brick.motor(motorName).setPower(power);
brick.motor("motorName").setPower(power);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the power. The power is set in the range from -100 ("full reverse") to 100 ("full forward"). 0 corresponds to a `force break`, i.e. the motor stops, it is blocked and remains energized.
