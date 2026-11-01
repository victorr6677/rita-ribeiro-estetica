/* Rita Ribeiro Estética — dados do site
   Edite SOMENTE este arquivo. Campo vazio aparece no site como "a confirmar".
   Preencha apenas o que a proprietária confirmar (nada de dados inventados).
   Painel administrativo (futuro): basta gerar este mesmo objeto a partir de uma
   API ou arquivo JSON; o site só lê window.SITE_CONFIG. */
window.SITE_CONFIG = {
  // WhatsApp: país + DDD + número, só dígitos. Ex.: "5535999999999"
  whatsapp: "",

  // Mensagem que já vem escrita quando a pessoa abre o WhatsApp
  mensagemWhatsapp: "Olá! Vim pelo site da Rita Ribeiro Estética e gostaria de agendar um horário.",

  // Instagram: apenas o usuário, sem @ e sem link. Ex.: "usuario"
  instagram: "",

  // Endereço completo (também usado no mapa). Ex.: "Rua X, 123, Bairro, São Sebastião do Paraíso - MG"
  endereco: "",

  // Funcionamento, em texto livre. Ex.: "Segunda a sexta, das 9h às 18h"
  horario: "",

  // Foto real do espaço para a primeira dobra. Ex.: "espaco.jpg"
  fotoHero: "",

  // Somente procedimentos confirmados.
  // Ex.: { nome: "Nome do procedimento", descricao: "Descrição curta confirmada" }
  procedimentos: [],

  // Fotos reais do espaço e dos tratamentos.
  // Ex.: { src: "foto-1.jpg", alt: "Sala de atendimento" }
  galeria: [],

  // Preencha e troque confirmado para true só depois da confirmação
  profissional: {
    confirmado: false,
    nome: "",
    cargo: "",        // ex.: título e registro profissional
    formacao: "",
    experiencia: "",
    foto: ""
  },

  // Somente depoimentos reais e com autorização por escrito.
  // Ex.: { texto: "…", autor: "Nome", autorizado: true }
  depoimentos: []
};
