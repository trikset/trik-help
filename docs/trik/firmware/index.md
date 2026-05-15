---
title: "Обновление встроенного программного обеспечения контроллера ТРИК"
---

# Обновление встроенного программного обеспечения контроллера ТРИК

Выберите операционную систему:

* [Windows](./#windows)
* [Linux](./#linux)
* [Ubuntu](./#ubuntu)

## Windows

1\. Скачайте последнюю версию [встроенного программного обеспечения](https://trikset.com/downloads#firmware).\
2\. Скачайте и установите программу [DiskImager](https://github.com/RomanBelkov/DiskImager/releases/download/1.4.1/DiskImager.Installer.msi).&#x20;

![Установка DiskImager](/gitbook/assets/diskImager-install 3.gif)

:::warning
**Внимание!** Для установки и использования DiskImager вам понадобятся права администратора.
:::

3\. Извлеките карту памяти microSD из контроллера ТРИК.\
4\. Вставьте её в компьютер, используя картридер.\
5\. Запустите DiskImager. Для смены языка выберите в меню `About → Language`.

![Для смены языка выберите в меню «About» → «Language»](/gitbook/assets/diskImager 2 lang.png)

6\. Выберите диск для записи.

![](/gitbook/assets/diskimager 3 disk.jpg)

&#x20;7\. Нажмите «Восстановить флешки из образа» («Restore drives from»).

![](/gitbook/assets/diskimager 4.jpg)

8\. В появившемся окне отфильтруйте файлы по типу `.xz` и выберите скачанный файл.

![](/gitbook/assets/diskimager 5.jpg)

9\. Нажмите «Открыть».

![](/gitbook/assets/diskimager 6.jpg)

10\. Дождитесь выполнения операции.

**Первое включение контроллера после прошивки**

1. Нажмите и **удерживайте** кнопки **«Влево»**, **«Вправо»** и **«Галочка»**.
2. Не отпуская их, кратковременно нажмите кнопку **питания**.
3. Дождитесь запуска системы.

<figure><img src="/gitbook/assets/Запуск контроллера после прошивки.png" alt="" /><figcaption></figcaption></figure>

## Linux

1\. Скачайте последнюю версию [встроенного программного обеспечения](https://trikset.com/downloads#firmware).\
2\. Извлеките карту памяти microSD из контроллера ТРИК.\
3\. Вставьте её в компьютер, используя картридер.\
4\. Если SD-карта имеет правильную таблицу разделов (первый раздел не менее 2 Гб, файловая система ext4), то перейдите к пункту 18.\
5\. Получите права суперпользователя (root):

```
sudo -i
```

6\. Посмотрите устройства, которые в данный момент подключены к компьютеру:

```
fdisk -l
```

7\. Размонтируйте все разделы с помощью команды `umount`.

```
umount /dev/{first partition}
umount /dev/{second partition}
...
```

Пример:

```
umount /dev/sdb1
```

8\. Выберите вставленную карту памяти microSD:

```
fdisk /dev/{устройство}
```

Пример:

```
sudo fdisk /dev/sdb
```

9\. Посмотрите текущую таблицу разделов с помощью команды `p`.

```
p
```

10\. Удалите все существующие разделы с помощью команды `d`.

```
d
```

11\. Убедитесь, что все разделы удалились:

```
p
```

12\. Создайте новый раздел с помощью команды `n`.

```
n
```

13\. Все параметры, кроме размера, оставьте по умолчанию — жмите `Enter`. На запрос «Last sector, +sectors or +size&#123;K, M, G&#125;» укажите `+2G`.

```
Command (m for help): n
Partition type:
     p     primary (0 primary, 0 extended, 4 free)
     e     extended
Select (default p):
Partition number (1-4, default 1):
First sector (4096-784932712):
Last sector, +sectors or +size{K,M,G}: +2G
```

14\. Создайте раздел на оставшейся части карты памяти с помощью команды `n`. Все параметры оставьте по умолчанию.

```
Command (m for help): n
Partition type:
     p     primary (0 primary, 0 extended, 4 free)
     e     extended
Select (default p):
Partition number (1-4, default 1):
First sector (4096-784932712):
Last sector, +sectors or +size{K,M,G}:
```

15\. Проверьте командой `p`, что получилось.

```
p
```

16\. Примените изменения с помощью команды `w`.

```
w
```

17\. Отформатируйте разделы с помощью команд `sudo mkfs. ext4`.

```
sudo mkfs.ext4 /dev/{раздел}
```

Пример:

```
sudo mkfs.ext4 /dev/sdb1
sudo mkfs.ext4 /dev/sdb2
```

18\. Размонтируйте первый раздел с помощью команды `umount`.

```
umount /dev/{first partition}
```

Пример:

```
umount /dev/sdb1
```

19\. Распакуйте скачанный образ прошивки с помощью Archive Manager.\
20\. Скопируйте распакованный образ на карту памяти с помощью команды `dd`.

```
sudo dd bs=4M if=trik-base-v2-trikboard.ext4 of=/dev/{first partion}
```

Пример:

```
sudo dd bs=4M if=trik-base-v2-trikboard.ext4 of=/dev/sdb1
```

## Ubuntu

:::info
Инструкция для версии 14.04 и старше.
:::

1\. Скачайте последнюю версию [встроенного программного обеспечения](https://trikset.com/downloads#firmware).\
2\. Извлеките карту памяти microSD из контроллера ТРИК.\
3\. Вставьте её в компьютер, используя картридер.\
4\. Откройте в файловом менеджере местоположение загруженного образа прошивки.\
5\. Вызовите контекстное меню правым кликом мыши по архиву и выберите первый пункт «Открыть в „Создание загрузочного диска“».\
6\. Из выпадающего меню выберите диск, на который хотите записать прошивку. Затем нажмите кнопку «Начать восстановление».

![](/gitbook/assets/ubuntu.png)


{/* Compatibility anchors for old GitBook/Docusaurus links. */}
###### ​ {#windows}
###### ​ {#linux}
###### ​ {#ubuntu}
