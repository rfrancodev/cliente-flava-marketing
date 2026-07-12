import { IMAGES } from "./assets/images";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
}

export interface ClientLogo {
  name: string;
  shortName: string;
  color: string;
  text: string;
  image: string;
  category: "moda" | "beleza" | "joias" | "educacao" | "todos";
}

export interface PortfolioCase {
  id: string;
  category: "moda" | "beleza" | "joias" | "educacao";
  categoryLabel: string;
  clientName: string;
  instagramHandle: string;
  instagramUrl: string;
  description: string;
  videoCaption: string;
  coverImage: string;
  accentColor: string;
  videoDurationSeconds: number;
  likes: string;
  comments: string;
  details: string[];
}

export interface DesignPortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  color: string;
  description: string;
}

export const CLIENTS: ClientLogo[] = [
  { 
    name: "Milu Tecidos", 
    shortName: "MILU", 
    color: "bg-rose-900 text-rose-100 border-rose-500", 
    text: "MT", 
    image: IMAGES.clientMilu,
    category: "moda"
  },
  { 
    name: "Colégio Del Rey", 
    shortName: "Del Rey", 
    color: "bg-blue-900 text-blue-100 border-blue-500", 
    text: "DR", 
    image: IMAGES.clientDelRey,
    category: "educacao"
  },
  { 
    name: "Luluzinha Joias", 
    shortName: "Luluzinha", 
    color: "bg-amber-950 text-amber-100 border-amber-600", 
    text: "LJ", 
    image: IMAGES.clientLuluzinha,
    category: "joias"
  },
  { 
    name: "Elly Picanso Studio 360", 
    shortName: "Studio 360", 
    color: "bg-purple-900 text-purple-100 border-purple-500", 
    text: "EP", 
    image: IMAGES.clientStudio360,
    category: "beleza"
  },
  { 
    name: "Fortaleza Móveis", 
    shortName: "Fortaleza", 
    color: "bg-stone-900 text-stone-100 border-stone-600", 
    text: "FM", 
    image: IMAGES.clientFortaleza,
    category: "todos"
  },
];

export const SERVICES: ServiceItem[] = [
  { id: "s1", name: "Posicionamento de Marca", description: "Construção de uma identidade forte e memorável para destacar seu negócio na mente do consumidor." },
  { id: "s2", name: "Definição de Estratégia", description: "Planejamento tático de canais, funis de conteúdo e calendários de postagem focados em conversão." },
  { id: "s3", name: "Gestão de Redes Sociais", description: "Gerenciamento completo do Instagram, TikTok e outras mídias sociais para crescimento orgânico." },
  { id: "s4", name: "Captação de Fotos e Vídeos", description: "Direção criativa e captação de materiais audiovisuais profissionais para sua empresa." },
  { id: "s5", name: "Edição de Vídeos (Reels & TikTok)", description: "Cortes dinâmicos, efeitos modernos, legendas atraentes e áudios que geram alto engajamento." },
  { id: "s6", name: "Criação de Conteúdo", description: "Desenvolvimento de roteiros estratégicos, posts de carrossel, histórias e interações diárias." },
  { id: "s7", name: "Design para Redes Sociais", description: "Identidade visual premium aplicada a cada publicação para transmitir sofisticação." },
  { id: "s8", name: "UGC (User Generated Content)", description: "Criação de vídeos autênticos de formato 'criador-usuário', conectando-se diretamente com a dor do cliente." },
  { id: "s9", name: "Collab de Produtos e Serviços", description: "Estratégia de parcerias e promoções cruzadas para ampliar o alcance e reputação da marca." },
  { id: "s10", name: "Análise de Métricas e Resultados", description: "Relatórios mensais de performance com otimização contínua de ROI e alcance." },
];

