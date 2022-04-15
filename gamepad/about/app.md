# TRIK Gamepad App

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

You can download the free app for Android or iOS in [the stores](https://trikset.com/en/downloads#gamepad).

## Interface

The application interface includes:

* **Pad1, Pad2** - programmable areas to press.
* **Indicators of the last press** on the screen.
* **Programmable buttons (5 pcs.)** - buttons for programming additional functions.
* **Settings** - settings of the connection to the robot.

![](<../../.gitbook/assets/B1 1 En trik-gamepad-app.png>)

The application has the ability to broadcast video from a camera connected to the robot.

To start it, you need to add the "[Start video broadcasting](../../trik/programming-visual/blocks.md#camera-on)" block to the remote control [program](../remote-control.md) for the robot.

## Principle of operation

Several touch variables are responsible for the functionality of the gamepad:

* gamepadPad1Pressed, gamepadPad2Pressed.
* gamepadPad1, gamepadPad2.
* gamepadButton1, …, gamepadButton5.
* gamepadConnected.

{% hint style="info" %}
You can read more about the TRIK Gamepad touch variables in the article "[Sensory Variables for the TRIK Controller](../../trik/programming-visual/sensory-variables.md)".
{% endhint %}
