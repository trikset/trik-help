# Interaction of TRIK controllers

TRIK controllers can interact with each other, which makes it possible to solve [problems](interaction-example.md) of transferring messages between robots.

For the interaction of controllers, it will be necessary to select a **master** controller — the one to which we will connect the rest of the controllers. And also connect all controllers to one network. This can be done in two ways:

1\. Using the existing network.

![](<../../../.gitbook/assets/78 1 En connection-on-wifi.png>)

2\. By creating a Wi-Fi access point on one of the controllers.

![](<../../../.gitbook/assets/78 2 En connection-on-robot.png>)

## Method 1. Interaction using an existing Wi-Fi network

1\. Select a **master** controller and connect it to an existing Wi-Fi network in [client mode](../network-connection.md#client).

2\. In the [web interface](../../web-interface.md) of the **master** controller, in the "Interaction of robots" field, specify the tail number (usually for the master it is 01, but any other is possible) and its IP address.

![](<../../../.gitbook/assets/78 3 En configurator-main (1).png>)

3\. Connect **all** other controllers to the same Wi-Fi network in [client mode](../network-connection.md#client).

4\. Specify for each of them in your web interfaces in the "Interaction of robots" field the tail number (different from the others) and the IP address of the **master** controller.

![](<../../../.gitbook/assets/78 4 En configurator-other.png>)

{% hint style="info" %}
Also, the flight number and IP address of the **master** controller can be specified on the controller in the `Interaction` menu item.
{% endhint %}

4\. On all controllers go to the `Interaction` menu item and click the "Connect" button. The <img src="../../../.gitbook/assets/mailboxConnected.png" alt="" data-size="line"> icon should appear in the upper right corner of the controller screens.

![](<../../../.gitbook/assets/78 5 En trik-connected.png>)

## Method 2. Interaction using a Wi-Fi access point on one of the controllers

### Actions with the master controller

1\. Select a **master** controller and share Wi-Fi from it using [access point mode](../network-connection.md#accesspoint) (select `Network → Wi-Fi access point` in the menu).

![](<../../../.gitbook/assets/78 7 En trik-wi-fi-accesspoint.png>)

2\. Next, return to the main menu screen and select `Interaction`.

![](<../../../.gitbook/assets/78 A En Главный экран - взаимодействие.png>)

3\. Specify the tail number (usually for the **master** it is 01, but any other is possible) and its IP address.

![](<../../../.gitbook/assets/78 B En Взаимодействие.png>)

### Actions with other controllers

4\. Connect the rest of the controllers to the master using the [Wi-Fi client mode](../network-connection.md#accesspoint). To do this, in the web interface of each controller, in the "Wi-Fi client" fields, specify the name and password of the network of the **master** controller.

5\. Open the web interface using the IP address displayed on the controller in Wi-Fi client mode.

6\. Specify for each of the controllers in their web interfaces in the "Interaction of robots" field the tail number (different from others) and the IP address of the **master** controller.

![](<../../../.gitbook/assets/78 C En configurator-other.png>)

{% hint style="info" %}
Also, the flight number and IP address of the **master** controller can be specified on the controller in the `Interaction` menu item.
{% endhint %}

### Action with all controllers

7\.  On all controllers go to the `Interaction` menu item and click the "Connect" button. An <img src="../../../.gitbook/assets/mailboxConnected.png" alt="" data-size="line">icon should appear in the upper right corner of the controller screens.

![](<../../../.gitbook/assets/78 D En trik-connected.png>)

{% content-ref url="interaction-example.md" %}
[interaction-example.md](interaction-example.md)
{% endcontent-ref %}

