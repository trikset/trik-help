# Sensory Variables for the LEGO NXT Controller

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

In addition to [constants](../studio/programming-visual/expression-syntax/const.md), TRIK Studio has reserved variables that store the values of readings of the sensors connected to the corresponding ports.

These values can be assigned to variables and used in mathematical expressions.

| Variable                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <p><strong><code>encoderA</code></strong></p><p><strong><code>encoderB</code></strong><br><strong><code>encoderC</code></strong></p>                                                    | Encoder readings on ports A, B, or C, respectively.                                                                                                                                                                                                                                                        |
| <p><strong><code>sensor1</code></strong></p><p><strong><code>sensor2</code></strong><br><strong><code>sensor3</code></strong><br><strong><code>sensor4</code></strong></p>              | Sensor readings on ports 1, 2, 3, 4 respectively.                                                                                                                                                                                                                                                          |
| <p><strong><code>buttonEnter</code></strong><br><strong><code>buttonEscape</code></strong><br><strong><code>buttonLeft</code></strong><br><strong><code>buttonRight</code></strong></p> | <p>State of the buttons on the robot body: "Enter", "Cancel", "Left", "Right" respectively.</p><p></p><p>Possible values:</p><p>0 - button is not pressed.</p><p>1 - button is pressed.</p><p></p><p><strong>Warning!</strong> Only "Enter" and "Right" buttons are available in generation mode in C.</p> |
