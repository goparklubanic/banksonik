//var server = 'http://nujessie.mugeno.org/ngh/banksonik/appSrv/';
var server = 'http://mbse.banjarnegara-foss.web.id/';
$('document').ready(function(){
	var mpid = localStorage.getItem("mpid");
	var mpnm = localStorage.getItem("mpnm");
	
	$('#nmp').html(mpnm);
	/* **** fungsi getJson **** */
	var kl = localStorage.getItem('user_kl');
		$.getJSON(server+'?opr=pks&mp='+mpid+"&kl="+kl,function(data){
			$("#dftPaket a").remove();
			var siki = new Date();
			$.each(data,function(index,paket){
				var olih = validPeriod(paket.start,paket.finish);
				if(olih == '0' ){
					$('#dftPaket').append("<a class='list-group-item ps'>"+
					" Paket No. "+paket.np+
					"<span class='badge'>"+paket.soal+"</span><br/>"+
					"<div class='timer'><label class='paket-label'>Mulai</label>: "+paket.start+"</div>"+
					"<div class='timer'><label class='paket-label'>Sampai</label>: "+paket.finish+"</div>");
				}else{
					$('#dftPaket').append("<a class='list-group-item ps' "+
					" onClick=gelarSoal("+paket.id+","+paket.soal+")>" +
					" Paket No. "+paket.np+
					"<span class='badge'>"+paket.soal+"</span><br/>"+
					"<div class='timer'><label class='paket-label'>Mulai</label>: "+paket.start+"</div>"+
					"<div class='timer'><label class='paket-label'>Sampai</label>: "+paket.finish+"</div>");
				}
				/*
				$('#dftPaket').append("<a class='list-group-item ps' "+
					" onClick=gelarSoal("+paket.id+","+paket.soal+")>" +
					" Paket No. "+paket.np+
					"<span class='badge'>"+paket.soal+"</span><br/>"+
					"<div class='timer'><label class='paket-label'>Mulai</label>: "+paket.start+"</div>"+
					"<div class='timer'><label class='paket-label'>Sampai</label>: "+paket.finish+"</div>"
					
				);
				*/ 
			})
		});
		/* **** fungsi getJson **** */
});
function validPeriod(st,fh){
	//new Date(year, month, day, hours, minutes, seconds, milliseconds)
	var saiki = new Date();
	if(st =='0000-00-00 00:00:00'){
		var olih = '1';
	}else{
		var labuh = konvertWaktu(st);
		var bubar = konvertWaktu(fh);
		if(saiki > labuh && saiki < bubar){
			var olih = '1';
		}else{
			var olih = '0';
		}
	}
	return olih;
}

function konvertWaktu(wkt){
	
	var dj = wkt.split(' ');
	
	var dn = dj[0].split('-');
	var taun = dn[0];
	var sasi = parseInt(dn[1])-1;
	var dina = dn[2];
	
	var jm = dj[1].split(':');
	var j = jm[0];
	var m = jm[1];
	var d = jm[2];
	
	var tglJam=new Date(taun,sasi,dina,j,m,d,0);
	return tglJam;
}

function leadZero(angka){
	var digit = angka.length;
	alert(digit);
}
function gelarSoal(psid,soal){
	// buat deretan acak nomor soal dari database
	var urutan = makeAr(soal);
	
	// simpan deretan acak nomor soal sebagai session urutsoal
	// dengan format strin JSON
	localStorage.setItem('urutsoal', JSON.stringify(urutan));
	
	// simpan nomor paket soal sebagai psid
	localStorage.setItem("psid",psid);
	
	// simpan nomor index soal pertama = 0
	localStorage.setItem("idxso",0);
	
	// simpan jumlah soal ke dalam jsoal
	localStorage.setItem('jsoal',soal);
	
	// set skor awal = 0;
	localStorage.setItem("score",0);
	// arahkan ke soal.html
	window.location='soal.html';
	 
}

function makeAr(soal){
	var urtn = [];
	for( var i = 1 ; i <= soal ; i++)
	{
		urtn.push(i);
	}
	
	var acakurut = kocokurut(urtn);
	return acakurut;
}

function kocokurut(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}
