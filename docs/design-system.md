
# 🎨 Sistema de Design — CarCare

O **CarCare** utiliza um sistema visual baseado no framework **Materialize CSS**, complementado por estilos personalizados desenvolvidos em Sass (SCSS).

O sistema de design tem como objetivo manter uma identidade visual consistente, simples, responsiva e adequada ao gerenciamento de veículos e suas manutenções.

Este documento define as cores, tipografia, componentes, espaçamentos, estados visuais, ícones e regras de responsividade utilizadas na aplicação.

---

## 1. Framework Base

### 1.1 Framework escolhido

- **Materialize CSS 1.0.0**

O Materialize CSS fornece componentes e recursos para a construção de interfaces responsivas.

O CarCare utiliza o framework como base para:

- Sistema de Grid.
- Botões.
- Cartões.
- Formulários.
- Campos de seleção.
- Campos de texto.
- Mensagens Toast.
- Imagens responsivas.

Os componentes são personalizados por meio do arquivo `css/style.scss`, mantendo a identidade visual do projeto.

### 1.2 Bibliotecas e tecnologias visuais

- Materialize CSS 1.0.0.
- Material Icons.
- CSS3.
- Sass (SCSS).

### 1.3 Classes personalizadas

| Classe | Finalidade |
| --- | --- |
| `.sidebar` | Menu lateral |
| `.topbar` | Barra superior |
| `.content` | Área principal de conteúdo |
| `.page-header` | Cabeçalho das páginas |
| `.blue-btn` | Botão de ação principal |
| `.cancel-btn` | Botão secundário |
| `.back-button` | Botão de retorno |
| `.stat-card` | Cartão de indicadores |
| `.vehicle-card` | Cartão de veículo |
| `.vehicle-image` | Área de imagem do veículo |
| `.vehicle-list` | Listagem de veículos |
| `.detail-card` | Cartão de informações |
| `.detail-grid` | Organização dos detalhes |
| `.maintenance-form` | Estrutura visual dos formulários |
| `.form-section` | Seção de formulário |
| `.form-actions` | Área de ações do formulário |
| `.status` | Indicador de situação do veículo |
| `.mobile-menu-toggle` | Botão do menu mobile |

---

## 2. Paleta de Cores

A identidade visual do CarCare utiliza principalmente tons de azul, branco e cinza.

As cores são centralizadas em variáveis Sass, permitindo sua reutilização em diferentes componentes.

### 2.1 Cores principais

| Nome | Variável SCSS | Código | Uso |
| --- | --- | --- | --- |
| Primária | `$primary` | `#2867E8` | Botões e ações principais |
| Primária escura | `$primary-dark` | `#1F56C7` | Hover de botões |
| Primária suave | `$primary-soft` | `#EEF5FF` | Fundos de destaque |
| Fundo principal | `$background` | `#F5F7FA` | Fundo da aplicação |
| Superfície | `$white` | `#FFFFFF` | Cartões e formulários |
| Texto principal | `$text` | `#10213D` | Textos gerais |
| Texto escuro | `$text-dark` | `#08172D` | Títulos |
| Texto auxiliar | `$text-light` | `#61728C` | Descrições e informações |
| Texto secundário | `$text-secondary` | `#52647E` | Informações secundárias |
| Borda | `$border` | `#DCE3ED` | Bordas e divisores |
| Fundo de campos | `$input-bg` | `#EEF3F8` | Campos de formulário |
| Fundo de filtros | `$filter-bg` | `#EEF2F8` | Áreas de filtragem |

### 2.2 Cores de estado

| Estado | Variável | Código | Finalidade |
| --- | --- | --- | --- |
| Sucesso | `$success` | `#079447` | Situações positivas |
| Sucesso escuro | `$success-dark` | `#00874A` | Destaques positivos |
| Fundo de sucesso | `$success-bg` | `#DFF9E8` | Indicadores positivos |
| Atenção | `$warning` | `#D87900` | Situações de atenção |
| Atenção escura | `$warning-dark` | `#C36B00` | Destaques de atenção |
| Fundo de atenção | `$warning-bg` | `#FFF0D9` | Indicadores de atenção |
| Erro | `$danger` | `#D92F2F` | Erros e situações críticas |
| Fundo de erro | `$danger-bg` | `#FFE1E1` | Indicadores negativos |
| Manutenção | `$maintenance-purple` | `#514BE6` | Identificação de manutenção |
| Fundo de manutenção | `$maintenance-purple-soft` | `#F0EFFF` | Destaques de manutenção |

