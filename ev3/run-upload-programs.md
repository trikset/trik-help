# Launching and uploading programs to the LEGO EV3

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

To work with the LEGO EV3 controller, in the TRIK Studio settings, go to "Robots" and select the LEGO EV3 platform.

![](<../.gitbook/assets/94 1 En EV3-robots 4.png>)

There are several options for executing programs for the LEGO EV3 controller:

* Step-by-step interpretation of a diagram with the simulation of the robot's behavior on a two-dimensional model.
* Loading the program on the robot and its further autonomous execution without communication with the computer.

## Interpretation with the simulation of robot behavior <a href="#2d" id="2d"></a>

{% hint style="info" %}
In 2D Model Robot mode, commands are not sent to the robot, but are executed step by step for the virtual model displayed on the screen. See "[2D Model](../studio/2d-model/)" for more information.
{% endhint %}

1\. Turn on the two-dimensional model mode.

![](<../.gitbook/assets/94 2 En ev3-2d-1 4.png>)

2\. Click the "Execute" button.

![](<../.gitbook/assets/94 3 En ev3-2d-2 4.png>)

3\. The 2D model window will open and the program will start.

![](<../.gitbook/assets/94 4 En ev3-2d-3 3.gif>)

4\. When you switch to edit mode, you can track the steps of the program's execution.

![](<../.gitbook/assets/94 5 En ev3-2d-4 3.gif>)

## Upload to controller <a href="#upload" id="upload"></a>

From TRIK Studio you can download a ready-made program to the robot to execute it autonomously in the future without communication with a computer.

{% hint style="warning" %}
**Warning!** You need [Java](https://java.com/ru/download/) software to download programs to the controller.
{% endhint %}

1\. Enable Bluetooth or USB offline execution mode (depending on the desired type of connection to the robot to download the program).&#x20;

![](<../.gitbook/assets/94 6 En ev3-upload-1 4.png>)

2\. Click the "Run Program" button.

The program will generate code in the internal EV3 language, load it onto the robot and run it immediately for execution.

![](<../.gitbook/assets/94 7 En ev3-upload-2 4.png>)

3\. If you only want to download a program without running it, use the "Download Program" button.

![](<../.gitbook/assets/94 8 En ev3-upload-3 4.png>)

****

**\*\*\***

Experts in EV3 can look at the code generated in the internal EV3 language with the "Generate to EV3 bytecode" button.

![](<../.gitbook/assets/94 9 En ev3-bytecode 4.png>)
