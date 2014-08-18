pageSwitch
==========

switching pages in web app with transitions
单页应用中页面之间的转场切换

## 说明
* （1）依赖于zepto.js
* （2）代码中加入了zepto-touch.js 为了支持swipeRight与swipeLeft 动作，实现页面的切换

## 功能
* （1）支持swipeRight与swipeLeft切换到上一页与下一页
* （2）支持制定目标页（对应的hash值），切换到对应的页面

## 原理

利用不同的hash值，对应不同的页面；通过对hash的控制达到显示不同的页面；页面之间的转场动画利用transition动画实现