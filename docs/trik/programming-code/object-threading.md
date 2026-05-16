---
title: "Объект «Threading»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Объект «Threading»

Предоставляет управление параллельными потоками.

| Метод                                                | Описание                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------- |
| [joinThread](#jointhread)         | Ожидает завершения указанного потока.                                 |
| [killThread](#killthread)         | Заканчивает исполнение указанного потока.                             |
| [receiveMessage](#receivemessage) | Запрашивает принятое сообщение.                                       |
| [sendMessage](#sendmessage)       | Посылает сообщение указанному потоку.                                 |
| [startThread](#startthread)       | Запускает переданную в качестве параметра функцию в отдельном потоке. |

###### ​ {#jointhread}
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

###### ​ {#killthread}
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

###### ​ {#receivemessage}
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

###### ​ {#sendmessage}
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

###### ​ {#startthread}
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
