
# 🛠️ Especificação Técnica (Tech Spec) — CarCare

Este documento detalha a arquitetura técnica, o modelo de dados, a estrutura de armazenamento e as tecnologias utilizadas pelo sistema CarCare.

O CarCare é uma aplicação web responsiva desenvolvida para auxiliar no cadastro, controle e acompanhamento dos veículos de uma frota e dos registros relacionados às suas manutenções.

A aplicação utiliza uma API local simulada pelo **JSON Server** e uma API pública da Tabela FIPE para auxiliar no cadastro dos veículos.

---

## 1. Arquitetura da Aplicação

O CarCare utiliza uma arquitetura cliente-servidor composta por uma aplicação web no lado do cliente, uma API local simulada e uma API pública externa.

```text
                     Administrador
                           |
                           v
+----------------------------------------------+
|             Front-end CarCare                |
|                                              |
| HTML5 + CSS3 + SCSS + JavaScript              |
| Materialize CSS + Material Icons             |
|                                              |
| - Dashboard                                  |
| - Meus Veículos                              |
| - Novo Veículo                               |
| - Detalhes do Veículo                         |
| - Nova Manutenção                            |
+----------------------+-----------------------+
                       |
                  HTTP / Fetch
                       |
          +------------+------------+
          |                         |
          v                         v
+----------------------+  +--------------------+
|     JSON Server      |  |    FIPE API v2     |
|       API REST       |  |    API Pública     |
|                      |  |                    |
| /veiculos            |  | Marcas             |
| /manutencoes         |  | Modelos            |
|                      |  | Anos               |
+----------+-----------+  +--------------------+
           |
           v
     +-----------+
     |  db.json  |
     +-----------+
```

### 1.1 Responsabilidades do Front-end

O front-end é responsável por:

- Apresentar a interface do sistema.
- Permitir o cadastro de veículos.
- Apresentar os veículos cadastrados.
- Exibir os detalhes dos veículos.
- Apresentar os indicadores do Dashboard.
- Permitir o registro de manutenções.
- Disponibilizar uma área para o histórico de manutenções.
- Realizar requisições HTTP.
- Validar dados antes do envio.
- Apresentar mensagens de sucesso ou erro.
- Consultar a API pública da Tabela FIPE.
- Adaptar a interface para diferentes tamanhos de tela.

### 1.2 Responsabilidades do JSON Server

O JSON Server é responsável por:

- Simular uma API REST.
- Receber requisições HTTP.
- Armazenar dados no arquivo `db.json`.
- Permitir consultas aos veículos cadastrados.
- Permitir o cadastro de novos veículos.
- Permitir o registro de manutenções.
- Permitir a atualização do status dos veículos.

### 1.3 Responsabilidades da API FIPE

A API FIPE é utilizada como fonte externa de informações para auxiliar no cadastro dos veículos.

A integração permite consultar:

- Marcas.
- Modelos.
- Anos disponíveis.

### 1.4 Responsabilidades do db.json

O arquivo `db.json` representa o armazenamento local de dados utilizado pelo JSON Server durante o desenvolvimento da aplicação.

---

## 2. Modelo de Dados

O modelo de dados do CarCare é composto por duas entidades principais:

- Veículos.
- Manutenções.

Cada veículo pode possuir vários registros de manutenção.

### 2.1 Relacionamento entre entidades

```text
+------------------+
|     VEÍCULOS     |
+------------------+
| id               |
| marca            |
| modelo           |
| ano              |
| placa            |
| quilometragem    |
| combustivel      |
| status           |
+------------------+
         |
         | 1:N
         |
+------------------+
|   MANUTENÇÕES    |
+------------------+
| id               |
| veiculoId        |
| observacao       |
| valor            |
| data             |
| status           |
+------------------+
```

O relacionamento entre as entidades é estabelecido por meio do campo `veiculoId`, que identifica o veículo associado à manutenção.

---

## 3. Dicionário de Dados

