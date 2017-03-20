//var server = 'http://nujessie.mugeno.org/ngh/banksonik/appSrv/';
var server = 'http://mbse.banjarnegara-foss.web.id/';
$('document').ready(function(){
  $("#lg-submit").click(function(){
	var uid = $('#username').val();
	var pwd = $('#password').val();
	$.post(server+"?opr=lgn",
		{
			user:uid,
			pass:pwd
		},
		function(result){
			splitucre(result);
			window.location='main.html';
	});
  });
});

function splitucre(ucre){
	var user = ucre.split('-');
	var id = user[0];
	var nm = user[1];
	var kl = user[2];
	if(id == 'user tidak ditemukan'){
		localStorage.setItem('user_id','00');
		localStorage.setItem('user_nm','00');
		localStorage.setItem('user_kl','00');
	}else{
		localStorage.setItem('user_id',id);
		localStorage.setItem('user_nm',nm);
		localStorage.setItem('user_kl',kl);
	}
	var welcomeGreet = "Selamat Datang "+nm+", <br/>Siswa Kelas "+kl;
	return welcomeGreet;
}

function saveHistory(pktId,usrId,score){
	$.post(server+'?opr=hst',{
		pkt:pktId,
		uid:usrId,
		scr:score
	},function(result){
		$("#logId").html(result);
	});
}

function historyList(uid){
	$.getJSON(server+'?opr=lsh&uid='+uid,function(riwayat){
		$("#lsLog table").remove();
		$.each(riwayat,function(index,data){
			$("#lsLog").append(
			"<table>"+
			"<tr><th width='100'>Nomor Log</th><td>"+data.logId+"</td></tr>"+
			"<tr><th>Tanggal</th><td>"+data.tanggal+"</td></tr>"+
			"<tr><th>Mapel</th><td>"+data.mapel+"</td></tr>"+
			"<tr><th>Skor</th><td>"+data.score+"</td></tr>"+
			"</table><br/>"
			);
		});
	});
}



function logOut(){
	localStorage.setItem('user_id','00');
	localStorage.setItem('user_nm','00');
	localStorage.setItem('user_kl','00');
	window.location='index.html';
}
