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
			$.each(data,function(index,paket){
				$('#dftPaket').append("<a class='list-group-item ps' "+
					"onClick=gelarSoal("+paket.id+","+paket.soal+")>"+ 
					" Paket No. "+paket.np+
					"<span class='badge'>"+paket.soal+"</span><br/>"+
					"<span class='namaguru'>"+paket.guru+"</span></a>"
					
				);
			})
		});
		/* **** fungsi getJson **** */
});

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
