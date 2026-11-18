# 🛠️ Especificação Técnica (Tech Spec) - CarCare

Este documento detalha a arquitetura técnica, o modelo de dados, a estrutura de armazenamento e as tecnologias utilizadas pelo sistema CarCare.

O CarCare é uma aplicação web desenvolvida para auxiliar o proprietário no cadastro e acompanhamento das informações de seus veículos e dos registros relacionados às suas manutenções.

A aplicação utiliza uma API local simulada pelo **JSON Server**, responsável pela persistência e consulta dos dados dos veículos.

---

## 1. Arquitetura da Aplicação

O CarCare utiliza uma arquitetura simples composta por uma aplicação web no lado do cliente e uma API local simulada.

```text
┌─────────────────────────────────────────────┐
│                  CarCare                    │
│              Aplicação Web                 │
├─────────────────────────────────────────────┤
│                                             │
│  HTML + CSS + JavaScript                    │
│                                             │
│  ├── Dashboard                              │
│  ├── Veículos                               │
│  ├── Cadastro de Veículo                    │
│  ├── Detalhes do Veículo                    │
│  └── Manutenções                            │
│                                             │
└──────────────────────┬──────────────────────┘
                       │
                       │ HTTP / Fetch
                       ▼
┌─────────────────────────────────────────────┐
│              JSON Server                    │
│                API REST                     │
├─────────────────────────────────────────────┤
│                                             │
│  /veiculos                                  │
│                                             │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
                ┌──────────┐
                │ db.json   │
                └──────────┘
```

### Responsabilidades do Front-end

O front-end é responsável por:

- Apresentar a interface do sistema.
- Permitir o cadastro de veículos.
- Permitir a visualização dos veículos cadastrados.
- Permitir a visualização dos detalhes de um veículo.
- Apresentar informações relacionadas às manutenções.
- Apresentar o histórico de manutenção.
- Apresentar informações resumidas no Dashboard.
- Realizar requisições para a API.
- Validar dados antes do envio.
- Apresentar mensagens de sucesso ou erro.
- Utilizar a API pública para auxiliar na consulta dos dados dos veículos.

### Responsabilidades do JSON Server

O JSON Server é utilizado para:

- Simular uma API REST.
- Receber requisições HTTP.
- Armazenar os veículos no arquivo `db.json`.
- Permitir consultas aos veículos cadastrados.
- Permitir cadastro de novos veículos.

### Responsabilidade do `db.json`

O arquivo `db.json` representa o armazenamento de dados utilizado pelo JSON Server durante o desenvolvimento do projeto.

## 2. Modelo de Dados

O modelo de dados principal do CarCare é baseado na entidade:

- **Veículos**

Os registros de manutenção estão relacionados aos veículos cadastrados.

As informações de manutenção são simples e têm como objetivo registrar uma observação sobre o serviço realizado e o valor gasto.

### 2.1 Veículos

A entidade `veiculos` armazena as informações dos veículos cadastrados pelo proprietário.

Cada veículo pode possuir informações como:

- Identificador.
- Marca.
- Modelo.
- Ano.
- Placa.
- Quilometragem.
- Combustível.
- Informações relacionadas às manutenções, quando houver.

### 2.2 Manutenções

As informações de manutenção estão relacionadas ao veículo correspondente.

Um registro de manutenção pode conter:

- Observação
- Valor

A manutenção não possui uma estrutura complexa de acompanhamento.

O sistema não utiliza, nesta versão:

- Data de próxima revisão.
- Quilometragem de próxima revisão.
- Status de manutenção.

Uma observação também pode ser utilizada para registrar uma informação sobre algo que precisa ser realizado no veículo, sem criar um registro de manutenção futura.

## 3. Dicionário de Dados

### 3.1 Entidade `veiculos`

| Campo           | Tipo   | Descrição                      |
| --------------- | ------ | ------------------------------ |
| `id`            | string | Identificador único do veículo |
| `marca`         | string | Marca do veículo               |
| `modelo`        | string | Modelo do veículo              |
| `ano`           | number | Ano do veículo                 |
| `placa`         | string | Placa do veículo               |
| `quilometragem` | number | Quilometragem atual do veículo |
| `combustivel`   | string | Tipo de combustível utilizado  |

### 3.2 Informações de manutenção

| Campo        | Tipo   | Descrição                                  |
| ------------ | ------ | ------------------------------------------ |
| `observacao` | string | Descrição ou observação sobre a manutenção |
| `valor`      | number | Valor gasto na manutenção                  |


## 4. Estrutura das Informações de Manutenção

As informações de manutenção fazem parte da experiência do sistema e são utilizadas para apresentar os serviços relacionados aos veículos.

Nesta versão do projeto, o registro de manutenção é simplificado.

Cada registro possui principalmente:

- Observação sobre o serviço realizado.
- Valor gasto.

As informações podem ser apresentadas nas seguintes áreas:

Dashboard.
- Detalhes do veículo.
- Área de Manutenções.

O objetivo é permitir que o proprietário consulte o que foi realizado no veículo e o valor relacionado ao serviço.

Não fazem parte desta versão informações como:

- Tipo de manutenção.
- Data da manutenção.
- Quilometragem da manutenção.
- Peças utilizadas.
- Oficina.
- Status.
- Agendamento de manutenção futura.

## 5. Rotas da API

