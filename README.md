pageSwitch
==========

switching pages in web app with transitions
单页应用中页面之间的转场切换

## 说明
* （1）依赖于zepto.js
* （2）代码中加入了zepto-touch.js 是为了支持swipeRight与swipeLeft 动作，实现页面的切换（暂时没有增加，考虑用其他的方式代替zepto touch模块）

## 功能
*  支持制定目标页（对应的hash值），切换到对应的页面

## 原理

利用不同的hash值，对应不同的页面；通过对hash的控制达到显示不同的页面；页面之间的转场动画利用transition动画实现