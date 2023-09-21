function openform_zapis() {
	document.getElementById('abonform').style.display = 'none';
	document.getElementById('zap_form').style.display = 'block';
	document.getElementById('zapis_zag').style.display = 'block';
	document.getElementById('abon_zag').style.display = 'none';
	document.getElementById('zap_btn').style.backgroundColor = "#567A5C";
	document.getElementById('zap_btn').style.color = "white";
	document.getElementById('abon_btn').style.backgroundColor = "transparent";
	document.getElementById('abon_btn').style.color = "black";
	document.getElementById('abon_btn').style.cursor = "pointer";
}

function openform_abon() {
	document.getElementById('zap_form').style.display = 'none';
	document.getElementById('abonform').style.display = 'block';
	document.getElementById('abon_zag').style.display = 'block';
	document.getElementById('zapis_zag').style.display = 'none';
	document.getElementById('abon_btn').style.backgroundColor = "#567A5C";
	document.getElementById('abon_btn').style.color = "white";
	document.getElementById('zap_btn').style.backgroundColor = "transparent";
	document.getElementById('zap_btn').style.color = "black";
	document.getElementById('zap_btn').style.cursor = "pointer";
}
