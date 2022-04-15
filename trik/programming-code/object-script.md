# Object «script»

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

Represents methods of controlling script execution and accessing operating system functions.

| Method                                      | Description                                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [quit](object-script.md#quit)               | Sets the end-of-run flag for an event-driven program.                                                   |
| [random](object-script.md#random)           | Returns a random number from the specified range.                                                       |
| [readAll](object-script.md#readall)         | Считывает всё содержимое указанного файла в массив строк.                                               |
| [removeFile](object-script.md#removefile)   | Deletes the specified file.                                                                             |
| [run](object-script.md#run)                 | Sets the event-oriented program flag.                                                                   |
| [system](object-script.md#system)           | Выполняет переданную в качестве параметра команду консоли операционной системы.                         |
| [time](object-script.md#time)               | Returns the time stamp - the number of milliseconds elapsed since the beginning of January 1, 1970 GMT. |
| [timer](object-script.md#timer)             | Creates and returns a timer.                                                                            |
| [wait](object-script.md#wait)               | Suspends script execution for the number of milliseconds passed.                                        |
| [writeToFile](object-script.md#writetofile) | Writes a string to a file.                                                                              |

## quit

Sets the end-of-run flag for an event-driven program. As soon as the current event handler completes, the script execution will end.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.quit();	
```
{% endtab %}

{% tab title="Python" %}
```
script.quit();
```
{% endtab %}
{% endtabs %}

## random

Returns a random number from the specified range.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.random(min, max);
```
{% endtab %}

{% tab title="Python" %}
```
script.random(min, max);
```
{% endtab %}
{% endtabs %}

The range boundaries must be specified as parameters.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var a = script.random(0, 10); // random number from 0 to 10
```
{% endtab %}

{% tab title="Python" %}
```
a = script.random(0, 10); # random number from 0 to 10
```
{% endtab %}
{% endtabs %}

## readAll

Reads the entire contents of the specified file into a string array.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.readAll('fileName');
```
{% endtab %}

{% tab title="Python" %}
```
script.readAll('fileName');
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the name of the file with the extension.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var lines = script.readAll('input.txt'); // reads the text file input.txt
```
{% endtab %}

{% tab title="Python" %}
```
lines = script.readAll('input.txt'); # reads the text file input.txt
```
{% endtab %}
{% endtabs %}

## removeFile

Deletes the specified file.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.removeFile('fileName');
```
{% endtab %}

{% tab title="Python" %}
```
script.removeFile('fileName');
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the name of the file with the extension.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.removeFile('file.txt'); // delete file file.txt
```
{% endtab %}

{% tab title="Python" %}
```
script.removeFile('file.txt'); # delete file file.txt
```
{% endtab %}
{% endtabs %}

## run

Sets the event-oriented program flag. When the script finishes, it is not unloaded from memory but continues to wait for events to occur until one of the handlers calls the "[quit](object-script.md#quit)" method.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.run();
```
{% endtab %}

{% tab title="Python" %}
```
script.run();
```
{% endtab %}
{% endtabs %}

## system

Executes the command transmitted.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
script.system();
```
{% endtab %}

{% tab title="Python" %}
```
ript.system();
```
{% endtab %}
{% endtabs %}

As a parameter, you must specify the operating system console command.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.system("reboot");
```
{% endtab %}

{% tab title="Python" %}
```
script.system("reboot");
```
{% endtab %}
{% endtabs %}

## time

Returns the time stamp - the number of milliseconds elapsed since the beginning of January 1, 1970 GMT.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```
script.time();
```
{% endtab %}

{% tab title="Python" %}
```
script.time();
```
{% endtab %}
{% endtabs %}

## timer

Creates and returns a timer (class `QTimer`) that sends a `timeout` signal every n milliseconds.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.timer(n);
```
{% endtab %}

{% tab title="Python" %}
```
script.timer(n);
```
{% endtab %}
{% endtabs %}

`n` is passed as a parameter.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.timer(1000);
```
{% endtab %}

{% tab title="Python" %}
```
script.timer(1000);
```
{% endtab %}
{% endtabs %}

## wait

Suspends script execution for the number of milliseconds passed.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.wait(msCount);
```
{% endtab %}

{% tab title="Python" %}
```
script.wait(msCount);
```
{% endtab %}
{% endtabs %}

The number of milliseconds is passed as a parameter.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.wait(1000); // stop the execution of the script for one second
```
{% endtab %}

{% tab title="Python" %}
```
script.wait(1000); # stop the execution of the script for one second
```
{% endtab %}
{% endtabs %}

## writeToFile

Writes a string to a file.

#### Syntax

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.writeToFile('fileName', 'text');
```
{% endtab %}

{% tab title="Python" %}
```
script.writeToFile('fileName', 'text');
```
{% endtab %}
{% endtabs %}

The file name and the line to be written should be specified as parameters.

#### Example

{% tabs %}
{% tab title="JavaScript" %}
```javascript
script.writeToFile('output.txt', 'Hello, world'); // write "Hello, world" in the output.txt file
```
{% endtab %}

{% tab title="Python" %}
```
script.writeToFile('output.txt', 'Hello, world'); # write "Hello, world" in the output.txt file
```
{% endtab %}
{% endtabs %}
