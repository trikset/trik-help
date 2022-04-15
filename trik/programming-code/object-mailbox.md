# Object «mailbox»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

It implements communication between robots in the network by means of the mailbox mechanism.

| Method                                         | Description                                                                                                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [connect](object-mailbox.md#connect)           | Connects to the robot with a given IP address on a given port (or default port), gives it its on-board number, and registers with the "mailbox" network. |
| [hasMessages](object-mailbox.md#hasmessages)   | Returns `true` if the robot received a new message.                                                                                                      |
| [myHullNumber](object-mailbox.md#myhullnumber) | Returns the onboard number of the robot.                                                                                                                 |
| [newMessage](object-mailbox.md#newmessage)     | Sends a message after receiving a message.                                                                                                               |
| [receive](object-mailbox.md#receive)           | Gets a new message or blocks script execution until the message arrives.                                                                                 |
| [send](object-mailbox.md#send)                 | Sends the specified message to the robot with the specified board number (or all robots).                                                                |

## connect

Connects to the robot with a given IP address on a given port (or default port), gives it its on-board number, and registers with the "mailbox" network.

#### Syntax

{% tabs %}
{% tab title="Python" %}
```python
mailbox.connect("ipAddress")
mailbox.connect("ipAddress", port)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.connect("ipAddress");
mailbox.connect("ipAddress", port);
```
{% endtab %}
{% endtabs %}

As parameters, you must specify the IP address of the robot and the port. If no port is specified, the default port is used.

#### Example

{% tabs %}
{% tab title="Python" %}
```python
mailbox.connect("192.168.0.20", 8889)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.connect("192.168.0.20", 8889);
```
{% endtab %}
{% endtabs %}

## hasMessages

Returns `true` if the robot received a new message.

#### Syntax

{% tabs %}
{% tab title="Python" %}
```python
mailbox.hasMessages()
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.hasMessages();
```
{% endtab %}
{% endtabs %}

## myHullNumber

Returns the onboard number of the robot.

#### Syntax

{% tabs %}
{% tab title="Python" %}
```python
x = mailbox.myHullNumber()
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
var x = mailbox.myHullNumber();
```
{% endtab %}
{% endtabs %}

## newMessage

Sends a message after receiving a message.

#### Syntax

{% tabs %}
{% tab title="Python" %}
```python
mailbox.newMessage.connect(lambda sender, message: print(message))
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.newMessage.connect(function(sender, message) { print(message); });
```
{% endtab %}
{% endtabs %}

The first parameter is the sender's onboard number, the second is the message itself.

## receive

Gets a new message or blocks script execution until the message arrives.

#### Syntax

{% tabs %}
{% tab title="Python" %}
```python
message = mailbox.receive()
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
var message = mailbox.receive();	
```
{% endtab %}
{% endtabs %}

## send

Sends the specified message to the robot with the specified board number (or all robots).

#### Syntax

{% tabs %}
{% tab title="Python" %}
```python
mailbox.send("message")
mailbox.send(boardNumber, "message")
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.send("message");
mailbox.send(boardNumber, "message");
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the on-board number of the robot to which you want to send the message and the message. If no on-board number is specified, the message is sent to all robots registered in the network.

#### Example

{% tabs %}
{% tab title="Python" %}
```python
mailbox.send(1, "Hello") # Sending a message to a robot with board number 1
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.send(1, "Hello"); // Sending a message to a robot with board number 1
```
{% endtab %}
{% endtabs %}
