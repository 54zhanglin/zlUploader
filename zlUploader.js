/**
 *	zlUploader v0.1
 *	日期：2017-12-27
 *	作者：张霖
 *	邮箱：65124705@qq.com
 *	主页：http://www.holyhi.cn/
 *******************************************************************
 *	Copyright (c) 2014, zhang lin All rights reserved.
 */

(function($) {
	//uploader对象缓存
	var uploader;

	var methods = {
		init: function(options) {
			//合并默认配置项
			var $el = $(this),
				setting = $.extend({
					//上传类型，图片/文件
					type: "file",
					//单次上传数目, 默认为5张，如果超过5张，则从第一张开始覆盖
					uploadNum: 5,
					//替代图片，默认为空白图片
					defaultImg: 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
					//图片尺寸
					size: 100,
					//是否上传服务器
					server: false,
					//服务器地址, 此配置起作用必须server为true
					serverUrl: "/",
					//添加按钮图片url
					addImgUrl: "",
					//上传附加参数
					formData: {},
					//是否启用错误遮罩框
					errorDimmer: true
				}, options),
				id;

			if ($el.attr("id")) {
				id = '#' + $el.attr("id");
			}else if ($el.attr("class")) {
				id = '.' + $el.attr("class").split(" ").join(".");
			}else {
				$.error("需为承载体赋予id或者class值！");
				return;
			}

			//绑定on事件
			for (var key in setting) {
				if (setting[key] instanceof Function) {
					$el.on(key, setting[key]);
				}
			}

			//初始化
			var html = '<div id="fileList" class="uploader-list">' +
							'<div id="filePicker" class="file-item thumbnail">' +
								'+' +
							'</div>' +
						'</div>';

			$(id).addClass("zl uploader-box");
			$(id).html(html);

			//如果有指定的添加按钮图片，则替换“+”
			if (setting.addImgUrl) {
				$(id).find("#filePicker").html('<img src="' + setting.addImgUrl + '" width="' + setting.size + '" height="' + setting.size + '">');
			}

			//webUploader的配置文件
			var webUploaderOption = {
				auto: setting.server,
				server: setting.serverUrl,
				swf: 'https://cdn.bootcss.com/webuploader/0.1.1/Uploader.swf',
				pick: {
					id: id + " #filePicker",
					multiple: !(setting.uploadNum === 1)
				},
				resize: false,
				formData: setting.formData
			};

			switch (setting.type) {
				case "image":
					webUploaderOption.accept = { title: 'Images', extensions: 'gif,jpg,jpeg,bmp,png', mimeTypes: 'image/*'};
					break;
				case "file":
					break;
			}


			//启动webuploader
			uploader = WebUploader.create(webUploaderOption);

			var	$list = $(id).find("#fileList"),
				thumbnailWidth = 100,
				thumbnailHeight = 100,
				isAlone = (setting.uploadNum == 1);

			//当文件被加入队列前触发
			uploader.on( 'beforeFileQueued', function( file ) {
				//如果只允许上传单一文件，则重置文件队列
				if (isAlone) {
					uploader.reset();
				}
			});

			//当有文件添加进来的时候
			uploader.on( 'fileQueued', function( file ) {
				var $li = $(
						'<div id="' + file.id + '" class="file-item thumbnail">' +
							'<img width="' + setting.size + '" height="' + setting.size + '">' +
						'</div>'
					),
					$img = $li.find('img');


				// $list为容器jQuery实例
				if (isAlone) {
					$li.removeClass("file-item thumbnail");
					$list.find("#filePicker .webuploader-pick").html($li);
				}else {
					$list.prepend( $li );
				}

				// 创建缩略图
				// 如果为非图片文件，可以不用调用此方法。
				// thumbnailWidth x thumbnailHeight 为 100 x 100
				uploader.makeThumb( file, function( error, src ) {
					if ( error ) {
						$img.replaceWith('<span>不能预览</span>');
						return;
					}

					$img.attr( 'src', src );
				}, thumbnailWidth, thumbnailHeight );
			});

			uploader.on( 'uploadSuccess', function(file, response) {
				//抛出zl成功事件
				$el.trigger("zlUploadSuccess", response);
			});

			uploader.on( 'uploadError', function(file, reason) {
				//抛出zl错误事件
				$el.trigger("zlUploadError", reason);


				//是否添加错误遮罩框
				if (setting.errorDimmer) {
					var fileId = file.id,
						$fileDom = $list.find("#" + fileId);

					$fileDom.append('<span class="error-x">X</span>');
				}
			});

			return uploader;
		},
		//获取配置
		getOption: function() {
			return uploader.getFiles();
		}
	};


	$.fn.zlUploader = function(method) {
		if (methods[method]) {
			//方法的调用
			return methods[method].apply(this, Array.prototype.slice(arguments, 1));
		}else if (method instanceof Object || !method) {
			//传参，初始化
			return methods.init.apply(this, arguments);
		}else {
			//传入错误的方法
			$.error("方法 " + method + " 不存在！");
		}

	}
})(jQuery);