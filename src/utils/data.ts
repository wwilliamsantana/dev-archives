interface PostsProps {
  theme: string
  content: {
    subject: string
    content: {
      title: string
      content: string
    }[]
  }[]
}

export const posts: PostsProps[] = [
  {
    theme: 'Front-end',
    content: [
      {
        subject: 'Reactjs',
        content: [
          {
            title: 'Componentes',
            content:
              '**Componentes** são blocos de código *reutilizáveis* e isolados que retornam elementos `React`. Eles são a base de qualquer aplicação `React` e podem ser de dois tipos: `funcionais` (mais modernos, com hooks) ou baseados em `classes`.\n\n> **Exemplo de componente funcional:**\n```jsx\nfunction Botao(props) {\n  return <button>{props.label}</button>;\n}\n```',
          },
          {
            title: 'JSX',
            content:
              '**JSX** (JavaScript XML) é uma extensão de sintaxe para `JavaScript` que permite escrever estruturas semelhantes a `HTML` diretamente no código. Ele é transpilado pelo `Babel` para chamadas `React.createElement()`, tornando o código mais *declarativo* e legível.',
          },
          {
            title: 'Props',
            content:
              '**Props** (abreviação de "propriedades") são objetos usados para passar dados de um componente pai para um componente filho. Elas são *somente leitura*, o que significa que um componente filho não pode alterar as `props` que recebeu, garantindo um fluxo de dados unidirecional.',
          },
          {
            title: 'Hooks',
            content:
              '**Hooks** são funções especiais que permitem "enganchar" em funcionalidades do `React` a partir de componentes funcionais. Eles revolucionaram a forma de escrever `React`.\n\n* `useState`: Adiciona estado a um componente.\n* `useEffect`: Executa efeitos colaterais (ex: chamadas `API`, manipulação do `DOM`).\n* `useContext`: Consome dados de um `Context` sem precisar passar `props` manualmente por vários níveis.',
          },
        ],
      },
      {
        subject: 'Next.js',
        content: [
          {
            title: 'Introdução',
            content:
              '**Next.js** é um framework `React` para produção. Ele oferece uma estrutura robusta com renderização híbrida (`SSG` e `SSR`), roteamento baseado em sistema de arquivos, otimização de imagens e `API routes` integradas, simplificando o desenvolvimento de aplicações completas.',
          },
          {
            title: 'SSG',
            content:
              '**Static Site Generation (SSG)** gera as páginas `HTML` no momento da `build`. É ideal para sites onde o conteúdo não muda a cada requisição (blogs, portfólios). Usa a função `getStaticProps` para buscar dados na `build`.',
          },
          {
            title: 'ISR',
            content:
              '**Incremental Static Regeneration (ISR)** é uma evolução do `SSG`. Permite que páginas estáticas sejam recriadas em segundo plano após um certo intervalo de tempo (`revalidate`), sem a necessidade de uma nova `build` completa. Ideal para conteúdos que mudam com alguma frequência.',
          },
          {
            title: 'SSR',
            content:
              '**Server-side Rendering (SSR)** gera o `HTML` da página no servidor *a cada requisição*. É útil para páginas com dados altamente dinâmicos ou personalizados (ex: feed de rede social, dashboard). Usa a função `getServerSideProps` para buscar dados em tempo real.',
          },
        ],
      },
      {
        subject: 'Vue.js',
        content: [
          {
            title: 'Reatividade',
            content:
              'O sistema de **reatividade** do `Vue.js` rastreia as dependências de dados e atualiza automaticamente o `DOM` quando esses dados mudam. Isso torna o gerenciamento de estado simples e eficiente, sem a necessidade de manipulação manual.',
          },
          {
            title: 'Componentes Single-File',
            content:
              'Os **Componentes Single-File (`.vue`)** são uma marca registrada do `Vue`. Eles encapsulam `template` (HTML), `lógica` (JavaScript/TypeScript) e `estilo` (CSS/SCSS) em um único arquivo, promovendo uma excelente organização e modularidade.',
          },
          {
            title: 'Options API vs Composition API',
            content:
              '**Vue** oferece duas formas de escrever componentes:\n\n* A `Options API` organiza o código em opções (`data`, `methods`, `computed`). É ótima para projetos mais simples.\n* A `Composition API` permite agrupar lógicas relacionadas, tornando o código mais escalável e reutilizável, similar aos `hooks` do `React`.',
          },
        ],
      },
      {
        subject: 'CSS Moderno',
        content: [
          {
            title: 'Flexbox',
            content:
              '**Flexbox** é um modelo de layout *unidimensional* projetado para organizar, alinhar e distribuir espaço entre itens em um contêiner. Propriedades chave incluem `display: flex`, `justify-content` e `align-items`.',
          },
          {
            title: 'Grid Layout',
            content:
              '**CSS Grid** é um sistema de layout *bidimensional* (linhas e colunas), ideal para criar layouts complexos e responsivos de forma mais direta que o `Flexbox`. É perfeito para a estrutura geral de uma página.',
          },
          {
            title: 'Responsividade',
            content:
              '**Responsividade** é a prática de criar interfaces que se adaptam a diferentes tamanhos de tela. As principais técnicas são:\n\n* `media queries`: Aplicam estilos com base nas características do dispositivo (ex: largura da tela).\n* `Unidades relativas`: `vw`, `vh`, `%`, `em`, `rem`.\n* `Layouts fluidos`: Uso de `Flexbox` e `Grid` para criar estruturas flexíveis.',
          },
        ],
      },
      {
        subject: 'TypeScript no Front-end',
        content: [
          {
            title: 'Tipos básicos',
            content:
              '**TypeScript** é um superset do `JavaScript` que adiciona tipagem estática. Isso permite definir tipos para variáveis e funções (`string`, `number`, `boolean`, `Array<T>`), o que ajuda a prevenir bugs em tempo de desenvolvimento.',
          },
          {
            title: 'Interfaces e Tipos',
            content:
              '**Interfaces** e **types** são usados para definir a "forma" de um objeto. `Interfaces` são ótimas para modelar objetos e podem ser estendidas, enquanto `types` são mais flexíveis e podem usar recursos como `união` (`|`) e `interseção` (`&`).',
          },
        ],
      },
      {
        subject: 'Styled Components',
        content: [
          {
            title: 'CSS-in-JS',
            content:
              '**CSS-in-JS** é uma abordagem onde o `CSS` é escrito dentro de arquivos `JavaScript`. `Styled Components` usa `template literals` para criar componentes `React` com estilos encapsulados, evitando conflitos de nomes de classes.',
          },
          {
            title: 'Temas',
            content:
              'Com `Styled Components`, é possível criar **temas** globais usando um `ThemeProvider`. Isso permite definir variáveis de design (cores, fontes, espaçamentos) em um local e acessá-las em qualquer componente, facilitando a consistência e a criação de modos (ex: dark/light).',
          },
        ],
      },
      {
        subject: 'JavaScript Moderno',
        content: [
          {
            title: 'ES6+',
            content:
              '**ES6+** refere-se às versões do `ECMAScript` (padrão do `JavaScript`) a partir de 2015. Introduziu recursos essenciais que modernizaram a linguagem, como:\n\n* `let` e `const` para declaração de variáveis.\n* `arrow functions` para sintaxe de função mais concisa.\n* `promises` para lidar com assincronismo.\n* `destructuring` para extrair valores de objetos e arrays.',
          },
          {
            title: 'Async/Await',
            content:
              '**Async/Await** é "açúcar sintático" sobre as `Promises`. Permite escrever código assíncrono que se parece e se comporta como código síncrono, tornando-o muito mais fácil de ler, escrever e depurar.',
          },
        ],
      },
    ],
  },
  {
    theme: 'Back-end',
    content: [
      {
        subject: 'Node.js',
        content: [
          {
            title: 'Express',
            content:
              '**Express** é o framework web mais popular para `Node.js`. É minimalista e não opinativo, fornecendo uma base sólida para criar `APIs REST` e aplicações web. Seu ecossistema de `middlewares` é extremamente poderoso.',
          },
          {
            title: 'Middlewares',
            content:
              'Em **Express**, um **middleware** é uma função que tem acesso aos objetos de requisição (`req`), resposta (`res`) e à próxima função de `middleware` no ciclo (`next`). É usado para tarefas como `logging`, `autenticação`, `parsing` de `JSON`, etc.',
          },
          {
            title: 'Rotas',
            content:
              '**Rotas** em `Express` definem como a aplicação responde a uma requisição de cliente para um `endpoint` específico, que consiste em um método `HTTP` (`GET`, `POST`) e um caminho (`URI`). Elas direcionam a requisição para a lógica de `controller` apropriada.',
          },
          {
            title: 'API REST',
            content:
              'Uma **API REST** (Representational State Transfer) é um estilo arquitetural para projetar aplicações em rede. Ela usa os métodos `HTTP` padrão, é `stateless` (sem estado no servidor) e opera sobre `recursos` representados geralmente em `JSON`.',
          },
        ],
      },
      {
        subject: 'Python com Django',
        content: [
          {
            title: 'O que é Django',
            content:
              '**Django** é um framework `Python` de alto nível que segue o princípio "Don\'t Repeat Yourself" (DRY). Ele vem com muitas funcionalidades "out-of-the-box", como `ORM`, `admin`, `autenticação` e `sistema de templates`.',
          },
          {
            title: 'ORM do Django',
            content:
              'O **Object-Relational Mapper (ORM)** do `Django` permite que você defina seu modelo de dados em classes `Python`. O `Django` então traduz essas classes em tabelas de banco de dados e fornece uma `API` para interagir com os dados sem escrever uma linha de `SQL`.',
          },
          {
            title: 'Django REST Framework',
            content:
              'O **Django REST Framework (DRF)** é uma biblioteca que estende o `Django` para facilitar a construção de `APIs REST`. Ele fornece `serializers` para converter dados complexos, `autenticação` baseada em token e `views` genéricas para acelerar o desenvolvimento.',
          },
        ],
      },
      {
        subject: 'Banco de Dados',
        content: [
          {
            title: 'Prisma ORM',
            content:
              '**Prisma** é um `ORM` de nova geração para `Node.js` e `TypeScript`. Seu diferencial é o `Prisma Client`, um construtor de consultas totalmente tipado que previne erros e melhora a produtividade do desenvolvedor.',
          },
          {
            title: 'Migrations',
            content:
              '**Migrations** são essenciais para o desenvolvimento em equipe. São arquivos de código (geralmente `SQL`) que descrevem uma mudança no esquema do banco de dados. Executar as `migrations` aplica essas mudanças de forma segura e controlada em qualquer ambiente.',
          },
          {
            title: 'Seed',
            content:
              'O processo de **seed** executa um script para popular o banco de dados com dados iniciais. É fundamental para ter um ambiente de `desenvolvimento` consistente, para `testes` automatizados e para demonstrações de produtos.',
          },
          {
            title: 'Relacional vs Não-relacional',
            content:
              '**Relacionais (SQL)**, como `PostgreSQL`, são ótimos para dados estruturados com relações complexas, garantindo consistência (`ACID`). **Não-relacionais (NoSQL)**, como `MongoDB`, são flexíveis e escaláveis, ideais para dados não estruturados ou de grande volume.',
          },
        ],
      },
      {
        subject: 'Autenticação',
        content: [
          {
            title: 'Sessão vs Token',
            content:
              '**Sessões** armazenam um `ID` no cookie do cliente e os dados no servidor (*stateful*), sobrecarregando o `back-end`. **Tokens (JWT)** armazenam os dados no próprio cliente (*stateless*), facilitando a escalabilidade horizontal de `APIs`.',
          },
          {
            title: 'Refresh Token',
            content:
              'O **Refresh Token** é um token de longa duração, armazenado de forma segura, cujo único propósito é solicitar um novo `Access Token` (de curta duração) quando este expira. Isso melhora a segurança, pois o `Access Token` pode ser exposto com menos risco.',
          },
        ],
      },
      {
        subject: 'Java',
        content: [
          {
            title: 'Spring Boot',
            content:
              '**Spring Boot** é uma camada sobre o ecossistema `Spring` que simplifica drasticamente a configuração. Ele adota convenções para `auto-configuração`, permitindo criar aplicações `Java` prontas para produção com o mínimo de código boilerplate.',
          },
          {
            title: 'Hibernate e JPA',
            content:
              '**JPA** é a especificação padrão do `Java` para persistência de dados. **Hibernate** é a sua implementação mais famosa, um `ORM` que mapeia objetos `Java` para tabelas de bancos de dados relacionais, permitindo a manipulação de dados de forma orientada a objetos.',
          },
          {
            title: 'Testes com JUnit',
            content:
              '**JUnit** é o framework de testes unitários mais utilizado no mundo `Java`. A versão 5 (`JUnit Jupiter`) introduziu uma arquitetura modular e novos recursos, como anotações (`@Test`, `@BeforeEach`) e `assertions`, para escrever testes claros e robustos.',
          },
        ],
      },
    ],
  },
  {
    theme: 'Arquitetura de Software',
    content: [
      {
        subject: 'Conceitos Fundamentais',
        content: [
          {
            title: 'Camadas de Software',
            content:
              'A **arquitetura em camadas** divide as responsabilidades do software em grupos lógicos. A separação mais comum é:\n\n* **Camada de Apresentação:** Interface com o usuário (`UI`).\n* **Camada de Domínio/Negócio:** Regras e lógica de negócio.\n* **Camada de Dados/Persistência:** Acesso ao banco de dados.',
          },
          {
            title: 'Clean Architecture',
            content:
              'Proposta por Robert C. Martin ("Uncle Bob"), a **Clean Architecture** organiza o software em círculos concêntricos. A regra principal é que as dependências só podem apontar para dentro, protegendo as regras de negócio de mudanças em tecnologias externas (frameworks, UI, banco de dados).',
          },
          {
            title: 'MVC',
            content:
              '**MVC (Model-View-Controller)** é um padrão popular para organizar aplicações com interfaces gráficas. A `View` exibe os dados do `Model`. O `Controller` recebe a entrada do usuário e atualiza o `Model`. O `Model` notifica a `View` sobre mudanças.',
          },
          {
            title: 'Monólito vs Microsserviços',
            content:
              'Um **monólito** é uma única unidade de `deploy`, simples de desenvolver e implantar no início. **Microsserviços** quebram a aplicação em serviços independentes e especializados, o que melhora a `escalabilidade`, `resiliência` e permite o uso de diferentes tecnologias por serviço.',
          },
        ],
      },
      {
        subject: 'Mensageria e Eventos',
        content: [
          {
            title: 'Fila vs Tópico',
            content:
              'Sistemas de mensageria usam dois modelos principais:\n\n* **Fila (Queue):** Uma mensagem é enviada para a fila e consumida por *um único* worker (`point-to-point`).\n* **Tópico (Topic):** Uma mensagem é publicada no tópico e entregue a *todos* os assinantes (`publish/subscribe`).',
          },
          {
            title: 'RabbitMQ',
            content:
              '**RabbitMQ** é um *message broker* maduro e robusto que implementa o protocolo `AMQP`. É excelente para `filas de tarefas`, processamento assíncrono e cenários que exigem roteamento complexo de mensagens e garantia de entrega.',
          },
          {
            title: 'Kafka',
            content:
              '**Apache Kafka** é mais do que um broker; é uma plataforma de *streaming de eventos*. Ele armazena eventos em um `log` distribuído e imutável, permitindo que múltiplos consumidores leiam os dados em tempo real ou retroativamente. Ideal para `data pipelines` e `analytics`.',
          },
          {
            title: 'Event-driven Architecture',
            content:
              'A **Arquitetura Orientada a Eventos (EDA)** é um paradigma onde os serviços reagem a `eventos` (mudanças de estado). Isso promove `desacoplamento` total, pois os produtores de eventos não sabem quem são os consumidores, permitindo que o sistema evolua de forma flexível.',
          },
        ],
      },
      {
        subject: 'Padrões Arquiteturais',
        content: [
          {
            title: 'Hexagonal',
            content:
              'A **Arquitetura Hexagonal** (ou Portas e Adaptadores) busca isolar a lógica de negócio da aplicação. As "portas" são as `interfaces` que definem como a lógica interage, e os "adaptadores" são as implementações concretas que conectam a portas a tecnologias externas (ex: um adaptador `REST`, um adaptador `PostgreSQL`).',
          },
          {
            title: 'CQRS',
            content:
              '**CQRS** (Command Query Responsibility Segregation) propõe a separação dos modelos de dados para *escrita* (`Commands`) e *leitura* (`Queries`). Isso permite otimizar cada lado de forma independente: o modelo de escrita pode ser normalizado, enquanto o de leitura pode ser desnormalizado para performance.',
          },
          {
            title: 'Domain-Driven Design (DDD)',
            content:
              '**DDD** é uma abordagem para software complexo que coloca o foco no *domínio de negócio*. Seus principais blocos de construção são:\n\n* **Linguagem Ubíqua:** Um vocabulário comum entre desenvolvedores e especialistas de domínio.\n* **Agregados:** Um conjunto de objetos de domínio que são tratados como uma única unidade.',
          },
        ],
      },
    ],
  },
  {
    theme: 'Modelagem de Dados',
    content: [
      {
        subject: 'Modelos de Dados',
        content: [
          {
            title: 'Modelo Conceitual',
            content:
              'O **Modelo Conceitual** é o primeiro e mais abstrato nível. Ele foca em apresentar as `entidades`, `relacionamentos` e `atributos` de forma macro, alinhada à visão de negócio, sem se preocupar com detalhes técnicos. Ferramenta comum: `Diagrama Entidade-Relacionamento (ER)`.',
          },
          {
            title: 'Modelo Lógico',
            content:
              'O **Modelo Lógico** é uma evolução do conceitual, adicionando mais detalhes como `tipos de dados` para os atributos e `chaves primárias/estrangeiras`. Ele é independente de qual SGBD será usado, focando na estrutura e nas regras dos dados.',
          },
          {
            title: 'Modelo Físico',
            content:
              'O **Modelo Físico** é a representação de como o modelo de dados será implementado em um `SGBD` específico. Ele inclui nomes exatos de tabelas e colunas, `índices`, `constraints` e outras otimizações de performance específicas da tecnologia.',
          },
          {
            title: 'Normalização',
            content:
              'A **Normalização** é um processo formal para organizar as colunas e tabelas de um banco de dados relacional para minimizar a `redundância de dados`. As formas normais (como `1FN`, `2FN`, `3FN`) são um conjunto de regras para atingir esse objetivo e melhorar a `integridade` dos dados.',
          },
        ],
      },
      {
        subject: 'Relacionamentos',
        content: [
          {
            title: '1 para 1',
            content:
              'No relacionamento **1 para 1 (1:1)**, uma linha em uma tabela está ligada a no máximo uma linha em outra tabela. É menos comum, usado para separar dados por segurança, performance, ou para representar uma subclasse (ex: `Pessoa` e `Motorista`).',
          },
          {
            title: '1 para Muitos',
            content:
              'O relacionamento **1 para Muitos (1:N)** é o tipo mais comum. Um registro em uma tabela "pai" (o lado "1") pode estar relacionado a muitos registros em uma tabela "filha" (o lado "N"). Exemplo: uma `Categoria` tem vários `Produtos`.',
          },
          {
            title: 'Muitos para Muitos',
            content:
              'O relacionamento **Muitos para Muitos (N:N)** ocorre quando muitos registros em uma tabela podem se relacionar com muitos em outra. Ex: `Alunos` e `Disciplinas`. É implementado com uma *tabela de junção* (ou tabela associativa) que contém as chaves estrangeiras de ambas as tabelas.',
          },
          {
            title: 'Cardinalidade',
            content:
              'A **Cardinalidade** especifica o número de instâncias de uma entidade que podem estar associadas a cada instância de outra entidade. Além de definir o tipo (`1:1`, `1:N`, `N:N`), também define a *obrigatoriedade* (ex: 0 ou 1, 1 ou muitos).',
          },
        ],
      },
      {
        subject: 'Diagrama ER',
        content: [
          {
            title: 'Entidades e Atributos',
            content:
              'No **Diagrama Entidade-Relacionamento (ER)**:\n\n* **Entidades** são objetos ou conceitos do mundo real sobre os quais queremos armazenar dados (ex: `Carro`, `Pedido`). São representadas por retângulos.\n* **Atributos** são as propriedades que descrevem uma entidade (ex: `cor`, `ano`).',
          },
          {
            title: 'Relacionamentos',
            content:
              'Os **Relacionamentos** conectam as entidades e são representados por losangos. Eles descrevem como as entidades interagem e possuem `cardinalidade` para indicar as regras de negócio (ex: "um `Cliente` *faz* muitos `Pedidos`").',
          },
        ],
      },
    ],
  },
  {
    theme: 'Testes de Software',
    content: [
      {
        subject: 'Testes Unitários',
        content: [
          {
            title: 'O que são',
            content:
              '**Testes unitários** formam a base da pirâmide de testes. Eles validam a menor unidade de código (uma função, um método) de forma *isolada* do resto do sistema. São rápidos, baratos e essenciais para garantir a lógica correta.',
          },
          {
            title: 'Vitest',
            content:
              '**Vitest** é um framework de testes unitários que se destaca pela sua velocidade e integração nativa com o ecossistema `Vite`. Ele oferece uma `API` compatível com `Jest`, `hot reload` para testes e `mocking` de dependências integrado.',
          },
          {
            title: 'Boas práticas',
            content:
              'Bons testes unitários devem ser **FIRST**:\n\n* **F**ast (Rápidos)\n* **I**solated (Isolados)\n* **R**epeatable (Repetíveis)\n* **S**elf-Validating (Auto-validáveis)\n* **T**imely (Oportunos, escritos no momento certo)',
          },
        ],
      },
      {
        subject: 'Testes de Integração',
        content: [
          {
            title: 'Conceito',
            content:
              '**Testes de integração** verificam se diferentes unidades do software funcionam juntas corretamente. Eles testam a "cola" entre os componentes, como a interação entre uma `API`, seu `banco de dados` e um serviço externo.',
          },
          {
            title: 'Supertest',
            content:
              '**Supertest** é uma biblioteca que facilita o teste de `APIs` `Node.js`. Ela permite fazer requisições `HTTP` ao seu servidor (sem precisar levantá-lo de verdade) e fazer `assertions` sobre a resposta, como o `status code` e o `body`.',
          },
        ],
      },
      {
        subject: 'Testes End-to-End (E2E)',
        content: [
          {
            title: 'Cypress',
            content:
              '**Cypress** é um framework de testes `E2E` que executa diretamente no navegador. Ele oferece uma experiência de desenvolvimento interativa, com `debug` visual, `time-travel` e `reloads` automáticos, tornando a escrita de testes de interface muito mais produtiva.',
          },
          {
            title: 'Playwright',
            content:
              '**Playwright**, da Microsoft, é uma alternativa poderosa ao `Cypress`. Sua principal vantagem é o suporte *cross-browser* real (Chrome, Firefox, WebKit/Safari). Ele também oferece automação em paralelo e recursos avançados para lidar com interações complexas.',
          },
          {
            title: 'Casos de Teste',
            content:
              'Um **caso de teste** é um documento que especifica uma sequência de ações para validar uma funcionalidade. Ele deve conter:\n\n* `ID` único\n* `Descrição` do teste\n* `Passos` para execução\n* `Dados` de entrada\n* `Resultado esperado`',
          },
        ],
      },
      {
        subject: 'TDD',
        content: [
          {
            title: 'Test Driven Development',
            content:
              '**TDD** é um ciclo de desenvolvimento onde o teste guia a implementação. O fluxo é `Red` -> `Green` -> `Refactor`. Escrever o teste primeiro força o desenvolvedor a pensar nos requisitos antes de escrever o código, o que geralmente leva a um design melhor e mais limpo.',
          },
        ],
      },
      {
        subject: 'Cobertura de Testes',
        content: [
          {
            title: 'Coverage Report',
            content:
              'A **cobertura de testes** (`test coverage`) é uma métrica que indica qual porcentagem do seu código-fonte é executada quando a suíte de testes roda. Embora 100% de cobertura não garanta a ausência de bugs, valores baixos indicam áreas críticas não testadas.',
          },
        ],
      },
    ],
  },
  {
    theme: 'DevOps',
    content: [
      {
        subject: 'CI/CD',
        content: [
          {
            title: 'Integração Contínua (CI)',
            content:
              '**CI (Continuous Integration)** é a prática de mesclar o código de todos os desenvolvedores em um repositório central várias vezes ao dia. Cada merge dispara uma `build` e uma `suíte de testes` automatizada para detectar problemas de integração rapidamente.',
          },
          {
            title: 'Entrega Contínua (CD)',
            content:
              '**CD (Continuous Delivery)** é a extensão da `CI`. Além de construir e testar, o `pipeline` de `CD` automaticamente prepara a versão para ser liberada em produção. O `deploy` em produção pode ser um passo manual, mas está a um clique de distância.',
          },
          {
            title: 'GitHub Actions',
            content:
              '**GitHub Actions** permite criar fluxos de trabalho (`workflows`) automatizados diretamente no `GitHub`. É usado para `CI/CD`, mas também para automação de tarefas do repositório, como `rotular issues` ou `publicar pacotes`. Os workflows são definidos em arquivos `.yml`.',
          },
        ],
      },
      {
        subject: 'Docker',
        content: [
          {
            title: 'Conceito',
            content:
              '**Docker** resolve o problema do "funciona na minha máquina". Ele empacota a aplicação, suas bibliotecas e dependências em um **contêiner**, uma unidade leve e portátil que roda de forma consistente em qualquer ambiente que tenha o `Docker` instalado.',
          },
          {
            title: 'Dockerfile',
            content:
              'Um **Dockerfile** é a "receita" para criar uma `imagem Docker`. É um script com comandos sequenciais.\n```dockerfile\n# Usa uma imagem base oficial do Node.js\nFROM node:18-alpine\n\n# Define o diretório de trabalho\nWORKDIR /app\n\n# Copia os arquivos de dependência\nCOPY package*.json ./\n\n# Instala as dependências\nRUN npm install\n\n# Copia o resto do código\nCOPY . .\n\n# Expõe a porta e define o comando de inicialização\nEXPOSE 3000\nCMD ["node", "server.js"]\n```',
          },
          {
            title: 'Docker Compose',
            content:
              'O **Docker Compose** é usado para gerenciar aplicações com múltiplos contêineres (ex: uma `API`, um `banco de dados` e um `cache`). Com um único arquivo `docker-compose.yml`, você pode definir e executar todos os serviços da sua aplicação com o comando `docker-compose up`.',
          },
        ],
      },
      {
        subject: 'Kubernetes (K8s)',
        content: [
          {
            title: 'Orquestração de Contêineres',
            content:
              'Enquanto o `Docker` gerencia contêineres individuais, o **Kubernetes** gerencia *frotas* de contêineres em escala. Ele automatiza tarefas como `load balancing`, `auto-scaling`, `self-healing` (reiniciar contêineres que falham) e `rollouts` de novas versões sem downtime.',
          },
          {
            title: 'Pods, Services e Deployments',
            content:
              'São os blocos de construção do `K8s`:\n\n* **Pods:** A menor unidade implantável; pode conter um ou mais contêineres.\n* **Services:** Fornecem um ponto de acesso estável (um `IP` e `DNS`) para um conjunto de `Pods`.\n* **Deployments:** Descrevem o estado desejado para seus `Pods`, gerenciando a criação e atualização deles.',
          },
          {
            title: 'Infraestrutura como Código (IaC)',
            content:
              '**IaC** é a prática de gerenciar e provisionar infraestrutura através de arquivos de definição legíveis por máquina (código), em vez de configuração manual. Ferramentas como `Terraform`, `Pulumi` e `AWS CloudFormation` permitem criar, modificar e versionar sua infraestrutura de forma segura e repetível.',
          },
        ],
      },
      {
        subject: 'Monitoramento e Observabilidade',
        content: [
          {
            title: 'Logs e Métricas',
            content:
              '**Observabilidade** é a capacidade de entender o estado interno de um sistema a partir de seus dados externos. Seus três pilares são:\n\n* **Logs:** Registros de eventos discretos.\n* **Métricas:** Medições numéricas agregadas ao longo do tempo.\n* **Traces:** Representação de uma requisição enquanto ela passa por múltiplos serviços.',
          },
          {
            title: 'Prometheus e Grafana',
            content:
              'É a dupla mais popular para monitoramento de código aberto. **Prometheus** é um banco de dados de séries temporais que "raspa" (coleta) `métricas` dos seus serviços. **Grafana** conecta-se ao `Prometheus` (e outras fontes) para criar `dashboards` poderosos e alertas visuais.',
          },
        ],
      },
    ],
  },
  {
    theme: 'APIs e Integração',
    content: [
      {
        subject: 'REST vs GraphQL',
        content: [
          {
            title: 'REST',
            content:
              '**REST** é um padrão arquitetural que usa os verbos `HTTP` para operar sobre `recursos` expostos em diferentes `endpoints`. É amplamente conhecido e seu modelo de `caching` é simples e eficaz. Pode sofrer de *over-fetching* (receber mais dados que o necessário) ou *under-fetching* (precisar de múltiplas requisições).',
          },
          {
            title: 'GraphQL',
            content:
              '**GraphQL** é uma linguagem de consulta para `APIs`. O cliente especifica exatamente os dados de que precisa em uma `query`, e o servidor retorna apenas esses dados em uma única requisição. Isso resolve o problema de `over/under-fetching`, mas introduz mais complexidade no `back-end`.',
          },
        ],
      },
      {
        subject: 'Autenticação e Autorização',
        content: [
          {
            title: 'JWT',
            content:
              'Um **JWT** é um token `JSON` assinado digitalmente. Sua estrutura contém 3 partes separadas por pontos (`.`):\n\n1.  **Header:** Metadados, como o algoritmo de assinatura (`HS256`).\n2.  **Payload:** Os dados (claims), como `userId` e data de expiração (`exp`).\n3.  **Signature:** A assinatura que valida a integridade do token.',
          },
          {
            title: 'OAuth 2.0',
            content:
              '**OAuth 2.0** é um framework de *autorização*. Ele define diferentes "fluxos" (grant types) para que um `cliente` (uma aplicação) obtenha acesso a recursos em um `servidor de recursos` (uma API), com a permissão do `dono do recurso` (o usuário). É a base do "Login com Google/Facebook".',
          },
        ],
      },
      {
        subject: 'Design de APIs',
        content: [
          {
            title: 'Versionamento',
            content:
              '**Versionar uma API** é crucial para evoluir sem quebrar clientes antigos. A abordagem mais comum é o `versionamento por URI` (ex: `/api/v1/users`). Outras estratégias incluem usar `query parameters` (`?version=1`) ou `cabeçalhos HTTP customizados` (`Accept: application/vnd.company.v1+json`).',
          },
          {
            title: 'Documentação com Swagger/OpenAPI',
            content:
              'A **Especificação OpenAPI** (antigamente Swagger) é um padrão para descrever `APIs REST`. A partir de um arquivo `YAML` ou `JSON` que descreve seus endpoints, você pode gerar uma documentação interativa (com o **Swagger UI**), `SDKs` de cliente e até testes.',
          },
        ],
      },
      {
        subject: 'RESTful API',
        content: [
          {
            title: 'Métodos HTTP',
            content:
              'O uso correto dos verbos `HTTP` é central para o `REST`. A principal característica é a **idempotência**: `GET`, `PUT` e `DELETE` são idempotentes (múltiplas chamadas idênticas têm o mesmo efeito que uma), enquanto `POST` e `PATCH` não são.',
          },
        ],
      },
      {
        subject: 'GraphQL',
        content: [
          {
            title: 'Queries, Mutations e Subscriptions',
            content:
              'A `API GraphQL` é definida por um **Schema** que descreve os tipos de dados e as operações possíveis:\n\n* **Queries:** Para busca de dados (leitura).\n* **Mutations:** Para criação, atualização ou exclusão de dados (escrita).\n* **Subscriptions:** Para receber dados em tempo real via uma conexão persistente (`WebSockets`).',
          },
        ],
      },
    ],
  },
  {
    theme: 'Segurança da informação',
    content: [
      {
        subject: 'Boas Práticas',
        content: [
          {
            title: 'Validação de Dados',
            content:
              'Nunca confie na entrada do usuário ("Never trust user input"). A **validação** deve ocorrer tanto no `front-end` (para feedback rápido) quanto, obrigatoriamente, no `back-end` (como a fonte da verdade). Use bibliotecas como `Zod` (TS) ou `Joi` (JS) para definir esquemas rígidos de validação.',
          },
          {
            title: 'HTTPS',
            content:
              '**HTTPS** (HTTP Secure) usa o protocolo `TLS` (Transport Layer Security) para criar um canal criptografado entre o cliente e o servidor. Isso protege contra ataques de *man-in-the-middle*, garantindo a `confidencialidade` e a `integridade` dos dados em trânsito.',
          },
        ],
      },
      {
        subject: 'Principais Vulnerabilidades',
        content: [
          {
            title: 'SQL Injection',
            content:
              'Ocorre quando um atacante insere código `SQL` malicioso em uma entrada de dados, que é então executada pelo banco de dados. A prevenção principal é *nunca* concatenar strings para montar queries. Use sempre **queries parametrizadas** (prepared statements) ou `ORMs` que fazem isso por você.',
          },
          {
            title: 'Cross-site Scripting (XSS)',
            content:
              '**XSS** é uma vulnerabilidade que permite a um atacante injetar `scripts` maliciosos em páginas web vistas por outros usuários. A principal defesa é fazer o **output encoding/escaping** de qualquer dado vindo do usuário antes de renderizá-lo no `HTML`.',
          },
        ],
      },
      {
        subject: 'Proteções no Front-end',
        content: [
          {
            title: 'Content Security Policy (CSP)',
            content:
              '**CSP** é um cabeçalho de resposta `HTTP` que permite controlar quais recursos (scripts, fontes, imagens) o navegador tem permissão para carregar em uma página. É uma camada de defesa poderosa contra ataques de `XSS` e injeção de dados.',
          },
          {
            title: 'CORS',
            content:
              '**CORS (Cross-Origin Resource Sharing)** é um mecanismo de segurança implementado pelos navegadores que restringe requisições `HTTP` feitas por um `script` a partir de uma origem (domínio) diferente da do recurso solicitado. A política é definida pelo servidor através de cabeçalhos como `Access-Control-Allow-Origin`.',
          },
        ],
      },
      {
        subject: 'Autenticação',
        content: [
          {
            title: 'JWT',
            content:
              '**JWTs** são `stateless`, mas isso traz desafios de segurança. Como não podem ser invalidados no servidor antes de expirarem, eles devem ter um tempo de vida curto. A melhor prática é armazená-los em `cookies httpOnly`, o que os torna inacessíveis a `scripts` no `front-end`, prevenindo roubo via `XSS`.',
          },
        ],
      },
      {
        subject: 'Criptografia',
        content: [
          {
            title: 'Hash e Salt',
            content:
              'Senhas devem passar por um processo de **hashing** usando um algoritmo lento e adaptativo como `Argon2` ou `bcrypt`. Um **salt** (uma string aleatória única para cada usuário) é combinado com a senha antes do `hash`. Isso garante que mesmo senhas iguais resultem em `hashes` diferentes, prevenindo ataques de `rainbow table`.',
          },
        ],
      },
    ],
  },
  {
    theme: 'Versionamento e Git',
    content: [
      {
        subject: 'Conceitos Essenciais',
        content: [
          {
            title: 'Commit',
            content:
              'Um **commit** é um registro permanente de um conjunto de mudanças no repositório. Ele representa um *snapshot* do projeto em um ponto no tempo. Mensagens de commit claras e descritivas são fundamentais para um bom histórico. Um `commit` deve ser *atômico*, ou seja, conter uma única mudança lógica completa.',
          },
          {
            title: 'Branch',
            content:
              'Uma **branch** no `Git` é um ponteiro leve e móvel para um `commit`. Criar uma nova `branch` permite divergir da linha principal de desenvolvimento (`main`) para trabalhar em uma nova funcionalidade ou correção de bug de forma isolada, sem afetar a base de código estável.',
          },
        ],
      },
      {
        subject: 'Fluxos de Trabalho',
        content: [
          {
            title: 'Git Flow',
            content:
              'O **Git Flow** é um modelo de ramificação prescritivo, ideal para projetos com ciclos de `release` definidos. Ele usa branches de longa duração (`main` e `develop`) e branches de suporte (`feature`, `release`, `hotfix`). Pode ser complexo para projetos mais simples, que muitas vezes preferem o `GitHub Flow`.',
          },
          {
            title: 'Rebase vs Merge',
            content:
              '**Merge** (`git merge`) une duas `branches` criando um novo "merge commit", preservando o histórico exato de como as coisas aconteceram. **Rebase** (`git rebase`) move o histórico de uma `branch` para o topo de outra, criando um histórico linear e mais limpo. > **Regra de ouro:** Nunca faça `rebase` em branches públicas/compartilhadas.',
          },
        ],
      },
      {
        subject: 'Ferramentas e Práticas',
        content: [
          {
            title: 'Conventional Commits',
            content:
              '**Conventional Commits** é uma especificação que adiciona estrutura às mensagens de commit. O formato é `tipo(escopo): descrição`. Exemplo: `feat(api): adicionar endpoint de usuários`. Isso permite a automação de `changelogs` e um versionamento semântico mais claro.',
          },
          {
            title: 'Pull Request / Merge Request',
            content:
              'Um **Pull Request (PR)** é o coração da colaboração em `Git`. É um mecanismo para propor mudanças, solicitar `revisão de código` (code review) de outros membros da equipe, disparar `pipelines de CI` e discutir a implementação antes de integrá-la à `branch` principal.',
          },
        ],
      },
    ],
  },
]
