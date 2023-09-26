import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/imagenes";
import { verde1, kirbys1, picachu, snorlax2, corona1, conejo, pinguino  } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#products", label: "Productos" },
    { href: "#about-us", label: "Nosotros" },
    { href: "#contact-us", label: "Contactanos" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const peluches = [
    {
        thumbnail: picachu,
        bigShoe: picachu,
    },
    {
        thumbnail: kirbys1,
        bigShoe: kirbys1,
    },
    {
        thumbnail: snorlax2,
        bigShoe: snorlax2,
    },
];

export const statistics = [
    { value: '1k+', label: 'Marcas' },
    { value: '10+', label: 'Tiendas' },
    { value: '250k+', label: 'Clientes' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const productsP = [
    {
        imgURL: verde1,
        name: "MineCraft Zombie",
        price: "$8.00",
    },
    {
        imgURL: corona1,
        name: "Corona",
        price: "$5.00",
    },
    {
        imgURL: conejo,
        name: "Conejo",
        price: "$9.50",
    },
    {
        imgURL: pinguino,
        name: "King Bomb",
        price: "$10.00",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Delivery",
        subtext: "Disfrute de compras sin problemas con nuestro servicio de envío gratuito."
    },
    {
        imgURL: shieldTick,
        label: "Variados Metodos de Pago",
        subtext: "Ofrecemeos varias opciones de pago como Binance, Zelle, Pago Movil, Divisa"
    },
    {
        imgURL: support,
        label: "Nos Encanta ayudarte",
        subtext: "Nuestro dedicado equipo está aquí para ayudarle en lo que necesites de nuestros productos"
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Josemrto Martinez',
        rating: 4.5,
        feedback: "Genial toda su mercancia, me encanta, 100% recomendados, vayan y comprenles ^_^"
    },
    {
        imgURL: customer2,
        customerName: 'Brenda de Luna',
        rating: 4.5,
        feedback: "Bello todo, lo quiero todo jajajaja, que peluches mas hermosos!!!"
    }
];


export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Pokemon", link: "/" },
            { name: "MineCraft", link: "/" },
            { name: "Nintendo", link: "/" },
            { name: "Naruto", link: "/" },
            { name: "Dragon Ball", link: "/" },
            { name: "One Piece", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Nosotros", link: "#about-us" },
            { name: "FAQs", link: "/" },
            { name: "Como Trabajamos", link: "/" },
            { name: "Politicas de Privacidad", link: "/" },
            { name: "Politicas de Pago", link: "/" },
        ],
    },
    {
        title: "Contacto",
        links: [
            { name: "francelys@chelyshop.com", link: "mailto:customer@chelyshop.com" },
            { name: "+58554862354", link: "tel:+58554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/profile.php?id=100085555581181" },
    { src: twitter, alt: "twitter logo", link: "/"},
    { src: instagram, alt: "instagram logo", link: "https://www.instagram.com/_chely_shop_/?hl=es" },
];