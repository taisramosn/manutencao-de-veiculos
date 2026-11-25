/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const CARCARE_API_URL = "http://localhost:3000";
const FIPE_API_URL = "https://fipe.parallelum.com.br/api/v2";



/* =====================================================
   MENSAGENS
===================================================== */

function mostrarMensagem(mensagem) {

    if (typeof M !== "undefined" && M.toast) {

        M.toast({
            html: mensagem
        });

        return;
    }

    alert(mensagem);
}



/* =====================================================
   NAVEGAÇÃO
===================================================== */

function irPara(pagina) {
    window.location.href = pagina;
}

function novaManutencao() {
    window.location.href = "nova-manutencao.html";
}

// Detalhes de um veículo
function verDetalhes(id) {
    window.location.href = `detalhes.html?veiculo=${id}`;
}

// Detalhes de uma manutenção
function verDetalhesManutencao(id) {
    window.location.href = `detalhes.html?manutencao=${id}`;
}




/* =====================================================
   API - VEÍCULOS
===================================================== */

async function buscarVeiculos() {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/veiculos`
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao buscar veículos."
        );
    }


    return await resposta.json();
}


async function buscarVeiculoPorId(id) {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/veiculos/${id}`
        );


    if (!resposta.ok) {

        throw new Error(
            "Veículo não encontrado."
        );
    }


    return await resposta.json();
}


async function cadastrarVeiculoAPI(veiculo) {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/veiculos`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(veiculo)
            }
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao cadastrar veículo."
        );
    }


    return await resposta.json();
}


/*
   PATCH continua sendo usado apenas para
   atualizar o status operacional/manutenção.
*/

async function atualizarVeiculoAPI(
    id,
    dados
) {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/veiculos/${id}`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(dados)
            }
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao atualizar status do veículo."
        );
    }


    return await resposta.json();
}


/* =====================================================
   CADASTRAR VEÍCULO
===================================================== */

async function salvarVeiculo(event) {

    event.preventDefault();


    const marca =
        document.getElementById("vehicleBrand");

    const modelo =
        document.getElementById("vehicleModel");

    const ano =
        document.getElementById("vehicleYear");

    const placa =
        document.getElementById("vehiclePlate");

    const km =
        document.getElementById("vehicleKm");

    const combustivel =
        document.getElementById("vehicleFuel");


    if (
        !marca ||
        !modelo ||
        !ano ||
        !placa ||
        !km ||
        !combustivel
    ) {
        return;
    }


    if (
        !marca.value ||
        !modelo.value ||
        !ano.value ||
        !placa.value.trim() ||
        !km.value ||
        !combustivel.value
    ) {

        mostrarMensagem(
            "Preencha todos os campos."
        );

        return;
    }


    const veiculo = {

        marca:
            marca.options[
                marca.selectedIndex
            ].text,

        modelo:
            modelo.options[
                modelo.selectedIndex
            ].text,

        ano:
            ano.options[
                ano.selectedIndex
            ].text,

        placa:
            placa.value
                .trim()
                .toUpperCase(),

        quilometragem:
            Number(km.value),

        combustivel:
            combustivel.value,

        status:
            "operacional"
    };


    try {

        await cadastrarVeiculoAPI(
            veiculo
        );


        mostrarMensagem(
            "Veículo cadastrado com sucesso!"
        );


        setTimeout(
            function () {

                irPara("veiculos.html");

            },
            800
        );


    } catch (erro) {

        console.error(
            "Erro ao cadastrar veículo:",
            erro
        );


        mostrarMensagem(
            "Erro ao cadastrar veículo."
        );
    }
}


/* =====================================================
   LISTA DE VEÍCULOS
===================================================== */

