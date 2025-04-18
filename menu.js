const readline = require('readline');
const { execSync, exec } = require('child_process');
const fs = require('fs');

// Funções de estilo
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const red = (text) => `\x1b[31m${text}\x1b[0m`;
const yellow = (text) => `\x1b[33m${text}\x1b[0m`;
const blue = (text) => `\x1b[36m${text}\x1b[0m`;
const bold = (text) => `\x1b[1m${text}\x1b[0m`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 🛠️ Setup inicial automático
async function setupInicial() {
  console.clear();
  console.log(bold(blue("🔧 Verificando ambiente...")));

  try {
    execSync('pm2 -v', { stdio: 'ignore' });
    console.log(green("✅ PM2 já está instalado."));
  } catch (err) {
    console.log(yellow("📦 Instalando PM2..."));
    try {
      execSync('npm install -g pm2', { stdio: 'inherit' });
      console.log(green("✅ PM2 instalado com sucesso!"));
    } catch (erro) {
      console.log(red("❌ Erro ao instalar PM2. Verifique o npm."));
      process.exit(1);
    }
  }

  if (!fs.existsSync('node_modules')) {
    console.log(yellow("📦 Instalando dependências do projeto..."));
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log(green("✅ Dependências instaladas com sucesso!"));
    } catch (erro) {
      console.log(red("❌ Erro ao instalar dependências."));
      process.exit(1);
    }
  } else {
    console.log(green("✅ Dependências já instaladas."));
  }

  setTimeout(showMenu, 1500);
}
