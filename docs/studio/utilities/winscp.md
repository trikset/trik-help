---
title: "WinSCP"
---

# WinSCP

**WinSCP** — графический клиент протоколов **SFTP** и **SCP**, предназначенный для Windows. С помощью него можно обмениваться файлами между контроллером ТРИК и компьютером по протоколу **SCP**.

![](/gitbook/assets/%D0%A1%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%BD%D0%B8%D0%B5%20%D1%83%D1%82%D0%B8%D0%BB%D0%B8%D1%82%D1%8B%20WinSCP.png)

## Запуск WinSCP из TRIK Studio

Для запуска утилиты зайдите в меню `Инструменты → Сторонние утилиты → WinSCP`.

![](/gitbook/assets/utilities.png)

## Подключение к контроллеру ТРИК в WinSCP

1\. В каталоге с установленной TRIK Studio зайдите в папку `winscp` и запустите `WinSCP.exe`

2\. Заполните данные:

* **File protocol:** SCP
* **Host name:** [IP-адрес контроллера](/docs/trik/wi-fi/network-connection/#accesspoint).
* **User name:** root.

Поле `Password` оставьте пустым.

![](/gitbook/assets/winscp-login.png)

3\. Нажмите кнопку «Login».

4\. Если у вас появилось окно «Warning», нажмите «Yes».

:::info
Это предупреждение возникает, когда **WinSCP** подключается к новому серверу **SSH**.
:::

5\. В левой части приложения будет находиться файловая система вашего компьютера, в правой — файловая система контроллера ТРИК.

![](/gitbook/assets/winscp-copy.png)
