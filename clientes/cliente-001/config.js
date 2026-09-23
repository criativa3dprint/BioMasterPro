const BIOPRO_CONFIG = {

    id: "cliente-001",

    perfil: {
        nome: "Nome do Salão",
        descricao: "Beleza, cuidado e autoestima em um só lugar.",
        logo: "clientes/cliente-001/assets/logo/logo.png"
    },

    tema: "botanic",

    componentes: {
        perfil: true,
        links: true,
        destaque: true,
        servicos: true,
        portfolio: true,
        localizacao: true,
        redes: true,
        rodape: true
    },

    ordem: [
        "perfil",
        "links",
        "destaque",
        "servicos",
        "portfolio",
        "localizacao",
        "redes",
        "rodape"
    ],

    destaque: {
        imagem: "clientes/cliente-001/assets/fotos/destaque.jpg"
    },

    links: [
        {
            nome: "Agendar horário",
            icone: "calendar",
            url: "#",
            ativo: true
        },
        {
            nome: "WhatsApp",
            icone: "whatsapp",
            url: "#",
            ativo: true
        },
        {
            nome: "Instagram",
            icone: "instagram",
            url: "#",
            ativo: true
        }
    ],

    servicos: [
        {
            nome: "Corte",
            descricao: "Corte personalizado",
            ativo: true
        },
        {
            nome: "Coloração",
            descricao: "Transformação e cuidados",
            ativo: true
        },
        {
            nome: "Tratamentos",
            descricao: "Cuidados para seus cabelos",
            ativo: true
        }
    ],

    portfolio: [
        "clientes/cliente-001/assets/fotos/foto-01.jpg",
        "clientes/cliente-001/assets/fotos/foto-02.jpg",
        "clientes/cliente-001/assets/fotos/foto-03.jpg"
    ],

    localizacao: {
        ativo: true,
        endereco: "Endereço do salão",
        mapa: "#"
    },

    redes: {
        instagram: "#",
        whatsapp: "#"
    }

};