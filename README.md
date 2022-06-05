# Tipos de testes

Unitários = Testam um componente/funcionalidade de forma **isolada**.
Integração = Testa como um ou mais componentes/funcionalidades se comportam juntos(as).
E2E = Simula o que o usaurio vai fazer na aplicação diariamente.

# Banco de Dados

Unitários = Testam um componente/funcionalidade de forma **isolada**.
Integração = Talvez
E2E = Sim (não só banco de dados, QUALQUER CONEXÃO EXTERNA INCLUSIVE APIs)

# E-Commerce

- Realizar compras

1. Criar um usuário
2. Criar um produto
3. Criar uma compra
4. Criar uma forma de pagamento
5. Criar uma forma de envio
6. Criar uma forma de entrega
7. Criar uma forma de pagamento
8. Criar uma forma de envio
9. Criar uma forma de entrega
10. Criar uma forma de pagamento
11. Criar uma forma de envio
12. Criar uma forma de entrega
13. Criar uma forma de pagamento
14. Cadastra usuário no Banco
15. Cadastra produto no Banco
16. Cadastra compra no Banco
17. Cadastra forma de pagamento no Banco

[*] Changed the `Color` enum
  [+] Added variant `TRANSPARENT`
  [-] Removed variant `RED`

[*] Changed the `Cat` table
  [-] Removed column `color`
  [+] Added column `vaccinated`

[*] Changed the `Dog` table
  [-] Dropped the primary key on columns (id)
  [-] Removed column `name`
  [+] Added column `weight`
  [*] Altered column `isGoodDog` (arity changed from Nullable to Required, default changed from `None` to `Some(Value(Boolean(true)))`)
  [+] Added unique index on columns (weight)