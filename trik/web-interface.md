# TRIK controller web interface

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

The web interface of the TRIK controller allows:

* Change Wi-Fi settings on the controller.
* Configure the interaction of several controllers.&#x20;
* Change the configuration of sensors, motors, and encoders.&#x20;
* Change the configuration of microelectromechanical systems (gyroscope and accelerometer).
* Start video broadcasting from the controller's camera.&#x20;
* Download the log files.
* View the programs loaded on the controller.&#x20;
* Take screenshots of the controller screen and download them.&#x20;
* Take screenshots from the camera connected to the controller and download them.

## Running the web interface

‌To start the web interface:

1. Connect the TRIK controller to the computer in any of the [possible ways](wi-fi/network-connection.md).
2. Enter the IP address of the controller in the address bar of your browser.

![](<../.gitbook/assets/80 1 En WI-00-In 1 (1).png>)

The IP address of the controller is displayed on the screen after connecting to the network.

![](<../.gitbook/assets/80 2 TRIK-Menu Netw.png>)

## Web interface menu

The web interface menu contains the following items:

1. Network
2. Ports
3. MEMS
4. Video
5. Logs
6. Programs
7. Images

## Network

On the "Network" tab, you can:

* Set the Wi-Fi network parameters for the controller in [Wi-Fi client](wi-fi/network-connection.md#client) access point mode.
* Change the Wi-Fi access point name for the controller in [Wi-Fi access](wi-fi/network-connection.md#accesspoint) point mode.
* Set the controller's board number and the master controller's IP address for [controller communication](wi-fi/interaction/).
* Set the controller's board number and the master controller's IP address for controller communication.

![](<../.gitbook/assets/80 3 En WI-01-Main 1 (1).png>)

## Ports

On the "Ports" tab you can:

* Select the type of power motors to be connected for each port.
* Select the type of connected servomotors for each port.
* Select the type of analog sensors to be connected for each port.
* Select the type of encoders used in the motors for each port, as well as the positive direction of the motor shaft position for each port.
* Select the type of digital encoders to be connected for each port.
* Configure the ports for connecting video cameras.

![](<../.gitbook/assets/80 4 En WI-10-Port.png>)

After changing the settings, press the "Save" button at the bottom of the screen and confirm the action.

![](<../.gitbook/assets/80 5 En WI-24-Save.png>)

### Power Motors

Under "Power Motors" you can select the type of power motors to be connected for each port.

### Servo motors

Under "Servomotors" you can select the type of servomotors to connect for each port.

### Analog sensors

Under "Analog Sensors" you can select the type of analog sensors to be connected for each port.

### Encoders

Under "Encoders" you can select the type of encoders used in the motors for each port, as well as the positive motor shaft position reference direction for each port.

### Distance sensors

Under "Distance sensors" you can select the type of digital sensors to be connected for each port.

### Video1 / Video2

Video ports and video cameras connected to them can operate in the following modes:

* colorSensor3x3 - color sensor mode.
* lineSensor - line sensor mode with color detection.
* photo - the camera is used for capturing photos and video stream.
* edgeLineSensor - line sensor mode with edge detection (works on inverse lines).

![](<../.gitbook/assets/80 6 En WI-22-Video.png>)

## MEMS

The MEMS (microelectromechanical systems) tab allows:

* Enable or disable the gyroscope or accelerometer.
* Select the refresh rate and range of the accelerometer and gyro in "Advanced Settings".

![](<../.gitbook/assets/80 7 En WI-32-MEMS.png>)

To change the configuration, press the "Save" button and confirm the action.

![](<../.gitbook/assets/80 8 En WI-37-MEMS.png>)

## Video broadcast

The "Video broadcasting" tab allows you to watch video from the camera installed on the controller.

To start it, you need to add the "Start video broadcasting" block to the robot's control [program](../gamepad/remote-control.md) from the remote control.

## Logs

The Logs tab displays the controller logs, which can be downloaded for later sending to the [support](https://trikset.com/en/support#feedback) service.

![](<../.gitbook/assets/80 9 En WI-70 LoGs.png>)

## User scripts

The "User scripts" tab displays the programs loaded on the controller.

![](<../.gitbook/assets/80 A En WI-82 Progs2.png>)

You can remove all programs through the controller interface.

![](<../.gitbook/assets/80 B En WI-84 Progs.png>)

![](<../.gitbook/assets/80 C En WI-86 Progs.png>)

## Images

The "Images" tab contains images taken with the connected camera, as well as screenshots of the controller screen.

In the tab you can:

* Take a [screenshot](about/screenshot.md) of the controller screen.
* View and download images received from the controller either individually or all together.
* Delete all existing images (selective deletion is not available).

![](<../.gitbook/assets/80 D En WI-95 Images.png>)

## LOG

The icon<img src="../.gitbook/assets/logs2 (1).png" alt="" data-size="line"> allows you to download log files. Read more in the article "Actions in case of TRIK Studio or TRIK controller malfunction" in the section "[Collecting logs on TRIK controller](../feedback/logging.md#trik)".
