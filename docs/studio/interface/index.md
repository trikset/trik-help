---
title: "Интерфейс TRIK Studio"
---

# Интерфейс TRIK Studio

## Режимы TRIK Studio

Интерфейс TRIK Studio зависит от выбранного режима. TRIK Studio имеет два режима:

1. [**Режим редактирования**](#mode-edit)\
   Предназначен для создания диаграммы управления роботом и исполнения её на роботе в режиме генерации.<br />
2. [**Режим отладки**](#mode-debug)\
   Предназначен для исполнения и отладки программы на 2D-модели или в режиме интерпретации на реальном роботе.

### Переключение между режимами

Переключение режимов возможно тремя способами. С помощью:

1. Сочетаний клавиш `Ctrl+1` / `Ctrl+2`.
2. [Панели переключения режимов](#panel-mode-switching).
3. [Строки статуса](#status-bar).

###### ​ {#mode-edit}
## Режим редактирования &#123;#mode-edit&#125;
![Интерфейс TRIK Studio в режиме редактирования](/gitbook/assets/trik-studio-interface.png)

TRIK Studio в режиме редактирования имеет следующие элементы интерфейса:

* [Окно редактора / сцена](#editor-window)
* [Главное меню](#menu)
* [Панель «Файл»](#panel-file)
* [Панель «Правка»](#panel-edit)
* [Панель «Вид»](#panel-view)
* [Панель «Интерпретатор»](#panel-interpreter)
* [Панель «Генераторы»](#panel-generators)
* [Панель «Прочее»](#panel-other)
* [Панель переключения режимов](#panel-mode-switching)
* [Редактор свойств элементов](#panel-property-editor)
* [Настройки сенсоров](#panel-configure-devices)
* [Палитра (набор блоков для создания диаграмм)](#panel-palette)
* [Список переменных](#panel-variables)
* [Строка статуса](#status-bar)

###### ​ {#editor-window}
### Окно редактора / сцена &#123;#editor-window&#125;
Сцена отображает диаграмму и позволяет ее редактировать.

![Сцена](/gitbook/assets/scene.png)

О создании нового проекта и работе с диаграммами читайте в статьях:

[Начало работы и создание проекта](/docs/studio/start/)

[Добавление и удаление блоков](/docs/studio/programming-visual/blocks-add-delete/)

Здесь же осуществляется отображение текущего исполняемого блока при интерпретации диаграмм.

![](/gitbook/assets/04%203%20ru%20chart-interpretation%204.gif)

###### ​ {#menu}
### Главное меню &#123;#menu&#125;
Главное меню **TRIK Studio** содержит набор базовых операций и настроек среды:

* [Файл](/docs/studio/interface/main-menu/#menu-file)
* [Правка](/docs/studio/interface/main-menu/#menu-edit)
* [Вид](/docs/studio/interface/main-menu/#menu-view)
* [Инструменты](/docs/studio/interface/main-menu/#menu-tools)
* [Настройки](/docs/studio/interface/main-menu/#menu-settings)
* [Справка](/docs/studio/interface/main-menu/#menu-about)

![Главное меню](/gitbook/assets/trik-studio-main-menu.png)

Подробнее смотрите в статье:

[Главное меню TRIK Studio](/docs/studio/interface/main-menu/)



###### ​ {#panel-file}
### Панель «Файл» &#123;#panel-file&#125;
Панель «Файл» повторяет основные операции, доступные из меню «[Файл](/docs/studio/interface/main-menu/#menu-file)».

&#x20;<img src="/gitbook/assets/newProject.svg" alt="" data-size="line" /> Создать новый проект.\
&#x20;<img src="/gitbook/assets/open%20%281%29.svg" alt="" data-size="line" /> Открыть сохраненный проект.\
&#x20;<img src="/gitbook/assets/save.svg" alt="" data-size="line" /> Сохранить текущий проект.



###### ​ {#panel-edit}
### Панель «Правка» &#123;#panel-edit&#125;
<img src="/gitbook/assets/undo.png" alt="" data-size="line" /> Отмена операции.\
&#x20;<img src="/gitbook/assets/redo.png" alt="" data-size="line" />Повтор операции.



###### ​ {#panel-view}
### Панель «Вид» &#123;#panel-view&#125;
Панель «Вид» содержит кнопки, позволяющие масштабировать диаграммы.

<img src="https://thumb.tildacdn.com/tild3030-6165-4761-b762-383737303632/-/resize/65x/-/format/webp/image.png" alt="" data-size="original" />Приблизить / отдалить.

Также масштабировать сцену можно с помощью:

1. Зажатия клавиши `Ctrl` и вращения колесика мыши.
2. Сочетания клавиш `Ctrl+=` и `Ctrl+-`.



###### ​ {#panel-interpreter}
### Панель «Интерпретатор» &#123;#panel-interpreter&#125;
![Инструменты панели «Интерпретатор»](https://thumb.tildacdn.com/tild3163-3937-4239-b738-616361666363/-/resize/195x/-/format/webp/image.png)

Панель «Интерпретатор» содержит команды запуска и остановки выполнения программы, кнопки переключения режимов интерпретации между двумерной моделью и реальным роботом, а также кнопку открытия [настроек робота](/docs/studio/settings/#robots), доступных из меню «Инструменты».&#x20;

При работе с реальным роботом в режиме интерпретации эта панель также содержит кнопку «Подключиться».

<img src="/gitbook/assets/robots_run.png" alt="" data-size="line" /> Запуск выполнения программы.\
<img src="/gitbook/assets/robots_stop.png" alt="" data-size="line" /> Остановка выполнения программы.\
<img src="/gitbook/assets/2d-model.svg" alt="" data-size="line" /> Двумерная модель.\
<img src="/gitbook/assets/switch-real-trik.svg" alt="" data-size="line" /> Реальный робот.\
<img src="/gitbook/assets/robots_settings1.png" alt="" data-size="line" /> Настройки робота.



###### ​ {#panel-generators}
### Панель «Генераторы» &#123;#panel-generators&#125;
:::info
Команды на этой панели изменяются в зависимости от конфигурации программы.
:::

Панель «Генераторы» содержит команды генерации кода и загрузки программы на контроллер.

![](https://thumb.tildacdn.com/tild3734-6135-4838-a161-633336393062/-/resize/96x/-/format/webp/image.png)

<img src="/gitbook/assets/generateQtsCode.svg" alt="" data-size="line" /> Генерировать код.\
<img src="/gitbook/assets/uploadProgram.svg" alt="" data-size="line" /> Загрузить программу.



###### ​ {#panel-other}
### Панель «Прочее» &#123;#panel-other&#125;
Панель «Прочее» может содержать различную информацию в зависимости от выбранной платформы.

Например, для [конструктора ТРИК](/docs/trik/about/) на данной панели отображается IP-адрес контроллера, к которому вы подключаетесь.

![](https://thumb.tildacdn.com/tild3736-3338-4131-b737-303964656239/-/resize/129x/-/format/webp/image.png)



### Панель переключения режимов редактирования и отладки &#123;#panel-mode-switching&#125;
Панель переключения режимов отображает текущий режим TRIK Studio и позволяет переключаться между режимами редактирования и отладки.

<img src="/gitbook/assets/main_tabbar_edit.svg" alt="" data-size="line" /> Редактор.\
<img src="/gitbook/assets/main_tabbar_debug.svg" alt="" data-size="line" /> Отладка.



### Панель «Редактор свойств» &#123;#panel-property-editor&#125;
Редактор свойств используется для отображения и редактирования значений свойств выделенных объектов (блоков, связей).&#x20;

![Панель «Редактор свойств»](/gitbook/assets/panel-property-editor.png)

О работе с редактором смотрите статью:

[Редактирование свойств элементов](/docs/studio/programming-visual/editing-element-properties/)



### Панель «Настройки сенсоров» &#123;#panel-configure-devices&#125;
Настройки сенсоров позволяют указать, какие сенсоры использованы на каком порту. То же можно сделать из диалога настроек робота.

:::info
Набор сенсоров зависит от выбранной платформы в настройках на вкладке «[Роботы](/docs/studio/settings/#robots)».
:::

![Настройки сенсоров для контроллера ТРИК](https://thumb.tildacdn.com/tild6130-6533-4832-a631-656535393432/-/resize/354x/-/format/webp/_-8.png)

### Панель «Палитра» &#123;#panel-palette&#125;
Палитра элементов содержит набор доступных блоков и связей между ними, которые можно добавить на диаграмму.

:::info
1. Состав палитры может меняться в зависимости от выбранной в [настройках](/docs/studio/settings/#robots) платформы.
2. Серым выделены блоки, недоступные в выбранной модели выполнения (2D-модели или на реальном роботе).
:::

![Панель «Палитра»](https://thumb.tildacdn.com/tild6465-6266-4364-b032-663531326133/-/resize/345x/-/format/webp/_-9.png)

О добавлении и удалении блоков на сцену в TRIK Studio читайте в статье:

[Добавление и удаление блоков](/docs/studio/programming-visual/blocks-add-delete/)



### Панель «Переменные» &#123;#panel-variables&#125;
Список переменных, используемых при выполнении диаграммы с их текущими значениями, включая [сенсорные переменные](/docs/studio/programming-visual/expression-syntax/sensory-variables/). При исполнении в режиме интерпретации на двумерной модели или реальном роботе берутся с робота в реальном времени. В режиме генерации не используются.

![Панель «Переменные»](https://thumb.tildacdn.com/tild3136-3865-4436-b937-326431666135/-/resize/345x/-/format/webp/_-10.png)

###### ​ {#status-bar}
### Строка статуса &#123;#status-bar&#125;
Строка статуса отображает текущий режим TRIK Studio ([редактирования](#mode-edit) или [отладки](#mode-debug)) и позволяет переключаться между режимами. Для переключения достаточно кликнуть на строку статуса.

![Строка статуса](/gitbook/assets/pnl-status-bar.png)



###### ​ {#mode-debug}
## Режим отладки &#123;#mode-debug&#125;
Элементы интерфейса TRIK Studio в режиме отладки повторяют элементы в [режиме редактирования](#mode-edit), кроме окна редактора, панелей редактора свойств и палитры. Вместо этих элементов отображаются:

* [Окно «Двумерная модель»](#window-2-d-1)
* [Окно «Ошибки»](#window-error)
* [Панель «Настройки робота»](#panel-settings-robot)
* [Панель «Графики»](#panel-graphics)

![Режим отладки](/gitbook/assets/trik-studio-mode-debug.png)

###### ​ {#window-2-d-1}
### Окно «Двумерная модель» &#123;#window-2-d&#125;
Окно «Двумерная модель» открывается, если в качестве режима исполнения программы выбрана 2D-модель.

![Окно 2D-модели](/gitbook/assets/window-2d-model.png)

Окно позволяет задать окружение, в котором будет работать робот, задать датчики робота и наблюдать, как будет работать написанная в режиме редактирования программа.

Подробнее о 2D-модели читайте в статье:

[2D-модель](/docs/studio/2d-model/)

:::info
В режиме интерпретации и генерации программы на реальном роботе это окно не показывается, вместо него отображается исполняемая диаграмма.
:::

###### ​ {#panel-settings-robot}
### Панель «Настройки робота» &#123;#panel-settings-robot&#125;
На панели настроек робота отображается вид контроллера и параметры робота, которые зависят от выбранной [платформы](/docs/studio/about/#platforms).

![Панель «Настройки робота»](/gitbook/assets/panel-settings-robot.png)

#### Открытие панели «Настройки робота»

![](/gitbook/assets/04%20D%20ru%20panel-controller-open%202.gif)



###### ​ {#window-error}
### Окно «Ошибки» &#123;#window-error&#125;
В случае синтаксических и семантических ошибок в TRIK Studio появляется окно с соответствующими сообщениями.

Для просмотра блока, в котором допущена ошибка, необходимо кликнуть на сообщение.

![](/gitbook/assets/04%20F%20ru%20panel-error%202.gif)

###### ​ {#panel-graphics}
### Панель «Графики» &#123;#panel-graphics&#125;
Окно «Графики» отображает в реальном времени значения, присылаемые датчиками.&#x20;

![](/gitbook/assets/04%20G%20ru%20panel-graphics.png)

Подробнее читайте в статье:

[Работа с графиками](/docs/studio/interface/graphics/)