A aplicação utiliza uma API local simulada pelo JSON Server.

Durante o desenvolvimento, a API poderá ser executada em:

```text
http://localhost:3000
```

A principal coleção disponibilizada pela API é:

```text
/veiculos
```

### 5.1 Listar veículos

```http
GET /veiculos
```

Retorna todos os veículos cadastrados.

### 5.2 Consultar um veículo

```http
GET /veiculos/:id
```

Retorna um veículo específico.

Exemplo:

```http
GET /veiculos/1
```
## 6. Estrutura do Banco de Dados

O armazenamento utilizado pelo JSON Server é representado pelo arquivo:

```text
db.json
```

A estrutura principal será:

```json
{
  "veiculos": []
}
```

### Exemplo

```json
{
  "veiculos": [
    {
      "id": "1",
      "marca": "Chevrolet",
      "modelo": "Onix",
      "ano": 2015,
      "placa": "ABC1D23",
      "quilometragem": 87420,
      "combustivel": "Flex"
    }
  ]
}
```

## 7. Contrato de Dados da API

### 7.1 Cadastro de veículo

Exemplo de dados enviados para a API:

```json
{
  "marca": "Chevrolet",
  "modelo": "Onix",
  "ano": 2015,
  "placa": "ABC1D23",
  "quilometragem": 87420,
  "combustivel": "Flex"
}
```

O `id` do veículo será utilizado para identificar o registro posteriormente.

```

## 8. Fluxo de Dados

O fluxo básico da aplicação ocorre da seguinte forma:

```text
┌───────────────┐
│ Proprietário  │
└───────┬───────┘
        │
        │ Interage com a interface
        ▼
┌─────────────────────┐
│ Front-end CarCare   │
│ HTML/CSS/JavaScript │
└─────────┬───────────┘
          │
          │ Requisição HTTP
          ▼
┌─────────────────────┐
│    JSON Server      │
│       API           │
└─────────┬───────────┘
          │
          │ Leitura / escrita
          ▼
┌─────────────────────┐
│       db.json       │
│      veiculos       │
└─────────────────────┘
```

### Exemplo: cadastro de veículo

1. O proprietário acessa o formulário de cadastro.
2. O proprietário preenche os dados do veículo.
3. O JavaScript valida os dados.
4. O front-end consulta a API pública quando necessário.
5. O front-end envia uma requisição `POST /veiculos`. 
6. O JSON Server recebe a requisição.
7. O veículo é armazenado no `db.json`.
8. A aplicação atualiza a interface.
9. O proprietário recebe o retorno da operação.

### Exemplo: consulta de veículos

1. O proprietário acessa a área de Veículos.
2. O JavaScript realiza uma requisição `GET /veiculos`.
3. O JSON Server retorna os veículos cadastrados.
4. O JavaScript processa a resposta.
5. A aplicação apresenta os veículos na interface.

### Exemplo: detalhes de um veículo

1. O proprietário seleciona um veículo.
2. A aplicação identifica o `id` do veículo.
3. O sistema consulta o veículo através da API.
4. A interface apresenta os dados do veículo.
5. As informações de manutenção relacionadas ao veículo são apresentadas na interface.
6. A próxima revisão é apresentada quando houver informação cadastrada.

## 9. Validação de Dados

Os dados dos veículos devem ser validados antes de serem enviados para a API.

### Veículo

Devem ser verificadas informações como:

- Campos obrigatórios preenchidos.
- Marca preenchida.
- Modelo preenchido.
- Ano válido.
- Placa em formato válido.
- Quilometragem numérica.
- Quilometragem maior ou igual a zero.
- Combustível informado.

### Manutenção

Quando uma manutenção for registrada, devem ser verificadas:

- Veículo relacionado informado.
- Observação preenchida.
- Valor válido, quando informado.
- Valor maior ou igual a zero.

A validação deve ocorrer no front-end antes da realização da requisição ou do armazenamento dos dados.

## 10. Tratamento de Erros

As requisições realizadas pelo front-end devem possuir tratamento de erros.

Exemplos de situações que podem ocorrer:

- API indisponível.
- Erro durante uma requisição.
- Falha no cadastro do veículo.
- Falha na atualização.
- Falha na exclusão.
- Dados inválidos.
- Veículo não encontrado.

Quando ocorrer um erro, a interface deve apresentar uma mensagem clara ao proprietário.

Exemplo:

```text
Não foi possível carregar os veículos.
Tente novamente.
```

Outro exemplo:

```text
Não foi possível cadastrar o veículo.
Verifique os dados e tente novamente.
```

## 11. Tecnologias e Bibliotecas

### Front-end

- HTML5
- CSS3
- JavaScript

### Interface

- Materialize CSS 1.0.0
- Material Icons
- Google Fonts - Inter

### API e persistência

- Node.js
- NPM
- JSON Server
- FIPE API v2
- `db.json`

### Controle de versão

- Git
- GitHub

## 11.1 API Pública - FIPE API

O CarCare utiliza a **FIPE API v2** como API pública para consulta de informações relacionadas a veículos.

A API disponibiliza dados de veículos por meio de requisições REST e respostas em JSON, permitindo consultar informações como:

- Marcas.
- Modelos.
- Anos.
- Tipo de combustível.
- Código FIPE.
- Preço de referência.

A consulta segue o fluxo:

```text
Marca → Modelo → Ano → Dados do veículo