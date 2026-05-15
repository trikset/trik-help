---
title: "Объект «mailbox»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

###### ​ {#joinnetwork}
## joinNetwork

Подключается к роботу с заданным IP-адресом по заданному порту (или порту по умолчанию), сообщает ему свой бортовой номер и регистрируется в сети «почтовых ящиков».

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
mailbox.joinNetwork("ip", port, hullNumber)
mailbox.joinNetwork("", port, hullNumber)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
mailbox.joinNetwork("ip", port, hullNumber);
mailbox.joinNetwork("", port, hullNumber);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать IP-адрес робота, порт и бортномер. В случае, если порт не указан, используется порт по умолчанию. Борт номер должен быть положительным числом, начиная с 1.\
Если не указан IP-адрес, но изменен бортномер, то происходит смена бортномера без подключения.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
mailbox.joinNetwork("192.168.77.1", -1, 1)
//Подключение к 192.168.77.1, порту 8889 без смены бортномера
mailbox.joinNetwork("192.168.77.1", -1, 2)
//Подключение к 192.168.77.1, порту 8889 со сменой бортномера на 2
mailbox.joinNetwork("", -1, 2)
//Смена бортномера без подключения
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
mailbox.joinNetwork("192.168.77.1", -1, 1);
//Подключение к 192.168.77.1, порту 8889 без смены бортномера
mailbox.joinNetwork("192.168.77.1", -1, 2);
//Подключение к 192.168.77.1, порту 8889 со сменой бортномера на 2
mailbox.joinNetwork("", -1, 2);
//Смена бортномера без подключения
```
</TabItem>
</Tabs>

###### ​ {#hasmessages}
## hasMessages

Возвращает `true`, если роботу пришло новое сообщение.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
mailbox.hasMessages()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
mailbox.hasMessages();
```
</TabItem>
</Tabs>

###### ​ {#myhullnumber}
## myHullNumber

Возвращает бортовой номер робота.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
x = mailbox.myHullNumber()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var x = mailbox.myHullNumber();
```
</TabItem>
</Tabs>

###### ​ {#newmessage}
## newMessage

Посылает сообщение после получения нового сообщения.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
mailbox.newMessage.connect(lambda sender, message: print(message))
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
mailbox.newMessage.connect(function(sender, message) { print(message); });
```
</TabItem>
</Tabs>

Первый параметр — бортовой номер отправителя, второй — само сообщение.

###### ​ {#receive}
## receive

Получает новое сообщение или блокирует исполнение скрипта до тех пор, пока сообщение не придёт.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
message = mailbox.receive()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var message = mailbox.receive();	
```
</TabItem>
</Tabs>

###### ​ {#send}
## send

Посылает роботу с указанным бортовым номером (или всем роботам) указанное сообщение.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
mailbox.send("message")
mailbox.send(hullNumber, "message")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
mailbox.send("message");
mailbox.send(boardNumber, "message");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать бортовой номер робота, которому хотите послать сообщение и сообщение. Если бортовой номер не указан, то сообщение отправляется всем роботам, зарегистрированным в сети.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
mailbox.send(1, "Hello") # отправка сообщения роботу с бортовым номер 1
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
mailbox.send(1, "Hello"); // отправка сообщения роботу с бортовым номер 1
```
</TabItem>
</Tabs>