Os estados devem apresentar textos ou ícones complementares, evitando que a informação dependa exclusivamente da cor.

### 2.3 Sidebar

| Elemento | Variável | Código |
| --- | --- | --- |
| Fundo | `$sidebar-bg` | `#0D172B` |
| Texto | `$sidebar-text` | `#9EABC0` |
| Borda | `$sidebar-border` | `#202C41` |
| Destaque principal | `$primary` | `#2867E8` |
| Texto branco | `$white` | `#FFFFFF` |

### 2.4 Implementação em Sass

```scss
$primary: #2867e8;
$primary-dark: #1f56c7;
$primary-soft: #eef5ff;

$background: #f5f7fa;

$text: #10213d;
$text-dark: #08172d;
$text-light: #61728c;
$text-secondary: #52647e;

$white: #ffffff;

$sidebar-bg: #0d172b;
$sidebar-text: #9eabc0;
$sidebar-border: #202c41;

$border: #dce3ed;
```

A utilização de variáveis permite alterar as definições visuais de maneira centralizada.

---

## 3. Tipografia

A tipografia utilizada na implementação atual do CarCare é **Arial**, com `sans-serif` como alternativa.

A escolha busca manter a legibilidade e a compatibilidade com diferentes dispositivos.

### 3.1 Fonte principal

```scss
body {
    font-family: Arial, sans-serif;
}
```

### 3.2 Hierarquia tipográfica

| Elemento | Características |
| --- | --- |
| Título da página | Maior destaque e peso alto |
| Título de seção | Tamanho intermediário e peso alto |
| Título de formulário | Destaque intermediário |
| Texto principal | Peso regular |
| Texto auxiliar | Tamanho menor e cor secundária |
| Indicadores numéricos | Tamanho maior e peso alto |
| Botões | Peso intermediário ou alto |

### 3.3 Tipografia responsiva

A interface utiliza a função CSS `clamp()` para adaptar os tamanhos das fontes conforme a largura da tela.

Exemplo:

```scss
.page-header h1 {
    font-size: clamp(1.375rem, 3vw, 1.75rem);
    line-height: 1.3;
}
```

Os títulos de seção também utilizam tipografia fluida.

```scss
.section-header h2 {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.4;
}
```

Essa abordagem permite manter a hierarquia visual em dispositivos móveis e computadores.

---

## 4. Diretrizes de Uso de Componentes

Os componentes combinam classes do Materialize CSS com classes personalizadas do CarCare.

### 4.1 Botão principal

O botão principal é utilizado em ações como:

- Novo veículo.
- Nova manutenção.
- Salvar veículo.
- Salvar manutenção.
- Consultar detalhes.

Classes utilizadas:

```text
btn blue-btn
```

Características:

- Fundo azul.
- Texto branco.
- Bordas arredondadas.
- Peso de fonte 600.
- Ícone opcional.
- Estado hover com azul escuro.
- Texto sem transformação obrigatória para letras maiúsculas.

Exemplo:

```html
<button
    type="button"
    class="btn blue-btn"
    onclick="novaManutencao()"
>
    <i class="material-icons left">add</i>
    Nova Manutenção
</button>
```

Estilização:

```scss
.btn.blue-btn {
    background-color: $primary;
    color: $white;

    border-radius: $small-radius;

    text-transform: none;
    font-weight: 600;

    &:hover,
    &:focus {
        background-color: $primary-dark;
    }
}
```

### 4.2 Botão secundário

Utilizado principalmente em ações de cancelamento.

Classes utilizadas:

```text
btn cancel-btn
```

Características:

- Fundo branco.
- Texto secundário.
- Borda suave.
- Bordas arredondadas.
- Menor destaque visual em relação ao botão principal.

