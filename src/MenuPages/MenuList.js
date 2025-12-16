import React from 'react'

function MenuList() {
  return (
    <div>
        <div className='border border-gray-500/40 flex mt-32 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <h1 className='border border-gray-500/40 m-7 p-4 text-center text-3xl'>
                    Closed
                </h1>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Lunch Specials</h1>
                    <p>Available Tuesday–Thursday, 11 AM – 3 PM</p>
                    <p>
                        Enjoy a complete and satisfying meal by selecting two of our rich and flavorful curries, <br />
                        perfectly complemented with a traditional side dish, freshly baked bread, and a sweet dessert <br />
                        to finish.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='border-b border-gray-500/40 text-center'>
                    <p className='font-playfair text-3xl p-3'>Amrit Express Thali (Tray) — $13.99</p>
                </div>
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Choose Two</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Palak Paneer</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Lamb Curry</h3>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Aloo Gobhi</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Channa Masala</h3>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Chicken Curry</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Paneer Masala</h3>
                    </div>
                </div>
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Choose One</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Chickpea Salad</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Dal Soup</h3>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Crispy Cabbage</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Basmati Rice</h3>
                    </div>
                </div>
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Choose One</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Tandoori Roti</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Naan</h3>
                    </div>
                </div>
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Choose One</h3>
                </div>
                <div className='flex'>
                    <div className='w-full border-r border-gray-500/40'>
                        <h3 className='font-playfair text-xl p-3'>Gulab Jamun (1-pc)</h3>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-playfair text-xl p-3'>Rice Pudding</h3>
                    </div>
                </div>
            </div>
        </div>

        {/* Second Part */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Chicken</h1>
                    <p>
                      Classic and signature chicken dishes cooked with authentic spices.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Methi Chicken</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            Chicken pieces simmered with fenugreek, cream, garlic, and garam masala for a fragrantly spiced dish.

                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Butter Chicken</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            Chicken cooked in a creamy tomato sauce, a staple dish celebrated for its rich and velvety texture.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Korma</h3>
                            <h3 className='text-2xl'>$19.99</h3>
                        </div>
                        <p>
                            Chicken in a creamy sauce with nuts and a touch of fenugreek, delivering a sweet and savory taste profile.

                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Curry</h3>
                            <h3 className='text-2xl'>$18.49</h3>
                        </div>
                        <p>
                            A traditional curry richly seasoned with onions, garlic, ginger, and fenugreek, offering deep aromatic flavors.
                        </p>
                    </div>
                </div>
                 <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Biryani</h3>
                            <h3 className='text-2xl'>$20.99</h3>
                        </div>
                        <p>
                            Aromatic basmati rice cooked with chicken pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness to this classic dish. Served with rayta.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Tikka Masala</h3>
                            <h3 className='text-2xl'>$20.49</h3>
                        </div>
                        <p>
                            Chicken chunks cooked in a rich tomato sauce with light cream, giving it a magical creamy texture.
                        </p>
                    </div>
                </div>
                 <div className='flex border-b border-gray-500/40'>
                    <div className='w-[550px] border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Biryani</h3>
                            <h3 className='text-2xl'>$20.99</h3>
                        </div>
                        <p>
                            Aromatic basmati rice cooked with chicken pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness to this classic dish. Served with rayta.
                        </p>
                    </div>
                </div>
            </div>
        </div>

         {/* Third Part */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Appetizer</h1>
                    <p>
                      Light starters and shareable bites to begin your meal.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Vegetable Samosa(V)</h3>
                            <h3 className='text-2xl'>$7.79</h3>
                        </div>
                        <p>
                            Crispy turnovers filled with a vibrant mix of spiced potatoes, peas, and a hint of ginger and fenugreek.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Meat Samosa</h3>
                            <h3 className='text-2xl'>$8.49</h3>
                        </div>
                        <p>
                            Minced lamb and green peas encased in a crispy pastry, spiced with an aromatic blend of herbs and spices.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Bhujia (V)</h3>
                            <h3 className='text-2xl'>$7.49</h3>
                        </div>
                        <p>
                            A crunchy snack featuring spinach and thinly sliced onions seasoned with cumin and fenugreek.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Samosa Chaat</h3>
                            <h3 className='text-2xl'>$14.99</h3>
                        </div>
                        <p>
                            A delightful mix of potato turnovers and chickpeas layered with chopped onions, yogurt, tamarind, and mint chutney, offering a burst of flavors in every bite.
                        </p>
                    </div>
                </div>
                 <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Variety Tray</h3>
                            <h3 className='text-2xl'>$16.99</h3>
                        </div>
                        <p>
                            A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas, aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Gobhi Manchurian (V)</h3>
                            <h3 className='text-2xl'>$15.79</h3>
                        </div>
                        <p>
                            Golden fried cauliflower florets tossed in a savory mix of onion, garlic, and chili paste.
                        </p>
                    </div>
                </div>
                 <div className='flex border-b border-gray-500/40'>
                    <div className='w-[550px] border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chilli Chicken</h3>
                            <h3 className='text-2xl'>$16.99</h3>
                        </div>
                        <p>
                            Chicken pieces stir-fried with bell peppers, onion, and a blend of ginger, garlic, and chili paste, sprinkled with sesame seeds for an extra crunch.
                        </p>
                    </div>
                    <div className='w-[550px] border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Papadam</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                        <p>
                            Crispy, thin lentil wafers served your way- fried for a bold crunch or roasted for a light, airy crisp. Comes with 5 pieces per order.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Fourth Part */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Lamb</h1>
                    <p>
                      Tender lamb specialties rich in flavor and tradition.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Rogan Josh</h3>
                            <h3 className='text-2xl'>$20.99</h3>
                        </div>
                        <p>
                            Lamb cooked in a rich sauce of yogurt, tomatoes, and garlic, seasoned with a special blend of masala spicers for a deep, complex flavor.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lamb Korma</h3>
                            <h3 className='text-2xl'>$21.99</h3>
                        </div>
                        <p>
                            Lamb in a creamy sauce with nuts, raisins, and a touch of fenugreek delivering a sweet and savory taste profile.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lamb Curry</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            Lamb simmered in a fragrant curry sauce with onions, garlic, ginger, and a hint of fenugreek creating a robust and aromatic dish.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lamb Vindaloo</h3>
                            <h3 className='text-2xl'>$20.99</h3>
                        </div>
                        <p>
                            A spicy and tangy lamb dish with chili, tomato, and coconut known for its vibrant and fiery flavor.
                        </p>
                    </div>
                </div>
                 <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Variety Tray</h3>
                            <h3 className='text-2xl'>$16.99</h3>
                        </div>
                        <p>
                            A sampler platter perfect for sharing, featuring a mix of vegetable and meat samosas, aloo pakora, chicken pakora, cheese pakora, bhujia, and papadam.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lamb Biryani</h3>
                            <h3 className='text-2xl'>$22.49</h3>
                        </div>
                        <p>
                            Aromatic basmati rice cooked with lamb pieces, onions, ginger, and garlic, mixed with nuts and raisins to add a touch of richness to this classic dish. Served with rayta.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Fifth Part */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Tandoori</h1>
                    <p>
                      Charcoal-grilled favorites from the traditional clay oven.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Tikka</h3>
                            <h3 className='text-2xl'>$23.99</h3>
                        </div>
                        <p>
                            Boneless chicken pieces marinated in lime juice, vinegar, and yogurt, grilled until perfectly charred for a tangy and tender bite.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Seikh Kebab</h3>
                            <h3 className='text-2xl'>$24.49</h3>
                        </div>
                        <p>
                            Minced meat kebabs mixed with onions, peppers, and masala spices, skewered and grilled in the tandoor for a rich flavorful experience.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chicken Tandoori</h3>
                            <h3 className='text-2xl'>Half $17.99 / Full $30.99</h3>
                        </div>
                        <p>
                            Chicken marinated in yogurt, ginger, and garlic, then grilled in a clay oven for a smoky and succulent finish.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lamb Chops</h3>
                            <h3 className='text-2xl'>$39.29</h3>
                        </div>
                        <p>
                            Lamb chops marinated in yogurt with a hint of nutmeg and vinegar, grilled to tender perfection, offering a luxurious and aromatic dish.
                        </p>
                    </div>
                </div>
                <div className='flex border-r border-gray-500/40'>
                    <div className='w-[550px] border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Mixed Platter</h3>
                            <h3 className='text-2xl'>$32.49</h3>
                        </div>
                        <p>
                            A sampler of tandoori favorites, featuring chicken tandoori, chicken tikka, seikh kebab, and a lamb chop. Perfect for sharing.
                        </p>
                    </div>
                </div>
            </div>
        </div>

                {/* Sixth Part - Seafood */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Seafood</h1>
                    <p>
                      Freshly prepared fish and shrimp with bold seasoning.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Shrimp Vindaloo</h3>
                            <h3 className='text-2xl'>$21.49</h3>
                        </div>
                        <p>
                            Spicy shrimp dish made with chili, tomato, and coconut, offering a bold and tangy flavor profile.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Shrimp Curry</h3>
                            <h3 className='text-2xl'>$20.99</h3>
                        </div>
                        <p>
                            Shrimp cooked in a flavorful curry sauce with onions, garlic, ginger, and a hint of fenugreek.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Shrimp Masala</h3>
                            <h3 className='text-2xl'>$22.99</h3>
                        </div>
                        <p>
                            Shrimp tossed in a tomato sauce with peppers, onions, ginger, and garlic.
                        </p>
                    </div>
                    <div className='w-full'></div>
                </div>
            </div>
        </div>

                {/* Seventh Part - Sides & Breads */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Sides & Breads</h1>
                    <p>
                      Fluffy breads and comforting sides to complete your plate.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Basmati Rice</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                        <p>
                            Perfectly steamed rice, light, fluffy, and fragrant, serves as an ideal base for any of our robust, flavorful dishes.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Dal Soup</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                        <p>
                            Our famous soup made from yellow split pea lentils, simmered with a hint of ginger and garlic.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chickpea Salad</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                        <p>
                            A refreshing mix of chickpeas, iceberg lettuce, sliced red onions, cherry tomatoes, and cilantro.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Fried Cabbage</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                        <p>
                            Chopped cabbage sautéed with turmeric, cumin, garlic, and ginger, offering delightful and vibrant colors.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Bhakura</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                        <p>
                            Deep-fried and puffy, this indulgent bread is light and airy, ideal for pairing with chickpea curries.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Naan</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                        <p>
                            Classic leavened flatbread, soft and pillowy, perfect for scooping up curries and gravies.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chili Naan</h3>
                            <h3 className='text-2xl'>$4.79</h3>
                        </div>
                        <p>
                            Spicy flatbread enriched with green chillies and cilantro, providing a fiery twist to traditional naan. Add garlic + $0.99
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Tandoori Roti</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                        <p>
                            Whole wheat flatbread baked in a tandoor, offering a robust texture and a smoky flavor.
                        </p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Garlic Naan</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                        <p>
                            Garlic-infused flatbread, crisp on the outside, tender on the inside, a delightful accompaniment to any meal. Add mozzarella cheese + $3.49
                        </p>
                    </div>
                    <div className='w-full'></div>
                </div>
            </div>
        </div>

                {/* Eighth Part - Vegetable */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Vegetable</h1>
                    <p>
                      Wholesome vegetarian creations full of color and taste.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Aloo Gobhi (V)</h3>
                            <h3 className='text-2xl'>$18.29</h3>
                        </div>
                        <p>
                            Cauliflower and potatoes sautéed with green peas in a traditional seasoning, perfect for those who love a hearty vegetable dish.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Navratan Korma</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            A mix of vegetables including cauliflower, potatoes, and peppers enriched with cashews and raisins in a creamy sauce.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Palak Paneer</h3>
                            <h3 className='text-2xl'>$18.79</h3>
                        </div>
                        <p>
                            Creamy spinach sauce enveloping soft cheese cubes, a rich and comforting classic.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Paneer Masala</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            Cheese cubes tossed with tomatoes, onions, and peppers in a vibrant masala sauce full of bold flavors.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Paneer Bhurji</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            Shredded cheese delicately flavored with fenugreek and cilantro, offering a fragrant and satisfying meal.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Dal Fry (V)</h3>
                            <h3 className='text-2xl'>$17.99</h3>
                        </div>
                        <p>
                            Stir-fried lentils with tomatoes, ginger, and garlic, then simmered with Indian spices for an extra layer of flavor.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Vegetable Biryani</h3>
                            <h3 className='text-2xl'>$19.29</h3>
                        </div>
                        <p>
                            Aromatic basmati rice tossed with cauliflower, tomatoes, snow peas, and potatoes, garnished with nuts and raisins, for a crunchy texture. Served with raita.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Channa Masala</h3>
                            <h3 className='text-2xl'>$18.99</h3>
                        </div>
                        <p>
                            Tender chickpeas cooked in an onion gravy, bursting with flavor and slow-simmered for a rich, satisfying taste. Add bhakura + $4.99
                        </p>
                    </div>
                </div>
            </div>
        </div>

                {/* Ninth Part - Desserts */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Desserts</h1>
                    <p>
                      Sweet finishes and traditional Indian treats.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Rice Pudding</h3>
                            <h3 className='text-2xl'>$6.29</h3>
                        </div>
                        <p>
                            Creamy basmati rice pudding flavored with cardamom and mixed with a variety of nuts for a comforting and traditional dessert.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Mango Ice Cream</h3>
                            <h3 className='text-2xl'>$6.29</h3>
                        </div>
                        <p>
                            Smooth ice cream blended with ripe Kesar mangoes, enriched with dairy and sweetened with honey, offering a tropical delight.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Gulab Jamun</h3>
                            <h3 className='text-2xl'>$6.29</h3>
                        </div>
                        <p>
                            Soft, deep-fried dumplings soaked in a sweet syrup infused with rose water and coconut.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Mango Cheesecake</h3>
                            <h3 className='text-2xl'>$9.29</h3>
                        </div>
                        <p>
                            A creamy cheesecake layer topped with lush mango mousse, sprinkled with almonds and resting on a graham cracker base for a decadent finish.
                        </p>
                    </div>
                </div>
            </div>
        </div>

                {/* Tenth Part - Drinks */}

        <div className='border border-gray-500/40 flex mt-12 font-playfair'>
            <div className='w-[1300px] border-r border-gray-500/40'>
                <div className='m-7 space-y-3'>
                    <h1 className='text-6xl'>Drinks</h1>
                    <p>
                      Refreshing beverages, from soft drinks to signature lassi.
                    </p>
                </div>
            </div>
            <div className='w-full'>
                {/* Zero Proof Section */}
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Zero Proof (Non-Alcoholic)</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Tamarind Lemonade</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Mint Cucumber Soda</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Ginger Peach Soda</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lychee Spritzer</h3>
                            <h3 className='text-2xl'>$5.99</h3>
                        </div>
                    </div>
                </div>

                {/* Cocktails Section */}
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Cocktails</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Tipsy Lassi</h3>
                            <h3 className='text-2xl'>$10.99</h3>
                        </div>
                        <p>
                            Our renowned signature mango lassi with a boozy rum kick.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Lychee-Tini</h3>
                            <h3 className='text-2xl'>$10.99</h3>
                        </div>
                        <p>
                            Fresh lychees and vodka; shaken not stirred.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Mango Monsoon</h3>
                            <h3 className='text-2xl'>$10.99</h3>
                        </div>
                        <p>
                            Refreshing kesar mango puree and vodka shaken to perfection.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Indian Summer</h3>
                            <h3 className='text-2xl'>$11.99</h3>
                        </div>
                        <p>
                            Melon liqueur, rum, and fresh pineapple juice unite for a refreshing taste.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Cucumber Fizz</h3>
                            <h3 className='text-2xl'>$11.99</h3>
                        </div>
                        <p>
                            Invigorating fizzy blend of mint, cucumbers, and gin.
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Ginger Whiskey Mojito</h3>
                            <h3 className='text-2xl'>$11.99</h3>
                        </div>
                        <p>
                            As the name implies, a whiskey mojito enhanced with ginger.
                        </p>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Tamarind Margarita</h3>
                            <h3 className='text-2xl'>$11.99</h3>
                        </div>
                        <p>
                            Tamarind with our signature in-house mix for a distinct take on the classic margarita. Pro-tip: make it spicy!
                        </p>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Smoked Old Fashioned</h3>
                            <h3 className='text-2xl'>$13.99</h3>
                        </div>
                        <p>
                            The classic cocktail smoked to excellence.
                        </p>
                    </div>
                </div>

                {/* Beer Section */}
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Beer</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Corona</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Yuengling</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Heineken</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Michelob Ultra</h3>
                            <h3 className='text-2xl'>$4.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Kingfisher</h3>
                            <h3 className='text-2xl'>$6.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Taj</h3>
                            <h3 className='text-2xl'>$10.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Haywards 5000</h3>
                            <h3 className='text-2xl'>$11.99</h3>
                        </div>
                    </div>
                    <div className='w-full'></div>
                </div>

                {/* Wine - By The Glass Section */}
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Wine - By The Glass</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chardonnay</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Pinot Grigio</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Riesling</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Chenin Blanc, India</h3>
                            <h3 className='text-2xl'>$9.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Cabernet Sauvignon</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Merlot</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Pinot Noir</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Shiraz, India</h3>
                            <h3 className='text-2xl'>$9.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Moscato</h3>
                            <h3 className='text-2xl'>$8.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Sangria</h3>
                            <h3 className='text-2xl'>$9.99</h3>
                        </div>
                    </div>
                </div>

                {/* Wine - Bottles Section */}
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-3xl p-3'>Wine - Bottles</h3>
                </div>
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-2xl p-3'>Red Wine</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Sula Vineyards Shiraz, India</h3>
                            <h3 className='text-2xl'>$29.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Columbia Crest Merlot, Washington State</h3>
                            <h3 className='text-2xl'>$31.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Josh Cellars Cabernet Sauvignon, California</h3>
                            <h3 className='text-2xl'>$41.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>La Crema Pinot Noir, California</h3>
                            <h3 className='text-2xl'>$48.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Caymus Cabernet Sauvignon, Napa</h3>
                            <h3 className='text-2xl'>$89.99</h3>
                        </div>
                    </div>
                    <div className='w-full'></div>
                </div>
                <div className='border-b border-gray-500/40 text-center'>
                    <h3 className='font-playfair text-2xl p-3'>White Wine</h3>
                </div>
                <div className='flex border-b border-gray-500/40'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Rodney Strong Chardonnay, Sonoma</h3>
                            <h3 className='text-2xl'>$38.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Sula Vineyards Chenin Blanc, India</h3>
                            <h3 className='text-2xl'>$29.99</h3>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-full border-r border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Barone Fini Pinot Grigio, Italy</h3>
                            <h3 className='text-2xl'>$32.99</h3>
                        </div>
                    </div>
                     <div className='w-full border-gray-500/40 m-3 space-y-3'>
                        <div className='flex justify-between items-center'>
                            <h3 className='font-playfair font-bold text-xl'>Pouilly-Fuisse, France</h3>
                            <h3 className='text-2xl'>$49.99</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuList