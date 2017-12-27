# zlUploader
这是一个对百度上传webUploader组件的再封装，通过对一些通用功能的封装，仅暴露部分需个人调用的api，达到方便简单使用webUploader组件的目的。

## Demo
http://www.holyhi.cn/demo/zlUploader

## 如何使用
1. 下载[webUploader](http://fex.baidu.com/webuploader/)或者使用[cdn](http://www.bootcdn.cn/webuploader/)，将webUploader.js、webUploader.css和Uploader.swf文件引入项目页面内，详细可参考webUploader[官网](http://fex.baidu.com/webuploader/getting-started.html)。

2. 下载[jquery](http://jquery.com/download/)或者使用[cdn](http://www.bootcdn.cn/jquery/)将jquery文件引入项目页面内，注意，jquery文件必须放置在所有使用到jquery功能的js文件前方。

3. 给zlUploader提供一个载体div。
```html
  <div id="zlUploaderBox"></div>
```
4. 使用zlUploader来初始化你的上传板块
```javascript
  //初始化
  $("#zlUploaderBox").zlUploader();
  
  //也可以传入参数
  $("#zlUploaderBox").zlUploader({
    uploadNum: 1
  });
```

## 参数
调用方法
```javascript
  $(selector).zlUploader({
      server: true,
      serverUrl: "/upload"
  });
```
名称 | 类型 | 默认 | 描述
----|----|----|----
addImgUrl | String | none | 初始化默认添加标志图片
defaultImg | String | none | 上传文件时，没有默认图片时替代的图片，默认为空白图片，可以覆盖。
server | Boolean | false | 是否默认上传服务器。
serverUrl | String | '/' | 默认上传服务器地址，只有server设置为true时候才会生效。
size | Number | 100 | 图片尺寸，当前默认为宽高一样。
type | String | "image" | 上传类型, "image" or "file"。
uploadNum | Number | 5 | 上传文件数目, 默认为5。
formData | Object | {} | 上传时附加的参数，格式为key:value


## 事件
调用方法
```javascript
 $("selector").zlUploader({
     zlOnSuccess: function(response) {
         console.log("success");
     }
 });
```
名称 | 参数 | 描述
----|----|----
zlOnSuccess | responce | 成功上传后触发，返回响应response
zlOnError | reason | 上传失败后触发，响应失败结果
zlOnUploadComplete | none | 无论上传成功或者失败都触发该事件

## 方法
调用方法

```javascript
 $('selector').zlUploader('behavior name', argumentOne, argumentTwo);
```

名称 | 描述
----|----
getOptions | 获取上传最终配置信息

# License
MIT



