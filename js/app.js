// Dados dos tutoriais
const tutoriais = [
    {
        titulo: "sTrogonoff de Frango",
        descricao: "Aprenda a fazer o melhor Strogonoff de frango do mundo!",
        link: "tutorial/tutorial.html"
    },
    {
        titulo: "Cookies Americanos",
        descricao: "O melhores da região.",
        link: "tutorial/tutorialcookies.html"
    },
    {
        titulo: "Bolo de Cenoura",
        descricao: "Bolo de Cenoura, rápido e fácil.",
        link: "tutorial/tutorialbolo.html"
    }
];

// Função para renderizar tutoriais dinamicamente
function renderizarTutoriais(lista, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    if (lista.length === 0) {
        container.innerHTML = "<p>Nenhum tutorial encontrado.</p>";
        return;
    }
    lista.forEach(tutorial => {
        const card = document.createElement("div");
        card.className = "tutorial-card";
        card.innerHTML = `
            <h3>${tutorial.titulo}</h3>
            <p>${tutorial.descricao}</p>
            <a href="${tutorial.link}">Ver mais</a>
        `;
        container.appendChild(card);
    });
}

// Função de busca em tempo real
function buscarTutoriais(termo) {
    termo = termo.toLowerCase();
    return tutoriais.filter(tutorial =>
        tutorial.titulo.toLowerCase().includes(termo) ||
        tutorial.descricao.toLowerCase().includes(termo)
    );
}