export interface Recipe {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  description: string;
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    image: "https://via.placeholder.com/150",
    ingredients: ["spaghetti", "tomate", "carne molida", "ajo", "cebolla"],
    description:
      "Cocina los spaghetti según las instrucciones del paquete. Sofríe ajo y cebolla, añade la carne molida y cocina hasta que esté dorada. Agrega el tomate triturado y cocina a fuego lento. Mezcla la salsa con los spaghetti y sirve caliente.",
  },
  {
    id: 2,
    title: "Ensalada César",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "lechuga romana",
      "crutones",
      "parmesano",
      "pollo a la parrilla",
      "aderezo César",
    ],
    description:
      "Lava y corta la lechuga. Añade crutones, queso parmesano rallado y tiras de pollo a la parrilla. Aliña con aderezo César y mezcla bien antes de servir.",
  },
  {
    id: 3,
    title: "Sopa de Tomate",
    image: "https://via.placeholder.com/150",
    ingredients: ["tomates", "caldo de verduras", "ajo", "albahaca", "crema"],
    description:
      "Sofríe ajo en una olla, añade tomates picados y caldo de verduras. Cocina a fuego lento durante 20 minutos. Licúa la mezcla hasta que quede suave. Añade crema y albahaca picada antes de servir.",
  },
  {
    id: 4,
    title: "Omelette de Queso",
    image: "https://via.placeholder.com/150",
    ingredients: ["huevos", "queso rallado", "sal", "pimienta", "mantequilla"],
    description:
      "Bate los huevos con sal y pimienta. Derrite mantequilla en una sartén a fuego medio. Vierte los huevos batidos y cocina hasta que estén casi firmes. Espolvorea queso rallado y dobla el omelette antes de servir.",
  },
  {
    id: 5,
    title: "Smoothie de Frutas",
    image: "https://via.placeholder.com/150",
    ingredients: ["banana", "fresas", "yogur", "leche", "miel"],
    description:
      "Coloca todos los ingredientes en una licuadora y mezcla hasta obtener una consistencia suave. Sirve frío en un vaso alto.",
  },
  {
    id: 6,
    title: "Pollo al Curry",
    image: "https://via.placeholder.com/150",
    ingredients: ["pollo", "curry en polvo", "leche de coco", "cebolla", "ajo"],
    description:
      "Corta el pollo en trozos y saltéalo con cebolla y ajo. Añade curry en polvo y mezcla bien. Vierte la leche de coco y cocina a fuego lento hasta que el pollo esté tierno. Sirve con arroz.",
  },
  {
    id: 7,
    title: "Tostadas Francesas",
    image: "https://via.placeholder.com/150",
    ingredients: ["pan de molde", "huevos", "leche", "canela", "azúcar"],
    description:
      "Bate los huevos con leche, canela y azúcar. Sumerge las rebanadas de pan en la mezcla y fríelas en una sartén con mantequilla hasta que estén doradas por ambos lados.",
  },
  {
    id: 8,
    title: "Guacamole",
    image: "https://via.placeholder.com/150",
    ingredients: ["aguacate", "tomate", "cebolla", "cilantro", "limón"],
    description:
      "Machaca los aguacates en un tazón. Añade tomate y cebolla picados, cilantro y el jugo de limón. Mezcla bien y sazona al gusto.",
  },
  {
    id: 9,
    title: "Pizza Margarita",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "masa de pizza",
      "salsa de tomate",
      "mozzarella",
      "albahaca",
      "aceite de oliva",
    ],
    description:
      "Extiende la masa de pizza y cubre con salsa de tomate. Añade rodajas de mozzarella y hojas de albahaca fresca. Hornea a 220°C durante 15-20 minutos hasta que esté dorada.",
  },
  {
    id: 10,
    title: "Hamburguesa Clásica",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "pan de hamburguesa",
      "carne de res molida",
      "lechuga",
      "tomate",
      "queso cheddar",
    ],
    description:
      "Forma hamburguesas con la carne molida y cocínalas en una parrilla o sartén. Coloca la carne en el pan y añade lechuga, tomate y queso. Agrega condimentos al gusto.",
  },
  {
    id: 11,
    title: "Ensalada de Frutas",
    image: "https://via.placeholder.com/150",
    ingredients: ["manzana", "plátano", "uvas", "naranja", "yogur"],
    description:
      "Corta todas las frutas en trozos pequeños y mézclalas en un tazón. Añade yogur y mezcla suavemente. Refrigera antes de servir.",
  },
  {
    id: 12,
    title: "Arroz Frito",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "arroz cocido",
      "huevos",
      "zanahoria",
      "guisantes",
      "salsa de soja",
    ],
    description:
      "Fríe los huevos revueltos en una sartén. Añade verduras picadas y sofríe. Incorpora el arroz cocido y mezcla bien. Agrega salsa de soja al gusto y cocina unos minutos más.",
  },
  {
    id: 13,
    title: "Pancakes",
    image: "https://via.placeholder.com/150",
    ingredients: ["harina", "huevos", "leche", "polvo de hornear", "azúcar"],
    description:
      "Mezcla todos los ingredientes hasta obtener una masa homogénea. Vierte porciones en una sartén caliente y cocina hasta que aparezcan burbujas. Voltea y cocina el otro lado. Sirve con miel o jarabe.",
  },
  {
    id: 14,
    title: "Sándwich de Atún",
    image: "https://via.placeholder.com/150",
    ingredients: ["pan", "atún enlatado", "mayonesa", "lechuga", "tomate"],
    description:
      "Mezcla el atún con mayonesa. Unta la mezcla en el pan y añade lechuga y rodajas de tomate. Cubre con otra rebanada de pan.",
  },
  {
    id: 15,
    title: "Batido de Chocolate",
    image: "https://via.placeholder.com/150",
    ingredients: [
      "leche",
      "helado de chocolate",
      "cacao en polvo",
      "crema batida",
    ],
    description:
      "Combina leche, helado y cacao en una licuadora hasta que quede suave. Vierte en un vaso y decora con crema batida y una pizca de cacao.",
  },
];
