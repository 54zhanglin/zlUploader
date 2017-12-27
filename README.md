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
名称 | 类型 | 默认 | 必须 | 描述
----|----|----|----|----
addImgUrl | String | | 否 | 初始化默认添加标志图片
defaultImg | String |  | 否 | 上传文件时，没有默认图片时替代的图片，默认为空白图片，可以覆盖。
server | Boolean | false | 否 | 是否默认上传服务器。
serverUrl | String | '/' | 否 | 默认上传服务器地址，只有server设置为true时候才会生效。
size | Number | 100 | 否 | 图片尺寸，当前默认为宽高一样。
type | String | "image" | 否 | 上传类型, "image" or "file"。
uploadNum | Number | 5 | 否 | 上传文件数目, 默认为5。


## 事件

## 方法


# License
MIT



