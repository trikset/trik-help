# LEGO EV3 specific blocks

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Specialized blocks for LEGO EV3 are divided into several categories:

1. [Action](blocks.md#action-blocks) — blocks that perform some action on the robot: turn on motors, play sound, etc.
2. [Waiting](blocks.md#waiting-blocks) — units waiting for some event to occur: certain sensor readings, button presses, etc.
3. [Drawings on the display](blocks.md#drawing-on-the-display) — blocks used to display graphics and text on the screen
4. [Line Leader](blocks.md#line-leader) — blocks for the advanced "Line Leader" sensor.

&#x20;For the blocks available for all platforms, see the article "[Common Blocks](../studio/programming-visual/blocks.md)".

## Action blocks

| Icon                                                                                         | Name                                                             | Description                                                                                                                                          |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="../.gitbook/assets/sendMessageThreadsBlock.png" alt="" data-size="original">       | [Send Message to Thread](blocks.md#send-message-to-thread)       | Sends this message to the parallel task with the specified identifier (the identifier must be specified when creating the task in the "Fork" block). |
| <img src="../.gitbook/assets/beepBlock.png" alt="" data-size="original">                     | [Beep](blocks.md#beep)                                           | Play a fixed-frequency sound on the robot.                                                                                                           |
| <img src="../.gitbook/assets/playToneBlock.png" alt="" data-size="original">                 | [Play Tone](blocks.md#play-tone)                                 | Play the sound on the robot at a given frequency and duration.                                                                                       |
| <img src="../.gitbook/assets/enginesForwardBlock.png" alt="" data-size="original">           | [Motors Forward](blocks.md#motors-forward)                       | Turn on the motors on the set ports with the set power.                                                                                              |
| <img src="../.gitbook/assets/enginesBackwardBlock.png" alt="" data-size="original">          | [Motors Backward](blocks.md#motors-backward)                     | Turn on the motors in reversing mode on the set ports with the set power.                                                                            |
| <img src="../.gitbook/assets/enginesStopBlock.png" alt="" data-size="original">              | [Stop Motors](blocks.md#stop-motors)                             | Turn off the motors on the specified ports.                                                                                                          |
| <img src="../.gitbook/assets/nullificationEncoderBlock.png" alt="" data-size="original">     | [Clear Encoder](blocks.md#clear-encoder)                         | Reset the number of motor revolutions.                                                                                                               |
| <img src="../.gitbook/assets/ledBlock.png" alt="" data-size="original">                      | [LED](blocks.md#led)                                             | Set the color of the LED on the front of the robot.                                                                                                  |
| <img src="../.gitbook/assets/sendMessageBlock.png" alt="" data-size="original">              | [Send Mail](blocks.md#send-mail)                                 | Send an email to another robot.                                                                                                                      |
| <img src="../.gitbook/assets/calibrateGyroscopeBlock.png" alt="" data-size="original">       | [Calibrate Gyroscope](blocks.md#calibrate-gyroscope)             | Sets the gyroscope to 0 at the current position.                                                                                                     |
| <img src="../.gitbook/assets/startCompassCalibrationBlock.png" alt="" data-size="original">  | [Start Compass Calibration](blocks.md#start-compass-calibration) | Starts the compass calibration programmatically.                                                                                                     |
| <img src="../.gitbook/assets/stopCompassCalibrationBlock.png" alt="" data-size="original">   | [Stop Compass Calibration](blocks.md#stop-compass-calibration)   | Finishes the compass calibration.                                                                                                                    |
| <img src="../.gitbook/assets/readRGBBlock.png" alt="" data-size="original">                  | [Read RGB into Variables](blocks.md#read-rgb-into-variables)     | Read RGB in a variable.                                                                                                                              |

### Send Message to Thread

![Send Message to Thread](<../.gitbook/assets/sendMessageThreadsBlock (1).png>)

Sends this message to the parallel task with the specified identifier (the identifier must be specified when creating the task in the "Fork" block).

The message can be any expression.

### Beep

![Beep](<../.gitbook/assets/beepBlock (1).png>)

Play a fixed-frequency sound on the robot.

Parameters:

1. Whether to wait for the sound to end or go straight to the next block. Valid values are "true", "false".
2. Playback volume.

### Play Tone

![Play Tone](<../.gitbook/assets/playToneBlock (1).png>)

Play the sound on the robot at a given frequency and duration. Аналогичен блоку «[Гудок](blocks.md#gudok)», но позволяет также задавать параметры звука.

Parameters:

* Frequency (Hz).
* Duration (ms).
* Whether to wait for the sound to end or go to the next block immediately. Valid values - true, false.
* Playback volume (from 0 to 100%).

### **Motors Forward**

![Motors Forward](<../.gitbook/assets/enginesForwardBlock (1).png>)

Turn on the motors on the set ports with the set power. The ports are set by the letters A, B, or C, separated by commas.

The power is set as a percentage by a number from -100 to 100, if a negative value is set, the motor turns on in reverse mode.

The motors have different modes of operation: braking mode and sliding mode (indicated by a red or green rectangle on the block, respectively). The modes affect the way the motor responds to a command - braking mode stops the motor when shut down, the sliding mode allows the motor to crank through its inertia.

### **Motors Backward**

![Motors Backward](<../.gitbook/assets/enginesBackwardBlock (1).png>)

Turn on the motors in reversing mode on the set ports with the set power. The parameters are the same as for the "Motors Forward" block.

### **Stop Motors**

![Stop Motors](<../.gitbook/assets/enginesStopBlock (1).png>)

Turn off the motors on the specified ports.

### **Clear Encoder**

![Clear Encoder](<../.gitbook/assets/nullificationEncoderBlock (1).png>)

Reset the number of motor revolutions.

### **LED**

![LED](<../.gitbook/assets/ledBlock (1).png>)

Set the color of the LED on the front of the robot.

### **Send Mail**

![Send Mail](<../.gitbook/assets/sendMessageBlock (1).png>)

Send an email to another robot. If the recipient's name is not filled in, the message will be sent to all connected robots.

### Calibrate Gyroscope

![Calibrate Gyroscope](<../.gitbook/assets/calibrateGyroscopeBlock (1).png>)

Sets the gyroscope to 0 at the current position.

### Start Compass Calibration

![Start Compass Calibration](<../.gitbook/assets/startCompassCalibrationBlock (1).png>)

Starts the compass calibration programmatically.\
\
To calibrate the compass, the robot must turn in place more than 540° in one direction and then in the opposite direction. After the turns, the "Stop Compass Calibration" block must be added.

### Stop Compass Calibration

![Stop Compass Calibration](<../.gitbook/assets/stopCompassCalibrationBlock (1).png>)

Finishes the compass calibration. The calibration result is returned in a variable. A nonzero result means a successful calibration.

### Read RGB into Variables

![Read RGB into Variables](<../.gitbook/assets/readRGBBlock (1).png>)

Read RGB in a variable.

## Waiting Blocks

| Icon                                                                                       | Name                                                                 | Description                                                                                                                               |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="../.gitbook/assets/receiveMessageThreadsBlock.png" alt="" data-size="original">  | [Receive Message from Thread](blocks.md#receive-message-from-thread) | Wait to receive a message from another parallel task.                                                                                     |
| <img src="../.gitbook/assets/waitForTouchSensorBlock.png" alt="" data-size="original">     | [Wait for Touch Sensor](blocks.md#wait-for-touch-sensor)             | Wait until the touch sensor is triggered.                                                                                                 |
| <img src="../.gitbook/assets/waitForEncoderBlock.png" alt="" data-size="original">         | [Wait for Encoder](blocks.md#wait-for-encoder)                       | Wait until the RPM counter reading on the specified motor reaches the RPM Limit value specified in the "RPM Limit" parameter value.       |
| <img src="../.gitbook/assets/waitForColorBlock.png" alt="" data-size="original">           | [Wait for Color](blocks.md#wait-for-color)                           | Wait for the color sensor in color recognition mode to return the specified color.                                                        |
| <img src="../.gitbook/assets/waitForColorIntensityBlock.png" alt="" data-size="original">  | [Wait for Color Intensity](blocks.md#wait-for-color-intensity)       | Wait until the value returned by the color sensor on the specified port is comparable to the value specified in the Intensity parameter.  |
| <img src="../.gitbook/assets/waitForLightBlock.png" alt="" data-size="original">           | [Wait for Light](blocks.md#wait-for-light)                           | Wait until the value returned by the light sensor on the specified port is comparable to the value specified in the Percentage parameter. |
| <img src="../.gitbook/assets/waitForSonarDistanceBlock.png" alt="" data-size="original">   | [Wait for Range Sensor](blocks.md#wait-for-range-sensor)             | Wait until the distance returned by the ultrasonic distance sensor is comparable to that specified in the Distance parameter value.       |
| <img src="../.gitbook/assets/waitForButtonsBlock.png" alt="" data-size="original">         | [Wait for Button](blocks.md#wait-for-button)                         | Wait for the button on the robot body to be pressed.                                                                                      |
| <img src="../.gitbook/assets/waitForSoundSensorBlock.png" alt="" data-size="original">     | [Wait for Sound Sensor](blocks.md#wait-for-sound-sensor)             | Wait until the volume read by the microphone on the specified port is above or below the set value.                                       |
| <img src="../.gitbook/assets/waitForGyroscopeBlock.png" alt="" data-size="original">       | [Wait for Gyroscope](blocks.md#wait-for-gyroscope)                   | Wait until the value returned by the gyroscope on the specified port is comparable to the value specified in the "Value" parameter.       |
| <img src="../.gitbook/assets/waitForMessageBlock.png" alt="" data-size="original">         | [Wait for Mail Receiving](blocks.md#wait-for-mail-receiving)         | Saves a message from another robot to a given variable.                                                                                   |

### Receive Message from Thread

![Receive Message from Thread](<../.gitbook/assets/receiveMessageThreadsBlock (1).png>)

Wait to receive a message from another parallel task.

When a message is received, it will be assigned to the variable specified in the block.

The "Wait for message" property allows you to specify what to do if the message queue is empty: wait for a new message to arrive or continue working by assigning an empty string to the variable.

The message is automatically converted to the same type as the receiver variable. For example, if you send a number as a string, it will be accepted as a number.

### Wait for Touch Sensor

![Wait for Touch Sensor](<../.gitbook/assets/waitForTouchSensorBlock (1).png>)



Wait until the touch sensor is triggered.

The parameter specifies the number of the port to which the sensor is connected. Valid values: 1, 2, 3, 4.

### Wait for Encoder

![Wait for Encoder](<../.gitbook/assets/waitForEncoderBlock (1).png>)

Wait until the RPM counter reading on the specified motor reaches the RPM Limit value specified in the "RPM Limit" parameter value.

Parameters:

1. Port - the name of the port to which the motor is connected (A, B, or C).
2. Read value - the operation that will be used for comparison with the entered RPM limit.
3. RPM limit.

### Wait for Color

![Wait for Color](<../.gitbook/assets/waitForColorBlock (1).png>)

Wait for the color sensor in color recognition mode to return the specified color.

Parameters:

1. Color.
2. Port - the number of the port to which the color sensor is connected.

### Wait for Color Intensity

![Wait for Color Intensity](<../.gitbook/assets/waitForColorIntensityBlock (1).png>)

Wait until the value returned by the color sensor on the specified port is comparable to the value specified in the Intensity parameter.

Parameters:

1. Intensity (0 to 100%).&#x20;
2. Port - number of the port to which the color sensor is connected.
3. Read value - the operation that will be used to compare with the entered intensity.

### Wait for Light

![Wait for Light](<../.gitbook/assets/waitForLightBlock (1).png>)

Wait until the value returned by the light sensor on the specified port is comparable to the value specified in the Percentage parameter.

Parameters:

1. Percentages (from 0 to 100%).
2. Port - the number of the port to which the color sensor is connected.
3. Read value - the operation that will be used to compare with the Percent value.

### Wait for Range Sensor

![Wait for Range Sensor](<../.gitbook/assets/waitForSonarDistanceBlock (1).png>)

Wait until the distance returned by the ultrasonic distance sensor is comparable to that specified in the Distance parameter value.

Parameters:

1. Distance (in centimeters, from 0 to 255).
2. Port - number of the port to which the distance sensor is connected.
3. Read value - the operation that will be used for comparison with the entered distance.

### Wait for Button

![Wait for Button](<../.gitbook/assets/waitForButtonsBlock (1).png>)

Wait for the button on the robot body to be pressed.

### Wait for Sound Sensor

![Wait for Sound Sensor](<../.gitbook/assets/waitForSoundSensorBlock (1).png>)

Wait until the volume read by the microphone on the specified port is above or below the set value.

### Wait for Gyroscope

![Wait for Gyroscope](<../.gitbook/assets/waitForGyroscopeBlock (1).png>)

Wait until the value returned by the gyroscope on the specified port is comparable to the value specified in the "Value" parameter.

### Wait for Mail Receiving

![Wait for Mail Receiving](<../.gitbook/assets/waitForMessageBlock (1).png>)

Saves a message from another robot to a given variable. If there is no message, the robot waits for the message to arrive if the flag is set. Otherwise, the variable is set to the default value.

## Drawing on the display

| Icon                                                                             | Name                                       | Description                                                                |
| -------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| <img src="../.gitbook/assets/printTextBlock.png" alt="" data-size="original">    | [Print Text](blocks.md#print-text)         | Prints the specified line at the specified location on the robot's screen. |
| <img src="../.gitbook/assets/clearScreenBlock.png" alt="" data-size="original">  | [Clear Screen](blocks.md#clear-screen)     | Erase everything that is drawn on the screen.                              |
| <img src="../.gitbook/assets/drawRectBlock.png" alt="" data-size="original">     | [Draw Rectangle](blocks.md#draw-ractangle) | Draw a rectangle on the screen.                                            |
| <img src="../.gitbook/assets/drawPixelBlock.png" alt="" data-size="original">    | [Draw Pixel](blocks.md#draw-pixel)         | Draw a point on the screen at the specified coordinates.                   |
| <img src="../.gitbook/assets/drawLineBlock.png" alt="" data-size="original">     | [Draw Line](blocks.md#draw-line)           | Draw a segment on the screen.                                              |
| <img src="../.gitbook/assets/drawCircleBlock.png" alt="" data-size="original">   | [Draw Circle](blocks.md#draw-circle)       | Draw a circle on the screen with a given center and a given radius.        |

### Print Text

![Print Text](<../.gitbook/assets/printTextBlock (1).png>)

Prints the specified line at the specified location on the robot's screen.

The default value of the Text property is treated as a pure string, and it will be displayed that way. To make the system assume that this is a textual expression (which can be useful, for example, when debugging variable values), check the "Calculate" checkbox in the Property Editor.

### Clear Screen

![Clear Screen](<../.gitbook/assets/clearScreenBlock (1).png>)

Erase everything that is drawn on the screen.

### Draw Rectangle

![Draw Rectangle](<../.gitbook/assets/drawRectBlock (1).png>)

Draw a rectangle on the screen.

Parameters:

1. &#x20;X, Y - coordinates of the upper left corner.
2. The width of the rectangle.
3. The height of the rectangle.
4. Update the picture (true or false).

### Draw Pixel

![Draw Pixel](<../.gitbook/assets/drawPixelBlock (1).png>)

Draw a point on the screen at the specified coordinates.

### Draw Line

![Draw Line](<../.gitbook/assets/drawLineBlock (1).png>)

Draw a segment on the screen.

Parameters:

1. X1, Y1 - coordinates of the beginning of the segment.
2. X2, Y2 - coordinates of the end of the segment.
3. Update the picture (true or false).

### Draw Circle

![Draw Circle](<../.gitbook/assets/drawCircleBlock (1).png>)

Draw a circle on the screen with a given center and a given radius.

Parameters:

1. X, Y - coordinates of the center of the circle.
2. The radius of the circle.
3. Update the picture (true or false).

## Line Leader

| Icon                                                                                   | Name                                                             | Description                                                                                               |
| -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| <img src="../.gitbook/assets/calWhiteLineLeader.png" alt="" data-size="original">      | [Calibrate White](blocks.md#calibrate-white)                     | Calibrates the white threshold for the sensor.                                                            |
| <img src="../.gitbook/assets/calBlackLineLeader.png" alt="" data-size="original">      | [Calibrate Black](blocks.md#calibrate-black)                     | Calibrates the black threshold for the sensor.                                                            |
| <img src="../.gitbook/assets/calPIDLineLeader.png" alt="" data-size="original">        | [Calibrate PID](blocks.md#calibrate-pid)                         | Sets the sensor setpoint (middle of the sensor above the line), P/(P factor), I/(I factor), D/(D factor). |
| <img src="../.gitbook/assets/sleepLineLeader.png" alt="" data-size="original">         | [Sleep Line Leader](blocks.md#sleep-line-leader)                 | Sets the line sensor to power save mode.                                                                  |
| <img src="../.gitbook/assets/wakeUpLineLeader.png" alt="" data-size="original">        | [Wake Up Line Leader](blocks.md#wake-up-line-leader)             | Includes a line sensor for operation.                                                                     |
| <img src="../.gitbook/assets/readAvrLineLeader.png" alt="" data-size="original">       | [Read Average to Variable](blocks.md#read-average-to-variable)   | Reads the weighted average value into a variable.                                                         |
| <img src="../.gitbook/assets/readCalLineLeader.png" alt="" data-size="original">       | [Read Sensor to Array](blocks.md#read-sensor-to-array)           | Read values from the sensor (eight values).                                                               |
| <img src="../.gitbook/assets/readSteeringLineLeader.png" alt="" data-size="original">  | [Read Steering to Variable](blocks.md#read-steering-to-variable) | Reads the control value into a variable.                                                                  |

### Calibrate White

![Calibrate White](<../.gitbook/assets/calWhiteLineLeader (1).png>)

Calibrates the white threshold for the sensor. Must be on white.

### Calibrate Black

![Calibrate Black](<../.gitbook/assets/calBlackLineLeader (1).png>)

Calibrates the black threshold for the sensor. Should be on black.

### Calibrate PID

![Calibrate PID](<../.gitbook/assets/calPIDLineLeader (1).png>)

Sets the sensor setpoint (middle of the sensor above the line), P/(P factor), I/(I factor), D/(D factor).

### Sleep Line Leader

![Sleep Line Leader](<../.gitbook/assets/sleepLineLeader (1).png>)

Sets the line sensor to power save mode.

### Wake Up Line Leader

![Wake Up Line Leader](<../.gitbook/assets/wakeUpLineLeader (1).png>)

Includes a line sensor for operation.

### Read Average to Variable

![Read Average to Variable](<../.gitbook/assets/readAvrLineLeader (1).png>)

Reads the weighted average value into a variable.

The value is calculated within the sensor, where each of the eight sensors is taken with a factor, and the average is calculated.

A value between 0 and 80 is expected (-1 is an error).

### Read Sensor to Array

![Read Sensor to Array](<../.gitbook/assets/readCalLineLeader (1).png>)

Read values from the sensor (eight values). Values from 0 to 100. 0 is black, 100 is white.

### Read Steering to Variable

![Read Steering to Variable](<../.gitbook/assets/readSteeringLineLeader (1).png>)

Reads the control value into a variable. The value is calculated inside the sensor and can be used immediately for motors.

A value from -100 to 100 is expected (-101 is an error).
