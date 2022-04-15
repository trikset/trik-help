# Connecting to the TRIK controller using UART

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

In addition to connecting the TRIK controller to the computer using [Wi-Fi](wi-fi/), it can be connected via a USB to UART interface converter based on the chip CP2102:

![](<../.gitbook/assets/Преобразователь USB — UART на CP2102 с проводом - 2.png>)

The connection algorithm is described below.

1. Installing drivers
2. Setting up the COM port
3. Modem installation
4. Modem setup
5. Creating a network connection
6. Setting up a network connection
7. Connecting to the controller

## 1. Installing drivers <a href="#uart-driver" id="uart-driver"></a>

1\. [Download](https://www.silabs.com/documents/public/software/CP210x\_Windows\_Drivers.zip) the drivers from the converter manufacturer's official website: [silabs.com](https://www.silabs.com).\
2\. Unpack the archive and run the driver installer corresponding to your operating system (32 or 64 bit).

![](<../.gitbook/assets/7A 2 En Downloads 2.png>)

3\. After the installation is complete, connect the USB to the UART converter to the computer (without the controller). Wait until the device is detected.

4\. Check in the "Device Manager" if the driver has been installed correctly.

![](<../.gitbook/assets/7A 7 En COM4 2.png>)

5\. If the `CP2102 USB to UART Bridge Controller` shows an exclamation mark in Device Manager, as in the example below, then the device driver is not installed. Repeat the installation procedure, or contact a technician.

![](<../.gitbook/assets/7A 5 En 19a 1.png>)

If the device is not on the Device Manager list, check if the USB port is working and if the device is correctly inserted into the USB port. If the device is connected correctly, the red "POWER" LED on the device should light up.

![](../.gitbook/assets/f2.png)

## 2. Setting up the COM port <a href="#uart-com" id="uart-com"></a>

1\. In the "Device Manager" call the properties of `Silicon Labs CP210x USB to UART Bridge (COMx)`.&#x20;

On the "Port Settings" tab, set:

* Bits per second: 115200.
* Flow Control: No.

![](<../.gitbook/assets/7A 5 En COM1 2.png>)

With the "Advanced" button you can select the number of the COM port, if necessary:

![](<../.gitbook/assets/7A 6 En COM2 2.png>)

![](<../.gitbook/assets/7A 3 En Dev\_mgr.png>)

## 3. Modem installation <a href="#uart-modem1" id="uart-modem1"></a>

Open Windows Control Panel any way

{% tabs %}
{% tab title="via Explorer" %}
&#x20;

![](<../.gitbook/assets/7A 8 En ControlPanel\_Explorer 2.png>)
{% endtab %}

{% tab title=""Run" command (Win+R)" %}
&#x20;

![](<../.gitbook/assets/7A 8 En ControlPanel\_Run 2.png>)
{% endtab %}

{% tab title="Windows Search" %}
&#x20;

![](<../.gitbook/assets/7A 8 En ControlPanel\_Search 2.png>)
{% endtab %}

{% tab title="Start Menu" %}
&#x20;

![](<../.gitbook/assets/7A 8 En ControlPanel\_Start 2.png>)
{% endtab %}
{% endtabs %}

1\. From the Control Panel, select the Phone & Modem section.

![](<../.gitbook/assets/7A 9 En ControlPanel\_mdm 2.png>)

2\. Enter any phone code for the city and press "OK".

![](<../.gitbook/assets/7A A En Location 2.png>)

3\. On the "Modems" tab, click the "Add" button.

![](<../.gitbook/assets/7A B En Add2 2.png>)

4\. Select "Do not detect my modem, I will select it from list" and click "Next".

![](<../.gitbook/assets/7A B En Add2 2 (1).png>)

5\. Select "Standard Modem Types" → "Communications cable between two computers" and click "Next".

![](<../.gitbook/assets/7A B En Add3 2.png>)

6\. Select the previously specified port (COM3 in our example), then click "Next" and "Done".

![](<../.gitbook/assets/7A C En Add3 2.png>)

![](<../.gitbook/assets/7A C En Add4 2.png>)

## 4. Modem setup <a href="#uart-modem2" id="uart-modem2"></a>

1\. Once again, from the Control Panel, select Phone & Modem and click the Modems tab.\
2\. Select "Communications cable between two computers (COM3)" and click "Properties".

![](<../.gitbook/assets/7A D En MDM\_prop1 2.png>)

3\. Press "Change settings" button on General tab, elsewere, the necessary settings will not be available

![](<../.gitbook/assets/7A D En MDM\_prop3 2.png>)

![](<../.gitbook/assets/7A D En MDM\_prop2 2.png>)

4\. The "Modem" tab should correctly display the COM port (COM3).&#x20;

* Set Port Speed: 115200

![](<../.gitbook/assets/7A D En MDM\_prop4 2 (1).png>)

5\. On "Advanced" tab press "Change Default Preferences..." button

![](<../.gitbook/assets/7A D En MDM\_prop5 2.png>)

6\. On "General" tab, set:

* Port Speed: 115200.
* Flow Control: None.

Then click OK - OK.

![](<../.gitbook/assets/7A D En MDM\_prop6 2.png>)

## 5. Creating a network connection <a href="#uart-lan1" id="uart-lan1"></a>

Open Parameters("All Settings")&#x20;→ "Network & Internet" → "Dial-Up" → "Set up a new connection". &#x20;

![](<../.gitbook/assets/7A F En Param2 3.png>)

![](<../.gitbook/assets/7A F En Param1 2.png>)

![](<../.gitbook/assets/7A F En Param3 3.png>)

\
or Control Panel → "Network and Sharing Center" → "Set up a new connection on network"

![](<../.gitbook/assets/7A E En CPL1 2.png>)

![](<../.gitbook/assets/7A E En CPL2 2.png>)

Select "Connect to the Internet - Set up a broadband or dial-up connection to the Internet" and click "Next".

![](<../.gitbook/assets/7A G En Netw5 2.png>)

Setup connection anyway

![](<../.gitbook/assets/7A G En Netw6 2.png>)

Select "Dial-up"

![](<../.gitbook/assets/7A G En Netw7 2.png>)

4\. Enter `1` in the "Number to Dial" field, fill the connection name, and click "Connect".

Leave the username and password fields blank

![](<../.gitbook/assets/7A G En Netw8 2 (1).png>)

5\. Wait for some time, then select "Set up the connection anyway".

![](<../.gitbook/assets/7A G En Netw5a 2.png>)

![](<../.gitbook/assets/7A G En Netw6 2.png>)

6\. Click Close.

![](<../.gitbook/assets/7A G En NetwA 2.png>)

## 6. Setting up a network connection

1\.  Open "Network Connections" (Control Panel → "Network and Sharing Center → "Change adapter settings" or Parameters ("All Settings")&#x20;→ "Network & Internet" →  "Change adapter options").

2\. Go to the properties of the created connection.

![](<../.gitbook/assets/7A H En NetwProp1 2.png>)

3\. On the General tab, select "Communications cable between two computers (COMx)" and click "Configure".

![](<../.gitbook/assets/7A H En NetwProp2 2.png>)

4\. Select the following option:

* Select max. speed: 115200
* Uncheck the "Hardware flow control" box.&#x20;
* Click OK.

![](<../.gitbook/assets/7A H En NetwProp3 2.png>)

5\. On the "Options" tab, check boxes according to the picture below and click the "PPP Settings..." button.

![](<../.gitbook/assets/7A H En NetwProp4 2.png>)

6\. Uncheck "Enable software compression" and click "OK".

![](<../.gitbook/assets/7A H En NetwProp5 2.png>)

7\. On the "Network" tab, the "IPv4" protocol must be enabled. IPv4 options&#x20;→ Automatic (by default)

<img src="../.gitbook/assets/7A H En NetwProp6 2.png" alt="" data-size="original"><img src="../.gitbook/assets/7A H En NetwProp7 2.png" alt="" data-size="original">&#x20;

## 7. Connecting to the controller

1\. Remove the USB to the UART converter from the USB connector.\
2\. Turn on the controller.\
3\. Connect the USB to the UART converter to the appropriate port on the controller.

![](<../.gitbook/assets/UART 7 TRIK 0.png>)

![](<../.gitbook/assets/UART 7 TRIK 0.JPG>)

3\. Connect the USB to UART converter to the computer.

![](<../.gitbook/assets/UART 7 TRIK 0a.jpg>)

4\. Open Parameters ("All Settings")&#x20;→ "Network & Internet" →  "Dial-up". Click on the connection and click the "Connect" button.

![](<../.gitbook/assets/7A I En Connect4 2.png>)

5\. Click "Dial"

![](<../.gitbook/assets/7A I En Connect5 2.png>)

6\. If everything is done correctly, the "RXD" and "TXD" lights on the inverter should flash.

![](<../.gitbook/assets/UART 7 TRIK A (5).png>)

And the connection status should change to active.

![](<../.gitbook/assets/7A I En Connect7 3.png>)

7\. Open the Phone Connection Status window.

![](<../.gitbook/assets/7A I En Connect8 2.png>)

8\. Click the Details button.

![](<../.gitbook/assets/7A I En Connect9 2.png>)

9\. The IPv4 address must be `10.0.5.1` .

![](<../.gitbook/assets/7A I En ConnectA 2.png>)

10\. If this is correct, you can access the [web interface](web-interface.md) at `10.0.5.2`.

![](<../.gitbook/assets/7A I En ConnectB 2.png>)

11\. Or specify the IP address `10.0.5.2` in the corresponding TRIK Studio window to control the controller.

![](<../.gitbook/assets/7A I En ConnectC 2.png>)

