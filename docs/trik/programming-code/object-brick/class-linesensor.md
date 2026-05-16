---
title: "Класс «lineSensor»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «lineSensor»

Видеокамера в режиме датчика линии.

| Метод                                | Описание                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| [detect](#detect) | Определяет доминирующий цвет в вертикальной полосе в центре кадра и запоминает его как цвет линии.                                    |
| [init](#init)     | Включает видеокамеру и инициализирует её в режиме датчика линии.                                                                      |
| [read](#read)     | Возвращает массив с координатой по оси X центра линии относительно центра кадра, вероятность перекрёстка, относительный размер линии. |
| [stop](#stop)     | Выключает видеокамеру и прекращает работу датчика.                                                                                    |

###### ​ {#detect}
## detect

Определяет доминирующий цвет в вертикальной полосе в центре кадра и запоминает его как цвет линии. После этого метод «[read](#read)» начинает возвращать данные для этой линии.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.lineSensor("video1").detect()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.lineSensor("video1").detect();
```
</TabItem>
</Tabs>

###### ​ {#init}
## init

Включает видеокамеру и инициализирует её в режиме датчика линии. Булевый параметр определяет, выводить ли на экран изображение с камеры (`true` — выводить).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.lineSensor("video1").init(True)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.lineSensor("video1").init(true);
```
</TabItem>
</Tabs>

Булевый параметр определяет, выводить ли на экран изображение с камеры:

* `true` — выводить,
* `false` — не выводить.

###### ​ {#read}
## read

Возвращает массив, в ячейках которого находятся следующие данные:

* в нулевой ячейке координата по оси X центра линии относительно центра кадра (от -100 до 100, -100 — центр линии на краю кадра слева);
* в первой ячейке — вероятность перекрёстка (число от 0 до 100, показывающее сколько точек цвета линии находится в горизонтальной полосе в центре кадра);
* во второй ячейке — относительный размер линии, число от 0 до 100 (100 — линия занимает почти весь кадр, 0 — линии нет на кадре).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.lineSensor("video1").read()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.lineSensor("video1").read();
```
</TabItem>
</Tabs>

###### ​ {#stop}
## stop

Выключает видеокамеру и прекращает работу датчика.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.lineSensor("video1").stop()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.lineSensor("video1").stop();
```
</TabItem>
</Tabs>
