---
title: "Класс «marker»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «marker»

Предоставляет доступ к рисованию маркером заданного цвета на полу. Доступен только в режиме 2D модели.

| Метод                              | Описание                                                                                                                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [down](#down)       | Начать рисование маркером заданного цвета на полу. При движении робота в двумерной модели за ним будет оставаться цветная линия. Если был установлен маркер другого цвета, он будет заменен.  |
| [up](#up)           | Закончить рисование маркером.                                                                                                                                                                 |
| [isDown](#isdown)   | Возвращает `true`, если маркер активен, `false`- если нет.                                                                                                                                    |
| [setDown](#setdown) | Вызывает метод `down("black")`, или `up()` в зависимости от аргумента.                                                                                                                        |

###### ​ {#down}
## down

Начать рисование маркером заданного цвета на полу. При движении робота в двумерной модели за ним будет оставаться цветная линия. Если был установлен маркер другого цвета, он будет заменен.&#x20;

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.marker().down(color)
brick.marker().down("color")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.marker().down(color)
brick.marker().down("color")
```
</TabItem>
</Tabs>

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.marker().down("blue")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.marker().down("blue")
```
</TabItem>
</Tabs>

###### ​ {#up}
## up

Закончить рисование маркером.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.marker().up()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.marker().up()
```
</TabItem>
</Tabs>

###### ​ {#isdown}
## isDown

Возвращает `true`, если маркер активен, `false`- если нет.&#x20;

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.marker().isDown()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.marker().isDown();
```
</TabItem>
</Tabs>

###### ​ {#setdown}
## setDown

Вызывает метод `down("black")`, или `up()` в зависимости от аргумента.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.marker().setDown(True) # Вызывает brick.marker().down("black")
brick.marker().setDown(False) # Вызывает brick.marker().up()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.marker().setDown(true) // Вызывает brick.marker().down("black")
brick.marker().setDown(false) // Вызывает brick.marker().up()
```
</TabItem>
</Tabs>
