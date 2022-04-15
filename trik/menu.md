# TRIK controller menu

The TRIK controller menu contains six sections:

1. File Manager — start and remove programs.
2. Testing — testing of devices connected to the TRIK controller.
3. Network Config— connecting the TRIK controller to other devices.
4. Comm settings — the interaction of several TRIK controllers.
5. Language — language selection.
6. More... — programming the controller, system settings, and information about the firmware version.

![](<../.gitbook/assets/74 1 TRIK-Menu File.png>)

{% hint style="info" %}
&#x20;Use the controller buttons to navigate the menu.&#x20;

"Up", "Down", "Right", "Left" — move through the menu.\
"Enter" (checkmark) — select a menu section.\
"Exit" (cross) — exit from the submenu.
{% endhint %}

## **File Manager** <a href="#files" id="files"></a>

The "File Manager" section is intended for viewing, launching, and deleting programs uploaded to the controller.

| ![](<../.gitbook/assets/74 1 TRIK-Menu File.png>) | ![](<../.gitbook/assets/74 1  TRIK-Menu File2.png>) |
| ------------------------------------------------- | --------------------------------------------------- |

### Starting the program

Press the Enter button (checkmark) to start the program.

### Deleting the program

To delete the program, press the "Right" button and confirm the deletion.

| ![](<../.gitbook/assets/74 1  TRIK-Menu File2.png>) | ![](<../.gitbook/assets/74 1 TRIK-Menu File4.png>) | ![](<../.gitbook/assets/74 1 TRIK-Menu File5.png>) |
| --------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |

### Deleting all programs

To remove all programs, select "Delete all ..." and confirm the removal.

## **Testing** <a href="#testing" id="testing"></a>

On the TRIK controller, using this menu item, you can test the connected devices:&#x20;

1. Analog sensors.&#x20;
2. Servos.&#x20;
3. Power motors.&#x20;
4. Digital sensors.&#x20;
5. Encoders.&#x20;
6. Gyroscope.&#x20;
7. Accelerometer.

| ![](<../.gitbook/assets/74 2 TRIK-Menu Test.png>) | ![](<../.gitbook/assets/74 3 TRIK-Menu Test-Analog.png>) |
| ------------------------------------------------- | -------------------------------------------------------- |

For more details, see the article

{% content-ref url="work-with-devices/testing-connected-devices.md" %}
[testing-connected-devices.md](work-with-devices/testing-connected-devices.md)
{% endcontent-ref %}



## **Network Config** <a href="#network" id="network"></a>

This section is about setting up the connection of the controller to a computer or smartphone.

| ![](<../.gitbook/assets/74 B TRIK-Menu Netw.png>) | ![](<../.gitbook/assets/74 B TRIK-Menu Netw4.png>) |
| ------------------------------------------------- | -------------------------------------------------- |

In the "Network" item, you can connect the controller to a computer or smartphone in two modes:

1. &#x20;Wi-Fi access point.
2. &#x20;Wi-Fi client.

For more details, see the article

{% content-ref url="wi-fi/" %}
[wi-fi](wi-fi/)
{% endcontent-ref %}



## **Comm settings** <a href="#interaction" id="interaction"></a>

At the "Comm settings" section, you can configure the parameters for the interaction of the controllers.

| ![](<../.gitbook/assets/74 C TRIK-Menu Comm.png>) | ![](<../.gitbook/assets/74 C TRIK-Menu Comm2.png>) |
| ------------------------------------------------- | -------------------------------------------------- |

For more details, see the article

{% content-ref url="wi-fi/interaction/" %}
[interaction](wi-fi/interaction/)
{% endcontent-ref %}



## **Language** <a href="#language" id="language"></a>

This section allows you to select the language of the TRIK controller menu.

1\. Select the language you want and press Enter.\
2\. Once the warning about the controller restart appears, press the Enter button again.\
3\. After restarting, the language will change to the selected one.

| ![](<../.gitbook/assets/74 D TRIK-Menu Lang6.png>) | ![](<../.gitbook/assets/74 D TRIK-Menu Lang5.png>) |
| -------------------------------------------------- | -------------------------------------------------- |

## **More...** <a href="#more" id="more"></a>

The "More..."  menu item contains the next sub-items:

1. Programming.
2. System settings.
3. Version[.](menu.md#system-version)

| ![](<../.gitbook/assets/74 E TRIK-Menu Etc.png>) | ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prtog.png>) |
| ------------------------------------------------ | ------------------------------------------------------ |

### **Programming** <a href="#programming" id="programming"></a>

Section "Programming" is intended for writing a program on the controller from ready-made commands.

![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prtog2.png>)

1. Add commands to the algorithm using the "\<new command>" item.
2. After the completion of the algorithm, select the "Run program" item.
3. To clear the list, use the "Clear list" menu item.

#### Add command <a href="#newcommand" id="newcommand"></a>

The "\<add command>" item allows you to add a command to the end of the algorithm.

Select a command using the Up and Down buttons and press Enter.

| ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prtog3.png>) | ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prtog4.png>) |
| ------------------------------------------------------- | ------------------------------------------------------- |

By adding commands to the list, you can get the final program.

{% hint style="warning" %}
When adding the "Motors forward" command to the algorithm, you must specify the power.
{% endhint %}

| ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prog6.png>) | ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prog7.png>) |
| ------------------------------------------------------ | ------------------------------------------------------ |

{% hint style="warning" %}
When adding a Timer command to the algorithm, you must specify the timeout in milliseconds.
{% endhint %}

| ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prog8.png>) | ![](<../.gitbook/assets/74 F TRIK-Menu Etc-Prog9.png>) |
| ------------------------------------------------------ | ------------------------------------------------------ |

#### Run program <a href="#runprogram" id="runprogram"></a>

The "Run program" item allows you to execute the written algorithm.

| ![](<../.gitbook/assets/74 F TRIK-Menu Etc-ProgA.png>) | ![](<../.gitbook/assets/74 F TRIK-Menu Etc-ProgB.png>) |
| ------------------------------------------------------ | ------------------------------------------------------ |

#### Clear list <a href="#clear" id="clear"></a>

The "Clear list" item allows you to delete the algorithm you wrote before.

![](<../.gitbook/assets/74 F TRIK-Menu Etc-ProgC.png>)

### **System settings** <a href="#system-settings" id="system-settings"></a>

In this subsection, you can choose what will be displayed in the Files folder:

* Scripts folder. In this case, only programs uploaded from TRIK Studio will be displayed.
* File system.

![](<../.gitbook/assets/74 G TRIK-Menu Etc-Syst2.png>)

### **Version** <a href="#system-version" id="system-version"></a>

In this subsection, you can see the firmware version and the mac-address.

| ![](<../.gitbook/assets/74 H TRIK-Menu Etc-Ver.png>) | ![](<../.gitbook/assets/74 H TRIK-Menu Etc-Ver2.png>) |
| ---------------------------------------------------- | ----------------------------------------------------- |
