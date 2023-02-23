function CheckItem(form) {
	const phoneRegex = /^(\d{4}-)?\d{8}$/;
	const phoneNumber = form.tele.value.trim();
	if (!phoneRegex.test(phoneNumber)) {
		alert("电话号码格式不正确");
		window.location = "index.html"
	} else {
		window.location = "success.html"
	}
	return true;
}

function showRules() {
	alert("电话号码规则：\n" +
		"1.电话号码应为数字\n" +
		"2.如带区号则在区号与号码中间插入-号\n" +
		"3.电话号码为8位数字,区号为4位数字");
}

function Clear() {
	document.getElementById("tele").value = ''
}