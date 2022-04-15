# Geoscan Pioneer specific blocks

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

For units available for all platforms, see the article

{% content-ref url="../studio/programming-visual/blocks.md" %}
[blocks.md](../studio/programming-visual/blocks.md)
{% endcontent-ref %}



## Geoscan Pioneer quadcopter units

|                                           Icon                                          |        Name        | Description                                                                                                                                                                                |
| :-------------------------------------------------------------------------------------: | :----------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|      <img src="../.gitbook/assets/Pioneer_Up_50.png" alt="" data-size="original">       |       Takeoff      | The command to start the flight.                                                                                                                                                           |
|      <img src="../.gitbook/assets/Pioneer_Dn_50.png" alt="" data-size="original">       |       Landing      | End-of-flight command.                                                                                                                                                                     |
|   <img src="../.gitbook/assets/Pioneer_to-point_50.png" alt="" data-size="original">    |  Go to local point | Specifies the destination point in local coordinates. The origin (0,0,0) is the takeoff point. The coordinate values are set in meters.                                                    |
| <img src="../.gitbook/assets/getCoordinatesBlock (1).png" alt="" data-size="original">  |  Get LPS Position  | Returns the current position in the local coordinate system.                                                                                                                               |
|      <img src="../.gitbook/assets/Pioneer_Led_50.png" alt="" data-size="original">      |         LED        | Sets the color of the LED on the quadcopter.                                                                                                                                               |
|  <img src="../.gitbook/assets/pioneerMagnetBlock (1).png" alt="" data-size="original">  |        Magnet      | Controls the operation of the load gripper [module](https://pioneer-doc.readthedocs.io/en/master/module/cargo.html). To enable the magnet, check the checkbox of the block property value. |
|     <img src="../.gitbook/assets/systemBlock (3).png" alt="" data-size="original">      |       System       | Allows you to execute a command in [Lua](https://pioneer-doc.readthedocs.io/ru/master/programming/lua/lua\_main.html). To execute the command, check the checkbox.                         |
|   <img src="../.gitbook/assets/pioneerYawBlock (1).png" alt="" data-size="original">    |         Yaw        | Controls the rotation around the vertical axis. To rotate clockwise, set the angle value in degrees with a minus sign.                                                                     |
|   <img src="../.gitbook/assets/readRangeSensor (1).png" alt="" data-size="original">    | Read Range Sensor  | Reads the information from the rangefinder.                                                                                                                                                |