### 3.1 Entidade `veiculos`

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | string | Identificador único do veículo |
| `marca` | string | Marca do veículo |
| `modelo` | string | Modelo do veículo |
| `ano` | string | Ano ou identificação de ano retornada pela FIPE |
| `placa` | string | Placa do veículo |
| `quilometragem` | number | Quilometragem atual |
| `combustivel` | string | Tipo de combustível |
| `status` | string | Situação operacional do veículo |

### 3.2 Entidade `manutencoes`

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | string | Identificador único da manutenção |
| `veiculoId` | string | Identificador do veículo relacionado |
| `observacao` | string | Descrição do serviço ou manutenção |
| `valor` | number | Valor relacionado à manutenção |
| `data` | string | Data de registro da manutenção |
| `status` | string | Situação da manutenção |

### 3.3 Status dos veículos

| Valor | Descrição |
| --- | --- |
| `operacional` | Veículo disponível para utilização |
| `manutencao` | Veículo em manutenção |

### 3.4 Status das manutenções

| Valor | Descrição |
| --- | --- |
| Em andamento | Manutenção registrada e ativa |
| Concluída | Manutenção finalizada |
| Cancelada | Manutenção cancelada |

O cadastro de uma manutenção utiliza inicialmente o status `Em andamento`.

A atualização dos demais status e sua integração completa com a interface serão revisadas nas próximas etapas.

---

## 4. Estrutura das Informações de Manutenção

O registro de manutenção possui uma estrutura simplificada.

Cada registro está relacionado a um veículo e contém principalmente:

- Observação sobre o serviço.
- Valor da manutenção.
- Data de registro.
- Status.

O cadastro é realizado na página `nova-manutencao.html`.

A interface destinada à consulta do histórico está localizada na página `detalhes.html`.

Não fazem parte do escopo atual:

- Agendamento de manutenções futuras.
- Cálculo de próximas revisões.
- Controle de peças utilizadas.
- Cadastro de oficinas.
- Controle de fornecedores.
- Cálculo de quilometragem para futuras revisões.

O objetivo é manter um sistema simples, adequado ao escopo acadêmico definido para o projeto.

---

## 5. Rotas da API Local

A aplicação utiliza uma API local simulada pelo JSON Server.

### Endereço base

```text
http://localhost:3000
```

### 5.1 Rotas de veículos

| Método HTTP | Endpoint | Finalidade |
| --- | --- | --- |
| GET | `/veiculos` | Listar veículos |
| GET | `/veiculos/:id` | Consultar um veículo |
| POST | `/veiculos` | Cadastrar um veículo |
| PATCH | `/veiculos/:id` | Atualizar o status do veículo |

### 5.2 Rotas de manutenções

| Método HTTP | Endpoint | Finalidade |
| --- | --- | --- |
| GET | `/manutencoes` | Consultar manutenções |
| POST | `/manutencoes` | Registrar uma manutenção |

O projeto não contempla a exclusão de registros de manutenção no escopo atual.

### 5.3 Exemplo de consulta

```http
GET /veiculos/1
```

A requisição retorna os dados do veículo correspondente ao identificador informado.

---

## 6. Estrutura do Banco de Dados

O armazenamento local da aplicação é representado pelo arquivo:

```text
db.json
```

A estrutura principal é composta pelas coleções `veiculos` e `manutencoes`.

### Exemplo de estrutura

```json
{
  "veiculos": [
    {
      "id": "1",
      "marca": "Toyota",
      "modelo": "Corolla",
      "ano": "2020 Gasolina",
      "placa": "ABC1D23",
      "quilometragem": 45000,
      "combustivel": "Gasolina",
      "status": "manutencao"
    }
  ],
  "manutencoes": [
    {
      "id": "1",
      "veiculoId": "1",
      "observacao": "Troca de óleo e filtros",
      "valor": 350,
      "data": "2026-11-25",
      "status": "Em andamento"
    }
  ]
}
```

Os dados apresentados são exemplos ilustrativos do modelo utilizado pela aplicação.

---

## 7. Contrato de Dados da API

### 7.1 Cadastro de veículo

Requisição:

```http
POST /veiculos
Content-Type: application/json
```

