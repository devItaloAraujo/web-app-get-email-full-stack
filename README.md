# Projeto Redway Get Email

Esse simples projeto se trata de uma aplicação **Node** web full-stack completa que coleta o email do usuário através de um formulário e o armazena em um banco de dados.

Esse projeto foi desenvolvido possuindo uma arquitetura bem direta e auto-explicativa com o lado do servidor desenvolvido na pasta back-end e o lado do cliente desenvolvido na pasta front-end.

No back-end foram utilizados JavaScript e TypeScript, com as blibliotecas **Express** (para gerenciar as chamadas a API) e **Sequelize** (um ORM para gerenciar o banco de dados em **MySQL**).

No front-end foi utilizado JavaScript e a biblioteca **React** com Vite para gerar a interface que o usuário interage com a aplicação.

Foram seguidos os príncipios **REST** para a API, isso é evidente na separação por camadas e componentes. Dessa maneira fica mais facil escalar a aplicação e também realizar sua manutenção a longo prazo.

Os componentes da aplicação (back, front e database) são dividos em containers do Docker e são independentes. A comunicação entre eles é realizada pelo docker-compose.

## Iniciando o projeto localmente:
- Tenha instalado o Node.
- Tenha instalado o Docker Compose.
- Clone esse repositório em uma pasta em seu computador.
- Dentro da pasta rode o seguinte comando no terminal: **npm start**
- Pronto! Acesse a interface do front-end em: 
  ➜  Local:   http://localhost:3000/

O comando **npm start** é um script que vai utilizar o docker-compose para orquestrar os 3 contâiners da aplicação.
