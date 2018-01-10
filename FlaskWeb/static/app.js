function submit_value() {
  var frm = $("#the_frm")
  $.ajax({
    url: frm.attr("action"),
    type: frm.attr("type"),
    data: frm.serialize(),
    timeout: 30000
  }).done(function(data){
    render_result(data);
  });
}

function render_result(data) {
  console.log(data);
  $("#result").html("<h2>あなたの血中脂質量は" + data["result"].toFixed(2) + "です．</h2>");
}

$(function() {
  $("#btn_submit").on("click", submit_value)
});
