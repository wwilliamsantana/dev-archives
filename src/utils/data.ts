interface PostsProps {
  theme: string;
  content: {
    subject: string;
    content: {
      title: string;
      content: string;
    }[];
  }[];
}


export const posts: PostsProps[] = [
  {
    theme: "Front-end",
    content: [
      {
        subject: "Reactjs",
        content: [
          {
            title: "Componentes",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "JSX",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Props",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Hooks",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      },
      {
        subject: "Next.js",
        content: [
          {
            title: "Introdução",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "SSG",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "ISR",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "SSR",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      }
    ]
  },
  {
    theme: "Back-end",
    content: [
      {
        subject: "Node.js",
        content: [
          {
            title: "Express",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Middlewares",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Rotas",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "API REST",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      },
      {
        subject: "Banco de Dados",
        content: [
          {
            title: "Prisma ORM",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Migrations",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Seed",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Relacional vs Não-relacional",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      }
    ]
  },
  {
    theme: "Arquitetura de Dados",
    content: [
      {
        subject: "Conceitos Fundamentais",
        content: [
          {
            title: "Camadas de Software",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Clean Architecture",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "MVC",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Monólito vs Microsserviços",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      },
      {
        subject: "Mensageria e Eventos",
        content: [
          {
            title: "Fila vs Tópico",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "RabbitMQ",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Kafka",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Event-driven Architecture",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      }
    ]
  },
  {
    theme: "Modelagem de Dados",
    content: [
      {
        subject: "Modelos de Dados",
        content: [
          {
            title: "Modelo Conceitual",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Modelo Lógico",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Modelo Físico",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Normalização",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      },
      {
        subject: "Relacionamentos",
        content: [
          {
            title: "1 para 1",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "1 para Muitos",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Muitos para Muitos",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          },
          {
            title: "Cardinalidade",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
          }
        ]
      }
    ]
  }
];
