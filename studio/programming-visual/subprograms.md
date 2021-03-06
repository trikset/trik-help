# Подпрограммы

Любую программу в TRIK Studio можно сохранить как подпрограмму и использовать в другой программе.

Подпрограммы можно [сохранять](subprograms.md#save) в локальную коллекцию или [экспортировать](subprograms.md#export) в отдельный файл для переноса на другие компьютеры.

Для работы с коллекцией подпрограмм используйте пункт меню `Инструменты → Подпрограммы`:

1. [Экспортировать в файл](subprograms.md#export).
2. [Импортировать из файла](subprograms.md#import).
3. [Сохранить в коллекцию](subprograms.md#save).
4. [Загрузить из коллекции](subprograms.md#load).
5. [Очистить коллекцию](subprograms.md#delete).

![](<../../.gitbook/assets/subprogramm (1).png>)

## Экспорт подпрограмм в файл <a href="#export" id="export"></a>

{% hint style="info" %}
Используйте экспорт подпрограмм в файл для их переноса на другие компьютеры. Если же вы планируете использовать подпрограммы на своем компьютере, то используйте [сохранение в коллекцию](subprograms.md#save).
{% endhint %}

Для экспорта подпрограмм из открытого проекта в отдельный qrs-файл выберите в главном меню `Инструменты → Подпрограммы → Экспортировать в файл`.

В данный файл будут экспортированы все подпрограммы из текущего проекта.

![Список подпрограмм в проекте](<../../.gitbook/assets/Подпрограммы 2.png>)

## Импорт подпрограмм из файла <a href="#import" id="import"></a>

Для загрузки сохраненных ранее подпрограмм выберите в главном меню `Инструменты → Подпрограммы → Импортировать из файла`.

{% hint style="danger" %}
**Внимание!** Если в импортируемом файле присутствуют подпрограммы с такими же именами, как в текущем проекте, то подпрограммы из проекта будут заменены импортируемыми.
{% endhint %}

## Сохранение подпрограмм в коллекцию <a href="#save" id="save"></a>

{% hint style="info" %}
Для переноса подпрограмм на другие компьютеры используйте функцию [экспорта](subprograms.md#export).
{% endhint %}

Для сохранения подпрограмм из открытого проекта выберите в главном меню `Инструменты → Подпрограммы → Сохранить в коллекцию`.

![](<../../.gitbook/assets/Подпрограммы 3.png>)

Затем выберите подпрограммы, которые хотите сохранить, и нажмите **OK**.

![Список подпрограмм](<../../.gitbook/assets/Подпрограммы 4.png>)

{% hint style="danger" %}
**Внимание!** Если в коллекции подпрограмм есть подпрограммы с такими же именами, они будут перезаписаны.
{% endhint %}

## Загрузка подпрограмм из коллекции <a href="#load" id="load"></a>

Для загрузки подпрограмм из коллекции, выберите в главном меню `Инструменты → Подпрограммы → Загрузить из коллекции`.

![](<../../.gitbook/assets/Подпрограммы 5.png>)

Затем выберите подпрограммы, которые хотите импортировать в текущий проект, и нажмите **OK**.

![Список подпрограмм в коллекции](<../../.gitbook/assets/Подпрограммы 6.png>)

## Удаление коллекции подпрограмм <a href="#delete" id="delete"></a>

Для удаления всех сохраненных в коллекцию подпрограмм выберите в главном меню `Инструменты → Подпрограммы → Очистить коллекцию`.

{% hint style="info" %}
Коллекция подпрограмм хранится в каталоге пользователя и не теряется при удалении или переустановке TRIK Studio.
{% endhint %}
