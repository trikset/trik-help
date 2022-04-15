# Object «Threading»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Provides management of parallel threads.

| Method                                               | Description                                                   |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| [joinThread](object-threading.md#jointhread)         | Waiting for the specified flow to complete.                   |
| [killThread](object-threading.md#killthread)         | Finishes the execution of the specified flow.                 |
| [receiveMessage](object-threading.md#receivemessage) | Queries the received message.                                 |
| [sendMessage](object-threading.md#sendmessage)       | Sends a message to the specified stream.                      |
| [startThread](object-threading.md#startthread)       | Runs the function passed as a parameter in a separate thread. |

## joinThread

Waiting for the specified flow to complete.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
Threading.joinThread("threadId");
```
{% endtab %}
{% endtabs %}

As a parameter, it is necessary to specify thread id.

## killThread

Finishes the execution of the specified flow.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
Threading.killThread("threadId");
```
{% endtab %}
{% endtabs %}

The thread id must be specified as a parameter.

## receiveMessage

Queries the received message.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
Threading.receiveMessage(wait);
```
{% endtab %}
{% endtabs %}

If `wait` is `true`, it waits until a message arrives.

## sendMessage

Sends a message to the specified stream.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
Threading.sendMessage("threadId", "message");
```
{% endtab %}
{% endtabs %}

As parameters, it is necessary to specify thread id and message.

## startThread

Runs the function passed as a parameter in a separate thread.

{% hint style="warning" %}
**Warning!** This creates a new copy for all global variables. So if the value of a variable change in one thread, it stays the same in another thread.
{% endhint %}

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
Threading.startThread("newThreadId", "functionName");
```
{% endtab %}
{% endtabs %}

As parameters, it is necessary to specify thread id and function.
