# Running a 2D model in TRIK Studio from Sublime Text

This article discusses setting up and using the **Sublime Text** external programming environment to call programs in the TRIK Studio [2D model](../../studio/2d-model/). &#x20;

This will allow experienced TRIK Studio users to use all the features of professional text editors and their plugins: static analyzers, auto formatters, color themes.

It also describes how to automatically run the program on several fields, which can be useful for participants in competitions with automated verification systems.

## **Preparation** <a href="#configure" id="configure"></a>

It is assumed that the user is writing a program in an external editor and would like to run this program on one or more fields. Fields can be presented both in the `.xml` format (more details in the article "[2D model tuning](../../studio/2d-model/settings.md)"), and in the`.qrs` format.

1. Download [run\_2d\_model.cmd](https://gist.github.com/anastasiia-kornilova/2b955e62c3cef7a509fc043a189ea3ff) file for Windows or **** [run\_2d\_model.sh](https://gist.github.com/anastasiia-kornilova/f13a708562debabeeb126381f3d535e5) for Linux and place it in the folder where TRIK Studio is installed.
2. Place the fields on which you want to test the program in a separate folder. If the fields are in `.xml` format, create an empty `default.qrs` project in this folder.

## Setting up Sublime Text

{% hint style="warning" %}
The instruction was tested on Sublime Text 3 (Build 3211).\
You can download Sublime Text on the [official website](https://www.sublimetext.com).
{% endhint %}

1\. Open **Sublime Text**.

2\. Choose`Tools → Build System → New Build System`. &#x20;

![](<../../.gitbook/assets/44 1 En Sublime 2.png>)

3\. A window with a text file will open. You need to erase everything in it and paste the following code instead, where `<path to field dir>` is the full path to the folder with the fields:

```javascript
{
"cmd": ["D:\\TRIKStudio\\run_2d_model.cmd", “<path to fields dir>”, "$file"],
"selector": "source.js",
"encoding": "windows-1251"
}
```

4\. Edit this file:

* For Linux, substitute your path to the `run_2d_model.sh` file instead of the one specified in the code. For example:\
  `"cmd": ["/home/admin/TRIKStudio/run_2d_model.sh", “/home/admin/fields/”, "$file"]`
* For Windows, substitute your path to the `run_2d_model.cmd` file instead of the one specified in the code. For example:\
  `"cmd": ["D:\TRIKStudio\run_2d_model.cmd", "D:\Users\Admin\fields", "$file"]`

![](<../../.gitbook/assets/44 2 En Sublime 2.png>)

5\. Save this text file in the suggested directory _`<system folder>\Sublime Text 3\Packages\User`_ under the name `TRIK.sublime-build`.

6\. Open your source code in **Sublime Text**. To launch it, just click `Tools → Build` or the corresponding key combination (**Ctrl + B**).

{% hint style="success" %}
For the proposal to add this functionality, the TRIK project team thanks **Alexander Zhuravlev**, the participant of the NTI IRS Olympiad 2018-2020.
{% endhint %}
