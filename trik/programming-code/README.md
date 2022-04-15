# TRIK controller programming in Python and JavaScript

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

## Creating a text program

Read the article about creating a new text program and generating a diagram to code:

{% content-ref url="../../studio/programming-code.md" %}
[programming-code.md](../../studio/programming-code.md)
{% endcontent-ref %}

## Programming in Python and JavaScript

The functionality of the runtime environment is accessed through predefined objects and functions.

### Objects

| Object                           | Description                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [brick](object-brick/)           | Represents the TRIK controller and provides access to the robot's devices.                                       |
| [script](object-script.md)       | Represents methods of controlling the execution of the script and provides access to operating system functions. |
| [mailbox](object-mailbox.md)     | It implements communication between robots in the network by means of the mailbox mechanism.                     |
| [gamepad](object-gamepad.md)     | Serves to work with the remote control.                                                                          |
| [Threading](object-threading.md) | Provides management of parallel threads.                                                                         |

### Functions

| Function                               | Description                                                                                                                                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [getPhoto](function-getphoto.md)       | Returns a one-dimensional array of bytes containing the pixels of the rgb32-formatted image taken from the camera.                                                                                                     |
| [include(“path”)](function-include.md) | Allows you to use functions implemented by the user in other files. It is assumed for writing your own libraries. As a passed parameter you must specify the full system path to the file with the required functions. |
