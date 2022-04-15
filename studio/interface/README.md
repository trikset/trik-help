# TRIK Studio interface

## TRIK Studio modes

The TRIK Studio interface depends on the selected mode. TRIK Studio has two modes:

1. ****[**Editing mode**](./#mode-edit)\
   It is intended for creating a robot control diagram and executing it in the generation mode.\

2. ****[**Debug mode**](./#mode-debug)\
   It is intended for executing and debugging a program on a 2D model or in interpretation mode on a real robot.

### Switching between modes

There are three ways to switch modes:

1. Keyboard shortcuts `Ctrl+1` / `Ctrl+2`.
2. [Mode switching panel.](./#mode\_switching\_panel)
3. [Status bar](./#status-bar).

## Editing mode <a href="#mode-edit" id="mode-edit"></a>

![](<../../.gitbook/assets/04 1 en trik-studio-interface 4d.png>)

TRIK Studio in edit mode has the following interface elements:

* [Editor window/scene](./#editor-window)
* [Main menu](./#main-menu)
* [File panel](./#panel-file)
* [Edit panel](./#panel-edit)
* [View panel](./#panel-view)
* [Interpreter panel](./#panel-interpreter)
* [Generators panel](./#panel-generators)
* ["Others" panel](./#panel-other)
* [Panel for switching between editor and debug mode](./#mode\_switching\_panel)
* [Property editor panel](./#panel-property-editor)
* [Sensor settings](./#panel-configure-devices)
* [Palette (set of blocks for diagrams creation)](./#panel-palette)
* [Variables panel](./#panel-variables)
* [Status bar](./#status-bar)

### Editor window/scene <a href="#editor-window" id="editor-window"></a>

The scene displays the diagram and allows you to edit it.

![](<../../.gitbook/assets/04 2 en scene.png>)

Read about creating a new project and working with the diagrams in the articles:

{% content-ref url="../start.md" %}
[start.md](../start.md)
{% endcontent-ref %}

{% content-ref url="../programming-visual/blocks-add-delete.md" %}
[blocks-add-delete.md](../programming-visual/blocks-add-delete.md)
{% endcontent-ref %}

Editor mode also displays the current executable block when interpreting diagrams.

![](<../../.gitbook/assets/04 3 en chart-interpretation 5.gif>)

## Main menu

The main menu of TRIK Studio contains a set of basic operations and environment settings:

* [File](main-menu.md#menu-file)
* [Edit](main-menu.md#menu-edit)
* [View](main-menu.md#menu-view)
* [Tools](main-menu.md#menu-tools)
* [Settings](main-menu.md#menu-settings)
* [Help](main-menu.md#menu-about)

![](<../../.gitbook/assets/04 4 en main-menu.png>)

For more information, see the article:

{% content-ref url="main-menu.md" %}
[main-menu.md](main-menu.md)
{% endcontent-ref %}

### File panel <a href="#panel-file" id="panel-file"></a>

The "File" panel repeats the main operations available from the "[File](main-menu.md#menu-file)" menu.

&#x20;<img src="../../.gitbook/assets/newProject.svg" alt="" data-size="line"> Create a new project.\
&#x20;<img src="../../.gitbook/assets/open (1).svg" alt="" data-size="line"> Open a saved project.\
&#x20;<img src="../../.gitbook/assets/save.svg" alt="" data-size="line"> Save the current project.

### Edit panel <a href="#panel-edit" id="panel-edit"></a>

<img src="../../.gitbook/assets/undo.png" alt="" data-size="line"> Cancel the operation.\
&#x20;<img src="../../.gitbook/assets/redo.png" alt="" data-size="line">Repeat the operation.

### View panel <a href="#panel-view" id="panel-view"></a>

The View panel contains buttons that allow you to scale diagrams.

<img src="https://thumb.tildacdn.com/tild3030-6165-4761-b762-383737303632/-/resize/65x/-/format/webp/image.png" alt="" data-size="original">Zoom in / out.

You can also zoom the scene using:

1. Hold down the `Ctrl` key and roll the mouse wheel.
2. Keyboard shortcut `Ctrl+=` и `Ctrl+-`.

### Interpreter panel <a href="#panel-interpreter" id="panel-interpreter"></a>

The Interpreter panel contains the commands for starting and stopping the execution of a program, buttons for switching interpretation modes between a two-dimensional model and a real robot, as well as a button for opening [robot settings](../settings.md#robots) available from the Tools menu.

When working with a real robot in interpretation mode, this panel also contains a "Connect" button.

<img src="../../.gitbook/assets/robots_run.png" alt="" data-size="line"> Run program.\
<img src="../../.gitbook/assets/robots_stop.png" alt="" data-size="line"> Stop program.\
<img src="../../.gitbook/assets/2d-model.svg" alt="" data-size="line"> 2D model mode.\
<img src="../../.gitbook/assets/switch-real-trik.svg" alt="" data-size="line"> Real robot mode.\
<img src="../../.gitbook/assets/robots_settings1.png" alt="" data-size="line"> Robot settings.

### Generators panel <a href="#panel-generators" id="panel-generators"></a>

{% hint style="info" %}
The commands in this panel change depending on the program configuration.
{% endhint %}

The Generators panel contains commands for generating code and loading the program to the robot.

![](https://thumb.tildacdn.com/tild3734-6135-4838-a161-633336393062/-/resize/96x/-/format/webp/image.png)

<img src="../../.gitbook/assets/generateQtsCode.svg" alt="" data-size="line"> Generate code.\
<img src="../../.gitbook/assets/uploadProgram.svg" alt="" data-size="line"> Upload program to the robot.

### "Other" panel <a href="#panel-other" id="panel-other"></a>

"Other" panel may contain various information depending on the chosen platform.

For example, for the [TRIK kit](../../trik/about/) this panel displays the IP address of the controller to which you are connecting.

![](https://thumb.tildacdn.com/tild3736-3338-4131-b737-303964656239/-/resize/129x/-/format/webp/image.png)



### Panel for switching between editing and debugging modes <a href="#mode_switching_panel" id="mode_switching_panel"></a>

The panel for mode switching displays the current TRIK Studio mode and allows you to switch between editing and debugging modes.

<img src="../../.gitbook/assets/main_tabbar_edit.svg" alt="" data-size="line"> Editor.\
<img src="../../.gitbook/assets/main_tabbar_debug.svg" alt="" data-size="line"> Debug.

### Property editor panel <a href="#panel-property-editor" id="panel-property-editor"></a>

The property editor is used to display and edit the property values ​​of selected objects (blocks, links).&#x20;

![](<../../.gitbook/assets/04 5 en panel-property-editor.png>)

About working with the property editor see article:

{% content-ref url="../programming-visual/editing-element-properties.md" %}
[editing-element-properties.md](../programming-visual/editing-element-properties.md)
{% endcontent-ref %}

### Sensors settings panel <a href="#panel-configure-devices" id="panel-configure-devices"></a>

Sensor settings allow you to specify which sensors are used on which port. The same can be done from the robot settings dialog.

{% hint style="info" %}
Available set of sensors depends on the selected platform in the settings on the [Robots](../settings.md#robots) tab.
{% endhint %}

![](<../../.gitbook/assets/04 6 en panel-sensors-TRIK.png>)

### Palette panel <a href="#panel-palette" id="panel-palette"></a>

The Palette panel contains a set of available blocks and the relationships between them, which can be added to the diagram.

{% hint style="info" %}
1. The composition of the palette may vary depending on the platform selected in the [settings](../settings.md#robots).
2. Blocks that are not available in the selected execution model (2D model or on a real robot) are highlighted in gray.
{% endhint %}

![](<../../.gitbook/assets/04 7 en panel-palitra.png>)

How to add and remove blocks to the scene in TRIK Studio read in the article:

{% content-ref url="../programming-visual/blocks-add-delete.md" %}
[blocks-add-delete.md](../programming-visual/blocks-add-delete.md)
{% endcontent-ref %}

### Variables panel <a href="#panel-variables" id="panel-variables"></a>

Displays the list of variables used when executing the diagram with their current values, including [sensor variables](../programming-visual/expression-syntax/sensory-variables.md). When executed in the interpretation mode on a two-dimensional model or a real robot, they are taken from the robot in real-time. Not used in the generation mode.

![](<../../.gitbook/assets/04 8 en panel-variables.png>)

### Status bar <a href="#status-bar" id="status-bar"></a>

The status bar displays the current TRIK Studio mode ([editing](./#mode-edit) or [debugging](./#mode-debug)) and allows you to switch between modes. To switch between them, just click on the status bar.

![](<../../.gitbook/assets/04 9 en statusbar.png>)

## Debug mode <a href="#mode-debug" id="mode-debug"></a>

The elements of the TRIK Studio interface in debug mode repeat the elements in edit mode, except for the editor window, property editor panels and palette. Instead of these elements, the next elements are displayed:

* [2D model window](./#window-2-d-1)
* [Error panel](./#window-error)
* [Robot settings panel](./#panel-settings-robot)
* [Plots panel](./#panel-graphics)

![](<../../.gitbook/assets/04 A en 2D.png>)

### 2D model window <a href="#window-2-d-1" id="window-2-d-1"></a>

The 2D model window opens if a 2D model is selected as the program execution mode.

![](<../../.gitbook/assets/04 B en 2d.png>)

The window allows you to set the environment in which the robot will be executed, set the robot sensors and observe how the program written in edit mode will work.

Read more about the 2D model in the article:

{% content-ref url="../2d-model/" %}
[2d-model](../2d-model/)
{% endcontent-ref %}

{% hint style="info" %}
In the Interpretation and Generation modes for the real robot, this window is not displayed, an executable diagram is displayed instead.
{% endhint %}

### Robot settings panel <a href="#panel-settings-robot" id="panel-settings-robot"></a>

The robot settings panel displays the type of controller and robot parameters that depend on the selected [platform](../about/#platforms).

![](<../../.gitbook/assets/04 C en panel-controller.png>)

#### Opening robot settings panel

![](<../../.gitbook/assets/04 D en panel-controller-open 2.gif>)

### Error panel <a href="#window-error" id="window-error"></a>

In the case of syntactic and semantic errors in the TRIK Studio, a window with the corresponding messages appears.

To view the block where the error occurred, click on the message.

![](<../../.gitbook/assets/04 F en panel-error 6.gif>)

### Plots panel <a href="#panel-graphics" id="panel-graphics"></a>

The Plots window displays the values sent by the sensors in real-time.

![](<../../.gitbook/assets/04 G en panel-graphics.png>)

Read more in the article:

{% content-ref url="graphics.md" %}
[graphics.md](graphics.md)
{% endcontent-ref %}
