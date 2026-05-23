---
title: "Объект «gamepad»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Объект «gamepad»

Служит для работы с программируемым пультом управления «[TRIK Gamepad](/gamepad/about/)».

| Метод                                                  | Описание                                                                                                             |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| [buttonWasPressed](#buttonwaspressed) | Возвращает `true`, если на пульте была нажата кнопка с указанным номером.                                            |
| [isPadPressed](#ispadpressed)         | Возвращает, нажата ли в данный момент область управления на пульте.                                                  |
| [padX](#padx)                         | Если указанная область управления на пульте нажата, возвращает текущую координату нажатия по оси X.                  |
| [padY](#pady)                         | Если указанная область управления на пульте нажата, возвращает текущую координату нажатия по оси Y.                  |
| [padUp](#padup)                       | Посылается, когда пользователь оторвал палец от области управления с указанным номером.                              |
| [reset](#reset)                       | Сбрасывает запомненные события от пульта.                                                                            |
| [wheel](#wheel)                       | Если на пульте включён «руль» (события от акселерометра устройства), возвращает текущий наклон пульта.               |
| [wheelEvent](#wheelevent)             | Посылается, когда на пульте включён «руль» (события от акселерометра устройства) и пользователь повернул устройство. |

| Сигнал                                     | Описание                                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| [button](#button)         | Посылается, когда пользователь нажал на одну из пяти кнопок внизу пульта.                         |
| [connected](#connected)   | Посылается при подключении пульта к роботу.                                                       |
| [disconnect](#disconnect) | Посылается при отключении пульта.                                                                 |
| [pad](#pad)               | Посылается, когда пользователь нажал на область управления на пульте или переместил палец по ней. |

###### ​ {#button}
## button

Посылается, когда пользователь нажал на одну из пяти кнопок внизу пульта.

###### ​ {#buttonwaspressed}
## buttonWasPressed

Возвращает `true`, если на пульте была нажата кнопка с указанным номером. Сбрасывает запомненное нажатие для этой кнопки.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
gamepad.buttonWasPressed(buttonNumber)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.buttonWasPressed(buttonNumber);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать номер кнопки — от 1 до 5.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
gamepad.buttonWasPressed(5)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.buttonWasPressed(5);
```
</TabItem>
</Tabs>

###### ​ {#connected}
## connected

Посылается при подключении пульта к роботу.

###### ​ {#disconnect}
## disconnect

Посылается при отключении пульта.

###### ​ {#ispadpressed}
## isPadPressed

Возвращает, нажата ли в данный момент область управления на пульте. Области управления имеют номера 0 и 1.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
gamepad.isPadPressed(padId)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.isPadPressed(padId);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать номер области управления — 0 или 1.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
gamepad.isPadPressed(1)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.isPadPressed(1);
```
</TabItem>
</Tabs>

###### ​ {#pad}
## pad

Посылается, когда пользователь нажал на область управления на пульте или переместил палец по ней.

###### ​ {#padx}
## padX

Если указанная область управления на пульте нажата, возвращает текущую x-координату нажатия.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
gamepad.padX(padId)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
gamepad.padX(padId);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать — номер области управления `padId`_._

###### ​ {#pady}
## padY

Если указанная область управления на пульте нажата, возвращает текущую y-координату нажатия.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
gamepad.padY(padId)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
gamepad.padY(padId);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать — номер области управления `padId`_._

###### ​ {#padup}
## padUp

Посылается, когда пользователь оторвал палец от области управления с указанным номером.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
gamepad.padUp.connect(lambda padId, x, y: brick.stop())
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.padUp.connect( function(padId, x, y) { brick.stop(); });
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать:

* `padId` — номер области управления.
* `x`, `y` — координаты последнего известного нажатия от -100 до 100. Координата (-100, -100) соответствует левому верхнему углу области управления.

###### ​ {#reset}
## reset

Сбрасывает запомненные события от пульта.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
gamepad.reset()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.reset();
```
</TabItem>
</Tabs>

###### ​ {#wheel}
## wheel

Если на пульте включён «руль» (события от акселерометра устройства), возвращает текущий наклон пульта.

Наклон кодируется числом от -100 до 100, -100 соответствует крайнему левому положению «руля», 100 — крайнему правому.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
gamepad.wheel()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
gamepad.wheel();
```
</TabItem>
</Tabs>

###### ​ {#wheelevent}
## wheelEvent

Посылается, когда на пульте включён «руль» (события от акселерометра устройства) и пользователь повернул устройство.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
gamepad.wheelEvent.connect(lambda percent: brick.motor("E1").setPower(percent))
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
gamepad.wheelEvent.connect(function(percent) { brick.motor("E1").setPower(percent); });
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать число от -100 до 100, -100 соответствует крайнему левому положению «руля», 100 — крайнему правому.
