# Connecting a LEGO NXT Controller to TRIK Studio

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

The LEGO NXT controller can be connected to the TRIK Studio using:

1. [USB](connect-to-studio.md#usb).
2. [Bluetooth](connect-to-studio.md#bluetooth).

In each of the two options, you must first select the LEGO NXT platform in the TRIK Studio settings under "Robots".

![](<../.gitbook/assets/98 En 1 NXT-connect usb 3.png>)

## USB connection

[Download](https://le-www-live-s.legocdn.com/downloads/NXT/NXT\_Installer\_2.1.0\_Global\_WIN.zip) drivers from the manufacturer's official website: [education.lego.com](https://education.lego.com/en-us/downloads/retiredproducts/nxt/software) and install it to you system. Only drivers is necessary to work with TRIK Studio.

![](<../.gitbook/assets/NXT Drivers 4.png>)

1\. In the TRIK Studio settings under "Robots" select "Interpretation (USB)" in the "Robot Model" window.

![](<../.gitbook/assets/98 En 2 NXT-connect usb 3.png>)

2\. Connect the LEGO NXT controller to your computer via USB.\
3\. Click the Connect button on the toolbar.

![](<../.gitbook/assets/98 En 3 NXT-connect usb-connect 2.png>)

4\. A message should appear in the output window indicating a successful connection. After that, the robot is ready to work.

![](<../.gitbook/assets/98 En 4 NXT-connect usb-connect 3.png>)

## Bluetooth connection

The robot connects to your computer via Bluetooth as a normal Bluetooth device. No special robot drivers are required for connection.&#x20;

{% hint style="warning" %}
**Warning!** The connection process depends on the operating system and the drivers of the specific Bluetooth adapter.
{% endhint %}

Below are instructions on how to set up a connection for Windows 10 using the drivers built into the OS.

1\. Open "Start" → "Settings" → "Devices".&#x20;

![](<../.gitbook/assets/98 En 7 NXT-connect BT-parameters 3.png>)

2\. In the window that appears, select "Add Bluetooth or other devices".

![](<../.gitbook/assets/98 En 8 NXT-connect BT-add\_dev 3.png>)

3\. Select "Bluetooth".

![](<../.gitbook/assets/98 En 9 NXT-connect BT-add\_dev2.png>)

4\. In the window that appears, select the "NXT" device.

![](<../.gitbook/assets/98 En A NXT-connect BT-add\_dev3.png>)

5\. The robot should display the Bluetooth connection password at this time. You can leave the default password and press the orange button.

![](<../.gitbook/assets/DSCN3135 5.png>)

{% hint style="info" %}
The default password is 1234.
{% endhint %}

6\. After you press the orange button on the robot, a password window should appear on your computer. Enter the password and click "Connect".

![](<../.gitbook/assets/98 En D NXT-connect BT-add\_dev6.png>)

7\. Click "Done".

![](<../.gitbook/assets/98 En E NXT-connect BT-add\_dev7.png>)

8\. From the "Bluetooth or other devices" menu, open "Devices and Printers".

![](<../.gitbook/assets/98 En H NXT-connect BT-dev\&prn 3.png>)

9\. In the list that opens, find the "NXT" device and double-click the icon.

![](<../.gitbook/assets/98 En I NXT-connect BT-dev\&prn2 2.png>)

10\. In the window that appears, go to the "Services" tab and remember the number of the COM port.

![](<../.gitbook/assets/98 En K NXT-connect BT-dev\&prn4 3.png>)

11\. In TRIK Studio in the settings on the "Robots" tab, put a marker next to the LEGO NXT platform and the "Interpret (Bluetooth)" robot model.

In the Bluetooth settings, specify the port from the previous step.

![](<../.gitbook/assets/98 En L NXT-connect BT-TS-COM 2.png>)

12\. Click OK.
