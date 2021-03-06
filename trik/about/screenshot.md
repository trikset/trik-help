---
description: С помощью веб-интерфейса, а также утилит PuTTY и WinSCP
---

# Скриншот экрана контроллера ТРИК

Скриншот экрана контроллера ТРИК можно сделать двумя способами:

1. С помощью [веб-интерфейса](screenshot.md#web).
2. С помощью утилит [PuTTY и WinSCP](screenshot.md#utilities).

## С помощью веб-интерфейса <a href="#web" id="web"></a>

1\. Подключитесь к контроллеру по Wi-Fi любым из [способов](../wi-fi/network-connection.md).

2\. Войдите в [веб-интерфейс](../web-interface.md), набрав ip-адрес контроллера в браузере.

3\. Убедитесь, что на экран контроллера выведено изображение или текст, скриншот которого хотите сделать.

4\. Выберите в веб-интерфейсе пункт меню «Изображение» и нажмите кнопку «Сделать снимок экрана».

![](../../.gitbook/assets/screenshot.png)

5\. После этого скриншот появится в списке. Если этого не произошло, обновите страницу.

![](<../../.gitbook/assets/TRIK-Images (1).png>)

6\. Для загрузки сделанных скриншотов нажмите кнопку «Загрузить всё».

## С помощью утилит PuTTY и WinSCP <a href="#utilities" id="utilities"></a>

1\. Подключитесь к контроллеру по Wi-Fi любым из [способов](../wi-fi/network-connection.md).

2\. Откройте TRIK Studio.

3\. Запустите утилиту [PuTTY](../../studio/utilities/putty.md). Для этого в главном меню откройте `Инструменты → Сторонние программы → PuTTY`.

![](../../.gitbook/assets/putty-open.png)

4\. Дождитесь завершения процесса подключения.&#x20;

![](../../.gitbook/assets/putty-login-success.png)

5\. Убедитесь, что на экран контроллера выведено изображение или текст, скриншот которого хотите сделать.

6\. Введите команду `fbgrab image.png`, где `image` — произвольное название сохраненного изображения.

![](../../.gitbook/assets/putty-fbgrab-command.png)

7\. При удачном исходе в консоль будет выведен следующий текст:

`Resolution: 240x320 depth 16`\
`Converting image from 16`\
`Now writing PNG file (compression -1)`

![](../../.gitbook/assets/putty-screenshot-success.png)

8\. Запустите утилиту [WinSCP](../../studio/utilities/winscp.md). Для этого в главном меню откройте `Инструменты → Сторонние программы → WinSCP`.&#x20;

9\. Если у вас появилось окно «Warning», нажмите «Yes».

![](../../.gitbook/assets/winscp-warning.png)

10\. Выберите в левом окне директорию, в которую хотите сохранить снимок. Перетащите созданное изображение из правого окна в левое.

![](../../.gitbook/assets/winscp-copy.png)
