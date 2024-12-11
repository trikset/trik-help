# Объект «mailbox»

Реализует связь между роботами в сети посредством механизма почтовых ящиков.

| Метод                                          | Описание                                                                                                                                                                   |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [joinNetwork](object-mailbox.md#joinnetwork)   | Подключается к роботу с заданным IP-адресом по заданному порту (или порту по умолчанию)номеру. Сообщает ему свой бортовой номер и регистрируется в сети «почтовых ящиков». |
| [hasMessages](object-mailbox.md#hasmessages)   | Возвращает **`true`**, если роботу пришло новое сообщение.                                                                                                                 |
| [myHullNumber](object-mailbox.md#myhullnumber) | Возвращает бортовой номер робота.                                                                                                                                          |
| [newMessage](object-mailbox.md#newmessage)     | Посылает сообщение после получения сообщения.                                                                                                                              |
| [receive](object-mailbox.md#receive)           | Получает новое сообщение или блокирует исполнение скрипта до тех пор, пока сообщение не придёт.                                                                            |
| [send](object-mailbox.md#send)                 | Посылает роботу с указанным бортовым номером (или всем роботам) указанное сообщение.                                                                                       |

## joinNetwork

Подключается к роботу с заданным IP-адресом по заданному порту (или порту по умолчанию), сообщает ему свой бортовой номер и регистрируется в сети «почтовых ящиков».

#### Синтаксис

{% tabs %}
{% tab title="Python" %}
```python
mailbox.joinNetwork("ip", port, hullNumber)
mailbox.joinNetwork("", port, hullNumber)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.joinNetwork("ip", port, hullNumber);
mailbox.joinNetwork("", port, hullNumber);
```
{% endtab %}
{% endtabs %}

В качестве параметров необходимо указать IP-адрес робота, порт и бортномер. В случае, если порт не указан, используется порт по умолчанию.\
Если не указан IP-адрес, но изменен бортномер, то происходит смена бортномера без подключения.

#### Пример

{% tabs %}
{% tab title="Python" %}
```python
mailbox.joinNetwork("192.168.77.1", -1, -1)
//Подключение к 192.168.77.1, порту 8889 без смены бортномера
mailbox.joinNetwork("192.168.77.1", -1, 2)
//Подключение к 192.168.77.1, порту 8889 со сменой бортномера на 2
mailbox.joinNetwork("", -1, 2)
//Смена бортномера без подключения
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.joinNetwork("192.168.77.1", -1, -1);
//Подключение к 192.168.77.1, порту 8889 без смены бортномера
mailbox.joinNetwork("192.168.77.1", -1, 2);
//Подключение к 192.168.77.1, порту 8889 со сменой бортномера на 2
mailbox.joinNetwork("", -1, 2);
//Смена бортномера без подключения
```
{% endtab %}
{% endtabs %}

## hasMessages

Возвращает `true`, если роботу пришло новое сообщение.

#### Синтаксис

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

Возвращает бортовой номер робота.

#### Синтаксис

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

Посылает сообщение после получения нового сообщения.

#### Синтаксис

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

Первый параметр — бортовой номер отправителя, второй — само сообщение.

## receive

Получает новое сообщение или блокирует исполнение скрипта до тех пор, пока сообщение не придёт.

#### Синтаксис

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

Посылает роботу с указанным бортовым номером (или всем роботам) указанное сообщение.

#### Синтаксис

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

В качестве параметра необходимо указать бортовой номер робота, которому хотите послать сообщение и сообщение. Если бортовой номер не указан, то сообщение отправляется всем роботам, зарегистрированным в сети.

#### Пример

{% tabs %}
{% tab title="Python" %}
```python
mailbox.send(1, "Hello") # отправка сообщения роботу с бортовым номер 1
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
mailbox.send(1, "Hello"); // отправка сообщения роботу с бортовым номер 1
```
{% endtab %}
{% endtabs %}
