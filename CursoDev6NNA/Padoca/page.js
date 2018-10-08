function Welcome() {
	$(function() {

		document.getElementById('precoUnitario').innerHTML = ('R$0,50');
	});
}

function AdicionarCarrinho() {
	$(function() {

		var nome = $("#produto option:selected").html();
		var quantidade = document.getElementById('quantidade').value;

		if (nome == ('Pão')) {
			var preco = 0.5;
		}
		if (nome == ('Queijo')) {
			var preco = 2;
		}
		if (nome == ('Café')) {
			var preco = 1.5
		}
		if (nome == ('Leite')) {
			var preco = 4;
		}

		var totalProduto = quantidade * preco;

		$('#tabela').append(
				'<tr><td>' + nome + '</td><td>' + quantidade
						+ '</td><td name=totalProduto>' + totalProduto
						+ '</td></tr>')

		var total = 0;

		$("td[name*='totalProduto']").each(function() {
			total += parseFloat($(this).html());
		})

		$('#subtotal').html('R$' + total + ',00');
	});
}
function Unitario() {

	document.getElementById('precoUnitario').innerHTML = ('');
	var produto = document.getElementById('produto').value;

	if (produto == ('pao')) {
		document.getElementById('precoUnitario').innerHTML = ('R$0,50');
	}
	if (produto == ('queijo')) {
		document.getElementById('precoUnitario').innerHTML = ('R$2,00');
	}
	if (produto == ('cafe')) {
		document.getElementById('precoUnitario').innerHTML = ('R$1,50');
	}
	if (produto == ('leite')) {
		document.getElementById('precoUnitario').innerHTML = ('R$4,00');
	}

}
function LimparCarrinho() {

	$("#tabela tr").remove();
	$('#subtotal').html('');

}
