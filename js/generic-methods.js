/**
 * Function for getting a cookie
 *
 * @param {*} cname
 * @returns
 */
function getCookie(cname) {
	var value = '; ' + document.cookie;
	var parts = value.split('; ' + cname + '=');
	if (parts.length == 2)
		return parts
			.pop()
			.split(';')
			.shift();
}

/**
 * Function for setting a cookie
 *
 * @param {*} cname
 * @param {*} cvalue
 * @param {*} exdays
 */
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}


/**
 * Function for setting LocalStorage Items
 *
 * @param {*} lcName
 * @param {*} lcValue
 */
function setLocalStorage(lcName, lcValue) {
	localStorage.setItem(lcName, lcValue);
}