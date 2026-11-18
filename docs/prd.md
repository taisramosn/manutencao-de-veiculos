# 📄 Documento de Requisitos do Produto (PRD) - CarCare

## 1. Visão Geral e Objetivo

O **CarCare** é um aplicativo web didático desenvolvido para auxiliar proprietários de veículos no controle e organização das informações relacionadas aos seus carros e às manutenções realizadas.

A aplicação permitirá o cadastro de veículos, a visualização de seus dados e o registro de informações simples sobre manutenções realizadas, incluindo observações e valores gastos.

O objetivo do sistema é centralizar as informações básicas dos veículos e seus registros de manutenção em um único lugar, facilitando a consulta das informações pelo proprietário.

**Regra de Negócio Principal:** cada registro de manutenção deve estar relacionado a um veículo cadastrado no sistema.

---

## 2. Atores do Sistema

- **Proprietário:** responsável pelo cadastro dos veículos e pelo registro e consulta das informações relacionadas às manutenções.

> **Observação:** o sistema não possui cadastro de usuários, contas ou gerenciamento de usuários.

---

## 3. Histórias de Usuário e Escopo

As histórias de usuário do CarCare estão organizadas de acordo com as principais funcionalidades do sistema.

Para a entrega atual do projeto, o escopo está concentrado nas histórias **US01 a US06**, priorizando o cadastro e a consulta dos veículos e o registro de informações simples sobre suas manutenções.

Funcionalidades adicionais poderão ser desenvolvidas posteriormente caso sejam necessárias para a evolução do sistema.

---

### 🚗 Épico 1: Cadastro e Visualização de Veículos

#### US01 - Cadastro de Veículo

**Como um Proprietário**, quero cadastrar meu veículo informando seus principais dados para que eu possa consultá-los posteriormente no sistema.

**Critérios de Aceitação:**

- O proprietário deverá informar a marca do veículo.
- O proprietário deverá informar o modelo do veículo.
- O proprietário deverá informar o ano do veículo.
- O proprietário deverá informar a placa do veículo.
- O proprietário deverá informar a quilometragem atual.
- O proprietário deverá informar o tipo de combustível.
- Os campos obrigatórios deverão ser preenchidos antes do cadastro.
- A placa deverá possuir formato válido.
- A quilometragem deverá ser um valor numérico maior ou igual a zero.
- Os dados deverão ser armazenados após o cadastro.
- O armazenamento deverá utilizar o JSON Server.

---

#### US02 - Visualização dos Veículos

**Como um Proprietário**, quero visualizar os veículos cadastrados para consultar suas principais informações.

**Critérios de Aceitação:**

- O sistema deverá apresentar os veículos cadastrados.
- Cada veículo deverá apresentar informações como marca, modelo, ano, placa, quilometragem e combustível.
- Os veículos deverão ser carregados a partir dos dados armazenados.
- O proprietário deverá poder acessar os detalhes de um veículo.

---

#### US03 - Visualização dos Detalhes do Veículo

**Como um Proprietário**, quero visualizar os detalhes de um veículo para consultar suas informações e os registros relacionados à manutenção.

**Critérios de Aceitação:**

- O sistema deverá apresentar os dados principais do veículo.
- O sistema deverá apresentar a quilometragem atual.
- O sistema deverá apresentar o tipo de combustível.
- O sistema deverá apresentar as observações relacionadas à manutenção, quando houver.
- O sistema deverá apresentar o valor registrado para a manutenção, quando houver.
- As informações apresentadas deverão estar relacionadas ao veículo selecionado.

---

### 🔧 Épico 2: Registro de Manutenção

#### US04 - Registrar Manutenção

**Como um Proprietário**, quero registrar uma informação sobre a manutenção do meu veículo para manter um histórico simples dos serviços realizados.

**Critérios de Aceitação:**

- O proprietário deverá selecionar o veículo relacionado à manutenção.
- O proprietário deverá informar uma observação sobre o serviço realizado.
- O proprietário deverá informar o valor gasto, quando houver.
- Os dados deverão ser validados antes do registro.
- A informação deverá ser apresentada no sistema após o cadastro.
- O registro deverá estar relacionado ao veículo correspondente.

---

#### US05 - Visualizar Informações de Manutenção

**Como um Proprietário**, quero visualizar as informações de manutenção relacionadas ao meu veículo para consultar o que foi realizado e o valor gasto.

**Critérios de Aceitação:**

