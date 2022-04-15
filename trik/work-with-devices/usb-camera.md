# Configuring the operation of a USB camera with a TRIK controller

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

{% hint style="info" %}
The following describes how to set up the USB camera in `lineSensor` mode.
{% endhint %}

To work with the USB camera, you must change the path to the script in the `system-config.xml` file on the TRIK controller.

This can be done with either of the two utilities:

1. [PuTTY](usb-camera.md#putty).
2. [WinSCP](usb-camera.md#winscp).

## **PuTTy**

1\. [Connect](../wi-fi/network-connection.md) to the controller using "Wi-Fi Access Point" or "Wi-Fi Client" mode.

2\. Open [TRIK Studio](https://trikset.com/products/trik-studio).

3\. Launch the PuTTY utility. To do this, from the main menu, open `Tools → External tools → PuTTY`.&#x20;

![](<../../.gitbook/assets/84 1 En putty.png>)

4\. Enter the [IP address of the controller ](../wi-fi/network-connection.md)(specified in the network parameters of the controller) and click "Open".

![](../../.gitbook/assets/putty-connect-1.png)

5\. In the window that appears, enter `root`. Leave the "Password" field blank.

![](https://thumb.tildacdn.com/tild3861-3830-4335-a564-363035666666/-/resize/699x/-/format/webp/putty-login.png)

6\. Enter the command `cd trik` to navigate to the corresponding directory

![](https://thumb.tildacdn.com/tild3662-6661-4062-b235-343236393938/-/resize/699x/-/format/webp/putty-4.png)

7\. Use the **vi** editor to edit the file. To run it, type `vi system-config.xml`.

![](https://thumb.tildacdn.com/tild3034-3532-4566-b363-313431643761/-/resize/699x/-/format/webp/putty-5.png)

8\. Use the arrow keys on your keyboard to move to line 62.

![](https://thumb.tildacdn.com/tild6561-6166-4263-a566-306666653637/-/resize/991x/-/format/webp/putty-6.png)

```markup
Resolution: 240x320 depth 16
Converting image from 16
Now writing PNG file (compression -1)
```

9\. Press `i` to edit, find the script name `line-sensor-ov7670` and correct it to `line-sensor-webcam`.&#x20;

![](https://thumb.tildacdn.com/tild3832-3730-4932-b738-326130613933/-/resize/699x/-/format/webp/putty-7.png)

10\. To exit edit mode, press "Esc".

11\. Enter the command `:wq` and press "Enter" to save and exit the **vi** editor.

## **WinSCP**

1\. In the directory with the installed TRIK Studio, go to the `winscp` folder and run **WinSCP.exe**.

2\. Fill in the data:

* **File protocol:** SCP.
* **Host name —** [IP address of the controller](../wi-fi/network-connection.md).
* **User name:** root.

Leave the "Password" field blank.

![](https://thumb.tildacdn.com/tild6161-3062-4962-a166-356230363430/-/resize/660x/-/format/webp/winscp-login.png)

3\. Press the "Login" button.

4\. If the "Warning" window appears, click "Yes".&#x20;

![](https://thumb.tildacdn.com/tild3362-6265-4165-b362-336330666634/-/resize/501x/-/format/webp/winscp-warning.png)

5\. Navigate to the `trik` folder.

![](https://thumb.tildacdn.com/tild3763-6232-4062-b462-653464393534/-/format/webp/winscp-3.png)

6\. Find and open the `system-config.xml` file.

![](https://thumb.tildacdn.com/tild6262-6364-4561-a635-613539643634/-/format/webp/winscp-4.png)

7\. On line 62 of the file that opens, find the name of the script `line-sensor-ov7670` and correct it to `line-sensor-webcam`.&#x20;

![](../../.gitbook/assets/winscp-5.png)

8\. Save your changes by pressing `Ctrl+S` or the "floppy" icon in the upper left corner, and close the editor.

![](https://thumb.tildacdn.com/tild6361-3939-4933-b334-373161656265/-/resize/488x/-/format/webp/winscp-7.png)
