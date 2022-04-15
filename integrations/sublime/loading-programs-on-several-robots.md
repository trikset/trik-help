# Uploading programs to several TRIK robots from Sublime Text

This article discusses the possibility of simultaneous loading of programs on a group of robots using the external text editor Sublime Text. The article is a continuation of the next material

{% content-ref url="run-2d-from-sublime.md" %}
[run-2d-from-sublime.md](run-2d-from-sublime.md)
{% endcontent-ref %}

## Setting up

Download the [send\_files.cmd](https://gist.github.com/anastasiia-kornilova/e1344f658a91449cf16217ec03147a18) file for Windows and place it in the folder where TRIK Studio is installed.

{% hint style="warning" %}
The manual was tested on Sublime Text 3 (Build 3211). You can download Sublime Text from the [official website](https://www.sublimetext.com).
{% endhint %}

Before starting the program for the first time, you should log in to the TRIK controller via WinSCP. Instructions on how to do this are available [here](../../studio/utilities/winscp.md). After that WinSCP will remember that it was allowed to establish a connection with this robot and will not require confirmation. This step must be repeated each time a new controller is connected.

1\. Start Sublime Text.

2\. Choose `Tools → Build System → New Build System`

![](<../../.gitbook/assets/45 1 En Sublime 2.png>)

3\. A window with a text file will open. In it, you need to erase everything and insert the following code instead:

```javascript
{
"cmd": ["D:\\TRIKStudio\\send_filesl.cmd", “<path to scripts dir>”, "<file with ip addresses>"],
"selector": "source.js"
}
```

Where:

* `<path to scripts dir>` — the full path to the folder with the programs to be loaded onto the robots, &#x20;
* `<file with ip addresses>` — the name of the`.txt` file that contains the IP addresses of the robots to upload the files.
* There must be one IP address per line. The file must be in the same folder as the programs to be uploaded.

4\. Specify your path to the `send_files.cmd` file instead of the one specified in the code.

Exapmple:

```javascript
"cmd": ["C:\\TRIKStudio\\send_files.cmd", "C:\\Users\\Admin\\myfiles", "ip_addr.txt"]
```

![](<../../.gitbook/assets/45 2 En Sublime 2.png>)

5\. Save the file in the suggested directory `<system directory>\Sublime Text 3\Packages\User` under the name`TRIK_SEND.sublime-build`.

6\. Choose`Tools → Build System` and then in the list opened choose`TRIK_send`.

![](<../../.gitbook/assets/45 3 En Sublime 2.png>)

7\. To start sending programs to robots, just click `Tools → Build` or the corresponding key combination `Ctrl+B`. In order to return to [start the 2D model](run-2d-from-sublime.md), select `Tools → Build System` and select `TRIK` in the list that opens.

![](<../../.gitbook/assets/45 4 En Sublime 2.png>)
