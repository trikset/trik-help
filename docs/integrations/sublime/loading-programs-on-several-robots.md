---
title: "Загрузка программ на нескольких роботов ТРИК из Sublime Text"
---

# Загрузка программ на нескольких роботов ТРИК из Sublime Text

В данной статье рассматривается возможность одновременной загрузки программ на группу роботов с использованием внешнего текстового редактора **Sublime Text**. Статья является продолжением материала

[run-2d-from-sublime.md](run-2d-from-sublime.md)

## Настройка

Скачайте файл [send\_files.cmd](https://gist.github.com/anastasiia-kornilova/e1344f658a91449cf16217ec03147a18) для Windows и поместите его в папку, в которую установлена TRIK Studio.

:::warning
Инструкция протестирована на Sublime Text 3 (Build 3211).\
Скачать Sublime Text можно на [официальном сайте](https://www.sublimetext.com/).
:::

Перед первым запуском программы необходимо зайти на контроллер ТРИК через WinSCP. Инструкция о том, как это сделать, доступна по [ссылке](../../studio/utilities/winscp.md). После этого WinSCP запомнит, что было разрешено устанавливать соединение с этим роботом и не будет требовать подтверждений. Это действие необходимо повторять при подключении каждого нового контроллера.

1\. Откройте Sublime Text.

2\. Выберите `Tools → Build System → New Build System`

![](/gitbook/assets/Sublime_1%20%281%29.png)

3\. Откроется окно с текстовым файлом. В нем необходимо всё стереть и вставить вместо этого следующий код:

```javascript
{
"cmd": ["D:\\TRIKStudio\\send_filesl.cmd", “<path to scripts dir>”, "<file with ip addresses>"],
"selector": "source.js"
}
```

Здесь:

* `\Sublime Text 3\Packages\User` под именем `TRIK_SEND.sublime-build`.

6\. Выберите `Tools → Build System` и в открывшемся списке выберите `TRIK_send`.

![](/gitbook/assets/Sublime_3.png)

7\. Для начала отправки программ на роботов достаточно нажать `Tools → Build` или соответствующую комбинацию клавиш `Ctrl+B`. Для того чтобы вернуться к [запуску 2D-модели](run-2d-from-sublime.md), необходимо выбрать `Tools → Build System` и в открывшемся списке выбрать `TRIK`.

![](/gitbook/assets/Sublime_4.png)
