import Article from '../interfaces/Article'
import Solution from '../interfaces/Solution'

export const effectsArticles: Article[] = [
  {
    name: 'save-mother-earth',
    image: '/images/nature.jpg',
    clip: '/videos/nature.mp4',
    title: 'Save Mother Earth',
    body: "Earth is the only known planet to harbor life. One of the requirements of Earth to be habitable is heat, which is coming from the sun. Without heat from the sun, the Earth would freeze. The sun releases tremendous amount of heat but Earth reflects and absorb enough amoount of heat to keep it warm with the help of greenhouse gases./A greenhouse gas is a gas that traps and emits radiant energy within the thermal infrared range, causing greenhouse effect. What if there's too much heat trapped inside the Earth? These are some of the top effects of too much heat inside Earth",
    summary: "Let's save our home planet.",
    color: '#1D471D'
  },
  {
    name: 'ice-melting',
    image: '/images/ice_melting.jpg',
    clip: '/videos/ice_melting.mp4',
    title: 'Ice Melting',
    body: 'Ice acts like a protective cover over the Earth. These ices reflects excess heat back into space to keep the planet warm. Due to the rapid increasing of heat in the Earth, these ices also rapidly melts which causes many things like the rise of sea levels./As ice and glaciers melts, ocean currents will continue to disrupt weather. It can also change where and when fishes spawn as the water temperature changes. Many wildlife that lives on the Arctic are also losing their homes.',
    summary: 'Ice are melting, stop global warming.',
    color: '#4E88B2'
  },
  {
    name: 'drought',
    image: '/images/drought.jpg',
    clip: '/videos/drought.mp4',
    title: 'Drought',
    body: "The excess heat now trapped in the climate system draws out more moisture from soils, thereby worsening drought conditions. Droughts are often defined as periods of relative dryness and reduced soil moisture. Today's climate change is playing a major role in the increasing severity of drought thought it's influences on both rainfall and evaporation./Water stress and increased temperature lead to crop losses that can devastate farmers who depend on crop yields as their living. Drought can also result in major fish kills as bodies of water dry up.",
    summary: 'Keep our planet hydrated.',
    color: '#573E2C'
  },
  {
    name: 'wildfires',
    image: '/images/wildfires.jpg',
    clip: '/videos/wildfires.mp4',
    title: 'Wildfires',

    body: "Severe heat and drought fuel wildfires. If we don't  break the warming cycle, we expect more and worse wildfires in the years ahead. Although human activities are mainly responsible for starting the fires, hotter weather makes forests drier and more susceptible to burning./The growing number of people in wild lands is increasing the risk to life, property and public health. Smoke reduces air quality and can cause eye and respiratory illness. Wildfires can also burn in residential area resulting to lost of properties.",
    summary: 'Kill fire before it kills you.',
    color: '#391717'
  },
  {
    name: 'crops-dying',
    image: '/images/crops_dying.jpg',
    clip: '/videos/crops_dying.mp4',
    title: 'Crops Dying',
    body: "Agriculture is an important sector of the economy. It is highly dependent on the climate. Increases in temperature and carbon dioxide can increase some crop yield in some places. But there are other condition that must be met too./Changes in the frequency and severity of drought and floods could pose challenges for farmer. The effect of increased temperature will depend on the crops' optimal temperature for growth and reproduction.Conversely, if the higher temperature exceeds a crops' optimum temperature, yields will decline.",
    summary: 'Grown by nature, eaten by you.',
    color: '#888144'
  }
]

