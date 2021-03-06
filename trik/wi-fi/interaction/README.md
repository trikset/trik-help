# Взаимодействие контроллеров ТРИК

Контроллеры ТРИК могут взаимодействовать друг с другом, что позволяет решать [задачи](interaction-example.md) по передаче сообщений между роботами.

Для взаимодействия контроллеров необходимо будет выбрать **ведущий** контроллер — тот, к которому мы будем подключать остальные контроллеры. А также подключить все контроллеры к одной сети. Это можно сделать двумя способами:

1\. С помощью существующей сети.

![](../../../.gitbook/assets/connection-on-wifi.png)

2\. С помощью создания точки доступа Wi-Fi на одном из контроллеров.

![](../../../.gitbook/assets/connection-on-robot.png)

## Способ 1. Взаимодействие с помощью существующей Wi-Fi-сети

1\. Выберите **ведущий** контроллер и подключите его к существующей Wi-Fi-сети в [режиме клиента](../network-connection.md#client).

2\. В [веб-интерфейсе](../../web-interface.md) **ведущего** контроллера в поле «Взаимодействие роботов» укажите бортовой номер (обычно для ведущего это `01`, но можно любой другой) и его IP-адрес.

![Пример ввода бортномера и IP-адреса ведущего контроллера](../../../.gitbook/assets/configurator-main.png)

3\. Подключите **все** остальные контроллеры к этой же Wi-Fi-сети в [режиме клиента](../network-connection.md#client).

4\. Укажите для каждого из них в своих веб-интерфейсах в поле «Взаимодействие роботов» бортовой номер (отличный от других) и IP-адрес **ведущего** контроллера.

![Пример ввода бортномера и IP-адреса ведущего контроллера](../../../.gitbook/assets/configurator-other.png)

{% hint style="info" %}
Также бортномер и IP-адрес **ведущего** контроллера можно указать на контроллере в пункте меню `Взаимодействие`.
{% endhint %}

4\. На **всех** контроллерах зайдите в пункт меню `Взаимодействие` и нажмите кнопку «Подключиться». В правом верхнем углу на экранах контроллеров должна появиться иконка<img src="../../../.gitbook/assets/mailboxConnected.png" alt="" data-size="line">.

![Скриншоты экранов двух подключенных к друг другу контроллеров](../../../.gitbook/assets/trik-connected.png)

## Способ 2. Взаимодействие с помощью Wi-Fi точки доступа одного из контроллеров <a href="#trikwap" id="trikwap"></a>

### Действия с ведущим контроллером

1\. Выберите **ведущий** контроллер и раздайте с него Wi-Fi с помощью [режима точки доступа](../network-connection.md#accesspoint) (выберите в меню `Сеть → Wi-Fi точка доступа`).

![](../../../.gitbook/assets/trik-wi-fi-accesspoint.png)

2\. Далее вернитесь на главный экран меню и выберите пункт `Взаимодействие`.

![](<../../../.gitbook/assets/Главный экран - взаимодействие.png>)

3\. Укажите бортовой номер (обычно для ведущего это `01`, но можно любой другой) и его IP-адрес.

![](../../../.gitbook/assets/Взаимодействие.png)

### Действия с остальными контроллерами

4\. Подключите остальные контроллеры к ведущему с помощью [режима Wi-Fi-клиент](../network-connection.md#client). Для этого в веб-интерфейсе каждого контроллера необходимо в полях «Wi-Fi клиент» указать имя и пароль сети ведущего контроллера в режиме Wi-Fi точки доступа.

5\. Зайдите в веб-интерфейс, используя IP-адрес, который отображается на контроллере в режиме Wi-Fi клиент.

6\. Укажите для каждого из контроллеров в своих веб-интерфейсах в поле «Взаимодействие роботов» бортовой номер (отличный от других) и IP-адрес **ведущего** контроллера.

![Пример ввода бортномера и IP-адреса ведущего контроллера](../../../.gitbook/assets/configurator-other.png)

{% hint style="info" %}
Также бортномер и IP-адрес **ведущего** контроллера можно указать на контроллере в пункте меню `Взаимодействие`.
{% endhint %}

### Действие со всеми контроллерами

7\.  На всех контроллерах зайдите в пункт меню `Взаимодействие` и нажмите кнопку «Подключиться». В правом верхнем углу на экранах контроллера должна появиться иконка<img src="../../../.gitbook/assets/mailboxConnected.png" alt="" data-size="line">.

![Скриншоты экранов двух подключенных к друг другу контроллеров](../../../.gitbook/assets/trik-connected.png)

{% content-ref url="interaction-example.md" %}
[interaction-example.md](interaction-example.md)
{% endcontent-ref %}
