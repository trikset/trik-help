# Property editing

In TRIK Studio, there are two ways to edit property values ​​of blocks and links between them:

1. [Using Property Editor panel](editing-element-properties.md#panel).
2. [Directly on the diagram](editing-element-properties.md#diagram).

{% hint style="warning" %}
**Attention!** Editing the properties of the block [Subprogram](blocks.md#subprogram) is carried out only using the context menu.
{% endhint %}

## Using Property Editor panel <a href="#panel" id="panel"></a>

When a block, link, or element is selected, all the properties of the current element are displayed on the [Property Editor](../interface/#panel-property-editor) panel.

![](<../../.gitbook/assets/26 1 En 3.png>)

The property editor is a table. In the left column, the property name of the element is displayed, in the right - its value.

You can change the value of any property by clicking on the corresponding cell in the right column and entering the desired value.

For properties that allow only a specific set of values, for example, the “Port” property of the "[Wait for IR distance sensor](../../trik/programming-visual/blocks.md#wait-for-infrared-distance)" block, when you try to edit them, a drop-down menu will appear where the desired value is selected:

![](<../../.gitbook/assets/26 2 En editing-properties 2.png>)

## Property editing on the diagram <a href="#diagram" id="diagram"></a>

To edit properties directly on the diagram:

1. Hover over the value of the desired property.
2. Double-click the left mouse button to activate editing properties.
3. Enter the desired value.
4. Click on any place in the scene.

![](<../../.gitbook/assets/26 3 En edit2 2.gif>)

{% hint style="danger" %}
**Attention!** This approach can serve as a source of errors, because it allows you to enter an arbitrary text value of the property, including the incorrect one. Be careful.
{% endhint %}