Exemplo do corpo da requisição:

```json
{
  "marca": "Toyota",
  "modelo": "Corolla",
  "ano": "2020 Gasolina",
  "placa": "ABC1D23",
  "quilometragem": 45000,
  "combustivel": "Gasolina",
  "status": "operacional"
}
```

O identificador do veículo é utilizado posteriormente para consultar suas informações e relacionar registros de manutenção.

### 7.2 Cadastro de manutenção

Requisição:

```http
POST /manutencoes
Content-Type: application/json
```

Exemplo do corpo da requisição:

```json
{
  "veiculoId": "1",
  "observacao": "Revisão de óleo e filtros",
  "valor": 350,
  "data": "2026-11-25",
  "status": "Em andamento"
}
```

### 7.3 Atualização do status do veículo

Requisição:

```http
PATCH /veiculos/1
Content-Type: application/json
```

Exemplo:

```json
{
  "status": "manutencao"
}
```

O status do veículo pode ser alterado conforme a existência de manutenções ativas.

---

## 8. Fluxo de Dados

### 8.1 Cadastro de veículo

1. O administrador acessa o formulário de cadastro.
2. A aplicação consulta as marcas disponíveis na API FIPE.
3. O administrador seleciona a marca.
4. A aplicação consulta os modelos disponíveis.
5. O administrador seleciona o modelo e o ano.
6. Os demais campos são preenchidos.
7. Os dados são validados.
8. O front-end envia uma requisição `POST /veiculos`.
9. O JSON Server armazena os dados no arquivo `db.json`.
10. A aplicação apresenta o retorno da operação.

### 8.2 Consulta de veículos

1. O administrador acessa a página Meus Veículos.
2. O JavaScript realiza uma requisição `GET /veiculos`.
3. O JSON Server retorna os registros cadastrados.
4. O JavaScript processa os dados.
5. A interface apresenta os veículos em cartões.

### 8.3 Detalhes de um veículo

1. O administrador seleciona um veículo.
2. A aplicação identifica o veículo pelo parâmetro da URL.
3. O JavaScript consulta o registro na API.
4. A interface apresenta os dados disponíveis.
5. A página disponibiliza uma área para o histórico de manutenções.

Exemplo de navegação:

```text
detalhes.html?veiculo=1
```

### 8.4 Registro de manutenção

1. O administrador acessa o formulário de manutenção.
2. Seleciona um veículo.
3. Informa a observação sobre o serviço.
4. Informa o valor da manutenção.
5. Os dados são validados.
6. A aplicação envia uma requisição `POST /manutencoes`.
7. O JSON Server armazena o registro.
8. A aplicação solicita a atualização do status do veículo.
9. A interface apresenta o retorno da operação.

A conclusão dos fluxos dinâmicos e a apresentação do histórico serão revisadas nas próximas entregas.

---

## 9. Validação de Dados

Os dados devem ser validados antes do envio para a API.

### 9.1 Veículo

Regras de validação:

- Marca obrigatória.
- Modelo obrigatório.
- Ano obrigatório.
- Placa obrigatória.
- Placa com formato válido.
- Quilometragem obrigatória.
- Quilometragem maior ou igual a zero.
- Combustível obrigatório.

### 9.2 Manutenção

Regras de validação:

- Veículo obrigatório.
- Observação obrigatória.
- Valor obrigatório.
- Valor numérico.
- Valor maior ou igual a zero.

### 9.3 Validação HTML

Os formulários utilizam recursos nativos do HTML5, como:

- `required`.
- `min`.
- `maxlength`.
- `step`.
- `type="number"`.

As validações personalizadas, incluindo expressões regulares, serão complementadas nas próximas etapas.

---

## 10. Tratamento de Erros

As requisições realizadas pelo front-end utilizam tratamento de erros para apresentar mensagens ao administrador.

Situações previstas:

- API local indisponível.
- API FIPE indisponível.
- Falha durante uma requisição.
- Falha no cadastro de veículo.
- Falha no registro de manutenção.
- Falha na atualização do status.
- Dados inválidos.
- Veículo não encontrado.

