# Object «brick»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

The object "brick" represents the TRIK controller and provides access to the robot devices.

| Method                            | Description                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------ |
| [accelerometer](./#accelerometer) | Provides access to the accelerometer.                                          |
| [battery](./#battery)             | Provides access to battery information.                                        |
| [colorSensor](./#colorsensor)     | Provides access to the color sensor by the camera.                             |
| [display](./#display)             | Provides access to the display of the robot.                                   |
| [encoder](./#encoder)             | Provides access to the encoder on the specified port.                          |
| [getStillImage](./#getstillimage) | Get a photo from the camera as an array of bytes.                              |
| [gyroscope](./#gyroscope)         | Provides access to the gyroscope.                                              |
| [keys](./#keys)                   | Provides access to the buttons on the body of the robot.                       |
| [playSound](./#playsound)         | Play the audio file.                                                           |
| [led](./#led)                     | Provides access to the LED on the body of the robot.                           |
| [lineSensor](./#linesensor)       | Provides access to the line sensor by the camera.                              |
| [motor](./#motor)                 | Provides access to the motor on the specified port.                            |
| [objectSensor](./#objectsensor)   | Provides access to the object sensor by the camera.                            |
| [say](./#say)                     | Pronounce the string passed as a parameter (in Russian or English).            |
| [sensor](./#sensor)               | Provides access to the sensor on the specified port.                           |
| [stop](./#stop)                   | Stops all motors and active sensors, and removes what is drawn on the display. |

## accelerometer

Provides access to the accelerometer (class "[Accelerometer](class-accelerometer.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript " %}
```
brick.accelerometer();
```
{% endtab %}

{% tab title="Python" %}
```
brick.accelerometer();
```
{% endtab %}
{% endtabs %}

## battery

Provides access to battery information (class "[Battery](class-battery.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
brick.battery();
```
{% endtab %}

{% tab title="Python" %}
```
brick.battery();
```
{% endtab %}
{% endtabs %}

## colorSensor

Provides access to the color sensor by the camera (class "[ColorSensor](class-colorsensor.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1");
```
{% endtab %}

{% tab title="Python" %}
```
brick.colorSensor("video1");
```
{% endtab %}
{% endtabs %}

## display

Provides access to the display of the robot (class "[Display](class-display.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.display();
```
{% endtab %}

{% tab title="Python" %}
```
brick.display();
```
{% endtab %}
{% endtabs %}

## encoder

Provides access to the encoder on the specified port (class "[Encoder](class-encoder.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(portName);
brick.encoder("portName");
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(portName);
brick.encoder("portName");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the port.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(E1); // encoder call on port E1
brick.encoder("E2"); // encoder call on port E2
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(E1); # encoder call on port E1
brick.encoder("E2"); # encoder call on port E2
```
{% endtab %}
{% endtabs %}

## getStillImage

Get a photo from the camera as an array of bytes.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
brick.getStillImage();
```
{% endtab %}

{% tab title="Python" %}
```
brick.getStillImage();
```
{% endtab %}
{% endtabs %}

## gyroscope

Provides access to the gyroscope (class "[Gyroscope](class-gyroscope.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
brick.gyroscope();
```
{% endtab %}

{% tab title="Python" %}
```
brick.gyroscope();
```
{% endtab %}
{% endtabs %}

## keys

Provides access to the buttons on the robot body (class "[Keys](class-keys.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
brick.keys();
```
{% endtab %}

{% tab title="Python" %}
```
brick.keys();
```
{% endtab %}
{% endtabs %}

## led

Provides access to the LED on the robot body (class "[Led](class-led.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
brick.led();
```
{% endtab %}

{% tab title="Python" %}
```
brick.led();
```
{% endtab %}
{% endtabs %}

## lineSensor

Provides access to the line sensor by the camera (class "[LineSensor](class-linesensor.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
brick.lineSensor();
```
{% endtab %}

{% tab title="Python" %}
```
brick.lineSensor();
```
{% endtab %}
{% endtabs %}

## motor

Provides access to the motor (power or servomotor) on the specified port (class "[Motor](class-motor.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.motor(motorName);
brick.motor("motorName");
```
{% endtab %}

{% tab title="Python" %}
```
brick.motor(motorName);
brick.motor("motorName");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the port.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.motor(M1) // motor call on port M1
brick.motor("M2") // motor call on port M2
```
{% endtab %}

{% tab title="Python" %}
```
brick.motor(M1) # motor call on port M1
brick.motor("M2") # motor call on port M2
```
{% endtab %}
{% endtabs %}

## objectSensor

Provides access to the object sensor by the camera (class "[ObjectSensor](class-objectsensor.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.objectSensor();
```
{% endtab %}

{% tab title="Python" %}
```
brick.objectSensor();
```
{% endtab %}
{% endtabs %}

## playSound

Play the audio file.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.playSound("filename");
```
{% endtab %}

{% tab title="Python" %}
```
brick.playSound("filename");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the name of the file with an absolute path or the path relative to the folder `trik` on the controller.

{% hint style="warning" %}
Warning! The file must be pre-loaded on the controller.
{% endhint %}

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.playSound("media/sound.mp3"); // Play the sound.mp3 file in the media folder
```
{% endtab %}

{% tab title="Python" %}
```
brick.playSound("media/sound.mp3"); # Play the sound.mp3 file in the media folder
```
{% endtab %}
{% endtabs %}

## say

Say the line (in Russian or English).

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.say(string);
```
{% endtab %}

{% tab title="Python" %}
```
brick.say(string);
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify a string in English or Russian.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.say("Привет, я ТРИК");
```
{% endtab %}

{% tab title="Python" %}
```
brick.say("Привет, я ТРИК");
```
{% endtab %}
{% endtabs %}

## sensor

Provides access to the sensor on the specified port (class "[Sensor](class-sensor.md)").

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.sensor(portName);
brick.sensor("portName");
```
{% endtab %}

{% tab title="Python" %}
```
brick.sensor(portName);
brick.sensor("portName");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the port.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.sensor(A1) // call a sensor on port A1
brick.sensor("A2") // call a sensor on port A2
```
{% endtab %}

{% tab title="Python" %}
```
brick.sensor(A1) # call a sensor on port A1
brick.sensor("A2") # call a sensor on port A2
```
{% endtab %}
{% endtabs %}

## stop

Stops all motors and active sensors, and removes what is drawn on the display.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.stop();
```
{% endtab %}

{% tab title="Python" %}
```
brick.stop();
```
{% endtab %}
{% endtabs %}
