# TRIK Studio settings

## Settings window

To open TRIK Studio preferences press the corresponding item in the [main menu](interface/main-menu.md#menu-settings):`Settings → Preferences...`.

![](<../.gitbook/assets/09 1 en menu-settings 2.png>)

The left bar contains the next tabs:

* [Behaviоur](settings.md#behaviour).
* [Miscellaneous](settings.md#miscellaneous).
* [Editor](settings.md#editor).
* [Robots](settings.md#robots).
* [Shortcuts](settings.md#shortcuts).

The right bar contains the fields to edit for the current tab.\
\
["Import](settings.md#import)" and ["Export](settings.md#export)" buttons at the bottom of the window allow you to save the current settings to a file and upload it on another computer.

![](<../.gitbook/assets/09 2 en ts-settings 2.png>)

###

### Behaviour <a href="#behaviour" id="behaviour"></a>

![](<../.gitbook/assets/09 2 en ts-settings 2.png>)

#### User Interface

* **Language** — environment language. After the change, a restart of TRIK Studio is required. The setting "\<System language>" means that the language will be determined by the current language of the operating system.

#### Automatics

* **Autosave** — the option to enable or disable autosave of an open project, as well as set the autosave interval in seconds.\

* **Gestures** — enable or disable recognition engine for [mouse gestures](programming-visual/blocks-add-delete.md#mouse-gesture).\

* **Delay after gesture** — the time period of the system expectation between the finishing of a mouse gesture and its execution. Delay allows you to draw a gesture in a few strokes. The value is indicated in milliseconds.\

* **Check for updates on start** — connect at startup with the update server and start auto-update if necessary.

#### Touch

* **Touch mode** — enable user interface optimization for touch screens.

#### Widgets

* **Dockable mode** — detaches windows for free alignment.



### Miscellaneous <a href="#miscellaneous" id="miscellaneous"></a>

![](<../.gitbook/assets/09 4 en ts-settings-miscellanious 3.png>)

#### Graphics

* **Antialiasing** — the line drawing mode with smoothing improves the appearance of diagrams due to a slight decrease in the speed of the system.

#### Other

* **Show splashscreen** — enable / disable the display of the splashscreen with the TRIK Studio logo at startup.
* **Limit recent projects list** — controls how many projects to show in the "Recent projects" menu item [File](interface/main-menu.md#menu-file).

#### **Images**

Set of icons to use to display the diagram.

#### Toolbars

* **Size** — configure the size of the buttons on the toolbar.



### Editor <a href="#editor" id="editor"></a>

![](<../.gitbook/assets/09 5 en ts-settings-editor 3.png>)

#### Font

* **Use some of system fonts** — replace the font for displaying labels on the diagram with one of the fonts installed in the system. The sizes of the labels on the blocks are set rigidly, so changing the font can lead to the crawl of the labels on each other, but you can experiment.

#### **Grid**

* **Show grid** — display the alignment grid on the scene of the diagram editor.
* **Activate grid** — align blocks on a grid.
* **Show alignment** — display alignment lines on the scene of the diagram editor. Alignment lines appear when a block is on the same horizontal or vertical line with another block, and help align the blocks in the scene.
* **Activate alignment** — align the blocks along the alignment lines.
* **Width** — thickness of alignment lines. Adjustable depending on the brightness of the monitor or projector.
* **Cell size** — size of one cell. The default size is selected so that the block covers four cells.

#### **Node Elements**

* **Drag area** — the size of the area, pulling which you can change the size of the block[ "Comment](programming-visual/blocks.md#comment)".

#### **Edge**

* **Line mode** — mode of drawing links on the diagram.
  * **broken** — links are drawn as broken lines with break points that are added by the user.
  * **square** —connections are drawn as broken lines, each segment of which is parallel to the coordinate axes. Break points in this case are automatically added by the system.
  * **curve** — connections are drawn as smooth curves, the curvature of which can be set by the user.
* **Loop edges indent** — indent size for loop connections.

#### **Embedded Linkers**

* **Size** — size of the built-in linker, i.e. a circle next to a block in a diagram that creates relationships between elements (for more details see the article ["Connections between the blocks](programming-visual/connection-between-blocks.md)").
* **Indent** — indent of the built-in linker from the block icon.

#### **Palette**

* **Representation** — choice between the mode of displaying icons and names or only icons in the palette.
* **Count of items in a row** — the number of icons per line of the palette with the selected "Icons" mode.



### Robots <a href="#robots" id="robots"></a>

The composition of this tab depends on the installed plug-ins and on the currently selected platform. Typical tab items are described below.

![](<../.gitbook/assets/09 6 en ts-settings-robots 3.png>)

#### Robotics construction kit

The robotics kit for which programs are written in the TRIK Studio. The list of all available blocks in the  [palette](interface/#panel-palette) and available actions on the toolbar depends on this option.

#### Robot model

Choosing the type of execution model for the selected constructor. In most cases, this is a 2D model or a real robot, but for some robotics kits one of the models may not be available, in this case this item would not be displayed.

#### **2D robot image**

The appearance of the robot in a 2D model.

#### **Connection settings**

Kit-specific settings for connecting to the robot, such as the IP address for TRIK controllers or the COM port of the Bluetooth connection for Lego NXT controllers. If a connection in the selected mode is not required, the item would not be displayed.

#### **External tools settings**

Kit-specific settings for programs not supplied with TRIK Studio, which must be installed on the computer. For most operating modes, additional installed programs are not needed, so the corresponding items are not displayed in the window.

#### **Sensor settings**

The section indicates which sensors are connected to the ports of the robot.

#### **Uploading & Running**

* **Running after uploading** — run the program immediately after downloading it to the robot or not. Applicable only for some modes of some kits (for example, for Lego NXT in generation mode).

#### **Graphics watcher update interval**

* **Sensors** — interval in milliseconds after which a new point with a sensor reading is added.
* **Autoscaling** — the interval in milliseconds after which the graph automatically changes its scale to optimally display the values.
* **Text info** — the interval in milliseconds after which the labels with values ​​are updated on the chart.

### **Shortcuts** <a href="#shortcuts" id="shortcuts"></a>

This tab allows you to set or change hotkeys for the most commonly used actions. To do this, select the cell corresponding to the action, and in the "Combination" line at the bottom of the window, press the desired key combination.

The "Clear" button removes the key combination from the cell.

![](<../.gitbook/assets/09 7 en ts-settings-shortcuts 3.png>)

All hotkeys installed by default, you can find in the article:

{% content-ref url="shortcuts.md" %}
[shortcuts.md](shortcuts.md)
{% endcontent-ref %}

## Export settings <a href="#export" id="export"></a>

TRIK Studio allows you to export the current settings to a file for uploading them to another computer. To do this, click the "Export" button at the bottom of the window.

## Import settings <a href="#import" id="import"></a>

TRIK Studio allows you to import settings from a previously exported file. To do this, click the “Import” button at the bottom of the window and select the desired `.ini` file.
