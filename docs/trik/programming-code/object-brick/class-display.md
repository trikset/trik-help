---
title: "Класс «display»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Класс «display»

Предоставляет доступ к дисплею робота.

:::info
Размер экрана: 240\*320 пикселей.
:::

| Метод                                                | Описание                                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [addLabel](class-display.md#addlabel)                | Вывести на экран указанный текст, начиная с указанной координаты.                                                                     |
| [clear](class-display.md#clear)                      | Очистить окно для рисования.                                                                                                          |
| [drawArc](class-display.md#drawarc)                  | Нарисовать дугу эллипса, вписанного в прямоугольник с левым верхним углом в указанных координатах и имеющий заданную ширину и высоту. |
| [drawEllipse](class-display.md#drawellipse)          | Нарисовать эллипс, вписанный в прямоугольник с левым верхним углом в указанных координатах и имеющий заданную ширину и высоту.        |
| [drawLine](class-display.md#drawline)                | Нарисовать линию с началом и концом в заданных координатах.                                                                           |
| [drawPoint](class-display.md#drawpoint)              | Нарисовать точку в заданных координатах.                                                                                              |
| [drawRect](class-display.md#drawrect)                | Нарисовать прямоугольник с левым верхним углом в указанных координатах и имеющий заданную ширину и высоту.                            |
| [hide](class-display.md#hide)                        | Закрыть и очистить окно для рисования.                                                                                                |
| [redraw](class-display.md#redraw)                    | Перерисовать окно для рисования. Изменения в окне произойдут только после вызова этого метода.                                        |
| [removeLabels](class-display.md#removelabels)        | Удалить с экрана весь текст, добавленный на него вызовами метода «addLabel».                                                          |
| [setBackground](class-display.md#setbackground)      | Установить фон экрана в указанный цвет.                                                                                               |
| [setPainterColor](class-display.md#setpaintercolor)  | Установить цвет кисти, которой рисуются графические примитивы.                                                                        |
| [setPainterWidth](class-display.md#setpainterwidth)	 | Установить толщину кисти, которой рисуются графические примитивы, в пикселях.                                                         |
| [show](class-display.md#show)                        | Вывести на дисплей контроллера изображение, сформированное в одномерном массиве.                                                      |
| [showImage](class-display.md#showimage)              | Вывести на экран изображение, предварительно загруженное на робот.                                                                    |

## addLabel

Вывести на экран указанный текст в указанные координаты. Если в указанных координатах уже был текст, он будет заменён новым.

Изменения на дисплее произойдут только после вызова метода «[redraw](class-display.md#redraw)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().addLabel("text", x, y, size)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().addLabel("text", x, y, size);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать:

* `text` — выводимый текст,
* `x`, `y` — координаты экрана.
* `size` – размер шрифта в пикселях (необязательный параметр, по-умолчанию шрифт размером 20 пикселей).

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().addLabel('Привет, мир!', 1, 1, 20)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().addLabel('Привет, мир!', 1, 1);
```
</TabItem>
</Tabs>

## clear

Очистить окно для рисования.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().clear()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().clear();
```
</TabItem>
</Tabs>

## drawArc

Нарисовать дугу эллипса, вписанного в прямоугольник с левым верхним углом в указанных координатах и имеющий заданную ширину и высоту. Изменения на дисплее произойдут только после вызова метода «[redraw](class-display.md#redraw)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawArc(x, y, l, h, from, to)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.display().drawArc(x, y, l, h, from, to);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать:

* `x`, `y` — координаты левого верхнего угла прямоугольника на экране,
* `l` — ширина прямоугольника,
* `h` — высота прямоугольника,
* `from` — начальный угол, ограничивающий дугу,
* `to` — конечный угол, ограничивающий дугу.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawArc(0, 0, 10, 10, 20, 50)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawArc(0, 0, 10, 10, 20, 50);
```
</TabItem>
</Tabs>

## drawEllipse

Нарисовать эллипс, вписанный в прямоугольник с левым верхним углом в указанных координатах и имеющий заданную ширину и высоту. Изменения на дисплее произойдут только после вызова метода «[redraw](class-display.md#redraw)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawEllipse(x, y, l, h, filled)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawEllipse(x, y, l, h, filled);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать:

* `x`, `y` — координаты левого верхнего угла прямоугольника,
* `l` — ширина прямоугольника,
* `h` — высота прямоугольника,
*   `filled` — заливать фигуру или нет, по умолчанию `false`

    &#x20;

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawEllipse(0, 0, 10, 10, True)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawEllipse(0, 0, 10, 10, true);
```
</TabItem>
</Tabs>

## drawLine

Нарисовать линию с началом и концом в заданных координатах. Изменения на дисплее произойдут только после вызова метода «[redraw](class-display.md#redraw)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawLine(x0, y0, x1, y1)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawLine(x0, y0, x1, y1);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать:

* `x0`, `y0` — координаты начала линии,
* `x1`, `y1` — координаты конца линии.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawLine(0, 0, 10, 10)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawLine(0, 0, 10, 10);
```
</TabItem>
</Tabs>

## drawPoint

Нарисовать точку в заданных координатах. Изменения на дисплее произойдут только после вызова метода «[redraw](class-display.md#redraw)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawPoint(x, y)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawPoint(x, y);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать координаты точки `x`, `y`.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawPoint(10, 10)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.display().drawPoint(10, 10);
```
</TabItem>
</Tabs>

## drawRect

Нарисовать прямоугольник с левым верхним углом в указанных координатах и имеющий заданную ширину и высоту. Изменения на дисплее произойдут только после вызова метода «[redraw](class-display.md#redraw)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.display().drawRect(x, y, l, h, filled)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
brick.display().drawRect(x, y, l, h, filled);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать:

* `x`, `y` — координаты левого верхнего угла прямоугольника,
* `l` — ширина прямоугольника,
* `h` — высота прямоугольника,
* `filled` — заливать фигуру или нет, по умолчанию `false`

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().drawRect(0, 0, 10, 10, True)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().drawRect(0, 0, 10, 10, true);
```
</TabItem>
</Tabs>

## hide

Закрыть и очистить окно для рисования.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.display().hide()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().hide();
```
</TabItem>
</Tabs>

## redraw

Перерисовать окно для рисования. Изменения на дисплее произойдут только после вызова этого метода.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.display().redraw()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().redraw();
```
</TabItem>
</Tabs>

## removeLabels

Удалить с экрана весь текст, добавленный на него вызовами метода «[addLabel](class-display.md#addlabel)».

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
brick.display().removeLabels()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().removeLabels();
```
</TabItem>
</Tabs>

## setBackground

Установить фон экрана в указанный цвет.

Возможные цвета:

* white,
* red, darkRed,
* green, darkGreen,
* blue, darkBlue,
* cyan, darkCyan,
* magenta, darkMagenta,
* yellow, darkYellow,
* gray, darkGray, lightGray,
* black.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().setBackground("color")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().setBackground("color");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать цвет.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().setBackground("red")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().setBackground("red");
```
</TabItem>
</Tabs>

## setPainterColor

Установить цвет кисти, которой рисуются графические примитивы.

Возможные цвета:

* white,
* red, darkRed,
* green, darkGreen,
* blue, darkBlue,
* cyan, darkCyan,
* magenta, darkMagenta,
* yellow, darkYellow,
* gray, darkGray, lightGray,
* black.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().setPainterColor("color")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().setPainterColor("color");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать цвет.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().setPainterColor("red")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().setPainterColor("red");
```
</TabItem>
</Tabs>

## setPainterWidth

Установить толщину кисти, которой рисуются графические примитивы, в пикселях.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().setPainterWidth(d)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().setPainterWidth(d);
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать толщину `d`.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().setPainterWidth(5)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().setPainterWidth(5);
```
</TabItem>
</Tabs>

## show

Вывести на дисплей контроллера изображение, преобразованное из однородного массива данных.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().show(array, width, height, format)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().show(array, width, height, format)
```
</TabItem>
</Tabs>

Параметры:

* `array` — одномерный целочисленный массив, имеющий размеры `width`×`height`
* `width` и `height` — ширина и высота изображения соответственно
* В качестве параметра **format** необходимо передать формат, в котором представлен каждый элемент массива. Сейчас поддержаны форматы: «rgb32», «grayscale8», «rgb888».

#### Пример

Примеры использования `show()` на изображении, снятом с использованием функции [`getPhoto()`](../function-getphoto.md).

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
#rgb32
photo = getPhoto()
brick.display().show(photo, 160, 120, "rgb32")
script.wait(5000)

#rgb888
pic = []
photo = getPhoto()
l = len(photo)
for i in range(l):
    p = photo[i]
    pic.append((p&0xff0000)>>16)
    pic.append((p&0xff00)>>8)
    pic.append((p&0xff))

brick.display().show(pic, 160, 120, "rgb888")
script.wait(5000);                           

#grayscale8                                   
pic = []                                      
photo = getPhoto()
l = len(photo)                        
for i in range(l):                    
    p = photo[i]                  
    pic.append(((p&0xff0000)>>18) + ((p&0xff00)>>10) + ((p&0xff)>>2))               
                                         
                                              
brick.display().show(pic, 160, 120, "grayscale8")
script.wait(5000)

```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
//rgb32
var photo = getPhoto();
brick.display().show(photo, 160, 120, "rgb32");
script.wait(5000);

//rgb888
pic = []
photo = getPhoto();
l = photo.length;
for (i = 0; i < l; i++) {
    var p = photo[i];
    pic.push((p&0xff0000)>>16);
    pic.push((p&0xff00)>>8);
    pic.push((p&0xff));
}
brick.display().show(pic, 160, 120, "rgb888");
script.wait(5000);                            

//grayscale8                                   
pic = []                                      
photo = getPhoto();
l = photo.length;                             
for (i = 0; i < l; i++) {                     
        var p = photo[i];                     
        pic.push(((p&0xff0000)>>18) + ((p&0xff00)>>10) + ((p&0xff)>>2));                
}                                             
                                              
brick.display().show(pic, 160, 120, "grayscale8");
script.wait(5000);
```
</TabItem>
</Tabs>

## showImage

Вывести на экран изображение, предварительно загруженное на робот.

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().showImage("imagePath")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().showImage("imagePath");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать имя файла с изображением (в форматах BMP, GIF, JPG, JPEG, PNG, PBM, PGM, PPM, TIFF, XBM, XPM), путь указывается либо абсолютным, либо относительно папки trik.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
brick.display().showImage("media/trik_smile_sad.png")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
brick.display().showImage("media/trik_smile_sad.png");
```
</TabItem>
</Tabs>


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#show}
###### ​ {#addlabel}
###### ​ {#clear}
###### ​ {#drawarc}
###### ​ {#drawellipse}
###### ​ {#drawline}
###### ​ {#drawpoint}
###### ​ {#drawrect}
###### ​ {#hide}
###### ​ {#redraw}
###### ​ {#removelabels}
###### ​ {#setbackground}
###### ​ {#setpaintercolor}
###### ​ {#setpainterwidth}
###### ​ {#showimage}
