# Connecting the TRIK controller to TRIK Studio

1\. Connect the controller to the computer with TRIK Studio installed in either of [two ways](./).

2\. In the TRIK Studio settings, go to the "Robots" section and select the TRIK platform in the "Platforms" window.

![](<../../.gitbook/assets/77 1 En robots 3.png>)

3\. Enter the IP address of the controller in the "TCP Settings" field.

![](<../../.gitbook/assets/77 2 En robots 3.png>)

Also, the controller IP address can be specified on the toolbar:

![](<../../.gitbook/assets/77 3 En trik-ip-address 3.png>)

4\. Click "OK".

## How to check the connection?

Try to [upload](../run-upload-programs.md) a program to the controller.

## What if there is no connection?

If there is no connection to the controller, TRIK Studio will show an error:

![](<../../.gitbook/assets/77 4 En error 3.png>)

In this case check:

1. Whether the IP address in TRIK Studio matches the IP address on the controller.
2. Whether the TRIK controller displays its IP address.\
   \
   The IP address may not exist if the controller is connected to a Wi-Fi network in Wi-Fi client mode, but the router did not issue it. We recommend that you wait for a little or switch to the "Access Point" mode and back in the Wi-Fi client mode.\
   \
   It can also happen in Access Point mode. We recommend turning off the controller for a while and then restarting it.
