const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

let client;
let botRunning = false; 


function startBot() {
  if (botRunning) {
    console.log('⚠️ O chatbot já está em execução.');
    return;
  }

  console.log('✅ Iniciando o chatbot...');
  botRunning = true;

  client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
  });

  client.on('qr', (qr) => {
    console.log('📱 Escaneie o QR Code abaixo para conectar:');
    qrcode.generate(qr, { small: true });
  });

  client.on('ready', () => {
    console.log('🤖 Tudo certo! WhatsApp conectado.');
  });

  client.on('message', async (msg) => {
       if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando digitação
        await delay(3000); // Delay de 3 segundos
        const contact = await msg.getContact(); // Pegando o contato
        const name = contact.pushname; // Pegando o nome do contato
        await client.sendMessage(
            msg.from,
            'Olá, ' +
            name.split(' ')[0] +
            '! Sou o assistente da Agência Próximo Destino. Como posso ajudá-lo? Por favor, digite uma das opções abaixo:\n\n1 - Pacote de viagem (Aéreo + Hospedagem)\n2 - Apenas Aéreo\n3 - Apenas Hospedagem\n4 - Falar com atendente'
        );
        await delay(3000); // Delay de 3 segundos
        await chat.sendStateTyping(); // Simulando digitação
        await delay(5000); // Delay de 5 segundos
    }

    if (msg.body !== null && msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();


        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Perfeito! Para dar continuidade ao nosso atendimento, precisamos de algumas informações como:\n\nSeu nome.\n\nOnde mora.\n\nDestino que pretende ir.\n\nDatas de ida e de volta.\n\nQuantidade de pessoas que irão viajar (se tiver criança, nos informe a idade).');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Após preencher todas informações e nos mandar, Digite "OK');

    }

    if (msg.body !== null && msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Perfeito! Para dar continuidade ao nosso atendimento, precisamos de algumas informações como:\n\nSeu nome.\n\nOnde mora.\n\nDestino que pretende ir.\n\nDatas de ida e de volta.\n\nQuantidade de pessoas que irão viajar (se tiver criança, nos informe a idade).');

        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Após preencher todas informações e nos mandar, Digite "OK" ');
    }

    if (msg.body !== null && msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Perfeito! Para dar continuidade ao nosso atendimento, precisamos de algumas informações como:\n\nSeu nome.\n\nOnde mora.\n\nDestino que pretende ir.\n\nDatas de ida e de volta.\n\nQuantidade de pessoas que irão viajar (se tiver criança, nos informe a idade).');
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Após preencher todas informações e nos mandar, Digite "OK" ');
    }

    if (msg.body !== null && msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Poderia dar um breve relato do que precisa, enquanto te transferimos ao nosso time especialista.');
        await delay(3000); //delay de 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos siga no instagram e fique por dentro dos melhores pacotes de viagens. \n\https://www.instagram.com/agencia.proximodestino?igsh=NWszN2N6eHV2OWty&utm_source=qr');
    }

    if (msg.body.match(/(Ok|ok|OK|oK)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Qual seria a sua média de orçamento para este pacote? \n\n5 - Até R$2.500 \n\n6 - Até R$5.000 \n\n7 - Até R$7.500 \n\n8 - Até R$10.000 \n\n9 - Acima de R$10.000  ');
    }

    if (msg.body !== null && msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Um ótimo valor! Aguarde enquanto te transferimos para nosso time especialista. ');
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos siga no instagram e fique por dentro dos melhores pacotes de viagens. \n\https://www.instagram.com/agencia.proximodestino?igsh=NWszN2N6eHV2OWty&utm_source=qr . ');

    }

    if (msg.body !== null && msg.body === '6' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();

        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Um ótimo valor! Aguarde enquanto te transferimos para nosso time especialista. ');
        await delay(3000); //Delay de 3000 milisegundnodos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos siga no instagram e fique por dentro dos melhores pacotes de viagens. \n\https://www.instagram.com/agencia.proximodestino?igsh=NWszN2N6eHV2OWty&utm_source=qr . ');
    }

    if (msg.body !== null && msg.body === '7' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Um ótimo valor! Aguarde enquanto te transferimos para nosso time especialista. ');
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos siga no instagram e fique por dentro dos melhores pacotes de viagens. \n\https://www.instagram.com/agencia.proximodestino?igsh=NWszN2N6eHV2OWty&utm_source=qr . ');

    }

    if (msg.body !== null && msg.body === '8' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Um ótimo valor! Aguarde enquanto te transferimos para nosso time especialista. ');
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos siga no instagram e fique por dentro dos melhores pacotes de viagens. \n\https://www.instagram.com/agencia.proximodestino?igsh=NWszN2N6eHV2OWty&utm_source=qr . ');
    }

    if (msg.body !== null && msg.body === '9' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Um ótimo valor! Aguarde enquanto te transferimos para nosso time especialista. ');
        await delay(3000); //Delay de 3000 milisegundos mais conhecido como 3 segundos
        await chat.sendStateTyping(); // Simulando Digitação
        await delay(3000);
        await client.sendMessage(msg.from, 'Nos siga no instagram e fique por dentro dos melhores pacotes de viagens. \n\https://www.instagram.com/agencia.proximodestino?igsh=NWszN2N6eHV2OWty&utm_source=qr . ');
    }
  });

  client.initialize();
}

function stopBot() {
  if (!botRunning) {
    console.log('⚠️ O chatbot já está parado.');
    return;
  }

  console.log('🛑 Parando o chatbot...');
  botRunning = false;

  if (client) {
    client.destroy()
      .then(() => {
        console.log('✅ Chatbot parado com sucesso.');
        client = null;
      })
      .catch((err) => {
        console.error('❌ Erro ao parar o chatbot:', err);
      });
  }
}
function restartBot() {
  console.log('🔄 Reiniciando o chatbot...');
  stopBot();
  setTimeout(() => {
    startBot();
  }, 1000); 
}

module.exports = { startBot, stopBot, restartBot };
