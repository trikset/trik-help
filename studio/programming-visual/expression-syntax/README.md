# Syntax of expressions in the blocks

To declare variables and set certain values ​​for them, the “[Variable Initialization](../blocks.md#variableinit)” block is used.

!["Variable Initialization" block](../../../.gitbook/assets/variableInitBlock\_100.png)

For mathematical expressions — "[Expression](../blocks.md#expression)" block.

!["Expression" block](../../../.gitbook/assets/functionBlock\_100.png)

Also, mathematical expressions, including those that change the values ​​of variables, can be used almost everywhere where you can specify a value.

Blocks and their properties that do not allow the use of mathematical expressions are described in the section ["Common blocks"](../blocks.md#list-of-common-blocks).

All variables in the program are global, i.e. their values ​​can be used in any block in the program.

## TRIK Studio language

The language used inside the blocks is based on [Lua 5.3](https://www.lua.org) and largely follows its syntax. Nevertheless, there are significant differences, so a full description of the language used in TRIK Studio is given here.

* [Types](types/)
* [Tokens](lexemes.md)
* [Operators](operators.md)
* [Sensor variables](sensory-variables.md)
* [Constants](const.md)
* [Built-in functions](built-in-functions.md)

## Examples of expressions

Declaration of several variables in one block "[Expression](../blocks.md#expression)":

![](<../../../.gitbook/assets/18 1 En Syntax1.png>)

The same using ["Variables Initialization" ](../blocks.md#variableinit)blocks:

![](<../../../.gitbook/assets/18 2 En Syntax2.png>)

Proportional controller for driving along the line using two light sensors for the TRIK platform:

![](<../../../.gitbook/assets/18 3 En Syntax3.png>)

An example of using [arrays](types/array.md) to set the ports of the “Motors forward” block. An array is created with the name `a`, the port `M3` is assigned to the zero element, the first is `M1`, then the contents of the first element of the array are changed to M4, then the resulting array is transferred to the “Ports” property of the “Motors forward” block:

![](<../../../.gitbook/assets/18 4 En Syntax4.png>)
