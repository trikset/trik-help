# LEGO NXT Controller Firmware

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

TRIK Studio uses [nxtOSEK](http://lejos-osek.sourceforge.net) firmware as the execution environment for the generated programs, which is compatible in command format and interface appearance with the stock firmware and allows you to run C programs with the ECRobot library.

Before you can load the generated programs on the robot, you have to flash it. You only need to do this once for each robot, unless you use third-party tools that upload their firmware to the robot.

{% hint style="warning" %}
**Warning!** Firmware of the robot requires drivers to be installed.
{% endhint %}

1. Turn the robot on and connect it to your computer via [USB](connect-to-studio.md#usb-connection).
2. Press the "Reset" button on the back of the robot and hold it down for 4 seconds (see the robot manual supplied with the construction kit for details). If done correctly, the robot will tick characteristically.
3. Press the "Flash" button and wait for the system to tell you that the robot has successfully finished flashing the robot.
4. Reboot the robot.

