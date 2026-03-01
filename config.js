function EnviarDados(){
    // Estas quatro linhas estao criando variaveis
    let inputNome = document.getElementById("name")
    let inputEmail = document.getElementById("email")
    let inputNumero = document.getElementById("numero")
    let inputClinicaCRO = document.getElementById("clCRO")
    //----------------------------------------------------------------------------------------------------------------------------------------------
    // Essa variavel esta pegagando os valores de cara variavel e juntando
    let nome = inputNome.value.trim()
    let email = inputEmail.value.trim()
    let numero = inputNumero.value.trim()
    let clCRO = inputClinicaCRO.value.trim()
    //----------------------------------------------------------------------------------------------------------------------------------------------
    //Verifica se o campo esta preenchido ou não
    if (nome !== "") {
    } else {
        return false
    }
    if (clCRO !== "") {
    } else {
        return false
    }
    if (email !== "") {
    } else {
        return false
    }
    if (numero !== "") {
    } else {
        return false
    }
    //---------------------------------------------------------------------------------------------------------------------------------------------- 
    //Enviar mensagem no whatsapp do laborátorio
    const number = "5528999895363"
    const mensagem = `
Olá, gostaria de solicitar uma avaliação de caso.

Nome: ${nome}
Clínica / CRO: ${clCRO}
E-mail: ${email}
Telefone: ${numero}

Aguardo retorno para alinhamento.`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(mensagem)}`
    window.open(url, "_blank");
    //O valor dessas variaveis estao sendo modificados para apagar a caixa de texto toda vez que aperta o botao
    nome = ""
    email = ""
    numero = ""
    clCRO = ""
    //----------------------------------------------------------------------------------------------------------------------------------------------
    
    
}
