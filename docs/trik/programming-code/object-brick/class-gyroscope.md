---
title: "Класс «gyroscope»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «gyroscope»

Представляет [гироскоп](/docs/trik/programming-code/object-brick/#gyroscope) контроллера ТРИК. В состоянии покоя среднее значение выходного сигнала гироскопа не равно нулю и называется **смещением нуля** (`bias`) или **систематической ошибкой** (`bias error`).

Параметр обусловлен многими факторами и может изменяться, например, в зависимости от окружающей температуры.

Для правильной работы гироскопа необходимо вычитать смещение нуля из приходящих значений. Вычислить его можно с помощью метода «[calibrate](#calibrate)».

Так как калибровка занимает длительное время, то при частом запуске модели можно выполнять ее один раз, после чего запоминать значение в переменную с помощью «[getCalibrationVaules»](#getcalibrationvalues), а при запуске программы вместо калибровки вызывать «[setCalibrationValues](#setcalibrationvalues)».

| Метод                                                           | Описание                                                                                                                          |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| [calibrate](#calibrate)                       | Вычисляет смещением нуля в течение указанного времени и инициализирует гироскоп этим параметром, сбрасывает текущие углы наклона. |
| [getCalibrationValues](#getcalibrationvalues) | Возвращает объект, в котором содержатся необходимые данные о смещении нуля.                                                       |
| [isCalibrated](#iscalibrated)                 | Возвращает true в случае завершении калибровки, false — в противном случае.                                                       |
| [read](#read)                                 | Возвращает массив из семи элементов: угловые скорости по трем осям, время последнего замера, углы наклона по трем осям.           |
| [readRawData](#readrawdata)                   | Возвращает массив из трех элементов с угловыми скоростями по трем осям.                                                           |
| [setCalibrationValues](#setcalibrationvalues) | Устанавливает объект, содержащий необходимые параметры о смещении нуля.                                                           |

| Сигнал                                                        | Описание                                                       |
| ------------------------------------------------------------- | -------------------------------------------------------------- |
| [calibrationFinished](#calibrationfinished) | Сигнал, посылаемый сенсором после окончания калибровки.        |
| [newData](#newdata)                         | Сигнал, посылаемый сенсором, когда у него готовы новые данные. |

###### ​ {#calibrate}
## calibrate

Вычисляет смещение нуля в течение указанного времени и инициализирует гироскоп этим параметром, сбрасывает текущие углы наклона.Рекомендуемое время калибровки — 10−20 секунд.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope().calibrate(msec)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.gyroscope().calibrate(msec);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать:

* `msec` — время в миллисекундах.

###### ​ {#calibrationfinished}
## calibrationFinished

Сигнал, посылаемый сенсором после окончания калибровки.

###### ​ {#getcalibrationvalues}
## getCalibrationValues

Возвращает объект, в котором содержатся необходимые данные о смещении нуля.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope().getCalibrationValues()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.gyroscope().getCalibrationValues();
```
</TabItem>
</Tabs>

###### ​ {#iscalibrated}
## isCalibrated

Возвращает `true` в случае завершении калибровки, `false` — в противном случае.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope().isCalibrated()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.gyroscope().isCalibrated();
```
</TabItem>
</Tabs>

###### ​ {#newdata}
## newData

Сигнал, посылаемый сенсором, когда у него готовы новые данные.

###### ​ {#read}
## read

Возвращает массив из семи элементов:

* 0−2 — угловые скорости по трем осям (в миллиградусах/секунды),
* 3 — время последнего замера (в микросекундах),
* 4−6 — углы наклона по трем осям (в миллиградусах).

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope().read()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.gyroscope().read();
```
</TabItem>
</Tabs>

###### ​ {#readrawdata}
## readRawData

Возвращает массив из трех элементов с угловыми скоростями по трем осям.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope().readRawData()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.gyroscope().readRawData();
```
</TabItem>
</Tabs>

###### ​ {#setcalibrationvalues}
## setCalibrationValues

Устанавливает объект, содержащий необходимые параметры о смещении нуля.&#x20;

:::warning
Так как калибровка занимает длительное время, то при частом запуске модели можно выполнять ее один раз, после чего запоминать значение в переменную с помощью «[getCalibrationVaules](#getcalibrationvalues)», а при запуске программы вместо калибровки вызывать «setCalibrationValues».
:::

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.gyroscope().setCalibrationValues(values)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.gyroscope().setCalibrationValues(values);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать:

* `values` — объект, содержащий данные о биасе.
