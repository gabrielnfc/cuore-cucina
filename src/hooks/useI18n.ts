'use client'

import { useEffect, useState } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  'pt-BR': {
    translation: {
      navigation: {
        menu: 'Cardápio',
        about: 'Sobre',
        contact: 'Contato',
        reserve: 'Reserve sua Mesa'
      },
      hero: {
        title: 'Autêntica Cozinha Italiana',
        subtitle: 'Uma experiência gastronômica única que combina tradição, sabor e paixão em cada prato.',
        cta: {
          reserve: 'Reserve sua Mesa',
          menu: 'Ver Cardápio'
        }
      },
      about: {
        title: 'Nossa História',
        subtitle: 'Desde 2010, o Cuore & Cucina tem sido um pedaço da Itália em Vila Velha, trazendo receitas tradicionais e amor pela gastronomia italiana.',
        tradition: {
          title: 'Tradição Familiar',
          description: 'Nossas receitas são passadas de geração em geração, mantendo viva a autêntica tradição da culinária italiana.'
        },
        ingredients: {
          title: 'Ingredientes Selecionados',
          description: 'Utilizamos apenas ingredientes de alta qualidade, importados diretamente da Itália ou selecionados de produtores locais.'
        },
        ambience: {
          title: 'Ambiente Acolhedor',
          description: 'Nosso espaço foi projetado para proporcionar uma experiência aconchegante e autêntica, como os restaurantes familiares italianos.'
        },
        team: {
          title: 'Equipe Apaixonada',
          description: 'Nossa equipe é formada por profissionais apaixonados pela gastronomia italiana e dedicados a oferecer o melhor serviço.'
        }
      },
      menu: {
        title: 'Nosso Cardápio',
        categories: {
          all: 'Todos',
          antipasti: 'Antipasti',
          pasta: 'Massas',
          pizza: 'Pizzas',
          secondi: 'Carnes',
          dolci: 'Sobremesas'
        },
        items: {
          carbonara: {
            name: 'Spaghetti alla Carbonara',
            description: 'Massa fresca com molho cremoso de ovos, queijo pecorino, guanciale e pimenta preta'
          },
          margherita: {
            name: 'Pizza Margherita',
            description: 'Molho de tomate, mozzarella di bufala, manjericão fresco e azeite extra virgem'
          },
          bruschetta: {
            name: 'Bruschetta al Pomodoro',
            description: 'Pão italiano grelhado com tomates frescos, manjericão, alho e azeite extra virgem'
          },
          lasagna: {
            name: 'Lasagna alla Bolognese',
            description: 'Camadas de massa fresca, molho bolonhesa, molho bechamel e queijo parmesão'
          },
          ossobuco: {
            name: 'Ossobuco alla Milanese',
            description: 'Ossobuco de vitela cozido lentamente com vinho branco, legumes e gremolata'
          },
          tiramisu: {
            name: 'Tiramisù',
            description: 'Sobremesa clássica com camadas de biscoitos champagne, café, mascarpone e cacau'
          },
          pannacotta: {
            name: 'Panna Cotta',
            description: 'Sobremesa cremosa de baunilha com calda de frutas vermelhas'
          },
          caprese: {
            name: 'Insalata Caprese',
            description: 'Salada com mozzarella de búfala, tomates, manjericão e azeite extra virgem',
            dietary: ['vegetarian']
          }
        },
        dietary: {
          vegetarian: 'Vegetariano',
          glutenFree: 'Sem Glúten',
          spicy: 'Picante'
        }
      },
      contact: {
        title: 'Contato',
        address: {
          title: 'Endereço',
          street: 'Rua Sebastião Silveira, 64',
          neighborhood: 'Praia das Gaivotas',
          city: 'Vila Velha - ES, 29102-571',
          country: 'Brasil'
        },
        phone: {
          title: 'Telefone',
          main: '+55 (27) 3333-4444',
          mobile: '+55 (27) 99999-8888'
        },
        hours: {
          title: 'Horário de Funcionamento',
          weekdays: {
            title: 'Segunda a Quinta',
            hours: '12h às 15h | 19h às 23h'
          },
          weekend: {
            title: 'Sexta e Sábado',
            hours: '12h às 16h | 19h às 00h'
          },
          sunday: {
            title: 'Domingo',
            hours: '12h às 16h'
          }
        },
        cta: 'Fazer Reserva'
      },
      footer: {
        description: 'Trazendo a autêntica culinária italiana para Vila Velha desde 2010.',
        quickLinks: {
          title: 'Links Rápidos',
          menu: 'Cardápio',
          about: 'Sobre Nós',
          contact: 'Contato'
        },
        hours: {
          title: 'Horário',
          weekdays: 'Segunda a Quinta: 12h - 23h',
          weekend: 'Sexta e Sábado: 12h - 00h',
          sunday: 'Domingo: 12h - 16h'
        },
        contact: {
          title: 'Contato',
          address: {
            street: 'Rua Sebastião Silveira, 64',
            neighborhood: 'Praia das Gaivotas',
            city: 'Vila Velha - ES, 29102-571',
            phone: 'Tel: (27) 3333-4444'
          }
        },
        copyright: '© {{year}} Cuore & Cucina. Todos os direitos reservados.'
      }
    }
  },
  en: {
    translation: {
      navigation: {
        menu: 'Menu',
        about: 'About',
        contact: 'Contact',
        reserve: 'Book a Table'
      },
      hero: {
        title: 'Authentic Italian Cuisine',
        subtitle: 'A unique dining experience that combines tradition, flavor and passion in every dish.',
        cta: {
          reserve: 'Book a Table',
          menu: 'View Menu'
        }
      },
      about: {
        title: 'Our Story',
        subtitle: 'Since 2010, Cuore & Cucina has been a piece of Italy in Vila Velha, bringing traditional recipes and love for Italian cuisine.',
        tradition: {
          title: 'Family Tradition',
          description: 'Our recipes are passed down from generation to generation, keeping the authentic tradition of Italian cuisine alive.'
        },
        ingredients: {
          title: 'Selected Ingredients',
          description: 'We use only high-quality ingredients, imported directly from Italy or selected from local producers.'
        },
        ambience: {
          title: 'Cozy Atmosphere',
          description: 'Our space was designed to provide a cozy and authentic experience, like Italian family restaurants.'
        },
        team: {
          title: 'Passionate Team',
          description: 'Our team consists of professionals passionate about Italian cuisine and dedicated to offering the best service.'
        }
      },
      menu: {
        title: 'Our Menu',
        categories: {
          all: 'All',
          antipasti: 'Antipasti',
          pasta: 'Pasta',
          pizza: 'Pizza',
          secondi: 'Main Courses',
          dolci: 'Desserts'
        },
        items: {
          carbonara: {
            name: 'Spaghetti alla Carbonara',
            description: 'Fresh pasta with creamy egg sauce, pecorino cheese, guanciale, and black pepper'
          },
          margherita: {
            name: 'Pizza Margherita',
            description: 'Tomato sauce, buffalo mozzarella, fresh basil, and extra virgin olive oil'
          },
          bruschetta: {
            name: 'Bruschetta al Pomodoro',
            description: 'Grilled Italian bread with fresh tomatoes, basil, garlic, and extra virgin olive oil'
          },
          lasagna: {
            name: 'Lasagna alla Bolognese',
            description: 'Layers of fresh pasta, bolognese sauce, bechamel sauce, and parmesan cheese'
          },
          ossobuco: {
            name: 'Ossobuco alla Milanese',
            description: 'Slow-cooked veal ossobuco with white wine, vegetables, and gremolata'
          },
          tiramisu: {
            name: 'Tiramisù',
            description: 'Classic dessert with layers of ladyfingers, coffee, mascarpone, and cocoa'
          },
          pannacotta: {
            name: 'Panna Cotta',
            description: 'Creamy vanilla dessert with mixed berry sauce'
          },
          caprese: {
            name: 'Insalata Caprese',
            description: 'Salad with buffalo mozzarella, tomatoes, basil, and extra virgin olive oil',
            dietary: ['vegetarian']
          }
        },
        dietary: {
          vegetarian: 'Vegetarian',
          glutenFree: 'Gluten Free',
          spicy: 'Spicy'
        }
      },
      contact: {
        title: 'Contact',
        address: {
          title: 'Address',
          street: 'Sebastião Silveira Street, 64',
          neighborhood: 'Praia das Gaivotas',
          city: 'Vila Velha - ES, 29102-571',
          country: 'Brazil'
        },
        phone: {
          title: 'Phone',
          main: '+55 (27) 3333-4444',
          mobile: '+55 (27) 99999-8888'
        },
        hours: {
          title: 'Opening Hours',
          weekdays: {
            title: 'Monday to Thursday',
            hours: '12 PM to 3 PM | 7 PM to 11 PM'
          },
          weekend: {
            title: 'Friday and Saturday',
            hours: '12 PM to 4 PM | 7 PM to 12 AM'
          },
          sunday: {
            title: 'Sunday',
            hours: '12 PM to 4 PM'
          }
        },
        cta: 'Make a Reservation'
      },
      footer: {
        description: 'Bringing authentic Italian cuisine to Vila Velha since 2010.',
        quickLinks: {
          title: 'Quick Links',
          menu: 'Menu',
          about: 'About Us',
          contact: 'Contact'
        },
        hours: {
          title: 'Hours',
          weekdays: 'Monday to Thursday: 12 PM - 11 PM',
          weekend: 'Friday and Saturday: 12 PM - 12 AM',
          sunday: 'Sunday: 12 PM - 4 PM'
        },
        contact: {
          title: 'Contact',
          address: {
            street: 'Sebastião Silveira Street, 64',
            neighborhood: 'Praia das Gaivotas',
            city: 'Vila Velha - ES, 29102-571',
            phone: 'Phone: (27) 3333-4444'
          }
        },
        copyright: '© {{year}} Cuore & Cucina. All rights reserved.'
      }
    }
  },
  it: {
    translation: {
      navigation: {
        menu: 'Menu',
        about: 'Chi Siamo',
        contact: 'Contatti',
        reserve: 'Prenota un Tavolo'
      },
      hero: {
        title: 'Autentica Cucina Italiana',
        subtitle: "Un'esperienza gastronomica unica che unisce tradizione, sapore e passione in ogni piatto.",
        cta: {
          reserve: 'Prenota un Tavolo',
          menu: 'Vedi il Menu'
        }
      },
      about: {
        title: 'La Nostra Storia',
        subtitle: 'Dal 2010, Cuore & Cucina è un pezzo d\'Italia a Vila Velha, portando ricette tradizionali e amore per la gastronomia italiana.',
        tradition: {
          title: 'Tradizione Familiare',
          description: 'Le nostre ricette sono tramandate di generazione in generazione, mantenendo viva l\'autentica tradizione della cucina italiana.'
        },
        ingredients: {
          title: 'Ingredienti Selezionati',
          description: 'Utilizziamo solo ingredienti di alta qualità, importati direttamente dall\'Italia o selezionati da produttori locali.'
        },
        ambience: {
          title: 'Ambiente Accogliente',
          description: 'Il nostro spazio è stato progettato per offrire un\'esperienza accogliente e autentica, come i ristoranti familiari italiani.'
        },
        team: {
          title: 'Team Appassionato',
          description: 'Il nostro team è composto da professionisti appassionati della cucina italiana e dedicati a offrire il miglior servizio.'
        }
      },
      menu: {
        title: 'Il Nostro Menu',
        categories: {
          all: 'Tutti',
          antipasti: 'Antipasti',
          pasta: 'Primi Piatti',
          pizza: 'Pizza',
          secondi: 'Secondi Piatti',
          dolci: 'Dolci'
        },
        items: {
          carbonara: {
            name: 'Spaghetti alla Carbonara',
            description: 'Pasta fresca con salsa cremosa di uova, pecorino, guanciale e pepe nero'
          },
          margherita: {
            name: 'Pizza Margherita',
            description: 'Salsa di pomodoro, mozzarella di bufala, basilico fresco e olio extra vergine d\'oliva'
          },
          bruschetta: {
            name: 'Bruschetta al Pomodoro',
            description: 'Pane italiano grigliato con pomodori freschi, basilico, aglio e olio extra vergine d\'oliva'
          },
          lasagna: {
            name: 'Lasagna alla Bolognese',
            description: 'Strati di pasta fresca, ragù alla bolognese, besciamella e parmigiano'
          },
          ossobuco: {
            name: 'Ossobuco alla Milanese',
            description: 'Ossobuco di vitello cotto lentamente con vino bianco, verdure e gremolata'
          },
          tiramisu: {
            name: 'Tiramisù',
            description: 'Dessert classico con strati di savoiardi, caffè, mascarpone e cacao'
          },
          pannacotta: {
            name: 'Panna Cotta',
            description: 'Dessert cremoso alla vaniglia con salsa ai frutti di bosco'
          },
          caprese: {
            name: 'Insalata Caprese',
            description: 'Insalata con mozzarella di bufala, pomodori, basilico e olio extra vergine d\'oliva',
            dietary: ['vegetarian']
          }
        },
        dietary: {
          vegetarian: 'Vegetariano',
          glutenFree: 'Senza Glutine',
          spicy: 'Piccante'
        }
      },
      contact: {
        title: 'Contatti',
        address: {
          title: 'Indirizzo',
          street: 'Via Sebastião Silveira, 64',
          neighborhood: 'Praia das Gaivotas',
          city: 'Vila Velha - ES, 29102-571',
          country: 'Brasile'
        },
        phone: {
          title: 'Telefono',
          main: '+55 (27) 3333-4444',
          mobile: '+55 (27) 99999-8888'
        },
        hours: {
          title: 'Orari di Apertura',
          weekdays: {
            title: 'Lunedì a Giovedì',
            hours: '12:00 - 15:00 | 19:00 - 23:00'
          },
          weekend: {
            title: 'Venerdì e Sabato',
            hours: '12:00 - 16:00 | 19:00 - 00:00'
          },
          sunday: {
            title: 'Domenica',
            hours: '12:00 - 16:00'
          }
        },
        cta: 'Prenota un Tavolo'
      },
      footer: {
        description: 'Portando l\'autentica cucina italiana a Vila Velha dal 2010.',
        quickLinks: {
          title: 'Link Rapidi',
          menu: 'Menu',
          about: 'Chi Siamo',
          contact: 'Contatti'
        },
        hours: {
          title: 'Orari',
          weekdays: 'Lunedì a Giovedì: 12:00 - 23:00',
          weekend: 'Venerdì e Sabato: 12:00 - 00:00',
          sunday: 'Domenica: 12:00 - 16:00'
        },
        contact: {
          title: 'Contatti',
          address: {
            street: 'Via Sebastião Silveira, 64',
            neighborhood: 'Praia das Gaivotas',
            city: 'Vila Velha - ES, 29102-571',
            phone: 'Tel: (27) 3333-4444'
          }
        },
        copyright: '© {{year}} Cuore & Cucina. Tutti i diritti riservati.'
      }
    }
  }
}

export function useI18n() {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!i18n.isInitialized) {
      i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          resources,
          fallbackLng: 'pt-BR',
          interpolation: {
            escapeValue: false,
          },
          detection: {
            order: ['localStorage', 'navigator'],
          },
        })
        .then(() => setIsInitialized(true))
        .catch((err) => console.error('Error initializing i18next:', err))
    } else {
      setIsInitialized(true)
    }
  }, [])

  return isInitialized
} 