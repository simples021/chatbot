const readline = require('readline');
const { startBot, stopBot, restartBot } = require('./chatbot'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\n🌟 === Menu do Chatbot === 🌟');
  console.log('1️⃣  Iniciar o chatbot (start) 🤖');
  console.log('2️⃣  Parar o chatbot (stop) 🛑');
  console.log('3️⃣  Reiniciar o chatbot (restart) 🔄');
  console.log('4️⃣  Sair 🚪');
  console.log('============================\n');
}

function handleMenuOption(option) {
  switch (option) {
    case '1':
      console.log('🤖 Comando: start');
      startBot(); 
      break;
    case '2':
      console.log('🛑 Comando: stop');
      stopBot(); 
      break;
    case '3':
      console.log('🔄 Comando: restart');
      restartBot(); 
      break;
    case '4':
      console.log('🚪 Saindo... Até logo! 👋');
      rl.close();
      process.exit(0);
      break;
    default:
      console.log('❌ Opção inválida. Tente novamente.');
  }
}

function main() {
  showMenu();
  rl.question('👉 Escolha uma opção: ', (option) => {
    handleMenuOption(option);
    main(); 
  });
}

main();