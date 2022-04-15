# TRIK Studio main menu

The main menu of **TRIK Studio** contains a set of basic operations and environment settings:

* [File](main-menu.md#menu-file)
* [Edit](main-menu.md#menu-edit)
* [View](main-menu.md#menu-view)
* [Tools](main-menu.md#menu-tools)
* [Settings](main-menu.md#menu-settings)
* [Help](main-menu.md#menu-about)

![](<../../.gitbook/assets/05 1 en Main Menu 2.png>)

## File <a href="#menu-file" id="menu-file"></a>

* **New project** — create a new project.
* **Recent projects** — open one of the recently used projects.
* **New diagram** — create a new chart in the current project.
* **Open…** — open a saved project. Projects are stored on disk in files with the `.qrs` extension.
* **Save** — save the current project.
* **Save as…** — save the current project to the selected location. Subsequent saves will be made to the selected file.
* **Save diagram as a picture…** — save the current image on the scene to disk.
* **Print** — print a chart or text using the standard print dialog.
* **Quit** — exit the program.
* **Restore default settings and Quit** — restore the default settings and exit the program.

![](<../../.gitbook/assets/05 2 en Menu File 3.png>)

## Edit <a href="#menu-edit" id="menu-edit"></a>

* **Undo** — cancel a completed action.
* **Redo** — make a canceled action again.
* **Copy** — copy the selected item.
* **Paste** — insert the selected item.
* **Cut** — cut the selected item.
* **Find...** — open the search dialog for the project.
* **Find and replace** — open the project search dialog and replace.

![](<../../.gitbook/assets/05 3 en Menu Edit 3.png>)

## View <a href="#menu-view" id="menu-view"></a>

* **Zoom in** — zoom in on the scene.
* **Zoom out** — to reduce the scale of the scene.
* **Panels** — enable/disable the display of various windows.
* **To main page** — go back to the main page.

![](<../../.gitbook/assets/05 4 en Menu View 3.png>)

## Tools <a href="#menu-tools" id="menu-tools"></a>

{% hint style="warning" %}
**Attention!** Items in this menu may appear and disappear depending on the program configuration.
{% endhint %}

* **Mouse gestures** — open a tab with a list of available mouse gestures (see the "[Adding blocks with mouse gestures](../programming-visual/blocks-add-delete.md#mouse-gesture)" section).
* **Run** — start execution of the diagram currently displayed in interpretation mode (the item is available only in interpretation mode).
* **2D model** — switch the interpretation mode to a two-dimensional model.
* **Real robot** — switch the interpretation mode to control the real robot via Wi-Fi, Bluetooth, or USB, depending on the [platform](../about/#platforms) used and the settings for connecting to the robot.
* **Robot settings** — open the settings window of the robot model with which you work in TRIK Studio (for more details see the  "[Robots](../settings.md#robots)" section in the article ["TRIK Studio settings](../settings.md)").
* **Save as task…** — save the current diagram and two-dimensional model as an exercise for students. In an exercise, you cannot modify some parts of a solution. For example, the location of objects in a two-dimensional model or the configuration of sensors. Selecting this menu item opens a dialog in which you can select the parts to be frozen (for more information about exercises, see the article ["Exercises](../exercises.md)").
* **Subprograms** — subprograms management (for more details see the article ["Subprograms](../programming-visual/subprograms.md)").
* **Generate code** — open a tab with the generated code corresponding to the current diagram and the selected text language (this item may look like "Generate JavaScript code", "Generate Python code", "Generate C code", etc.). The code is not downloaded to the robot and is not executed, but can be edited and downloaded later.
* **Upload program** — only generate code and upload to the robot without executing.
* **Upload and execute program** — generate the code corresponding to the current diagram, load it and execute on the robot.
* **Stop robot** — interrupt the execution of the program and send the robot commands to turn off the motors.
* **Connect** — establish a connection with the robot. The robot must be turned on. The item is available only if the selected mode of working with the robot requires a constant connection (for example, interpretation of the program via Bluetooth or Wi-Fi).

![](<../../.gitbook/assets/05 5 en Menu Tools 3.png>)

## Settings <a href="#menu-settings" id="menu-settings"></a>

* **Preferences…** — open the TRIK Studio environment settings window (see the article "[TRIK Studio settings](../settings.md)").
* **Show grid** — enable/disable grid on the scene.
* **Show alignment** — enable/disable the display mode for vertical and horizontal guidelines for positioning objects relative to each other.
* **Switch on grid** — enable/disable automatic grid alignment.
* **Switch on alignment** — enable/disable vertical and horizontal guidelines for positioning blocks relative to each other.
* **Show all text** — enable/disable displaying all block properties directly on the diagram. If the text below the blocks is disabled, properties can be viewed and edited in the property editor at the top left.

![](<../../.gitbook/assets/05 6 en Menu Settings 3.png>)

## Help <a href="#menu-about" id="menu-about"></a>

* **Small help** — open help.
* **About TRIK Studio** — view brief information about TRIK Studio.
* **Open logs** — open a folder with log files.
* **Check for updates** — get information from the Internet about the availability of a new version of the environment or any of the plug-ins, and run auto-updates if necessary.

![](<../../.gitbook/assets/05 7 en Menu Help 3.png>)
