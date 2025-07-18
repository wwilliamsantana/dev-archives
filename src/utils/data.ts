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
              'Componentes são blocos reutilizáveis de código que retornam elementos React. Podem ser funcionais ou baseados em classes, sendo os funcionais os mais utilizados atualmente com hooks.',
          },
          {
            title: 'JSX',
            content:
              'JSX é uma extensão de sintaxe para JavaScript que permite escrever HTML dentro do React. Ele facilita a criação da interface visual de forma declarativa, tornando o código mais legível e organizado.',
          },
          {
            title: 'Props',
            content:
              'Props (propriedades) são parâmetros passados para os componentes, permitindo que dados sejam transmitidos entre diferentes partes da aplicação. Elas tornam os componentes reutilizáveis e dinâmicos.',
          },
          {
            title: 'Hooks',
            content:
              'Hooks são funções especiais do React que permitem usar estado e outras funcionalidades em componentes funcionais. Exemplos incluem useState, useEffect e useContext.',
          },
        ],
      },
      {
        subject: 'Next.js',
        content: [
          {
            title: 'Introdução',
            content:
              'Next.js é um framework baseado em React que oferece renderização híbrida (estática e server-side), roteamento simplificado, suporte a API routes, otimizações automáticas e excelente desempenho.',
          },
          {
            title: 'SSG',
            content:
              'Static Site Generation (SSG) é um tipo de renderização onde as páginas são geradas no momento da build. Ideal para conteúdos estáticos, proporciona performance máxima e caching eficiente.',
          },
          {
            title: 'ISR',
            content:
              'Incremental Static Regeneration (ISR) permite atualizar páginas estáticas após a build, sem precisar recompilar toda a aplicação. Usa cache inteligente e revalidação de conteúdo sob demanda.',
          },
          {
            title: 'SSR',
            content:
              'Server-side Rendering (SSR) gera as páginas no momento da requisição, utilizando os dados mais atualizados disponíveis. É útil para conteúdos dinâmicos e personalizados, como dashboards.',
          },
        ],
      },
      {
        subject: 'CSS Moderno',
        content: [
          {
            title: 'Flexbox',
            content:
              'Flexbox é um modelo de layout unidimensional que organiza elementos em linhas ou colunas. Permite alinhamento, distribuição de espaço e ordenação responsiva com poucas regras CSS.',
          },
          {
            title: 'Grid Layout',
            content:
              'CSS Grid é um sistema bidimensional que permite a criação de layouts complexos com linhas e colunas. Ideal para estruturas mais elaboradas, como dashboards e galerias.',
          },
          {
            title: 'Responsividade',
            content:
              'Responsividade garante que a interface se adapte a diferentes tamanhos de tela. Pode ser alcançada com media queries, unidades relativas (%, em, vw/vh) e layout fluido.',
          },
        ],
      },
      {
        subject: 'TypeScript no Front-end',
        content: [
          {
            title: 'Tipos básicos',
            content:
              'TypeScript adiciona tipagem estática ao JavaScript, permitindo definir tipos como string, number, boolean, entre outros. Isso reduz bugs e melhora a autocompletação.',
          },
          {
            title: 'Interfaces e Tipos',
            content:
              'Interfaces e types definem a estrutura dos dados. Interfaces são ideais para objetos, enquanto types podem compor tipos complexos com união e interseção.',
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
              'Express é um framework minimalista e flexível para Node.js. Facilita a criação de APIs e aplicações web com rotas, middlewares, tratamento de erros e integração com outras bibliotecas.',
          },
          {
            title: 'Middlewares',
            content:
              'Middlewares são funções intermediárias executadas durante o ciclo de requisição/resposta. Podem manipular dados, autenticar usuários ou registrar logs antes que a resposta seja enviada.',
          },
          {
            title: 'Rotas',
            content:
              'Rotas definem os caminhos pelos quais as requisições HTTP chegam à aplicação. No Express, cada rota pode responder a um método (GET, POST, PUT, DELETE) e executar lógica associada.',
          },
          {
            title: 'API REST',
            content:
              'Uma API REST segue os princípios do estilo arquitetural REST. Utiliza métodos HTTP, URLs padronizados e representação de recursos (geralmente em JSON) para comunicação entre cliente e servidor.',
          },
        ],
      },
      {
        subject: 'Banco de Dados',
        content: [
          {
            title: 'Prisma ORM',
            content:
              'Prisma é um ORM moderno que facilita a comunicação entre o código e o banco de dados. Ele gera tipos tipados com TypeScript e permite consultas simples, seguras e escaláveis.',
          },
          {
            title: 'Migrations',
            content:
              'Migrations são versões do banco de dados controladas por código. Elas permitem criar, modificar e rastrear mudanças no esquema de forma organizada e reprodutível.',
          },
          {
            title: 'Seed',
            content:
              'Seed é o processo de inserir dados iniciais no banco, útil para testes ou ambientes de desenvolvimento. Pode incluir usuários fictícios, produtos ou qualquer conteúdo inicial.',
          },
          {
            title: 'Relacional vs Não-relacional',
            content:
              'Bancos relacionais (ex: PostgreSQL) usam tabelas e chaves, enquanto os não-relacionais (ex: MongoDB) armazenam documentos ou pares chave-valor. A escolha depende do tipo de aplicação.',
          },
        ],
      },
      {
        subject: 'Autenticação',
        content: [
          {
            title: 'Sessão vs Token',
            content:
              'Sessões armazenam o estado no servidor, enquanto tokens (como JWT) mantêm as credenciais no cliente. Tokens são mais comuns em APIs modernas por serem stateless.',
          },
          {
            title: 'Refresh Token',
            content:
              'Refresh Tokens permitem renovar o acesso sem reautenticar o usuário. São úteis para sessões longas e segurança contra roubo de credenciais.',
          },
        ],
      },
    ],
  },
  {
    theme: 'Arquitetura de Dados',
    content: [
      {
        subject: 'Conceitos Fundamentais',
        content: [
          {
            title: 'Camadas de Software',
            content:
              'As camadas organizam a estrutura de uma aplicação em blocos com responsabilidades distintas, como apresentação (frontend), lógica de negócio (backend) e persistência de dados (banco).',
          },
          {
            title: 'Clean Architecture',
            content:
              'Clean Architecture separa o sistema em camadas independentes, favorecendo testabilidade, manutenção e escalabilidade. A regra principal é que dependências apontam para dentro da aplicação.',
          },
          {
            title: 'MVC',
            content:
              'MVC (Model-View-Controller) é um padrão arquitetural que separa a aplicação em três partes: o Modelo (dados), a Visão (interface) e o Controlador (lógica). Facilita a organização e manutenção do código.',
          },
          {
            title: 'Monólito vs Microsserviços',
            content:
              'Um sistema monolítico é construído como um único bloco coeso, enquanto microsserviços são pequenos serviços independentes que se comunicam entre si. A escolha depende da complexidade e escalabilidade desejadas.',
          },
        ],
      },
      {
        subject: 'Mensageria e Eventos',
        content: [
          {
            title: 'Fila vs Tópico',
            content:
              'Filas enviam mensagens para um único consumidor por vez (ex: RabbitMQ), enquanto tópicos publicam para múltiplos assinantes (ex: Kafka). A escolha depende do modelo de distribuição desejado.',
          },
          {
            title: 'RabbitMQ',
            content:
              'RabbitMQ é um sistema de mensageria baseado em filas, que suporta múltiplos protocolos e garante entrega confiável de mensagens entre serviços, mesmo quando estão temporariamente indisponíveis.',
          },
          {
            title: 'Kafka',
            content:
              'Kafka é uma plataforma de streaming distribuída, altamente escalável, ideal para eventos e grandes volumes de dados. Utiliza tópicos, partições e consumidores para alta performance em tempo real.',
          },
          {
            title: 'Event-driven Architecture',
            content:
              'A arquitetura orientada a eventos (EDA) organiza sistemas com base em eventos que disparam ações ou atualizações. Isso promove desacoplamento e reatividade entre serviços.',
          },
        ],
      },
      {
        subject: 'Padrões Arquiteturais',
        content: [
          {
            title: 'Hexagonal',
            content:
              'A Arquitetura Hexagonal isola a lógica de negócios do resto da aplicação por meio de portas e adaptadores. Facilita testes, manutenções e substituições de tecnologia.',
          },
          {
            title: 'CQRS',
            content:
              'Command Query Responsibility Segregation separa operações de leitura e escrita. Isso melhora a performance e escalabilidade em sistemas complexos.',
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
              'Representa os dados de forma abstrata, focando nos principais elementos e relacionamentos do domínio, sem considerar restrições técnicas. Geralmente é feito com diagramas ER.',
          },
          {
            title: 'Modelo Lógico',
            content:
              'Traduz o modelo conceitual para estruturas compreendidas por bancos de dados, definindo tabelas, atributos, tipos de dados e relacionamentos com mais precisão.',
          },
          {
            title: 'Modelo Físico',
            content:
              'É a implementação concreta do modelo lógico no SGBD escolhido. Define nomes de tabelas, índices, chaves e outros aspectos específicos da tecnologia usada.',
          },
          {
            title: 'Normalização',
            content:
              'Normalização é o processo de organizar os dados para reduzir redundâncias e melhorar a integridade. Envolve formas normais (1FN, 2FN, 3FN etc.) que guiam o design das tabelas.',
          },
        ],
      },
      {
        subject: 'Relacionamentos',
        content: [
          {
            title: '1 para 1',
            content:
              'Um registro de uma tabela se relaciona com um único registro de outra. Ex: uma pessoa tem um único CPF. Usado quando há dados que podem ser separados para otimização.',
          },
          {
            title: '1 para Muitos',
            content:
              'Um registro em uma tabela se relaciona com vários em outra. Ex: um autor pode ter vários livros. É o relacionamento mais comum em bancos relacionais.',
          },
          {
            title: 'Muitos para Muitos',
            content:
              'Vários registros de uma tabela se relacionam com vários de outra. Ex: alunos e disciplinas. Requer uma tabela intermediária (de junção) para representar essa relação.',
          },
          {
            title: 'Cardinalidade',
            content:
              'Define o número de ocorrências de uma entidade em relação a outra. Pode ser 1:1, 1:N ou N:N, e ajuda a estabelecer como as entidades se relacionam no modelo de dados.',
          },
        ],
      },
      {
        subject: 'Diagrama ER',
        content: [
          {
            title: 'Entidades e Atributos',
            content:
              'Entidades representam objetos do mundo real no banco de dados. Atributos são suas propriedades. O Diagrama ER é útil para visualizar essas relações.',
          },
          {
            title: 'Relacionamentos',
            content:
              'Relacionamentos no diagrama ER mostram como entidades estão ligadas. Podem ter cardinalidades e dependências como obrigatoriedade ou opcionalidade.',
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
              'Testes unitários verificam partes isoladas do código, como funções ou métodos, garantindo que cada unidade funcione corretamente. São rápidos e fáceis de automatizar.',
          },
          {
            title: 'Vitest',
            content:
              'Vitest é uma ferramenta moderna de testes para projetos front-end, com excelente integração com TypeScript e suporte ao padrão de testes do Jest.',
          },
          {
            title: 'Boas práticas',
            content:
              'Escreva testes pequenos, previsíveis e que cubram cenários relevantes. Utilize mocks para isolar dependências e mantenha os testes versionados com o projeto.',
          },
        ],
      },
      {
        subject: 'Testes de Integração',
        content: [
          {
            title: 'Conceito',
            content:
              'Testes de integração validam a comunicação entre diferentes partes do sistema, como entre a API e o banco de dados. São mais lentos que os testes unitários, porém necessários para validar o fluxo completo.',
          },
          {
            title: 'Supertest',
            content:
              'Supertest é uma biblioteca para testar endpoints HTTP em APIs Node.js, ideal para verificar respostas, status codes e dados retornados.',
          },
        ],
      },
      {
        subject: 'Testes End-to-End (E2E)',
        content: [
          {
            title: 'Cypress',
            content:
              'Cypress é uma ferramenta moderna para testes E2E. Ela permite testar o comportamento real do usuário no navegador, validando interações completas e rotas.',
          },
          {
            title: 'Casos de Teste',
            content:
              'Casos de teste descrevem os passos, entradas e saídas esperadas de uma funcionalidade. São essenciais para padronizar e documentar o que será validado.',
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
            title: 'Integração Contínua',
            content:
              'A CI (Continuous Integration) consiste em integrar e validar mudanças frequentes no código através de automações que executam testes e builds a cada push no repositório.',
          },
          {
            title: 'Entrega Contínua',
            content:
              'CD (Continuous Delivery) automatiza o deploy para ambientes de homologação ou produção, garantindo entregas rápidas, seguras e frequentes.',
          },
          {
            title: 'GitHub Actions',
            content:
              'GitHub Actions é uma ferramenta de automação nativa do GitHub que permite configurar pipelines de CI/CD diretamente no repositório.',
          },
        ],
      },
      {
        subject: 'Docker',
        content: [
          {
            title: 'Conceito',
            content:
              'Docker é uma plataforma para empacotar aplicações em contêineres isolados, garantindo que o ambiente de desenvolvimento seja o mesmo da produção.',
          },
          {
            title: 'Dockerfile',
            content:
              'Um Dockerfile define as instruções de construção da imagem do contêiner, como base da imagem, dependências e comandos de execução.',
          },
          {
            title: 'Docker Compose',
            content:
              'Docker Compose orquestra múltiplos contêineres com um único arquivo YAML. Ideal para rodar aplicação, banco de dados e serviços em conjunto no mesmo ambiente.',
          },
        ],
      },
      {
        subject: 'Monitoramento e Observabilidade',
        content: [
          {
            title: 'Logs e Métricas',
            content:
              'Logs registram eventos no sistema e ajudam no diagnóstico de problemas. Métricas são valores numéricos que medem a performance, como tempo de resposta ou uso de CPU.',
          },
          {
            title: 'Prometheus e Grafana',
            content:
              'Prometheus coleta métricas de serviços, e Grafana as exibe em dashboards interativos. São usados em conjunto para monitoramento eficiente e visual.',
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
              'REST é uma arquitetura baseada em recursos, usando endpoints e métodos HTTP. É simples, bem documentado e amplamente adotado.',
          },
          {
            title: 'GraphQL',
            content:
              'GraphQL é uma linguagem de consulta para APIs que permite ao cliente escolher exatamente os dados que quer receber. Reduz o overfetching e underfetching de dados.',
          },
        ],
      },
      {
        subject: 'Autenticação e Autorização',
        content: [
          {
            title: 'JWT',
            content:
              'JSON Web Token é uma forma segura e compacta de transmitir dados de autenticação entre cliente e servidor. Composto por header, payload e assinatura.',
          },
          {
            title: 'OAuth 2.0',
            content:
              'OAuth 2.0 é um protocolo que permite delegar o acesso a recursos de forma segura, muito utilizado por APIs que se integram com Google, Facebook, etc.',
          },
        ],
      },
      {
        subject: 'Design de APIs',
        content: [
          {
            title: 'Versionamento',
            content:
              'Versionar APIs evita quebrar integrações. Pode ser feito via URL (ex: /v1/users) ou cabeçalhos, permitindo atualizações sem impactar clientes antigos.',
          },
          {
            title: 'Documentação com Swagger',
            content:
              'Swagger é uma ferramenta para documentar e testar APIs REST. Fornece uma interface interativa para visualizar endpoints, métodos, parâmetros e respostas.',
          },
        ],
      },
    ],
  },
  {
    theme: 'Segurança',
    content: [
      {
        subject: 'Boas Práticas',
        content: [
          {
            title: 'Validação de Dados',
            content:
              'Sempre valide entradas do usuário para evitar ataques como SQL Injection e XSS. Bibliotecas como Zod e Joi ajudam a manter os dados seguros.',
          },
          {
            title: 'HTTPS',
            content:
              'HTTPS criptografa os dados trafegados entre cliente e servidor, impedindo que terceiros interceptem informações sensíveis. É obrigatório em produção.',
          },
        ],
      },
      {
        subject: 'Principais Vulnerabilidades',
        content: [
          {
            title: 'SQL Injection',
            content:
              'É uma técnica de ataque onde comandos SQL maliciosos são inseridos em campos de entrada para manipular ou roubar dados do banco. Use ORM e parametrização.',
          },
          {
            title: 'Cross-site Scripting (XSS)',
            content:
              'XSS permite que scripts maliciosos sejam executados no navegador de outro usuário. Escapar caracteres HTML e validar entradas evita esse problema.',
          },
        ],
      },
      {
        subject: 'Proteções no Front-end',
        content: [
          {
            title: 'Content Security Policy (CSP)',
            content:
              'CSP é um mecanismo que define quais fontes de conteúdo são permitidas em uma página. Reduz a superfície de ataques como XSS.',
          },
          {
            title: 'CORS',
            content:
              'CORS (Cross-Origin Resource Sharing) controla quais domínios podem acessar recursos do servidor. É importante configurar corretamente para evitar bloqueios ou brechas.',
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
              'Um commit salva um snapshot das mudanças no projeto. Cada commit deve ser claro, pequeno e com mensagem descritiva.',
          },
          {
            title: 'Branch',
            content:
              'Branches permitem trabalhar em funcionalidades isoladas do código principal. A branch main (ou master) representa a versão estável do projeto.',
          },
        ],
      },
      {
        subject: 'Fluxos de Trabalho',
        content: [
          {
            title: 'Git Flow',
            content:
              'É uma convenção de ramificações que organiza o trabalho em branches como: feature, develop, release e hotfix, tornando o processo de versionamento mais estruturado.',
          },
          {
            title: 'Rebase vs Merge',
            content:
              'Merge mantém o histórico com múltiplas linhas, já o Rebase reescreve o histórico para deixá-lo linear. Use merge para preservar histórico e rebase para organizar antes de subir.',
          },
        ],
      },
      {
        subject: 'Ferramentas e Práticas',
        content: [
          {
            title: 'Conventional Commits',
            content:
              'Commits convencionais seguem um padrão estruturado como `feat:`, `fix:` ou `chore:`. Isso melhora o histórico e facilita geração automática de changelogs.',
          },
          {
            title: 'Pull Request',
            content:
              'Pull Requests são solicitações de merge com revisão de código. Permitem colaboração, validação e controle de qualidade antes de integrar novas mudanças.',
          },
        ],
      },
    ],
  },
]
