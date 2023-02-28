## API do MyContacts

### Como rodar:

Necessário `docker`, `docker-compose` e um software de gerenciamento de banco relacional (DBeaver, por exemplo).

O front esta configurado para a porta 3000.
A api esta configurada para a porta 3001.
E o banco para a porta 5432.

Na raiz do projeto:

```
docker-compose build
```
E depois:

```
docker-compose up
```

No DBeaver, conecte no banco usando:

```
host: localhost
db: mycontacts
user: root
password: root

```

Conectado, copie e cole o codigo SQL que esta em `src/database/schema.sql`

Rode um comando de cada vez, dê refresh e veja que as tabelas `contacts` e `categories` foram criadas.
Normalmente as tabelas ficam dentro de mycontacts > Schemas > public > Tables.
Se o refresh não funcionar, feche o DBeaver e abra novamente.

Com as tabelas criadas, rode o front localmente (`npm run start`) e o app deve funcionar corretamente.

Rode sempre `docker-compose build` quando precisar (não estamos usando volumes, entao não pega atualizações do codigo feitas localmente).

Repositorio do Front:
https://github.com/WelGomws/mycontacts-frontend