async function carregarListaVeiculos() {

    const container =
        document.getElementById(
            "vehicles-cards-container"
        );


    if (!container) {
        return;
    }


    try {

        const veiculos =
            await buscarVeiculos();


        if (!veiculos.length) {

            container.innerHTML = `
                <p style="padding: 30px;">
                    Nenhum veículo cadastrado.
                </p>
            `;

            return;
        }


        container.innerHTML =
            veiculos
                .map(function (veiculo) {

                    const nome =
                        `${veiculo.marca || ""} ${veiculo.modelo || ""}`
                            .trim();

                    const ano =
                        veiculo.ano || "-";

                    const placa =
                        veiculo.placa || "-";

                    const km =
                        Number(
                            veiculo.quilometragem || 0
                        ).toLocaleString(
                            "pt-BR"
                        );

                    const combustivel =
                        veiculo.combustivel || "-";


                    const emManutencao =
                        veiculo.status ===
                        "manutencao";


                    const statusTexto =
                        emManutencao
                            ? "Em Manutenção"
                            : "Pronto";


                    const statusClasse =
                        emManutencao
                            ? "in-maintenance"
                            : "ready";


                    return `
                        <article class="vehicle-card">

                            <div class="vehicle-image">

                                <span
                                    class="status ${statusClasse}"
                                >
                                    ${statusTexto}
                                </span>

                                <span class="plate">
                                    ${placa}
                                </span>

                            </div>


                            <div class="vehicle-content">

                                <div class="vehicle-name">

                                    <strong>
                                        ${nome}
                                    </strong>

                                    <span>
                                        ${ano}
                                    </span>

                                </div>


                                <p class="vehicle-info">
                                    ${km} km • ${combustivel}
                                </p>


                                <div
                                    class="service ${
                                        emManutencao
                                            ? "danger"
                                            : "success"
                                    }"
                                >

                                    <strong>

                                        <i class="material-icons">
                                            ${
                                                emManutencao
                                                    ? "error"
                                                    : "check_circle"
                                            }
                                        </i>

                                        ${
                                            emManutencao
                                                ? "MANUTENÇÃO EM ANDAMENTO"
                                                : "VEÍCULO OPERACIONAL"
                                        }

                                    </strong>


                                    <p>
                                        ${
                                            emManutencao
                                                ? "Este veículo possui uma manutenção em andamento."
                                                : "Veículo disponível para utilização."
                                        }
                                    </p>

                                </div>

                            </div>


                            <div class="vehicle-footer">

                                <button
                                    class="btn blue-btn"
                                    onclick="verDetalhes('${veiculo.id}')"
                                >
                                    Detalhes
                                </button>

                            </div>

                        </article>
                    `;

                })
                .join("");


    } catch (erro) {

        console.error(
            "Erro ao carregar veículos:",
            erro
        );


        container.innerHTML = `
            <p style="padding: 30px;">
                Não foi possível carregar os veículos.
            </p>
        `;
    }
}


/* =====================================================
   DETALHES DO VEÍCULO
===================================================== */

function definirTexto(id, valor) {

    const elemento =
        document.getElementById(id);

    if (elemento) {
        elemento.textContent = valor;
    }
}


async function carregarDetalhes() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const id =
        parametros.get("veiculo");


    if (!id) {

        mostrarMensagem(
            "Veículo não informado."
        );

        return;
    }


    try {

        const veiculo =
            await buscarVeiculoPorId(id);


        const nome =
            `${veiculo.marca || ""} ${veiculo.modelo || ""}`
                .trim();


        const ano =
            veiculo.ano || "-";


        const placa =
            veiculo.placa || "-";


        const km =
            Number(
                veiculo.quilometragem || 0
            ).toLocaleString(
                "pt-BR"
            );


        const combustivel =
            veiculo.combustivel || "-";


        /*
           IDs principais usados na página.
        */

        definirTexto(
            "vehicle-name",
            nome
        );

        definirTexto(
            "vehicle-plate",
            placa
        );

        definirTexto(
            "vehicle-year",
            ano
        );

        definirTexto(
            "vehicle-km",
            `${km} km`
        );

        definirTexto(
            "vehicle-fuel",
            combustivel
        );


        /*
           Compatibilidade com possíveis
           IDs usados em versões anteriores
           da página de detalhes.
        */

        definirTexto(
            "vehicleName",
            nome
        );

        definirTexto(
            "vehicleModel",
            veiculo.modelo || "-"
        );

        definirTexto(
            "vehicleYear",
            ano
        );

        definirTexto(
            "vehiclePlate",
            placa
        );

        definirTexto(
            "vehicleKm",
            `${km} km`
        );

        definirTexto(
            "vehicleFuel",
            combustivel
        );

        definirTexto(
            "vehicleInfo",
            `${ano} • ${placa}`
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar detalhes:",
            erro
        );


        mostrarMensagem(
            "Não foi possível carregar o veículo."
        );
    }
}


/* =====================================================
   FIPE
===================================================== */

