jQuery.fn.cuentaCaracteres = function () {
	this.each(function () {
		elem = $(this);
		let contador = $('<div>Contador caracteres: ' + elem.prop("value").length + '</div>');
		elem.after(contador);
		elem.data("campocontador", contador);

		elem.keyup(function () {
			let elem = $(this);
			let campocontador = elem.data("campocontador");
			campocontador.text('Contador caracteres: ' + elem.prop("value").length);
		});
	});
	return this;
};