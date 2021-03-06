# Класс «colorSensor»

Видеокамера в режиме датчика цвета.

| Метод                              | Описание                                                                                             |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [init​](class-colorsensor.md#init) | Включает видеокамеру и инициализирует её в режиме датчика цвета.                                     |
| [read​](class-colorsensor.md#read) | Возвращает массив с координатами доминирующего цвета в цветовой шкале RGB в указанном участке кадра. |
| [stop](class-colorsensor.md#stop)  | Выключает видеокамеру и прекращает работу датчика.                                                   |

## init

Включает видеокамеру и инициализирует её в режиме датчика цвета.

#### Синтаксис

{% tabs %}
{% tab title="Python" %}
```python
brick.colorSensor("video1").init(True)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1").init(true);
```
{% endtab %}
{% endtabs %}

Булевый параметр определяет, выводить ли на экран изображение с камеры:

* `true` — выводить,
* `false` — не выводить.

## read

Возвращает массив с координатами доминирующего цвета в цветовой шкале RGB в указанном участке кадра.

Кадр делится на квадраты сеткой, по умолчанию 3 на 3, размерность сетки можно задать в `model-config.xml` на роботе. Квадраты индексируются с 1. То есть (1, 1) — это левый верхний край кадра, (2, 2) — его центр.

Возвращаемое значение — массив из трёх элементов от 0 до 255, индексирующийся с 0. Нулевой элемент содержит интенсивность красного (0 — совсем нет, 255 — очень много), первый — интенсивность зелёного, второй — интенсивность синего. Например, (0, 0, 0) — чёрный, (255, 255, 255) — белый, (255, 0, 0) — красный.

#### Синтаксис

{% tabs %}
{% tab title="Python" %}
```python
brick.colorSensor("video1").read(x, y)
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1").read(x, y);
```
{% endtab %}
{% endtabs %}

В качестве параметра необходимо указать индексы квадрата `x` и `y`.

## stop

Выключает видеокамеру и прекращает работу датчика.

#### Синтаксис

{% tabs %}
{% tab title="Python" %}
```python
brick.colorSensor("video1").stop()
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
brick.colorSensor("video1").stop();
```
{% endtab %}
{% endtabs %}
