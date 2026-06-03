---
title: "Класс «irCamera»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «irCamera»

Предоставляет доступ к инфракрасному датчику MLX90640, подключенному по шине I2C, в режиме камеры и сенсора.

| Метод                                      | Описание                                                                               |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| [init](#init)             | Инициализирует ИК-камеру и запускает захват кадров.                                    |
| [getImage](#getImage)     | Возвращает цветное изображение в виде массива байтов.                                  |
| [readSensor](#readSensor) | Возвращает среднее значение температуры в специальной шкале в указанном участке кадра. |
| [stop](#stop)             | Останавливает захват кадров.                                                           |

###### ​ {#init}
## init

Инициализирует инфракрасную камеру и запускает захват кадров.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.irCamera().init()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.irCamera().init();
```
</TabItem>
</Tabs>

###### ​ {#getImage}
## getImage

Возвращает цветное изображение ширины `32` и высоты `24` пикселя в виде массива байтов в формате «rgb32».

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
image = brick.irCamera().getImage()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var image = brick.irCamera().getImage();
```
</TabItem>
</Tabs>

#### Пример

Вывод изображения на экран.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
image = brick.irCamera().getImage()
brik.display().show(image, 32, 24, "rgb32")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var image = brick.irCamera().getImage();
brik.display().show(image, 32, 24, "rgb32");
```
</TabItem>
</Tabs>

###### ​ {#readSensor}
## readSensor

Возвращает среднее значение температуры в специальной шкале в указанном участке кадра.

Кадр делится на квадраты сеткой, по умолчанию `3` на `3`, размерность сетки можно задать в `model-config.xml` на роботе. Квадраты индексируются с `1`. То есть `(1, 1)` — это левый верхний край кадра, `(2, 2)` — его центр.

Возвращаемое значение — среднее значение температуры в указанном квадрате в следующей шкале:

* Значение меньше `0` — камера не инициализирована
* `0` — соответствует температуре льда из морозильной камеры и ниже
* `1` — соответствует температуре воды из холодильника
* `2` — соответствует температуре в помещении
* `3` — соответствует температуре тела человека
* `4` — соответствует температуре тёплой воды
* `5` — соответствует температуре горячей (близкой к температуре кипения) воды
* `6` — соответствует температуре больше температуры кипения воды

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
temp = brick.irCamera().readSensor(x, y)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var temp = brick.irCamera().readSensor(x, y);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать индексы квадрата `x` и `y`.

###### ​ {#stop}
## stop

#### Синтаксис

Останавливает захват кадров до следующего вызова `init()`.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.irCamera().stop()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.irCamera().stop();
```
</TabItem>
</Tabs>
