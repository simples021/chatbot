const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\n🌟 === Menu do Chatbot === 🌟');
  console.log('1️⃣  Iniciar o chatbot 🤖');
  console.log('2️⃣  Parar o chatbot 🛑');
  console.log('3️⃣  Reiniciar o chatbot 🔄');
  console.log('4️⃣  Sair 🚪');
  console.log('============================\n');
}

function handleMenuOption(option) {
  switch (option) {
    case '1':
      console.log('🤖 Iniciando o chatbot...');
      exec('pm2 start chatbot', (err, stdout, stderr) => {
        if (err) {
          console.error('❌ Erro ao iniciar o chatbot:', err.message);
          return;
        }
        console.log(stdout || stderr);
      });
      break;
    case '2':
      console.log('🛑 Parando o chatbot...');
      exec('pm2 stop chatbot', (err, stdout, stderr) => {
        if (err) {
          console.error('❌ Erro ao parar o chatbot:', err.message);
          return;
        }
        console.log(stdout || stderr);
      });
      break;
    case '3':
      console.log('🔄 Reiniciando o chatbot...');
      exec('pm2 restart chatbot', (err, stdout, stderr) => {
        if (err) {
          console.error('❌ Erro ao reiniciar o chatbot:', err.message);
          return;
        }
        console.log(stdout || stderr);
      });
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
    main(); // Mostra o menu novamente após a escolha
  });
}

main();