# Adding restrictions to the 2D Model

* [Constraint description structure](./#struktura-napisaniya-ogranichenii)
* [Conditions](./#usloviya)
* [Atomic conditions](./#atomarnye-usloviya)
* [Variable types and arithmetic operations](./#tipy-peremennykh-i-arifmeticheskie-operacii)
* [Triggers](./#triggery)
* [Sensor names](./#nazvaniya-datchikov)
* [Additional robot properties](./#dopolnitelnye-svoistva-robota)
* [Working with the controller screen](./#rabota-s-ekranom-kontrollera)
* [Restrictions example](./#primer-dobavleniya-ogranichenii)

It is possible to add restrictions by [editing an XML file](../settings.md) to prepare [exercises ](../../exercises.md)for students.

There are three types of restrictions:

1. **Time restrictions.**\
   For example, a time limit to complete a task or a specific action in a specific time frame.\

2. **Spatial.**\
   For example, adding regions ("Start", "Finish") or prohibiting/forcing a robot, its sensor, or some moving object to be at a certain time in a certain place.\

3. **Device restrictions.**\
   For example, a limitation on the set of sensors or on the behavior of devices.

## Constraint description structure <a href="#struktura-napisaniya-ogranichenii" id="struktura-napisaniya-ogranichenii"></a>

The main tag[`<constraints>...</constraints>`](./#constraints)which contains all the restrictions is used to describe them. Used as a container. Restrictions are described inside the tag, each inner tag must be one of four:

| Tag                                                                                  | Description                                                                                         |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| [timelimit](./#timelimit)                                                            | Time limit.                                                                                         |
| [constraint](./#less-than-constraint-greater-than-less-than-constraint-greater-than) | A constraint with an arbitrary condition in violation of which a specified error will be generated. |
| [event](./#event)                                                                    | The main tool for setting dynamic constraints. Used as a container.                                 |
| [init](./#init)                                                                      | An unconditional event that runs before the program starts executing.                               |

### &#x20;<a href="#constraints" id="constraints"></a>

### \<constraints>...\</constraints> <a href="#constraints" id="constraints"></a>

The main tag containing all restrictions. Used as a container.

```markup
<constraints>
     <!-- Time limit -->
     <timelimit value="30000"/>
     
     <!-- Conditional constraint. An error message will be shown at violation. -->
     <constraint checkOnce="true" failMessage="The robot must be at start before run!">
          <inside objectId="robot1" regionId="start_zone"/>
     </constraint>
     
     <!-- Initializing variable x with value 2 -->
     <init>
          <setter name="x">
               <int value="2"/>
          </setter>
      </init>

</constraints>
```

### &#x20;<a href="#timelimit" id="timelimit"></a>

### \<timelimit/> <a href="#timelimit" id="timelimit"></a>

Time limit. Mandatory.

#### Attributes

| Attribute         | Description                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **value="value"** | Timeout in milliseconds after which the execution will be terminated and the "Time limit exceeded" error will be displayed. |

#### Syntax:

```markup
<timelimit value="35000"/>
```

## \<constraint>...\</constraint>

A constraint with an arbitrary condition. If the condition is violated a specified error message will be displayed. Can be used as a container. Has one child tag: `<conditions>...</conditions>`.

#### Attributes

| Attribute                | Description                                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **checkOnce="true"**     | Boolean attribute. If the value is true, then the restriction will be checked once at program startup. Is useful for one-time checks such as sensor layout etc. |
| **failMessage="Error!"** | An error message will be displayed when a restriction is violated.                                                                                              |

#### Syntax:

```markup
<constraint checkOnce="true" failMessage="The robot must be at start before run!">
```

```markup
<!-- Checks if the IR distance sensor is connected to the A1 port -->
<constraint checkOnce="true" failMessage="The IR distance sensor must be connected to the robots A1 port!">
    <equals>
        <typeOf objectId="robot1.A1"/>
        <string value="twoDModel::robotModel::parts::RangeSensor"/>
    </equals>
</constraint>
```

```markup
<!-- Checks if the robot is inside the specified region for the entire program execution time-->
<constraint failMessage="The robot has left the allowed zone!">
    <inside objectId="robot1" regionId="warzone"/>
</constraint>
```

## \<event>...\</event> <a href="#event" id="event"></a>

The main tool for setting dynamic constraints. Used as a container.

An event is just a pair ([condition](./#usloviya), [trigger](./#triggery)).

#### Attributes

| Attribute                     | Description                                                                                                                                                                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **settedUpInitially="true"**  | <p>An attribute that allows you to indicate whether the event is set up at the start of the program. The event can be set up or dropped. In the setup state, the event pulls its trigger if its condition is met, otherwise it's just ignored by the system.</p><p>The default value is false.</p> |
| **id="finish checker"**       | Events unique ID. The event can be referred by id from others. Optional.                                                                                                                                                                                                                           |
| **dropsOnFire = "true"**      | A boolean attribute that indicates whether the event should continue to be set up after it is triggered or not. Optional. The default value is true.                                                                                                                                               |

#### Syntax:

```markup
<event id="finish checker" settedUpInitially="false">
	<condition>
		<inside objectId="robot1" regionId="finish"/>
	</condition>
	<trigger>
		<success/>
	</trigger>
</event>
```

## \<init>...\</init> <a href="#init" id="init"></a>

Unconditional event executing before the program starts.

**Example:**

```markup
<!-- Setting the "my_value" variable to the value of two-->
<init>
    <setter name="my_value">
        <int value="2"/>
    </setter>
</init>
```

## Conditions <a href="#usloviya" id="usloviya"></a>

Now lets talk about the conditions in the [\<constraint>](./#less-than-constraint-greater-than-less-than-constraint-greater-than) and [\<event>](./#less-than-event-greater-than-less-than-event-greater-than) elements. Conditions are set using the [\<condition>](./#condition) tag if only one of the [atomic conditions](./#atomarnye-usloviya) is tested, or the [\<conditions>](./#conditions-1) tag if a compound condition is tested.

### \<condition>...\</condition> <a href="#condition" id="condition"></a>

The condition being checked is described inside this tag.

**Example:**

```markup
<condition>
    <!-- The condition of equality of two values is described inside the tag -->
    <equals>
        <objectState object="robot1.display.smiles"/>
        <bool value="true"/>
    </equals>
</condition>
```

### &#x20;<a href="#conditions" id="conditions"></a>

### \<conditions>...\</conditions> <a href="#conditions" id="conditions"></a>

Used to create compound conditions. The logical bond is the mandatory attribute. The bond may be `and` or `or`. Negation is specified by the `<not>` tag without attributes. Other `<conditions>` elements may also appear among subexpressions.

#### Attributes:

| Attribute      | Description   |
| -------------- | ------------- |
| **glue="and"** | Logical bond. |

#### Syntax:

```markup
<conditions glue="and">
   <!-- Condition1 -->
   <!-- Condition2 -->
   <!--    ...   -->
   <!-- ConditionN -->
</conditions>

<conditions glue="and">
   <not>
      <!-- Condition1 -->
   </not>
</conditions>

<conditions glue="and">
   <timer timeout="1000" forceDropOnTimeout="true"/>
   <conditions glue="or">
      <greater>
         <objectState object="robot1.display.labels.size"/>
         <int value="20"/>
      </greater>
      <less>
         <objectState object="robot1.display.labels.size"/>
         <int value="19"/>
       </less>    
    </conditions>
</conditions>
```

## Atomic conditions <a href="#atomarnye-usloviya" id="atomarnye-usloviya"></a>

Atomic condition is one of the following elements:

| Tag                                                                                  | Description                                                                 |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [equals](./#equals), [notEqual](./#notequal), [greater](./#greater), [less](./#less) | Value comparison operations.                                                |
| ****[inside](./#inside)                                                              | Sets spatial constraints.                                                   |
| [settedUp and dropped](./#settedup)                                                  | Checks whether an event is set up or not.                                   |
| [timer](./#timer)                                                                    | Sets the time in ms after which the specified condition is considered true. |

### &#x20;<a href="#equals" id="equals"></a>

### \<equals>...\</equals> <a href="#equals" id="equals"></a>

Equals. The functional symbols value comparison operation. Can be used as a container.

#### Syntax:

```markup
<equals>
	<objectState object="robot1.display.labels.first.text"/>
	<string value="finish"/>
</equals>
```

### &#x20;<a href="#notequal" id="notequal"></a>

### \<notEqual>...\</notEqual> <a href="#notequal" id="notequal"></a>

Not equal. The functional symbols value comparison operation. Can be used as a container.

#### Syntax:

```markup
<notEqual>
	<objectState object="robot1.display.labels.first.text"/>
	<string value="finish"/>
</notEqual>
```

###

### \<greater>...\</greater> <a href="#greater" id="greater"></a>

Greater. The functional symbols value comparison operation. Can be used as a container.

#### Syntax:

```markup
<greater>
	<objectState object="robot1.display.labels.size"/>
	<int value="0"/>
</greater>
```

### &#x20;<a href="#less" id="less"></a>

### \<less>...\</less> <a href="#less" id="less"></a>

Less. The functional symbols value comparison operation. Can be used as a container.

#### Syntax:

```markup
<less>
    <objectState object="robot1.display.labels.size"/>
    <int value="10"/>
</less>
```

### &#x20;<a href="#inside" id="inside"></a>

### \<inside/> <a href="#inside" id="inside"></a>

Sets spatial constraints.

#### Attributes

| Attribute         | Description |
| ----------------- | ----------- |
| **objectId="id"** | Object ID.  |
| **regionId="id"** | Region ID.  |

#### Syntax:

```markup
<!-- Limits the location of the "robot1" robot to the "start" zone -->
<inside objectId="robot1" regionId="start"/>
```

### &#x20;<a href="#settedup" id="settedup"></a>

### \<settedUp/> and  \<dropped/> <a href="#settedup" id="settedup"></a>

Checks whether the event set up or not.

#### Attributes

| Attribute       | Description                    |
| --------------- | ------------------------------ |
| **id="event1"** | The ID of the event is checked |

#### Syntax:

```markup
<!-- The "event1" event is set up condition -->
<condition>
    <settedUp id="event1"/>
</condition>

<!-- The "event2" event is dropped condition -->
<condition>
    <dropped id="event2"/>
</condition>
```

#### Example:

The "check event" event conditions check that the other "Try move" event is set up and the "Go back" event is dropped. If both of them return "true" after the check the program successfully ends.

```markup
<event id="check event" settedUpInitially="true">
    <conditions glue="and">
        <settedUp id="Try move"/>
        <dropped id="Go back"/>
    </conditions>
    <trigger>
        <success/>
    </trigger>
</event>
```

###

### \<timer/> <a href="#timer" id="timer"></a>

A predicate that starts to return "true" when the specified time has passed since the moment when this event was set, and up to that moment it returns "false".

#### Attributes

| Attribute                     | Description                                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **timeout="1000"**            | The time interval after which this predicate will become true. Mandatory. The value must be a non-negative integer.                                                                                                                               |
| **forceDropOnTimeout="true"** | <p>A Boolean attribute that allows you to drop the event that has this timer in a condition.</p><p>If set to true, the event will be dropped even if there are other active timers and unmet conditions. Optional. The default value is true.</p> |

#### Syntax:

```markup
<timer timeout="1000" forceDropOnTimeout="false"/>
```

#### Example

Let's look at using  \<timer/> with different forceDropOnTimeout attribute values.

The "check region" event checks time and spatial limits. The first condition (timer) becomes true after 1000ms. Its value doesn't change after that. The second one (inside) checks that the robot is inside the "start\_zone" region. When both conditions will be met simultaneously the program will end successfully.

1\. Since the forceDropOnTimeout attribute is "false", the event will be still set up after a specified timeframe and wait for the second condition to be met.

```markup
<event id="check region" settedUpInitially="true">
    <conditions glue="and">
        <timer timeout="1000" forceDropOnTimeout="false"/>
        <inside objectId="robot1" regionId="start_zone"/>
    </conditions>
    <trigger>
        <success/>
    </trigger>
</event>
```

2\. Since the forceDropOnTimeout attribute is "true", the event will be dropped after the specified timeframe despite the presence of a second condition. Therefore, if the robot is not in the required region right after 1000 ms, then the success message will not be displayed even if the robot will be there after some time.

```markup
<event id="check region" settedUpInitially="true">
    <conditions glue="and">
        <timer timeout="1000" forceDropOnTimeout="true"/>
        <inside objectId="robot1" regionId="start_zone"/>
    </conditions>
    <trigger>
        <success/>
    </trigger>
</event>
```

## Variable types and arithmetic operations <a href="#tipy-peremennykh-i-arifmeticheskie-operacii" id="tipy-peremennykh-i-arifmeticheskie-operacii"></a>

| Variable or operation                     | Description                                                                                        |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [int, double, string, bool](./#intdouble) | Integer, fractional, string, and boolean constants.                                                |
| ****[variableValue](./#variablevalue)     | Variable value.                                                                                    |
| [objectState](./#objectstate)             | Get the object state.                                                                              |
| [typeOf](./#typeof)                       | Get the meta-type of the object with the specified identifier.                                     |
| [minus, abs](./#minusabs)                 | Unary arithmetic functions that have exactly one child, which must be an integer value.            |
| [sum, difference, min, max](./#summinmax) | Binary arithmetic functions that have exactly two child elements, each of them must be an integer. |

### &#x20;<a href="#intdouble" id="intdouble"></a>

### \<int/>, \<double/>, \<string>, \<bool/> <a href="#intdouble" id="intdouble"></a>

Setting a constant.

#### Attributes

| Attribute     | Description     |
| ------------- | --------------- |
| **value="0″** | Constant value. |

#### Syntax:

```markup
<int value="0"/>

<string value="finish"/>
```

###

### \<variableValue/> <a href="#variablevalue" id="variablevalue"></a>

Variable value.

It is possible to take the property of any variable using a dot. For example, "rect.width" will return the width of the rectangle stored in "rect".

#### Attributes

| Attribute            | Description   |
| -------------------- | ------------- |
| **name="my\_value"** | Variable name |

#### Syntax:

```markup
<variableValue name="rotation"/>
```

###

### \<objectState/> <a href="#objectstate" id="objectstate"></a>

Get the object state.

#### Attributes

| Attribute                               | Description |
| --------------------------------------- | ----------- |
| **object="robot1.display.labels.size"** | Object ID   |

#### Syntax:

```markup
<objectState object="robot1.display.labels.first.text"/>
```

#### Example

```markup
<!-- Assign to the "rotation" variable the robots rotation angle -->
<setter name="rotation">
     <objectState object="robot1.rotation"/>
 </setter>
<!-- Checking if the "rotation" value equals to the robots rotation angle -->
<equals>
   <variableValue name="rotation"/>
   <objectState object="robot1.rotation"/>
</equals>
```

###

### \<typeOf/> <a href="#typeof" id="typeof"></a>

Get the objects with specified ID meta-type. For example, the type of the `wall` object with `id=777` will be `wall`.

Most often, this element will be needed to check the type of connected sensors and motors.

#### Attributes

| Attribute         | Description        |
| ----------------- | ------------------ |
| **objectId="id"** | Objects unique ID. |

#### Syntax:

```markup
<typeOf objectId="robot1.A3"/>
```

###

### \<minus>..\</minus>, \<abs>...\</abs> <a href="#minusabs" id="minusabs"></a>

Unary arithmetic operations for changing the sign and taking the modulus of a number.

#### Syntax:

```markup
<minus>
    <objectState object="robot1.rotation"/>
</minus>

<abs>
    <objectState object="robot1.rotation"/>
</abs>
```

#### Example:

```markup
<!-- Modulus of the difference of the "rotation" variable and the robots rotation angle -->
<abs>
    <difference>
        <variableValue name="rotation"/>
        <objectState object="robot1.rotation"/>
    </difference>
</abs>
```

###

### \<sum>, \<difference>, \<min>, \<max> <a href="#summinmax" id="summinmax"></a>

Sum and difference of values. Minimum and maximum value.

#### Example:

```markup
<!-- The difference of the "rotation" variable and the robots rotation angle -->
<difference>
       <variableValue name="rotation"/>
       <objectState object="robot1.rotation"/>
</difference>

<!-- The sum of the "counter" variable and one -->
<sum>
       <variableValue name="counter"/>
       <int value="1"/>
</sum>
```

## Triggers <a href="#triggery" id="triggery"></a>

| Tag                     | Description                                                                                                |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| [trigger](./#trigger)   | An action or a group of actions that will be performed one or many times after the event condition is met. |
| [fail](./#fail)         | Display an error message. Finish checking the task.                                                        |
| [success](./#success)   | Display success message, finish the check.                                                                 |
| [setter](./#setter)     | Set the variable value.                                                                                    |
| [setUp, drop](./#setup) | Setting or dropping the event.                                                                             |

###

### \<trigger>...\</trigger> <a href="#trigger" id="trigger"></a>

An action or a group of actions that will be performed one or many times after the event condition is met.

#### Syntax:

```markup
<trigger>
	<success/>
</trigger>
```

###

### \<fail/> <a href="#fail" id="fail"></a>

Display an error message. Finish checking the task.

#### Attributes

| Attribute                   | Description        |
| --------------------------- | ------------------ |
| **message="Wrong answer!"** | Error message text |

#### Syntax:

```markup
<fail message="Wrong answer!"/>
```

###

### \<success/> <a href="#success" id="success"></a>

The task is successfully done.

#### Attributes

| Attribute        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| deffered="false" | Optional. The default value is "false". If set to "true" the trigger won't stop the program, I. e. the checker will wait until the program finishes and either reports the success if there were no errors, or otherwise, it will finish with an error. In other words, you won't get the error "The program has finished, but the task is not completed": the program will either terminate successfully or with a meaningful error like "Time limit exceeded". |

#### Syntax:

```markup
<success/>
```

###

### \<setter>...\</setter> <a href="#setter" id="setter"></a>

Set the variable value.

#### Attributes

| Attribute        | Description   |
| ---------------- | ------------- |
| name="my\_value" | Variable name |

#### Example:

```markup
<!-- Creating the "total_score" variable with the value of zero -->
<setter name="total_score">
       <int value="0"/>
 </setter>

<!-- Addind 2 to the "total_score" -->
<setter name="total_score">
       <sum>
              <variableValue name="total_score"/>
              <int value="2"/>
       </sum>
</setter>
```

###

### \<setUp/>, \<drop/> <a href="#setup" id="setup"></a>

Setting up or dropping an event.

#### Attributes

| Attribute               | Description          |
| ----------------------- | -------------------- |
| **id="finish checker"** | The ID of the event. |

#### Example:

```markup
<!-- Set up the "finish checker" event -->
<triggers>
				<setUp id="finish checker"/>
</triggers>
```

## Sensor names <a href="#nazvaniya-datchikov" id="nazvaniya-datchikov"></a>

#### TRIK Robot Sensors

| Name                                           | Description     |
| ---------------------------------------------- | --------------- |
| twoDModel::robotModel::parts::RangeSensor      | Distance sensor |
| trik::robotModel::twoD::parts::TwoDLightSensor | Light sensor    |
| twoDModel::robotModel::parts::TouchSensor      | Touch sensor    |
| trik::robotModel::twoD::parts::LineSensor      | Line sensor     |

#### Lego EV3 Robot sensors

| Name                                             | Description                   |
| ------------------------------------------------ | ----------------------------- |
| twoDModel::robotModel::parts::RangeSensor        | Distance sensor               |
| twoDModel::robotModel::parts::LightSensor        | Light sensor                  |
| twoDModel::robotModel::parts::TouchSensor        | Touch sensor                  |
| twoDModel::robotModel::parts::ColorSensorRed     | Color sensor (red)            |
| twoDModel::robotModel::parts::ColorSensorGreen   | Color sensor (green)          |
| twoDModel::robotModel::parts::ColorSensorBlue    | Color sensor (blue)           |
| twoDModel::robotModel::parts::ColorSensorPassive | Color sensor (passive)        |
| twoDModel::robotModel::parts::ColorSensorFull    | Color sensor  EVX/NXT (color) |
| twoDModel::robotModel::parts::ColorSensorAmbient | Color sensor EV3 (ambient)    |
| ev3::robotModel::twoD::parts::GyroscopeSensor    | Gyroscope                     |
| ev3::robotModel::twoD::parts::GyroscopeSensor    | Compass                       |

## Additional robot properties <a href="#dopolnitelnye-svoistva-robota" id="dopolnitelnye-svoistva-robota"></a>

| Property                | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| robot1.rotation         | A current robot's rotation angle                                                               |
| robot1.x and robot1.y   | Robots coordinate                                                                              |
| robot1.led.color        | LED color                                                                                      |
| robot1.marker.isDown    | Checks if the robot has a  marker and it draws a line on the field. Returns "true" or "false". |
| robot1.shell.lastPhrase | Get the last robots phrase.                                                                    |

## Working with the controller display

| Property                         | Description                                                                            |
| -------------------------------- | -------------------------------------------------------------------------------------- |
| robot1.display.sadSmiles         | Checks if there is a sad smile on the controller display. Returns "true" or "false".   |
| robot1.display.smiles            | Checks if there is a happy smile on the controller display. Returns "true" or "false". |
| robot1.display.labels.first.text | Message (label) text that was displayed first.                                         |
| robot1.display.labels.last.text  | Message (label) text that was displayed last.                                          |
| robot1.display.labels.size       | Get the displayed label number.                                                        |

#### Example

Checking that the word “message” was displayed on the controller screen. The case is important.

```markup
<equals>
        <objectState object="robot1.display.labels.first.text"/>
        <string value="message"/>
</equals>
```

## Restrictions example <a href="#primer-dobavleniya-ogranichenii" id="primer-dobavleniya-ogranichenii"></a>

You need to start in the blue square then drive along the wall to the red one using the IR distance sensor.

![](https://thumb.tildacdn.com/tild6265-3339-4037-b064-366561643230/-/resize/740x/-/format/webp/2019-04-03\_12-46-00.png)

```markup
<?xml version="1.0" encoding="UTF-8"?>
<root>
   <world>
      <background />
      <walls>
         <!-- The wall-->
         <wall id="{wall1}" end="300:150" begin="0:100" />
         <wall id="{wall2}" end="550:100" begin="300:150" />
         <wall id="{wall3}" end="650:200" begin="550:100" />
         <wall id="{wall4}" end="850:300" begin="650:200" />
         <wall id="{wall5}" end="1200:300" begin="850:300" />
         <wall id="{wall6}" end="1600:50" begin="1200:300" />
      </walls>
      <skittles />
      <balls />
      <colorFields />
      <images />
      <regions>
         <!-- Regions-->
         <region visible="true" id="finish" x="1300" color="#ff0000" text="Finish" type="rectangle" width="300" textX="0" textY="0" y="-200" filled="true" height="300" />
         <region visible="true" id="start_zone" x="-50" color="#0000ff" text="Start" type="rectangle" width="150" textX="0" textY="0" y="100" filled="true" height="-150" />
         <region visible="false" id="warzone_1" x="-50" color="#ffff00" text="warzone1" type="rectangle" width="650" textX="0" textY="0" y="-50" filled="true" height="200" />
         <region visible="false" id="warzone_2" x="600" color="#ffff00" text="warzone2" type="rectangle" width="250" textX="0" textY="0" y="0" filled="true" height="250" />
         <region visible="false" id="warzone_3" x="850" color="#ffff00" text="warzone3" type="rectangle" width="750" textX="0" textY="0" y="50" filled="true" height="250" />
      </regions>
   </world>
   <robots>
      <!-- Robot description -->
      <robot id="trikKitRobot" position="0:0" direction="0">
         <sensors>
            <sensor port="A1###input###А1###sensorA1" position="75:25" type="trik::robotModel::parts::TrikInfraredSensor" direction="45" />
            <sensor port="M3###output###JM3$$$C$$$3###" position="75:25" type="kitBase::robotModel::robotParts::Motor" direction="0" />
            <sensor port="M4###output###JM4$$$D$$$4###" position="75:25" type="kitBase::robotModel::robotParts::Motor" direction="0" />
         </sensors>
         <startPosition id="{ee2c46c1-23fc-4cda-98f4-77d9de775305}" x="25" y="25" direction="0" />
         <wheels left="M3###output###М3###" right="M4###output###М4###" />
      </robot>
   </robots>
   <constraints>
      <!-- Time limit (30 seconds) -->
      <timelimit value="30000" />
      <!-- Spatial restriction of the start region. Checks once at the program start -->
      <constraint checkOnce="true" failMessage="The robot must be inside the blue square at the start!">
         <inside regionId="start_zone" objectId="robot1" />
      </constraint>
      <!-- Sensors type and presence restriction -->
      <constraint checkOnce="true" failMessage="Only the IR distance sensor must be connected to the A1 port">
         <conditions glue="and">
            <equals>
               <typeOf objectId="robot1.A1" />
               <string value="trik::twoDModel::robotModel::parts::RangeSensor" />
            </equals>
            <equals>
               <typeOf objectId="robot1.A2" />
               <string value="undefined" />
            </equals>
            <equals>
               <typeOf objectId="robot1.A3" />
               <string value="undefined" />
            </equals>
            <equals>
               <typeOf objectId="robot1.A4" />
               <string value="undefined" />
            </equals>
            <equals>
               <typeOf objectId="robot1.A5" />
               <string value="undefined" />
            </equals>
            <equals>
               <typeOf objectId="robot1.A6" />
               <string value="undefined" />
            </equals>
            <equals>
               <typeOf objectId="robot1.D1" />
               <string value="undefined" />
            </equals>
            <equals>
               <typeOf objectId="robot1.D2" />
               <string value="undefined" />
            </equals>
         </conditions>
      </constraint>
      <!-- Robot ride control -->
      <constraint failMessage="The robot tried to move out of the permitted area!">
         <conditions glue="or">
            <inside regionId="warzone_1" objectId="robot1" />
            <inside regionId="warzone_2" objectId="robot1" />
            <inside regionId="warzone_3" objectId="robot1" />
         </conditions>
      </constraint>
      <!-- An event that checks if the robot has entered the finish area -->
      <event settedUpInitially="true">
         <condition>
            <timer timeout="100" forceDropOnTimeout="true" />
         </condition>
         <trigger>
            <setUp id="finish checker" />
         </trigger>
      </event>
      <!-- Event reporting the successful finish -->
      <event id="finish checker" settedUpInitially="false">
         <condition>
            <inside regionId="finish" objectId="robot1" />
         </condition>
         <trigger>
            <success />
         </trigger>
      </event>
   </constraints>
</root>

```

