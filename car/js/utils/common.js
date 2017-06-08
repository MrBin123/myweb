var common = {
  renderBody: function (tpl) {
//  var body = document.body
//  body.innerHTML = tpl + body.innerHTML
		$('body').html(tpl);
  },
  render: function (obj, tpl) {
//  obj.innerHTML = tpl
		$(obj).html(tpl);
		console.log($(obj));
		console.log(tpl);

  }
}

module.exports = common
