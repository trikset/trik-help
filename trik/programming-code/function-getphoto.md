# Function getPhoto

{% hint style="info" %}
This article is automatically translated from Russian by Google Translator.
{% endhint %}

## Function description

The function returns a one-dimensional array of bytes containing the pixels of an rgb32-formatted image taken from the camera (image size 160x120). This function can be used to solve marker recognition problems.

## Function call

{% tabs %}
{% tab title="JavaScript" %}
```
var pic = getPhoto();
```
{% endtab %}

{% tab title="Python" %}
```python
pic = getPhoto();
```
{% endtab %}
{% endtabs %}

## Work example

Let's look at an example of converting a frame taken with a camera to grayscale and black-and-white color formats.

Take a picture and display the result with the [**show**](object-brick/class-display.md#show) **** function.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// take a frame in rgb32 format
var pic = getPhoto();
brick.display().show(pic, total_height, total_width, "rgb32");
script.wait(2000);
```
{% endtab %}

{% tab title="Python" %}
```
# take a frame in rgb32 format
pic = getPhoto();
brick.display().show(pic, total_height, total_width, "rgb32");
script.wait(2000);
```
{% endtab %}
{% endtabs %}

Rwsult:

![](https://thumb.tildacdn.com/tild6535-6131-4638-b834-323461306536/-/resize/240x/-/format/webp/getphoto1.png)

## Implementing the grayscale function

{% tabs %}
{% tab title="JavaScript" %}
```javascript
function grayScale(sPic){
	bufPic = [];
	for(var i = 0; i < total_height; i++)
		for(var j = 0; j < total_width; j++){
			var x = i * total_width + j;
			var p = sPic[x];
			var r = (p & 0xff0000) >> 16;	// take the value of the red component
			var g = (p & 0xff00) >> 8;	// take the value of the green component
			var b = (p & 0xff);		// take the value of the blue component
			p = r * 0.299 + g * 0.587 + b * 0.114; // component Y of YUV
			bufPic[x] = p; 
		}
	return bufPic;
}
```
{% endtab %}

{% tab title="Python" %}
```
def grayScale(sPic):
	bufPic = [];
	for i in range(total_height):
		for j in range(total_width):
			x = i * total_width + j;
			p = sPic[x];
			r = (p & 0xff0000) >> 16;	# take the value of the red component
			g = (p & 0xff00) >> 8; # take the value of the green component
			b = (p & 0xff); # take the value of the blue component
			p = r * 0.299 + g * 0.587 + b * 0.114; # component Y of YUV
			bufPic.append(p); 
	return bufPic;
```
{% endtab %}
{% endtabs %}

Converts the image to black and white and outputs it to the display:

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var pic = grayScale(pic);

brick.display().show(pic, total_height, total_width, "grayscale8");
script.wait(2000);
```
{% endtab %}

{% tab title="Python" %}
```
pic = grayScale(pic);

brick.display().show(pic, total_height, total_width, "grayscale8");
script.wait(2000);
```
{% endtab %}
{% endtabs %}

Result:

![](https://thumb.tildacdn.com/tild3136-3162-4264-b135-313732663734/-/resize/240x/-/format/webp/getphoto2.png)

## Implementing the image binarization function

{% tabs %}
{% tab title="JavaScript" %}
```javascript
// Binarization - converting the image to black and white
function binarization(treshold, sPic){
	bufPic = []
	for(var i = 0; i < sPic.length; i++){
		bufPic[i] = sPic[i] > treshold ? 255 : 0;
	}
	return bufPic;
}
```
{% endtab %}

{% tab title="Python" %}
```
# Binarization - converting the image to black and white
def binarization(treshold, sPic):
	bufPic = []
	for i in range(len(sPic)):
		bufPic.append(255 if sPic[i] > treshold else 0);
	return bufPic;
```
{% endtab %}
{% endtabs %}

Translates the image to black and white and outputs it to the display:

{% tabs %}
{% tab title="JavaScript" %}
```javascript
var pic = binarization(80, pic);
brick.display().show(pic, total_height, total_width, "grayscale8");
script.wait(2000);
```
{% endtab %}

{% tab title="Python" %}
```
pic = binarization(80, pic);
brick.display().show(pic, total_height, total_width, "grayscale8");
script.wait(2000);
```
{% endtab %}
{% endtabs %}

Result:&#x20;

![](https://thumb.tildacdn.com/tild3430-3165-4933-b962-626438366662/-/resize/240x/-/format/webp/getphoto3.png)

{% hint style="info" %}
[An example of a program using the getPhoto function](https://dl.trikset.com/trikset-help/getPhoto.js).
{% endhint %}
