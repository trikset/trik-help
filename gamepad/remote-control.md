---
description: Example program
---

# Robot control from the remote control

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

To control the robot with the [remote control](about/) you need to write a program and run it on the robot.

## Example of interaction with the remote control

1. Write [an algorithm](remote-control.md#program-algorithm) to use the controller in TRIK Studio.
2. [Connect](../trik/wi-fi/) the controller to the computer and [upload](../trik/run-upload-programs.md) the written program to the robot.
3. Connect your smartphone to the controller by selecting the controller's network.
4. Open the [TRIK Gamepad](about/app.md) app on your smartphone.
5. Execute the algorithm on the controller.

## Program algorithm

1\. Enter variables for gamepad touch coordinates - `x` and `y` - and initialize them by assigning zero values to them in the "[Expression](../studio/programming-visual/blocks.md#expression)" block:

![](<../.gitbook/assets/B3 1 En Gamepad1.png>)

2\. Add the "[Wait for Gamepad Connect](../trik/programming-visual/blocks.md#wait-for-gamepad-connect)" block:

![](<../.gitbook/assets/B3 2 En Gamepad2.png>)

3\. To check if the gamepad clicks on the left area (Pad1), add a "[Condition](../studio/programming-visual/blocks.md#condition)" block with the condition [`gamepadPad1Pressed`](../trik/programming-visual/sensory-variables.md#gamepadpad-1-pressed-gamepadpad-2-pressed)`> 0`:

![](<../.gitbook/assets/B3 3 En Gamepad3.png>)

4\. In case there is no touch, it is necessary to stop the motors. To do this, add a block "[Stop motors](../trik/programming-visual/blocks.md#stop-motors)":

![](<../.gitbook/assets/B3 4 En Gamepad4.png>)

5\. If the [Pad1](about/app.md) area is pressed on the gamepad, you need to get the coordinates of the touch. To do this, use the [`gamepadPad1`](../trik/programming-visual/sensory-variables.md#gamepadpad-1-gamepadpad2) array in the "[Expression](../studio/programming-visual/blocks.md#expression)" block:

![](<../.gitbook/assets/B3 5 En Gamepad5.png>)

6\. After getting the coordinates, add a simple controller with the "[Motor Forward](../trik/programming-visual/blocks.md#motors-forward)" blocks. The Y coordinate offset is responsible for the speed of the robot and the X coordinate offset is responsible for the rotation.

![](<../.gitbook/assets/B3 6 En Gamepad6.png>)

7\. To close the condition, add a "[Timer](../studio/programming-visual/blocks.md#timer)" block with a value of `100 ms` (in the program this is the time for a new call to the remote control).

![](<../.gitbook/assets/B3 7 En Gamepad6.png>)

8\. Close the loop on the "Condition" block with a link from the "Timer" block.

![](<../.gitbook/assets/B3 8 En Gamepad8.png>)

9\. If you have a video camera, add the "[Enable Video Streaming](../trik/programming-visual/blocks.md#camera-on)" block to the beginning of the program:

![](<../.gitbook/assets/B3 9 En Gamepad9.png>)

### General view of the algorithm

![](<../.gitbook/assets/B3 A En Gamepad10.png>)

{% hint style="info" %}
You can find the finished program in the root folder of TRIK Studio `/examples/trik/remoteContro`l or download it [here](https://dl.trikset.com/trikset-help/remoteControl.qrs).
{% endhint %}
