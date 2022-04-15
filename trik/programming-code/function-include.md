# Function include

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

### Function description

Allows you to use functions implemented by the user in other files. It is supposed to write your own libraries.

As a passed parameter you must specify the full system path to the file with the required functions or the name of the file. In the second case, the file for a connection must be in the same directory as the main file in which `include` is called.

### Function call

{% tabs %}
{% tab title="other_file.js" %}
{% code title="other_file.js" %}
```javascript
// Functions must be declared as global variables
sum = function(a, b) {
    return a + b;
}
```
{% endcode %}
{% endtab %}

{% tab title="my_file.js" %}
```javascript
include("other_file.js");
print(sum(1, 2));
```
{% endtab %}
{% endtabs %}
