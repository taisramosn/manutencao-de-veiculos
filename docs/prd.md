
# 📄 Documento de Requisitos do Produto (PRD) — CarCare

## 1. Visão Geral e Objetivo

O **CarCare** é uma aplicação web responsiva e didática desenvolvida para auxiliar no controle e na organização de veículos e das informações relacionadas às suas manutenções.

A aplicação tem como objetivo permitir o cadastro de veículos, a visualização de suas informações e o registro de manutenções, incluindo observações e valores relacionados aos serviços.

O sistema centraliza as informações da frota em uma única interface, facilitando a consulta dos veículos e o acompanhamento de sua situação operacional.

**Regra de Negócio Principal:** cada registro de manutenção deve estar relacionado a um veículo cadastrado no sistema.

---

## 2. Atores do Sistema

### Administrador da Frota

Responsável por:

- Cadastrar veículos.
- Consultar os veículos cadastrados.
- Visualizar os detalhes dos veículos.
- Consultar os indicadores da frota.
- Registrar manutenções.
- Consultar o histórico de manutenções.
- Registrar observações relacionadas aos serviços.
- Acompanhar a situação operacional dos veículos.

> O administrador representa o perfil de utilização da aplicação. O sistema não contempla cadastro de usuários, gerenciamento de contas ou autenticação no escopo atual.

---

## 3. Histórias de Usuário e Escopo

As histórias de usuário do CarCare estão organizadas conforme as principais funcionalidades da aplicação.

O escopo do MVP está limitado às histórias **US01 a US06**, priorizando o cadastro e a consulta de veículos e o registro de informações relacionadas às manutenções.

A implementação será realizada progressivamente conforme as etapas de desenvolvimento da disciplina.

---

### 🚗 Épico 1: Cadastro e Visualização de Veículos

#### US01 — Cadastro de Veículo

**Como um Administrador**, quero cadastrar um veículo informando seus principais dados para que possa consultá-los posteriormente no sistema.

**Critérios de Aceitação:**

- O administrador deverá selecionar a marca do veículo.
- O administrador deverá selecionar o modelo do veículo.
- O administrador deverá selecionar o ano do veículo.
- O sistema deverá utilizar a API FIPE para auxiliar na consulta de marcas, modelos e anos.
- O administrador deverá informar a placa.
- O administrador deverá informar a quilometragem atual.
- O administrador deverá informar o tipo de combustível.
- Os campos obrigatórios deverão ser preenchidos antes do cadastro.
- A placa deverá possuir formato válido.
- A quilometragem deverá ser um valor numérico maior ou igual a zero.
- O veículo deverá receber inicialmente o status operacional.
- Os dados deverão ser armazenados após o cadastro.
- O armazenamento deverá utilizar o JSON Server.
- O sistema deverá apresentar uma mensagem de sucesso ou erro após a operação.

---

#### US02 — Visualização dos Veículos

**Como um Administrador**, quero visualizar os veículos cadastrados para consultar suas principais informações e acompanhar a situação da frota.

**Critérios de Aceitação:**

- O sistema deverá apresentar os veículos cadastrados.
- Os veículos deverão ser apresentados em cartões.
- Cada veículo deverá apresentar marca, modelo, ano, placa, quilometragem e combustível.
- Cada veículo deverá apresentar sua situação operacional.
- O sistema deverá diferenciar veículos operacionais de veículos em manutenção.
- Os veículos deverão ser carregados a partir dos dados armazenados.
- O administrador deverá poder acessar os detalhes de um veículo.
- O sistema deverá disponibilizar um campo de busca por modelo ou placa.
- A interface deverá adaptar a organização dos cartões conforme o tamanho da tela.

---

#### US03 — Visualização dos Detalhes do Veículo

**Como um Administrador**, quero visualizar os detalhes de um veículo para consultar suas informações e os registros relacionados às manutenções.

**Critérios de Aceitação:**

- O sistema deverá apresentar os dados do veículo selecionado.
- O sistema deverá apresentar marca e modelo.
- O sistema deverá apresentar o ano.
- O sistema deverá apresentar a placa.
- O sistema deverá apresentar a quilometragem atual.
- O sistema deverá apresentar o tipo de combustível.
- O sistema deverá apresentar o status do veículo.
- A interface deverá apresentar uma imagem ilustrativa do veículo.
- A página deverá possuir uma área destinada ao histórico de manutenções.
- O sistema deverá apresentar as observações relacionadas às manutenções, quando houver.
- O sistema deverá apresentar os valores relacionados às manutenções registradas.
- As informações apresentadas deverão estar relacionadas ao veículo selecionado.
- O administrador deverá poder retornar à lista de veículos.

---

### 🔧 Épico 2: Registro de Manutenção

#### US04 — Registrar Manutenção

