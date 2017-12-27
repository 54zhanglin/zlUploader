zlUploader
=
这是一个对百度上传webUploader组件的再封装，通过对一些通用功能的封装，仅暴露部分需个人调用的api，达到方便简单使用webUploader组件的目的。

Demo
--
http://www.holyhi.cn/demo/zlUploader

如何使用
--
1. 下载[webUploader](http://fex.baidu.com/webuploader/)或者使用[cdn](http://www.bootcdn.cn/webuploader/)，将webUploader.js、webUploader.css和Uploader.swf文件引入项目页面内，详细可参考webUploader[官网](http://fex.baidu.com/webuploader/getting-started.html)。

2. [下载](http://jquery.com/download/)或者使用[cdn](http://www.bootcdn.cn/jquery/)将jquery文件引入项目页面内，注意，jquery文件必须放置在所有使用到jquery功能的js文件前方。

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

Api
--

License
--
MIT