async function consultarFipe(endpoint) {

    const resposta =
        await fetch(
            `${FIPE_API_URL}${endpoint}`
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao consultar a FIPE."
        );
    }


    return await resposta.json();
}


/* =====================================================
   MATERIALIZE - SELECT
===================================================== */

function atualizarSelect(select) {

    if (
        !select ||
        typeof M === "undefined"
    ) {
        return;
    }


    const instancia =
        M.FormSelect.getInstance(
            select
        );


    if (instancia) {
        instancia.destroy();
    }


    M.FormSelect.init(
        select
    );
}


/* =====================================================
   CARREGAR MARCAS FIPE
===================================================== */

async function carregarMarcasFipe() {

    const marca =
        document.getElementById(
            "vehicleBrand"
        );

    const modelo =
        document.getElementById(
            "vehicleModel"
        );

    const ano =
        document.getElementById(
            "vehicleYear"
        );


    if (!marca) {
        return;
    }


    try {

        const marcas =
            await consultarFipe(
                "/cars/brands"
            );


        marca.innerHTML = `
            <option value="">
                Selecione a marca
            </option>
        `;


        marcas.forEach(
            function (item) {

                marca.innerHTML += `
                    <option value="${item.code}">
                        ${item.name}
                    </option>
                `;
            }
        );


        atualizarSelect(
            marca
        );


        if (modelo) {

            modelo.innerHTML = `
                <option value="">
                    Selecione o modelo
                </option>
            `;

            atualizarSelect(
                modelo
            );
        }


        if (ano) {

            ano.innerHTML = `
                <option value="">
                    Selecione o ano
                </option>
            `;

            atualizarSelect(
                ano
            );
        }


    } catch (erro) {

        console.error(
            "Erro ao carregar marcas FIPE:",
            erro
        );


        mostrarMensagem(
            "Não foi possível carregar as marcas."
        );
    }
}

/* =====================================================
   CARREGAR MODELOS FIPE
===================================================== */

async function carregarModelosFipe() {

    const marca =
        document.getElementById(
            "vehicleBrand"
        );

    const modelo =
        document.getElementById(
            "vehicleModel"
        );

    const ano =
        document.getElementById(
            "vehicleYear"
        );


    if (
        !marca ||
        !modelo ||
        !marca.value
    ) {
        return;
    }


    try {

        const modelos =
            await consultarFipe(
                `/cars/brands/${marca.value}/models`
            );


        modelo.innerHTML = `
            <option value="">
                Selecione o modelo
            </option>
        `;


        modelos.forEach(
            function (item) {

                modelo.innerHTML += `
                    <option value="${item.code}">
                        ${item.name}
                    </option>
                `;
            }
        );


        atualizarSelect(
            modelo
        );


        if (ano) {

            ano.innerHTML = `
                <option value="">
                    Selecione o ano
                </option>
            `;

            atualizarSelect(
                ano
            );
        }


    } catch (erro) {

        console.error(
            "Erro ao carregar modelos FIPE:",
            erro
        );


        mostrarMensagem(
            "Não foi possível carregar os modelos."
        );
    }
}


/* =====================================================
   CARREGAR ANOS FIPE
===================================================== */

async function carregarAnosFipe() {

    const marca =
        document.getElementById(
            "vehicleBrand"
        );

    const modelo =
        document.getElementById(
            "vehicleModel"
        );

    const ano =
        document.getElementById(
            "vehicleYear"
        );


    if (
        !marca ||
        !modelo ||
        !ano ||
        !marca.value ||
        !modelo.value
    ) {
        return;
    }


    try {

        const anos =
            await consultarFipe(
                `/cars/brands/${marca.value}/models/${modelo.value}/years`
            );


        ano.innerHTML = `
            <option value="">
                Selecione o ano
            </option>
        `;


        anos.forEach(
            function (item) {

                ano.innerHTML += `
                    <option value="${item.code}">
                        ${item.name}
                    </option>
                `;
            }
        );


        atualizarSelect(
            ano
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar anos FIPE:",
            erro
        );


        mostrarMensagem(
            "Não foi possível carregar os anos."
        );
    }
}


/* =====================================================
   INICIAR CADASTRO DE VEÍCULO
===================================================== */

