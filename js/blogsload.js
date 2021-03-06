/*
*Load recent blogs
*GaoHR
*2016-04-16
*/
$(document).ready(function() {
	//blog
	for(i = 0; i < 5; i++) {
	//for(i = 0; i < bloglist.length; i++) {
		var tags = readtags(i);
		$("#blog").append(
			"<div class='row-fluid'>" +
			"<div class='span12 blog-article'>" +
			"<a href='" + bloglist[i].href + "' class='blog-title'><i class=' icon-bookmark' style='color:#6a6'> </i>" + bloglist[i].title + "</a>" +
			"<a href='Blogs.html#" + blogtype(bloglist[i].type) + "' class='blog-type'>[ " + bloglist[i].type + " ]</a>" +
			"<div class='row-fluid'>" +
			"<div class='span3 blog-tag-data'>" +
			"<img src='" + bloglist[i].img + "' class='blog-img' style='width:80%;margin-left:10%'>" +
			"<ul class='unstyled inline'>" +
			"<li type='circle' class='pull-left'><i class='icon-calendar'></i> <a href='#'>" + bloglist[i].date + "</a></li>" +
			"</ul>" +
			"<ul class='unstyled inline blog-tags'>" +
			"<li type='circle'>" +
			"<i class='icon-tags'></i><small>" + tags +
			"</small></li>" +
			"</ul>" +
			"</div>" +
			"<div class='span9 blog-article'>" +
			"<p>" + bloglist[i].content + "</p>" +
			"<a class='btn-blue' href='" + bloglist[i].href + "'>Read more <i class='icon-circle-arrow-right'></i></a>" +
			"</div>" +
			"</div>" +
			"</div>" +
			
			"</div><hr>"
		);
	}
	//Blogs
	//for(i = 0; i < 1; i++) {
	for(i = 0; i < bloglist.length; i++) {
		var tags = readtags(i);
		$("#allblogs").append(addblog(bloglist,i,tags));
		if(bloglist[i].type == "专业技术") {
			$("#technology").append(addblog(bloglist,i,tags));
		} else if(bloglist[i].type == "随笔小记") {
			$("#prose").append(addblog(bloglist,i,tags));
		} else if(bloglist[i].type == "心情寄语") {
			$("#emotion").append(addblog(bloglist,i,tags));
		} else if(bloglist[i].type == "奇闻趣问") {
			$("#interest").append(addblog(bloglist,i,tags));
		} else {}
	}	
	//add Blog
	function addblog(bloglist,n,tags) {
		var blogcon = "<div class='row-fluid'>" +
			"<div class='span2 blog-tag-data'>" +
			"<img src='" + bloglist[n].img + "' class='blog-img'>" +
			"<ul class='unstyled inline'>" +
			"<li type='circle' class='pull-left'><i class='icon-calendar'></i> <a href='#'>" + bloglist[n].date + "</a></li>" +
			"<li type='circle'><i class='icon-comments'></i> <a href='" + bloglist[n].href + "#cloud-tie-wrapper'><span>Comments</span></a></li>" +
			"</ul>" +
			"</div>" +
			"<div class='span9 blog-article'>" +
			"<a href='" + bloglist[n].href + "' class='blog-title'>" + bloglist[n].title + "</a>" +
			"<ul class='unstyled inline blog-tags pull-right'>" +
			"<li>" +
			"<i class='icon-tags'></i>" + tags +
			"</li>" +
			"</ul>" +
			"<p>" + bloglist[n].content + "</p>" +
			"<a class='btn-blue btn-mini' href='" + bloglist[n].href + "'>Read more <i class='icon-circle-arrow-right'></i></a>" +
			"</div>" +
			"</div>" +
			"<div style='background:#ddd;height:2px;margin:10px;'></div>";
			return blogcon;
	}
	
	function readtags(n) {
		tagslist = "";
		for(t = 0; t < bloglist[n].tags.length; t++) {
			tagslist += "<a href='#' style='font-size:9px !important'>" + bloglist[n].tags[t] + "</a>";
		}
		return tagslist;
	}
	
	function blogtype(type) {
		if(type == "专业技术") {
			return "tab_4_2";
		} else if(type == "随笔小记") {
			return "tab_4_3";
		} else if(type == "心情寄语") {
			return "tab_4_4";
		} else if(type == "奇闻趣问") {
			return "tab_4_5";
		} else {}
	}
	
	//Blog tags
	var tagscon = "";
	var tagsarr = [];  //put tags into array
	var tagnum = [];  //same tags numeber and index
	for(i = 0; i < bloglist.length; i++) {
		for(t = 0; t < bloglist[i].tags.length; t++) {
			var has = tagsarr.indexOf(bloglist[i].tags[t]);
			if(has == "-1") {
				tagsarr.push(bloglist[i].tags[t]);
			} else {
				if(tagnum[has] == undefined) {
						tagnum[has] = 2;
					} else {
						tagnum[has]++;
					}
			}
		}
	}
	for(j = 0; j < tagsarr.length; j++) {
		tagscon += "<li><a href='#' style='font-size:" + (12 + tagssize(tagnum[j])) + "px'><i class='icon-tag'></i> " + tagsarr[j] + "</a></li>";
	}
	$("#tags").append(tagscon);
	
	//判断并确定标签大小
	function tagssize(n) {
		if(n == undefined) {
			return 0;
		} else {
			return n * 2;
		}
	}
	
	//Topics
	var topics = eval('topicslist');
	//for(t = 0; t < topics.length; t++) {
	for(t = 0; t < 8; t++) {
		if(t == 3) {
			$("#topics").append("<br>");
		}
		$("#topics").append(
			"<div class='topicbody'>" +
				"<a href='site/special/" + topics[t].href + "' title='" + topics[t].title + "'>" +
					"<img src='site/special/" + topics[t].img + "'>" +
					"<p><b>" + topics[t].title + "</b></p>" +
				"</a>" +
				"<span>" + topics[t].content + "</span>" +
			"</div>");
	}
}) 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
