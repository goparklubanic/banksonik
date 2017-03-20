//var server = 'http://nujessie.mugeno.org/ngh/banksonik/appSrv/';
var server = 'http://mbse.banjarnegara-foss.web.id/';

$('document').ready(function(){
	// sembunyikan element #hint
	$("#hint").hide();
	//Ambil jumlah soal
	var jsoal=localStorage.getItem('jsoal');
			
	// Ambil Nomor Paket soal (psid)
	var psid = localStorage.getItem("psid");
	
	// Tampilkan Score
	var score = localStorage.getItem('score');
	$("#score").html("Skor Saat Ini Adalah "+score);
	// Ambil urutan acal soal (urutSoal) dari localStorage
	var urutsoal = JSON.parse(localStorage.getItem('urutsoal'));
	
	// Ambil index deretan soal (idxso)
	// kondisi pengambialan awal, idxso = 0;
	var idxso = localStorage.getItem('idxso');
	
	// Set nomor pertanyaan = idxso + 1;
	var noper = parseInt(idxso) + 1;
	
	//jika nomor pertanyaan > jumlah soal, arahkan ke halaman selamat.html;
	if(noper > parseInt(jsoal)){window.location="selamat.html"}
	
	// Ambil Nomor soal database = urutsoal[idxso];
	// Kondisi pengmbilan awal = urutsoal[0]
	var nomorSoal = urutsoal[idxso];
	
	/*
	// periksa di console.log
	
	console.log("Nomor Paket Soal :",psid)
	console.log("Deret Acak Soal  :",urutsoal);
	console.log("Index Deret Soal :",idxso);
	console.log("Nomor Pertanyaan :",noper);
	console.log("Nomor Urut Soal  :",nomorSoal);
	*/
	
	//$('#psid').html(psid);
	/* **** fungsi getJson **** */
		$.getJSON(server+'?opr=tst&id='+psid+"&u="+nomorSoal,function(data){
			$("#dftQuest div").remove();
			$.each(data,function(index,soal){
				localStorage.setItem('hint',soal.k);
				$('#dftQuest').append("<div> "+
				"<p class='nso'>"+noper+". "+soal.qs+"</p>"+
				"<div class='ilu'>"+soal.il+"</div>"+
				"<table class='table'>"+
				"<tr><td width='30'><input type='radio' value='opta' name='opt'></td><td class='hint'>"+soal.a+"</td></tr>"+
				"<tr><td width='30'><input type='radio' value='optb' name='opt'></td><td class='hint'>"+soal.b+"</td></tr>"+
				"<tr><td width='30'><input type='radio' value='optc' name='opt'></td><td class='hint'>"+soal.c+"</td></tr>"+
				"<tr><td width='30'><input type='radio' value='optd' name='opt'></td><td class='hint'>"+soal.d+"</td></tr>"+
				"</table>"+
				"</div>");
			})
		});
		/* **** fungsi getJson **** */
		$("#sober").click(function(){
			
			//sembunyikan tombol ber-id sober
			$("#sober").hide();
			$("#hint").show();
			
			// cek jawabanI
			/// ambil kunci
			var kj = localStorage.getItem('hint');
			/// ambil jawaban
			var jw = $('input:checked').val();
			/// bandingkan
			if(jw == kj){
				/// jika benar alert 'Benar'
				$("#hint").html('Jawabanmu Benar');
				setScore(3);
			}else{
				/// jika salah alert 'Salah'
				$("#hint").html('Jawabanmu Belum Tepat');
				setScore(-1);
			}
			
			// Ambil index deret soal
			var idxso = localStorage.getItem('idxso');
			// Tambahkan 1 ke variabel index deret soal
			// sebagai idxbr (index berikut)
			var idxbr = parseInt(idxso) + 1;
			// jadian nilai idxbr sebagai pengganti idxso
			localStorage.setItem('idxso',idxbr);
			// reload halaman
			// location.reload();
			$('#hint').append(
			"<br />"+
			"<button class='btn btn-warning form-control' onclick=locarelo()>Lanjut ! >></button>"
			);
		});
});

function locarelo(){
	//sembunyikan elemen #hint
	$("#hint").hide();
	//munculkan elemen #sober
	$("#sober").show();
	//reload window
	location.reload();
}

function setScore(sc){
	// ambil score dari local storage
	var score = localStorage.getItem('score');
	
	// ubah score
	var newScore = parseInt(score) + parseInt(sc);
	
	// simpan score baru
	localStorage.setItem("score",newScore);
	
}
