---
description: Instructions for Windows, Linux and Ubuntu
---

# TRIK controller firmware

Choose your operating system:

* [Windows](./#windows)
* [Linux](./#linux)
* [Ubuntu](./#ubuntu)

## Windows

1\. Download the latest [firmware image](https://trikset.com/en/downloads#firmware).\
2\. Download and install [DiskImager](https://github.com/RomanBelkov/DiskImager/releases/download/1.4.1/DiskImager.Installer.msi).&#x20;

![Installing DiskImager](<../../.gitbook/assets/diskImager-install 3.gif>)

{% hint style="warning" %}
**Attention!** You will need administrator permissions to install and use DiskImager.
{% endhint %}

3\. Remove the microSD card from the TRIK controller.\
4\. Insert it into your computer using a card reader.\
5\. Start DiskImager. To change the language, select `About → Language` in the menu.

![](<../../.gitbook/assets/72 2 En diskImager lang 2.png>)

6\. Select the disc letter to write.

![](<../../.gitbook/assets/72 3 En diskimager disk 2.png>)

&#x20;7\. Click the «Restore drives from» button.

![](<../../.gitbook/assets/72 4 En diskimager disk.png>)

8\. In the window that appears, filter the files by type `.xz` and select the downloaded file.

![](<../../.gitbook/assets/72 5 En diskimager 2.png>)

9\. Click "Open".

![](<../../.gitbook/assets/72 6 En diskimager.png>)

10\. Wait for the operation to complete.

![](<../../.gitbook/assets/72 7 En diskimager 2.png>)

&#x20;   &#x20;

## Linux

1\. Download the latest [firmware image](https://trikset.com/en/downloads#firmware).\
2\. Remove the microSD card from the TRIK controller.\
3\. Insert it into your computer using a card reader.\
4\. If the SD card has the correct partition table (the first partition is at least 2 GB, ext4 file system), then go to step 18.\
5\. Get superuser (root) rights:

```
sudo -i
```

6\. Look at the devices that are currently connected to the computer:

```
fdisk -l
```

7\. Unmount all SD card partitions using the `umount` command.

```
umount /dev/{first SD card partition}
umount /dev/{second SD card partition}
...
```

Example:

```
umount /dev/sdb1
```

8\. Select the inserted microSD card:

```
fdisk /dev/{device}
```

Example:

```
fdisk /dev/sdb
```

9\. View the current partition table using the `p` command.

```
p
```

10\. Remove any existing partitions using the `d` command.

```
d
```

11\. Make sure all partitions are removed:

```
p
```

12\. Create a new partition using the `n` command.

```
n
```

13\. Leave all parameters, except the size, by default - press Enter. Specify `+2G` for the query “Last sector, + sectors or + size {K, M, G}”.

```
Command (m for help): n
Partition type:
     p     primary (0 primary, 0 extended, 4 free)
     e     extended
Select (default p):
Partition number (1-4, default 1):
First sector (4096-784932712):
Last sector, +sectors or +size{K,M,G}: +2G
```

14\. Create a partition on the remainder of the SD card using the `n` command. Leave all parameters as default.

```
Command (m for help): n
Partition type:
     p     primary (0 primary, 0 extended, 4 free)
     e     extended
Select (default p):
Partition number (1-4, default 1):
First sector (4096-784932712):
Last sector, +sectors or +size{K,M,G}:
```

15\. Check with the `p` command what happened.

```
p
```

16\. Apply changes using the `w` command.

```
w
```

17\. Format partitions with `mkfs.ext4` commands.

```
mkfs.ext4 /dev/{раздел}
```

Example:

```
mkfs.ext4 /dev/sdb1
mkfs.ext4 /dev/sdb2
```

18\. Unmount the first partition using the `umount` command.

```
sudo umount /dev/{first partition}
```

Example:

```
sudo umount /dev/sdb1
```

19\. Unpack the downloaded firmware image using the Archive Manager.\
20\. Copy the unpacked image to the SD card using the `dd` command.

```
sudo dd bs=4M if=trik-base-v2-trikboard.ext4 of=/dev/{first partion}
```

Example:

```
sudo dd bs=4M if=trik-base-v2-trikboard.ext4 of=/dev/sdb1
```

## Ubuntu

{% hint style="info" %}
Instructions for version 14.04 and older.
{% endhint %}

1\. Download the latest [firmware image](https://trikset.com/en/downloads#firmware).\
2\. Remove the microSD card from the TRIK controller.\
3\. Insert it into your computer using a card reader.\
4\. Open the location of the downloaded firmware image in the file manager.\
5\. Call the context menu by right-clicking on the archive and select the first item "Open" in" Create bootable disk ".\
6\. From the drop-down menu, select the drive to which you want to burn the firmware. Then click the "Start Recovery" button.
