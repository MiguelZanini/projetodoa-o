// Obter o formulário pelo ID
 const form = document.getElementById('meu-formulario'); // Adicionar evento de envio ao formulário
  form.addEventListener('submit', function(e) { e.preventDefault(); // Obter os valores dos campos do formulário
   const nome = document.getElementById('nome').value; const email = document.getElementById('email').value; const mensagem = document.getElementById('Olá, muito Obrigada pela sua doação!').value; // Construir o link do WhatsApp com as informações do formulário
    const mensagemWhatsapp = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Minha mensagem é: ${mensagem}.`; const linkWhatsapp = `https://api.whatsapp.com/send?phone=51995492411&text=${encodeURIComponent(mensagemWhatsapp)}`; // Abrir o aplicativo do WhatsApp com o link criado
     window.open(linkWhatsapp); });