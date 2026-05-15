---
title: "Объект «brick»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Объект «brick»

Объект «brick» представляет контроллер ТРИК и предоставляет доступ к устройствам робота.

| Метод                             | Описание                                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [accelerometer](./#accelerometer) | Предоставляет доступ к акселерометру.                                                                         |
| [battery](./#battery)             | Предоставляет доступ к информации об аккумуляторе.                                                            |
| [colorSensor](./#colorsensor)     | Предоставляет доступ к датчику цвета по видеокамере.                                                          |
| [display](./#display)             | Предоставляет доступ к дисплею робота.                                                                        |
| [encoder](./#encoder)             | Предоставляет доступ к энкодеру на указанном порту.                                                           |
| [getStillImage](./#getstillimage) | Получить фотографию с камеры в виде массива байт.                                                             |
| [gyroscope](./#gyroscope)         | Предоставляет доступ к гироскопу.                                                                             |
| [keys](./#keys)                   | Предоставляет доступ к кнопкам на корпусе робота.                                                             |
| [playSound](./#playsound)         | Проиграть звуковой файл.                                                                                      |
| [playTone](./#playtone)           | Проиграть звук с заданной частотой.                                                                           |
| [led](./#led)                     | Предоставляет доступ к светодиоду на корпусе робота.                                                          |
| [lineSensor](./#linesensor)       | Предоставляет доступ к датчику линии по видеокамере.                                                          |
| [motor](./#motor)                 | Предоставляет доступ к мотору на указанном порту.                                                             |
| [objectSensor](./#objectsensor)   | Предоставляет доступ к датчику объекта по видеокамере.                                                        |
| [say](./#say)                     | Произнести переданную как параметр строку (на русском или английском языке).                                  |
| [sensor](./#sensor)               | Предоставляет доступ к сенсору на указанном порту.                                                            |
| [stop](./#stop)                   | Останавливает все моторы и активные датчики, убирает нарисованное на дисплее.                                 |
| [marker](./#marker)               | Предоставляет доступ к рисованию маркером заданного цвета на полу. Доступен только в режиме двумерной модели. |
| [irCamera](./#ircamera)           | Предоставляет доступ к инфракрасному датчику.                                                                 |

## accelerometer

Предоставляет доступ к акселерометру (класс «[Accelerometer](class-accelerometer.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.accelerometer();
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript "}>
```javascript
brick.accelerometer();
```
</TabItem>
</Tabs>

## battery

Предоставляет доступ к информации об аккумуляторе.(класс «[Battery](class-battery.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.battery();
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.battery();
```
</TabItem>
</Tabs>

## colorSensor

Предоставляет доступ к датчику цвета по видеокамере (класс «[ColorSensor](class-colorsensor.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.colorSensor("video1")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.colorSensor("video1");
```
</TabItem>
</Tabs>

## display

Предоставляет доступ к дисплею робота (класс «[Display](class-display.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.display()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display();
```
</TabItem>
</Tabs>

## encoder

Предоставляет доступ к энкодеру на указанном порту (класс «[Encoder](class-encoder.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(portName)
brick.encoder("portName")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(portName);
brick.encoder("portName");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать порт.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(E1) # вызов энкодера на порту E1
brick.encoder("E2") # вызов энкодера на порту E2
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(E1); // вызов энкодера на порту E1
brick.encoder("E2"); // вызов энкодера на порту E2
```
</TabItem>
</Tabs>

## getStillImage

Получить фотографию с камеры в виде массива байт.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.getStillImage()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.getStillImage();
```
</TabItem>
</Tabs>

## gyroscope

Предоставляет доступ к гироскопу (класс «[Gyroscope](class-gyroscope.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.gyroscope();
```
</TabItem>
</Tabs>

## keys

Предоставляет доступ к кнопкам на корпусе робота (класс «[Keys](class-keys.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.keys()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.keys();
```
</TabItem>
</Tabs>

## led

Предоставляет доступ к светодиоду на корпусе робота (класс «[Led](class-led.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.led()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.led();
```
</TabItem>
</Tabs>

## lineSensor

Предоставляет доступ к датчику линии по видеокамере (класс «[LineSensor](class-linesensor.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.lineSensor("video1")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.lineSensor("video1");
```
</TabItem>
</Tabs>

## motor

Предоставляет доступ к мотору (силовому или сервомотору) на указанном порту (класс «[Motor](class-motor.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.motor(motorName)
brick.motor("motorName")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.motor(motorName);
brick.motor("motorName");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать порт.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.motor(M1) # вызов мотора на порту M1
brick.motor("M2") # вызов мотора на порту M2
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.motor(M1) // вызов мотора на порту M1
brick.motor("M2") // вызов мотора на порту M2
```
</TabItem>
</Tabs>

## objectSensor

Предоставляет доступ к датчику объекта по видеокамере (класс «[ObjectSensor](class-objectsensor.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.objectSensor()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.objectSensor();
```
</TabItem>
</Tabs>

## playSound

Проиграть звуковой файл.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.playSound("filename")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.playSound("filename");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать имя файла с абсолютным путем или путем относительно папки trik на контроллере.

:::warning
Внимание! Файл должен быть предварительно загружен на контроллер.
:::

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.playSound("media/sound.mp3") # проиграть файл sound.mp3 из папки media
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.playSound("media/sound.mp3"); // проиграть файл sound.mp3 из папки media
```
</TabItem>
</Tabs>

## playTone

Проиграть звук с заданной частотой.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.playTone(frequency, time)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.playSound(frequency, time);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать частоту звука `frequency` и время `time` в мс, в течение которого необходимо проигрывать звук.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.playTone(1000, 1000)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.playTone(1000, 1000);
```
</TabItem>
</Tabs>

## say

Произнести строку (на русском или английском языке).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.say(string)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.say(string);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать строку на английском или русском языке.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.say("Привет, я ТРИК")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.say("Привет, я ТРИК");
```
</TabItem>
</Tabs>

## sensor

Предоставляет доступ к сенсору на указанном порту (класс «[Sensor](class-sensor.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.sensor(portName)
brick.sensor("portName")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.sensor(portName);
brick.sensor("portName");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать порт.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.sensor(A1) # вызов сенсора на порту A1
brick.sensor("A2") # вызов сенсора на порту A2
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.sensor(A1) // вызов сенсора на порту A1
brick.sensor("A2") // вызов сенсора на порту A2
```
</TabItem>
</Tabs>

## stop

Останавливает все моторы и активные датчики, убирает нарисованное на дисплее.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.stop()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.stop();
```
</TabItem>
</Tabs>

## marker

Предоставляет доступ к рисованию маркером заданного цвета на полу. Доступен только в режиме двумерной модели (класс «[Marker](class-marker.md)»)

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.marker()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.marker();
```
</TabItem>
</Tabs>

## irCamera

Предоставляет доступ к инфракрасному датчику (класс «[IrCamera](class-ircamera.md)»).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.irCamera()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.irCamera();
```
</TabItem>
</Tabs>


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#accelerometer}
###### ​ {#battery}
###### ​ {#colorsensor}
###### ​ {#display}
###### ​ {#encoder}
###### ​ {#getstillimage}
###### ​ {#gyroscope}
###### ​ {#keys}
###### ​ {#playsound}
###### ​ {#playtone}
###### ​ {#led}
###### ​ {#linesensor}
###### ​ {#motor}
###### ​ {#objectsensor}
###### ​ {#say}
###### ​ {#sensor}
###### ​ {#stop}
###### ​ {#marker}
###### ​ {#ircamera}
