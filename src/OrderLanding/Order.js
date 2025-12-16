import React, { useState } from 'react';
import { ChevronDown, MapPin, Search, ArrowRight, Clock, Handbag, X, Minus, Plus, ShoppingCart } from 'lucide-react';

function CustomDropdown({ options, selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="cursor-pointer flex items-center py-2 px-12 bg-[#d8c9b3]"
      >
        <span>{selectedOption}</span>
        <ChevronDown size={20} className="ml-2" />
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-[#f8f1e4] border rounded-md shadow-lg w-full max-h-64 overflow-auto">
          {options.map(option => (
            <div 
              key={option} 
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }} 
              className="px-4 py-3 cursor-pointer hover:bg-[#d8c9b3] transition-all rounded-md"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MenuCard({ item, section, onOpenModal }) {
  return (
    <div 
      onClick={() => onOpenModal(item, section)} 
      className="mt-6 w-[600px] flex rounded-xl overflow-hidden bg-[#996033] hover:shadow-2xl transition-shadow cursor-pointer"
    >
      <div className="w-1/3">
        <img
          src={`/${section}/${item.image}`}
          className="h-full w-full object-cover"
          alt={item.name}
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-white text-lg font-semibold">{item.name}</h1>
          <p className="text-white/80 text-sm mt-1">{item.description}</p>
        </div>
        <span className="text-white/80 font-medium mt-3">{item.price}</span>
      </div>
    </div>
  );
}

function DrinkCard({ item, section }) {
  return (
    <div className="mt-6 w-[600px] flex rounded-xl overflow-hidden bg-[#996033] hover:shadow-2xl transition-shadow">
      <div className="w-1/3">
        <img
          src={`/${section}/${item.image}`}
          className="h-full w-full object-cover"
          alt={item.name}
        />
      </div>
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-white text-lg font-semibold">{item.name}</h1>
          {/* No description for drinks */}
        </div>
        <span className="text-white/80 font-medium mt-3">{item.price}</span>
      </div>
    </div>
  );
}

function Order() {
 const [selectedMenu, setSelectedMenu] = useState('Menu');
  const [selectedLunch, setSelectedLunch] = useState('Lunch');
  const [selectedDrinks, setSelectedDrinks] = useState('Drinks (Take Out)');
  const [selectedDesserts, setSelectedDesserts] = useState('Desserts (4)');

    // Add these arrays here:
  const menuOptions = [
    'Menu', 'Starters (9)', 'Chicken (8)', 'Lamb (10)', 'Vegetable (10)', 'Seafood (6)', 
    'Party Platters (9)', 'Tandoori (6)', 'Bread (6)', 'Sides (4)', 'Chutney (Sauce) (5)'
  ];
  
  const lunchOptions = ['Lunch'];
  
  const drinksOptions = [
    'Drinks (Take Out)', 'Beer (7)', 'Drinks (13)', 'Cocktails (8)', 'Zero Proof (4)', 
    'By the Glass (11)', 'Red Wine (5)', 'White Wine (4)'
  ];
  
  const dessertsOptions = ['Desserts (4)'];
  
  // Modal state
  const [orderForm, setOrderForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Function to handle opening the modal
  const handleOpenModal = (item, section) => {
    setSelectedItem({ ...item, section });
    setOrderForm(true);
    setQuantity(1);
    setSpecialInstructions('');
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setOrderForm(false);
    setSelectedItem(null);
    setQuantity(1);
    setSpecialInstructions('');
  };

  // Quantity handlers
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // Starters Data Array
  const starters = [
    {
      name: "Vegetable Samosa",
      description: "Crispy turnovers filled with a vibrant mix of special potatoes, peas, and a hint of ginger and fenugreek.",
      price: "$7.79",
      image: "starters1.jpg"
    },
    {
      name: "Meat Samosa",
      description: "Minced lamb and green peas encased in a crispy pastry, spiced with an aromatic blend of herbs and spices.",
      price: "$8.49",
      image: "starters2.jpg"
    },
    {
      name: "Bhujia",
      description: "A crunchy snack featuring spinach and thinly sliced onions seasoned with cumin and fenugreek.",
      price: "$7.49",
      image: "starters3.jpg"
    },
    {
      name: "Papadam",
      description: "Crispy, thin lentil wafers served your way- fried for a bold crunch or roasted for a light, airy crisp. Comes with 5 pieces per order.",
      price: "$4.99",
      image: "starters4.jpg"
    },
    {
      name: "Samosa Chaat",
      description: "A delightful mix of potato turnovers and chickpeas layered with chopped onions, yogurt, tamarind, and mint chutney, offering a burst of flavors in every bite.",
      price: "$14.99",
      image: "starters5.jpg"
    },
    {
      name: "Gobhi Manchurian",
      description: "Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste.",
      price: "$15.79",
      image: "starters6.jpg"
    },
    {
      name: "Chili Paneer",
      description: "Cheese cubes stir-fried with bell peppers, onion, and a blend of ginger, garlic, and chili paste; sprinkled with sesame seeds for an extra crunch.",
      price: "$16.49",
      image: "starters7.jpg"
    },
    {
      name: "Chili Chicken",
      description: "Chicken pieces stir-fried with bell peppers, onion, and a blend of ginger, garlic, and chili paste; sprinkled with sesame seeds for an extra crunch.",
      price: "$16.99",
      image: "starters8.jpg"
    },
    {
      name: "Variety Tray",
      description: "A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas, aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.",
      price: "$16.99",
      image: "starters9.jpg"
    }
  ];

  // Chicken Data Array
  const chickenDishes = [
    {
      name: "Chicken Curry",
      description: "A traditional curry richly seasoned with onions, garlic, ginger, and fenugreek, offering deep aromatic flavors.",
      price: "$18.49",
      image: "chicken1.jpg"
    },
    {
      name: "Methi Chicken",
      description: "Chicken pieces simmered with fenugreek, cream, garlic, and garam masala for a fragrant spiced dish.",
      price: "$18.99",
      image: "chicken2.jpg"
    },
    {
      name: "Chicken Vindaloo",
      description: "A fiery dish with chicken, chili, tomato, and a hint of coconut, known for its bold spice and tangy flavor. Pro-Tip: Order hot or extra hot!",
      price: "$19.99",
      image: "chicken3.jpg"
    },
    {
      name: "Chicken Biryani",
      description: "Aromatic basmati rice cooked with chicken pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness.",
      price: "$20.99",
      image: "chicken4.jpg"
    },
    {
      name: "Butter Chicken",
      description: "Chicken cooked in a creamy tomato sauce, a staple dish celebrated for its rich and velvety texture.",
      price: "$18.99",
      image: "chicken5.jpg"
    },
    {
      name: "Chicken Korma",
      description: "Chicken in a creamy sauce with nuts and a touch of fenugreek, delivering a sweet and savory taste profile.",
      price: "$19.99",
      image: "chicken6.jpg"
    },
    {
      name: "Chicken Tikka Masala",
      description: "Chicken chunks cooked in a rich tomato sauce with light cream, giving it a magical creamy texture.",
      price: "$20.49",
      image: "chicken7.jpg"
    },
    {
      name: "Chicken Saag",
      description: "Tender pieces of chicken simmered in a vibrant, creamy spinach curry mixed with garlic, ginger, and a blend of warming spices.",
      price: "$20.49",
      image: "chicken8.jpg"
    }
  ];

  // Lamb Data Array
  const lambDishes = [
      {
        name: "Lamb Curry",
        description: "Lamb simmered in a fragrant curry sauce with onions, garlic, ginger, and a hint of fenugreek creating a robust and aromatic dish.",
        price: "$18.99",
        image: "lamb1.jpg"
      },
      {
        name: "Rogan Josh",
        description: "Lamb cooked in a rich sauce of yogurt, tomatoes, and garlic, seasoned with a special blend of masala spices for a deep, complex flavor.",
        price: "$20.99",
        image: "lamb2.jpg"
      },
      {
        name: "Lamb Korma",
        description: "Lamb in a creamy sauce with nuts, raisins, and a touch of fenugreek delivering a sweet and savory taste profile.",
        price: "$21.49",
        image: "lamb3.jpg"
      },
      {
        name: "Lamb Saag",
        description: "Tender pieces of lamb simmered in a vibrant, creamy spinach curry infused with garlic, ginger, and a blend of warming spices.",
        price: "$20.99",
        image: "lamb4.jpg"
      },
      {
        name: "Lamb Vindaloo",
        description: "A spicy and tangy lamb dish with chili, tomato, and coconut known for its vibrant and fiery flavor. Pro-Tip: Order hot or extra hot!",
        price: "$20.99",
        image: "lamb5.jpg"
      },
      {
        name: "Goat Curry",
        description: "Bone-in goat cooked with ginger, garlic, and onion for an authentic, richly spiced experience.",
        price: "$21.49",
        image: "lamb6.jpg"
      },
      {
        name: "Lamb Biryani",
        description: "Aromatic basmati rice cooked with lamb pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness.",
        price: "$22.49",
        image: "lamb7.jpg"
      },
      {
        name: "Goat Biryani",
        description: "Aromatic basmati rice cooked with bone-in goat pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness.",
        price: "$20.95",
        image: "lamb8.jpg"
      },
      {
        name: "Lamb Bhuna",
        description: "Tender lamb pieces slow cooked in a thick, richly spiced sauce with caramelized onions, bell peppers, and roasted spices.",
        price: "$21.49",
        image: "lamb9.jpg"
      },
      {
        name: "Lamb Masala",
        description: "Tender lamb pieces cooked in a rich tomato sauce with light cream, giving it a magical creamy texture.",
        price: "$21.99",
        image: "lamb10.jpg"
      }
    ];

  // Vegetable Data Array
  const vegetableDishes = [
    {
      name: "Dal Fry",
      description: "Stir-fried lentils with tomatoes, ginger, and garlic, then simmered with Indian spices for an extra layer of flavor.",
      price: "$17.99",
      image: "vegetable1.jpg"
    },
    {
      name: "Aloo Gobhi",
      description: "Cauliflower and potatoes sautéed with green peas in a traditional seasoning, perfect for those who love a hearty vegetable dish.",
      price: "$18.29",
      image: "vegetable2.jpg"
    },
    {
      name: "Navratan Korma",
      description: "A mix of vegetables, including cauliflower, potatoes, and peppers enriched with cashews and raisins in a creamy sauce.",
      price: "$18.99",
      image: "vegetable3.jpg"
    },
    {
      name: "Paneer Bhurji",
      description: "Shredded cheese delicately flavored with fenugreek and cilantro, offering a fragrant and satisfying meal.",
      price: "$18.99",
      image: "vegetable4.jpg"
    },
    {
      name: "Chana Masala",
      description: "Tender chickpeas cooked in an onion gravy, bursting with flavor and slow-simmered for a rich, satisfying taste.",
      price: "$17.99",
      image: "vegetable5.jpg"
    },
    {
      name: "Palak Paneer",
      description: "Creamy spinach sauce enveloping soft cheese cubes, a rich and comforting classic.",
      price: "$18.29",
      image: "vegetable6.jpg"
    },
    {
      name: "Vegetable Biryani",
      description: "Aromatic basmati rice tossed with cauliflower, tomatoes, snow peas, and potatoes, garnished with nuts and raisins for a crunchy texture.",
      price: "$19.29",
      image: "vegetable7.jpg"
    },
    {
      name: "Paneer Masala",
      description: "Cheese cubes tossed with tomatoes, onions, and peppers in a vibrant masala sauce full of bold flavors.",
      price: "$18.29",
      image: "vegetable8.jpg"
    },
    {
      name: "Chole Palak",
      description: "A hearty classic with chickpeas and creamy spinach, simmered in a spiced onion gravy. A comforting dish that pairs beautifully with rice.",
      price: "$18.49",
      image: "vegetable9.jpg"
    },
    {
      name: "Vegetable Curry",
      description: "Colorful medley of seasonal vegetables simmered in a savory onion gravy with a fragrant blend of spices.",
      price: "$18.49",
      image: "vegetable10.jpg"
    }
  ];


  // Seafood Data Array
  const seafoodDishes = [
    {
      name: "Shrimp Curry",
      description: "Shrimp cooked in a flavorful curry sauce with onions, garlic, ginger, and a hint of fenugreek.",
      price: "$20.99",
      image: "seafood1.jpg"
    },
    {
      name: "Shrimp Masala",
      description: "Shrimp tossed in a tomato sauce with peppers, onions, ginger, and garlic.",
      price: "$22.99",
      image: "seafood2.jpg"
    },
    {
      name: "Shrimp Biryani",
      description: "Aromatic basmati rice cooked with shrimp, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness to this classic dish.",
      price: "$22.49",
      image: "seafood3.jpg"
    },
    {
      name: "Shrimp Vindaloo",
      description: "Spicy shrimp dish made with chili, tomato, and coconut, offering a bold and tangy flavor profile. Pro Tip: Order hot or extra hot!",
      price: "$21.49",
      image: "seafood4.jpg"
    },
    {
      name: "Shrimp Korma",
      description: "Shrimp in a creamy sauce with nuts and a touch of fenugreek, delivering a sweet and savory taste profile.",
      price: "$22.99",
      image: "seafood5.jpg"
    },
    {
      name: "Shrimp Saag",
      description: "Shrimp pieces simmered in a vibrant, creamy spinach curry infused with garlic, ginger, and a blend of warming spices.",
      price: "$22.99",
      image: "seafood6.jpg"
    }
  ];

  // Party Platters Data Array
  const partyPlatters = [
    {
      name: "Samosa Chaat Tray (Serves 4 to 6)",
      description: "Crispy vegetable samosas, crushed and layered with spiced chickpeas, cool yogurt, chopped red onions, and our home-made tamarind and mint chutneys.",
      price: "$42.99",
      image: "platter1.jpg"
    },
    {
      name: "Lamb Curry Party Platter (Serves 4 to 6)",
      description: "A hearty favorite, perfect for sharing! Tender lamb slow-cooked in a bold, flavorful curry sauce, paired with aromatic basmati rice and 4 pieces of naan bread.",
      price: "$59.99",
      image: "platter2.jpg"
    },
    {
      name: "Gobhi Manchurian Tray (Serves 4 to 6)",
      description: "Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste. It's the perfect appetizer for sharing or to add alongside any meal.",
      price: "$44.99",
      image: "platter3.jpg"
    },
    {
      name: "Palak Paneer Party Platter (Serves 4 to 6)",
      description: "A vegetarian favorite, served family-style! Creamy spinach blended with soft cubes of paneer cheese, cooked with mild spices for a rich and comforting dish.",
      price: "$59.99",
      image: "platter4.jpg"
    },
    {
      name: "Butter Chicken Party Platter (Serves 4 to 6)",
      description: "A crowd favorite, now in party size! Tender oven-baked chicken simmered in a rich, creamy tomato sauce—served with fragrant basmati rice and 4 pieces of naan.",
      price: "$59.99",
      image: "platter5.jpg"
    },
    {
      name: "Paneer Masala Party Platter (Serves 4 to 6)",
      description: "Creamy, dreamy, and packed with flavor! Soft paneer cubes soaking in a rich, spiced tomato and onion gravy that is bold while comforting—perfect for sharing.",
      price: "$59.99",
      image: "platter6.jpg"
    },
    {
      name: "Chicken Curry Party Platter (Serves 4 to 6)",
      description: "A classic crowd favorite, in shareable size! Tender chicken simmered in a traditional curry sauce with a blend of house spices. Served with basmati rice and naan.",
      price: "$59.99",
      image: "platter7.jpg"
    },
    {
      name: "Chicken Tikka Masala Party Platter (Serves 4 to 6)",
      description: "Bold flavor, made to share! Tender oven-baked chicken cooked in our signature creamy tomato sauce with sautéed onions and bell peppers—perfect for gatherings.",
      price: "$59.99",
      image: "platter8.jpg"
    },
    {
      name: "Chana Masala Party Platter (Serves 4 to 6)",
      description: "A vegetarian favorite, served family-style! Chickpeas simmered in a rich, spiced tomato gravy that is both hearty and flavorful—perfect for sharing.",
      price: "$59.99",
      image: "platter9.jpg"
    }
  ];

  // Tandoori Data Array
  const tandooriDishes = [
    {
      name: "Chicken Tikka",
      description: "Boneless chicken pieces marinated in lime juice, vinegar, and yogurt, grilled until perfectly charred for a tangy and tender bite.",
      price: "$23.99",
      image: "tandoori1.jpg"
    },
    {
      name: "Chicken Tandoori (Half)",
      description: "Bone-in chicken marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish. Comes with 6 total pieces.",
      price: "$17.99",
      image: "tandoori2.jpg"
    },
    {
      name: "Mixed Platter",
      description: "A sampler of Tandoori favorites, featuring chicken tandoori, chicken tikka, seekh kebab, and 2 lamb chops. Perfect for sharing!",
      price: "$32.49",
      image: "tandoori3.jpg"
    },
    {
      name: "Seekh Kebab",
      description: "Minced chicken/lamb kebabs mixed with onions, peppers, and masala spices, skewered and grilled in the tandoor for a rich flavorful experience.",
      price: "$24.49",
      image: "tandoori4.jpg"
    },
    {
      name: "Chicken Tandoori (Full)",
      description: "Bone-in chicken marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish. Comes with 12 total pieces.",
      price: "$30.99",
      image: "tandoori5.jpg"
    },
    {
      name: "Lamb Chops",
      description: "Lamb chops marinated in yogurt with a hint of nutmeg and vinegar, grilled to tender perfection, offering a luxurious and aromatic dish.",
      price: "$39.79",
      image: "tandoori6.jpg"
    }
  ];

  // Drinks Data Array (Beer)
  const beers = [
    {
      name: "Corona",
      price: "$4.95",
      image: "drink1.jpg"
    },
    {
      name: "Yuengling",
      price: "$4.95",
      image: "drink2.jpg"
    },
    {
      name: "Heineken",
      price: "$4.95",
      image: "drink3.jpg"
    },
    {
      name: "Michelob Ultra",
      price: "$4.95",
      image: "drink4.jpg"
    },
    {
      name: "Kingfisher",
      price: "$6.95",
      image: "drink5.jpg"
    },
    {
      name: "Taj",
      price: "$10.95",
      image: "drink6.jpg"
    },
    {
      name: "Haywards 5000",
      price: "$11.95",
      image: "drink7.jpg"
    }
  ];

  // Soft Drinks & Other Drinks Data Arrays
  const softDrinks = [
    {
      name: "Soft Drinks",
      description: "Coke, Diet Coke, Sprite, Lemonade, Ginger Ale",
      price: "$3.29",
      image: "drink1.jpg"
    },
    {
      name: "Mango Juice",
      description: "",
      price: "$5.49",
      image: "drink2.jpg"
    },
    {
      name: "Coffee",
      description: "",
      price: "$3.29",
      image: "drink3.jpg"
    },
    {
      name: "Cappuccino",
      description: "",
      price: "$4.99", // Assuming standard price
      image: "drink4.jpg"
    },
    {
      name: "Iced Tea",
      description: "Unsweetened or Sweet",
      price: "$3.79",
      image: "drink5.jpg"
    },
    {
      name: "Mango Lassi",
      description: "Mango, Sweet, Salty",
      price: "$5.79",
      image: "drink6.jpg"
    },
    {
      name: "Indian Tea (Chai)",
      description: "",
      price: "$3.95",
      image: "drink7.jpg"
    },
    {
      name: "Espresso",
      description: "",
      price: "$3.95",
      image: "drink8.jpg"
    },
    {
      name: "Cafe Latte",
      description: "",
      price: "$4.99",
      image: "drink9.jpg"
    },
    {
      name: "San Pellegrino",
      description: "",
      price: "$6.99",
      image: "drink10.jpg"
    },
    {
      name: "1/2 Gallon Mango Juice",
      description: "",
      price: "$17.99",
      image: "drink11.jpg"
    },
    {
      name: "Acqua Panna",
      description: "",
      price: "$5.99",
      image: "drink12.jpg"
    },
    {
      name: "1/2 Gallon Mango Lassi",
      description: "",
      price: "$23.99",
      image: "drink13.jpg"
    }
  ];

  // Cocktails Data Array
  const cocktails = [
    {
      name: "Tamarind Margarita",
      description: "Tequila, Tamarind, Lime, Salt",
      price: "$11.99",
      image: "cocktail1.jpg"
    },
    {
      name: "Lychee-Tini",
      description: "Vodka, Lychee, Bitters",
      price: "$10.99",
      image: "cocktail2.jpg"
    },
    {
      name: "Smoked Old Fashioned",
      description: "",
      price: "$13.99",
      image: "cocktail3.jpg"
    },
    {
      name: "Ginger Whiskey Mojito",
      description: "Whiskey, Ginger, Mint, Lime",
      price: "$11.99",
      image: "cocktail4.jpg"
    },
    {
      name: "Cucumber Rush",
      description: "Gin, Cucumber, Mint, Lime",
      price: "$11.99",
      image: "cocktail5.jpg"
    },
    {
      name: "Tiger Lassi",
      description: "Infused Rum, Mango, Dairy",
      price: "$10.99",
      image: "cocktail6.jpg"
    },
    {
      name: "Indian Summer",
      description: "Rum, Melon, Pineapple, Lime",
      price: "$11.99",
      image: "cocktail7.jpg"
    },
    {
      name: "Gulabi Rani (Rose Queen)",
      description: "",
      price: "$10.49",
      image: "cocktail8.jpg"
    }
  ];

  // By The Glass Wine Data Array
  const wineByGlass = [
    {
      name: "Chardonnay",
      description: "",
      price: "$3.99",
      image: "glass1.jpg"
    },
    {
      name: "Riesling",
      description: "",
      price: "$3.99",
      image: "glass2.jpg"
    },
    {
      name: "Cabernet Sauvignon",
      description: "",
      price: "$3.99",
      image: "glass3.jpg"
    },
    {
      name: "Pinot Noir",
      description: "",
      price: "$3.99",
      image: "glass4.jpg"
    },
    {
      name: "Moscato",
      description: "",
      price: "$9.99", // From the second screenshot
      image: "glass5.jpg"
    },
    {
      name: "Pinot Grigio",
      description: "",
      price: "$3.99",
      image: "glass6.jpg"
    },
    {
      name: "Chenin Blanc, India",
      description: "",
      price: "$9.99",
      image: "glass7.jpg"
    },
    {
      name: "Merlot",
      description: "",
      price: "$3.99",
      image: "glass8.jpg"
    },
    {
      name: "Shiraz, India",
      description: "",
      price: "$9.99",
      image: "glass9.jpg"
    },
    {
      name: "Sangria (White)",
      description: "",
      price: "$9.99",
      image: "glass10.jpg"
    },
    {
      name: "Sangria (Red)",
      description: "",
      price: "$9.99",
      image: "glass11.jpg"
    }
  ];

  // Red Wine by the Bottle Data Array
  const redWine = [
    {
      name: "Sula Vineyards Shiraz, India",
      description: "",
      price: "$29.99",
      image: "red1.jpg"
    },
    {
      name: "Columbia Crest Merlot, Washington",
      description: "",
      price: "$31.99",
      image: "red2.jpg"
    },
    {
      name: "Josh Cellars Cabernet, California",
      description: "",
      price: "$41.99",
      image: "red3.jpg"
    },
    {
      name: "La Crema Pinot Noir, California",
      description: "",
      price: "$48.99",
      image: "red4.jpg"
    },
    {
      name: "Caymus Cabernet Sauvignon, Napa",
      description: "",
      price: "$39.99",
      image: "red5.jpg"
    }
  ];

  // White Wine by the Bottle Data Array
  const whiteWine = [
    {
      name: "Sula Vineyards Chenin Blanc, India",
      description: "",
      price: "$29.95",
      image: "white1.jpg"
    },
    {
      name: "Beringer Founders' Chardonnay, Sonoma",
      description: "",
      price: "$38.95",
      image: "white2.jpg"
    },
    {
      name: "Barone Fini Pinot Grigio, Italy",
      description: "",
      price: "$32.95",
      image: "white3.jpg"
    },
    {
      name: "Pouilly-Fuissé, France",
      description: "",
      price: "$49.95",
      image: "white4.jpg"
    }
  ];

  // Desserts Data Array
  const desserts = [
    {
      name: "Mango Ice Cream",
      description: "Kesar, Dairy, Honey",
      price: "$6.29",
      image: "dessert1.jpg"
    },
    {
      name: "Rice Pudding",
      description: "Basmati, Cardamom, Nuts",
      price: "$6.29",
      image: "dessert2.jpg"
    },
    {
      name: "Gulab Jamun",
      description: "Rose Water, Coconut Flakes, Saffron",
      price: "$6.29",
      image: "dessert3.jpg"
    },
    {
      name: "Mango Cheesecake",
      description: "Cream Cheese, Mango Mousse, Almonds, Graham Cracker Crumbs",
      price: "$9.29",
      image: "dessert4.jpg"
    }
  ];

  // Lunch Data Array
  const lunchItems = [
    {
      name: "Express Thali",
      description: "(EXPRESS THALI)",
      price: "$15.90",
      image: "lunch1.jpg"
    }
  ];

  // Chutney (Sauce) Data Array
  const sauces = [
    {
      name: "Onion Sauce",
      description: "",
      price: "$1.00",
      image: "sauce1.jpg"
    },
    {
      name: "Mint Sauce",
      description: "",
      price: "$1.00",
      image: "sauce2.jpg"
    },
    {
      name: "Mango Sauce",
      description: "",
      price: "$1.00",
      image: "sauce3.jpg"
    },
    {
      name: "Tamarind Sauce",
      description: "",
      price: "$1.00",
      image: "sauce4.jpg"
    },
    {
      name: "Raita (Cucumber Yogurt)",
      description: "",
      price: "$1.00",
      image: "sauce5.jpg"
    }
  ];

  return (
    <div className="bg-[#d8c9b3]">
      {/* TOP HEADER SECTION */}
      <div className="flex gap-[600px] justify-center items-center mt-24">
        <div className="mt-20">
          <h1 className="font-playfair text-3xl">Amrit Palace Ocala, FL</h1>
          <p className="mt-3">3415 SW College Rd, Ocala, FL</p>
        </div>
        <div>
          <div className="border border-gray-600 py-3 rounded-full">
            <span className="flex justify-center items-center text-amber-700">
              <Handbag /> Pickup Only
            </span>
          </div>

          <p className="flex items-center mt-6">
            <MapPin size={20}/> &nbsp;&nbsp;Pickup from 
            <span className="text-xl">&nbsp;&nbsp;3415 SW College Rd, Ocala, FL</span>
          </p>

          <div className="mt-3 w-full">
            <button className="flex w-full py-2 px-1 hover:bg-amber-600/20">
              <Clock size={20}/> &nbsp;&nbsp;Pickup tomorrow at 7:00 PM 
              <ArrowRight className="ml-40" size={20}/>
            </button>
          </div>
        </div>
      </div>

      {/* MENU BAR SECTION */}
      <div className="mt-10 flex justify-center items-center">
        <div className="flex items-center justify-between gap-[200px]">
          {/* LEFT SIDE SELECTS */}
          <div className="flex items-center space-x-2 text-lg">
            {/* MENU (custom dropdown with padding and scroll) */}
            <CustomDropdown 
              options={menuOptions} 
              selectedOption={selectedMenu} 
              setSelectedOption={setSelectedMenu}
            />

            {/* LUNCH (custom dropdown) */}
            <CustomDropdown 
              options={lunchOptions} 
              selectedOption={selectedLunch} 
              setSelectedOption={setSelectedLunch}
            />

            {/* DRINKS (custom dropdown) */}
            <CustomDropdown 
              options={drinksOptions} 
              selectedOption={selectedDrinks} 
              setSelectedOption={setSelectedDrinks}
            />

            {/* DESSERTS (custom dropdown) */}
            <CustomDropdown 
              options={dessertsOptions} 
              selectedOption={selectedDesserts} 
              setSelectedOption={setSelectedDesserts}
            />
          </div>

          {/* SEARCH BAR */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Starters Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h1 className='font-playfair text-2xl'>Menu</h1>
          <h3 className='text-xl'>Starters</h3>
          <p className='mt-3'>Served with onion & tamarind sauce.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {starters.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="starters" 
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>

      {/* Chicken Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Chicken</h3>
          <p className='mt-3'>Served with a choice of 2 sides.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {chickenDishes.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="chicken" 
            />
          ))}
        </div>
      </div>

       {/* Lamb Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Lamb</h3>
          <p className='mt-3'>Served with a choice of 2 sides.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {lambDishes.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="lamb" 
            />
          ))}
        </div>
      </div>

      {/* Vegetable Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Vegetable</h3>
          <p className='mt-3'>Served with a choice of 2 sides.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {vegetableDishes.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="vegetable" 
            />
          ))}
        </div>
      </div>

      {/* Seafood Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Seafood</h3>
          <p className='mt-3'>Served with a choice of 2 sides.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {seafoodDishes.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="seafood" 
            />
          ))}
        </div>
      </div>

      {/* Party Platters Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Party Platters</h3>
          <p className='mt-3'>Perfect for family meals and group gatherings.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {partyPlatters.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="platters" 
            />
          ))}
        </div>
      </div>

      {/* Tandoori Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Tandoori</h3>
          <p className='mt-3'>Served with a choice of 2 sides.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {tandooriDishes.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="tandoori" 
            />
          ))}
        </div>
      </div>

      {/* Chutney (Sauce) Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Chutney (Sauce)</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {sauces.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="sauce" 
            />
          ))}
        </div>
      </div>

      {/* Lunch Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Lunch</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {lunchItems.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="lunch" 
            />
          ))}
        </div>
      </div>

      {/* Beer Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Beer</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {beers.map((item, index) => (
            <DrinkCard 
              key={index} 
              item={item} 
              section="drinks" 
            />
          ))}
        </div>
      </div>

      {/* Drinks Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Drinks</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {softDrinks.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="drinks2" 
            />
          ))}
        </div>
      </div>

      {/* Cocktails Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Cocktails</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {cocktails.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="cocktails" 
            />
          ))}
        </div>
      </div>

      {/* By The Glass Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>By The Glass</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {wineByGlass.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="glass" 
            />
          ))}
        </div>
      </div>

      {/* Red Wine Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Red Wine by the Bottle</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {redWine.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="RedWine" 
            />
          ))}
        </div>
      </div>

      {/* White Wine Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>White Wine by the Bottle</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {whiteWine.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="WhiteWine" 
            />
          ))}
        </div>
      </div>

      {/* Desserts Section */}
      <div className='max-w-7xl mx-auto mt-11'>
        <div>
          <h3 className='text-xl'>Desserts</h3>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-6'>
          {desserts.map((item, index) => (
            <MenuCard 
              key={index} 
              item={item} 
              section="desserts" 
            />
          ))}
        </div>
      </div>

      {/* Order Form Modal */}
      {orderForm && selectedItem && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm'>
          <div className='relative bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl'>
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className='absolute top-4 right-4 z-10 bg-white/90 rounded-full p-2 hover:bg-white transition-colors'
            >
              <X size={24} />
            </button>
            
            {/* Image Section */}
            <div className='w-full h-64 bg-gray-200'>
              <img 
                src={`/${selectedItem.section}/${selectedItem.image}`}
                className='w-full h-full object-cover'
                alt={selectedItem.name}
              />
            </div>
            
            {/* Content Section */}
            <div className='p-6'>
              <div className='mb-6'>
                <div className='flex justify-between items-start mb-3'>
                  <h1 className='text-2xl font-bold text-gray-900'>{selectedItem.name}</h1>
                  <span className='text-xl font-semibold text-amber-700'>{selectedItem.price}</span>
                </div>
                <p className='text-gray-600'>{selectedItem.description}</p>
              </div>
              
              {/* Special Instructions */}
              <div className='mb-6'>
                <h3 className='font-semibold text-gray-900 mb-2'>Special Instructions</h3>
                <textarea 
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder='Add a note (e.g., no nuts, no onions)'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none'
                  rows={3}
                />
              </div>
              
              {/* Quantity Selector */}
              <div className='flex justify-between items-center mb-8'>
                <span className='font-semibold text-gray-900'>Quantity</span>
                <div className='flex items-center space-x-4'>
                  <button 
                    onClick={decreaseQuantity}
                    className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors'
                  >
                    <Minus size={20} />
                  </button>
                  <span className='text-xl font-semibold w-8 text-center'>{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className='w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors'
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <button className='w-full py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2'>
                <ShoppingCart size={20} />
                <span>Add to Cart - ${(parseFloat(selectedItem.price.replace('$', '')) * quantity).toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;