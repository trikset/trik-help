# Class «encoder»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Represents power motor encoders connected to ports E1, E2, E3, E4.

| Method                                      | Description                                                           |
| ------------------------------------------- | --------------------------------------------------------------------- |
| [read](class-encoder.md#read)               | Returns the current encoder reading in degrees on the specified port. |
| [reset](class-encoder.md#reset)             | Resets the current encoder reading to 0.                              |
| [readRawData](class-encoder.md#readrawdata) | Returns the current encoder reading in "ticks" on the specified port. |

## read

Returns the current encoder reading in degrees on the specified port.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(portName).read();
brick.encoder("portName").read();
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(portName).read();
brick.encoder("portName").read();
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the port.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(E1).read();
brick.encoder("E2").read();
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(E1).read();
brick.encoder("E2").read();
```
{% endtab %}
{% endtabs %}

## reset

Resets the current encoder reading to 0.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(portName).reset();
brick.encoder("portName").reset();
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(portName).reset();
brick.encoder("portName").reset();
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the port.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(E1).reset();
brick.encoder("E2").reset();
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(E1).reset();
brick.encoder("E2").reset();
```
{% endtab %}
{% endtabs %}

## readRawData

Returns the current encoder reading in "ticks" on the specified port.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(portName).readRawData();
brick.encoder("portName").readRawData();
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(portName).readRawData();
brick.encoder("portName").readRawData();
```
{% endtab %}
{% endtabs %}

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
brick.encoder(E1).readRawData();
brick.encoder("E2").readRawData();
```
{% endtab %}

{% tab title="Python" %}
```
brick.encoder(E1).readRawData();
brick.encoder("E2").readRawData();
```
{% endtab %}
{% endtabs %}