function iniciarCadastroVeiculo() {

    const marca =
        document.getElementById(
            "vehicleBrand"
        );

    const modelo =
        document.getElementById(
            "vehicleModel"
        );

    const ano =
        document.getElementById(
            "vehicleYear"
        );


    if (
        !marca ||
        !modelo ||
        !ano
    ) {
        return;
    }


    if (
        typeof M !== "undefined"
    ) {

        M.FormSelect.init(
            document.querySelectorAll(
                "select"
            )
        );
    }


    marca.addEventListener(
        "change",
        carregarModelosFipe
    );


    modelo.addEventListener(
        "change",
        carregarAnosFipe
    );


    carregarMarcasFipe();
}


/* =====================================================
   API - MANUTENÇÕES
===================================================== */

async function buscarManutencoes() {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/manutencoes`
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao buscar manutenções."
        );
    }


    return await resposta.json();
}


async function cadastrarManutencaoAPI(
    manutencao
) {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/manutencoes`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify(
                        manutencao
                    )
            }
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao cadastrar manutenção."
        );
    }


    return await resposta.json();
}


async function excluirManutencaoAPI(
    id
) {

    const resposta =
        await fetch(
            `${CARCARE_API_URL}/manutencoes/${id}`,
            {
                method: "DELETE"
            }
        );


    if (!resposta.ok) {

        throw new Error(
            "Erro ao excluir manutenção."
        );
    }
}


/* =====================================================
   STATUS DA MANUTENÇÃO
===================================================== */

function manutencaoEstaAtiva(
    manutencao
) {

    const status =
        String(
            manutencao?.status ||
            "Em andamento"
        )
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );


    return (
        !status.includes("conclu") &&
        !status.includes("cancel")
    );
}


/* =====================================================
   ATUALIZAR STATUS DO VEÍCULO
===================================================== */

async function atualizarStatusVeiculoPelaManutencao(
    veiculoId
) {

    if (!veiculoId) {
        return;
    }


    const manutencoes =
        await buscarManutencoes();


    const existeManutencaoAtiva =
        manutencoes.some(
            function (manutencao) {

                return (
                    String(
                        manutencao.veiculoId
                    ) ===
                    String(
                        veiculoId
                    ) &&
                    manutencaoEstaAtiva(
                        manutencao
                    )
                );
            }
        );


    await atualizarVeiculoAPI(
        veiculoId,
        {
            status:
                existeManutencaoAtiva
                    ? "manutencao"
                    : "operacional"
        }
    );
}


/* =====================================================
   VEÍCULOS NO FORMULÁRIO DE MANUTENÇÃO
===================================================== */

async function carregarVeiculosManutencao() {

    const select =
        document.getElementById(
            "maintenanceVehicle"
        );


    if (!select) {
        return;
    }


    try {

        const veiculos =
            await buscarVeiculos();


        select.innerHTML = `
            <option
                value=""
                disabled
                selected
            >
                Selecione o veículo
            </option>
        `;


        veiculos.forEach(
            function (veiculo) {

                const option =
                    document.createElement(
                        "option"
                    );


                option.value =
                    veiculo.id;


                option.textContent =
                    `${veiculo.marca || ""} ${veiculo.modelo || ""} - ${veiculo.placa || ""}`;


                select.appendChild(
                    option
                );
            }
        );


        atualizarSelect(
            select
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar veículos para manutenção:",
            erro
        );


        mostrarMensagem(
            "Não foi possível carregar os veículos."
        );
    }
}


/* =====================================================
   SALVAR NOVA MANUTENÇÃO
===================================================== */

async function salvarManutencao() {

    const veiculo =
        document.getElementById(
            "maintenanceVehicle"
        );

    const observacao =
        document.getElementById(
            "maintenanceObservation"
        );

    const valor =
        document.getElementById(
            "maintenanceValue"
        );


    if (
        !veiculo ||
        !observacao ||
        !valor
    ) {
        return;
    }


    if (
        !veiculo.value ||
        !observacao.value.trim() ||
        !valor.value
    ) {

        mostrarMensagem(
            "Preencha todos os campos."
        );

        return;
    }


    const manutencao = {

        veiculoId:
            veiculo.value,

        observacao:
            observacao.value.trim(),

        valor:
            Number(
                valor.value
            ),

        status:
            "Em andamento",

        data:
            new Date()
                .toISOString()
                .split("T")[0]
    };


    try {

        await cadastrarManutencaoAPI(
            manutencao
        );


        /*
           O veículo passa automaticamente
           para o status de manutenção.
        */

        await atualizarVeiculoAPI(
            veiculo.value,
            {
                status:
                    "manutencao"
            }
        );


        mostrarMensagem(
            "Manutenção criada com sucesso!"
        );


        setTimeout(
            function () {

                irPara(
                    "manutencoes.html"
                );

            },
            800
        );


    } catch (erro) {

        console.error(
            "Erro ao salvar manutenção:",
            erro
        );


        mostrarMensagem(
            "Não foi possível salvar a manutenção."
        );
    }
}


