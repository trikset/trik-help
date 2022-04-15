# Common blocks

The list of available blocks depends on the chosen robotics kit and on the robot model (real robot or [2D model simulation](../2d-model/)). Blocks unavailable for the current kit are not shown at all, and blocks inaccessible for this model within the same platform are shown in gray and are not available for dragging onto the [scene](../interface/#editor-window).

![](<../../.gitbook/assets/16 1 En blocks-grey.png>)

Common blocks for all platforms are presented below. A program using only these blocks will be executed on any platform without any changes.

A list of blocks specific to a particular robotics kit can be found in the relevant sections:

* [TRIK](../../trik/programming-visual/blocks.md)
* [LEGO EV3](../../ev3/blocks.md)
* [LEGO NXT](../../nxt/blocks.md)
* [Geoscan Pioneer Quadcopter](../../pioneer/blocks.md)

## List of common blocks

|                                                                                              Icon                                                                                             |                        Name                       | Description                                                                                                                                                                                                                                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](https://gblobscdn.gitbook.com/assets%2F-M-9YMGCK0ySSnTAiseS%2F-M4siuJqdaQ-i-x\_2pCT%2F-M4soizl8q-7pvnHEsmN%2FinitialBlock\_50.png?alt=media\&token=c1fd4b99-84cd-4f2f-a78d-4cb718f8dbe0)  |         [Initial Node](blocks.md#initial)         | <p>The starting point for program execution.</p><p></p><p>Each diagram should have only one such block. There should not be any incoming links in it, and there should be only one outgoing link from this element.</p><p></p><p>The process of diagram interpretation begins with this block.</p> |
|                                                        <img src="../../.gitbook/assets/finalBlock_50.png" alt="" data-size="original">                                                        |           [Final Node](blocks.md#final)           | <p>End of the program.</p><p></p><p>If the program consists of several parallel execution sections, reaching this block completes the corresponding execution section.</p><p></p><p>This block cannot have outgoing links.</p>                                                                     |
|                                                  <img src="../../.gitbook/assets/variableInitBlock — копия.png" alt="" data-size="original">                                                  | [Variable Initialization](blocks.md#variableinit) | A block for declaring a new variable and setting a value for it.                                                                                                                                                                                                                                   |
|                                                       <img src="../../.gitbook/assets/ifBlock_50 (1).png" alt="" data-size="original">                                                        |          [Condition](blocks.md#condition)         | <p>Separation of program execution in accordance with a given condition.</p><p></p>                                                                                                                                                                                                                |
|                                                        <img src="../../.gitbook/assets/endIfBlock_50.png" alt="" data-size="original">                                                        |             [End if](blocks.md#endif)             | Indicates merging of two branches of a conditional statement. It does not perform any actions but is useful for ensuring the structure of the program.                                                                                                                                             |
|                                                 <img src="../../.gitbook/assets/preconditionalLoopBlock (1).png" alt="" data-size="original">                                                 |      [Pre-conditional loop](blocks.md#while)      | A loop that is executing so far some condition is true, indicated before it begins. This condition is checked before the loop body is executed, so the body may not be satisfied even once (if the condition is false from the very beginning).                                                    |
|                                                        <img src="../../.gitbook/assets/loopBlock_50.png" alt="" data-size="original">                                                         |               [Loop](blocks.md#loop)              | Block that provides the execution of a sequence of blocks several times.                                                                                                                                                                                                                           |
|                                                       <img src="../../.gitbook/assets/switchBlock_50.png" alt="" data-size="original">                                                        |             [Switch](blocks.md#switch)            | A condition with several alternatives.                                                                                                                                                                                                                                                             |
|                                                      <img src="../../.gitbook/assets/functionBlock_50.png" alt="" data-size="original">                                                       |         [Expression](blocks.md#expression)        | Counts the value of the specified expression. Initialization of variables is also allowed.                                                                                                                                                                                                         |
|                                                   <img src="../../.gitbook/assets/subprogramRobotsBloc_50.png" alt="" data-size="original">                                                   |         [Subprogram](blocks.md#subprogram)        | Subprogram execution.                                                                                                                                                                                                                                                                              |
|                                                        <img src="../../.gitbook/assets/forkBlock_50.png" alt="" data-size="original">                                                         |               [Fork](blocks.md#fork)              | <p>Block divides program execution into several threads.</p><p></p>                                                                                                                                                                                                                                |
|                                                       <img src="../../.gitbook/assets/blocks-merge_50.png" alt="" data-size="original">                                                       |               [Join](blocks.md#join)              | Block merging parallel tasks.                                                                                                                                                                                                                                                                      |
|                                                     <img src="../../.gitbook/assets/killThreadBlock_50.png" alt="" data-size="original">                                                      |        [Kill thread](blocks.md#killthread)        | Finishes the task with the identifier specified in the "Task" property. Must be applied from another task.                                                                                                                                                                                         |
|                                                     <img src="../../.gitbook/assets/randomizerBlock_50.png" alt="" data-size="original">                                                      |     [Random Initialization](blocks.md#random)     | A block for assigning a specified variable to a random integer from a given interval.                                                                                                                                                                                                              |
|                                                      <img src="../../.gitbook/assets/block-comment_50.png" alt="" data-size="original">                                                       |            [Comment](blocks.md#comment)           | Block for adding arbitrary text to the diagram as a comment.                                                                                                                                                                                                                                       |
|                                                        <img src="../../.gitbook/assets/timerBlock_50.png" alt="" data-size="original">                                                        |              [Timer](blocks.md#timer)             | Block for setting the delay. The delay time is set in the Delay parameter in milliseconds.                                                                                                                                                                                                         |
|                                                     <img src="../../.gitbook/assets/markerDownBlock_50.png" alt="" data-size="original">                                                      |        [Marker Down](blocks.md#markerdown)        | Start drawing with a marker of a given color on the floor. When the robot moves in a two-dimensional model, a colored line will remain behind it.                                                                                                                                                  |
|                                                      <img src="../../.gitbook/assets/markerUpBlock_50.png" alt="" data-size="original">                                                       |          [Marker up](blocks.md#markerup)          | Finish drawing with a marker.                                                                                                                                                                                                                                                                      |

## Initial Node <a href="#initial" id="initial"></a>

![Initial Node](../../.gitbook/assets/initialBlock.png)

The starting point for program execution.

Each diagram should have only one such block. There should not be any incoming links in it, and there should be only one outgoing link from this element.

The process of diagram interpretation begins with this block.

## Final Node <a href="#final" id="final"></a>

![Final Node](<../../.gitbook/assets/finalBlock (1).png>)

End of the program.

If the program consists of several parallel execution sections, reaching this block completes the corresponding execution section.

This block cannot have outgoing links.

## Variable Initialization <a href="#variableinit" id="variableinit"></a>

![Variable Initialization](../../.gitbook/assets/variableInitBlock.png)

A block for declaring a new variable and setting a value for it. The same operation can be performed using the [Expression](blocks.md#expression) block, but this block makes the program more clear.

#### Properties

| Property     | Description                                                                |
| ------------ | -------------------------------------------------------------------------- |
| **Value**    | An expression is specified that defines the initial value of the variable. |
| **Variable** | The variable name is specified.                                            |

## Condition <a href="#condition" id="condition"></a>

![Condition](<../../.gitbook/assets/ifBlock\_100 (1).png>)

Separation of program execution in accordance with a given condition.

This block must have two outgoing connections, at least one of which must have the value of the Condition parameter set: true or false.

#### Properties

| Property      | Description                                                                                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Condition** | A logical expression is indicated (for more details, see the article "[Expression Syntax](expression-syntax/)"), based on the value of which the further path of the diagram execution will be selected. |

## End if <a href="#endif" id="endif"></a>

![End if](<../../.gitbook/assets/endIfBlock\_100 (1).png>)

Indicates merging of two branches of a conditional statement. It does not perform any actions but is useful for ensuring the structure of the program.\
\
It does not perform any actions but is useful for ensuring the structure of the program. If you adhere to the rule that all branches of the "[Condition](blocks.md#condition)" or "[Switch](blocks.md#switch)" operators converge on such a block, this will significantly increase the chances that the generator will be able to generate code in text language without `goto` statements.

## Pre-conditional Loop <a href="#while" id="while"></a>

![Pre-conditional Loop](<../../.gitbook/assets/preconditionalLoopBlock (2).png>)

A loop with a precondition is a loop that is true so far for some condition specified before it starts. This condition is checked before the loop body is executed, so the body may not be satisfied even once (if the condition is false from the very beginning).

#### Properties

| Property      | Description                                                                                                                                                                                                          |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Condition** | The logical expression is specified (for more details, see the article "[Syntax of expressions](expression-syntax/)"), based on the value of which the further path of the diagram interpretation will be selected.  |

## Loop <a href="#loop" id="loop"></a>

![Loop](../../.gitbook/assets/loopBlock\_100.png)

Block that provides the execution of a sequence of blocks several times.\
\
The number of repetitions is set by the value of the Iteration parameter. The block must have two outgoing connections, one of which must be marked with the value “body” (that is, the value of the “Condition” parameter the connection must have “body”). Another connection coming from the “Cycle” block should remain unmarked: it will go through when the program passes through the “Loop” block the specified number of times.\
\
Infinite loops and loops of the form `while / do` and `while` are organized without using this block, looping the control flow using links. An exit from such a loop is carried out using the “Condition” block.

## Switch <a href="#switch" id="switch"></a>

![Switch](../../.gitbook/assets/switchBlock\_100.png)

A condition with several alternatives.

In the "Expression" parameter, you can specify an arbitrary expression (for more details, see the section "[Syntax of expressions](expression-syntax/)"), based on the value of which the further path of the diagram interpretation will be selected.

This block must have several outgoing links. All relations, except one, should be marked with an elementary value (string, number, etc.), which can take an expression (the value is simply written in the Condition property of the connection). One of the links should not be marked: it jumps if the expression is not equal to any of the listed values.

## Expression <a href="#expression" id="expression"></a>

![Expression](<../../.gitbook/assets/functionBlock\_100 (1).png>)

Evaluate the value of the specified expression. Initialization of variables is also allowed.

For more information about the syntax of valid expressions for the Expression parameter, see the section "[Expression syntax](expression-syntax/)".

## Subprogram <a href="#subprogram" id="subprogram"></a>

![Subprogram](../../.gitbook/assets/subprogramRobotsBloc\_100.png)

Subprogram execution.\
\
Subprograms are used to keep repeating program fragments on a separate diagram.\
\
When adding this block to the diagram, you will be prompted to enter the name of the subprogram, after which double-clicking on the block will be able to go to the diagram corresponding to this subprogram. An additional palette with all the subprograms will also appear. Subprograms from it can be dragged onto the scene and used as normal blocks.\
\
The appearance, name, and properties of the block can be changed using the context menu.

#### Properties

Changing the properties of this block does not perform in the "Properties Editor" panel, but using the "Change Properties" item in the context menu. To call the context menu, right-click on the block "Subprogram".

![](<../../.gitbook/assets/16 2 En subprogramm (1).png>)

In the window that opens, you can:

* Change subprogram name.
* Add and change subprogram parameters by specifying a name, type, and value.
* Change the picture on the icon of your subprogram.
* Change subprogram icon background.

![](<../../.gitbook/assets/16 3 En subprogramm2.png>)

## Fork <a href="#fork" id="fork"></a>

![Fork](../../.gitbook/assets/forkBlock\_100.png)

A block divides program execution into several threads. For example, you can simultaneously wait for the sensor to trigger and the time interval to expire.\
\
A block must have at least two outgoing connections.\
\
In order to be able to further refer to parallel tasks generated by this block (for example, in the "[Kill thread](blocks.md#killthread)" block or in the "[Join](blocks.md#join)" block), you need to give the names of the tasks. This is done on outgoing connections, in the Condition property. The name of the task can be any string, but one of the names should be the name of the task that is included in this block. The name of the main program is `main`.

## Join <a href="#join" id="join"></a>

![Join](../../.gitbook/assets/blocks-merge\_100.png)

Block for merging parallel tasks.

It blocks the execution of the program until the execution of all parallel tasks included in this block reaches this block.

A block must have at least two incoming links. On the outgoing connection (in the “Condition” property) there must be an identifier for the task, which will continue after the block has completed.

## Kill thread <a href="#killthread" id="killthread"></a>

![Kill thread](../../.gitbook/assets/killThreadBlock\_100.png)

Finishes the task with the identifier specified in the "Task" property. Must be applied from another task.

## Random Initialization <a href="#random" id="random"></a>

![Random Initialization](../../.gitbook/assets/randomizerBlock\_100.png)

A block for assigning a specified variable to a random integer from a specified interval using the From and To properties.

## Comment <a href="#comment" id="comment"></a>

![Comment](../../.gitbook/assets/block-comment\_100.png)

Block for adding arbitrary text to the diagram as a comment.

Used to explain a specific block or section of a diagram. May be associated with the block, which he explains.

When the program is executed, the block is not taken into account.

## Timer <a href="#timer" id="timer"></a>

![Timer](../../.gitbook/assets/timerBlock\_100.png)

Block for setting the delay. The delay time is set in the Delay parameter in milliseconds.

## Marker Down <a href="#markerdown" id="markerdown"></a>

![Marker Down](../../.gitbook/assets/markerDownBlock\_100.png)

Start drawing with a marker of a given color on the floor. When the robot moves in a two-dimensional model, a colored line will remain behind it.

The block is available only in the two-dimensional model mode.

## Marker Up <a href="#markerup" id="markerup"></a>

![Marker Up](../../.gitbook/assets/markerUpBlock\_100.png)

Finish drawing with a marker.

The block is available only in the two-dimensional model mode.
