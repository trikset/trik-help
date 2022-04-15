# Testing devices connected to the TRIK controller

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

On the TRIK controller you can test the devices connected to it:

1. Analog sensors
2. Servo motors
3. Power motors
4. Digital sensors
5. Encoders
6. Gyroscope
7. Accelerometer
8. Camera

To do this, go to the Test menu.

![](<../../.gitbook/assets/83 1 En TRIK-Testg.png>)

{% hint style="info" %}
**Warning!** The device must first be connected to a specific port to test it. To test the device, you must first connect it to a specific port.
{% endhint %}

## Analog sensors

To start testing analog sensors, select the corresponding item in the list.

| ![](<../../.gitbook/assets/83 2 En TRIK-Testg-Analjg.png>) | ![](<../../.gitbook/assets/83 3 En TRIK-Testg-Analjg2.png>) |
| ---------------------------------------------------------- | ----------------------------------------------------------- |

### Configuration of ports for analog sensors

| Port  | Configuration                                                                                                                                             |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A1–A2 | <p>Infrared distance sensor.</p><p>Value limits: 8-80 cm.</p>                                                                                            |
| A3–A4 | <p>Touch sensor. Values: </p><p>0 - no touch, </p><p>1 - pressing.</p>                                                                                  |
| A5–A6 | <p>Light sensor. </p><p>Value limits: 0-100. 0 - white, 100 - black. </p><p>The sensor must be installed at a distance of 8-15 mm from the surface.</p> |

## Servo motors

1\. To start a servo test, select the corresponding item in the list.

![](<../../.gitbook/assets/83 4 En TRIK-Testg-Servo.png>)

2\. Select the port to which the servo drive is connected. The servo drives are connected to ports S1-S3.

![](<../../.gitbook/assets/83 5 En TRIK-Testg-Servo2.png>)

3\. Press the "Enter" button on the controller to apply power to the servo drive.

4\. If you add power with the "Right" button, the servo will rotate clockwise.

![](<../../.gitbook/assets/83 6 En TRIK-Testg-Servo3.png>)

5\. If you turn it down, it's counterclockwise.

![](<../../.gitbook/assets/83 7 En TRIK-Testg-Servo4.png>)

## Power motors

1\. To start the power motor test, select the corresponding item in the list.

![](<../../.gitbook/assets/83 8 En TRIK-Tesng-Motors.png>)

2\. Select the port to which the motor is connected. The motors are connected to ports M1-M4.

![](<../../.gitbook/assets/83 9 En TRIK-Tesng-Motors2.png>)

3\. Press the "Enter" button on the controller to apply power to the motor.

4\. If you add power with the "Right" button, the motors will spin forward.

![](<../../.gitbook/assets/83 A En TRIK-Tesng-Motors3.png>)

5\. If you turn it down, back up.

![](<../../.gitbook/assets/83 B En TRIK-Tesng-Motors4.png>)

{% hint style="info" %}
**Warning!** If the motor rotates in the wrong direction, just change the direction of the current, disconnect the power wire and insert the other side.
{% endhint %}

## Digital sensors

To start testing digital sensors, select the corresponding item in the list.

| ![](<../../.gitbook/assets/83 C En TRIK-Testg-Digit.png>) | ![](<../../.gitbook/assets/83 D En TRIK-Testg-Digit2.png>) |
| --------------------------------------------------------- | ---------------------------------------------------------- |



### Configuration of ports for digital sensors

| Port  | Configuration                                                      |
| ----- | ------------------------------------------------------------------ |
| D1–D2 | <p>Ultrasonic distance sensor. </p><p>Value limits: 8-250 cm.</p> |

{% hint style="info" %}
**Warning!** If the sensor reads -1, then it is either too far away from the object or too close to it.
{% endhint %}

## Encoders

1\. To start the encoder test, select the corresponding item in the list.

![](<../../.gitbook/assets/83 E En TRIK-Testg-Enc.png>)

2\. Connect the wheels to the motors with a bushing.

3\. To test the performance of the encoder, rotate the wheel back and forth and watch the encoder readings change.

![](<../../.gitbook/assets/83 F En TRIK-Testg-Enc2.png>)

{% hint style="info" %}
**Warning!** Encoders are incremental. When scrolling the motor the encoder value can be either negative or positive.
{% endhint %}

## Gyroscope

1\. To start the gyroscope test, select the corresponding item in the list.

![](<../../.gitbook/assets/83 G En TRIK-Tesng-Gyro.png>)

2\. To test the performance of the gyroscope, change the position of the robot in space and see if the readings change.

![](<../../.gitbook/assets/83 H En TRIK-Tesng-Gyro2.png>)

{% hint style="info" %}
**Warning!** All readings are in milligrades.
{% endhint %}

## Accelerometer

1\. To start the gyroscope test, select the corresponding item in the list.

![](<../../.gitbook/assets/83 I En TRIK-Tesng-Axel.png>)

2\. To test the performance of the accelerometer, change the position of the robot in space and see if the readings change.

![](<../../.gitbook/assets/83 J En TRIK-Tesng-Axel2.png>)

{% hint style="info" %}
**Warning!** All readings are in milligrades.
{% endhint %}

## Camera

![](<../../.gitbook/assets/83 K En TRIK-Tesng-Cam.png>)

If the camera is working properly, it should display an image on the screen.
