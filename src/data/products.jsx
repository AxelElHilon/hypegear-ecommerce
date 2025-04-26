// Importamos todas las imágenes automáticamente
const images = import.meta.glob("../assets/images/*.png", { eager: true });

// Función para formatear el nombre del archivo basado en el título
const formatFilename = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-") // espacios → guiones
    .replace(/[^\w-]/g, ""); // saca caracteres raros
};

// Definimos los productos (sin ruta de imagen manual)
const products = [
  {
    id: 1,
    title: "Buzo Nike",
    price: 15999,
  },
  {
    id: 2,
    title: "Buzo Adidas",
    price: 22999,
  },
  {
    id: 3,
    title: "Buzo The North Face",
    price: 34999,
  },
  {
    id: 4,
    title: "Remera Negra",
    price: 18999,
  },
  {
    id: 5,
    title: "Campera Adidas",
    price: 28999,
  },
  {
    id: 6,
    title: "Remera Blanca",
    price: 16999,
  },
];

// Ahora mapeamos los productos para agregarle su imagen automáticamente
const productsWithImages = products.map((product) => {
  const filename = formatFilename(product.title); // ejemplo: "buzo-nike-air"
  const imagePath = `../assets/images/${filename}.png`; // ejemplo: "../assets/images/buzo-nike-air.png"

  return {
    ...product,
    image: images[imagePath]?.default || images["../assets/images/no-image.png"].default, 
  };
});

export default productsWithImages;
