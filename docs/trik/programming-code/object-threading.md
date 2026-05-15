---
title: "Объект «Threading»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Объект «Threading»

Предоставляет управление параллельными потоками.

| Метод                                                | Описание                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------- |
| [joinThread](object-threading.md#jointhread)         | Ожидает завершения указанного потока.                                 |
| [killThread](object-threading.md#killthread)         | Заканчивает исполнение указанного потока.                             |
| [receiveMessage](object-threading.md#receivemessage) | Запрашивает принятое сообщение.                                       |
| [sendMessage](object-threading.md#sendmessage)       | Посылает сообщение указанному потоку.                                 |
| [startThread](object-threading.md#startthread)       | Запускает переданную в качестве параметра функцию в отдельном потоке. |

## joinThread

Ожидает завершения указанного потока.

#### Синтаксис

<Tabs>
<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
Threading.joinThread("threadId")
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать id потока.

## killThread

Заканчивает исполнение указанного потока.

#### Синтаксис

<Tabs>
<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
Threading.killThread("threadId")
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать id потока.

## receiveMessage

Запрашивает принятое сообщение.

#### Синтаксис

<Tabs>
<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
Threading.receiveMessage(wait)
```
</TabItem>
</Tabs>

Если `wait` равен `true`, то ожидает, пока не придет сообщение.

## sendMessage

Посылает сообщение указанному потоку.

#### Синтаксис

<Tabs>
<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
Threading.sendMessage("threadId", "message")
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать id потока и сообщение.

## startThread

Запускает переданную в качестве параметра функцию в отдельном потоке.

:::warning
**Внимание!** При этом создаётся новая копия для всех глобальных переменных. Так что если в одном потоке значение переменной меняется, в другом потоке оно остаётся старым.
:::

#### Синтаксис

<Tabs>
<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
Threading.startThread("newThreadId", "functionName")
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать id потока и функцию.


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#jointhread}
###### ​ {#killthread}
###### ​ {#receivemessage}
###### ​ {#sendmessage}
###### ​ {#startthread}