export const PRODUCTS: ProductItem[] = [
  { id: "p1", name: "Biolink Personalizado", description: "Página de links estratégica, otimizada para direcionar tráfego para WhatsApp e catálogo." },
  { id: "p2", name: "Landing Pages Profissionais", description: "Páginas de vendas de altíssima conversão para lançamentos ou serviços empresariais." },
  { id: "p3", name: "Catálogo Digital Interativo", description: "Apresentação moderna de produtos para facilitar a decisão de compra imediata do cliente." },
  { id: "p4", name: "Configuração de WhatsApp Business", description: "Estruturação de funis, mensagens automáticas e catálogo integrado para vendas ágeis." },
  { id: "p5", name: "Cobertura de Eventos Corporativos", description: "Captação de conteúdo dinâmico em tempo real para stories e reels durante eventos da sua empresa." },
  { id: "p6", name: "Desenvolvimento de Site Institucional", description: "Presença web sólida, rápida e profissional para credibilidade imediata da sua marca." },
  { id: "p7", name: "Gestão de Tráfego Pago", description: "Anúncios patrocinados no Meta Ads e Google Ads focados em captação de leads e vendas diretas." },
];

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    id: "case-moda",
    category: "moda",
    categoryLabel: "Moda & Tecidos",
    clientName: "Milu Tecidos",
    instagramHandle: "@milutecidos",
    instagramUrl: "https://www.instagram.com/milutecidos",
    description: "Criação de conteúdo focado em demonstrar a qualidade dos tecidos 100% algodão e engajamento divertido com a audiência.",
    videoCaption: "Hoje eu vim falar com vocês sobre os tecidos 100% algodão. Quando o marketing quer gravar vídeos... Oi genteee! Bom dia pessoal!",
    coverImage: IMAGES.caseModa, // Elegant fabrics
    accentColor: "from-rose-800 to-amber-700",
    videoDurationSeconds: 15,
    likes: "1.4k",
    comments: "142",
    details: ["Aumento de 42% nas mensagens diretas sobre o tecido de algodão", "Roteiro focado em quebrar a objeção de encolhimento do tecido", "Uso de humor corporativo focado no público-alvo de costureiras e estilistas"]
  },
  {
    id: "case-beleza",
    category: "beleza",
    categoryLabel: "Espaço de Beleza",
    clientName: "Elly Picanso | Studio 360",
    instagramHandle: "@ellypicanco_studio360",
    instagramUrl: "https://www.instagram.com/ellypicanco_studio360", // note slide link variation
    description: "Posicionamento premium focado em contar a história de mais de 40 anos de sofisticação e a evolução do design de sobrancelhas.",
    videoCaption: "Eu tive que me adaptar a todas as mudanças no Design de Sobrancelhas nas últimas décadas... Um trabalho de naturalidade, sofisticação e autoestima.",
    coverImage: IMAGES.caseBeleza, // Beauty / cosmetology
    accentColor: "from-purple-800 to-pink-700",
    videoDurationSeconds: 20,
    likes: "2.1k",
    comments: "258",
    details: ["Branding humanizado focado na vasta experiência da fundadora", "Geração de autoridade e diferenciação contra concorrentes 'low-cost'", "Formatos dinâmicos gerando mais de 15 agendamentos diretos via direct por vídeo"]
  },
  {
    id: "case-joias",
    category: "joias",
    categoryLabel: "Joias e Semijoias",
    clientName: "Luluzinha Joias e Semijoias",
    instagramHandle: "@luluzinhajoiasesemijoias",
    instagramUrl: "https://www.instagram.com/luluzinhajoiasesemijoias",
    description: "Vídeos de UGC dinâmicos mostrando a experiência tátil de revelação e uso das joias, focados em recrutar novas revendedoras.",
    videoCaption: "Semijoias Atemporais 100% Consignado. Seja uma REVENDEDORA. Veja esse brilho! Joias que transformam qualquer visual.",
    coverImage: IMAGES.caseJoias, // Fine jewelry
    accentColor: "from-amber-900 to-amber-600",
    videoDurationSeconds: 12,
    likes: "980",
    comments: "89",
    details: ["Apresentação visual rica (macro detalhes das peças)", "Vídeo focado no gatilho mental da oportunidade financeira ('Seja uma revendedora')", "Aumento expressivo no engajamento nos stories com enquetes interativas"]
  },
  {
    id: "case-educacao",
    category: "educacao",
    categoryLabel: "Educação Particular",
    clientName: "Colégio Del Rey",
    instagramHandle: "@colegiodelrey",
    instagramUrl: "https://www.instagram.com/colegiodelrey",
    description: "Vídeos alegres e humanizados retratando a vida escolar real, ensaios da banda e a conexão entre pais, alunos e escola.",
    videoCaption: "Escola particular - Preparação de verdade para o ENEM e para a Vida! Olha a minha mãe orgulhosa ali... Viva o desfile da nossa banda!",
    coverImage: IMAGES.caseEducacao, // Education school
    accentColor: "from-blue-900 to-sky-700",
    videoDurationSeconds: 18,
    likes: "3.2k",
    comments: "412",
    details: ["Humanização da marca da escola particular para criar laços emocionais com os pais", "Engajamento altíssimo da comunidade de alunos compartilhando e comentando", "Demonstração de atividades práticas que geram valor além da sala de aula tradicional"]
  }
];

export const DESIGNS: DesignPortfolioItem[] = [
  {
    id: "d1",
    title: "Profissão Beleza",
    subtitle: "A história contada por Elly Picanço",
    client: "Elly Picanso Studio 360",
    color: "from-amber-950 to-stone-900",
    description: "Criação de identidade editorial para capas de destaque e postagens de carrossel biográficas."
  },
  {
    id: "d2",
    title: "Coleção Brisa",
    subtitle: "Campanha de Semijoias Atemporais",
    client: "Luluzinha Joias",
    color: "from-emerald-950 to-stone-900",
    description: "Design elegante focado em minimalismo com tipografia serifada luxuosa para catálogo digital."
  },
  {
    id: "d3",
    title: "Enem & Vida",
    subtitle: "Campanha de Matrículas 2026",
    client: "Colégio Del Rey",
    color: "from-blue-950 to-stone-900",
    description: "Identidade visual forte para captação de novos alunos unindo as cores tradicionais da instituição."
  },
  {
    id: "d4",
    title: "Algodão Premium",
    subtitle: "Lançamento de Malhas e Tecidos",
    client: "Milu Tecidos",
    color: "from-rose-950 to-stone-900",
    description: "Layouts harmônicos com texturas realistas e paletas quentes para engajar no Instagram Stories."
  }
];
