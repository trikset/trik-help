---
description: Подробная инструкция
---

# Подключение к контроллеру ТРИК с помощью UART

Кроме подключения контроллера ТРИК к компьютеру с [помощью Wi-Fi](wi-fi/), его можно подлючить через преобразователь интерфейса USB в интерфейс UART на базе чипа CP2102:

![](<../.gitbook/assets/Преобразователь USB — UART на CP2102 с проводом - 2.png>)

Ниже описан алгоритм подключения.

1. [Установка драйверов](uart.md#uart-driver)
2. [Настройка COM-порта](uart.md#uart-com)
3. [Установка модема](uart.md#uart-modem1)
4. [Настройка модема](uart.md#uart-modem2)
5. [Создание сетевого подключения](uart.md#uart-lan1)
6. [Настройка сетевого подключения](uart.md#6-nastroika-setevogo-podklyucheniya)
7. [Подключение к контроллеру](uart.md#7-podklyuchenie-k-kontrolleru)

## 1. Установка драйверов <a href="#uart-driver" id="uart-driver"></a>

1\. [Скачайте драйвера](https://www.silabs.com/documents/public/software/CP210x\_Windows\_Drivers.zip) с официального сайта производителя преобразователя: [silabs.com](https://www.silabs.com).

2\. Распакуйте архив и запустите установщик драйвера, соответствующий вашей операционной системе (32 или 64 бит).

![](../.gitbook/assets/1-3.jpg)

3\. После окончания установки подключите преобразователь USB — UART к компьютеру (без контроллера). Дождитесь, пока устройство определится.

![](../.gitbook/assets/2-2.jpg)

4\. Проверьте в «Диспетчере устройств», правильно ли установился драйвер.

![](../.gitbook/assets/2-3.jpg)

5\. Если в «Диспетчере устройств» `CP2102 USB to UART Bridge Controller` отображается с восклицательным знаком, как на примере ниже, значит драйвер устройства не установлен. Повторите процедуру установки или обратитесь к специалисту.

![](../.gitbook/assets/19a.jpg)

Если данное устройство в списке «Диспетчера устройств» отсутствует, проверьте работоспособность USB-порта и правильность установки устройства в USB-порт. При корректном подключении преоразователя на нем должен загореться красный светодиод «POWER».

![](../.gitbook/assets/f2.png)

## 2. Настройка COM-порта <a href="#uart-com" id="uart-com"></a>

1\. В «Диспетчере Устройств» вызовите свойства `Silicon Labs CP210x USB to UART Bridge (COMx)`.&#x20;

На вкладке «Параметры порта» установите:

* Бит в секунду: 115200.
* Управление потоком: Нет.

![](../.gitbook/assets/2-5.jpg)

По кнопке «Дополнительно» можно выбрать номер COM-порта, если это необходимо:

![](../.gitbook/assets/2-6.jpg)

![](../.gitbook/assets/2-7.jpg)

## 3. Установка модема <a href="#uart-modem1" id="uart-modem1"></a>

1\. На панели управления выберите раздел «Телефон и модем».

![](../.gitbook/assets/3-3.jpg)

2\. Введите любой телефонный код города и нажмите «ОК».

![](<../.gitbook/assets/UART 3 Modem1 2.jpg>)

3\. На вкладке «Модемы» нажмите кнопку «Добавить».&#x20;

![](<../.gitbook/assets/UART 3 Modem1 4.jpg>)

4\. Выберите «Не определять тип модема (выбор из списка)» и нажмите «Далее».

![](<../.gitbook/assets/UART 3 Modem1 5.jpg>)

5\. Выберите «Стандартные типы модемов» → «Последовательный кабель для соединения компьютеров» и нажмите «Далее».

![](<../.gitbook/assets/UART 3 Modem1 6.jpg>)

6\. Выберите указанный ранее порт (в нашем примере — COM3), затем нажмите «Далее» и «Готово».

![](<../.gitbook/assets/UART 3 Modem1 7.jpg>)

![](<../.gitbook/assets/UART 3 Modem1 9.jpg>)

## 4. Настройка модема <a href="#uart-modem2" id="uart-modem2"></a>

1\. Вновь на панели управления выберите «Телефон и модем» и перейдите на вкладку «Модемы».

2\. Выберите «Последовательный кабель для соединения компьютеров (COM3)» и нажмите кнопку «Свойства».

![](<../.gitbook/assets/UART 4 Modem2 1.jpg>)

3\. Если параметры на вкладках «Модем» и «Дополнительные параметры связи» невозможно изменить,

![](<../.gitbook/assets/UART 4 Modem2 2.jpg>)

![](<../.gitbook/assets/UART 4 Modem2 2a.jpg>)

на вкладке «Общие» нажмите кнопку «Изменить параметры».

![](<../.gitbook/assets/UART 4 Modem2 3.jpg>)

4\. На вкладке «Дополнительные параметры связи» нажмите кнопку «Изменить умолчания...»

![](<../.gitbook/assets/UART 4 Modem2 4.jpg>)

5\. На вкладке «Общие» установите:\
– Скорость порта: 115200.\
– Управление потоком: Отсутствует.

И нажмите «ОК».

![](<../.gitbook/assets/UART 4 Modem2 5.jpg>)

6\. На вкладке «Модем» должны правильно отображаться COM-порт (COM3) и скорость соединения (115200).

![](<../.gitbook/assets/UART 4 Modem2 6.jpg>)

## 5. Создание сетевого подключения <a href="#uart-lan1" id="uart-lan1"></a>

1\. На панели управления выберите «Центр управления сетями и общим доступом».

![](<../.gitbook/assets/UART 5 LAN1 1.jpg>)

2\. Затем «Настройка нового подключения или сети».

![](<../.gitbook/assets/UART 5 LAN1 2.jpg>)

3\. Выберите «Настройка телефонного подключения» и нажмите «Далее».

![](<../.gitbook/assets/UART 5 LAN1 3.jpg>)

4\. В поле «Набираемый номер» введите `1` и нажмите кнопку «Подключить».

![](<../.gitbook/assets/UART 5 LAN1 4.jpg>)

5\. Затем выберите «Всё равно создать это подключение».

![](<../.gitbook/assets/UART 5 LAN1 5.jpg>)

6\. Нажмите «Закрыть».

![](<../.gitbook/assets/UART 5 LAN1 6.jpg>)

## 6. Настройка сетевого подключения&#x20;

1\. На панели управления выберите «Центр управления сетями и общим доступом», а затем нажмите «Изменение параметров адаптера».

![](<../.gitbook/assets/UART 6 LAN2 1.jpg>)

2\. Зайдите в свойства «Телефонного подключения».

![](<../.gitbook/assets/UART 6 LAN2 2.jpg>)

3\. На вкладке «Общие» в окне «Подключаться через» выберите «Последовательный кабель для соединения компьютеров (COMx)» и нажмите «Настроить».

![](<../.gitbook/assets/UART 6 LAN2 3.jpg>)

4\. Выберите следующий параметр:\
– Наибольшая скорость: 115200.

И уберите галочку «Аппаратное управление потоком». Нажмите «ОК».

![](<../.gitbook/assets/UART 6 LAN2 4.jpg>)

5\. На вкладке «Параметры» нажмите на кнопку «Параметры PPP...»

![](<../.gitbook/assets/UART 6 LAN2 5.jpg>)

6\. Уберите галочку «Использовать программное сжатие данных» и нажмите «ОК».

![](<../.gitbook/assets/UART 6 LAN2 6.jpg>)

7\. На вкладке «Сеть» должен быть включен протокол «IPv4».

![](<../.gitbook/assets/UART 6 LAN2 7 (1).jpg>)

## 7. Подключение к контроллеру

1\. Извлеките преобразователь USB — UART из разъема USB.

2\. Включите контроллер.

3\. Подключите преобразователь USB — UART к соответствующему порту контроллера.

![](<../.gitbook/assets/UART 7 TRIK 0.png>)

![](<../.gitbook/assets/UART 7 TRIK 0.JPG>)

3\. Подкючите преобразователь USB — UART к компьютеру.

![](<../.gitbook/assets/UART 7 TRIK 0a.jpg>)

4\. Откройте «Сетевые подключения» (Панель управления → «Центр управления сетями и общим доступом»→ «Изменение параметров адаптера»).

![](<../.gitbook/assets/UART 7 TRIK 1.jpg>)

5\. Откройте «Телефонное подключение» и нажмите на кнопку «Вызов».

![](<../.gitbook/assets/UART 7 TRIK 2.jpg>)

6\. Если всё сделано верно, на преобразователе должны замигать лампочки «RXD» и «TXD».

![](<../.gitbook/assets/UART 7 TRIK A (5).png>)

А статус соединения должен измениться на активный.

![](<../.gitbook/assets/UART 7 TRIK 3.jpg>)

7\. Откройте окно состояния телефонного подлючения.

![](<../.gitbook/assets/UART 7 TRIK 4.jpg>)

8\. Нажмите на кнопку «Сведения».

![](<../.gitbook/assets/UART 7 TRIK 5.jpg>)

9\. Адрес IPv4 должен быть `10.0.5.1` .

![](<../.gitbook/assets/UART 7 TRIK 6.jpg>)

10\. Если всё верно, то можно зайти в [веб-интерфес](web-interface.md) по адресу `10.0.5.2`.

![](<../.gitbook/assets/UART 7 TRIK 7a.jpg>)

11\. Или указать IP-адрес `10.0.5.2` в соответствующем окне TRIK Studio для управления контроллером.

![](<../.gitbook/assets/UART 7 TRIK 8a.jpg>)