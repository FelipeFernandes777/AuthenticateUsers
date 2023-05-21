# AuthenticateUsers

### Dowload Package

1. Clonar o projeto do GitHub <br/>
2. Baixar os pacotes <br/>
   - yarn <br/>
   - npm <br/>
   - pnpm <br/>
3. Iniciar o servidor <br/>
   - yarn dev <br/>
4. [Opcional] Iniciar o prisma studio <br/>
   - npx prisma studio <br/>

---

### Estrutura de Pastas <br/>

- src <br/>
  - controllers <br/>
    - PostController.ts <br/>
    - UsersController.ts <br/>
  - database <br/>
    - index.ts <br/>
  - errors <br/>
    - BadRequest.ts <br/>
    - DefaultError.ts <br/>
    - Error422.ts <br/>
  - interfaces <br/>
    - IPostRepositories.ts <br/>
    - IUserRepositories.ts <br/>
    - IUsersType.ts <br/>
  - repositories <br/>
    - PostRepositories.ts <br/>
    - UserRepositories.ts <br/>
  - services <br/>
    - PostServices.ts <br/>
    - UserServices.ts <br/>
  - routes <br/>
    - index.ts <br/>
    - authenticateUsers.route.ts <br/>
    - posts.routes.ts <br/>

---

### Projetos para API <br/>

---

(X) Crud Usuarios <br/>
(-) Autenticar um Usuario <br/>
  -  Usando JWT <br/>

(X) Crud Posts <br/>
(-) Criação de uma verificação de post <br/>
(X) Paginação <br />
(X) Vitest <br/>
(-) Testar regras de negocio <br/>
(-) Testar rotas <br/>