- O sistema deverá apresentar a observação registrada.
- O sistema deverá apresentar o valor da manutenção, quando houver.
- As informações deverão estar relacionadas ao veículo correspondente.
- O proprietário deverá conseguir consultar essas informações na área de detalhes do veículo.

---

#### US06 - Registrar Observação de Manutenção

**Como um Proprietário**, quero registrar uma observação sobre o que precisa ser realizado no meu veículo para ter essa informação disponível durante a consulta.

**Critérios de Aceitação:**

- O sistema deverá permitir informar uma observação relacionada ao veículo.
- A observação poderá informar um serviço que precisa ser realizado.
- A observação deverá ser apresentada junto às informações do veículo.
- O sistema não precisa realizar cálculos para determinar datas ou quilometragens de futuras revisões.

---

## 4. Escopo do MVP

Para a entrega atual, o MVP do CarCare contempla:

- Cadastro de veículos.
- Visualização dos veículos cadastrados.
- Visualização dos detalhes dos veículos.
- Registro de informações de manutenção.
- Registro de observações relacionadas ao veículo.
- Registro do valor gasto na manutenção.
- Consulta das informações de manutenção relacionadas ao veículo.
- Persistência dos dados utilizando JSON Server.

### Funcionalidades que não fazem parte do escopo atual

Nesta etapa, o sistema não contempla:

- Edição de veículos.
- Exclusão de veículos.
- Exclusão de manutenções.
- Edição de manutenções.
- Cadastro de usuários.
- Login ou autenticação.
- Gerenciamento de contas.
- Sistema complexo de acompanhamento de revisões.
- Cálculo automático de próxima revisão.
- Cadastro de datas ou quilometragens para futuras revisões.
- Aba exclusiva para gastos.
- API independente para próximas revisões.

As informações de manutenção são apresentadas de forma simples, por meio de observações e valores relacionados aos veículos cadastrados.

---

## 5. Estrutura Principal da Aplicação

A aplicação será organizada principalmente nas seguintes áreas:

### Veículos

Apresenta os veículos cadastrados e permite acessar seus detalhes.

Cada veículo poderá apresentar:

- Marca.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Observações de manutenção.
- Valores relacionados às manutenções registradas.

### Cadastro de Veículo

Área destinada ao cadastro de novos veículos.

O formulário deverá permitir informar os principais dados do veículo e armazená-los no JSON Server.

### Detalhes do Veículo

Área destinada à consulta das informações de um veículo específico.

Nessa área serão apresentados os dados do veículo e as informações relacionadas às suas manutenções.

### Manutenção

A manutenção será registrada de forma simplificada, contendo principalmente:

- Veículo relacionado.
- Observação.
- Valor gasto.

A finalidade é permitir que o proprietário registre o que foi realizado no veículo e o valor correspondente, sem a necessidade de um sistema complexo de gerenciamento de manutenção.

---

## 6. Regras Gerais do Sistema

- Cada veículo deverá possuir um identificador único.
- O proprietário deverá informar os dados obrigatórios antes de cadastrar um veículo.
- Cada registro de manutenção deverá estar relacionado a um veículo cadastrado.
- Uma manutenção poderá possuir uma observação sobre o serviço realizado.
- Uma manutenção poderá possuir um valor gasto.
- As informações de manutenção deverão estar relacionadas ao veículo correspondente.
- Os dados dos veículos deverão ser persistidos utilizando JSON Server.
- O sistema deverá utilizar requisições HTTP para cadastrar e consultar os dados.
- O sistema não possui cadastro ou autenticação de usuários.
- O sistema não realiza cálculos automáticos para determinar futuras revisões.
- Informações sobre serviços que precisam ser realizados poderão ser registradas como observações.
- O valor informado na manutenção deverá ser utilizado para apresentar o gasto relacionado ao registro.

---

## 7. Persistência de Dados

O CarCare utilizará o **JSON Server** como uma API REST simulada para persistência dos dados durante o desenvolvimento.

Os dados serão armazenados no arquivo:

```text
db.json
```

---

## 8. Considerações Finais

O escopo atual do CarCare prioriza uma solução simples para cadastro e consulta de veículos e para registro de informações básicas sobre suas manutenções.

O projeto poderá receber novas funcionalidades futuramente, como edição e exclusão de registros, acompanhamento mais detalhado de manutenções, Dashboard e outros recursos de gerenciamento, caso sejam solicitados ou definidos como evolução do sistema.