O JavaScript utiliza estruturas `try...catch` e verifica o resultado das requisições HTTP.

As mensagens podem ser apresentadas por meio do componente Toast do Materialize CSS.

Exemplo:

```javascript
M.toast({
    html: "Veículo cadastrado com sucesso!"
});
```

---

## 11. Tecnologias e Bibliotecas

### 11.1 Front-end

- HTML5.
- CSS3.
- Sass (SCSS).
- JavaScript.
- jQuery.

### 11.2 Interface

- Materialize CSS 1.0.0.
- Material Icons.
- Google Fonts — Inter.

### 11.3 API e persistência

- Node.js.
- NPM.
- JSON Server.
- FIPE API v2.
- Arquivo `db.json`.

### 11.4 Ferramentas de desenvolvimento

- Visual Studio Code.
- Live Server.
- Sharp CLI.
- Google Stitch.

### 11.5 Controle de versão

- Git.
- GitHub.

---

## 12. Integração com a API Pública FIPE

O CarCare utiliza a FIPE API v2 para auxiliar no cadastro dos veículos.

### Endereço base

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
  |
  v
Modelo
  |
  v
Ano
  |
  v
Cadastro do veículo
```

A API FIPE é utilizada como fonte de consulta externa.

Os registros cadastrados pelo administrador são armazenados no JSON Server, e não na API FIPE.

---

## 13. Arquitetura da Interface

A interface foi desenvolvida com base no protótipo criado no Google Stitch.

O Materialize CSS é utilizado em conjunto com estilos personalizados desenvolvidos em Sass.

### 13.1 Organização das páginas

| Página | Responsabilidade |
| --- | --- |
| `index.html` | Dashboard e indicadores |
| `veiculos.html` | Listagem de veículos |
| `novo-veiculo.html` | Formulário de cadastro |
| `detalhes.html` | Informações e histórico do veículo |
| `nova-manutencao.html` | Formulário de manutenção |

### 13.2 Componentes do Materialize

São utilizados componentes e classes como:

- `row`.
- `col`.
- `s12`.
- `m4`.
- `m6`.
- `l4`.
- `card`.
- `card-content`.
- `btn`.
- `input-field`.
- `responsive-img`.
- `materialize-textarea`.

Exemplo de estrutura responsiva:

```html
<div class="row stats">
    <div class="col s12 m6 l4">
        <div class="card stat-card">
            <div class="card-content">
                Conteúdo
            </div>
        </div>
    </div>
</div>
```

---

## 14. Organização dos Estilos com Sass

Os estilos personalizados estão centralizados no arquivo:

```text
css/style.scss
```

O arquivo utiliza recursos do Sass para facilitar a organização e reutilização do código.

### 14.1 Variáveis

As variáveis centralizam as definições do Design System.

Exemplo:

```scss
$primary: #2867e8;
$background: #f5f7fa;
$sidebar-bg: #0d172b;
$white: #ffffff;
```

### 14.2 Mixins

Os mixins permitem reutilizar padrões de estilização.

Exemplo simplificado:

```scss
@mixin card-base {
    background: $white;
    border-radius: $card-radius;
}
```

### 14.3 Funções

O projeto utiliza uma função para converter valores em pixels para unidades relativas.

```scss
@use "sass:math";

@function px-to-rem($value, $base: 16) {
    @return math.div($value, $base) * 1rem;
}
```

### 14.4 Compilação

O Sass gera o arquivo CSS utilizado pelas páginas HTML.

```text
style.scss
     |
     v
Compilador Sass
     |
     v
