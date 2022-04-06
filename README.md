# Bulletin Board / Fórum

Esse é um projeto sandbox de um fórum de internet que foi criado para
estudar o framework [.NET Core](https://dotnet.microsoft.com) e tecnologias
associadas ([SQL Server](https://www.microsoft.com/en-us/sql-server/),
[Docker](https://docker.com), [Webpack](https://webpack.js.org/) etc.).

# Configuração

Criar o `appsettings.json` e incluir os valores para as seguintes chaves:

* `ConnectionStrings.DefaultConnection`: string de conexão para o banco de dados
descrito no container (`docker-compose.yml`).
* `Auth0.Domain`: domínio de autenticação do [Auth0](https://auth0.com)
* `Auth0.ClientId`: Client ID da aplicação do Auth0
* `Auth0.ClientSecret`: Client Secret da aplicação do Auth0
* `Smtp.Username`: Nome de usuário SMTP para envio de e-mails
* `Smtp.Password`: Senha de usuário SMTP
* `Smtp.Domain`: Domínio do servidor SMTP
* `Smtp.Port`: Porta TCP na qual o servidor SMTP recebe conexões

> Recomendo utilizar o [Mailtrap](https://mailtrap.io) para teste de
> emails, pois ele cria um inbox virtual onde todos os emails enviados
> usando as credenciais do inbox são capturados em vez de enviados
> de fato. Assim, emails reais não recebem mensagens de teste e é possível
> utilizar emails falsos para fins de teste.

# Execução

Subir os containers de dados (SQL Server, Redis) usando Docker Compose:

```shell
docker-compose up
```

Executar a aplicação localmente:

```shell
dotnet restore
dotnet run
```