**Como um Administrador**, quero registrar uma manutenção de um veículo para manter um histórico simples dos serviços realizados ou em andamento.

**Critérios de Aceitação:**

- O administrador deverá selecionar um veículo cadastrado.
- O administrador deverá informar uma observação sobre o serviço.
- O administrador deverá informar o valor da manutenção.
- O valor deverá ser numérico e maior ou igual a zero.
- Os campos obrigatórios deverão ser preenchidos.
- Os dados deverão ser validados antes do registro.
- O sistema deverá registrar a data da manutenção automaticamente.
- A manutenção deverá receber inicialmente o status Em andamento.
- O registro deverá estar relacionado ao veículo correspondente.
- O sistema deverá atualizar o status do veículo para manutenção.
- O registro deverá ser armazenado utilizando JSON Server.
- O sistema deverá apresentar uma mensagem de sucesso ou erro.

---

#### US05 — Visualizar Informações de Manutenção

**Como um Administrador**, quero visualizar as informações de manutenção relacionadas a um veículo para consultar os serviços registrados e seus respectivos valores.

**Critérios de Aceitação:**

- O sistema deverá apresentar a observação registrada.
- O sistema deverá apresentar o valor da manutenção.
- O sistema deverá apresentar a data do registro.
- O sistema deverá apresentar o status da manutenção.
- As informações deverão estar relacionadas ao veículo correspondente.
- O administrador deverá consultar essas informações na página de detalhes do veículo.
- Quando não houver registros, o sistema deverá apresentar uma informação indicando a ausência de manutenções.

---

#### US06 — Registrar Observação de Manutenção

**Como um Administrador**, quero registrar uma observação sobre um serviço que precisa ser realizado no veículo para manter essa informação disponível durante a consulta.

**Critérios de Aceitação:**

- O sistema deverá permitir informar uma observação relacionada ao veículo.
- A observação poderá descrever um serviço necessário, realizado ou em andamento.
- A observação deverá estar vinculada a um registro de manutenção.
- A observação deverá ser apresentada no histórico do veículo.
- O sistema não deverá exigir o cadastro de uma manutenção futura.
- O sistema não deverá realizar cálculos automáticos de próximas revisões.
- O sistema não deverá exigir datas ou quilometragens de futuras revisões.

Essa funcionalidade será atendida pelo próprio campo de observação do formulário de manutenção, sem necessidade de uma página exclusiva.

---

## 4. Escopo do MVP

O MVP do CarCare contempla:

- Dashboard com indicadores da frota.
- Cadastro de veículos.
- Visualização dos veículos cadastrados.
- Consulta de veículos por modelo ou placa.
- Visualização dos detalhes dos veículos.
- Registro de informações de manutenção.
- Registro de observações relacionadas aos serviços.
- Registro do valor da manutenção.
- Consulta do histórico de manutenções.
- Identificação da situação operacional dos veículos.
- Atualização do status operacional conforme as manutenções.
- Integração com a API pública da Tabela FIPE.
- Persistência de dados utilizando JSON Server.
- Interface responsiva para computadores e dispositivos móveis.

### 4.1 Funcionalidades fora do escopo

O sistema não contempla:

- Edição manual dos dados cadastrais dos veículos.
- Exclusão de veículos.
- Exclusão de manutenções.
- Edição completa dos registros de manutenção.
- Cadastro de usuários.
- Login ou autenticação.
- Gerenciamento de contas.
- Controle de permissões.
- Sistema de múltiplos usuários.
- Agendamento de manutenções futuras.
- Cálculo automático de próximas revisões.
- Cadastro de datas ou quilometragens para futuras revisões.
- Aba exclusiva para gastos.
- Controle de estoque de peças.
- Cadastro de oficinas e fornecedores.
- Relatórios financeiros avançados.

As informações de manutenção serão apresentadas de forma simplificada, respeitando o escopo acadêmico definido para o projeto.

---

## 5. Estrutura Principal da Aplicação

A aplicação possui cinco telas principais.

### 5.1 Dashboard

**Arquivo:** `index.html`

Área destinada à apresentação de informações resumidas sobre a frota.

A interface contempla:

- Total de veículos.
- Veículos operacionais.
- Manutenções registradas.
- Situação da frota.
- Acesso rápido à lista de veículos.

---

### 5.2 Meus Veículos

**Arquivo:** `veiculos.html`

Área destinada à consulta dos veículos cadastrados.

Cada cartão de veículo poderá apresentar:

- Marca.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Status operacional.
- Imagem ilustrativa.
- Botão de detalhes.

A página também disponibiliza um campo de busca e um botão para cadastro de novos veículos.

---

### 5.3 Novo Veículo

**Arquivo:** `novo-veiculo.html`

Área destinada ao cadastro de veículos.

O formulário possui os seguintes campos:

| Campo | Obrigatório |
| --- | --- |
| Marca | Sim |
| Modelo | Sim |
| Ano | Sim |
| Placa | Sim |
| Quilometragem | Sim |
| Combustível | Sim |

A API FIPE será utilizada para auxiliar na seleção das informações de marca, modelo e ano.

O status inicial do veículo será definido automaticamente como operacional.

---

### 5.4 Detalhes do Veículo

**Arquivo:** `detalhes.html`

Área destinada à consulta das informações de um veículo específico.

A página contempla:

- Imagem ilustrativa.
- Nome do veículo.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Status.
- Área de histórico de manutenções.
- Botão para registrar uma nova manutenção.
- Botão de retorno para a lista de veículos.

O histórico deverá apresentar somente os registros relacionados ao veículo selecionado.

---

### 5.5 Nova Manutenção

**Arquivo:** `nova-manutencao.html`

Área destinada ao registro de uma manutenção.

O formulário possui os seguintes campos:

| Campo | Obrigatório |
| --- | --- |
| Veículo | Sim |
| Observação | Sim |
| Valor | Sim |

A data de registro e o status inicial da manutenção serão definidos automaticamente pela aplicação.

---

### 5.6 Navegação

O menu lateral possui duas opções principais:

- Dashboard.
- Meus Veículos.

A aplicação também disponibiliza um botão de Nova Manutenção.

O histórico de manutenções está localizado na página de detalhes do veículo.

Não existe uma página exclusiva para a listagem geral de manutenções ou gastos.

---

## 6. Regras Gerais do Sistema

### RN01 — Identificação de veículos

Cada veículo deverá possuir um identificador único.

### RN02 — Campos obrigatórios

Os dados obrigatórios deverão ser informados antes da realização de um cadastro.

### RN03 — Relacionamento de manutenção

Cada registro de manutenção deverá estar relacionado a um veículo cadastrado.

### RN04 — Valor da manutenção

O valor informado deverá ser numérico e maior ou igual a zero.

### RN05 — Quilometragem

A quilometragem deverá ser numérica e maior ou igual a zero.

### RN06 — Status inicial do veículo

Um veículo recém-cadastrado deverá receber o status `operacional`.

### RN07 — Status inicial da manutenção

Uma manutenção recém-registrada deverá receber o status `Em andamento`.

### RN08 — Veículo em manutenção

Ao registrar uma manutenção ativa, o status do veículo deverá ser alterado para `manutencao`.

### RN09 — Consulta do histórico

As informações de manutenção deverão ser apresentadas somente no histórico do veículo correspondente.

### RN10 — Persistência

Os dados de veículos e manutenções deverão ser persistidos utilizando JSON Server.

### RN11 — Consulta externa

A API FIPE deverá ser utilizada para consulta de marcas, modelos e anos durante o cadastro.

### RN12 — Manutenções futuras

O sistema não realizará cálculos automáticos ou agendamentos de futuras revisões.

### RN13 — Observações

Informações sobre serviços que precisam ser realizados poderão ser registradas como observações de manutenção.

### RN14 — Data de registro

A data da manutenção deverá ser registrada automaticamente pela aplicação.

---

## 7. Requisitos Não Funcionais

### RNF01 — Responsividade

A aplicação deverá possuir uma interface adaptável a dispositivos móveis e computadores.

O layout deverá reorganizar os componentes conforme a largura da tela, evitando cortes de conteúdo e rolagem horizontal desnecessária.

### RNF02 — Framework CSS

A interface deverá utilizar o Materialize CSS 1.0.0 como framework base.

### RNF03 — Design System

A aplicação deverá manter consistência visual entre suas páginas, considerando:

- Cores.
- Tipografia.
- Botões.
- Cartões.
- Formulários.
- Ícones.
- Espaçamentos.
- Estados visuais.

### RNF04 — Organização dos estilos

Os estilos personalizados deverão ser desenvolvidos utilizando Sass (SCSS), com aplicação de variáveis, mixins e funções.

### RNF05 — Tipografia responsiva

A interface deverá utilizar unidades relativas e técnicas de tipografia responsiva, como media queries e `clamp()`.

### RNF06 — Otimização de imagens

As imagens deverão utilizar formatos modernos, como WebP, sempre que possível.

A aplicação deverá utilizar técnicas de responsividade e carregamento de imagens, como:

- Elemento `picture`.
- Atributo `srcset`.
- Classe `responsive-img`.
- Propriedade `object-fit`.
- Carregamento sob demanda.

### RNF07 — Usabilidade

A aplicação deverá apresentar:

- Navegação simples.
- Campos identificados por labels.
- Botões com textos compreensíveis.
- Mensagens de sucesso e erro.
- Indicadores de status acompanhados por textos ou ícones.

### RNF08 — Organização do código

