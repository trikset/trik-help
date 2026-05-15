---
title: "Класс «objectSensor»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «objectSensor»

Видеокамера в режиме датчика объекта. Захватывает контрастный объект в центре кадра и возвращает его координаты и размер в кадре.

| Метод                                  | Описание                                                                                                                                                                          |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [detect](class-objectsensor.md#detect) | Определяет доминирующий цвет в центре кадра и запоминает его как цвет объекта.                                                                                                    |
| [init](class-objectsensor.md#init)     | Включает видеокамеру и инициализирует её в режиме датчика объекта.                                                                                                                |
| [read](class-objectsensor.md#read)     | Возвращает массив с координатой по оси X центра объекта относительно центра кадра, координатой по оси Y центра объекта относительно центра кадра, относительным размером объекта. |
| [stop](class-objectsensor.md#stop)     | Выключает видеокамеру и прекращает работу датчика.                                                                                                                                |

## detect

Определяет доминирующий цвет в центре кадра и запоминает его как цвет объекта. После этого метод «[read](class-objectsensor.md#read)» начинает возвращать данные для объекта.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.objectSensor().detect()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.objectSensor().detect();
```
</TabItem>
</Tabs>

## init

Включает видеокамеру и инициализирует её в режиме датчика объекта. Булевый параметр определяет, выводить ли на экран изображение с камеры (`true` — выводить).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.objectSensor().init(True)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.objectSensor().init(true);
```
</TabItem>
</Tabs>

Булевый параметр определяет, выводить ли на экран изображение с камеры:

* `true` — выводить,
* `false` — не выводить.

## read

Возвращает массив, в ячейках которого находятся следующие данные:

* в нулевой ячейке координата по оси X центра объекта относительно центра кадра (от -100 до 100, -100 — центр объекта на краю кадра слева);
* в первой ячейке — координата по оси Y центра объекта относительно центра кадра (от -100 до 100, -100 — центр объекта на краю кадра сверху);
* во второй ячейке — относительный размер объекта, число от 0 до 100 (100 — объекта занимает почти весь кадр, 0 — объекта нет на кадре).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.objectSensor().read()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.objectSensor().read();
```
</TabItem>
</Tabs>

## stop

Выключает видеокамеру и прекращает работу датчика.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.objectSensor().stop()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.objectSensor().stop();
```
</TabItem>
</Tabs>


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#detect}
###### ​ {#init}
###### ​ {#read}
###### ​ {#stop}
