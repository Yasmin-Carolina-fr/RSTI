const { select } = require('@inquirer/prompts');

const start = async () => {
  while (true) {
    const option = await select({
      message: 'menu >',
      choices: [
        {
          name: 'Cadastrar meta',
          value: 'register'
        },
        {
          name: 'listar meta(s)',
          value: 'list'
        },
        {
          name: 'Sair',
          value: 'out'
        }
      ]
    });
    switch (option) {
      case 'register':
        console.log('Vamos cadastrar uma meta!');
        break;
      case 'list':
        console.log('Vamos listar sua(s) meta(s)');
        break;
      case 'out':
        console.log('Até a próxima!');
        return;
    }
  }
};
start();
