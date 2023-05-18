# AuthenticateUsers

### Dowload Package

  1ª Clonar o projeto do GitHub
  2ª Baixar os pacotes
      - yarn
      - npm
      - pnpm
  3ª Iniciar o servidor
      - yarn dev
  4ª [Opcional] Iniciar o prisma studio
      - npx prisma studio
-------------------------------------
### Estrutura de Pastas
  src
    - controllers
      - PostController.ts
      - UsersController.ts
    - database
      - index.ts
    - errors
      - BadRequest.ts
      - DefaultError.ts
      - Error422.ts
    - interfaces
      - IPostRepositories.ts
      - IUserRepositories.ts
      - IUsersType.ts
    - repositories
      - PostRepositories.ts
      - UserRepositories.ts
    - services
      - PostServices.ts
      - UserServices.ts
    - routes
      - index.ts
      - authenticateUsers.route.ts
      - posts.routes.ts
-------------------------------------
## Projetos para API
[X] Crud Usuarios
[] Autenticar um Usuario
    - Usando JWT
-------------------------------------
[X] Crud Posts
[] Criação de uma verificação de post
-------------------------------------
[X] Vitest
[] Testar regras de negocio
[] Testar rotas
