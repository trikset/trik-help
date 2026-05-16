---
title: "Синтаксис выражений в блоках"
---

# Синтаксис выражений в блоках

Для объявления переменных и задания им определенных значений используется блок [«Инициализация переменной»](/docs/studio/programming-visual/blocks/#initialization).

![Блок «Инициализация переменной»](/gitbook/assets/variableInitBlock_100.png)

А для записи математических вычислений — блок [«Выражение»](/docs/studio/programming-visual/blocks/#expression).

![Блок «Выражение»](/gitbook/assets/functionBlock_100.png)

Также математические выражения, в том числе и изменяющие значения переменных, могут встречаться почти везде, где можно указать какое-либо значение.

Блоки и их свойства, не допускающие использования математических выражений, описаны в разделе [«Общие блоки»](/docs/studio/programming-visual/blocks/#vse-obshie-bloki).

Все переменные в программе являются глобальными, т.е. их значения могут использоваться в любом блоке в программе.

## Язык TRIK Studio

Используемый внутри блоков язык создан на базе [Lua 5.3](https://www.lua.org/) и во многом следует его синтаксису. Тем не менее имеются существенные отличия, поэтому полное описание используемого в TRIK Studio языка приводится здесь.

* [Типы языка TRIK Studio](/docs/studio/programming-visual/expression-syntax/)
* [Лексемы языка](/docs/studio/programming-visual/expression-syntax/lexemes/)
* [Операторы языка](/docs/studio/programming-visual/expression-syntax/operators/)
* [Сенсорные переменные](/docs/studio/programming-visual/expression-syntax/sensory-variables/)
* [Константы](/docs/studio/programming-visual/expression-syntax/const/)
* [Встроенные функции](/docs/studio/programming-visual/expression-syntax/built-in-functions/)

## Примеры записи выражений

Объявление нескольких переменных в одном блоке [«Выражение»](/docs/studio/programming-visual/blocks/#vyrazhenie):

![](/gitbook/assets/example-1.png)

То же через блоки [«Инициализация переменной»](/docs/studio/programming-visual/blocks/#inicializaciya-peremennoi):

![](/gitbook/assets/example-2.png)

Пропорциональный регулятор для езды по линии с использованием двух датчиков света для платформы ТРИК:

![](/gitbook/assets/example-3.png)

Пример использования [массивов](/docs/studio/programming-visual/expression-syntax/types/array/) для задания портов блока «Моторы вперёд». Создаётся массив с именем `a`, нулевому элементу присваивается порт `M3`, первому — `M1`, потом содержимое первого элемента массива меняется на `M4`, затем получившийся массив передаётся в свойство «Порты» блока «Моторы вперёд»:

![](/gitbook/assets/example-4.png)