/* =====================================================
   LISTA DE MANUTENÇÕES
===================================================== */

async function carregarListaManutencoes(
    filtro = "todas"
) {

    const container =
        document.querySelector(
            ".maintenance-list"
        );


    if (!container) {
        return;
    }


    try {

        const [
            manutencoes,
            veiculos
        ] =
            await Promise.all([
                buscarManutencoes(),
                buscarVeiculos()
            ]);


        let lista =
            [...manutencoes];


        if (
            filtro === "andamento"
        ) {

            lista =
                lista.filter(
                    function (manutencao) {

                        return manutencaoEstaAtiva(
                            manutencao
                        );
                    }
                );
        }


        if (
            filtro === "concluidas"
        ) {

            lista =
                lista.filter(
                    function (manutencao) {

                        return !manutencaoEstaAtiva(
                            manutencao
                        );
                    }
                );
        }


        if (!lista.length) {

            container.innerHTML = `
                <p style="padding: 30px;">
                    Nenhuma manutenção encontrada.
                </p>
            `;

            atualizarResumoManutencoes(
                manutencoes
            );

            return;
        }


        container.innerHTML =
            lista
                .map(
                    function (manutencao) {

                        const veiculo =
                            veiculos.find(
                                function (item) {

                                    return (
                                        String(
                                            item.id
                                        ) ===
                                        String(
                                            manutencao.veiculoId
                                        )
                                    );
                                }
                            );


                        const nomeVeiculo =
                            veiculo
                                ? `${veiculo.marca || ""} ${veiculo.modelo || ""}`.trim()
                                : "Veículo não encontrado";


                        const placa =
                            veiculo?.placa ||
                            "-";


                        const ano =
                            veiculo?.ano ||
                            "-";


                        const km =
                            veiculo?.quilometragem != null
                                ? Number(
                                    veiculo.quilometragem
                                ).toLocaleString(
                                    "pt-BR"
                                )
                                : "-";


                        const status =
                            manutencao.status ||
                            "Em andamento";


                        const concluida =
                            !manutencaoEstaAtiva(
                                manutencao
                            );


                        const statusTexto =
                            concluida
                                ? "Concluída"
                                : "Em andamento";


                        const statusClasse =
                            concluida
                                ? "completed"
                                : "in-progress";


                        const valor =
                            Number(
                                manutencao.valor || 0
                            ).toLocaleString(
                                "pt-BR",
                                {
                                    style:
                                        "currency",

                                    currency:
                                        "BRL"
                                }
                            );


                        const data =
                            manutencao.data
                                ? new Date(
                                    `${manutencao.data}T00:00:00`
                                ).toLocaleDateString(
                                    "pt-BR"
                                )
                                : "-";


                        return `
                            <article class="maintenance-card">

                                <div
                                    class="maintenance-card-header"
                                >

                                    <div>

                                        <h3>
                                            ${nomeVeiculo}
                                        </h3>

                                        <span>
                                            ${placa}
                                        </span>

                                    </div>


                                    <span
                                        class="status ${statusClasse}"
                                    >
                                        ${statusTexto}
                                    </span>

                                </div>


                                <div
                                    class="maintenance-card-body"
                                >

                                    <p>
                                        <strong>
                                            Ano:
                                        </strong>

                                        ${ano}
                                    </p>


                                    <p>
                                        <strong>
                                            Quilometragem:
                                        </strong>

                                        ${km} km
                                    </p>


                                    <p>
                                        <strong>
                                            Valor:
                                        </strong>

                                        ${valor}
                                    </p>


                                    <p>
                                        <strong>
                                            Data:
                                        </strong>

                                        ${data}
                                    </p>


                                    <p>
                                        <strong>
                                            Observação:
                                        </strong>

                                        ${manutencao.observacao || "-"}
                                    </p>

                                </div>


                               <div
    class="maintenance-card-footer"
>

    <button
        class="btn blue-btn"
        onclick="verDetalhesManutencao('${manutencao.id}')"    >
        Detalhes
    </button>

</div>

                            </article>
                        `;
                    }
                )
                .join("");


        atualizarResumoManutencoes(
            manutencoes
        );


    } catch (erro) {

        console.error(
            "Erro ao carregar manutenções:",
            erro
        );


        container.innerHTML = `
            <p style="padding: 30px;">
                Não foi possível carregar as manutenções.
            </p>
        `;
    }
}

