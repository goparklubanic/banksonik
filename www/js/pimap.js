//var server = 'http://nujessie.mugeno.org/ngh/banksonik/appSrv/';
var server = 'http://mbse.banjarnegara-foss.web.id/';
$('document').ready(function(){
	/* **** fungsi getJson **** */
		$.getJSON(server+'?opr=pmp',function(data){
			$("#dftMapel a").remove();
			$.each(data,function(index,mapel){
				$('#dftMapel').append("<a class='list-group-item' "+
					"onClick=pipak('"+mapel.id+"',this.innerHTML)>"+
					mapel.nama+"</a>"
				);
			})
		});
		/* **** fungsi getJson **** */
});

function pipak(id,mp){
	localStorage.setItem("mpid",id);
	localStorage.setItem("mpnm",mp);
	window.location='pipas.html';
}
