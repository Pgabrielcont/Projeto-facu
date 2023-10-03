function ExibirAlerta() {
    swal({
        title: "Olá Visitante!",
        text: "Bem-Vindo ao Convento da Penha!",
        icon: "success",
      });
}

window.onload = ExibirAlerta;