/* =====================================================
   RESUMO DE MANUTENÇÕES
===================================================== */

function atualizarResumoManutencoes(
    manutencoes
) {

    const andamento =
        manutencoes.filter(
            function (manutencao) {

                return manutencaoEstaAtiva(
                    manutencao
                );
            }
        ).length;


    const concluidas =
        manutencoes.filter(
            function (manutencao) {

                return !manutencaoEstaAtiva(
                    manutencao
                );
            }
        ).length;


    const total =
        manutencoes.length;


    const elementoAndamento =
        document.getElementById(
            "maintenance-andamento-count"
        );


    const elementoPronto =
        document.getElementById(
            "maintenance-pronto-count"
        );


    const elementoTotal =
        document.getElementById(
            "maintenance-total-count"
        );


    if (elementoAndamento) {

        elementoAndamento.textContent =
            andamento;
    }


    if (elementoPronto) {

        elementoPronto.textContent =
            concluidas;
    }


    if (elementoTotal) {

        elementoTotal.textContent =
            total;
    }
}


/* =====================================================
   EXCLUIR MANUTENÇÃO
===================================================== */

async function excluirManutencao(
    id
) {

    const confirmar =
        confirm(
            "Tem certeza que deseja excluir esta manutenção?"
        );


    if (!confirmar) {
        return;
    }


    try {

        /*
           Primeiro encontramos a manutenção
           para saber qual veículo pertence a ela.
        */

        const manutencoes =
            await buscarManutencoes();


        const manutencao =
            manutencoes.find(
                function (item) {

                    return (
                        String(item.id) ===
                        String(id)
                    );
                }
            );


        if (!manutencao) {

            mostrarMensagem(
                "Manutenção não encontrada."
            );

            return;
        }


        await excluirManutencaoAPI(
            id
        );


        /*
           Depois da exclusão,
           verifica se ainda existe alguma
           manutenção ativa para o veículo.
        */

        await atualizarStatusVeiculoPelaManutencao(
            manutencao.veiculoId
        );


        mostrarMensagem(
            "Manutenção excluída com sucesso!"
        );


        carregarListaManutencoes();


    } catch (erro) {

        console.error(
            "Erro ao excluir manutenção:",
            erro
        );


        mostrarMensagem(
            "Não foi possível excluir a manutenção."
        );
    }
}

/* =====================================================
   DASHBOARD
===================================================== */

let veiculosDashboard = [];


/* =====================================================
   CARREGAR DASHBOARD
===================================================== */

async function carregarDashboard() {

    try {

        veiculosDashboard =
            await buscarVeiculos();


        atualizarResumoDashboard();

    } catch (erro) {

        console.error(
            "Erro ao carregar Dashboard:",
            erro
        );

    }

}


/* =====================================================
   ATUALIZAR RESUMO
===================================================== */

function atualizarResumoDashboard() {

    const total =
        veiculosDashboard.length;


    const operacionais =
        veiculosDashboard.filter(
            function (veiculo) {

                return (
                    veiculo.status !==
                    "manutencao"
                );

            }
        ).length;


    const emManutencao =
        veiculosDashboard.filter(
            function (veiculo) {

                return (
                    veiculo.status ===
                    "manutencao"
                );

            }
        ).length;


    /* =============================================
       TOTAL DE VEÍCULOS
    ============================================= */

    const totalElement =
        document.getElementById(
            "dashboard-total-veiculos"
        );


    if (totalElement) {

        totalElement.textContent =
            total;

    }


    /* =============================================
       VEÍCULOS OPERACIONAIS
    ============================================= */

    const operacionaisElement =
        document.getElementById(
            "dashboard-operacionais"
        );


    if (operacionaisElement) {

        operacionaisElement.textContent =
            `${operacionais} operacionais`;

    }


    const totalOperacionaisElement =
        document.getElementById(
            "dashboard-total-operacionais"
        );


    if (totalOperacionaisElement) {

        totalOperacionaisElement.textContent =
            operacionais;

    }


    /* =============================================
       VEÍCULOS EM MANUTENÇÃO
    ============================================= */

    const manutencoesElement =
        document.getElementById(
            "dashboard-total-manutencoes"
        );


    if (manutencoesElement) {

        manutencoesElement.textContent =
            emManutencao;

    }

}

