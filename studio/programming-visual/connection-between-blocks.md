# Links between blocks

Links between blocks in TRIK Studio indicate the control flow of interpretation between blocks.

#### Example

Let it be necessary that after the delay the program ends immediately.\
\
To do this, connect the [Timer](blocks.md#timer) and [End](blocks.md#final) blocks with a link pointing from the "Timer" block to the program end block.

![](<../../.gitbook/assets/17 1 En example.png>)

## Create links

Links can be created in two ways:

1. [Using mouse gesture](connection-between-blocks.md#mouse).
2. [Using linkers](connection-between-blocks.md#linker).

### Using mouse gestures <a href="#mouse" id="mouse"></a>

Hover over a block, hold down the right mouse button and draw a line to the second block. The line shape can be arbitrary. It is important that it starts strictly on one block and ends on the second.

![](<../../.gitbook/assets/17 2 En connections draw 1.gif>)

If you move the mouse cursor over the link, gray markers are displayed at its ends. By pulling on one of these markers, you can control the link.\
\
To attach one of the ends of the connection to the block, you need to pull the corresponding gray marker and release it on the block of interest.

![](<../../.gitbook/assets/17 3 En connections 2.gif>)

### Using linkers <a href="#linker" id="linker"></a>

![](https://thumb.tildacdn.com/tild3839-3232-4431-b534-323262666636/-/resize/88x/-/format/webp/programming-linkers.png)The Linker is a colored circle to the right of the block that appears after the block is selected.\
\
When you click on this circle and move the mouse with the left button pressed, the link begins to stretch out of the element.

If you drop this relationship on an existing element, these elements will be connected.

![](<../../.gitbook/assets/17 4 En linker 2.gif>)

If you release the left mouse button when the cursor is on an empty section of the diagram, a menu with the following items will appear:

* Delete
* Create new element

When you select the "Delete" menu item, the created link will be deleted.

When you hover over the menu item "Create a new element" a new menu appears, listing all the possible elements to create. When you select one of these items on the diagram, the corresponding element will be created and join the current link.

![](<../../.gitbook/assets/17 5 En new-block-menu 2.gif>)

## Delete links

Links are removed in the same way as [blocks](blocks-add-delete.md#del).

## Add a new block on the link

If you need to add a new block between two linked blocks, drag a block from the Palette panel to the link. Release the mouse button when you hover over a link (not a block).

![](<../../.gitbook/assets/17 6 En new-block 2.gif>)

## Create breakpoints

Links in TRIK Studio can be broken lines. To add a breakpoint, move the mouse cursor over the link, click the left mouse button and drag the gray marker that appears.

If the breakpoint of the connection is positioned so that it and the two nearest to it will be located approximately on one straight line, this will lead to the destruction of this breakpoint and smoothing of the broken line in this place.

![](<../../.gitbook/assets/17 8 En break-points2 2.gif>)
