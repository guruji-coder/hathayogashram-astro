/**
 * HOME PAGE - Consolidated Content
 * 
 * All home page data in one place for easy maintenance.
 * This replaces scattered imports from multiple constant files.
 */

import { COURSE_IMAGES_FLAT, TEACHER_IMAGES_FLAT, GALLERY_IMAGES_FLAT } from '../../constants/shared/images';

export const HOME_PAGE = {
  // SEO Metadata
  seo: {
    title: 'Best Yoga Teacher Training in Rishikesh, India - Hatha Yogashram',
    description: 'Join authentic 200/300 hour Yoga Teacher Training in Rishikesh with Hatha Yogashram. Yoga Alliance RYS certified residential programs with Indian masters. Traditional Hatha & Ashtanga Yoga, Sanskrit mantras, philosophy from ancient texts.',
    canonical: 'https://hathayogashram.com/',
    image: 'https://hathayogashram.com/yogaschoolpic.jpg',
  },

  // Hero Section
  hero: {
    title: 'The Best Yoga School In Rishikesh, India',
    subtitle: 'Namaste & Welcome to Hatha Yogashram',
    rating: {
      stars: 5,
      text: 'Rated Yoga School',
    },
  },

  // Highlight Boxes
  highlights: [
    {
      icon: 'fas fa-crown',
      text: "India's No.1 Yoga School in Rishikesh",
    },
    {
      icon: 'fas fa-certificate',
      text: 'Certified by Yoga Alliance USA',
    },
    {
      icon: 'fas fa-users',
      text: 'Encompasses teachers (International Yoga Asana Champions)',
    },
    {
      icon: 'fas fa-shield-alt',
      text: 'Trusted by more than 13,000+ students worldwide',
    },
  ],

  // Main Content
  content: {
    intro: 'At Hatha Yogashram, our goal is to provide you with the most authentic Yoga experience possible while exploring the spiritual centre and hub of the practice in Rishikesh. We strive to offer a personalised approach for all levels of students, from beginners to advanced. Over the years, we have trained more than 13,000+ students both online and offline, elevating their learning and practice of Yoga to new heights. Our Yoga alliance USA-approved courses cover a range of specialities, including Hatha, Ashtanga Vinyasa, Kundalini, Yin Yoga and more.',
    
    paragraphs: [
      'We understand what it takes to make a powerful transformation on both physical and spiritual levels. Hence, we go all out to provide our students with the best in class facilities and an environment that allows for complete commitment to the practice of Yoga. You experience deep spiritual growth with our diverse yoga styles and personalised approach. Our traditional teaching methods and connection with our students set us apart from the rest. Our passion for yoga teacher training is evident in our range of courses in Rishikesh, suitable for all levels.',
      
      'We create an environment for our students to learn and develop their skills, taking them on a journey of Yoga exploration and growth. By joining us at Hatha Yogashram, you will be able to experience the beauty of the Himalayan foothills while learning from experienced and knowledgeable teachers in an authentic setting.',
      
      'Our master Yoga teachers are passionate and have years of experience in teaching yoga. Their enthusiasm will help you learn the nuances of Asanas, Pranayama, Alignment, Adjustment & Meditation quickly and easily. You can also gain knowledge about anatomy, philosophy, Ayurveda, and other related aspects during your stay with us at Hatha Yogashram.',
      
      'We also offer a range of holistic health programs, including meditation, pranayama, and Ayurveda. Our experienced faculty is dedicated to helping you reach your highest potential, from the moment you join us. We look forward to having you as part of our family! So explore the spiritual heritage and practice of Yoga with us at Hatha Yogashram.',
    ],
  },

  // Gallery
  gallery: {
    defaultImage: COURSE_IMAGES_FLAT.YOGA_SCHOOL,
    images: [
      COURSE_IMAGES_FLAT.YOGA_SCHOOL,
      COURSE_IMAGES_FLAT.YOGA_SCHOOL,
      COURSE_IMAGES_FLAT.YOGA_SCHOOL,
      COURSE_IMAGES_FLAT.YOGA_SCHOOL,
    ],
    altText: 'Yoga practice at Hatha Yogashram',
  },

  // Course Links
  courses: [
    {
      title: '200 Hour Yoga TTC',
      url: '/courses/200-hour',
    },
    {
      title: '300 Hour Yoga TTC',
      url: '/courses/300-hour',
    },
    {
      title: '500 Hour Yoga TTC',
      url: '/courses/500-hour',
    },
  ],

  // Objective Section
  objective: {
    title: 'Objective Of Yoga Teacher Training In Rishikesh India',
    paragraphs: [
      'The Indian culture has always been blessed with the sacred knowledge of yoga. Rishikesh is blessed with this Yogic culture and is a perfect setting to immerse oneself in it. This makes it our duty to spread this blessing thus making the world a healthy, happy and peaceful place to live in.',
      
      'Our Yoga Teaching provides students with a lot of interactive sessions making Yoga practice easy to relate to. Yoga is the evolution of the mind consciously and practice of Yama, Niyama, Asana, Pranayama, Mantra, Meditation, Mudras, etc. these all are the keys to reach a blissful state and this can be obtained by understanding the concept of self-practice and self-awareness of body-mind.',
      
      'At the Hatha Yoga Ashram Yoga Teacher Training, we blend the traditional forms of yoga with modern explanations. This makes our teaching easy and approachable. This ancient knowledge of yoga reaches humanity by way of the Guru-Disciple tradition. So, we too follow this same tradition brought down by our great sages when we impart our knowledge and experience of yoga to you.',
      
      "Be it Asana, Pranayama, Meditation or Mantra, the aim is to let the mind consciously move the body and achieve a natural flow. This creates a bridge between the body, mind and breath. Once this physical, mental & spiritual awareness is attained, the breath gets controlled and Energy/Prana-Shakti is channelized. One can now feel and understand the rhythm of life more easily and the delusion of thinking that Body and Mind are two different things is removed, because 'the body is mind and mind is body'.",
      
      'Our objective is to serve humanity, to keep the authenticity of this spiritual practice and to bring health and awareness because we believe in the concept of :-',
    ],
    mantras: [
      {
        sanskrit: 'sarve bhavantu sukhina',
        english: 'means may all be happy.',
      },
      {
        sanskrit: 'sarve santu niramayah',
        english: 'means may all be disease-free.',
      },
      {
        sanskrit: 'sarve bhadrani pashyantu',
        english: 'means may we see the welfare of all.',
      },
      {
        sanskrit: 'maa kaschit dukha bhaagbhavet',
        english: 'means may no one suffer.',
      },
    ],
    closingText: 'This "Mantra" is a pray to the Universe, for the well-being of all.',
  },

  // TTC Courses
  ttcCourses: [
    {
      title: '200 Hour Yoga Teacher Training in Rishikesh',
      location: 'Rishikesh, India',
      description: 'The 200 Hour YTTC is a very popular and approachable applied yoga certification course among all the Yogis. This course will guide you from the basics to more advanced levels. Most yoga practitioners who wish to become certified yoga teachers start here. We are happy to share our knowledge and experience with you and welcome you to join us in the eternal journey of yoga. "Yoga is 1% theory and 99% practice" - K. Pattabhi Jois',
      image: COURSE_IMAGES_FLAT.YOGA_COURSE,
      buttonText: 'Read More',
      url: '/courses/200-hour',
    },
    {
      title: '300 Hour Yoga Teacher Training in Rishikesh',
      location: 'Rishikesh, India',
      description: "Deepen your practice of Yoga Asanas and Yoga Philosophy at the 300-hour YTTC in Rishikesh. This is an advanced and challenging course where you will learn the deeper aspects of Yoga on a physical, mental, and spiritual level. Our teachers here are well experienced and we work as a team to understand every student's perspective and to share the knowledge gained from our own experience.",
      image: COURSE_IMAGES_FLAT.YOGA_COURSE,
      buttonText: 'Read More',
      url: '/courses/300-hour',
    },
    {
      title: '100 Hour Yoga Teacher Training in Rishikesh',
      location: 'Rishikesh, India',
      description: 'Our Hatha Yoga Ashram also has a 100-hour teacher training segment or pre-teacher training course for explorers in search of a glimpse of what it is to be a yoga teacher. This is a short course that is mostly opted for by beginner students with limited time. We create space for you to follow your interest in the ancient art of the yoga. You will be able to explore our science based approach to learning from experienced teachers.',
      image: COURSE_IMAGES_FLAT.YOGA_COURSE,
      buttonText: 'Read More',
      url: '/100-hour',
    },
  ],

  // Certifications
  certifications: {
    title: 'Internationally Recognized Certifications',
    paragraphs: [
      'Rishikesh is the place of spiritually dwelling….',
      
      'Famous for the natural scenery, Rishikesh contains the essence of spirituality and tranquillity. The place is surrounded by the Himalayan mountain range dissected by the serenity of the river Ganges. According to the traditional yogic texts, this creates the perfect atmosphere for the immersive practice of ancient and timeless yoga.',
      
      "Rishikesh, a sacred place for yoga practitioners down through the ages, has been the destiny of sages who came to the Himalayas in their search for eternal truth by achieving Moksha, Nirvana, and Liberation. The vibrations created by countless yogis bless the maintains, rivers, and yoga halls nestled here to achieve the main aim and objective of Yoga. It's like having a strong wind pushing you towards the goal, effortlessly.",
      
      'Influenced by those sages, who introduced the Yoga practices to the people of Rishikesh, our Yoga school Hatha Yoga Ashram today spreads this Yoga Teaching through Guru (Teacher) – Shishya (Student) tradition.',
    ],
  },

  // Founder
  founder: {
    title: 'Ashish Ji, The Founder Of Hatha Yoga Ashram, Rishikesh',
    intro: 'His Philosophy on yoga teaches us beyond just physical well-being; it is more about unlocking the power of our subconscious mind. It is an exploration of our inner self that seeks to bring us closer to understanding our true nature. He states, "Yoga creates a rhythm between mind and body that leads to an understanding of our true self". Guru Ji has dedicated his life to the practice of yoga and its philosophy, combining ancient teachings with modern-day techniques and tools to create an inclusive environment for all.',
    paragraphs: [
      'You are the greatest form of energy & that energy travels through several mediums (situations) before it takes the shape of your desired reality. No matter how difficult life is, you have the power to create your own destiny. Yoga is one way to achieve your desired reality as it taps into the source of your own inner power & awakens the yogi in you.',
      '"Yesh, bhusha, aur bol se pare hai ek yogi, yogi ki asli pehchaan uski shakti se hoti hai."',
      'A yogi is beyond his looks and overall appearance since the real identity of a yogi comes from his power.',
    ],
    images: [
      { src: TEACHER_IMAGES_FLAT.FOUNDER_1, alt: 'Guru Ashish Ji performing seated spinal twist yoga pose' },
      { src: TEACHER_IMAGES_FLAT.FOUNDER_2, alt: 'Guru Ashish Ji performing side plank variation yoga pose' },
      { src: TEACHER_IMAGES_FLAT.FOUNDER_3, alt: 'Guru Ashish Ji performing standing balance yoga pose' },
    ],
    awards: [
      {
        icon: '🏆',
        bgColor: 'bg-yellow-100',
        title: 'Uttarakhand State Yoga Association Championship Award 2012',
      },
      {
        icon: '🏅',
        bgColor: 'bg-blue-100',
        title: 'Yoga Association Championship Award 2013',
      },
      {
        icon: '⭐',
        bgColor: 'bg-green-100',
        title: 'World Federation of Yoga & Culture Award 2015',
      },
      {
        icon: '🏵️',
        bgColor: 'bg-orange-100',
        title: 'International Yoga Championship',
      },
    ],
  },

  // Teachers
  teachers: {
    title: 'Hatha Yoga Ashram Teachers',
    intro: 'All our teachers and gurus are experienced instructors who are well trained and well-versed in all things about yoga - ensuring that all of our graduates are fully equipped to be successful. All teachers here have a Masters in Yogic Science as well as certificates from the Yoga Alliance.',
    didYouKnow: 'The core teachers at Hatha Yoga Ashram are international asana champions!',
    list: [
      {
        id: 1,
        name: 'ParmYog Satya Praash(Founder)',
        specialty: 'Kundalini & Hatha Yoga',
        experience: 'Experience 23+ Years',
        image: TEACHER_IMAGES_FLAT.FOUNDER_1,
      },
      {
        id: 2,
        name: 'Ravi Bisht',
        specialty: 'Classical & Traditional Hatha Yoga',
        experience: 'Experience 25+ Years',
        image: TEACHER_IMAGES_FLAT.FOUNDER_2,
      },
      {
        id: 3,
        name: 'Tanushree Rawat',
        specialty: 'Adjustment & Alignment & Female Yoga instructor',
        experience: 'Experience 10+ Years',
        image: TEACHER_IMAGES_FLAT.FOUNDER_3,
      },
      {
        id: 4,
        name: 'Ashish Rawat(Founder)',
        specialty: 'Ashtanga Yoga & Alignment',
        experience: 'Experience 23+ Years',
        image: TEACHER_IMAGES_FLAT.FOUNDER_1,
      },
    ],
  },

  // Facilities
  facilities: {
    title: 'Facilities You Enjoy At The Yoga School In Rishikesh, India',
    cards: [
      {
        title: 'About Transportation',
        description: 'We arrange, for students without a direct flight to Dehradun, their transportation from Delhi. If a student wishes to arrive by taxi/cab arranged by them, we send a Google map location and contact number of the Hatha YogAshram.',
        image: 'https://plus.unsplash.com/premium_photo-1682092820451-3ce57694b514?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhbnNwb3J0YXRvbiUyMGluZGlhJTIwcGNzJTIwZm9yaWVnbmVyc3xlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        title: 'Excursions',
        description: 'This course also allows you to enjoy one full day and one half day off each week to visit the many local attractions. You can go white water rafting in the Ganges, enjoy a trip to the beautiful Kempty Falls in Mussoorie.',
        image: 'https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZ2F8ZW58MHx8MHx8fDA%3D',
      },
      {
        title: 'Accommodation',
        description: 'We provide comfortable and clean accommodation for all our students. The rooms are well-ventilated with attached bathrooms, hot water facility, and peaceful environment perfect for your yoga journey.',
        image: 'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/accomodation-1.webp?fit=750%2C750&ssl=1',
      },
      {
        title: 'Healthy Meals',
        description: 'We serve nutritious vegetarian meals prepared with fresh local ingredients. Our meals are designed to support your yoga practice and maintain optimal health during your training program',
        image: 'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/food.webp?fit=750%2C750&ssl=1',
      },
    ],
  },
} as const;
