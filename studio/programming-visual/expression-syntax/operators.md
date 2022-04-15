# TRIK Studio language operators

1. [Binary operators](operators.md#binary-operators).
2. [Unary operators](operators.md#unary-operators).
3. [Assignment operator](operators.md#assignment-operator).
4. [Return operator](operators.md#return-operator).
5. [Empty operator](operators.md#empty-operator).

## Binary operators <a href="#binary-operators" id="binary-operators"></a>

| ​Title               | ​Title                       | ​Title                                                                                                         |
| -------------------- | ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| +                    | Addition                     | Applicable to real and integer values. The result is an integer if both arguments are integer, otherwise real. |
| -                    | Subtraction                  | Applicable to real and integer values. The result is an integer if both arguments are integer, otherwise real. |
| \*                   | Multiplication               | Applicable to real and integer values. The result is an integer if both arguments are integer, otherwise real. |
| /                    | Division                     | Applicable to real and integer values. The result is real.                                                     |
| //                   | Integer division             | Applicable to integer values. The result is an integer.                                                        |
| ^                    | Power                        | Applicable to real and integer values. The result is real.                                                     |
| %                    | Remainder of the division    | Applicable to integer values. The result is an integer.                                                        |
| &                    | Bitwise "and"                | Applicable to integer values. The result is an integer.                                                        |
| \|                   | Bitwise "or"                 | Applicable to integer values. The result is an integer.                                                        |
| >>, <<               | Bitwise left and right shift | Applicable to integer values. The result is an integer.                                                        |
| ..                   | Concatenation                | Applicable to string values. The result is a string.                                                           |
| >=, >, <, <=         | Comparison operations        | Applicable to integer and real values. The result is boolean.                                                  |
| ==                   | Equality check               | Applicable to any type of value. The result is boolean.                                                        |
| \~=, !=, '\~=', '!=' | Inequality check             | Applicable to any type of value. The result is boolean. All notations are equal.                               |
| and, &&              | Logical "and"                | Applicable to integer, real and boolean types. The result is boolean. All notations are equal.                 |
| or, \|\|             | Logical "or"                 | Applicable to integer, real and boolean types. The result is boolean. All notations are equal.                 |

## Unary operators <a href="#unary-operators" id="unary-operators"></a>

| ​Title | ​Title                 | ​Title                                                                                                                                           |
| ------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| -      | Arithmetic unary minus | Applicable to integer and real values. The result is an integer or real (depending on the type of argument).                                     |
| \~     | Bitwise "not"          | Applicable to integer values. The result is an integer.                                                                                          |
| not    | Logical "not"          | Applies to boolean, integer, real, and string values, the result is boolean (0 or an empty string is considered false, everything else is true). |
| #      | Length operator        | Applicable to string values. The result is an integer.                                                                                           |

## **Assignment operator**

It has the following form:

`variable1, variable2, …, variableN = expression1, expression2, …, expressionN`

In its simplest form variable `= expression`.

## **Return operator**

It is written as an expression and should be at the end of the statement block.

## **Empty operator**

Written as `;`.

## Example

A statement block with two assignment operators and a return operator:

```
a, b = 1, 2; -- assignment operator and empty operator
c = 3; -- assignment operator and empty operator
a + b + c -- return operator
```
