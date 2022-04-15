---
description: >-
  Creating a new text program, generating diagrams in code and supported
  programming languages
---

# Textual programming

The text-based programming mode allows you to edit the program [generated](programming-code.md#generation) from the diagram before downloading it to the robot or [write the program](programming-code.md#new-programm) in text form from scratch.

## Create a new text program <a href="#new-programm" id="new-programm"></a>

1\. Create a diagram containing the "Initial Node" and "Final Node" blocks.

2\. Select a real robot mode.

3\. Click on the “Generate Code” button.\
\
After that, an empty program template that contains all the necessary declarations will appear.

![](<../.gitbook/assets/28 1 En new-programm-js 3.gif>)

## Generate code from the diagram <a href="#generation" id="generation"></a>

1\. Select the real robot mode.

2\. Press the "Generate code" button.

{% hint style="info" %}
When the diagram is regenerated, manual changes will not be lost if the text file is saved. The result of the new generation will be saved to another file.
{% endhint %}

![](<../.gitbook/assets/28 2 En generation 3.gif>)

## Supported programming languages

The supported text programming language is platform-dependent. One platform can have multiple target text languages.

{% hint style="warning" %}
**Attention!** Available generators depend on the installed plug-ins.
{% endhint %}

### TRIK controller <a href="#trik" id="trik"></a>

For the TRIK platform, generation is possible in:

* [Python](../trik/programming-code/).
* [JavaScript](../trik/programming-code/).

### Lego EV3 controller <a href="#ev3" id="ev3"></a>

Experts in EV3 can look at the code generated in the internal language of EV3 using the "Generate into EV3 byte code" button. Theoretically, it can be edited and run for execution or even used for EV3 text programming, but it is inconvenient to do this - the language was created to automatically generate, rather than write programs.

### Lego NXT controller <a href="#nxt" id="nxt"></a>

For Lego NXT, generation in [C language](../nxt/c.md) is supported using the ECRobot library.

### Geoscan Pioneer quadcopter <a href="#peoneer" id="peoneer"></a>

For the quadcopter Geoscan Pioneer, generation in Lua is possible.
