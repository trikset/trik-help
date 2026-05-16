---
title: "Класс «keys»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «keys»

Служит для работы с кнопками на пульте робота.

| Метод                                        | Описание                                                                                             |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [buttonPressed](#buttonpressed) | Посылается, когда кнопка с указанным кодом нажата или отпущена.                                      |
| [isPressed](#ispressed)         | Возвращает true, если кнопка с указанным кодом нажата в данный момент.                               |
| [reset](#reset)                 | Сбрасывает запомненные нажатия кнопок.                                                               |
| [wasPressed](#waspressed)       | Возвращает, была ли нажата кнопка с указанным кодом, сбрасывает запомненные нажатия для этой кнопки. |

###### ​ {#buttonpressed}
## buttonPressed

Посылается, когда кнопка с указанным кодом нажата или отпущена.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.keys().buttonPressed.connect(lambda code, value: brick.stop() if code == KeysEnum.Up else print(code))
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.keys().buttonPressed.connect(function(code, value){if (code==KeysEnum.Up)brick.stop() ; });
```
</TabItem>
</Tabs>

Первый параметр — код кнопки, второй — 1, если кнопка нажата, 0, если отпущена.

###### ​ {#ispressed}
## isPressed

Возвращает `true`, если кнопка с указанным кодом нажата в данный момент.\
Возможные варианты:

* `KeysEnum.Left` (код 105),
* `KeysEnum.Up` (код 103),
* `KeysEnum.Down` (код 108),
* `KeysEnum.Enter` (код 28),
* `KeysEnum.Right` (код 106),
* `KeysEnum.Power` (код 116),
* `KeysEnum.Esc` (код 1).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.keys().isPressed(KeysEnum.Up)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.keys().isPressed(KeysEnum.Up);
```
</TabItem>
</Tabs>

###### ​ {#reset}
## reset

Сбрасывает запомненные нажатия кнопок.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.keys().reset()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.keys().reset();
```
</TabItem>
</Tabs>

###### ​ {#waspressed}
## wasPressed

Возвращает, была ли нажата кнопка с указанным кодом, сбрасывает запомненные нажатия для этой кнопки.\
Возможные варианты:

* `KeysEnum.Left` (код 105),
* `KeysEnum.Up` (код 103),
* `KeysEnum.Down` (код 108),
* `KeysEnum.Enter` (код 28),
* `KeysEnum.Right` (код 106),
* `KeysEnum.Power` (код 116),
* `KeysEnum.Esc` (код 1).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.keys().wasPressed(KeysEnum.Up)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.keys().wasPressed(KeysEnum.Up);
```
</TabItem>
</Tabs>