Exemplo:

```html
<button
    type="button"
    class="btn cancel-btn"
    onclick="irPara('veiculos.html')"
>
    Cancelar
</button>
```

### 4.3 Botão de retorno

Utilizado para retornar à lista de veículos.

```html
<button
    type="button"
    class="back-button"
    onclick="irPara('veiculos.html')"
>
    <i class="material-icons">arrow_back</i>
    Voltar para veículos
</button>
```

O componente é reutilizado nas páginas:

- Novo Veículo.
- Detalhes do Veículo.
- Nova Manutenção.

### 4.4 Cartões

Os cartões são utilizados para organizar informações da aplicação.

Principais tipos:

- Cartões de indicadores.
- Cartões de veículos.
- Cartões de detalhes.
- Cartões de formulário.
- Cartão de situação da frota.

Os cartões utilizam padrões compartilhados de fundo, borda e arredondamento.

```scss
@mixin card-base {
    background: $white;
    border: 0.0625rem solid $border;
    border-radius: $card-radius;
    box-shadow: none;
}
```

Exemplo de reutilização:

```scss
.stat-card,
.fleet.card,
.vehicle-card,
.maintenance-form {
    @include card-base;
}
```

### 4.5 Cartões do Dashboard

Os cartões do Dashboard apresentam indicadores resumidos sobre a frota.

Exemplo:

```html
<div class="col s12 m6 l4">

    <div class="card stat-card">

        <div class="card-content">

            <span class="stat-title">
                Total de veículos
            </span>

            <div class="stat-value">
                0
            </div>

            <i class="material-icons stat-icon">
                directions_car
            </i>

        </div>

    </div>

</div>
```

### 4.6 Cartões de veículos

Os cartões de veículos organizam:

- Nome do veículo.
- Modelo e ano.
- Placa.
- Quilometragem.
- Combustível.
- Status operacional.
- Botão de detalhes.

Principais classes:

```text
vehicle-card
vehicle-image
vehicle-content
vehicle-name
vehicle-info
vehicle-footer
status
plate
```

---

## 5. Formulários

Os formulários utilizam componentes do Materialize CSS combinados com estilos próprios.

São utilizados nas páginas:

- `novo-veiculo.html`.
- `nova-manutencao.html`.

### 5.1 Estrutura visual

```html
<div class="card maintenance-form">

    <div class="card-content">

        <form>

            <div class="form-section">
                <!-- Campos do formulário -->
            </div>

            <div class="form-actions">
                <!-- Botões -->
            </div>

        </form>

    </div>

</div>
```

### 5.2 Campos de entrada

Os campos utilizam a classe `input-field` do Materialize.

```html
<div class="input-field col s12 m6">

    <input
        id="vehiclePlate"
        type="text"
        maxlength="7"
        required
    >

    <label for="vehiclePlate">
        Placa
    </label>

</div>
```

### 5.3 Campos de seleção

Os campos de seleção utilizam o componente Select do Materialize.

```html
<div class="input-field col s12 m4">

    <select id="vehicleBrand" required>

        <option value="" disabled selected>
            Selecione a marca
        </option>

    </select>

    <label for="vehicleBrand">
        Marca
    </label>

</div>
```

O componente pode ser inicializado pelo JavaScript:

```javascript
M.FormSelect.init(
    document.querySelectorAll("select")
);
```

### 5.4 Campos de observação

O registro de manutenção utiliza o componente `materialize-textarea`.

```html
<textarea
    id="maintenanceObservation"
    class="materialize-textarea"
    required
></textarea>
```

### 5.5 Ações dos formulários

Os formulários utilizam dois tipos de ação:

- Botão principal para salvar.
- Botão secundário para cancelar.

Em dispositivos móveis, os botões são reorganizados verticalmente para facilitar a interação.

---

## 6. Estados Visuais

O sistema apresenta indicadores para representar a situação dos veículos.

### 6.1 Veículo operacional

- Texto: Pronto ou Veículo operacional.
- Identificação visual positiva.
- Ícone: `check_circle`.
- Classe: `.ready`.

