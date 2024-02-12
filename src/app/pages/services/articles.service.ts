import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  
  articlesFAKE: Article[];
  keyboards: Article[];
  mice: Article[];
  monitors: Article[];
  headphones: Article[]; 
  cart: Article[];
  
  constructor() {
    this.articlesFAKE = [
      {
          "id": 1,
          "name": "Tempest Doom H-Mech Teclado RGB",
          "price": 21.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/31/315684/1277-tempest-doom-rgb-h-teclado-mecanico.jpg",
          "description": "Combina lo mejor de ambas tecnologías para darte una sensación de uso muy superior al resto, la tecnología Híbrida ha llegado para quedarse y este teclado es buena muestra de ello.",
          "category": "Teclados"
      },
      {
          "id": 2,
          "name": "Newskill Serike Teclado Mecánico Gaming Full RGB Switch Blue",
          "price": 58.99,
          "image": "https://img.pccomponentes.com/articles/24/249946/serike.jpg",
          "description": "Para los amantes de los teclados mecánicos compactos, en Newskill os presentamos a Serike. Un teclado con una propuesta RGB en la que destaca un aura de retroiluminación en sus laterales y que va recorriendo todas sus teclas.",
          "category": "Teclados"
      },
      {
          "id": 3,
          "name": "Newskill Suiko Ivory Teclado Mecánico Gaming Full RGB Switch Kailh Red",
          "price": 69.95,
          "image": "https://img.pccomponentes.com/articles/24/249972/suiko-ivory.jpg",
          "description": "Suiko Ivory, nuestro primer teclado mecánico blanco que tanto estabais pidiendo, por fin ha llegado. Con Suiko podremos configurar más de 20 modos distintos de iluminación",
          "category": "Teclados"
      },
      {
          "id": 4,
          "name": "Owlotech Office K300 Teclado USB Negro",
          "price": 7.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/51/515203/1417-owlotech-office-k300-teclado-usb-negro.jpg",
          "description": "Presentamos el teclado que tanto echabas en falta en tu casa u oficina. Llega ante ti el nuevo Owlotech Office K300, un teclado con una ergonomía y belleza exquisita",
          "category": "Teclados"
      },
      {
          "id": 5,
          "name": "Logitech G413 TKL SE Teclado Gaming Mecánico Retroiluminado",
          "price": 65.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/1046/10467407/1110-logitech-g413-tkl-se-teclado-gaming-mecanico-retroiluminado-caracteristicas.jpg",
          "description": "Combina lo mejor de ambas tecnologías para darte una sensación de uso muy superior al resto, la tecnología Híbrida ha llegado para quedarse y este teclado es buena muestra de ello.",
          "category": "Teclados"
      },
      {
          "id": 6,
          "name": "Tempest K8 RGB Teclado Gaming Retroiluminado",
          "price": 14.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/31/313186/159-tempest-k8-rgb-teclado-gaming-retroiluminado-caracteristicas.jpg",
          "description": "En TEMPEST siempre estamos trabajando para dar a los usuarios la mejor experiencia gaming posible. Tras meses de trabajo, presentamos un teclado hecho para todos aquellos que deseen la mejor experiencia gaming al menor precio posible",
          "category": "Teclados"
      },
      {
          "id": 7,
          "name": "Logitech K400+ Teclado Inalámbrico con Touchpad Negro",
          "price": 35.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/8/85041/1.jpg",
          "description": "Las utilidades de un teclado inalámbrico son tantas que no podemos si no alabar al Logitech K400. Un teclado compatible con cualquier dispositivo con conexión USB para el receptor Unifying.",
          "category": "Teclados"
      },
      {
          "id": 8,
          "name": "MSI Vigor GK50 Low Profile TKL Teclado Gaming Negro",
          "price": 91.98,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/1002/10026475/1580-msi-vigor-gk50-low-profile-tkl-teclado-gaming-negro-opiniones.jpg",
          "description": "Tome la leyenda del teclado galardonado: Vigor GK50 Low Profile en un factor de forma sin teclas y obtenga el rendimiento para llevarlo a una experiencia de juego de siguiente nivel.",
          "category": "Teclados"
      },
      {
          "id": 9,
          "name": "MSI G27CQ4 E2 27 LED WQHD 170Hz FreeSync Premium Curva",
          "price": 286.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/1064/10643195/1123-msi-g27cq4-e2-27-led-wqhd-170hz-freesync-premium-curva.jpg",
          "description": "Visualiza tu victoria con el monitor MSI G27CQ4 E2 Curved Gaming™. Equipado con una frecuencia de actualización de 2560x1440, 170 Hz, panel de tiempo de respuesta de 1 ms.",
          "category": "Monitores"
      },
      {
          "id": 10,
          "name": "MSI PRO MP241X 23.8 LED FullHD 75Hz",
          "price": 99.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/83/838687/1979-msi-pro-mp241x-238-led-fullhd-75hz-caracteristicas.jpg",
          "description": "Resolución FullHD Experimente una claridad de pantalla impresionante que viene con resolución Full HD (1920x1080),Diseño de soporte ajustable Trabaje con una posición cómoda de trabajo y visualización mientras enfocándote en tus proyectos profesionales",
          "category": "Monitores"
      },
      {
          "id": 11,
          "name": "Lenovo G27-30 27 LED FullHD 165Hz FreeSync Premium",
          "price": 189.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/1064/10641208/1428-lenovo-g27-30-27-led-fullhd-165hz-freesync-premium.jpg",
          "description": "Lenovo G27-30 lleva los juegos a la pantalla de la manera en que se supone deben ser vistos. El panel de VA garantiza un rendimiento de color intenso.",
          "category": "Monitores"
      },
      {
          "id": 12,
          "name": "Nilox NXM24FHD01 24 LED FullHD 75Hz",
          "price": 94.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/1002/10021459/1178-nilox-nxm24fhd01-24-led-fullhd-75hz.jpg",
          "description": "Nilox ofrece el monitor de 24 con pantalla LED sin marco, puertos HDMI - VGA, resolución FULL HD y tecnología Low Blue Light.",
          "category": "Monitores"
      },
      {
          "id": 13,
          "name": "Lenovo L24e-30 23.8 LED FullHD FreeSync",
          "price": 99.99,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/38/380278/1682-lenovo-l24e-30-238-led-fullhd-freesync.jpg",
          "description": "El panel VA ultradelgado de 23,8 pulgadas del L24e-30 con un diseño casi sin bordes de 3 lados ofrece imágenes de calidad y un aspecto moderno.",
          "category": "Monitores"
      },
      {
          "id": 14,
          "name": "Gigabyte M32QC 31.5 LED QHD 170Hz FreeSync Premium Pro Curva",
          "price": 333.98,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/70/703835/1530-gigabyte-m32qc-315-led-qhd-170hz-freesync-premium-pro-curva.jpg",
          "description": "Como jugador invisible, a menudo se subestima al monitor. La verdad es que los monitores se forman como un efecto sinérgico y ofrecen el mejor rendimiento de los componentes de la PC.",
          "category": "Monitores"
      },
      {
          "id": 15,
          "name": "Philips 3000 Series 24E1N3300A/00 23.8 LED IPS FullHD 75Hz USB-C",
          "price": 136.98,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/1066/10663370/1752-philips-3000-series-24e1n3300a-00-238-led-ips-fullhd-75hz-usb-c.jpg",
          "description": "Este monitor multiusos USB-C de Philips ofrece una configuración sencilla con un único cable. Podrás ver vídeos fluidos en alta resolución, transferir datos y cargar tu portátil. Un hub perfecto para los profesionales que se desplazan.",
          "category": "Monitores"
      },
      {
          "id": 16,
          "name": "MSI Optix G24C4 23.6 LED FullHD 144Hz Freesync Curva",
          "price": 186.98,
          "image": "https://thumb.pccomponentes.com/w-530-530/articles/23/231904/1.jpg",
          "description": "Los monitores Optix utilizan un panel de pantalla curva que tiene una velocidad de curvatura de R1500, que es la más cómoda y adecuada para una amplia gama de aplicaciones, desde computación general hasta juegos.",
          "category": "Monitores"
      },
      {
          "id": 17,
          "name": "Forgeon Vendetta Ratón Gaming RGB 16000DPI Negro",
          "price": 84.99,
          "image": "https://img.pccomponentes.com/articles/43/433870/1990-forgeon-vendetta-raton-gaming-rgb-16000dpi-negro-comprar.jpg?_gl=1*oboixl*_ga*MzA5OTE5Nzc1LjE2ODI1MjYwMjU.*_ga_DJ03PRJ8R3*MTY4MjUyNjA2OS4zLjEuMTY4MjUyNzUxNC4wLjAuMA..",
          "description": "Presentando este mouse Vendetta de Forgeon puedo decirte que te encuentras ante el ratón más competente del mercado. Este mouse ha sido por varios años consecutivos elegido el mejor mouse gaming en cuanto a su diseño.",
          "category": "Ratones"
      },
      {
          "id": 18,
          "name": "Tempest MS300 Soldier RGB Ratón Gaming 4.000 DPI Negro",
          "price": 8.99,
          "image": "https://img.pccomponentes.com/articles/31/313178/1544-tempest-ms-300-rgb-soldier-raton-gaming-4000dpi.jpg",
          "description": "Tempest presenta su nuevo ratón, el MS-300 RGB Soldier, hecho para todos aquellos que buscan tener la mejor experiencia gaming al mejor precio posible.",
          "category": "Ratones"
      },
      {
          "id": 19,
          "name": "Newskill Eos Ivory Ratón Gaming Professional RGB 16000DPI Blanco",
          "price": 49.95,
          "image": "https://img.pccomponentes.com/articles/31/310369/1795-newskill-eos-ivory-raton-gaming-professional-rgb-16000dpi-blanco-review.jpg",
          "description": "Una de las características que hace de Eos Ivory la elección perfecta para todos los que buscan un ratón tope de gama es que incorpora Pixart 3360, un sensor óptico de última generación.",
          "category": "Ratones"
      },
      {
          "id": 20,
          "name": "MSI M31 Ratón Óptico 3600DPI",
          "price": 11.99,
          "image": "https://img.pccomponentes.com/articles/1064/10648507/1328-msi-m31-raton-optico-3600dpi.jpg",
          "description": "El M31 tiene un diseño simétrico, lo que lo hace adecuado tanto para usuarios diestros como zurdos.",
          "category": "Ratones"
      },
      {
          "id": 21,
          "name": "NGS Evo Karma Ratón Vertical Ergonómico Inalámbrico con Luces LED y Conexión Multimodo 3200 DPI",
          "price": 35.99,
          "image": "https://img.pccomponentes.com/articles/1065/10650345/1532-ngs-evo-karma-raton-ergonomico-vertical-inalambrico-3200-dpi.jpg",
          "description": "Ratón vertical ergonómico e inalámbrico NGS Evo Karma con tecnología multidispositivo y luces LED.",
          "category": "Ratones"
      },
      {
          "id": 22,
          "name": "Owlotech M80 Ratón Inalámbrico 1.600 DPI Gris",
          "price": 10.99,
          "image": "https://img.pccomponentes.com/articles/57/576896/1391-owlotech-m80-raton-inalambrico-1600-dpi-gris.jpg",
          "description": "Owlotech nos trae el nuevo mouse M80 inalámbrico. Un mouse que te proporciona gran rapidez y productividad en tus momentos de trabajo gracias a su diseño ergonómico y exclusivo.",
          "category": "Ratones"
      },
      {
          "id": 23,
          "name": "Logitech G203 Lightsync 2nd Gen Ratón Gaming 8000DPI RGB Negro",
          "price": 30.99,
          "image": "https://img.pccomponentes.com/articles/28/287353/logitech-g203-lightsync-2nd-gen-raton-gaming-8000dpi-rgb-negro.jpg",
          "description": "Aprovecha al máximo tu tiempo de juego con el ratón G203 2nd Gen para gaming, con tecnología LIGHTSYNC, un sensor para gaming y un diseño clásico con 6 botones. Anima tu juego... y tu escritorio.",
          "category": "Ratones"
      },
      {
          "id": 24,
          "name": "Tempest X20 Vigilant RGB Ratón Gaming 16.000 DPI Negro",
          "price": 28.99,
          "image": "https://img.pccomponentes.com/articles/43/433504/156-tempest-x20-vigilant-raton-gaming.jpg",
          "description": "Dentro de los modelos de ratones Tempest nos encontramos con el Mouse X20 Vigilant. Un ratón pensado para las necesidades del mundo laboral y gaming. Su diseño y ergonomía hará que se adapte a ti como un guante.",
          "category": "Ratones"
      },
      {
          "id": 25,
          "name": "Forgeon Sergeant Auriculares Gaming 7.1 PC/PS4/PS5/Xbox/Xbox X/Switch Negros",
          "price": 94.99,
          "image": "https://img.pccomponentes.com/articles/43/433875/1729-forgeon-sergeant-auriculares-gaming-71-pc-ps4-ps5-xbox-xbox-x-switch-negros.jpg",
          "description": "Aparece el modelo superior de auriculares Forgeon. Los Sergeant Wired Headset 7.1. Unos auriculares que ofrecen una experiencia de sonido única y totalmente envolvente.",
          "category": "Auriculares"
      },
      {
          "id": 26,
          "name": "Owlotech Ear Office Next Auriculares con Micrófono Negros",
          "price": 7.99,
          "image": "https://img.pccomponentes.com/articles/43/433662/1203-owlotech-ear-office-next-auriculares-con-microfono-negros-comprar.jpg",
          "description": "Presentamos los nuevos auriculares Owlotech Ear Office, la nueva generación de auriculares. Unos auriculares fabricados exclusivamente para ti, con unos acabados únicos y formidables que harán que se adapten perfectamente a tu cabeza.",
          "category": "Auriculares"
      },
      {
          "id": 27,
          "name": "BG Xonar X6 Auriculares Gaming 7.1",
          "price": 20.99,
          "image": "https://img.pccomponentes.com/articles/10/107036/xonar-x6-main2.jpg",
          "description": "BG sube el nivel de la serie Xonar con los auriculares Xonar-X6, tan flexibles, ligeros y cómodos que olvidarás que los llevas puestos, envuelto en la inmensidad de su profundo sonido 7.1.",
          "category": "Auriculares"
      },
      {
          "id": 28,
          "name": "HyperX Cloud Flight Auriculares Gaming Inalámbricos",
          "price": 121.99,
          "image": "https://img.pccomponentes.com/articles/1004/10042294/1601-hyperx-cloud-flight-auriculares-gaming-inalambricos.jpg",
          "description": "Escapa de los límites de las conexiones por cable y deambula libremente con los HyperX Cloud Flight™ inalámbrico. Gracias a una conexión inalámbrica sólida y perfecta para juegos",
          "category": "Auriculares"
      },
      {
          "id": 29,
          "name": "Tempest GHS101 Lancer Auriculares Gaming RGB PC/PS4/PS5/Xbox/Xbox X/Switch",
          "price": 21.99,
          "image": "https://img.pccomponentes.com/articles/21/215913/ghs101-2-blue.jpg",
          "description": "Los nuevos auriculares gaming Tempest GHS101 RGB llevan el estatus de nuestra marca a un nuevo nivel. Estos nuevos auriculares disponen de altavoces de alta calidad los cuales te harán disfrutar de tus largas sesiones de juego de una manera increíble.",
          "category": "Auriculares"
      },
      {
          "id": 30,
          "name": "Tempest GHS400 Caesar Auriculares Gaming RGB Wireless PC",
          "price": 50.99,
          "image": "https://img.pccomponentes.com/articles/26/269341/tempest-caesar-auriculares-gaming-bluetooth-rgb-caracteristicas.jpg",
          "description": "Los auriculares gaming RGB bluetooth Caesar de Tempest ofrecen el mejor confort para disfrutar al máximo cada partida en tu set-up. Los nuevos Caesar están fabricados pensando en la comodidad durante horas de partida.",
          "category": "Auriculares"
      },
      {
          "id": 31,
          "name": "Logitech G332 Auriculares Gaming",
          "price": 36.99,
          "image": "https://img.pccomponentes.com/articles/20/201429/1151-logitech-g332-auriculares-gaming-comprar.jpg",
          "description": "Los auriculares con micrófono Logitech G332 para gaming tienen transductores de 50 mm para una reproducción de sonido completa. El micrófono de 6 mm volteable para silenciar está optimizado para comunicaciones de voz. Compatible con varias plataformas.",
          "category": "Auriculares"
      },
      {
          "id": 32,
          "name": "Newskill Kimera V2 Auriculares Gaming RGB 7.1 PC/PS4",
          "price": 66.99,
          "image": "https://img.pccomponentes.com/articles/17/173272/kimera-v2.jpg",
          "description": "Los nuevos Kimera V2 permiten llevar la tecnología de iluminación RGB aún más lejos manteniendo toda la calidad de sonido.Sonido envolvente 7.1 que te haran vibrar de emoción",
          "category": "Auriculares"
      },
      {
          "id": 4902,
          "name": "NUEVO",
          "price": 0.0,
          "image": "https://www.dondevive.org/wp-content/uploads/2016/06/raton-768x576.jpg",
          "description": "NUEVO",
          "category": "Ratones"
      },
      {
          "id": 5007,
          "name": "2",
          "price": 2.0,
          "image": "https://www.dondevive.org/wp-content/uploads/2016/06/raton-768x576.jpg",
          "description": "2",
          "category": "Ratones"
      },
      {
          "id": 5008,
          "name": "3",
          "price": 3.0,
          "image": "https://www.dondevive.org/wp-content/uploads/2016/06/raton-768x576.jpg",
          "description": "3",
          "category": "Ratones"
      },
      {
          "id": 5009,
          "name": "4",
          "price": 4.0,
          "image": "https://www.dondevive.org/wp-content/uploads/2016/06/raton-768x576.jpg",
          "description": "4",
          "category": "Ratones"
      },
      {
          "id": 5010,
          "name": "5",
          "price": 5.0,
          "image": "https://www.dondevive.org/wp-content/uploads/2016/06/raton-768x576.jpg",
          "description": "5",
          "category": "Ratones"
      }
  ];
    this.keyboards = this.filterByCategory(this.articlesFAKE, "Teclados");
    this.mice = this.filterByCategory(this.articlesFAKE, "Ratones");
    this.monitors = this.filterByCategory(this.articlesFAKE, "Monitores");
    this.headphones = this.filterByCategory(this.articlesFAKE, "Auriculares");  
    this.cart = []  
  } 

  filterByCategory(articles: Article[], categoria: string): Article[] {
    return articles.filter(article => article.category === categoria);
  }
  
  getArticles(): Array<Article> {
    return this.articlesFAKE
  }

  getKeyboards(): Array<Article> {
    return this.keyboards
  }

  getMice(): Array<Article> {
    return this.mice
  }

  getMonitors(): Array<Article> {
    return this.monitors
  }

  getHeadphones(): Array<Article> {
    return this.headphones
  }

  addArticleToCart(articulo: Article) {
    this.cart.push(articulo);
  }
}