/* =====================================================
   MENU MOBILE
===================================================== */

function iniciarMenuMobile() {

    const sidebar =
        document.getElementById("sidebar");

    const toggle =
        document.getElementById("mobileMenuToggle");

    const overlay =
        document.getElementById("mobileMenuOverlay");


    // Se os elementos não existirem na página, não faz nada.
    if (!sidebar || !toggle || !overlay) {
        return;
    }


    function abrirMenu() {

        sidebar.classList.add("mobile-menu-open");

        overlay.classList.add("active");

        toggle.setAttribute(
            "aria-expanded",
            "true"
        );

        toggle.setAttribute(
            "aria-label",
            "Fechar menu"
        );
    }


    function fecharMenu() {

        sidebar.classList.remove("mobile-menu-open");

        overlay.classList.remove("active");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

        toggle.setAttribute(
            "aria-label",
            "Abrir menu"
        );
    }


    toggle.addEventListener(
        "click",
        function () {

            if (
                sidebar.classList.contains("mobile-menu-open")
            ) {

                fecharMenu();

            } else {

                abrirMenu();

            }

        }
    );


    // Fecha ao clicar no fundo escuro.
    overlay.addEventListener(
        "click",
        fecharMenu
    );


    // Fecha ao clicar em um link do menu.
    sidebar.querySelectorAll("a").forEach(
        function (link) {

            link.addEventListener(
                "click",
                fecharMenu
            );

        }
    );


    // Fecha ao pressionar Escape.
    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {
                fecharMenu();
            }

        }
    );


    // Fecha se a tela voltar ao tamanho desktop.
    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {
                fecharMenu();
            }

        }
    );

}

/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =============================================
           MATERIALIZE
        ============================================= */

        if (
            typeof M !== "undefined" &&
            M.AutoInit
        ) {

            M.AutoInit();

        }

        iniciarMenuMobile();


        /* =============================================
           NOVO VEÍCULO
        ============================================= */

        const vehicleForm =
            document.getElementById(
                "vehicleForm"
            );


        if (vehicleForm) {

            iniciarCadastroVeiculo();


            vehicleForm.addEventListener(
                "submit",
                salvarVeiculo
            );

        }


        /* =============================================
           MEUS VEÍCULOS
        ============================================= */

        const vehiclesContainer =
            document.getElementById(
                "vehicles-cards-container"
            );


        if (vehiclesContainer) {

            carregarListaVeiculos();

        }


 if (
    window.location.pathname.includes("detalhes.html")
) {
    carregarDetalhes();
}


        /* =============================================
           NOVA MANUTENÇÃO
        ============================================= */

        const maintenanceForm =
            document.getElementById(
                "maintenanceForm"
            );


        if (maintenanceForm) {

            if (
                typeof M !== "undefined"
            ) {

                M.FormSelect.init(
                    document.querySelectorAll(
                        "select"
                    )
                );

            }


            carregarVeiculosManutencao();


            maintenanceForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();

                    salvarManutencao();

                }
            );

        }


        /* =============================================
           LISTA DE MANUTENÇÕES
        ============================================= */

        const maintenanceList =
            document.querySelector(
                ".maintenance-list"
            );


        if (maintenanceList) {

            carregarListaManutencoes();

            iniciarFiltrosManutencoes();

        }


        /* =============================================
           DASHBOARD
        ============================================= */

        if (
            document.getElementById(
                "dashboard-total-veiculos"
            )
        ) {

            carregarDashboard();

        }

    }
);


/* =====================================================
   FUNÇÕES USADAS PELO HTML
===================================================== */

window.irPara = irPara;
window.novaManutencao = novaManutencao;
window.verDetalhes = verDetalhes;
window.verDetalhesManutencao = verDetalhesManutencao;
window.excluirManutencao = excluirManutencao;

