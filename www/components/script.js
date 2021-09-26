// This is a JavaScript file
$(document).on("click","#cadastrar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };
  $.ajax({
    type: "post",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa",
    data:parametros,
    success: function(data){
      alert(data);
      $("#nome").val(""),
      $("#curso").val("")
    },
    error: function(data){
      alert("Erro ao cadastrar");
    }
  })
});
$(document).on("click","#buscar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };
  $.ajax({
    type: "get",
    dataType:"json",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa/"+$("#id").val(),
    success: function(data){
      $("#nome").val(data.nome),
      $("#curso").val(data.curso)
    },
    error: function(data){
      alert("Erro ao cadastrar");
    }
  });
});
$(document).on("click","#alterar", function(){
  let parametros = {
    "nome":$("#nome").val(),
    "curso":$("#curso").val()
  };
  $.ajax({
    type: "put",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa"+$("#id").val(),
    data:parametros,
    success: function(data){
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(data){
      alert("Erro ao alterar");
    }
  })
});
$(document).on("click","#deletar", function(){
  $.ajax({
    type: "delete",
    url: "https://www.jussimarleal.com.br/exemplo_api/pessoa",
    data:parametros,
    success: function(data){
      alert(data);
      $("#nome").val("");
      $("#curso").val("");
    },
    error: function(data){
      alert("Erro ao deletar");
    }
  })
});