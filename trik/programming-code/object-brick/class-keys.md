# Class «keys»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Used to operate the buttons on the robot's remote control.

| Method                                       | Description                                                                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [buttonPressed](class-keys.md#buttonpressed) | Sent when the button with the specified code is pressed or released.                                               |
| [isPressed](class-keys.md#ispressed)         | Returns `true` if the button with the specified code is currently pressed.                                         |
| [reset](class-keys.md#reset)                 | Сбрасывает запомненные нажатия кнопок.                                                                             |
| [wasPressed](class-keys.md#waspressed)       | Returns whether or not a button with the specified code was pressed, reset the remembered presses for that button. |

## buttonPressed

Sent when the button with the specified code is pressed or released.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.keys().buttonPressed.connect(function(code, value){if (code==KeysEnum.Up)brick.stop() ; });
```
{% endtab %}

{% tab title="Python" %}
```
brick.keys().buttonPressed.connect(lambda code, value: brick.stop() if code == KeysEnum.Up else print(code));
```
{% endtab %}
{% endtabs %}

The first parameter is the code of the button, the second - 1 if the button is pressed, 0 if released.

## isPressed

Returns `true` if the button with the specified code is currently pressed.\
Possible options:

* `KeysEnum.Left` (code105),
* `KeysEnum.Up` (code 103),
* `KeysEnum.Down` (code 108),
* `KeysEnum.Enter` (code 28),
* `KeysEnum.Right` (code 106),
* `KeysEnum.Power` (code 116),
* `KeysEnum.Esc` (code 1).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.keys().isPressed(KeysEnum.Up);
```
{% endtab %}

{% tab title="Python" %}
```
brick.keys().isPressed(KeysEnum.Up);
```
{% endtab %}
{% endtabs %}

## reset

Resets memorized button presses.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.keys().reset();
```
{% endtab %}

{% tab title="Python" %}
```
brick.keys().reset();
```
{% endtab %}
{% endtabs %}

## wasPressed

Returns whether or not a button with the specified code was pressed, reset the remembered presses for that button. Possible options:

* `KeysEnum.Left` (code 105),
* `KeysEnum.Up` (code 103),
* `KeysEnum.Down` (code 108),
* `KeysEnum.Enter` (code 28),
* `KeysEnum.Right` (code 106),
* `KeysEnum.Power` (code 116),
* `KeysEnum.Esc` (code 1).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.keys().wasPressed(KeysEnum.Up);
```
{% endtab %}

{% tab title="Python" %}
```
brick.keys().wasPressed(KeysEnum.Up);
```
{% endtab %}
{% endtabs %}
