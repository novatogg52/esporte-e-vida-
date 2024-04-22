// script.js

window.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    // Simulação de dados de artigos
    const articles = [
        { title: 'Como melhorar seu desempenho no basquete', content: 'Pratique regularmente, Fortaleça sua condição física, Trabalhe em suas habilidades técnicas etc... ' },
        { title: 'Os melhores equipamentos para corrida', content: 'Tênis de corrida, Roupas adequadas, Meias de corrida, Relógio ou monitor de atividade, Óculos de sol e protetor solar, Cinto de hidratação ou garrafa de água portátil. etc... ' },
        { title: 'Dicas para uma dieta saudável para atletas', content: 'Hidratação adequada, Proteína adequada, Refeições equilibradas, Gorduras saudáveis. etc... ' },
        { title :'como ser um craque de bola', content : 'Pratique consistentemente, Trabalhe em sua forma física, Estude o jogo, Aprimore suas habilidades técnicas, Mantenha uma mentalidade positiva e determinada, Aprenda com os erros, Treine em equipe, Esteja sempre aberto ao aprendizado, Comprometa-se com o sucesso.'},
        { title :'melhore tatica de contra ataque', content : 'Rapidez na transição, Posicionamento inteligente, Movimentação fora da bola, Passe preciso, Finalização clínica, Comunicação.'}, 
    ];

    // Função para exibir os artigos
    function renderArticles() {
        mainContent.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.content}</p>
            `;
            mainContent.appendChild(articleElement);
        });
    }

    // Chamar a função para exibir os artigos quando a página carregar
    renderArticles();
});