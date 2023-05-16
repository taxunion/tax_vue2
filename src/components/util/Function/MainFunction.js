var MainFunction = {
	$notemptyandnull: function(stirng) {
		if (stirng != "" & stirng != null) {
			return true
		} else {
			return false
		}
	},
	$emptyandnull: function(stirng) {
		if (stirng == "" || stirng == null) {
			return true
		} else {
			return false
		}
	},
	toFixed: function(number, m) {
		if (typeof number !== 'number') {
			throw new Error("number不是数字");
		}
		let result = Math.round(Math.pow(10, m) * number) / Math.pow(10, m);
		result = String(result);
		if (result.indexOf(".") == -1) {
			if (m != 0) {
				result += ".";
				result += new Array(m + 1).join('0');
			}
		} else {
			let arr = result.split('.');
			if (arr[1].length < m) {
				arr[1] += new Array(m - arr[1].length + 1).join('0')
			}
			result = arr.join('.')
		}
		return result
	},
	$isNumber(val) {
		return !isNaN(parseFloat(val));
	},
	$numMulti: function(num1, num2) {
		var baseNum = 0;
		try {
			baseNum += num1.toString().split(".")[1].length;
		} catch (e) {}
		try {
			baseNum += num2.toString().split(".")[1].length;
		} catch (e) {}
		return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math
			.pow(10, baseNum);
	},
	$getdefultMonth: function(stirng) {
		return localStorage.getItem('suosq');
	},
	$getUserInfo: function(stirng) {
		return JSON.parse(localStorage.getItem('userInfo'))
	},
	$emptyandnull: function(stirng) {
		if (stirng == "" || stirng == null) {
			return true
		} else {
			return false
		}
	},
	$yyyyMM: function(value) {
		console.log(value)
		if (value === undefined || value === null || value === '') {
			return "";
		}
		return value.substring(0, 4) + "年" + value.substring(4, 6) + "期";
	},
	$yyyyMMdd: function(value) {
		console.log(value)
		if (value === undefined || value === null || value === '') {
			return "";
		}
		return value.substring(0, 4) + "-" + value.substring(4, 6) + "-" + value.substring(6, 8);
	},
	$stringtostmp: function(string) { //后台格式转日期()
		if (string != "" & string != null) {
			if (string.length < 14) {
				return ""
			}
			var alllist = string.split("");
			var tmp = alllist[0] + alllist[1] + alllist[2] + alllist[3] + "年" + alllist[4] + alllist[5] +
				"月" + alllist[6] + alllist[7] + "日" + " " + alllist[8] + alllist[9] + "时" + alllist[10] +
				alllist[11] + "分" + alllist[12] + alllist[13] + "秒"
			return tmp
		} else {
			return ""
		}
	},
	$checkobjIsTrue: function(obj) {
		let status = false
		for (let key in obj) {
			if (obj[key]) {
				status = obj[key]
			}
		}
		return status
	},
	$timestampToStr: function(timestamp) {
		try {
			if (timestamp != null&&timestamp != "") {
				var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear();
				var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
				var D = date.getDate();
				var h = date.getHours();
				var m = date.getMinutes();
				var s = date.getSeconds();
				return Y + '-' + M + '-' + D;
			}else{
				return timestamp
			}
		} catch (e) {
			return timestamp
		}

	},
	// 仟分位符
	$toThousands: function(num) {
		function toFixed(number, m) {
			if (typeof number !== 'number') {
				throw new Error("number不是数字");
			}
			let result = Math.round(Math.pow(10, m) * number) / Math.pow(10, m);
			result = String(result);
			if (result.indexOf(".") == -1) {
				if (m != 0) {
					result += ".";
					result += new Array(m + 1).join('0');
				}
			} else {
				let arr = result.split('.');
				if (arr[1].length < m) {
					arr[1] += new Array(m - arr[1].length + 1).join('0')
				}
				result = arr.join('.')
			}
			return result
		}
		if (num == null || num == "undefined" || num == undefined || isNaN(num)) {
			return "0";
		} else if (num == "") {
			return toFixed(parseFloat(0), 2)
		} else {
			if (num < 0) {
				var numstr = String(num);
				var nums = numstr.substr(1);
				var s = toFixed(parseFloat(nums), 2);
				var L = s.split(".")[0].split("").reverse();
				var r = s.split(".")[1];
				var t = "";
				for (var i = 0; i < L.length; i++) {
					if ((i + 1) % 3 == 0 && (i + 1) != L.length) {
						t += L[i] + ",";
					} else {
						t += L[i] + "";
					}
				}
				return "-" + t.split("").reverse().join("") + "." + r;
			} else if (num > 0) {
				var s = toFixed(parseFloat(num), 2);
				var L = s.split(".")[0].split("").reverse();
				var r = s.split(".")[1];
				var t = "";
				for (var i = 0; i < L.length; i++) {
					if ((i + 1) % 3 == 0 && (i + 1) != L.length) {
						t += L[i] + ",";
					} else {
						t += L[i] + "";
					}
				}
				return t.split("").reverse().join("") + "." + r;
			} else {
				return toFixed(parseFloat(0), 2);
			}
		}
	},
	$pricetonew: function(n) { //类型代号转文字
		// if (!/^(0|\-*[1-9]\d*)(\.\d+)?$/.test(n)) return "数据非法";
		var fuhao = (n.toString().indexOf("-") == 0 ? "（负数）" : "");
		var unit = "仟佰拾亿仟佰拾万仟佰拾元角分",
			str = "";
		n += "00";
		//如果是负数就就截取
		if (fuhao == "（负数）") {
			n = n.substring(1, n.length);
		}
		var p = n.indexOf('.');
		if (p >= 0)
			n = n.substring(0, p) + n.substr(p + 1, 2);
		unit = unit.substr(unit.length - n.length);
		for (var i = 0; i < n.length; i++)
			str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
		return fuhao + str.replace(/零(仟|佰|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1")
			.replace(/(亿)万|(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");

	}



}
export {
	MainFunction
}
