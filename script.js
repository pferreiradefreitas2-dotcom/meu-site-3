// Lista expandida de ideias no nicho de jogos e tecnologia
const ideias = [
  "Review de consoles da nova geração",
  "Top 5 jogos indies de 2026",
  "Comparação de placas de vídeo para gamers",
  "História dos jogos retrô",
  "Testando acessórios gamer (headsets, teclados)",
  "Como montar um PC gamer econômico",
  "Tendências em realidade virtual",
  "Os melhores mods para jogos populares",
  "Impacto da IA nos jogos modernos",
  "Dicas para streamers iniciantes",
  "Explorando jogos mobile inovadores",
  "Análise de serviços de cloud gaming",
  "Comparação entre Xbox Game Pass e PS Plus",
  "Jogos que marcaram a década",
  "Tecnologias gráficas: Ray Tracing explicado",
  "Como escolher o melhor monitor gamer",
  "O futuro dos eSports",
  "Jogos educativos com foco em tecnologia",
  "Testando periféricos gamer acessíveis",
  "Entrevista com desenvolvedores independentes",
  "Os melhores jogos cooperativos online",
  "Explorando engines de jogos (Unity, Unreal)",
  "Segurança digital para gamers",
  "Realidade aumentada aplicada em jogos",
  "Top 10 jogos de estratégia",
  "Comparação de desempenho entre GPUs",
  "História dos MMORPGs",
  "Como otimizar seu PC para jogos",
  "Jogos que usam blockchain",
  "O impacto da tecnologia 5G nos games"
];

let usadas = [];

function novaIdeia() {
  // Reset quando todas já foram usadas
  if (usadas.length === ideias.length) {
    usadas = [];
  }
  
  // Filtra apenas as ideias ainda não usadas
  let restante = ideias.filter(i => !usadas.includes(i));
  
  // Sorteia uma ideia aleatória
  let sorteio = restante[Math.floor(Math.random() * restante.length)];
  
  // Marca como usada
  usadas.push(sorteio);
  
  // Exibe no site
  document.getElementById("output").innerText = "💡 Ideia: " + sorteio;
}
