# TRIK Studio language tokens

The language uses **spaces**, **tabs**, and **line breaks** outside of string literals only as **separators** between tokens — they do not affect the interpretation of expressions.

The language has the following keywords:

* and
* false
* nil
* not
* or
* true​

And the following [operators](operators.md):

```lua
+ - * / % ^ # & ~ | << >> // == ~= <= >= < > = ( ) { } [ ] ; : , . .. && ||
```

**String literals** are written in either single or double-quotes. For example,

```lua
a = 'alo123'
a = "alo123"
```

**Integers** are written either in decimal, octal, or hexadecimal. Hexadecimal numbers begin with the prefix `0x`, octal numbers begin with the prefix `0`. For example,

* `3`, `345` — decimal number
* `0xff`, `0xBEBADA` — hexadecimal number
* `07654321` — octal number

**Real numbers** are written either in conventional or exponential form. For example,

```
3.0
3.1416 
314.16e-2
0.31416E1 
34e1​
```

**Comments** begin with `--` and continue to the end of the line. For example,

```
a = 1; -- remark
```



See the article about the syntax of expressions in the blocks:

{% content-ref url="./" %}
[.](./)
{% endcontent-ref %}
