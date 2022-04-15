---
description: Creation and upload of exercises
---

# Exercises

Exercise is a regular program in which you cannot modify some parts of a solution (blocks, sensors setup, world parameters). That is, any diagram can be saved as an exercise for students.

## Exercise creation <a href="#create" id="create"></a>

1\. Draw a field on the scene using the [world editing panel](2d-model/#editor-world), if it is necessary for your task.

![](<../.gitbook/assets/29 1 En exercises 2.png>)

2\. Create a diagram.

![](<../.gitbook/assets/29 2 En exercises 2.png>)

3\. Remove all or part of the blocks from the diagram. The [Initial Node](programming-visual/blocks.md#initial) block must have remained on the scene.

![](<../.gitbook/assets/29 3 En exercises 2.png>)

4\. Choose `Tools → Save as task…` [in the main menu](interface/#main-menu).

5\. In the opened dialog, select the restrictions for the exercise.

![](<../.gitbook/assets/29 7 En exercises-save.png>)

|   | Name                                       | Description                                                                                                                |
| - | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| 1 | 2d model world is read-only                | Forbids editing walls and colored lines in a two-dimensional model.                                                        |
| 2 | Sensors are read-only                      | It prohibits changing the configuration of sensors, as well as their position and direction in a two-dimensional model.    |
| 3 | 2D robot model position is read-only       | Forbids to move the robot "manually."                                                                                      |
| 4 | Motors to wheels binding are read-only     | Forbids changing motors in the settings of a two-dimensional model.                                                        |
| 5 | 2D model simulation settings are read-only | It prohibits changing the noise settings of sensors and motors, as well as the physical engine in a two-dimensional model. |

6\. Click “OK” and select the path to save the exercise.

7\. After saving, the exercise will automatically open in TRIK Studio, where you can make sure that the selected options are not available for editing.

![](<../.gitbook/assets/29 8 En exercises.png>)

## Exercise load

Loading a saved exercise takes place as a regular program. For example, using the [File Panel](interface/#panel-file).
