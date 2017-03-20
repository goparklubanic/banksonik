$('document').ready(function(){
	
	var usid = localStorage.getItem('user_id');
	var nama = localStorage.getItem('user_id');
	var klas = localStorage.getItem('user_id');
	if(usid=='00' && nama=='00' && klas=='00'){
		window.location='index.html';
	}else{
		var greet= "SELAMAT DATANG "+nama.toUpperCase();
		$("#welcomeGreet").html(greet);
	}
	
	$("#lo-btn").click(function(){
		localStorage.setItem('user_id','00');
		localStorage.setItem('user_nm','00');
		localStorage.setItem('user_kl','00');
		window.location='index.html';
	});
});
