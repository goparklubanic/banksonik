$('document').ready(function(){
	
	var usid = localStorage.getItem('user_id');
	var nama = localStorage.getItem('user_id');
	var klas = localStorage.getItem('user_id');
	if(usid=='00' && nama=='00' && klas=='00'){
		window.location='login.html';
	}else{
		var greet= "SELAMAT DATANG "+nama.toUpperCase();
		$("#welcomeGreet").html(greet);
	}
});
