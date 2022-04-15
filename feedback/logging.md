# Actions in case of TRIK Studio or TRIK controller malfunction

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

During the operation of TRIK Studio and the TRIK controller, log files are recorded recording the actions of the program and the user.

These files allow us to determine more precisely possible reasons for failures, so we ask you to send them to us together with the description of the problem.

To find out where to get these files, see the corresponding sections:

1. [TRIK Studio Logs](logging.md#trikstudio)
2. [Logs on the TRIK controller](logging.md#trik)

## TRIK Studio Logs <a href="#trikstudio" id="trikstudio"></a>

1\. Open TRIK Studio -> Main Menu -> Help -> Open Logs

Or open Windows Explorer and type in adress bar:

```
%APPDATA%\trik-studio\logs or
%USERPROFILE%\AppData\Roaming\trik-studio\logs
```

{% tabs %}
{% tab title="via TRIK Studio" %}
&#x20;

![](<../.gitbook/assets/C0 1 En TS-Logs1 2.png>)
{% endtab %}

{% tab title="via My Computer" %}
&#x20;

![](<../.gitbook/assets/C0 8 En TS-Logs8 1.png>)
{% endtab %}

{% tab title="via Start Menu" %}
&#x20;

![](<../.gitbook/assets/C0 9 En TS-Logs9 0.png>)
{% endtab %}
{% endtabs %}

2\. In the opened window select all files.

![](<../.gitbook/assets/C0 3 En TS-Logs3 1.png>)

4\. Right-click on the selected files and choose `Send → Compressed ZIP Folder` from the context menu that appears.

![](<../.gitbook/assets/C0 4 En TS-Logs4 1.png>)

5\. Enter a title with the date in the format "YYYYY-MM-DD".

![](<../.gitbook/assets/C0 5 En TS-Logs5 1.png>)

6\. Send us the resulting file via the [feedback](https://trikset.com/en/support#feedback) form. We will review your request and correct the error.

## Collecting logs on the TRIK controller <a href="#trik" id="trik"></a>

{% hint style="info" %}
**Warning!** Logs are collected only if the controller is rebooted unexpectedly.
{% endhint %}

1\. Open your browser.

2\. Enter the [IP address](../trik/wi-fi/) of the robot in the address bar.

3\. Select the "Log" item in the web interface. If the "Log" has the following appearance, you must wait or restart the controller.

![](<../.gitbook/assets/C0 A En web-int 1.png>)

4\. After a while, this icon will appear between the menu and language selection:

![](<../.gitbook/assets/C0 B En web-int2 1.png>)

5\. Left-clicking on this icon will bring up a dialog box for saving the last LOG file:

![](<../.gitbook/assets/C0 D En web-int3 0.png>)

If you need not the last LOG-file, you need to go to the menu item "Onboard Log", select the desired file (by the time of creation) and click on it with the left mouse button.

![](<../.gitbook/assets/C0 E En web-int4 0.png>)

6\. Save the desired file to your computer.

7\. Send it to us via the [feedback](https://trikset.com/en/support#feedback) form. We will review your request and correct the error.
