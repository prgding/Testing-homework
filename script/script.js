function CheckItem(form) {
	const phoneRegex = /^\d{4}-?\d{8}$/;
	const phoneRegex2 = /\d{8}/
	const phoneNumber = form.tele.value.trim();

	// 没有 -
	if (phoneNumber.indexOf('-') == -1) {
		// 不是数字
		if (!phoneRegex2.test(phoneNumber)) {
			alert("电话号码格式不正确，请输入正确的电话号码。");
			window.location = "index.html"
			
		} else if (phoneNumber.length != 8) {
			alert("电话号码格式不正确，请输入正确的电话号码。");
			window.location = "index.html"
		} else {
			window.location = "success.html"
		}
	} else {
		// 有 -
		if (!phoneRegex.test(phoneNumber)) {
			alert("电话号码格式不正确，请输入正确的电话号码。");
			return false;
		} else {
			window.location = "success.html"
		}
	}
	return true;
}
