
# 🚗 CarCare — Sistema de Controle de Manutenção de Veículos

**Autora:** Taís Ramos Nascoski

O **CarCare** é uma aplicação web responsiva desenvolvida para auxiliar no controle e na organização de veículos e informações relacionadas às suas manutenções.

A aplicação tem como objetivo facilitar o cadastro de veículos, a consulta de suas informações e o registro de observações e valores relacionados às manutenções.

O projeto é desenvolvido progressivamente ao longo da disciplina de Desenvolvimento de Aplicações Web.

---

## 📋 Documentação do Projeto

- 📄 **[Documento de Requisitos](docs/prd.md)** — Escopo, funcionalidades e regras da aplicação.

- 🏗️ **[Especificação Técnica](docs/architecture.md)** — Arquitetura, modelo de dados e estrutura técnica.

- 🎨 **[Design System](docs/design-system.md)** — Identidade visual, cores, tipografia e componentes.

- 🖼️ **[Protótipo no Stitch](https://stitch.withgoogle.com/projects/2247964266907741447)** — Protótipo das telas e fluxo de navegação.

---
## 🎨 Design

A interface do CarCare foi desenvolvida a partir do protótipo criado no **Stitch**.

O projeto utiliza o **Materialize CSS 1.0.0**, complementado por estilos personalizados desenvolvidos em Sass (SCSS).

### Responsividade

A aplicação possui layouts adaptáveis para:

- 📱 Dispositivos móveis.
- 💻 Tablets.
- 🖥️ Computadores.

Para a construção dos layouts, são utilizados:

- Sistema de Grid do Materialize CSS.
- CSS Grid Layout.
- Flexbox.
- Media queries.
- Unidades relativas, como rem, vw e porcentagem.
- Tipografia fluida com clamp().

O menu lateral possui uma versão adaptada para dispositivos móveis, permitindo a abertura e o fechamento por meio de um botão de navegação.

### Design System

A identidade visual é padronizada por meio de:

- Paleta de cores.
- Tipografia.
- Botões.
- Cartões.
- Campos de formulário.
- Indicadores de status.
- Ícones.
- Espaçamentos.
- Bordas e arredondamentos.

Os estilos são centralizados no arquivo `css/style.scss`, utilizando variáveis, mixins e funções para facilitar a manutenção e reutilização do código.

---

## 🖼️ Otimização de Imagens

As imagens dos veículos foram convertidas do formato PNG para WebP utilizando a ferramenta Sharp CLI.

A otimização tem como objetivo reduzir o tamanho dos arquivos e melhorar o carregamento da aplicação.

| Imagem | PNG original | WebP otimizado | Redução |
| --- | ---: | ---: | ---: |
| Toyota Corolla | 161,32 KB | 16,76 KB | 89,6% |
| Toyota Hilux | 570,82 KB | 27,76 KB | 95,1% |
| Total | 732,14 KB | 44,51 KB | 93,9% |

Também são utilizadas as seguintes técnicas:

- Elemento HTML `picture`.
- Atributo `srcset`.
- Formato WebP.
- PNG como alternativa de compatibilidade.
- Classe `responsive-img` do Materialize.
- Propriedade CSS `object-fit`.
- Carregamento de imagens com `loading="lazy"`.
- Decodificação assíncrona com `decoding="async"`.

As imagens utilizadas nesta etapa possuem finalidade ilustrativa.

---

## 🧩 Tecnologias

### Framework CSS

- Materialize CSS 1.0.0.
- Material Icons.

### Desenvolvimento Front-end

- HTML5.
- CSS3.
- Sass (SCSS).
- JavaScript.
- jQuery.

### Ferramentas e Dependências

- Node.js.
- NPM.
- JSON Server.
- Sharp CLI.
- Git.
- GitHub.

### Prototipação

- Google Stitch.

### Integração Externa

- API pública da Tabela FIPE.

---

## ☑️ Lista de Verificação | Indicadores de Desempenho (ID)

### RA1 — Utilização de Frameworks CSS para estilização de elementos HTML e criação de layouts responsivos

- [x] **ID 01** — Prototipa interfaces adaptáveis para, no mínimo, os tamanhos de tela mobile e desktop, utilizando Figma, Quant UX, Sketch ou IA (Stitch).

  **Evidência:** Protótipo desenvolvido no Stitch.

- [x] **ID 02** — Implementa layout responsivo com Framework CSS (Materialize CSS), utilizando Flexbox ou Grid do próprio framework.

  **Evidência:** Classes `row`, `col`, `s12`, `m6`, `m4` e `l4` utilizadas no Dashboard e nos formulários.

- [x] **ID 03** — Implementa layout responsivo com CSS puro, usando Flexbox ou Grid Layout.

  **Evidência:** Utilização de `display: flex` e `display: grid` no arquivo `css/style.scss`.

- [x] **ID 04** — Utiliza componentes prontos de um Framework CSS e componentes JavaScript do framework.

  **Evidência:** Componentes `card`, `btn`, `input-field`, `materialize-textarea`, `FormSelect` e `toast`.

- [x] **ID 05** — Cria layout fluido usando unidades relativas como vw, vh, %, em e rem.

  **Evidência:** Utilização de unidades relativas e da função `px-to-rem()`.

- [x] **ID 06** — Aplica um Design System consistente, incluindo cores, tipografia e padrões de componentes.

  **Evidência:** Documentação do Design System e padronização dos componentes visuais no SCSS.

- [x] **ID 07** — Utiliza Sass (SCSS), aplicando variáveis, mixins e funções.

  **Evidência:** Variáveis de cores, mixin `card-base` e função `px-to-rem()`.

- [x] **ID 08** — Aplica tipografia responsiva utilizando media queries, mobile first ou clamp().

  **Evidência:** Utilização de `clamp()` e media queries no arquivo `css/style.scss`.

- [x] **ID 09** — Aplica técnicas de responsividade em imagens utilizando CSS.

  **Evidência:** Utilização de `object-fit`, `max-width`, `height: auto` e da classe `responsive-img`.

- [x] **ID 10** — Otimiza imagens utilizando formatos modernos e carregamento adaptativo.

  **Evidência:** Conversão para WebP, utilização de `picture` e `srcset` na página de detalhes e redução total de aproximadamente 93,9% no tamanho das imagens.

### RA2 — Realizar tratamento de formulários e aplicar validações personalizadas no lado cliente

- [x] **ID 11** — Implementa validação HTML nativa em formulários.

  **Evidência:** Utilização de `required`, `min`, `maxlength`, `step` e tipos específicos de campos.

- [ ] **ID 12** — Aplica expressões regulares (REGEX) para validações personalizadas.

- [ ] **ID 13** — Utiliza checkbox, radio e select para coleta de dados.

- [ ] **ID 14** — Implementa leitura e escrita no Web Storage utilizando `localStorage` / `sessionStorage`.

### RA3 — Aplicar ferramentas para otimização do processo de desenvolvimento web

- [x] **ID 15** — Configura ambiente com Node.js e NPM para gerenciamento de pacotes e dependências.

  **Evidência:** Arquivos `package.json` e `package-lock.json`, utilização de Sass, JSON Server e Sharp CLI.

- [x] **ID 16** — Utiliza boas práticas no versionamento com Git/GitHub e `.gitignore`.

  **Evidência:** Repositório GitHub, commits e configuração do `.gitignore`.

- [x] **ID 17** — Mantém um README.md padronizado conforme o modelo da disciplina, com checklist preenchido.

  **Evidência:** Documentação apresentada neste arquivo.

- [x] **ID 18** — Organiza os arquivos do projeto de forma modular.

  **Evidência:** Separação de arquivos HTML, estilos, scripts, imagens e documentação.

- [ ] **ID 19** — Configura linters e formatadores, como ESLint e Prettier.

### RA4 — Aplicar bibliotecas de funções e componentes em JavaScript para aprimorar a interatividade das páginas web

- [ ] **ID 20** — Utiliza jQuery para manipulação do DOM e interatividade.

- [ ] **ID 21** — Integra e configura um plugin JavaScript.

> Os indicadores marcados representam as implementações realizadas no projeto. A validação final será realizada pelo professor.

---

## 🌐 API Pública

Para auxiliar no cadastro dos veículos, o projeto utiliza uma API pública relacionada à **Tabela FIPE**.

### API FIPE

Endereço base:

```text
https://fipe.parallelum.com.br/api/v2
```

### Endpoints utilizados

| Método | Endpoint | Finalidade |
| --- | --- | --- |
| GET | `/cars/brands` | Consultar marcas |
| GET | `/cars/brands/{code}/models` | Consultar modelos |
| GET | `/cars/brands/{code}/models/{code}/years` | Consultar anos |

### Fluxo de consulta

```text
Marca
  ↓
Modelo
  ↓
Ano
  ↓
Cadastro do veículo
```

A integração tem como objetivo evitar o preenchimento manual de todas as informações de marca, modelo e ano.

A persistência dos veículos e das manutenções é realizada pelo JSON Server.

---

## 🏗️ Estrutura do Projeto

```text
manutencao-de-veiculos/
│
├── css/
│   ├── style.scss
│   └── style.css
│
├── docs/
│   ├── architecture.md
│   ├── design-system.md
│   ├── prd.md
│   └── script-example.js
│
├── imagens/
│   ├── corolla.png
│   ├── corolla.webp
│   ├── hilux.png
│   └── hilux.webp
│
├── js/
│   └── app.js
│
├── db.json
├── index.html
├── veiculos.html
├── novo-veiculo.html
├── detalhes.html
├── nova-manutencao.html
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

### Organização dos arquivos

| Arquivo ou pasta | Responsabilidade |
| --- | --- |
| `css/` | Estilos e arquivos Sass |
| `docs/` | Documentação do projeto |
| `imagens/` | Imagens originais e otimizadas |
| `js/` | Lógica JavaScript |
| `db.json` | Armazenamento local de dados |
| `package.json` | Dependências do projeto |
| `.gitignore` | Arquivos ignorados pelo Git |
| `README.md` | Documentação principal |

---

## 🖥️ Interface

O CarCare possui cinco telas principais:

| Tela | Arquivo | Finalidade |
| --- | --- | --- |
| Dashboard | `index.html` | Visão geral da frota |
| Meus Veículos | `veiculos.html` | Consulta dos veículos |
| Novo Veículo | `novo-veiculo.html` | Cadastro de veículos |
| Detalhes do Veículo | `detalhes.html` | Informações e histórico do veículo |
| Nova Manutenção | `nova-manutencao.html` | Registro de manutenção |

### Navegação

O menu lateral possui duas áreas principais:

- Dashboard.
- Meus Veículos.

O cadastro de manutenção é acessado pelo botão **Nova Manutenção**.

O histórico de manutenções está previsto dentro da página de detalhes do veículo, evitando a necessidade de uma página exclusiva de manutenções.

---

## 📋 Funcionalidades

### 📊 Dashboard

Interface destinada à apresentação dos indicadores da frota:

- Total de veículos.
- Veículos operacionais.
- Manutenções registradas.
- Situação da frota.
- Acesso rápido à lista de veículos.

### 🚗 Veículos

Cadastro e consulta das informações dos veículos.

Dados utilizados:

- Marca.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Status operacional.

Durante o cadastro, a API FIPE auxilia na consulta de marcas, modelos e anos.

### 📄 Detalhes do Veículo

Interface destinada à apresentação das informações de um veículo específico.

- Imagem ilustrativa.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Status.
- Área destinada ao histórico de manutenções.

### 🔧 Manutenções

Permite registrar informações relacionadas aos serviços dos veículos.

Cada registro pode conter:

- Veículo relacionado.
- Observação sobre o serviço.
- Valor da manutenção.
- Data do registro.
- Status da manutenção.

O projeto não contempla um sistema de agendamento ou cálculo de futuras revisões.

### Situação das funcionalidades

A Entrega 2 contempla principalmente a implementação visual das interfaces.

As regras de negócio, validações personalizadas, atualização de status e apresentação dinâmica do histórico serão revisadas nas próximas etapas.

---

## ⚙️ Instruções de Execução

### Pré-requisitos

- Navegador web.
- Visual Studio Code.
- Node.js.
- NPM.
- Git.
- Extensão Live Server ou outro servidor HTTP local.

### 1. Clonar o projeto

```bash
git clone https://github.com/taisramosn/manutencao-de-veiculos.git
```

Entre na pasta do projeto:

```bash
cd manutencao-de-veiculos
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Compilar o Sass

O arquivo SCSS deve ser compilado para gerar o CSS utilizado pelo navegador:

```bash
npx sass css/style.scss css/style.css
```

Para acompanhar alterações automaticamente durante o desenvolvimento:

```bash
npx sass --watch css/style.scss css/style.css
```

### 4. Iniciar o JSON Server

Em um terminal, execute:

```bash
npx json-server db.json --port 3000
```

O servidor estará disponível em:

```text
http://localhost:3000
```

Endpoints locais:

```text
http://localhost:3000/veiculos
http://localhost:3000/manutencoes
```

### 5. Iniciar o servidor local

Abra o projeto no Visual Studio Code.

Clique com o botão direito sobre o arquivo `index.html` e selecione:

```text
Open with Live Server
```

A aplicação será aberta no navegador.

### 6. Conversão de imagens para WebP

As imagens otimizadas já estão incluídas no projeto. Caso seja necessário realizar uma nova conversão, utilize:

```bash
npx sharp-cli -i imagens/corolla.png -o imagens/corolla.webp -f webp
```

```bash
npx sharp-cli -i imagens/hilux.png -o imagens/hilux.webp -f webp
```

---

## 🔄 Fluxo de Execução

```text
Clonar o projeto
        ↓
Abrir no VS Code
        ↓
Instalar dependências
        ↓
Compilar o SCSS
        ↓
Iniciar JSON Server
        ↓
Iniciar Live Server
        ↓
Abrir aplicação no navegador
        ↓
Utilizar CarCare
```
---
## 👩‍💻 Autora

**Taís Ramos Nascoski**

Projeto desenvolvido para fins acadêmicos na disciplina de **Desenvolvimento de Aplicações Web**.

Tecnologia em Sistemas para Internet — UTFPR.
