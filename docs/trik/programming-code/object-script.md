---
title: "Объект «script»"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Объект «script»

Представляет методы управления выполнением скрипта и доступ к функциям операционной системы.

| Метод                                       | Описание                                                                                                |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [quit](#quit)               | Устанавливает флаг окончания работы для событийно-ориентированной программы.                            |
| [random](#random)           | Возвращает случайное число из заданного диапазона.                                                      |
| [readAll](#readall)         | Считывает всё содержимое указанного файла в массив строк.                                               |
| [removeFile](#removefile)   | Удаляет указанный файл.                                                                                 |
| [run](#run)                 | Устанавливает флаг событийно-ориентированной программы.                                                 |
| [system](#system)           | Выполняет переданную в качестве параметра команду консоли операционной системы.                         |
| [time](#time)               | Возвращает временной штамп — количество миллисекунд, прошедших с начала 1 января 1970 года по Гринвичу. |
| [timer](#timer)             | Создаёт и возвращает таймер.                                                                            |
| [wait](#wait)               | Приостанавливает выполнение скрипта на переданное количество миллисекунд.                               |
| [writeToFile](#writetofile) | Записывает строку в файл.                                                                               |

###### ​ {#quit}
## quit

Устанавливает флаг окончания работы для событийно-ориентированной программы. Как только будет завершён текущий обработчик события, исполнение скрипта закончится.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
script.quit()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.quit();	
```
</TabItem>
</Tabs>

###### ​ {#random}
## random

Возвращает случайное число из заданного диапазона.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
script.random(min, max)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.random(min, max);
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать границы диапазона.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
a = script.random(0, 10) # случайное число от 0 до 10
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var a = script.random(0, 10); // случайное число от 0 до 10
```
</TabItem>
</Tabs>

###### ​ {#readall}
## readAll

Считывает всё содержимое указанного файла в массив строк.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.readAll("fileName")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.readAll("fileName");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать название файла с расширением.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
lines = script.readAll("input.txt") # считывает текстовый файл input.txt
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
var lines = script.readAll("input.txt"); // считывает текстовый файл input.txt
```
</TabItem>
</Tabs>

###### ​ {#removefile}
## removeFile

Удаляет указанный файл.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.removeFile("fileName")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.removeFile("fileName");
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать название файла с расширением.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.removeFile("file.txt"); # удалить файл file.txt
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.removeFile("file.txt"); // удалить файл file.txt
```
</TabItem>
</Tabs>

###### ​ {#run}
## run

Устанавливает флаг событийно-ориентированной программы. По окончанию работы скрипт не выгружается из памяти, а продолжает ждать наступления событий до тех пор, пока какой-либо из обработчиков не вызовет метод «[quit](#quit)».

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
script.run()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.run();
```
</TabItem>
</Tabs>

###### ​ {#system}
## system

Выполняет переданную команду.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
ript.system()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
script.system();
```
</TabItem>
</Tabs>

В качестве параметра необходимо указать команду консоли операционной системы.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.system("reboot")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.system("reboot");
```
</TabItem>
</Tabs>

###### ​ {#time}
## time

Возвращает временной штамп — количество миллисекунд, прошедших с начала 1 января 1970 года по Гринвичу.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
script.time()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```
script.time();
```
</TabItem>
</Tabs>

###### ​ {#timer}
## timer

Создаёт и возвращает таймер (класс `«QTimer»`), посылающий сигнал `timeout` каждые n миллисекунд.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
script.timer(n)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.timer(n);
```
</TabItem>
</Tabs>

В качестве параметра передаётся n .

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
def foo():
  print("It's Alive!!!")
tim = script.timer(500) # таймер на 500 мс
tim.timeout.connect(foo) # подписываем функцию foo на срабатывание по таймеру tim
script.wait(5000)
tim.stop()
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
function foo(){
  print("It's Alive!!!")
}
tim = script.timer(500) // таймер на 500 мс
tim.timeout.connect(foo) // подписываем функцию foo на срабатывание по таймеру tim
script.wait(5000)
tim.stop()
```
</TabItem>
</Tabs>

###### ​ {#wait}
## wait

Приостанавливает выполнение скрипта на переданное количество миллисекунд.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```
script.wait(msCount)
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.wait(msCount);
```
</TabItem>
</Tabs>

В качестве параметра передаётся количество миллисекунд.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.wait(1000) # остановить выполнение скрипта на одну секунду
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.wait(1000); // остановить выполнение скрипта на одну секунду
```
</TabItem>
</Tabs>

###### ​ {#writetofile}
## writeToFile

Записывает сроку в файл.

#### Синтаксис

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.writeToFile("fileName", "text")
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.writeToFile("fileName", "text");
```
</TabItem>
</Tabs>

В качестве параметров необходимо указать название файла и записываемую строку.

#### Пример

<Tabs>
<TabItem value={"python"} label={"Python"}>
```python
script.writeToFile("output.txt", "Hello, world") # записать «Hello, world» в файл output.t
```
</TabItem>

<TabItem value={"javascript"} label={"JavaScript"}>
```javascript
script.writeToFile("output.txt", "Hello, world"); // записать «Hello, world» в файл output.t
```
</TabItem>
</Tabs>