style.css
```

Comando de compilação:

```bash
npx sass css/style.scss css/style.css
```

---

## 15. Responsividade

O layout utiliza técnicas de responsividade para adaptar a aplicação aos diferentes tamanhos de tela.

### Técnicas utilizadas

- Sistema de Grid do Materialize CSS.
- CSS Grid Layout.
- Flexbox.
- Media queries.
- Unidades relativas.
- Tipografia fluida.
- Imagens responsivas.
- Menu lateral adaptado para dispositivos móveis.

### 15.1 Tipografia responsiva

Exemplo:

```scss
.page-header h1 {
    font-size: clamp(1.375rem, 3vw, 1.75rem);
    line-height: 1.3;
}
```

### 15.2 Organização dos elementos

Exemplo de CSS Grid:

```scss
.detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
```

Em telas menores, a estrutura é reorganizada em uma coluna por meio de media queries.

---

## 16. Otimização de Imagens

As imagens utilizadas na aplicação foram convertidas do formato PNG para WebP utilizando o Sharp CLI.

### 16.1 Resultados da otimização

| Imagem | PNG original | WebP otimizado | Redução |
| --- | ---: | ---: | ---: |
| Toyota Corolla | 161,32 KB | 16,76 KB | 89,6% |
| Toyota Hilux | 570,82 KB | 27,76 KB | 95,1% |

A redução total foi de aproximadamente 93,9%.

### 16.2 Carregamento de imagens

A página de detalhes utiliza o elemento `picture` para oferecer o formato WebP e uma imagem PNG alternativa.

```html
<picture>
    <source
        id="vehicleImageWebp"
        srcset="imagens/corolla.webp"
        type="image/webp"
    >

    <img
        id="vehicleImage"
        class="responsive-img"
        src="imagens/corolla.png"
        alt="Imagem ilustrativa do veículo"
        loading="lazy"
        decoding="async"
    >
</picture>
```

### 16.3 Responsividade das imagens

As imagens são adaptadas aos seus respectivos containers utilizando propriedades como:

- `width`.
- `max-width`.
- `height: auto`.
- `object-fit`.
- `object-position`.

Exemplo:

```scss
.vehicle-image-card img {
    width: 100%;
    max-width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
}
```

As imagens são ilustrativas nesta etapa. A associação dinâmica das imagens aos modelos dos veículos será revisada posteriormente.

---

## 17. Estrutura de Arquivos

```text
manutencao-de-veiculos/
|
+-- css/
|   +-- style.scss
|   +-- style.css
|
+-- docs/
|   +-- architecture.md
|   +-- design-system.md
|   +-- prd.md
|   +-- script-example.js
|
+-- imagens/
|   +-- corolla.png
|   +-- corolla.webp
|   +-- hilux.png
|   +-- hilux.webp
|
+-- js/
|   +-- app.js
|
+-- db.json
+-- index.html
+-- veiculos.html
+-- novo-veiculo.html
+-- detalhes.html
+-- nova-manutencao.html
+-- package.json
+-- package-lock.json
+-- README.md
+-- .gitignore
```

---

## 18. Limitações do Escopo

O CarCare é desenvolvido para fins acadêmicos e utiliza uma arquitetura simplificada.

Não fazem parte do escopo atual:

- Sistema de múltiplos usuários.
- Controle avançado de permissões.
- Agendamento de manutenções futuras.
- Exclusão de registros de manutenção.
- Cadastro de oficinas e fornecedores.
- Controle de estoque de peças.
- Relatórios financeiros avançados.
- Banco de dados de produção.

O JSON Server é utilizado como uma API simulada para fins de desenvolvimento e aprendizado, não como um servidor de produção.

---

## 19. Situação do Desenvolvimento

### Entrega 1 — A Fundação

- Definição do escopo.
- Levantamento de requisitos.
- Documentação técnica.
- Criação do Design System.
- Prototipação das interfaces.

### Entrega 2 — A Casca

- Implementação das páginas HTML.
- Integração do Materialize CSS.
- Desenvolvimento dos estilos com Sass.
- Padronização dos componentes.
- Implementação de responsividade.
- Otimização de imagens.
- Aplicação do Design System.

### Próximas etapas

- Revisão da lógica JavaScript.
- Validações personalizadas.
- Revisão das integrações com APIs.
- Correção dos fluxos de navegação.
- Apresentação dinâmica do histórico.
- Revisão das regras de negócio.

---

## Autora

**Taís Ramos Nascoski**

Tecnologia em Sistemas para Internet — UTFPR.

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento de Aplicações Web.
