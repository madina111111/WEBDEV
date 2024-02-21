export interface Product {
    image: string;
    rating: number;
    id: number;
    name: string;
    price: number;
    description: string;
    link: string;
  }
  
  export const products = [
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/h2d/32299950997534/apple-iphone-11-64gb-cernyj-1005115-1-Container.jpg',
      rating: 2,
      id: 1,
      name: 'Phone 11',
      price: 799,
      description: 'A large phone with one of the best screens',
      link: "tps://kaspi.kz/shop/p/apple-iphone-11-64gb-chernyi-1005115/"
    },
    {
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h96/h3c/46392664227870/apple-iphone-13-128gb-belyj-102298420-1-Container.jpg',
      id: 2,
      name: 'Phone 13',
      rating: 2.3,
      price: 899,
      description: 'A great phone with one of the best cameras',
      link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/"
    },
    {
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/hde/33201997971486/apple-iphone-xr-128gb-slim-box-cernyj-100692542-1-Container.jpg",
      id: 3,
      rating: 3.8,
      name: 'Phone XR',
      price: 699,
      description: 'The best phone for his price',
    link: "https://kaspi.kz/shop/p/apple-iphone-xr-128gb-slim-box-chernyi-100692542/"
  },

  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h12/46719106023454/apple-airpods-3-belyj-102667744-1.jpg',
    id: 4,
    rating: 5.0,
    name: 'Airpods 3 series',
    price: 200,
    description: 'The Apple-designed dynamic driver uses a dedicated amplifier to deliver incredible sound detail. rewind tracks, answer calls and end them. The headphone case is easily charged with the MagSafe charger.',
    link: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/",
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h1f/46659804725278/apple-airpods-pro-belyj-4804718-1-Container.jpg',
    id: 5,
    rating: 6.0,
    name: 'Airpods pro',
    price: 250,
    description: 'AirPods Pro are unique headphones with Active Noise Canceling technology that continuously optimizes sound based on the shape of your ear and the position of the earbuds. They perfectly muffle external noise, so you can completely immerse yourself in the music. These are brand new headphones.',
    link: "https://kaspi.kz/shop/p/apple-airpods-pro-belyi-4804718/",
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/h5b/33271772446750/apple-macbook-air-2020-13-3-mgn93-serebristyj-100798912-1-Container.jpg',
    id: 6,
    rating: 7.0,
    name: 'Macbook Air M1',
    price: 1399,
    description: 'Small chip. Big breakthrough The first chip designed specifically for the Mac. Amazingly, the Apple M1 system-on-a-chip packs 16 billion transistors and integrates a CPU, GPU, Neural Engine, I/O controllers, and a host of other components. The Apple M1 chip brings unique technologies to your Mac and delivers incredible performance combined with industry-leading power efficiency.',
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/",
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h66/33943966842910/apple-macbook-pro-13-m1-2020-custom-16-gb-1-tb-ssd-z11b-a2338-seryj-101029564-1.jpg',
    id: 7,
    rating: 5.0,
    name: 'Macbook Pro M1',
    price: 1699,
    description: 'The M1 chip has a built-in Neural Engine, a component that Apple first started adding to its A-series chips a few years ago. The Neural Engine is designed to accelerate machine learning tasks across the Mac for things like video analysis, voice recognition, image processing, and more',
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-13-m1-2020-custom-16-gb-1-tb-ssd-z11b-a2338-seryi-101029564/",
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h19/46638308622366/apple-watch-series-6-44mm-space-gray-aluminium-case-with-sport-band-m00h3gk-a-cernyj-100568498-1-Container.jpg',
    id: 8,
    rating: 3.5,
    name: 'Apple Watch 6 series ',
    price: 499,
    description: 'Retina Display: Now you dont have to raise your hand or touch the display to see the time or other information on the watch face. When you need to quickly check your time or fitness metrics - like when you are cycling, doing abs or sitting in a meeting for a long time - just glance at the display.',
    link: "https://kaspi.kz/shop/p/apple-watch-series-6-44-mm-seryi-100568498/",
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hae/hcf/46553394249758/apple-watch-series-7-41-mm-cernyj-102582811-1.jpg',
    id: 9,
    rating: 8.0,
    name: 'Apple Watch 7 series',
    price: 599,
    description: 'Series 7 is the most durable Apple Watch ever. Fundamental design changes were necessary because the challenge was to create an always-on, larger Retina display. Innovative solutions have been developed specifically for this. Then, with their help, it was possible to make the front glass of the display of ultra-high strength with protection against cracks.',
    link: "https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/",
  },
  {
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    id: 10,
    rating: 5.5,
    name: 'Airpods 8 series',
    price: 699,
    description: 'Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time. Cycle Tracking uses this data to provide a retrospective estimate of when you likely ovulated, which can be helpful for family planning.',
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/",
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/