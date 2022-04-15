# LEGO NXT specific blocks

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Specialized blocks for LEGO NXT are divided into several categories:

1. [Action](blocks.md#action-blocks) — blocks that perform some action on the robot: turn on motors, play sound, etc.
2. [Waiting](blocks.md#waiting-blocks) — units waiting for some event to occur: certain sensor readings, button presses, etc.
3. [Drawings on the display](blocks.md#drawing-on-the-display) — blocks used to display graphics and text on the screen

For the blocks available for all platforms, see the article

{% content-ref url="../studio/programming-visual/blocks.md" %}
[blocks.md](../studio/programming-visual/blocks.md)
{% endcontent-ref %}



## Action blocks

|                                              Icon                                             |                      Name                     | Description                                                               |
| :-------------------------------------------------------------------------------------------: | :-------------------------------------------: | ------------------------------------------------------------------------- |
|         <img src="../.gitbook/assets/beepBlock (4).png" alt="" data-size="original">          |             [Beep](blocks.md#beep)            | Play a fixed-frequency sound on the robot.                                |
|       <img src="../.gitbook/assets/playToneBlock (4).png" alt="" data-size="original">        |        [Play Tone](blocks.md#play-tone)       | Play the sound on the robot at a given frequency and duration.            |
|    <img src="../.gitbook/assets/enginesForwardBlock (4).png" alt="" data-size="original">     |   [Motors Forward](blocks.md#motors-forward)  | Turn on the motors on the set ports with the set power.                   |
|    <img src="../.gitbook/assets/enginesBackwardBlock (4).png" alt="" data-size="original">    | [Motors Backward](blocks.md#motors-forward-1) | Turn on the motors in reversing mode on the set ports with the set power. |
|      <img src="../.gitbook/assets/enginesStopBlock (4).png" alt="" data-size="original">      |      [Stop Motors](blocks.md#stop-motors)     | Turn off the motors on the specified ports.                               |
| <img src="../.gitbook/assets/nullificationEncoderBlock (4).png" alt="" data-size="original">  |    [Clear Encoder](blocks.md#clear-encoder)   | Reset the number of motor revolutions.                                    |

### Beep <a href="#beep" id="beep"></a>

![Beep](<../.gitbook/assets/beepBlock (5).png>)

Play a fixed-frequency sound on the robot.\
\
Parameters:

1. Whether to wait for the sound to end or go straight to the next block. Valid values are true, false.
2. Playback volume (0 to 100%).

### Play Tone <a href="#play-tone" id="play-tone"></a>

![Play Tone](<../.gitbook/assets/playToneBlock (5).png>)

Play a sound on the robot with the set frequency and duration. Similar to the "Horn" block, but also allows you to set the sound parameters.\
\
Parameters:

* Frequency (Hz).
* Duration (ms).
* Whether to wait for the sound to end or go to the next block immediately. Valid values - true, false.
* Playback volume (from 0 to 100%).

### **Motors Forward** <a href="#motors-forward" id="motors-forward"></a>

![Motors Forward](<../.gitbook/assets/enginesForwardBlock (5).png>)

Turn on the motors on the set ports with the set power. The ports are specified by the letters A, B, or C, separated by commas.

The power is set as a percentage from -100 to 100. If a negative value is set, the motor is reversed.

The motors have different modes of operation: braking mode and sliding mode (indicated by a red or green rectangle on the block, respectively). The modes affect the way the motor responds to a command - braking mode stops the motor when shut down, the sliding mode allows the motor to crank through its inertia.

### **Motors Backward** <a href="#motors-forward" id="motors-forward"></a>

![Motors Backward](<../.gitbook/assets/enginesBackwardBlock (5).png>)

Turn on the motors in reversing mode on the set ports with the set power.

Parameters are similar to the parameters of the "Motors forward" block.

### **Stop Motors** <a href="#stop-motors" id="stop-motors"></a>

![Stop Motors](<../.gitbook/assets/enginesStopBlock (5).png>)

Turn off the motors on the specified ports.

### **Clear Encoder** <a href="#clear-encoder" id="clear-encoder"></a>

![Clear Encoder](<../.gitbook/assets/nullificationEncoderBlock (5).png>)

Reset the number of motor revolutions.

## Waiting Blocks

|                                              Icon                                              |                              Name                              | Description                                                                                                                               |
| :--------------------------------------------------------------------------------------------: | :------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------- |
|   <img src="../.gitbook/assets/waitForTouchSensorBlock (4).png" alt="" data-size="original">   |    [Wait for Touch Sensor](blocks.md#wait-for-touch-sensor)    | Wait for the touch sensor to work.                                                                                                        |
|  <img src="../.gitbook/assets/waitForSonarDistanceBlock (6).png" alt="" data-size="original">  |  [Wait for Sonar Distance](blocks.md#wait-for-sonar-distance)  | Wait until the distance returned by the ultrasonic distance sensor is comparable to that specified in the Distance parameter value.       |
|      <img src="../.gitbook/assets/waitForColorBlock (2).png" alt="" data-size="original">      |           [Wait for Color](blocks.md#wait-for-color)           | Wait for the color sensor in color recognition mode to return the specified color.                                                        |
|     <img src="../.gitbook/assets/waitForEncoderBlock (4).png" alt="" data-size="original">     |         [Wait for Encoder](blocks.md#wait-for-enkoder)         | Wait until the RPM counter reading on the specified motor reaches the RPM Limit value specified in the "RPM Limit" parameter value.       |
| <img src="../.gitbook/assets/waitForColorIntensityBlock (2).png" alt="" data-size="original">  | [Wait for Color Intensity](blocks.md#wait-for-color-intensity) | Wait until the value returned by the color sensor on the specified port is comparable to the value specified in the Intensity parameter.  |
|      <img src="../.gitbook/assets/waitForLightBlock (4).png" alt="" data-size="original">      |           [Wait for Color](blocks.md#wait-for-light)           | Wait until the value returned by the light sensor on the specified port is comparable to the value specified in the Percentage parameter. |
|   <img src="../.gitbook/assets/waitForSoundSensorBlock (2).png" alt="" data-size="original">   |    [Wait for Sound Sensor](blocks.md#wait-for-sound-sensor)    | Wait until the volume read by the microphone on the specified port is above or below the set value.                                       |
|     <img src="../.gitbook/assets/waitForButtonsBlock (4).png" alt="" data-size="original">     |          [Wait for Button](blocks.md#wait-for-button)          | Wait for the button on the robot body to be pressed.                                                                                      |

### Wait for Touch Sensor <a href="#wait-for-touch-sensor" id="wait-for-touch-sensor"></a>

![Wait for Touch Sensor](<../.gitbook/assets/waitForTouchSensorBlock (5).png>)

Wait for the touch sensor to work.

The parameter specifies the number of the port to which the sensor is connected. Valid values: 1, 2, 3, 4.

### Wait for Sonar Distance <a href="#wait-for-sonar-distance" id="wait-for-sonar-distance"></a>

![Wait for Sonar Distance](<../.gitbook/assets/waitForSonarDistanceBlock (7).png>)

Wait until the distance returned by the ultrasonic distance sensor is comparable to that specified in the Distance parameter value.\
\
Parameters:

1. Distance (in centimeters, from 0 to 255).
2. Port - number of the port to which the distance sensor is connected.
3. Read value - the operation that will be used for comparison with the entered distance.

### Wait for Color <a href="#wait-for-color" id="wait-for-color"></a>

![Wait for Color](<../.gitbook/assets/waitForColorBlock (3).png>)

Wait for the color sensor in color recognition mode to return the specified color.

Parameters:

1. Color.
2. Port - the number of the port to which the color sensor is connected.

### Wait for Encoder <a href="#wait-for-enkoder" id="wait-for-enkoder"></a>

![Wait for Encoder](<../.gitbook/assets/waitForEncoderBlock (5).png>)

Wait until the RPM counter reading on the specified motor reaches the RPM Limit value specified in the "RPM Limit" parameter value.

Parameters:

1. Port - the name of the port to which the motor is connected (A, B, or C).
2. Read value - the operation that will be used for comparison with the entered RPM limit.
3. RPM limit.

### Wait for Color Intensity <a href="#wait-for-color-intensity" id="wait-for-color-intensity"></a>

![Wait for Color Intensity](<../.gitbook/assets/waitForColorIntensityBlock (3).png>)

Wait until the value returned by the color sensor on the specified port is comparable to the value specified in the Intensity parameter.

Parameters:

1. Intensity (0 to 100%).
2. Port - number of the port to which the color sensor is connected.
3. Read value - the operation that will be used to compare with the entered intensity.

### Wait for Color <a href="#wait-for-light" id="wait-for-light"></a>

![Wait for Color](<../.gitbook/assets/waitForLightBlock (5).png>)

Wait until the value returned by the light sensor on the specified port is comparable to the value specified in the Percentage parameter.

Parameters:

1. Percentages (from 0 to 100%).
2. Port - the number of the port to which the color sensor is connected.
3. Read value - the operation that will be used to compare with the Percent value.

### Wait for Sound Sensor <a href="#wait-for-sound-sensor" id="wait-for-sound-sensor"></a>

![Wait for Sound Sensor](<../.gitbook/assets/waitForSoundSensorBlock (3).png>)

Wait until the volume read by the microphone on the specified port is above or below the set value.

### Wait for Button <a href="#wait-for-button" id="wait-for-button"></a>

![Wait for Button](<../.gitbook/assets/waitForButtonsBlock (5).png>)

Wait for the button on the robot body to be pressed.

## Drawing on the display

|                                         Icon                                         |                    Name                    | Description                                                                |
| :----------------------------------------------------------------------------------: | :----------------------------------------: | -------------------------------------------------------------------------- |
|  <img src="../.gitbook/assets/printTextBlock (4).png" alt="" data-size="original">   |     [Print Text](blocks.md#print-text)     | Prints the specified line at the specified location on the robot's screen. |
| <img src="../.gitbook/assets/clearScreenBlock (4).png" alt="" data-size="original">  |   [Clear Screen](blocks.md#clear-screen)   | Erase everything that is drawn on the screen.                              |
|   <img src="../.gitbook/assets/drawRectBlock (4).png" alt="" data-size="original">   | [Draw Rectangle](blocks.md#draw-rectangle) | Draw a rectangle on the screen.                                            |
|  <img src="../.gitbook/assets/drawPixelBlock (4).png" alt="" data-size="original">   |     [Draw Pixel](blocks.md#draw-pixel)     | Draw a point on the screen at the specified coordinates.                   |
|   <img src="../.gitbook/assets/drawLineBlock (4).png" alt="" data-size="original">   |      [Draw Line](blocks.md#draw-line)      | Draw a segment on the screen.                                              |
|  <img src="../.gitbook/assets/drawCircleBlock (4).png" alt="" data-size="original">  |    [Draw Circle](blocks.md#draw-circle)    | Draw a circle on the screen with a given center and a given radius.        |

### Print Text <a href="#print-text" id="print-text"></a>

![Print Text](<../.gitbook/assets/printTextBlock (5).png>)

Prints the specified line at the specified location on the robot's screen.

The default value of the Text property is treated as a pure string, and it will be displayed that way. To make the system assume that this is a textual expression (which can be useful, for example, when debugging variable values), check the "Compute" checkbox in the Property Editor.

### Clear Screen <a href="#clear-screen" id="clear-screen"></a>

![Clear Screen](<../.gitbook/assets/clearScreenBlock (5).png>)

Erase everything that is drawn on the screen.

### Draw Rectangle <a href="#draw-rectangle" id="draw-rectangle"></a>

![Draw Rectangle](<../.gitbook/assets/drawRectBlock (5).png>)

Draw a rectangle on the screen.

Parameters:

1. X, Y - coordinates of the upper left corner.
2. The width of the rectangle.
3. The height of the rectangle.
4. Update the picture (true or false).

### Draw Pixel <a href="#draw-pixel" id="draw-pixel"></a>

![Draw Pixel](<../.gitbook/assets/drawPixelBlock (5).png>)

Draw a point on the screen at the specified coordinates.

### Draw Line <a href="#draw-line" id="draw-line"></a>

![Draw Line](<../.gitbook/assets/drawLineBlock (5).png>)

Draw a segment on the screen.

Parameters:

1. X1, Y1 - coordinates of the beginning of the segment.
2. X2, Y2 - coordinates of the end of the segment.
3. Update the picture (true or false).

### Draw Circle <a href="#draw-circle" id="draw-circle"></a>

![Draw Circle](<../.gitbook/assets/drawCircleBlock (5).png>)

Draw a circle on the screen with a given center and a given radius.

Parameters:

1. X, Y - coordinates of the center of the circle.
2. The radius of the circle.
3. Update the picture (true or false).