export const causesArticles: Article[] = [
  {
    name: 'fossil-fuel',
    image: '/images/fossil_fuel.jpg',
    clip: '/videos/fossil_fuel.mp4',
    title: 'Fossil Fuel',
    body: 'Fossil fuels are formed from the decomposition of buried carbon dioxide based organisms that dies million years ago. They create carbon rich deposits that extracted and burned for energy. They are used to make products we usually use everyday like plastic, steel and a huge range of products./When fossil fuels are burned they release large amounts of carbon dioxide into the air. It produces excess carbon dioxide to the air which causes global warmth. Constant increase in temperature could lead to further sea level rise, extreme weather, biodiversity loss, species extinction and many more.',
    summary: "Don't be a fossil fool.",
    color: '#3B4145'
  },
  {
    name: 'livestock-farming',
    image: '/images/livestock_farming.jpg',
    clip: '/videos/livestock_farming.mp4',
    title: 'Livestock Farming',
    body: 'Livestock farming is a huge contributor to climate change. It is the largest methane source emitter in the world. Methane is one of the greenhouse gases that traps heat in the planet./Raising livestock for meat, eggs and milk generates global greenhouse gas emissions. Burping of cows are one of the reason why livestock produces so much methane to the planet. Livestock farming is also the cause of deforestation. Most of livestock farming needs a large amount of land that it needs to cut down forest to expand land.',
    summary: "Cows are animals too. They're not just foods.",
    color: '#876840'
  },
  {
    name: 'deforestation',
    image: '/images/deforestation.jpg',
    clip: '/videos/deforestation.mp4',
    title: 'Deforestation',
    body: 'Trees are a very important living thing that makes the Earth habitable. They take up carbon dioxide from the atmosphere and release oxygen during photosyntehsis. They can also store carbon in tree trunks and roots in the soil./When forests are cut down, much of that stored carbon is released into the atmosphere again as carbon dioxide. This is how deforestation and forest degradation contribute to global warming.',
    summary: 'Stop making our planet bald.',
    color: '#3B261C'
  },
  {
    name: 'manufacturing-goods',
    image: '/images/manufacturing_goods.jpg',
    clip: '/videos/manufacturing_goods.mp4',
    title: 'Manufacturing Goods',
    body: 'Cement is one of the useful products invented in the world. It is the perfect material for building. It is extremely durable, versatile, inflammable and weatherproof, but it has a big downside./In order to create cement, a ton of carbon dioxide must release through the air. This happens because of the process of creation, the raw material into final cement product.',
    summary: 'Better production, better world.',
    color: '#3B4145'
  }
]