### 6.2 Veículo em manutenção

- Texto: Em Manutenção.
- Identificação visual de manutenção.
- Ícone de atenção quando necessário.
- Classe: `.in-maintenance`.

### 6.3 Mensagens do sistema

As mensagens de sucesso e erro utilizam o componente Toast do Materialize CSS.

Exemplo:

```javascript
M.toast({
    html: "Veículo cadastrado com sucesso!"
});
```

O tratamento completo dos estados e regras de negócio será revisado nas próximas etapas do projeto.

---

## 7. Iconografia

O CarCare utiliza a biblioteca **Material Icons**.

Os ícones complementam os textos e facilitam o reconhecimento das ações.

| Ícone | Finalidade |
| --- | --- |
| `directions_car` | Veículos |
| `dashboard` | Dashboard |
| `add` | Novo cadastro |
| `build` | Manutenção |
| `search` | Busca |
| `settings` | Configurações |
| `help_outline` | Suporte |
| `arrow_back` | Voltar |
| `save` | Salvar |
| `check_circle` | Sucesso ou situação operacional |
| `error` | Atenção ou erro |
| `speed` | Quilometragem |
| `badge` | Identificação do veículo |
| `attach_money` | Valor da manutenção |
| `notifications_none` | Notificações |
| `menu` | Navegação mobile |
| `chevron_right` | Acesso a informações |

Exemplo:

```html
<i class="material-icons">directions_car</i>
```

---

## 8. Espaçamentos e Dimensões

O projeto utiliza unidades relativas para favorecer a adaptação da interface.

Principais unidades:

- `rem`.
- `%`.
- `vw`.
- `fr`.

### 8.1 Referências de espaçamento

| Valor | Equivalência aproximada |
| --- | --- |
| `0.25rem` | 4px |
| `0.5rem` | 8px |
| `0.75rem` | 12px |
| `1rem` | 16px |
| `1.25rem` | 20px |
| `1.5rem` | 24px |
| `2rem` | 32px |

As equivalências consideram uma fonte raiz de 16px.

Esses valores servem como referências de espaçamento, sem representar uma escala exclusiva obrigatória.

### 8.2 Bordas e arredondamentos

O projeto utiliza variáveis Sass para centralizar os arredondamentos.

```scss
$card-radius: px-to-rem(13);
$small-radius: px-to-rem(8);
```

| Componente | Arredondamento de referência |
| --- | --- |
| Cartões | 0.8125rem |
| Botões e componentes menores | 0.5rem |

### 8.3 Dimensões da navegação

```scss
$sidebar-width: px-to-rem(243);
$mobile-sidebar-width: px-to-rem(70);
```

As dimensões da navegação são adaptadas pelas media queries conforme a largura disponível.

---

## 9. Organização dos Estilos com Sass

O arquivo principal de estilos é:

```text
css/style.scss
```

O navegador utiliza o arquivo compilado:

```text
css/style.css
```

### 9.1 Variáveis

As variáveis centralizam:

- Cores.
- Dimensões.
- Bordas.
- Arredondamentos.
- Sombras.

### 9.2 Mixins

Os mixins permitem reutilizar padrões de estilização entre diferentes componentes.

Exemplo:

```scss
@mixin card-base {
    background: $white;
    border: 0.0625rem solid $border;
    border-radius: $card-radius;
    box-shadow: none;
}
```

### 9.3 Funções

O projeto utiliza uma função para converter valores em pixels para unidades relativas.

```scss
@use "sass:math";

@function px-to-rem($value, $base: 16) {
    @return math.div($value, $base) * 1rem;
}
```

Exemplo de aplicação:

```scss
$sidebar-width: px-to-rem(243);
$card-radius: px-to-rem(13);
$small-radius: px-to-rem(8);
```

### 9.4 Compilação

```bash
npx sass css/style.scss css/style.css
```

Durante o desenvolvimento, também é possível utilizar:

```bash
npx sass --watch css/style.scss css/style.css
```

As alterações nos estilos personalizados devem ser realizadas preferencialmente no arquivo SCSS.

---

## 10. Layout e Responsividade

