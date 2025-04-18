const readline = require('readline');
const { startBot, stopBot, restartBot } = require('./chatbot'); // Importa as funções do chatbot.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\n🌟 === Menu do Chatbot === 🌟');
  console.log('1️⃣  Iniciar o chatbot 🤖');
  console.log('2️⃣  Parar o chatbot 🛑');
  console.log('3️⃣  Reiniciar o chatbot 🔄');
  console.log('4️⃣  Sair do menu (bot continuará rodando) 🚪');
  console.log('============================\n');
}

function handleMenuOption(option) {
  switch (option) {
    case '1':
      console.log('🤖 Comando: Iniciar o chatbot');
      startBot(); // Chama a função para iniciar o bot
      break;
    case '2':
      console.log('🛑 Comando: Parar o chatbot');
      stopBot(); // Chama a função para parar o bot
      break;
    case '3':
      console.log('🔄 Comando: Reiniciar o chatbot');
      restartBot(); // Chama a função para reiniciar o bot
      break;
    case '4':
      console.log('🚪 Saindo do menu... O bot continuará rodando (se estiver ativo). 👋');
      rl.close(); // Fecha o menu
      break;
    default:
      console.log('❌ Opção inválida. Tente novamente.');
  }
}

function main() {
  showMenu();
  rl.question('👉 Escolha uma opção: ', (option) => {
    handleMenuOption(option);
    if (option !== '4') {
      main(); // Mostra o menu novamente, exceto se a opção for "4"
    }
  });
}

main();
