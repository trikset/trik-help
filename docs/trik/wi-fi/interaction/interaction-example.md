---
title: "Пример решения задачи по взаимодействию двух роботов"
---

# Пример решения задачи по взаимодействию двух роботов

## Условие задачи

Отправить сообщение «5» с одного робота и принять его на втором.

:::warning
Обратите внимание, что решить задачу возможно только в режиме реального робота.
:::

## Решение

Для решения задачи необходимо:

1. Написать [алгоритм передачи сообщения](#algoritm-peredachi-soobsheniya) для ведущего робота.
2. Написать [алгоритм приема сообщения](#algoritm-priema-soobsheniya) для второго робота.
3. [Подключить](/docs/trik/wi-fi/interaction/) роботов в единую сеть.
4. Запустить программы на роботах.

###### ​ {#algoritm-peredachi-soobsheniya}
### Алгоритм передачи сообщения

1\. Перейдите в TRIK Studio в режим [реального робота](/docs/studio/interface/#panel-interpreter).

2\. Введите переменную для сообщения `message` и инициализируйте её, присвоив ей цифру `5` в блоке «[Выражение](/docs/studio/programming-visual/blocks/#expression)».

![](/gitbook/assets/sendMes1.png)

3\. Добавьте блок «[Послать сообщение](https://help.trikset.com/trik-controller/blocks#send-message)» и «[Конец](https://help.trikset.com/trik-studio/blocks-common#block-final)». В свойствах блока «[Послать сообщение](https://help.trikset.com/trik-controller/blocks#send-message)» укажите бортномер робота, на который вы хотите отправить сообщение, и переменную, содержащую сообщение.

![](/gitbook/assets/sendMes2.png)

#### Общий вид алгоритма

![](/gitbook/assets/sendMes3.png)

###### ​ {#algoritm-priema-soobsheniya}
### Алгоритм приема сообщения

1\. Перейдите в TRIK Studio в режим [реального робота](/docs/studio/interface/#panel-interpreter).

2\. Добавьте блок «[Получить сообщение](/docs/trik/programming-visual/blocks/#receive-message-from-thread)».\
\
В свойствах блока укажите переменную, в которую хотите записать сообщение, отправленное с другого робота. Переменная может называться как угодно.\
\
В свойстве «Дождаться сообщения» укажите значение `истина`.

![](/gitbook/assets/receiveMes1.png)

3\. После того как сообщение пришло, выведите его на экран робота в течение 3 секунд, а затем закончите выполнение алгоритма. Для этого добавьте блоки «[Напечатать текст](/docs/trik/programming-visual/blocks/#print-text)», «[Таймер](/docs/studio/programming-visual/blocks/#timer)» и «[Конец](/docs/studio/programming-visual/blocks/#final)».\
\
В свойствах блока «Напечатать текст» поставьте флажок `Вычислять` и укажите значение `истина` в поле «Обновить картинку».

![](/gitbook/assets/receiveMes2.png)

#### Общий вид алгоритма

![](/gitbook/assets/receiveMes3.png)