O CarCare utiliza o sistema de Grid do Materialize CSS combinado com Flexbox, CSS Grid Layout e media queries.

### 10.1 Grid do Materialize

O sistema de Grid do framework utiliza uma estrutura de 12 colunas.

Exemplo:

```html
<div class="row">

    <div class="col s12 m6 l4">
        Conteúdo
    </div>

    <div class="col s12 m6 l4">
        Conteúdo
    </div>

    <div class="col s12 m6 l4">
        Conteúdo
    </div>

</div>
```

Comportamento:

| Classe | Comportamento |
| --- | --- |
| `s12` | Ocupa 12 colunas |
| `m6` | Ocupa 6 colunas |
| `m4` | Ocupa 4 colunas |
| `l4` | Ocupa 4 colunas em telas grandes |

### 10.2 CSS Grid Layout

O CSS Grid é utilizado na organização de componentes personalizados.

Exemplo:

```scss
.detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}
```

Em dispositivos menores, os elementos são reorganizados em uma coluna.

```scss
@media (max-width: 40.625rem) {

    .detail-section:first-of-type .detail-grid {
        grid-template-columns: minmax(0, 1fr);
    }

}
```

### 10.3 Flexbox

O Flexbox é utilizado em componentes como:

- Menu lateral.
- Barra superior.
- Cabeçalhos.
- Grupos de botões.
- Organização interna de cartões.

Exemplo:

```scss
.form-actions {
    display: flex;
    gap: 0.75rem;
}
```

### 10.4 Media queries

O SCSS utiliza diferentes pontos de quebra conforme as necessidades dos componentes.

Entre os pontos de quebra utilizados estão:

| Largura | Aplicação geral |
| --- | --- |
| 1000px | Ajustes intermediários |
| 900px | Reorganização de componentes e navegação |
| 700px | Ajustes para telas menores |
| 650px | Organização dos conteúdos mobile |
| 600px | Ajustes adicionais para dispositivos móveis |
| 480px | Ajustes para telas compactas |
| 375px | Ajustes para dispositivos menores |

As media queries personalizadas complementam o comportamento responsivo do Materialize CSS.

### 10.5 Navegação mobile

Em dispositivos móveis, o menu lateral possui um botão para abertura e fechamento.

Principais componentes:

```text
sidebar
mobile-menu-toggle
mobile-menu-overlay
```

A navegação mantém as mesmas opções disponíveis no desktop.

---

## 11. Imagens Responsivas

As imagens são adaptadas ao tamanho de seus respectivos containers.

São utilizados:

- Classe `responsive-img` do Materialize.
- `width: 100%`.
- `max-width: 100%`.
- `height: auto`.
- `object-fit`.
- `object-position`.

Exemplo:

```scss
.vehicle-image-card img {
    display: block;

    width: 100%;
    max-width: 100%;
    height: auto;

    object-fit: contain;
    object-position: center;
}
```

Essa abordagem permite preservar a proporção das imagens e evitar que ultrapassem os limites dos cartões.

---

## 12. Otimização de Imagens

As imagens dos veículos foram convertidas do formato PNG para WebP utilizando Sharp CLI.

### 12.1 Resultados

| Imagem | PNG original | WebP otimizado | Redução |
| --- | ---: | ---: | ---: |
| Toyota Corolla | 161,32 KB | 16,76 KB | 89,6% |
| Toyota Hilux | 570,82 KB | 27,76 KB | 95,1% |

A otimização proporcionou uma redução total de aproximadamente **93,9%** no tamanho das imagens.

### 12.2 Carregamento adaptativo

A página de detalhes utiliza o elemento `picture` para disponibilizar a imagem WebP e uma alternativa em PNG.

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

### 12.3 Técnicas utilizadas

- Formato moderno WebP.
- Elemento `picture`.
- Atributo `srcset`.
- Imagem PNG como alternativa.
- Carregamento sob demanda com `loading="lazy"`.
- Decodificação assíncrona.
- Redimensionamento responsivo por CSS.

### 12.4 Organização dos arquivos

