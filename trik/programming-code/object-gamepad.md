# Object «gamepad»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Serves to work with the programmable control panel "[TRIK Gamepad](../../gamepad/about/)".

| Method                                                 | Description                                                                                                                           |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| [buttonWasPressed](object-gamepad.md#buttonwaspressed) | Returns `true` if a button with the specified number was pressed on the remote control.                                               |
| [isPadPressed](object-gamepad.md#ispadpressed)         | Returns whether the control area on the remote control is currently pressed.                                                          |
| [padX](object-gamepad.md#padx)                         | If the specified control area on the remote is pressed, returns the current x-coordinate of the press.                                |
| [padY](object-gamepad.md#pady)                         | If the specified control area on the remote is pressed, returns the current y-coordinate of the press.                                |
| [padUp](object-gamepad.md#padup)                       | Sent when the user moves his finger away from the control area with the specified number.                                             |
| [reset](object-gamepad.md#reset)                       | Resets the memorized events from the remote control.                                                                                  |
| [wheel](object-gamepad.md#wheel)                       | If "steering" (events from the device's accelerometer) is enabled on the remote control, it returns the current remote control tilt.  |
| [wheelEvent](object-gamepad.md#wheelevent)             | Sent when the remote control has the "steering wheel" (events from the device's accelerometer) on and the user has turned the device. |

| Signal                                     | Description                                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [button](object-gamepad.md#button)         | Sent when the user has pressed one of the five buttons at the bottom of the remote control. |
| [connected](object-gamepad.md#connected)   | Sent when the remote control is connected to the robot.                                     |
| [disconnect](object-gamepad.md#disconnect) | It is sent when the remote control is turned off.                                           |
| [pad](object-gamepad.md#pad)               | Sent when the user taps or moves their finger over the control area on the remote.          |

## button

Sent when the user has pressed one of the five buttons at the bottom of the remote control.

## buttonWasPressed

Returns `true` if a button with the specified number was pressed on the remote control. Resets the memorized press for this button.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.buttonWasPressed(buttonNumber);
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.buttonWasPressed(buttonNumber);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the number of the button - from 1 to 5.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.buttonWasPressed(5);
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.buttonWasPressed(5);
```
{% endtab %}
{% endtabs %}

## connected

Sent when the remote control is connected to the robot.

## disconnect

It is sent when the remote control is turned off.

## isPadPressed

Returns whether the control area on the remote control is currently pressed. The control areas are numbered 0 and 1.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.isPadPressed(padId);
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.isPadPressed(padId);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the number of the control area - 0 or 1.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.isPadPressed(1);
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.isPadPressed(1);
```
{% endtab %}
{% endtabs %}

## pad

Sent when the user taps or moves their finger over the control area on the remote.

## padX

If the specified control area on the remote is pressed, returns the current x-coordinate of the press.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
gamepad.padX(padId);
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.padX(padId);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the number of the `padId` control area.

## padY

If the specified control area on the remote is pressed, returns the current y-coordinate of the press.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
gamepad.padY(padId);
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.padY(padId);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the number of the `padId` control area.

## padUp

Sent when the user moves his finger away from the control area with the specified number.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.padUp.connect( function(padId, x, y) { brick.stop(); });
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.padUp.connect(lambda padId, x, y: brick.stop());
```
{% endtab %}
{% endtabs %}

Parameters:

* `padId` — control area number.
* `x`, `y` — the coordinates of the last known click from -100 to 100. The coordinate (-100, -100) corresponds to the upper left corner of the control area.

## reset

Resets the memorized events from the remote control.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.reset();
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.reset();
```
{% endtab %}
{% endtabs %}

## wheel

If "steering" (events from the device's accelerometer) is enabled on the remote control, it returns the current remote control tilt.

Tilt is coded from -100 to 100, with -100 being the leftmost "rudder" position and 100 being the rightmost position.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
gamepad.wheel();
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.wheel();
```
{% endtab %}
{% endtabs %}

## wheelEvent

Sent when the remote control has the "steering wheel" (events from the device's accelerometer) on and the user has turned the device.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
gamepad.wheelEvent.connect( function(percent) { brick.motor("E1").setPower(percent); });
```
{% endtab %}

{% tab title="Python" %}
```
gamepad.wheelEvent.connect(lambda percent: brick.motor("E1").setPower(percent));
```
{% endtab %}
{% endtabs %}

As a parameter it is necessary to specify a number from -100 to 100, -100 corresponds to the leftmost position of the "rudder", 100 - to the rightmost position.