O projeto deverá possuir separação entre:

- Páginas HTML.
- Estilos CSS e SCSS.
- Scripts JavaScript.
- Imagens.
- Documentação.
- Arquivos de armazenamento.

### RNF09 — Versionamento

O projeto deverá utilizar Git e GitHub para controle de versão e acompanhamento das alterações.

### RNF10 — Compatibilidade

A aplicação deverá ser executada em navegadores web modernos.

### RNF11 — Tratamento de erros

A aplicação deverá apresentar mensagens compreensíveis quando ocorrerem falhas de comunicação com as APIs ou problemas durante o cadastro e a consulta dos dados.

---

## 8. Persistência de Dados

O CarCare utiliza o JSON Server como uma API REST simulada para persistência dos dados durante o desenvolvimento.

Os dados são armazenados no arquivo:

```text
db.json
```

A estrutura possui duas coleções principais:

```json
{
  "veiculos": [],
  "manutencoes": []
}
```

### 8.1 Veículos

A coleção `veiculos` armazena as informações cadastrais e o status operacional dos veículos.

### 8.2 Manutenções

A coleção `manutencoes` armazena as informações relacionadas aos serviços registrados.

Cada manutenção possui um campo `veiculoId`, responsável por relacionar o registro ao veículo correspondente.

### 8.3 Relacionamento

Um veículo poderá possuir vários registros de manutenção.

Cada manutenção deverá pertencer a um único veículo.

---

## 9. Integração com API Pública

O sistema utiliza a FIPE API v2 para auxiliar no cadastro dos veículos.

Endereço base:

```text
https://fipe.parallelum.com.br/api/v2
```

Informações consultadas:

- Marcas.
- Modelos.
- Anos.

A consulta ocorre de forma sequencial:

```text
Selecionar marca
       ↓
Selecionar modelo
       ↓
Selecionar ano
       ↓
Preencher os demais campos
       ↓
Cadastrar veículo
```

A API FIPE é utilizada apenas como fonte externa de consulta.

Os veículos cadastrados são armazenados no JSON Server.

---

## 10. Critérios de Aceitação da Interface

A interface deverá atender aos seguintes critérios:

- Apresentar as cinco telas principais.
- Utilizar o Materialize CSS.
- Manter consistência visual entre as páginas.
- Utilizar componentes responsivos.
- Adaptar a navegação para dispositivos móveis.
- Reorganizar os cartões em telas menores.
- Reorganizar os campos dos formulários conforme a largura da tela.
- Utilizar imagens responsivas e otimizadas.
- Apresentar organização adequada de títulos, textos e componentes.
- Manter relação visual com o protótipo desenvolvido no Stitch.

---

## 11. Etapas de Desenvolvimento

### Entrega 1 — A Fundação

Concepção, prototipação e documentação.

- Definição do problema.
- Definição dos objetivos.
- Levantamento dos requisitos.
- Histórias de usuário.
- Especificação técnica.
- Design System.
- Protótipo no Stitch.

### Entrega 2 — A Casca

Implementação visual da aplicação.

- Desenvolvimento das páginas HTML5.
- Integração do Materialize CSS.
- Desenvolvimento dos estilos em Sass.
- Aplicação do Design System.
- Implementação de layouts responsivos.
- Utilização de Flexbox e CSS Grid.
- Tipografia responsiva.
- Otimização das imagens.
- Demonstração da interface em computadores e dispositivos móveis.

### Próximas etapas

- Revisão das funcionalidades JavaScript.
- Validação personalizada dos formulários.
- Revisão das integrações com APIs.
- Revisão das regras de negócio.
- Correção dos fluxos de navegação.
- Apresentação dinâmica do histórico de manutenções.
- Testes funcionais.

---

## 12. Situação da Implementação

As histórias de usuário representam os requisitos definidos para o MVP.

Na Entrega 2, o objetivo principal é a implementação visual e responsiva das interfaces.

A existência de uma interface não representa necessariamente a conclusão de toda a lógica funcional associada.

Os critérios de aceitação relacionados às regras de negócio, consultas, validações personalizadas e histórico dinâmico serão revisados nas próximas etapas de desenvolvimento.

---

## 13. Considerações Finais

O CarCare prioriza uma solução simples para cadastro e consulta de veículos e registro de informações relacionadas às suas manutenções.

O escopo permanece limitado às histórias US01 a US06, evitando a inclusão de funcionalidades que aumentem desnecessariamente a complexidade do projeto.

A aplicação utiliza tecnologias apresentadas durante a disciplina, incluindo HTML5, CSS3, Materialize CSS, Sass, JavaScript e integração com APIs.

---

## Autora

**Taís Ramos Nascoski**

Tecnologia em Sistemas para Internet — UTFPR.

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento de Aplicações Web.
