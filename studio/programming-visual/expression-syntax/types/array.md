# Array

An array is one of [the types of TRIK Studio language](./) that stores a set of values ​​(array elements) identified by an index. The numbering of indices in the array starts at 0.

Arrays can be created explicitly using the following expressions (the next lines are equivalent):

```
a = {1; 2; 3; 4};
a = {1, 2, 3, 4};
```

Or with explicit indices:

```
a = {[0] = 1, [10] = 2, [20] = 3};
```

You can use arrays without creating them. For example, like this:

```
a[1] = 1;
a[2] = 2;
```

In this case, "empty spaces" in the array (indices that did not have an explicit assignment) will be filled with default values:

* `0` — for **real** and **integer**;
* `false` _**** —_ for **boolean**;
* _empty lines_ for arrays of **strings**.

Array values ​​can also be used without curly braces if used as the return value. For example, this expression will return an array of numbers `1` and `2`:

```
a = 1;
b = 2;
a, b 
```

This is implemented in order to interpret the enumerations of values ​​(for example, the ports of motors in the block ["Motors forward"](../../../../trik/programming-visual/blocks.md#motors-forward)) as arrays. Therefore, wherever you use a comma-separated value notation, you can use an array.