export const solutionsArticles: Solution[] = [
  {
    name: 'renewable-energy-sources',
    image: '/images/renewable_energy_sources.jpg',
    images: [
      {
        src: '/images/renewable_energy_sources/renewable_energy_sources_01.jpg',
        alt: '/images/renewable_energy_sources/renewable_energy_sources_01.jpg',
        rows: '1/7',
        cols: '1/9'
      },
      {
        src: '/images/renewable_energy_sources/renewable_energy_sources_02.jpg',
        alt: '/images/renewable_energy_sources/renewable_energy_sources_02.jpg',
        rows: '1/4',
        cols: '9/13'
      },
      {
        src: '/images/renewable_energy_sources/renewable_energy_sources_04.jpg',
        alt: '/images/renewable_energy_sources/renewable_energy_sources_04.jpg',
        rows: '4/7',
        cols: '9/13'
      },
      {
        src: '/images/renewable_energy_sources/renewable_energy_sources_03.jpg',
        alt: '/images/renewable_energy_sources/renewable_energy_sources_03.jpg',
        rows: '7/13',
        cols: '1/13'
      }
    ],
    title: 'Renewable Energy Sources',
    body: 'Renewable energy sources are natural sources that generates energy that never runs out. They replenish themselves to replace the portion that is used by either through natural reproduction or other recurring processes. There are five most common renewable energy sources, solar, wind, hydroelectric, geothermal and biomass./These mentioned renewable neergy sources are big help to preventing climate change because they don;t produce greenhouse gas emissions like fossil fuel. Some renewable energy sources produce greenhouse gas emissions but they produce less than non renewable energy sources. But there are also downsides like it only generates power on smaller scale and it can also disrupt wildlife and migration patterns',
    summary: 'Clean energy, green energy.',
    color: '#005998'
  },
  {
    name: 'save-energy',
    image: '/images/save_energy.jpg',
    images: [
      {
        src: '/images/save_energy/save_energy_01.jpg',
        alt: '/images/save_energy/save_energy_01.jpg',
        rows: '1/5',
        cols: '1/13'
      },
      {
        src: '/images/save_energy/save_energy_03.jpg',
        alt: '/images/save_energy/save_energy_03.jpg',
        rows: '5/9',
        cols: '1/9'
      },
      {
        src: '/images/save_energy/save_energy_02.jpg',
        alt: '/images/save_energy/save_energy_02.jpg',
        rows: '5/9',
        cols: '9/13'
      },
      {
        src: '/images/save_energy/save_energy_04.jpg',
        alt: '/images/save_energy/save_energy_04.jp g',
        rows: '9/13',
        cols: '1/13'
      }
    ],
    title: 'Save Energy',
    body: "Electricity is very important to our daily lives. We use it everyday that we forget where electricity is generated from. Most of our electricity are generated by coal, oil and gas which are fossil fuels./We can help prevent climate change by lowering our power usage. We can change our light bulbs into LED bulbs as they use less energy. Hang our clothes instead of using dryer. Unplug or turn off our appliances that aren't currently in use.",
    summary: 'Conserve energy to preserve future.',
    color: '#E28A12'
  },
  {
    name: 'reduce-food-waste',
    image: '/images/reduce_food_waste.jpg',
    title: 'Reduce Food Waste',
    images: [
      {
        src: '/images/reduce_food_waste/reduce_food_waste_01.jpg',
        alt: '/images/reduce_food_waste/reduce_food_waste_01.jpg',
        rows: '1/6',
        cols: '1/13'
      },
      {
        src: '/images/reduce_food_waste/reduce_food_waste_03.jpg',
        alt: '/images/reduce_food_waste/reduce_food_waste_03.jpg',
        rows: '6/13',
        cols: '1/7'
      },
      {
        src: '/images/reduce_food_waste/reduce_food_waste_02.jpg',
        alt: '/images/reduce_food_waste/reduce_food_waste_02.jpg',
        rows: '6/13',
        cols: '7/13'
      }
    ],
    body: 'Some people tend to eat more than they wanted and resulting to food waste. They prefer to throw away leftovers than giving it to others that needed or wanted it./The moment you throw your food away, you were also wasting the resources and energy that were used to grow, produce, package and transport it. When you throw your food away and it rots, it also produces methane, a greenhouse gas. So we should only buy and eat what we needed. We can also give our leftovers to others or compost it',
    summary: 'Wasting food is wasting life.',
    color: '#B27A54'
  },
  {
    name: 'reduce-reuse-recycle',
    image: '/images/reduce_reuse_recycle.jpg',
    images: [
      {
        src: '/images/reduce_reuse_recycle/reduce_reuse_recycle_01.jpg',
        alt: '/images/reduce_reuse_recycle/reduce_reuse_recycle_01.jpg',
        rows: '1/5',
        cols: '1/13'
      },
      {
        src: '/images/reduce_reuse_recycle/reduce_reuse_recycle_02.jpg',
        alt: '/images/reduce_reuse_recycle/reduce_reuse_recycle_02.jpg',
        rows: '5/13',
        cols: '1/9'
      },
      {
        src: '/images/reduce_reuse_recycle/reduce_reuse_recycle_03.jpg',
        alt: '/images/reduce_reuse_recycle/reduce_reuse_recycle_03.jpg',
        rows: '5/13',
        cols: '9/13'
      }
    ],
    title: 'Reduce Reuse Recycle',
    body: "We have so many things at home that we don't use anymore. We just stuck it on our homes. Sometimes, we sell or we throw them in the trash but we can use it again and at the same time, we can also help prevent climate change./These things we use mostly causes carbon emissions at each point in production, from extraction to manufacturing and transporting. So let's reduce the production of these products, reuse things that we still can use and recycle what are recyclable.",
    summary:
      'Reuse the past, Recycle the present, Reduce risks for the future.',
    color: '#0B4A7D'
  },
  {
    name: 'choose-your-transport',
    image: '/images/choose_your_transport.jpg',
    images: [
      {
        src: '/images/choose_your_transport/choose_your_transport_01.jpg',
        alt: '/images/choose_your_transport/choose_your_transport_01.jpg',
        rows: '1/8',
        cols: '1/8'
      },
      {
        src: '/images/choose_your_transport/choose_your_transport_03.jpg',
        alt: '/images/choose_your_transport/choose_your_transport_03.jpg',
        rows: '1/8',
        cols: '8/13'
      },
      {
        src: '/images/choose_your_transport/choose_your_transport_02.jpg',
        alt: '/images/choose_your_transport/choose_your_transport_02.jpg',
        rows: '8/13',
        cols: '1/13'
      }
    ],
    title: 'Choose Your Transport',
    body: 'Cars produces so much carbon dioxide into the air. But we need cars as our daily transport. Airplanes also burn large amount of fossil fuel, producing significant amount of greenhouse gases. But we need it to travel to our desired destination./We need these things to make our lives convenient, but we can still do what we need to do because there are other alternatives to this. Like using your bicycle as your main transport if your desired destination can be reached by using bike. Also you can meet virtually if your desire is to meet up with other that are too far.',
    summary: 'Clean air, much fair.',
    color: '#596074'
  },
  {
    name: 'plant-more-trees',
    image: '/images/plant_more_trees.jpg',
    images: [
      {
        src: '/images/plant_more_trees/plant_more_trees_01.jpg',
        alt: '/images/plant_more_trees/plant_more_trees_01.jpg',
        rows: '1/9',
        cols: '1/4'
      },
      {
        src: '/images/plant_more_trees/plant_more_trees_02.jpg',
        alt: '/images/plant_more_trees/plant_more_trees_02.jpg',
        rows: '1/13',
        cols: '4/13'
      },
      {
        src: '/images/plant_more_trees/plant_more_trees_03.jpg',
        alt: '/images/plant_more_trees/plant_more_trees_03.jpg',
        rows: '9/13',
        cols: '1/4'
      }
    ],
    title: 'Plant More Trees',
    body: 'Humans need oxygen to breath. Humans also need to to exhale which produces carbon dioxide. Meanwhile trees need carbon dioxide to live and produces oxygen for human to live. Trees are very important on maintaining balance on Earth./Nowadays. more and more trees are being cut for different purposes. Like for lands used in farming and livestock, wood materials and lands used for building structures. We can help prevent climate change by planting more trees. We can plant on our homes, on our yards or in forests. It can also help on other calamities like flashfloods and landslides.',
    summary: 'Trees are our best friends.',
    color: '#72943D'
  },
  {
    name: 'eat-more-vegetables',
    image: '/images/eat_more_vegetables.jpg',
    images: [
      {
        src: '/images/eat_more_vegetables/eat_more_vegetables_03.jpg',
        alt: '/images/eat_more_vegetables/eat_more_vegetables_03.jpg',
        rows: '1/7',
        cols: '1/7'
      },
      {
        src: '/images/eat_more_vegetables/eat_more_vegetables_02.jpg',
        alt: '/images/eat_more_vegetables/eat_more_vegetables_02.jpg',
        rows: '1/7',
        cols: '7/13'
      },
      {
        src: '/images/eat_more_vegetables/eat_more_vegetables_01.jpg',
        alt: '/images/eat_more_vegetables/eat_more_vegetables_01.jpg',
        rows: '7/13',
        cols: '1/13'
      }
    ],
    title: 'Eat More Vegetables',
    body: 'Meats are delicious especially beef which are obtained from cows. But have you ever wonder what does it costs to eat this delicious foods? Cows are one of the biggest contributprs to climate change. Cows eat grasses like other herbivores. And after eating, they burp which produce a lot of methane into the air./Eating vegetables can help climate change by reducing oer meat consumption. Eating more vegetable can significantly lower our environmental impact. Plant based foods produces fewer greenhouse gas emission and also required less energy, land and water.',
    summary: 'We are what we eat.',
    color: '#568D43'
  },
  {
    name: 'switch-to-electric-cars',
    image: '/images/electric_cars.jpg',
    images: [
      {
        src: '/images/switch_to_electric_cars/switch_to_electric_cars_01.jpg',
        alt: '/images/switch_to_electric_cars/switch_to_electric_cars_01.jpg',
        rows: '1/5',
        cols: '1/9'
      },
      {
        src: '/images/switch_to_electric_cars/switch_to_electric_cars_03.jpg',
        alt: '/images/switch_to_electric_cars/switch_to_electric_cars_03.jpg',
        rows: '1/5',
        cols: '9/13'
      },
      {
        src: '/images/switch_to_electric_cars/switch_to_electric_cars_02.jpg',
        alt: '/images/switch_to_electric_cars/switch_to_electric_cars_02.jpg',
        rows: '5/13',
        cols: '1/13'
      }
    ],
    title: 'Switch To Electric Cars',
    body: "As said earlier, cars produces so much carbon dioxide into the air. But there are also cars that don't need fossil fuels to run, electric cars. Electric cars are cars that needs electricity to be run unlike fuel cars that needs to be run by fuels./Electric cars can lower our environmental impact as it doesn't need fossil fuel. Also it doesn't cause air pollution unlike fuel cars that produces smoke into the air. Electric cars can be a little pricey but you can help a lot into the environment.",
    summary: 'Transportation is transforming.',
    color: '#700F21'
  }
]