```text
imagens/
├── corolla.png
├── corolla.webp
├── hilux.png
└── hilux.webp
```

As imagens possuem finalidade ilustrativa nesta etapa do projeto.

---

## 13. Padrões de Interface

### 13.1 Dashboard

O Dashboard utiliza:

- Menu lateral.
- Barra superior.
- Cabeçalho.
- Cartões de indicadores.
- Área de situação da frota.
- Acesso rápido aos veículos.

### 13.2 Meus Veículos

A página utiliza:

- Cabeçalho padronizado.
- Botão Novo Veículo.
- Campo de busca.
- Cartões de veículos.
- Indicadores de status.
- Botões de detalhes.

### 13.3 Novo Veículo

A página utiliza:

- Botão de retorno.
- Cabeçalho padronizado.
- Cartão de formulário.
- Campos de seleção.
- Campos de entrada.
- Botões de salvar e cancelar.

### 13.4 Detalhes do Veículo

A página utiliza:

- Botão de retorno.
- Cabeçalho.
- Indicador de status.
- Imagem responsiva e otimizada.
- Cartão de informações.
- Área destinada ao histórico de manutenções.

### 13.5 Nova Manutenção

A página utiliza:

- Botão de retorno.
- Cabeçalho padronizado.
- Cartão de formulário.
- Seleção de veículo.
- Campo de observação.
- Campo de valor.
- Botões de salvar e cancelar.

---

## 14. Acessibilidade e Usabilidade

A implementação considera práticas básicas de acessibilidade e usabilidade.

Entre os recursos utilizados estão:

- Estrutura semântica do HTML5.
- Elementos `main`, `header`, `nav`, `aside` e `section`.
- Textos alternativos em imagens.
- Labels associados aos campos.
- Campos obrigatórios identificados pelo HTML.
- Atributos ARIA em elementos de navegação.
- Indicadores textuais de status.
- Estados de foco em botões e links.
- Adaptação para dispositivos móveis.

Exemplo de foco:

```scss
button:focus-visible,
a:focus-visible {
    outline: px-to-rem(2) solid $primary;
    outline-offset: px-to-rem(3);
}
```

Essas práticas contribuem para melhorar a navegação, mas não representam uma certificação completa de acessibilidade.

---

## 15. Consistência Visual

As páginas do CarCare compartilham os mesmos padrões de:

- Paleta de cores.
- Tipografia.
- Navegação lateral.
- Barra superior.
- Cabeçalhos.
- Botões principais.
- Botões secundários.
- Cartões.
- Formulários.
- Ícones.
- Bordas.
- Espaçamentos.

A centralização dos estilos no SCSS facilita a reutilização dos componentes e a manutenção da identidade visual.

---

## 16. Protótipo

O protótipo da interface foi desenvolvido utilizando Google Stitch.

A implementação utiliza o protótipo como referência para a organização das páginas, identidade visual e fluxo de navegação.

[🔗 Acessar protótipo do CarCare no Stitch](https://stitch.withgoogle.com/projects/2247964266907741447)

---

## 17. Indicadores de Desempenho Relacionados

| ID | Aplicação no Design System |
| --- | --- |
| ID 01 | Protótipo mobile e desktop |
| ID 02 | Sistema de Grid do Materialize |
| ID 03 | Flexbox e CSS Grid Layout |
| ID 04 | Componentes do Materialize |
| ID 05 | Unidades relativas |
| ID 06 | Padronização da identidade visual |
| ID 07 | Variáveis, mixins e funções Sass |
| ID 08 | Tipografia responsiva |
| ID 09 | Imagens responsivas |
| ID 10 | Otimização de imagens com WebP |

---

## 18. Considerações Finais

O Design System do CarCare estabelece padrões visuais reutilizáveis para a construção e manutenção das interfaces.

A combinação do Materialize CSS com Sass permite desenvolver uma aplicação responsiva, organizada e com identidade visual consistente.

Este documento representa os padrões visuais definidos para a Entrega 2 — A Casca.

---

## Autora

**Taís Ramos Nascoski**

Tecnologia em Sistemas para Internet — UTFPR.

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento de Aplicações Web.
