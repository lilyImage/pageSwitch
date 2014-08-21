var tools = (function(){
	return{
		getSearchParams : function(href){
			var target = href ? href.substr(href.indexOf('?')):location.search;
				to = href?(target.indexOf('#')>-1?target.indexOf('#'):undefined):undefined,//去掉hash的部分
				s = target.substring(1,to),//得到只有参数的部分
				params = s && s.split('&') || '',
				re = {};

			params && params.forEach(function(v){
				var param = v.split('=');
				re[param[0]] = param[1];
			});
			return re;
		}
	}
})();