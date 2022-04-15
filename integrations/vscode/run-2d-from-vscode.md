# Running a 2D model in TRIK Studio from VSCode

This article discusses setting up and using the **VSCode** external programming environment to call programs in the TRIK Studio [2D model](../../studio/2d-model/).

This will allow experienced TRIK Studio users to use all the features of professional text editors and their plugins: static analyzers, auto formatters, color themes.

It also describes how to automatically run the program on several fields, which can be useful for participants in competitions with automated verification systems.

## **Preparation** <a href="#configure" id="configure"></a>

It is assumed that the user is writing a program in an external editor and would like to run this program on one or more fields. Fields can be presented both in `.xml` format (for more details, see the article "[2D model tuning](../../studio/2d-model/settings.md)"), and in `.qrs` format.

1. Download [run\_2d\_model.cmd](https://gist.github.com/anastasiia-kornilova/2b955e62c3cef7a509fc043a189ea3ff) for Windows or [run\_2d\_model.sh](https://gist.github.com/anastasiia-kornilova/f13a708562debabeeb126381f3d535e5) for Linux and place it in the folder where TRIK Studio is installed.
2. Place the fields on which you want to test the program in a separate folder. If the fields are in `.xml` format, create an empty `default.qrs` project in this folder.

{% hint style="warning" %}
The manual was tested on the January 2020 release (version 1.42).\
You can download VSCode from the [official website](https://code.visualstudio.com/Download).
{% endhint %}

## **Setting up VSCode**

1\. Create a folder where the source code file will be placed.

2\.  Open this folder in **VSCode** with `File → Open Folder`.

3\.  Choose`Terminal → Configure Tasks`.

![](<../../.gitbook/assets/46 1 En VSCode.png>)

4\. If there were no tasks before, then select`Create tasks.json file from template → Others` in the drop-down menu . The file  `tasks.json`will be opened. If tasks were created earlier, it will open right after point 3.

![](<../../.gitbook/assets/46 2 En VSCode.png>)

5\. Delete everything from this file and paste this code, where `<path to field dir>`is the full path to the folder containing fields:

```javascript
{
"version": "2.0.0",
	"tasks": [ {
		"label": "Run TRIK 2D model",
		"type": "shell",
		"command": "/home/admin/TRIKStudio/run_2d_model.sh" <path to fields dir> script.js",
		"windows": {
			"command": "D:\\TRIKStudio\\run_2d_model.cmd  <path to fields dir> script.js"
		},
		"group": "test",
		"presentation": {
			"reveal": "always",
			"panel": "new"
		}
	}]
}
```

6\. Depending on your operating system, edit the file`tasks.json`:

* For Linux, in the line corresponding to the `"command"` field, specify the path to the edited `run_2d_model.sh`and specify your source code file as the third argument. This file should be located in the folder that we opened with **VSCode**. Example: `"command": "/home/admin/TRIKStudio/run_2d_model.sh /home/admin/fields/ script.js"`
*   For Windows, in the line corresponding to the

    `"windows": { "command"` field, specify the path to the edited `run_2d_model.sh`and specify your source code file as the third argument. This file should be located in the folder that we opened with **VSCode**. Example:\
    `"command": "D:\TRIKStudio\run_2d_model.cmd D:\Users\Admin\fields script.js"`

![](<../../.gitbook/assets/46 3 En VSCode.png>)

7\. Save the file`tasks.json`.

8\. Now select `Run TRIK 2D model`in the dropdown menu `Terminal → Run Task` or press the corresponding keyboard shortcut (**Ctrl+Shift+B**) to run your code.&#x20;

![](<../../.gitbook/assets/46 4 En VSCode.png>)

{% hint style="success" %}
For the proposal to add this functionality, the TRIK project team thanks **Alexander Zhuravlev**, the participant of the NTI IRS Olympiad 2018-2020.
{% endhint %}
