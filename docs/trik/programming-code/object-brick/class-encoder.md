---
title: "Класс «encoder»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «encoder»

Представляет энкодеры силовых моторов, подключающиеся к портам E1, E2, E3, E4.

| Метод                                       | Описание                                                            |
| ------------------------------------------- | ------------------------------------------------------------------- |
| [read](#read)               | Возвращает текущее показание энкодера в градусах на заданном порту. |
| [reset](#reset)             | Сбрасывает на 0 текущее показание энкодера.                         |
| [readRawData](#readrawdata) | Возвращает текущее показание энкодера в «тиках» на заданном порту.  |

###### ​ {#read}
## read

Возвращает текущее показание энкодера в градусах на заданном порту.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(portName).read()
brick.encoder("portName").read()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(portName).read();
brick.encoder("portName").read();
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать порт.

#### Примеры

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(E1).read()
brick.encoder("E2").read()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(E1).read();
brick.encoder("E2").read();
```
</TabItem>
</Tabs>

###### ​ {#reset}
## reset

Сбрасывает в 0 текущее показание энкодера.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(portName).reset()
brick.encoder("portName").reset()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(portName).reset();
brick.encoder("portName").reset();
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать порт.

#### Примеры

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(E1).reset()
brick.encoder("E2").reset()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(E1).reset();
brick.encoder("E2").reset();
```
</TabItem>
</Tabs>

###### ​ {#readrawdata}
## readRawData

Возвращает текущее показание энкодера в «тиках» на заданном порту.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(portName).readRawData()
brick.encoder("portName").readRawData()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(portName).readRawData();
brick.encoder("portName").readRawData();
```
</TabItem>
</Tabs>

#### Примеры

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.encoder(E1).readRawData()
brick.encoder("E2").readRawData()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.encoder(E1).readRawData();
brick.encoder("E2").readRawData();
```
</TabItem>
</Tabs>
