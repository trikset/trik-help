# TRIK Studio language types

Unlike [Lua](https://www.lua.org), the TRIK Studio language is statically-typed, that is, the type of each expression and each variable must be known at compile time. Moreover, the language does not require (and does not even allow!) to explicitly write the types of variables. It uses automatic type inference for the use of variables.

For example, environment "understands" from the expression `a = 1` that type of `a` is integer.

| Type                 | Description                                                                                                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Boolean (logic) type | Can be one of two values: true or false.                                                                                                                                      |
| Real                 | Uses IEEE 754 64-bit binary64 representation (allows to store values up to 1.7E+308).                                                                                         |
| Integer              | Uses 32-bit signed representation (allows to store values in a range from -2 147 483 648 to 2 147 483 647).                                                                   |
| String               | Allows storing character strings of arbitrary length in UTF-8 encoding.                                                                                                       |
| Null type            | It has only a one-nil value and means the absence of any other value type.                                                                                                    |
| [Array](array.md)    | Allows storing an arbitrary number of values ​​of an arbitrary (but for each value in the same array of the same) type, including other arrays, and access values ​​by index. |



See the article about the syntax of expressions in blocks:

{% content-ref url="../" %}
[..](../)
{% endcontent-ref %}
