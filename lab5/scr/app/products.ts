export interface Product {
    category: string;
    image: string;
    rating: number;
    id: number;
    name: string;
    price: number;
    description: string;
    link: string;
  }
  
  export const products: Product[] = [
    {
      category: "Smartphone",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h2d/32299950997534/apple-iphone-11-64gb-cernyj-1005115-1-Container.jpg',
      rating: 2,
      id: 1,
      name: 'Phone 11',
      price: 799,
      description: 'A large phone with one of the best screens',
      link: "tps://kaspi.kz/shop/p/apple-iphone-11-64gb-chernyi-1005115/"
    },
    {
      category: "Smartphone",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
      id: 2,
      name: 'Phone 13',
      rating: 2.3,
      price: 899,
      description: 'A great phone with one of the best cameras',
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/"
    },
    {
      category: "Smartphone",
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/hde/33201997971486/apple-iphone-xr-128gb-slim-box-cernyj-100692542-1-Container.jpg",
      id: 3,
      rating: 3.8,
      name: 'Phone XR',
      price: 699,
      description: 'The best phone for his price',
      link: "https://kaspi.kz/shop/p/apple-iphone-xr-128gb-slim-box-chernyi-100692542/"
    },
  
    {
      category:"Headphones",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
      id: 4,
      rating: 5.0,
      name: 'Airpods 3 series',
      price: 200,
      description: 'The Apple-designed dynamic driver uses a dedicated amplifier to deliver incredible sound detail. rewind tracks, answer calls and end them. The headphone case is easily charged with the MagSafe charger.',
      link: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/",
    },
    {
      category:"Headphones",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h1f/46659804725278/apple-airpods-pro-belyj-4804718-1-Container.jpg',
      id: 5,
      rating: 6.0,
      name: 'Airpods pro',
      price: 250,
      description: 'AirPods Pro are unique headphones with Active Noise Canceling technology that continuously optimizes sound based on the shape of your ear and the position of the earbuds. They perfectly muffle external noise, so you can completely immerse yourself in the music. These are brand new headphones.',
      link: "https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/",
    },
    {
      category: "Laptop",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
      id: 6,
      rating: 7.0,
      name: 'Macbook Air M1',
      price: 1399,
      description: 'Small chip. Big breakthrough The first chip designed specifically for the Mac. Amazingly, the Apple M1 system-on-a-chip packs 16 billion transistors and integrates a CPU, GPU, Neural Engine, I/O controllers, and a host of other components. The Apple M1 chip brings unique technologies to your Mac and delivers incredible performance combined with industry-leading power efficiency.',
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/",
    },
    {
      category: "Laptop",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h66/33943966842910/apple-macbook-pro-13-m1-2020-custom-16-gb-1-tb-ssd-z11b-a2338-seryj-101029564-1.jpg',
      id: 7,
      rating: 5.0,
      name: 'Macbook Pro M1',
      price: 1699,
      description: 'The M1 chip has a built-in Neural Engine, a component that Apple first started adding to its A-series chips a few years ago. The Neural Engine is designed to accelerate machine learning tasks across the Mac for things like video analysis, voice recognition, image processing, and more',
      link: "https://kaspi.kz/shop/p/apple-macbook-pro-13-m1-2020-custom-16-gb-1-tb-ssd-z11b-a2338-seryi-101029564/",
    },
    {
      category: "Smart-Watch",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h19/46638308622366/apple-watch-series-6-44mm-space-gray-aluminium-case-with-sport-band-m00h3gk-a-cernyj-100568498-1-Container.jpg',
      id: 8,
      rating: 3.5,
      name: 'Apple Watch 6 series ',
      price: 499,
      description: 'Retina Display: Now you dont have to raise your hand or touch the display to see the time or other information on the watch face. When you need to quickly check your time or fitness metrics - like when you are cycling, doing abs or sitting in a meeting for a long time - just glance at the display.',
      link: "https://kaspi.kz/shop/p/apple-watch-series-6-44-mm-seryi-100568498/",
    },
    {
      category: "Smart-Watch",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hcf/46553394249758/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg',
      id: 9,
      rating: 8.0,
      name: 'Apple Watch 7 series',
      price: 599,
      description: 'Series 7 is the most durable Apple Watch ever. Fundamental design changes were necessary because the challenge was to create an always-on, larger Retina display. Innovative solutions have been developed specifically for this. Then, with their help, it was possible to make the front glass of the display of ultra-high strength with protection against cracks.',
      link: "https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/",
    },
    {
      category: "Smart-Watch",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
      id: 10,
      rating: 5.5,
      name: 'Apple Watch 8 series',
      price: 699,
      description: 'Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time. Cycle Tracking uses this data to provide a retrospective estimate of when you likely ovulated, which can be helpful for family planning.',
      link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/",
    },
    {
      category: "Smartphone",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc1/h5e/63073746223134/apple-iphone-14-pro-128gb-belyj-106363274-1.jpg',
      id: 11,
      rating: 1.0,
      name: 'Iphone 14 pro',
      price: 1299,
      description: 'The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision, and a Face ID Dynamic Island that allows Apple to utilize an always-on display feature, which dims the lock screen similarly to an Apple Watch.',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-serebristyi-106363274/'
    },
    {
      category: "Smartphone",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/h6a/63073423065118/apple-iphone-14-pro-max-128gb-cernyj-106363289-1.jpg',
      id: 12,
      rating: 9.0,
      name: 'Iphone 14 pro max',
      price: 1499,
      description: 'The iPhone 14 Pro Max measures in at 6.33 inches tall (160.7mm), 3.05 inches wide (77.6mm), and 0.31 inches thick (7.85mm). Apples iPhone 14 Pro weighs 7.27 ounces or 206 grams, while the Pro Max weighs 8.47 ounces or 240 grams.',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-chernyi-106363289/'
    },
    {
      category: "Laptop",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/hac/52195421978654/custom-16-inch-macbook-pro-apple-m1-max-with-10c-cpu-32c-gpu-64gb-unified-memory-1tb-ssd-space-grey-105663881-1.jpg',
      id: 13,
      rating: 7.0,
      name: 'Macbook Pro 16',
      price: 6000,
      description: 'The Apple MacBook Pro "M1 Max" 10-Core CPU/32-Core GPU 16-Inch (2021) model features a 3.2 GHz Apple M1 Max processor with ten cores (eight performance cores and 2 efficiency cores), a 32-core GPU, a 16-core Neural Engine, 32 GB of onboard RAM, and a 1 TB onboard SSD',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-z14x000me-seryi-105663881/'
    },
    {
      category: "Laptop",
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h40/h14/32693202059294/acer-aspire-7-gaming-a715-75g-nh-q87er-00f-cernyj-100503512-1-Container.jpg',
      id: 14,
      rating: 6.0,
      name: 'Acer Aspire 7 Gaming',
      price: 1299,
      description: 'Strict design hides great opportunities - powerful processors and video cards will allow you to enjoy modern games and easily cope with work tasks. The large 15.6 IPS screen has a narrow bezel, making the notebook more compact than traditional 15 models. With m.2 SSD storage and Wi-Fi 6 wireless connectivity for extra speed, the Aspire 7 delivers outstanding performance despite its compact size.',
      link: 'https://kaspi.kz/shop/p/acer-aspire-7-gaming-a715-75g-nh-q87er-00f-chernyi-100503512/'
    },
    {
      category: "Laptop",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h54/47697415864350/lenovo-ideapad-gaming-3-15ihu6-82k1005ark-cernyj-103140545-1.jpg',
      id: 15,
      rating: 5.5,
      name: 'Lenovo Ideapad Gaming 3',
      price: 1099,
      description: 'Play, record and stream games simultaneously with a powerful and efficient 35W processor optimized for maximum performance. Play most of the top games in Full HD resolution. Enjoy blazing data transfer speeds and ultimate network connectivity with Intel Wi-Fi 5. Play at the highest settings with the latest NVIDIA GeForce RTX 3050 mobile graphics cards.',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-gaming-3-15ihu6-82k1005ark-chernyi-103140545/'
    },
    {
      category:"Headphones",
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
      id: 16,
      rating: 4.5,
      name: 'Airpods Max',
      price: 799,
      description: 'The Apple AirPods Max Bluetooth Headset can completely change the way you think about full-size headphones. This model is designed using first-class materials and advanced technologies. It is based on the Apple H1 processor and proprietary dynamic drivers, among the advantages of which one can note high performance parameters.',
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/'
    },
    {
      category:"Headphones",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h88/47981646905374/bang-olufsen-1321010-beoplay-portal-sinij-103190576-1.jpg',
      id: 17,
      rating: 3.7,
      name: 'Bang & Olufsen 1321010 Beoplay',
      price: 699,
      description: 'Beoplay Portal are powerful, comfortable headphones that fit seamlessly into your life - whether youre gaming, listening to music or talking on the phone. Connect to your computer wirelessly to chat, interact and listen to music during work hours, answer calls from your phone, and then immerse yourself in the game with an uninterrupted Xbox connection when its time to relax.',
      link: 'https://kaspi.kz/shop/p/bang-olufsen-1321010-beoplay-portal-sinii-103190576/'
    },
    {
      category:"Headphones",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/hd8/68542300422174/samsung-galaxy-buds-live-chernyi-100491521-1.jpg',
      id: 18,
      rating: 9.0,
      name: 'Samsung Galaxy Buds Live',
      price: 249,
      description: 'These headphones are designed to be in tune with your lifestyle. Their iconic shape and groundbreaking ergonomic design will blend in with your natural surroundings. Their speaker is also optimized for your quality user experience. This sound was made for your ears.',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-live-chernyi-100491521/'
    },
    {
      category: "Smart-Watch",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h85/62047597592606/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
      id: 19,
      rating: 3.4,
      name: 'Samsung Galaxy Watch 4 Classic',
      price: 299,
      description: 'Samsung smart watches are not just a gadget, but your faithful companion on the way to achieving goals and self-improvement. Seek help from a personal trainer, doctor, and analyst right here and now with the Galaxy Watch4 smartwatch. Listen to your body. The Galaxy Watch4 smart watch is designed to make it easy for us to track and capture the data coming from your body.',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/'
    },
    {
      category: "Smart-Watch",
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4f/h04/51332003627038/huawei-watch-gt3-pro-43-mm-belyj-belyj-105186210-1.jpg',
      id: 20,
      rating: 7.3,
      name: 'Huawei Watch GT3 Pro',
      price: 499,
      description: 'The watch displays diving data in real time, including the speed, depth, and duration of dives.',
      link:'https://kaspi.kz/shop/p/huawei-watch-gt3-pro-43-mm-belyi-105186210/'
    },
    
  
  
    
  
  
  
  
    
  
  
  
  
  
  ];
  
  