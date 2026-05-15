---
title: "Класс «accelerometer»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «accelerometer»

Представляет [акселерометр](./#accelerometer) контроллера ТРИК.

| Метод                               | Описание                                                                                                                     |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [read](class-accelerometer.md#read) | Возвращает текущее показание сенсора в виде массива из трёх элементов, соответствующих показаниям сенсора по каждой из осей. |

| Сигнал                                    | Описание                                                       |
| ----------------------------------------- | -------------------------------------------------------------- |
| [newData](class-accelerometer.md#newdata) | Сигнал, посылаемый сенсором, когда у него готовы новые данные. |

###### ​ {#read}
## read

Возвращает текущее показание сенсора в виде массива из трёх элементов, соответствующих показаниям сенсора по каждой из осей.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.accelerometer().read()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.accelerometer().read();
```
</TabItem>
</Tabs>

###### ​ {#newdata}
## newData

Сигнал, посылаемый сенсором, когда у него готовы новые данные.


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#accelerometer}
