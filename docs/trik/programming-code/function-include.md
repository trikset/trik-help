---
title: "Функция include"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Функция include

### Описание функции

Позволяет использовать функции, реализованные пользователем в других файлах. Предполагается для написания собственных библиотек.

В качестве передаваемого параметра нужно указать полный системный путь до файла с необходимыми функциями либо имя файла. Во втором случае файл для подключения должен лежать в той же директории, что и основной файл, в котором вызывается `include`.

### Вызов функции

<Tabs>
<TabItem value={"other-file-js"} label={"other_file.js"}>

```javascript
// Функции должны быть объявлены как глобальные переменные
sum = function(a, b) {
    return a + b
}
```

</TabItem>

<TabItem value={"my-file-js"} label={"my_file.js"}>
```javascript
include("other_file.js");
print(sum(1, 2));
```
</TabItem>
</Tabs>
