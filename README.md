# Redway Get Email Project

<details> 
  <summary>
    [English]
  </summary>

This simple project is a complete full-stack **Node** web application that collects user email through a form and stores it in a database.

The project was developed with a straightforward and self-explanatory architecture, with the server-side developed in the back-end folder and the client-side developed in the front-end folder.

On the back-end, JavaScript and TypeScript were used, along with the **Express** library (for managing API calls) and **Sequelize** (an ORM for managing the **MySQL** database).

On the front-end, JavaScript and the **React** library with Vite were used to generate the interface that the user interacts with the application.

**REST** principles were followed for the API, which is evident in the separation by layers and components. This makes it easier to scale the application and also to perform long-term maintenance.

The application components (back, front, and database) are divided into **Docker** containers and are independent. Communication between them is done through docker-compose.

## Starting the project locally:
- Make sure Node is installed.
- Make sure Docker Compose is installed.
- Clone this repository into a folder on your computer.
- Navigate to the cloned folder and run the following command in the terminal: **npm start**
- That's it! Access the front-end interface at: 
  ➜  Local:   http://localhost:3000/

The **npm start** command is a script that will use docker-compose to orchestrate the 3 containers of the application.

## Screenshots:

**Front-end interface:**
![Front-end screenshot](https://github.com/devItaloAraujo/web-app-get-email-full-stack/assets/45125829/86c85c31-139e-40a2-aaf4-c76a0b5daa84)

**Database viewed by MySQL Workbench:**
![Database screenshot](https://github.com/devItaloAraujo/redway_get_email/assets/45125829/642681d5-505a-40b1-8f8b-fa6c9d63c71a)

</details>


<Details> 
  <Summary>
    [Português]
  </Summary>

Esse simples projeto se trata de uma aplicação **Node** web full-stack completa que coleta o email do usuário através de um formulário e o armazena em um banco de dados.

Esse projeto foi desenvolvido possuindo uma arquitetura bem direta e auto-explicativa com o lado do servidor desenvolvido na pasta back-end e o lado do cliente desenvolvido na pasta front-end.

No back-end foram utilizados JavaScript e TypeScript, com as blibliotecas **Express** (para gerenciar as chamadas a API) e **Sequelize** (um ORM para gerenciar o banco de dados em **MySQL**).

No front-end foi utilizado JavaScript e a biblioteca **React** com Vite para gerar a interface que o usuário interage com a aplicação.

Foram seguidos os príncipios **REST** para a API, isso é evidente na separação por camadas e componentes. Dessa maneira fica mais facil escalar a aplicação e também realizar sua manutenção a longo prazo.

Os componentes da aplicação (back, front e database) são dividos em containers do **Docker** e são independentes. A comunicação entre eles é realizada pelo docker-compose.

## Iniciando o projeto localmente:
- Tenha instalado o Node.
- Tenha instalado o Docker Compose.
- Clone esse repositório em uma pasta em seu computador.
- Entre na pasta clonada e rode o seguinte comando no terminal: **npm start**
- Pronto! Acesse a interface do front-end em: 
  ➜  Local:   http://localhost:3000/

O comando **npm start** é um script que vai utilizar o docker-compose para orquestrar os 3 contâiners da aplicação.

## Imagens:

**Interface do front-end:**
![Captura de tela de 2024-02-19 18-55-29](https://github.com/devItaloAraujo/web-app-get-email-full-stack/assets/45125829/86c85c31-139e-40a2-aaf4-c76a0b5daa84)

**Base de dados observada pelo MySQL Workbench:**
![Captura de tela de 2024-02-19 18-55-55](https://github.com/devItaloAraujo/redway_get_email/assets/45125829/642681d5-505a-40b1-8f8b-fa6c9d63c71a)

</Details>
