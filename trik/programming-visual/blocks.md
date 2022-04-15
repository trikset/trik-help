# TRIK specific blocks

TRIK specific blocks consist of three categories:

1. [Actions](blocks.md#action-blocks) - blocks that perform any action on the controller: turning on the motors, playing sounds, etc.
2. [Waiting](blocks.md#waiting-blocks) - blocks waiting for an event to occur: certain sensor readings, pressing a button, etc.
3. [Drawing](blocks.md#drawing-blocks) - blocks displaying graphics and text on the screen.

For blocks common for all platforms see the article

{% content-ref url="../../studio/programming-visual/blocks.md" %}
[blocks.md](../../studio/programming-visual/blocks.md)
{% endcontent-ref %}



## Action blocks

|                                               Icon                                               |                                 Name                                 | Description                                                                                                                                                                          |
| :----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  <img src="../../.gitbook/assets/sendMessageThreadsBlock (2).png" alt="" data-size="original">   |      [Send Message To Thread](blocks.md#send-message-to-thread)      | Sends the message to the parallel thread with the identifier given.                                                                                                                  |
|       <img src="../../.gitbook/assets/getButtonCodeBlock.png" alt="" data-size="original">       |             [Get Button Code](blocks.md#get-button-code)             | Saves the code of the button pressed on the robot to the specified variable.                                                                                                         |
|         <img src="../../.gitbook/assets/beepBlock (2).png" alt="" data-size="original">          |                   [Play Tone](blocks.md#play-sound)                  | Plays a sound with specified frequency and duration on the controller.                                                                                                               |
|       <img src="../../.gitbook/assets/playToneBlock (2).png" alt="" data-size="original">        |                 [Play Sound](blocks.md#play-sound-1)                 | Play the specified sound file on the controller.                                                                                                                                     |
|    <img src="../../.gitbook/assets/enginesForwardBlock (2).png" alt="" data-size="original">     |              [Motors Forward](blocks.md#motors-forward)              | Turn on the motors at the specified ports with the specified power.                                                                                                                  |
|    <img src="../../.gitbook/assets/enginesBackwardBlock (2).png" alt="" data-size="original">    |             [Motors Backward](blocks.md#motors-backward)             | Turn on the motors in reverse mode at the specified ports with the specified power.                                                                                                  |
|      <img src="../../.gitbook/assets/enginesStopBlock (2).png" alt="" data-size="original">      |                 [Stop Motors](blocks.md#stop-motors)                 | Turn off the motors at the specified ports.                                                                                                                                          |
| <img src="../../.gitbook/assets/nullificationEncoderBlock (2).png" alt="" data-size="original">  |               [Clear Encoder](blocks.md#clear-encoder)               | Reset the motors revolutions count for the specified ports.                                                                                                                          |
|       <img src="../../.gitbook/assets/angularServoBlock.png" alt="" data-size="original">        |               [Angular Servo](blocks.md#angular-servo)               | Set the servos rotation angle on the specified ports to the specified position.                                                                                                      |
|            <img src="../../.gitbook/assets/sayBlock.png" alt="" data-size="original">            |                         [Say](blocks.md#say)                         | Speak through the speaker the phrase passed as an argument.                                                                                                                          |
|          <img src="../../.gitbook/assets/ledBlock (2).png" alt="" data-size="original">          |                         [LED](blocks.md#led)                         | Set the specified controllers LED color.                                                                                                                                             |
|        <img src="../../.gitbook/assets/systemBlock (1).png" alt="" data-size="original">         |                 [System Call](blocks.md#system-call)                 | The block has a logical parameter "Code". If it's True, the content of the "Command" parameter translates directly into the program code. Otherwise, an OS' CLI call will be pulled. |
|        <img src="../../.gitbook/assets/initCameraBlock.png" alt="" data-size="original">         |         [Initialize Camera](blocks.md#initialize-videocamera)        | Turn on the video camera on the controller in one of the three modes.                                                                                                                |
|        <img src="../../.gitbook/assets/stopCameraBlock.png" alt="" data-size="original">         |                 [Stop Camera](blocks.md#stop-camera)                 | Turn off the camera.                                                                                                                                                                 |
|        <img src="../../.gitbook/assets/detectBlock (1).png" alt="" data-size="original">         |           [Detect by Camera](blocks.md#detect-videocamera)           | Fixes the image in the center of the frame and initializes the line sensor or object sensor with it.                                                                                 |
| <img src="../../.gitbook/assets/lineDetectorIntoVariableBlock.png" alt="" data-size="original">  | [Line Detector into Variable](blocks.md#line-detector-into-variable) | Places the current line sensor reading into the specified variable.                                                                                                                  |
|    <img src="../../.gitbook/assets/initVideoStreamingBlock.png" alt="" data-size="original">     |      [Enable Video Streaming](blocks.md#enable-video-streaming)      | Starts a video broadcast on the robot.                                                                                                                                               |
|    <img src="../../.gitbook/assets/stopVideoStreamingBlock.png" alt="" data-size="original">     |     [Disable Video Streaming](blocks.md#disable-video-streaming)     | Stops the video feed from the robot's camera.                                                                                                                                        |
|      <img src="../../.gitbook/assets/sendMessageBlock (2).png" alt="" data-size="original">      |                [Send message](blocks.md#send-message)                | Sends the message to the robot with the board number specified.                                                                                                                      |
|        <img src="../../.gitbook/assets/writeToFileBlock.png" alt="" data-size="original">        |               [Write to File](blocks.md#write-to-file)               | Writes a given message to a file.                                                                                                                                                    |
|        <img src="../../.gitbook/assets/removeFileBlock.png" alt="" data-size="original">         |                 [Remove File](blocks.md#remove-file)                 | Deletes a file.                                                                                                                                                                      |
|  <img src="../../.gitbook/assets/calibrateGyroscopeBlock (2).png" alt="" data-size="original">   |         [Calibrate Gyroscope](blocks.md#calibrate-gyroscope)         | Sets the gyroscope angle to zero at the current position.                                                                                                                            |

### Send Message To Thread

![Send Message To Thread](<../../.gitbook/assets/sendMessageThreadsBlock (3).png>)

Sends the message to a parallel task with a specified identifier (the identifier must be specified while creating the task in the "Fork" block).

The message can be arbitrary.

### Get Button Code

![Get Button Code](<../../.gitbook/assets/getButtonCodeBlock (1).png>)

Assigns the pressed button code to a specified variable.

The "Waiting" property allows you to wait for the button to be pressed. If the button is not pressed, the variable will be set to -1.

### Play Tone <a href="#play-sound" id="play-sound"></a>

![Play Tone](<../../.gitbook/assets/beepBlock (3).png>)

Plays a sound with specified frequency and duration on the controller.

### Play Sound

![Play Sound](<../../.gitbook/assets/playToneBlock (3).png>)

Plays an audio file on the controller.



The file must be pre-loaded on the controller. The path to the file is relative to the `trik` folder on the controller. You can download the file to the controller, for example, using the [WinSCP](../../studio/utilities/winscp.md) program.

### Motors Forward

![Motors Forward](<../../.gitbook/assets/enginesForwardBlock (3).png>)

Turn on the motors on the given ports with the given power.

The ports are specified by lines M1, M2, M3, and M4, separated by commas. The power specified as a percentage by a number from -100 to 100. If the value is negative, the motors will be reversed.

### Motors Backward

![Motors Backward](<../../.gitbook/assets/enginesBackwardBlock (3).png>)

Turn on the motors in reverse mode on the given ports with the given power.

Parameters are similar to the "motors forward" block.

### Stop Motors <a href="#stop-motors" id="stop-motors"></a>

![Stop Motors](<../../.gitbook/assets/enginesStopBlock (3).png>)

Stop the motors on the specified ports.

The ports are specified by lines M1, M2, M3, and M4, separated by commas.

### Clear Encoder

![Clear Encoder](<../../.gitbook/assets/nullificationEncoderBlock (3).png>)

Reset the motors revolutions count on the specified ports.

The ports are specified by lines E1, E2, E3, and E4, separated by commas.

### Angular Servo

![Angular Servo](<../../.gitbook/assets/angularServoBlock (1).png>)

Set the servos rotation angle on the specified ports to the specified position (from -90 to 90 degrees).

The ports are specified by comma separated values.

### Say <a href="#say" id="say"></a>

![Say](<../../.gitbook/assets/sayBlock (1).png>)

Use the speaker to say the phrase passed as the block argument.

### LED <a href="#led" id="led"></a>

![LED](<../../.gitbook/assets/ledBlock (3).png>)

Set the specified LED color on the controller.

### System Call

![System Call](<../../.gitbook/assets/systemBlock (2).png>)

The block has a logical parameter "Code". If it's True, the content of the "Command" parameter translates directly into the program code. Otherwise, an OS' CLI call will be pulled.

### Initialize Camera <a href="#initialize-videocamera" id="initialize-videocamera"></a>

![Initialize Camera](<../../.gitbook/assets/initCameraBlock (1).png>)

Enable the video camera on the controller in one of three modes:

1. **Line Sensor** - detects a color line in the center of the frame and subsequently returns the deviation of the center of the line from the center of the frame as a number in the range from -100 (left) to 100 (right).
2. **Object sensor** - detects a contrasting object in the center of the frame and later returns the coordinates of its center and diameter in pixels.
3. **Color sensor** - returns the dominant color in the center of the frame as its coordinates in the RGB color scale.

### Detect by Camera <a href="#detect-videocamera" id="detect-videocamera"></a>

![Detect by Camera](../../.gitbook/assets/detectBlock.png)

Captures the image in the center of the frame and initializes a line sensor or object sensor with it. The camera must be switched on in the appropriate mode with the "Initialize Camera" block.

### Line Detector into Variable <a href="#line-detector-into-variable" id="line-detector-into-variable"></a>

![Line Detector inti Variable](<../../.gitbook/assets/lineDetectorIntoVariableBlock (1).png>)

Places the current line sensor reading in the specified variable.

The camera must be switched on inline sensor mode by the "Initialize Camera" block and initialized by the "Detect by camera" block.

### Enable Video Streaming

![Enable Video Streaming](../../.gitbook/assets/cameraOnBlock.png)

Starts a video broadcast on the robot.

The video can be viewed on the TRIK control panel or in a browser at the address\
`{robots ip-address}:8080/?action=stream/`.

### Send message <a href="#send-message" id="send-message"></a>

![Send message](<../../.gitbook/assets/sendMessageBlock (3).png>)

Sends the message to the robot with the board number specified.

The robot must be on the same network as the robot sending the message and registered as master or slave using `Settings → Messages` on the robot. If there is more than one robot with the given board number in the network, all of them will receive the message.

### Write to File <a href="#write-to-file" id="write-to-file"></a>

![Write to File](<../../.gitbook/assets/writeToFileBlock (1).png>)

Writes the given expression to a file.

The path can be absolute or relative to the folder containing `trik-studio.exe`.

The file can be retrieved from the controller, e.g. with the [WinSCP](../../studio/utilities/winscp.md) program for Windows or SCP for Linux.

### Remove File

![Remove File](<../../.gitbook/assets/removeFileBlock (1).png>)

Deletes a file.\
\
The path can be absolute or relative to the folder containing `trik-studio.exe`.

### Stop Camera

![Stop Camera](<../../.gitbook/assets/stopCameraBlock (1).png>)

Turn off the camera.

### Disable Video Streaming

![Disable Video Streaming](<../../.gitbook/assets/stopVideoStreamingBlock (1).png>)

Stop the video feed from the robot's camera.

### Calibrate Gyroscope

![Calibrate Gyroscope](<../../.gitbook/assets/calibrateGyroscopeBlock (3).png>)

Sets the gyroscope angle to zero at the current position..

## Waiting Blocks

| Icon                                                                                              |                                  Name                                  | Description                                                                                                                                    |
| ------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="../../.gitbook/assets/receiveMessageThreadsBlock (2).png" alt="" data-size="original">  |  [Receive Message From Thread](blocks.md#receive-message-from-thread)  | Wait for a message from another parallel task.                                                                                                 |
| ![](<../../.gitbook/assets/ezgif.com-gif-maker (1).png>)                                          |                   [User input](blocks.md#user-input)                   | Wait for the user to enter a value.                                                                                                            |
| <img src="../../.gitbook/assets/waitForGyroscopeBlock (2).png" alt="" data-size="original">       |           [Wait for Gyroscope](blocks.md#wait-for-gyroscope)           | Wait until the value returned by the gyro sensor on the specified port is greater or less than the one specified in the "degrees" parameter.   |
| <img src="../../.gitbook/assets/waitForTouchSensorBlock (2).png" alt="" data-size="original">     |        [Wait for Touch Sensor](blocks.md#wait-for-touch-sensor)        | Wait for the touch sensor to operate on the specified port.                                                                                    |
| <img src="../../.gitbook/assets/waitForLightBlock (2).png" alt="" data-size="original">           |               [Wait for Light](blocks.md#wait-for-light)               | Wait until the value returned by the light sensor on the specified port is greater or less than the one specified in the "percents" parameter. |
| <img src="../../.gitbook/assets/waitForSonarDistanceBlock (2).png" alt="" data-size="original">   | [Wait for Ultrasonic Distance](blocks.md#wait-for-ultrasonic-distance) | Wait until the distance returned by the ultrasonic distance sensor is greater or less than the one specified in the "distance" parameter..     |
| <img src="../../.gitbook/assets/waitForSonarDistanceBlock (3).png" alt="" data-size="original">   |   [Wait for Infrared Distance](blocks.md#wait-for-infrared-distance)   | Wait until the distance returned by the infrared distance sensor is greater or less than the one specified in the "distance" parameter..       |
| <img src="../../.gitbook/assets/waitForEncoderBlock (2).png" alt="" data-size="original">         |             [Wait for Encoder](blocks.md#wait-for-encoder)             | Wait until the revolutions counter reading on the specified port is greater or less than the "Tacho limit" value.                              |
| <img src="../../.gitbook/assets/waitForButtonsBlock (2).png" alt="" data-size="original">         |              [Wait for Button](blocks.md#wait-for-button)              | Wait until the specified button on the robot is pressed.                                                                                       |
| <img src="../../.gitbook/assets/waitForMessageBlock (2).png" alt="" data-size="original">         |             [Wait for Message](blocks.md#wait-for-message)             | Wait for the message in the mailbox. When the message is received, it will be assigned to the specified variable.                              |
| <img src="../../.gitbook/assets/trikWaitGamepadButtonBlock.png" alt="" data-size="original">      |        [Wait Gamepad Button](blocks.md#wait-for-gamepad-button)        | Wait for the button to be pressed on the remote control connected to the robot.                                                                |
| <img src="../../.gitbook/assets/trikWaitPadPressBlock.png" alt="" data-size="original">           |             [Wait Pad Press](blocks.md#wait-for-pad-press)             | Wait for one of the two active areas of the RC to be pressed.                                                                                  |
| <img src="../../.gitbook/assets/trikWaitGamepadWheelBlock.png" alt="" data-size="original">       |       [Wait for Gamepad Wheel](blocks.md#wait-for-gamepad-wheel)       | Wait for the desired tilt of the RC.                                                                                                           |
| <img src="../../.gitbook/assets/trikWaitGamepadDisconnectBlock.png" alt="" data-size="original">  |  [Wait for Gamepad Disconnect](blocks.md#wait-for-gamepad-disconnect)  | Wait until the RC is disconnected from the robot. If the RC is not connected, the program will continue running.                               |
| <img src="../../.gitbook/assets/trikWaitGamepadConnectBlock.png" alt="" data-size="original">     |     [Wait for Gamepad Connect](blocks.md#wait-for-gamepad-connect)     | Wait for the RC to connect to the robot. If the RC is already connected, the program will continue running.                                    |

### Receive Message From Thread <a href="#receive-message-from-thread" id="receive-message-from-thread"></a>

![Receive Message From Thread](<../../.gitbook/assets/receiveMessageThreadsBlock (3).png>)

Wait for a message from another parallel task.

The message text will be assigned to the specified variable.

The "Wait for message" property allows you to specify what to do if the message queue is empty: wait for a new message to arrive or continue working by assigning an empty string to the variable.

The message is automatically converted to the same type as the receiver variable. For example, if you send a number as a string, it will be accepted as a number.

### User input



![User input](../../.gitbook/assets/ezgif.com-gif-maker.png)

Wait for the user to enter a value. The value will be assigned to the specified variable.

#### Properties

The block has three properties:

| Property     | Description             |
| ------------ | ----------------------- |
| **Variable** | Variable name.          |
| **Default**  | Default variable value. |
| **Text**     | Text field description. |

**Example**

| **Block**                                                                                       | Execution                                                                                       |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| <img src="../../.gitbook/assets/Screenshot 2021-03-01 195703.png" alt="" data-size="original">  | <img src="../../.gitbook/assets/Screenshot 2021-03-01 195825.png" alt="" data-size="original">  |

### Wait for Gyroscope

![Wait for Gyroscope](<../../.gitbook/assets/waitForGyroscopeBlock (3).png>)

Wait until the value returned by the gyro sensor on the specified port is greater or less than the one specified in the "degrees" parameter..

### Wait for Touch Sensor <a href="#wait-for-touch-sensor" id="wait-for-touch-sensor"></a>

![Wait for Touch Sensor](<../../.gitbook/assets/waitForTouchSensorBlock (3).png>)

Wait for the touch sensor to operate on the specified port.

### Wait for Light <a href="#wait-for-light" id="wait-for-light"></a>

![Wait for Light](<../../.gitbook/assets/waitForLightBlock (3).png>)

Wait until the value returned by the light sensor on the specified port is greater or less than the one specified in the "percents" parameter.\
\
Parameters:

* "Percents" - value to compare with the value returned by the light sensor.
* "Port" - the port to which the light sensor is connected.
* "Read value" - the operation that will be used to compare with the value of the "Percents" parameter.

### Wait for Ultrasonic Distance <a href="#wait-for-ultrasonic-distance" id="wait-for-ultrasonic-distance"></a>

![Wait for Ultrasonic Distance](<../../.gitbook/assets/waitForSonarDistanceBlock (5).png>)

Wait until the distance returned by the ultrasonic distance sensor is greater or less than the one specified in the "distance" parameter (distance is set in centimeters, from 0 to 300).

Parameters:

* "Distance" - value to compare with the value returned by the distance sensor.
* "Port" - the port to which the distance sensor is connected.
* "Read value" - the operation to be used for comparison with the value of the Distance parameter.

### Wait for Infrared Distance

![Wait for Infrared Distance](<../../.gitbook/assets/waitForSonarDistanceBlock (4).png>)

Wait until the distance returned by the infrared distance sensor is greater or less than the one specified in the "distance" parameter.

By default, the distance on ports A1 and A2 is set in centimeters (from 0 to 100). It is not recommended to connect other sensors to these ports as incorrect values may be read.

Another parameter is the number of the port to which the distance sensor is connected. The last parameter specifies the operation to be used for comparison with the distance.

### Wait for Encoder <a href="#wait-for-encoder" id="wait-for-encoder"></a>

![Wait for Encoder](<../../.gitbook/assets/waitForEncoderBlock (3).png>)

Wait until the revolutions count reading on the specified port is greater or less than the Tacho limit value.

### Wait for Button <a href="#wait-for-button" id="wait-for-button"></a>

![Wait for Button](<../../.gitbook/assets/waitForButtonsBlock (3).png>)

Wait until the specified button on the robot is pressed.

### Wait for Message <a href="#wait-for-message" id="wait-for-message"></a>

![Wait for Message](<../../.gitbook/assets/waitForMessageBlock (3).png>)

Wait for the message in the mailbox. When the message is received, it will be assigned to the specified variable.

The Wait for message property allows you to specify what to do if the message queue is empty: wait for a new message to arrive or continue working by putting an empty string into the variable.

The message is automatically converted to the type corresponding to the receiver variable type, i.e. you can, for example, send a number as a string and accept it as a number.

### Wait Gamepad Button <a href="#wait-for-gamepad-button" id="wait-for-gamepad-button"></a>

![Wait Gamepad Button](<../../.gitbook/assets/trikWaitGamepadButtonBlock (1).png>)

Wait for the button to be pressed on the remote control connected to the robot. The buttons are numbered from 1 to 5.

### Wait Pad Press <a href="#wait-for-pad-press" id="wait-for-pad-press"></a>

![Wait Pad Press](<../../.gitbook/assets/trikWaitPadPressBlock (1).png>)

Wait for one of the two active areas of the RC to be pressed. The coordinates of the click can be obtained with the "[gamepadPad](sensory-variables.md#gamepadpad)" sensory variables.

### Wait for Gamepad Wheel

![Wait for Gamepad Wheel](<../../.gitbook/assets/trikWaitGamepadWheelBlock (1).png>)

Wait for the desired tilt of the RC.

The tilt is only registered if the remote is in "steering" mode, the tilt angle is coded with numbers from -100 (maximum left) to 100 (maximum right).

Another parameter specifies the operation that will be used to compare with the Angle parameter value.

### Wait for Gamepad Disconnect <a href="#wait-for-gamepad-disconnect" id="wait-for-gamepad-disconnect"></a>

![Wait for Gamepad Disconnect](<../../.gitbook/assets/trikWaitGamepadDisconnectBlock (1).png>)

Wait until the RC is disconnected from the robot. If the RC is not connected, the program will continue running.

### Wait for Gamepad Connect <a href="#wait-for-gamepad-connect" id="wait-for-gamepad-connect"></a>

![Wait for Gamepad Connect](<../../.gitbook/assets/trikWaitGamepadConnectBlock (1).png>)

Wait for the RC to connect to the robot. If the RC is already connected, the program will continue running.

## Drawing Blocks

| Icon                                                                                    |                      Name                      | Description                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | :--------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="../../.gitbook/assets/brushColorBlock.png" alt="" data-size="original">       |    [Painter Color](blocks.md#painter-color)    | Specify the color to draw simple graphical shapes on the robot's screen.                                                                                                                                                              |
| <img src="../../.gitbook/assets/brushWidthBlock.png" alt="" data-size="original">       |    [Painter Width](blocks.md#painter-width)    | Specify the line width used to draw simple graphical figures on the robot's screen.                                                                                                                                                   |
| <img src="../../.gitbook/assets/drawPixelBlock (2).png" alt="" data-size="original">    |       [Draw Pixel](blocks.md#draw-pixel)       | Draw a dot on the screen at the specified coordinates.                                                                                                                                                                                |
| <img src="../../.gitbook/assets/drawLineBlock (2).png" alt="" data-size="original">     |        [Draw Line](blocks.md#draw-line)        | Draw a line segment on the screen. Segment ends are given as parameters to the block.                                                                                                                                                 |
| <img src="../../.gitbook/assets/drawRectBlock (2).png" alt="" data-size="original">     |   [Draw Rectangle](blocks.md#draw-rectangle)   | Draw a rectangle on the screen. The coordinates of the upper left corner, the width, and the height of the rectangle are specified as parameters.                                                                                     |
| <img src="../../.gitbook/assets/drawCircleBlock (2).png" alt="" data-size="original">   |     [Draw Ellipse](blocks.md#draw-ellipse)     | Draw an ellipse inscribed in a given rectangle on the screen.                                                                                                                                                                         |
| <img src="../../.gitbook/assets/drawArcBlock.png" alt="" data-size="original">          |         [Draw Arc](blocks.md#draw-arc)         | Draw an arc on the screen, given the coordinates of the rectangle in which it will be inscribed, and the angles (in degrees) of its beginning and end on the circle. If the beginning and the end coincide, the circle will be drawn. |
| <img src="../../.gitbook/assets/smileBlock.png" alt="" data-size="original">            |            [Smile](blocks.md#smile)            | Draw a smiley face on the screen.                                                                                                                                                                                                     |
| <img src="../../.gitbook/assets/sadSmileBlock.png" alt="" data-size="original">         |        [Sad Smile](blocks.md#sad-smile)        | Draw a sad smiley face on the screen.                                                                                                                                                                                                 |
| <img src="../../.gitbook/assets/setBackgroundBlock.png" alt="" data-size="original">    | [Background Color](blocks.md#background-color) | Set the screen background color.                                                                                                                                                                                                      |
| <img src="../../.gitbook/assets/printTextBlock (2).png" alt="" data-size="original">    |       [Print Text](blocks.md#print-text)       | Print the specified string at the specified location on the robot's screen. The default value of the "Text" property is interpreted as a pure string, so it will be displayed that way.                                               |
| <img src="../../.gitbook/assets/clearScreenBlock (2).png" alt="" data-size="original">  |     [Clear Screen](blocks.md#clear-screen)     | Erase everything that is drawn on the screen.                                                                                                                                                                                         |

### Painter Color <a href="#painter-color" id="painter-color"></a>

![Painter Color](<../../.gitbook/assets/brushColorBlock (1).png>)

Specify the color to draw simple graphical shapes on the robot's screen.

### Painter Width

![Painter Width](<../../.gitbook/assets/brushWidthBlock (1).png>)

Specify the width of the line used to draw simple graphical figures on the robot's screen.

### Draw Pixel <a href="#draw-pixel" id="draw-pixel"></a>

![Draw Pixel](<../../.gitbook/assets/drawPixelBlock (3).png>)

Draw a dot on the screen at the specified coordinates.

### Draw Line <a href="#draw-line" id="draw-line"></a>

![Draw Line](<../../.gitbook/assets/drawLineBlock (3).png>)

Draw a line segment on the screen. Segment ends are given as parameters to the block.

### Draw Rectangle <a href="#draw-rectangle" id="draw-rectangle"></a>

![Draw Rectangle](<../../.gitbook/assets/drawRectBlock (3).png>)

Draw a rectangle on the screen. The coordinates of the upper left corner, the width, and the height of the rectangle are specified as parameters.

### Draw Ellipse <a href="#draw-ellipse" id="draw-ellipse"></a>

![Draw Ellipse](<../../.gitbook/assets/drawCircleBlock (3).png>)

Draw an ellipse inscribed in a given rectangle on the screen.

### Draw Arc <a href="#draw-arc" id="draw-arc"></a>

![Draw Arc](<../../.gitbook/assets/drawArcBlock (1).png>)

Draw an arc on the screen, given the coordinates of the rectangle in which it will be inscribed, and the angles (in degrees) of its beginning and end on the circle. If the beginning and the end coincide, the circle will be drawn.

### Smile <a href="#smile" id="smile"></a>

![Smile](<../../.gitbook/assets/smileBlock (1).png>)

Draw a smiley face on the screen.

### Sad Smile <a href="#sad-smile" id="sad-smile"></a>

![Sad Smile](<../../.gitbook/assets/sadSmileBlock (1).png>)

Draw a sad smiley face on the screen.

### Background Color <a href="#background-color" id="background-color"></a>

![Background Color](<../../.gitbook/assets/setBackgroundBlock (1).png>)

Sets the screen background color.

### Print Text

![Print Text](<../../.gitbook/assets/printTextBlock (3).png>)

Prints the specified string at the specified location on the robot's screen.&#x20;

#### Properties

| Property | Value                                                                              |
| -------- | ---------------------------------------------------------------------------------- |
| Evaluate | <p>True — print the variable or expression value.</p><p>False — print as text.</p> |
| Text     | Text or variable/expression to be printed.                                         |
| Redraw   | <p>True — redraw the screen.<br>False — do not redraw.</p>                         |
| X, Y     | The text beginning coordinates.                                                    |

#### How to print a text?

To print a text:

1. Put your text into the Text property.
2. Uncheck the Evaluate checkbox.

#### How to print a variable value?

To print a variable value:

1. Put the variable name into the Text property.
2. Check the Evaluate checkbox.

### Clear Screen <a href="#clear-screen" id="clear-screen"></a>

![Clear Screen](<../../.gitbook/assets/clearScreenBlock (3).png>)

Erase everything that is drawn on the screen.
