function getQueryString(key) {

	var value;

	// クエリーストリング取得
	var qStr = location.search;

	//console.log(qStr);

	if(qStr != "") {
		//「?」を削除
		qStr = qStr.substring(1, qStr.length);

		//console.log(qStr);

		var tmp = qStr.split("&");

		//「&」で分割
		//console.log(tmp);

		// 「=」で分割
		for(i in tmp) {
			if(tmp[i].split("=")[0] == key) {
				value = tmp[i].split("=")[1];
				break;
			}
		}
	}
	//console.log(value);

	return value;

}