function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.legth == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "bebem.jpg");
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "jovemm.jpg");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "adultom.jpg ");
            } else {
                //Idoso
                img.setAttribute("src", "idoso.jpg");
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute("src", "bebef.jpg");
            } else if (idade < 21) {
                //jovem
                img.setAttribute("src", "jovemf.jpg");
            } else if (idade < 50) {
                //Adulto
                img.setAttribute("src", "adulta.jpg");
            } else {
                //Idoso
                img.setAttribute("src", "idosa.jpg");
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}