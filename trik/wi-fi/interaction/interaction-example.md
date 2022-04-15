# An example of solving a problem on the interaction of two robots

## The task

Send message "5" from one robot and receive it on another.

{% hint style="warning" %}
Please note that the task can only be solved in real robot mode.
{% endhint %}

## Solution

To solve the problem, you have to:

1. Write a [message transmission algorithm](interaction-example.md#message-transmission-algorithm) for the leading robot.
2. Write a [message reception algorithm](interaction-example.md#message-reception-algorithm) for the second robot.
3. [Connect](./) robots to a single network.
4. Run programs on robots.

### Message transmission algorithm

1\. Switch TRIK Studio to the [real robot mode](../../../studio/interface/#panel-interpreter).

2\. Enter a `message` variable for the message and initialize it by assigning it the number `5` in the "[Expression](../../../studio/programming-visual/blocks.md#expression)" block.

![](<../../../.gitbook/assets/79 1 En sendMes1.png>)

3\. Add "[Send message](../../programming-visual/blocks.md#send-message)" and "[End](../../../studio/programming-visual/blocks.md#final)" blocks. In the properties of the "Send message" block, specify the onboard number of the robot to which you want to send the message and the variable containing the message.

![](<../../../.gitbook/assets/79 2 En sendMes2.png>)

#### The complete algorithm

![](<../../../.gitbook/assets/79 3 En sendMes3.png>)

### Message reception algorithm

1\. Switch TRIK Studio to the [real robot mode](../../../studio/interface/#panel-interpreter).

2\. Add the "[Receive message](../../programming-visual/blocks.md#wait-for-message)" block.\
\
In the block properties, specify the variable in which you want to write a message sent from another robot. The variable can be named whatever you want.\
\
Set the "Wait for message" property to `true`.

![](<../../../.gitbook/assets/79 4 En receiveMes1.png>)

3\. After the message has arrived, display it on the robot's screen for 3 seconds, and then finish the algorithm. To do this, add blocks "[Print Text](../../programming-visual/blocks.md#print-text)", "[Timer](../../../studio/programming-visual/blocks.md#timer)" and "[End](../../../studio/programming-visual/blocks.md#final)".\
\
In the properties of the "Print text" block, check the `Calculate` box and specify `true` in the "Update image" field.

![](<../../../.gitbook/assets/79 5 En receiveMes2.png>)

#### The complete algorithm

![](<../../../.gitbook/assets/79 6 En receiveMes3.png>)
