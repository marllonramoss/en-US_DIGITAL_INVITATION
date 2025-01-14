import { Event } from '../event';

const eventos: Event[] = [
    {
        id: '1',
        alias: 'evento-fullstack',
        password: 'password123',
        name: 'Evento de Desenvolvimento Fullstack',
        date: new Date('2024-12-01T10:00:00Z'),
        local: 'São Paulo, SP',
        description:
            'Um evento completo para aprender desenvolvimento fullstack do zero.',
        image: 'https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk',
        imageBackground:
            'https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981',
        quantityEstimated: 200,
        Guests: [
            {
                id: '1',
                name: 'Alice Silva',
                email: 'alice@example.com',
                confirmed: true,
                haveFriends: true,
                friendsQuantity: 1,
            },
            {
                id: '2',
                name: 'Carlos Pereira',
                email: 'carlos@example.com',
                confirmed: false,
                haveFriends: false,
                friendsQuantity: 0,
            },
            {
                id: '3',
                name: 'Beatriz Lima',
                email: 'beatriz@example.com',
                confirmed: true,
                haveFriends: true,
                friendsQuantity: 2,
            },
        ],
    },
    {
        id: '2',
        alias: 'evento-js-avancado',
        password: 'js2024',
        name: 'Workshop Avançado de JavaScript',
        date: new Date('2024-11-20T15:00:00Z'),
        local: 'Rio de Janeiro, RJ',
        description: 'Um workshop avançado para programadores JavaScript.',
        image: 'https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200',
        imageBackground:
            'https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg',
        quantityEstimated: 100,
        Guests: [
            {
                id: '4',
                name: 'Eduardo Santos',
                email: 'eduardo@example.com',
                confirmed: true,
                haveFriends: false,
                friendsQuantity: 0,
            },
            {
                id: '5',
                name: 'Fernanda Costa',
                email: 'fernanda@example.com',
                confirmed: true,
                haveFriends: true,
                friendsQuantity: 1,
            },
        ],
    },
    {
        id: '3',
        alias: 'evento-dev-frontend',
        password: 'front123',
        name: 'Bootcamp de Desenvolvimento Frontend',
        date: new Date('2024-11-15T09:00:00Z'),
        local: 'Belo Horizonte, MG',
        description: 'Aprenda a criar interfaces incríveis e responsivas.',
        image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg',
        imageBackground:
            'https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg',
        quantityEstimated: 150,
        Guests: [
            {
                id: '6',
                name: 'Gabriela Rocha',
                email: 'gabriela@example.com',
                confirmed: true,
                haveFriends: true,
                friendsQuantity: 1,
            },
            {
                id: '7',
                name: 'Hugo Nogueira',
                email: 'hugo@example.com',
                confirmed: false,
                haveFriends: false,
                friendsQuantity: 0,
            },
            {
                id: '8',
                name: 'Isabela Martins',
                email: 'isabela@example.com',
                confirmed: true,
                haveFriends: false,
                friendsQuantity: 0,
            },
        ],
    },
    {
        id: '4',
        alias: 'casamento-alberto-marina',
        password: 'casamento2024',
        name: 'Casamento do Alberto e Marina',
        date: new Date('2024-11-25T16:00:00Z'),
        local: 'Florianópolis, SC',
        description:
            'Celebração do casamento de Alberto e Marina com amigos e familiares.',
        image: 'https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg',
        imageBackground:
            'https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg',
        quantityEstimated: 150,
        Guests: [
            {
                id: '9',
                name: 'Bruno Cardoso',
                email: 'bruno@example.com',
                confirmed: true,
                haveFriends: true,
                friendsQuantity: 1,
            },
            {
                id: '10',
                name: 'Carla Mendes',
                email: 'carla@example.com',
                confirmed: true,
                haveFriends: false,
                friendsQuantity: 0,
            },
        ],
    },
    // Continue com o padrão acima para os demais eventos...
];

export default eventos;
