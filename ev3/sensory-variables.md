# Sensory Variables for the LEGO EV3 Controller

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

In addition to [constant](../studio/programming-visual/expression-syntax/const.md), TRIK Studio has reserved variables that store the values of readings of the sensors connected to the corresponding ports.

These values can be assigned to variables and used in mathematical expressions.

| Variable                                                                                                                                                                                                                                                                                   | Description                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><strong><code>buttonBack</code></strong></p><p><strong><code>buttonDown</code></strong></p><p><strong><code>buttonEnter</code></strong></p><p><strong><code>buttonLeft</code></strong></p><p><strong><code>buttonRight</code></strong></p><p><strong><code>buttonUp</code></strong></p> | <p>State of the buttons on the robot body: "Back", "Down", "Enter", "Left", "Right", "Up" respectively.<br></p><p>Possible values: <br>0 - button not pressed. <br>1 - button is pressed.</p> |
| <p><strong><code>encoderA</code></strong></p><p><strong><code>encoderB</code></strong></p><p><strong><code>encoderC</code></strong></p><p><strong><code>encoderD</code></strong></p>                                                                                                       | Encoder readings on ports A, B, C, D, respectively.                                                                                                                                           |
| <p><strong><code>sensor1</code></strong></p><p><strong><code>sensor2</code></strong></p><p><strong><code>sensor3</code></strong></p><p><strong><code>sensor4</code></strong></p>                                                                                                           | Sensor readings on ports 1, 2, 3, 4 respectively.                                                                                                                                             |

