---
title: "Класс «motor»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «motor»

Предоставляет управление мотором робота (силовым или сервомотором), подключающимся к портам M1, …, M4, S1, ..., S6.

| Метод                               | Описание                                                        |
| ----------------------------------- | --------------------------------------------------------------- |
| [brake](class-motor.md#brake)       | Блокировка моторов для торможения в течение указанного времени. |
| [power](class-motor.md#power)       | Возвращает текущую мощность мотора.                             |
| [powerOff](class-motor.md#poweroff) | Выключает мотор.                                                |
| [setPower](class-motor.md#setpower) | Включает мотор с указанной мощностью.                           |

## brake

Блокировка моторов для торможения в течение указанного времени в миллисекундах. Функция асинхронная, то есть не блокирующая (после ее вызова программа переходит к следующему действию, а не ожидает указанное время торможения).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.motor(motorName).brake(durationMs)
brick.motor("motorName").brake(durationMs)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.motor(motorName).brake(durationMs);
brick.motor("motorName").brake(durationMs);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать время в миллисекундах. По умолчанию (если параметр не указан), моторы блокируются на 500 миллисекунд.

При написании алгоритма учитывайте, что после блокировки подача тока на двигатели выключается, поэтому необходимо дождаться этого состояния прежде чем подавать новую мощность на двигатели.&#x20;

## power

Возвращает текущую мощность мотора (от -100 до 100).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
pow1 = brick.motor(motorName).power()
pow2 = brick.motor("motorName").power()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var pow1 = brick.motor(motorName).power();
var pow2 = brick.motor("motorName").power();
```
</TabItem>
</Tabs>

## powerOff

Выключает мотор. Перестает подавать на него питание, но мотор может продолжить свободное вращение по инерции или под действием иных внешних сил.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.motor(motorName).powerOff()
brick.motor("motorName").powerOff()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.motor(motorName).powerOff();
brick.motor("motorName").powerOff();
```
</TabItem>
</Tabs>

## setPower

Включает мотор с указанной мощностью.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.motor(motorName).setPower(power)
brick.motor("motorName").setPower(power)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.motor(motorName).setPower(power);
brick.motor("motorName").setPower(power);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать мощность.Мощность задаётся в диапазоне от -100 («полный назад») до 100 («полный вперёд»). 0 соответствует `force break`, то есть мотор останавливается, при этом он заблокирован и остаётся под напряжением.


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#brake}
###### ​ {#power}
###### ​ {#poweroff}
###### ​ {#setpower}
