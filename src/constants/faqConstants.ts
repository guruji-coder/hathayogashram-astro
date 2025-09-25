/**
 * ===========================================
 * FAQ CONSTANTS - FREQUENTLY ASKED QUESTIONS
 * ===========================================
 */

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

// Enhanced FAQ data with categories for flip cards
export const FAQ_FLIP_CARDS: FAQItem[] = [
  {
    id: 1,
    question: 'What is included in 200-hour YTT?',
    answer:
      'Complete curriculum covering asanas, pranayama, philosophy, anatomy, meditation, and teaching methodology with certification.',
    category: 'Course',
  },
  {
    id: 2,
    question: 'Do I need prior experience?',
    answer:
      'Basic yoga knowledge is recommended but not mandatory. Our course welcomes dedicated beginners.',
    category: 'Requirements',
  },
  {
    id: 3,
    question: 'What accommodation options?',
    answer: 'Twin sharing and private rooms with all meals included. Comfortable ashram stay.',
    category: 'Stay',
  },
  {
    id: 4,
    question: 'Is certification recognized?',
    answer: 'Yes, Yoga Alliance approved and recognized worldwide for professional teaching.',
    category: 'Certification',
  },
  {
    id: 5,
    question: 'What should I bring?',
    answer: 'Comfortable yoga clothes, notebook, water bottle. Mats and props provided.',
    category: 'Preparation',
  },
  {
    id: 6,
    question: "What's the daily schedule?",
    answer:
      'Morning meditation, asana practice, philosophy, pranayama, evening sessions. Balanced learning.',
    category: 'Schedule',
  },
  {
    id: 7,
    question: 'Are meals included?',
    answer:
      'Yes, all vegetarian meals included - breakfast, lunch, dinner, herbal tea. Fresh sattvic food.',
    category: 'Meals',
  },
  {
    id: 8,
    question: 'Can I get refund?',
    answer: 'Refund policy varies by cancellation timing. Contact us for detailed terms.',
    category: 'Booking',
  },
  {
    id: 9,
    question: 'Where is the ashram?',
    answer: 'Spiritual heart of Rishikesh, surrounded by Himalayas, close to holy Ganges.',
    category: 'Location',
  },
  {
    id: 10,
    question: 'How to reach ashram?',
    answer: 'Fly to Dehradun or train to Rishikesh. Pickup services available.',
    category: 'Travel',
  },
  {
    id: 11,
    question: 'Is WiFi available?',
    answer: 'Yes, complimentary WiFi in common areas to stay connected.',
    category: 'Facilities',
  },
  {
    id: 12,
    question: "What's the weather like?",
    answer: 'Pleasant year-round. Best time: October-March and June-August.',
    category: 'Weather',
  },
  {
    id: 13,
    question: 'What yoga style taught?',
    answer:
      'Traditional Hatha Yoga with alignment focus, Ashtanga sequences, authentic philosophy.',
    category: 'Style',
  },
  {
    id: 14,
    question: 'Can I teach after course?',
    answer: 'Yes, comprehensive training for confident teaching with proper skills.',
    category: 'Teaching',
  },
  {
    id: 15,
    question: 'Any age restrictions?',
    answer: 'Minimum 18 years. No upper limit - yoga for everyone with dedication.',
    category: 'Requirements',
  },
  {
    id: 16,
    question: 'What makes school special?',
    answer:
      'Authentic teachings, experienced gurus, Himalayan setting, small classes, personal attention.',
    category: 'School',
  },
];

export const FAQ_SECTION = {
  TITLE: 'FAQs - Yoga School In Rishikesh India',
  FAQS: [
    {
      id: 1,
      question:
        'What are the languages preferred during the course for communication & teaching at Vinyasa Yogashala in Rishikesh?',
      answer:
        'We prefer to communicate in English since we receive students from across the globe, so it becomes easier to converse in English. But we also love to teach some important words from the Hindi language since it is widely spoken in Rishikesh, like Namaskara (Hello), Dhanyawaad (Thank you), Swagatam (Welcome), and many more.',
    },
    {
      id: 2,
      question: 'Do you charge extra for learning material, or is the cost inclusive in the fee?',
      answer:
        'All learning materials including books, yoga props, and study materials are included in the course fee. There are no additional charges for any educational resources required during your training.',
    },
    {
      id: 3,
      question: 'How can I reach the premises of Vinyasa Yogashala in Rishikesh?',
      answer:
        'Our yoga school is conveniently located in Rishikesh. We provide detailed directions upon enrollment and can assist with transportation arrangements from major airports and railway stations. Pick-up services are available on request.',
    },
    {
      id: 4,
      question: 'Is there medical support or assistance available at school?',
      answer:
        'Yes, we have basic first aid facilities available at the school and maintain contact with local medical professionals. In case of any medical emergency, we ensure prompt assistance and can help coordinate with nearby healthcare facilities.',
    },
    {
      id: 5,
      question: 'Are we allowed gadgets during the class?',
      answer:
        'We encourage students to keep electronic devices on silent or turned off during classes to maintain a peaceful learning environment. However, you may use devices for taking notes or recording important instructions with permission from the instructor.',
    },
    {
      id: 6,
      question: 'How many students are there in a single batch of a particular course?',
      answer:
        'We maintain small batch sizes to ensure personalized attention. Typically, our batches have 15-20 students maximum, allowing for individualized guidance and a more intimate learning experience.',
    },
    {
      id: 7,
      question: 'Which Visa should I apply for, and does Vinyasa Yogashala help us avail?',
      answer:
        'International students typically need a Tourist Visa or Medical Visa for yoga courses in India. We provide invitation letters and documentation to support your visa application process. Our team can guide you through the visa requirements specific to your country.',
    },
    {
      id: 8,
      question: 'Do I need to bring my own yoga equipment for the course?',
      answer:
        'Basic yoga equipment including mats, blocks, straps, and bolsters are provided by the school. However, you are welcome to bring your own mat if you prefer. We recommend comfortable yoga clothing and a water bottle.',
    },
    {
      id: 9,
      question: 'What type of courses does Vinyasa Yogashala provide to students?',
      answer:
        'We offer a comprehensive range of yoga teacher training courses including 100-hour, 200-hour, 300-hour, and 500-hour YTTC programs. We also provide specialized courses in Yin Yoga, Prenatal Yoga, Sound Healing, Reiki, Ayurveda, and Aerial Yoga.',
    },
  ],
  CTA: {
    SUBTITLE: "Still have questions? We'd love to help you find the perfect yoga course.",
    BUTTON_TEXT: 'Contact Us',
    LINK: '/contact',
  },
};

export const FAQ_STYLES = {
  SECTION_PADDING: 'py-16 px-4',
  CONTAINER: 'container mx-auto max-w-full mx-30',
  TITLE: 'text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4',
  FAQ_ITEM:
    'overflow-hidden cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md',
  QUESTION_BUTTON:
    'w-full px-6 py-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
  QUESTION_BUTTON_ACTIVE: 'bg-purple-900 text-white',
  QUESTION_BUTTON_INACTIVE: 'bg-white text-gray-800 hover:bg-purple-50',
  QUESTION_ICON:
    'mr-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-current text-sm font-bold',
  QUESTION_TEXT: 'flex-1 font-medium text-sm md:text-base',
  TOGGLE_ICON: 'ml-4 text-lg transition-transform duration-300',
  ANSWER_CONTAINER: 'bg-gray-50 px-6 py-4',
  ANSWER_TEXT: 'text-gray-700 leading-relaxed text-sm md:text-base pl-12',
  CTA_BUTTON:
    'inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl',
};
