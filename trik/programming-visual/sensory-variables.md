# Sensory variables for the TRIK controller



{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Sensor variables are reserved variables for getting readings of the sensors connected to the corresponding ports.

These values can be assigned to variables and used in mathematical expressions.

Variable changes can be tracked as you go through the program in [the variable table](../../studio/interface/#panel-variables).

| Variable                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [accelerometer](sensory-variables.md#accelerometer)                                                                                                                                                    | An array of three elements containing accelerometer readings on the X, Y, and Z-axis.                                                                                                                                                                                                                                                                                                                                                                                             |
| <p>buttonDown</p><p>buttonUp</p><p></p><p>buttonEnter</p><p>buttonEsc</p><p>buttonPower</p><p></p><p>buttonLeft</p><p>buttonRight</p><p></p><p></p><p></p>                                             | <p>State of the buttons on the TRIK controller body:<br>"Down",<br>"Up",</p><p></p><p>"Enter",<br>"Esc",<br>"Power",<br></p><p>"Left",<br>"Right".<br></p><p>Possible values:<br>0 — button not pressed.<br>1 — button pressed.</p>                                                                                                                                                                                                                                               |
| <p><a href="sensory-variables.md#colorsensor">colorSensorR</a></p><p><a href="sensory-variables.md#colorsensor">colorSensorG</a></p><p><a href="sensory-variables.md#colorsensor">colorSensorB</a></p> | <p>The color sensor readings by the camcorder in the center of the frame are the intensity of red, green, and blue, respectively.<br></p><p>They are only updated when the color sensor is turned on and initialized.</p><p><br>Possible values: 0 ... 255</p>                                                                                                                                                                                                                    |
| <p>encoder1<br>encoder2<br>encoder3<br>encoder4</p>                                                                                                                                                    | Encoder readings on ports E1, E2, E3, E4 respectively.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <p>gamepadButton1</p><p>...</p><p>gamepadButton5</p>                                                                                                                                                   | <p>The state of the buttons on the remote control from 1 to 5 respectively.<br></p><p>0 — the button is not pressed.<br>1 — button is pressed.</p>                                                                                                                                                                                                                                                                                                                                |
| gamepadConnected                                                                                                                                                                                       | <p>Remote control connection status.<br></p><p>0 — remote control is not connected.<br>1 — the remote control is connected.</p>                                                                                                                                                                                                                                                                                                                                                   |
| <p><a href="sensory-variables.md#gamepadpad">gamepadPad1</a><br><a href="sensory-variables.md#gamepadpad">gamepadPad2</a></p>                                                                          | <p>The coordinates of pressing the active areas on the remote control.</p><p><br>Each variable stores an array of two elements corresponding to the coordinate of the press point.<br></p><p>Possible values:<br>From (-100, -100) to (100, 100).</p><p>(-101, -101) — if there is no press.</p>                                                                                                                                                                                  |
| <p>gamepadPad1Pressed<br>gamepadPad2Pressed</p>                                                                                                                                                        | <p>The state of the click on the left and right area of the remote control respectively. The coordinates of pressing can be found out with the help of the variables <a href="sensory-variables.md#gamepadpad">gamepadPad1</a> and <a href="sensory-variables.md#gamepadpad">gamepadPad2</a>.<br><strong></strong><br><strong></strong>Possible values:<br>1 — the active area on the remote control is pressed.<br>0 — the active area on the remote control is not pressed.</p> |
| gamepadWheel                                                                                                                                                                                           | <p>Tilt value of the remote control (if it is connected and the "steering wheel" is enabled on it).<br></p><p>Possible values:<br>-100 ... 100. <br>-101 — if there is no data on the "rudder" position.</p><p><br>-100 — extreme left position.<br>100 — extreme right position.</p>                                                                                                                                                                                             |
| [gyroscope](sensory-variables.md#gyroscope)                                                                                                                                                            | An array of three elements containing the gyroscope readings on the X, Y, and Z-axis respectively.                                                                                                                                                                                                                                                                                                                                                                                |
| [lineSensor](sensory-variables.md#linesensor)                                                                                                                                                          | The array of three elements containing the camera readings in the line sensor mode. The values are updated when the line sensor is enabled and initialized.                                                                                                                                                                                                                                                                                                                       |
| objectSensorX objectSensorY                                                                                                                                                                            | <p>The coordinates of the object detected by the video camera in relation to the center of the screen. The values are updated when the sensor is on and initialized.<br></p><p>Possible values: -100 to 100 (relative to the center of the frame).</p>                                                                                                                                                                                                                            |
| objectSensorSize                                                                                                                                                                                       | <p>The size of the object recognized by the video camera. The value is updated when the object sensor is activated and initialized.<br></p><p>Possible values: 0 to 100.<br></p><p>100 - object occupies the whole frame.</p>                                                                                                                                                                                                                                                     |
| <p>sensorA1<br>...<br>sensorA6</p>                                                                                                                                                                     | Readings of the sensors connected to the corresponding analog ports.                                                                                                                                                                                                                                                                                                                                                                                                              |
| <p>sensorD1<br>sensorD2</p>                                                                                                                                                                            | Readings from sensors connected to the corresponding digital ports.                                                                                                                                                                                                                                                                                                                                                                                                               |

## **accelerometer**

An array of three elements containing accelerometer readings on the X, Y, and Z axis, respectively.

#### **Example**

```python
x = accelerometer[0]; -- X-axis accelerometer readings
y = accelerometer[1]; -- Y-axis accelerometer readings
z = accelerometer[2]; -- Z-axis accelerometer readings
```

## **colorSensorR, colorSensorG, colorSensorB** <a href="#colorsensor" id="colorsensor"></a>

The color sensor readings by the camcorder in the center of the frame are the intensity of red, green, and blue, respectively. They are only updated when the color sensor is turned on and initialized.

#### Possible values

From 0 to 255.

#### Example

```
r = colorSensorR; -- red intensity
g = colorSensorG; -- green intensity
b = colorSensorB; -- blue intensity
```

![](<../../.gitbook/assets/7E 1 En colorSensor 3.png>)

## **gamepadPad1, gamepadPad2** <a href="#gamepadpad" id="gamepadpad"></a>

The coordinates of pressing the active areas on the remote control.

&#x20;Each variable stores an array of two elements corresponding to the coordinate of the click point.

![](https://thumb.tildacdn.com/tild3864-3034-4638-a466-343932386432/-/resize/602x/-/format/webp/image7.png)

#### **Possible values**

From (-100, -100) to (100, 100),\
\
(-100, -100) - top left corner of the active area. \
(-101, -101) - if there is no click.

## **gyroscope**

An array of three elements containing the gyroscope readings on the X, Y, and Z-axis respectively.

#### **Пример**

```python
x = gyroscope[0]; -- X-axis gyroscope readings
y = gyroscope[1]; -- Y-axis gyroscope readings
z = gyroscope[2]; -- Z-axis gyroscope readings
```

## **lineSensor**

An array of three elements containing camera readings inline sensor mode. The values are updated when the sensor is on and initialized.

|                    |                                                                                                                                                                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **lineSensor\[0]** | The deviation of the line from the screen center from -100 (leftmost line position in the frame) to 100 (rightmost line position).                                                                                                              |
| **lineSensor\[1]** | Crossing probability is defined as the percentage of points inside the horizontal stripe in the center of the frame that is recognized as a line, from 0 (no such points) to 100 (all points in the horizontal strip are recognized as a line). |
| **lineSensor\[2]** | Relative line size, that is, the number of points in the frame defined as a line, from 0 (no line in the frame) to 100 (the whole frame is recognized as a line).                                                                               |
