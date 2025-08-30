/**
 * ===========================================
 * HOME PAGE CONSTANTS - CENTRALIZED CONFIGURATION
 * ===========================================
 *
 * This file contains ALL constants used in the home page.
 * Easy to find, easy to modify, easy to understand.
 */

// ===========================================
// HERO SECTION CONSTANTS
// ===========================================

export const HOME_HERO = {
	TITLE: 'The Best Yoga School In Rishikesh, India',
	SUBTITLE: 'Namaste & Welcome to Hatha Yogashram',
	RATING: {
		STARS: 5,
		TEXT: 'Rated Yoga School'
	}
} as const;

// ===========================================
// HIGHLIGHT BOXES CONSTANTS
// ===========================================

export const HOME_HIGHLIGHTS = [
	{
		ICON: 'fas fa-crown',
		TEXT: "India's No.1 Yoga School in Rishikesh"
	},
	{
		ICON: 'fas fa-certificate',
		TEXT: 'Certified by Yoga Alliance USA'
	},
	{
		ICON: 'fas fa-users',
		TEXT: 'Encompasses teachers (International Yoga Asana Champions)'
	},
	{
		ICON: 'fas fa-shield-alt',
		TEXT: 'Trusted by more than 13,000+ students worldwide'
	}
] as const;

// ===========================================
// CONTENT PARAGRAPHS CONSTANTS
// ===========================================

export const HOME_CONTENT = {
	INTRO_PARAGRAPH:
		'At Hatha Yogashram, our goal is to provide you with the most authentic Yoga experience possible while exploring the spiritual centre and hub of the practice in Rishikesh. We strive to offer a personalised approach for all levels of students, from beginners to advanced. Over the years, we have trained more than 13,000+ students both online and offline, elevating their learning and practice of Yoga to new heights. Our Yoga alliance USA-approved courses cover a range of specialities, including Hatha, Ashtanga Vinyasa, Kundalini, Yin Yoga and more.',

	PARAGRAPHS: [
		'We understand what it takes to make a powerful transformation on both physical and spiritual levels. Hence, we go all out to provide our students with the best in class facilities and an environment that allows for complete commitment to the practice of Yoga. You experience deep spiritual growth with our diverse yoga styles and personalised approach. Our traditional teaching methods and connection with our students set us apart from the rest. Our passion for yoga teacher training is evident in our range of courses in Rishikesh, suitable for all levels.',

		'We create an environment for our students to learn and develop their skills, taking them on a journey of Yoga exploration and growth. By joining us at Hatha Yogashram, you will be able to experience the beauty of the Himalayan foothills while learning from experienced and knowledgeable teachers in an authentic setting.',

		'Our master Yoga teachers are passionate and have years of experience in teaching yoga. Their enthusiasm will help you learn the nuances of Asanas, Pranayama, Alignment, Adjustment & Meditation quickly and easily. You can also gain knowledge about anatomy, philosophy, Ayurveda, and other related aspects during your stay with us at Hatha Yogashram.',

		'We also offer a range of holistic health programs, including meditation, pranayama, and Ayurveda. Our experienced faculty is dedicated to helping you reach your highest potential, from the moment you join us. We look forward to having you as part of our family! So explore the spiritual heritage and practice of Yoga with us at Hatha Yogashram.'
	]
} as const;

// ===========================================
// IMAGE GALLERY CONSTANTS
// ===========================================

export const HOME_GALLERY = {
	DEFAULT_IMAGE: '/yogaschoolpic.jpg',
	IMAGES: ['/yogaschoolpic.jpg', '/yogaschoolpic.jpg', '/yogaschoolpic.jpg', '/yogaschoolpic.jpg'],
	ALT_TEXT: 'Yoga practice at Hatha Yogashram'
} as const;

// ===========================================
// COURSE BUTTONS CONSTANTS
// ===========================================

export const HOME_COURSES = [
	{
		TITLE: '200 Hour Yoga TTC',
		URL: '/courses/200-hour'
	},
	{
		TITLE: '300 Hour Yoga TTC',
		URL: '/courses/300-hour'
	},
	{
		TITLE: '500 Hour Yoga TTC',
		URL: '/courses/500-hour'
	}
] as const;

// ===========================================
// STYLING CONSTANTS
// ===========================================

export const HOME_STYLES = {
	SECTION_PADDING: 'py-8',
	CONTAINER: 'container mx-auto px-4',

	// Hero styles
	HERO_TITLE: 'text-xl sm:text-2xl lg:text-3xl font-bold text-purple-900 mb-4',
	HERO_SUBTITLE: 'text-base sm:text-lg text-gray-700 font-medium',
	RATING_NUMBER: 'text-lg sm:text-xl font-bold text-gray-800 mr-2',
	RATING_TEXT: 'text-sm sm:text-base text-gray-600',

	// Highlight box styles
	HIGHLIGHT_GRID: 'grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto',
	HIGHLIGHT_BOX:
		'border-2 border-purple-900 bg-purple-50 p-6 rounded-lg flex items-center justify-start text-left',
	HIGHLIGHT_ICON: 'text-purple-900 text-2xl mr-4 flex-shrink-0',
	HIGHLIGHT_TEXT: 'text-sm font-semibold text-gray-800 flex-1',

	// Content styles
	CONTENT_CONTAINER: 'space-y-4 sm:space-y-6',
	CONTENT_PARAGRAPH: 'text-gray-700 leading-relaxed text-sm sm:text-[15px] text-justify',
	INTRO_PARAGRAPH: 'text-gray-700 leading-relaxed text-sm sm:text-[15px] text-justify mb-8',
	// Certification section paragraph style
	CERTIFICATION_PARAGRAPH: 'text-justify leading-relaxed text-gray-700 font-medium',

	// Two column layout styles
	TWO_COLUMN_GRID: 'grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8',
	IMAGE_GRID: 'grid grid-cols-2 gap-3 sm:gap-4',
	IMAGE_ITEM: 'overflow-hidden rounded-xl sm:rounded-2xl shadow-md',
	IMAGE_STYLING: 'w-full h-full object-cover',

	// Course button styles - use universal UI constants
	COURSE_BUTTONS_CONTAINER: 'flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8'
} as const;

// ===========================================
// OBJECTIVE SECTION CONSTANTS
// ===========================================

export const OBJECTIVE_SECTION = {
	TITLE: 'Objective Of Yoga Teacher Training In Rishikesh India',

	PARAGRAPHS: [
		'The Indian culture has always been blessed with the sacred knowledge of yoga. Rishikesh is blessed with this Yogic culture and is a perfect setting to immerse oneself in it. This makes it our duty to spread this blessing thus making the world a healthy, happy and peaceful place to live in.',

		'Our Yoga Teaching provides students with a lot of interactive sessions making Yoga practice easy to relate to. Yoga is the evolution of the mind consciously and practice of Yama, Niyama, Asana, Pranayama, Mantra, Meditation, Mudras, etc. these all are the keys to reach a blissful state and this can be obtained by understanding the concept of self-practice and self-awareness of body-mind.',

		'At the Hatha Yoga Ashram Yoga Teacher Training, we blend the traditional forms of yoga with modern explanations. This makes our teaching easy and approachable. This ancient knowledge of yoga reaches humanity by way of the Guru-Disciple tradition. So, we too follow this same tradition brought down by our great sages when we impart our knowledge and experience of yoga to you.',

		"Be it Asana, Pranayama, Meditation or Mantra, the aim is to let the mind consciously move the body and achieve a natural flow. This creates a bridge between the body, mind and breath. Once this physical, mental & spiritual awareness is attained, the breath gets controlled and Energy/Prana-Shakti is channelized. One can now feel and understand the rhythm of life more easily and the delusion of thinking that Body and Mind are two different things is removed, because 'the body is mind and mind is body'.",

		'Our objective is to serve humanity, to keep the authenticity of this spiritual practice and to bring health and awareness because we believe in the concept of :-'
	],

	MANTRAS: [
		{
			sanskrit: 'sarve bhavantu sukhina',
			english: 'means may all be happy.'
		},
		{
			sanskrit: 'sarve santu niramayah',
			english: 'means may all be disease-free.'
		},
		{
			sanskrit: 'sarve bhadrani pashyantu',
			english: 'means may we see the welfare of all.'
		},
		{
			sanskrit: 'maa kaschit dukha bhaagbhavet',
			english: 'means may no one suffer.'
		}
	],

	CLOSING_TEXT: 'This "Mantra" is a pray to the Universe, for the well-being of all.'
} as const;

// ===========================================
// TTC COURSES SECTION CONSTANTS
// ===========================================

export const TTC_COURSES_SECTION = {
	COURSES: [
		{
			TITLE: '300 Hour Yoga Teacher Training in Rishikesh',
			LOCATION: 'Rishikesh, India',
			DESCRIPTION:
				"Deepen your practice of Yoga Asanas and Yoga Philosophy at the 300-hour YTTC in Rishikesh. This is an advanced and challenging course where you will learn the deeper aspects of Yoga on a physical, mental, and spiritual level. Our teachers here are well experienced and we work as a team to understand every student's perspective and to share the knowledge gained from our own experience.",
			IMAGE: '/yogacoursepic.jpg',
			BUTTON_TEXT: 'Read More',
			URL: '/courses/300-hour'
		},
		{
			TITLE: '200 Hour Yoga Teacher Training in Rishikesh',
			LOCATION: 'Rishikesh, India',
			DESCRIPTION:
				'The 200 Hour YTTC is a very popular and approachable applied yoga certification course among all the Yogis. This course will guide you from the basics to more advanced levels. Most yoga practitioners who wish to become certified yoga teachers start here. We are happy to share our knowledge and experience with you and welcome you to join us in the eternal journey of yoga. "Yoga is 1% theory and 99% practice" - K. Pattabhi Jois',
			IMAGE: '/yogacoursepic.jpg',
			BUTTON_TEXT: 'Read More',
			URL: '/courses/200-hour'
		},
		{
			TITLE: '100 Hour Yoga Teacher Training in Rishikesh',
			LOCATION: 'Rishikesh, India',
			DESCRIPTION:
				'Our Hatha Yoga Ashram also has a 100-hour teacher training segment or pre-teacher training course for explorers in search of a glimpse of what it is to be a yoga teacher. This is a short course that is mostly opted for by beginner students with limited time. We create space for you to follow your interest in the ancient art of the yoga. You will be able to explore our science based approach to learning from experienced teachers.',
			IMAGE: '/yogacoursepic.jpg',
			BUTTON_TEXT: 'Read More',
			URL: '/courses/100-hour'
		}
	]
} as const;

// ===========================================
// FOUNDER SECTION CONSTANTS
// ===========================================

export const FOUNDER_SECTION = {
	TITLE: 'Ashish Ji, The Founder Of Hatha Yoga Ashram, Rishikesh',

	INTRO_TEXT:
		'His Philosophy on yoga teaches us beyond just physical well-being; it is more about unlocking the power of our subconscious mind. It is an exploration of our inner self that seeks to bring us closer to understanding our true nature. He states, "Yoga creates a rhythm between mind and body that leads to an understanding of our true self". Guru Ji has dedicated his life to the practice of yoga and its philosophy, combining ancient teachings with modern-day techniques and tools to create an inclusive environment for all.',

	PHILOSOPHY_PARAGRAPHS: [
		'You are the greatest form of energy & that energy travels through several mediums (situations) before it takes the shape of your desired reality. No matter how difficult life is, you have the power to create your own destiny. Yoga is one way to achieve your desired reality as it taps into the source of your own inner power & awakens the yogi in you.',
		'"Yesh, bhusha, aur bol se pare hai ek yogi, yogi ki asli pehchaan uski shakti se hoti hai."',
		'A yogi is beyond his looks and overall appearance since the real identity of a yogi comes from his power.'
	],

	IMAGES: [
		{
			src: '/yogashala-founder1.jpg',
			alt: 'Guru Ashish Ji performing seated spinal twist yoga pose'
		},
		{
			src: '/yogashala-founder2.jpg',
			alt: 'Guru Ashish Ji performing side plank variation yoga pose'
		},
		{
			src: '/yogashala-founder3.jpg',
			alt: 'Guru Ashish Ji performing standing balance yoga pose'
		}
	],

	FOUNDER_INFO: {
		name: 'Guru Ashish Ji',
		title: 'Founder of Hatha Yoga Ashram, Rishikesh'
	},

	AWARDS: [
		{
			icon: '🏆',
			bgColor: 'bg-yellow-100',
			title: 'Uttarakhand State Yoga Association Championship Award 2012'
		},
		{
			icon: '🏅',
			bgColor: 'bg-blue-100',
			title: 'Yoga Association Championship Award 2013'
		},
		{
			icon: '⭐',
			bgColor: 'bg-green-100',
			title: 'World Federation of Yoga & Culture Award 2015'
		},
		{
			icon: '🏵️',
			bgColor: 'bg-orange-100',
			title: 'International Yoga Championship'
		}
	]
} as const;

// ===========================================
// CERTIFICATIONS SECTION CONSTANTS
// ===========================================

export const CERTIFICATIONS_SECTION = {
	TITLE: 'Internationally Recognized Certifications',

	PARAGRAPHS: [
		'Rishikesh is the place of spiritually dwelling….',

		'Famous for the natural scenery, Rishikesh contains the essence of spirituality and tranquillity. The place is surrounded by the Himalayan mountain range dissected by the serenity of the river Ganges. According to the traditional yogic texts, this creates the perfect atmosphere for the immersive practice of ancient and timeless yoga.',

		"Rishikesh, a sacred place for yoga practitioners down through the ages, has been the destiny of sages who came to the Himalayas in their search for eternal truth by achieving Moksha, Nirvana, and Liberation. The vibrations created by countless yogis bless the maintains, rivers, and yoga halls nestled here to achieve the main aim and objective of Yoga. It's like having a strong wind pushing you towards the goal, effortlessly.",

		'Influenced by those sages, who introduced the Yoga practices to the people of Rishikesh, our Yoga school Hatha Yoga Ashram today spreads this Yoga Teaching through Guru (Teacher) – Shishya (Student) tradition.',
		'The primary focus of Hatha Yoga Ashram is the practice of Vinyasa Yoga & Hatha Yoga. Additional training is provided in Hatha Yoga as it is an essential foundation for the balance of the Nadis (energy channels). In compliance with certification requirements, our Vinyasa training is supplemented with studies in Anatomy & Physiology of Yoga, Adjustment & Alignment of various Asanas, Pranayama the yogi way to breathe, Philosophy of traditional Yoga, Meditation understanding, Ayurveda learning & Mantra chanting.',

		"Our main teachers being 'International Yoga asana champions', they are truly the best teachers of Rishikesh and around the world. They encourage their students to become as good as they can possibly be! They take your practice to the next level. Hatha Yoga Ashram helps students in all ways, providing complete attention by setting classes in small groups. In this way, students receive all the knowledge, skills and experience from their teachers to achieve their personal goals.",

		'This is a Yoga School where one can understand the physical, mental and spiritual aspects of yoga, as a practice of disciplining the body, mind and soul. It shows you how to have a peaceful and happy life through regular practice of Yoga.',

		"In Hatha Yoga Ashram's Yoga Teacher Training in Rishikesh, India Yoga courses, you don't just learn to be a yoga teacher, but also cultivate a spiritual practice which lasts a lifetime."
	]
} as const;

// ===========================================
// TEACHERS SECTION CONSTANTS
// ===========================================

export const TEACHERS_SECTION = {
	TITLE: 'Best Yoga Teachers Rishikesh India',

	INTRO_PARAGRAPH:
		'All our teachers and gurus are experienced instructors who are well trained and well-versed in all things about yoga - ensuring that all of our graduates are fully equipped to be successful. All teachers here have a Masters in Yogic Science as well as certificates from the Yoga Alliance.',

	DID_YOU_KNOW: 'The core teachers at Hatha Yoga Ashram are international asana champions!',

	TEACHERS: [
		{
			id: 1,
			name: 'Ashish Rawat(Founder)',
			specialty: 'Ashtanga Yoga & Alignment',
			experience: 'Experience 23+ Years',
			image: '/yogashala-founder1.jpg',
			description: 'Master in traditional Ashtanga Yoga and precise alignment techniques.'
		},
		{
			id: 2,
			name: 'Ravi Bisht',
			specialty: 'Traditional Hatha Yoga',
			experience: 'Experience 25+ Years',
			image: '/yogashala-founder2.jpg',
			description: 'Expert in traditional Hatha Yoga practices and ancient techniques.'
		},
		{
			id: 3,
			name: 'Tanushree Rawat',
			specialty: 'Meditation & Pranayama',
			experience: 'Experience 21+ Years',
			image: '/yogashala-founder3.jpg',
			description: 'Specialist in meditation practices and breathing techniques.'
		},
		{
			id: 4,
			name: 'Shivam Rawat',
			specialty: 'Yoga Anatomy & Mantra Chanting',
			experience: 'Experience 21+ Years',
			image: '/yogashala-founder1.jpg',
			description: 'Expert in yoga anatomy and the art of mantra chanting.'
		},
		{
			id: 5,
			name: 'Yogi Raghav',
			specialty: 'Bhagwat Geeta',
			experience: 'Experience 21+ Years',
			image: '/yogashala-founder2.jpg'
		}
	]
} as const;

// ===========================================
// YOGA TEACHER TRAINING COURSES CARDS SECTION
// ===========================================

export const YOGA_COURSES_CARDS_SECTION = {
	TITLE: 'Our Yoga Teacher Training Courses',
	SUBTITLE: 'Transform your practice with internationally certified yoga teacher training programs',

	COURSES: [
		{
			id: 1,
			title: '100 Hour Yoga Teacher Training Course',
			duration: '12 Days',
			module: 'Residential with Meals',
			privateRoom: 'USD 699',
			sharedRoom: 'USD 499',
			certification: 'Yoga Alliance',
			date: '1st-12th of every month',
			image: '/yogacoursepic.jpg',
			description:
				'Perfect for beginners seeking a comprehensive introduction to yoga teaching fundamentals.'
		},
		{
			id: 2,
			title: '200 Hour Yoga Teacher Training Course',
			duration: '24 Days',
			module: 'Residential with Meals',
			privateRoom: 'USD 1099',
			sharedRoom: 'USD 899',
			certification: 'Yoga Alliance',
			date: '1st-24th of every month',
			image: '/yogacoursepic.jpg',
			description: 'The most popular certification course for aspiring yoga teachers worldwide.'
		},
		{
			id: 3,
			title: '300 Hour Yoga Teacher Training Course',
			duration: '28 Days',
			module: 'Residential with Meals',
			privateRoom: 'USD 1399',
			sharedRoom: 'USD 1199',
			certification: 'Yoga Alliance',
			date: '1st-28th of every month',
			image: '/yogacoursepic.jpg',
			description: 'Advanced training to deepen your practice and teaching methodology.'
		},
		{
			id: 4,
			title: '500 Hour Yoga Teacher Training Course',
			duration: '8 Weeks',
			module: 'Residential with Meals',
			privateRoom: 'USD 2149',
			sharedRoom: 'USD 1549',
			certification: 'Yoga Alliance',
			date: '1st of every month',
			image: '/yogacoursepic.jpg',
			description: 'Complete comprehensive training combining 200hr and 300hr certifications.'
		}
	]
} as const;

// ===========================================
// FOCUS CARDS GALLERY SECTION
// ===========================================

export const FOCUS_CARDS_SECTION = {
	TITLE: 'Facilities You Enjoy At The Yoga School In Rishikesh, India',
	CARDS: [
		{
			title: 'About Transportation',
			p: `We arrange, for students without a direct flight to Dehradun, their transportation from Delhi. If a student wishes to arrive by taxi/cab arranged by them, we send a Google map location and contact number of the Hatha YogAshram.`,
			src: 'https://plus.unsplash.com/premium_photo-1682092820451-3ce57694b514?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhbnNwb3J0YXRvbiUyMGluZGlhJTIwcGNzJTIwZm9yJTIwZm9yaWVnbmVyc3xlbnwwfHwwfHx8MA%3D%3D'
		},
		{
			title: 'Excursions',
			p: `This course also allows you to enjoy one full day and one half day off each week to visit the many local attractions. You can go white water rafting in the Ganges, enjoy a trip to the beautiful Kempty Falls in Mussoorie.`,
			src: 'https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZ2F8ZW58MHx8MHx8fDA%3D'
		},
		{
			title: 'Accommodation',
			p: `We provide comfortable and clean accommodation for all our students. The rooms are well-ventilated with attached bathrooms, hot water facility, and peaceful environment perfect for your yoga journey.`,
			src: 'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/accomodation-1.webp?fit=750%2C750&ssl=1'
		},
		{
			title: 'Healthy Meals',
			p: `We serve nutritious vegetarian meals prepared with fresh local ingredients. Our meals are designed to support your yoga practice and maintain optimal health during your training program`,
			src: 'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/food.webp?fit=750%2C750&ssl=1'
		}
	]
} as const;

// ===========================================
// APPLE CARDS CAROUSEL SECTION
// ===========================================

export const APPLE_CARDS_SECTION = {
	TITLE: 'Overview of the Yoga Teacher Training in Rishikesh',
	SUBTITLE:
		'The yogic journey starts with Hawan (fire ceremony) and Mantra Chanting to pray the Universe and Mother Earth to purify the energy of our surroundings. We pray to remember our Ancestors and Gurus asking for the blessing and guidance on the Yogic path.',

	CARDS: [
		{
			title: 'HAWANA & ASANA PRACTICE',
			src: '/yogacoursepic.jpg',
			content: `
			<div class="font-space">
			  <p class="font-space"><strong>Hawana</strong></p>
			  <p>Fire is the sign of transformation 🕉.</p>
			  <p><strong>Fire ritual</strong>, in Sanskrit is referred to as "<em>Hawan</em>". This is conducted in the beginning of the Teacher Training Programme as an opening ceremony. Here, we perform a ceremony asking for blessings of the Universe and pray for the cosmos to guide us, lead us to the light of its knowledge. In this ritual, we offer various medicated and spiritual herbs and ghee into the divine fire to purify the surrounding environment and to enhance the energy/Aura of the place.</p>
			  <br />
			  <p>Now, what will you learn in the 200 Hour Yoga Teacher Training Course in Rishikesh?</p>
			  <p><strong>Asana</strong></p>
			  <p>In Patanjali Yogasutra, “Asanas” is defined as “sthira_sukham_asanam” – “Steady_Comfortable_Posture” (The Asana is a state when the body and mind are Stable, Comfortable, and Relaxed). <br />Here at the Vinyasa Yogashala, we follow the traditional practice of Hatha Yoga, going hand in hand with the modern yoga style, Vinyasa Flow Yoga, for the practitioner to understand the balancing of the energy, synchronization, and movement from one Asana to another. This blend of traditional and modern yoga helps deepen the practice at a gross and subtle level.</p>
			  <p>Apart from Hatha yoga and Vinyasa yoga classes, we also have classes for Adjustment & Alignment to understand the asanas, their alignment, and how to learn modifications that deepen the practice.</p>
			  <p>Our Vinyasa Flow teachers show you how to energize the body through movement and breath, and how to stretch the muscles and clean the body internally.</p>
			  <p>Our Hatha yoga teacher is an expert on alignment and will demonstrate how to safely teach your students asanas without risk of pain or injury.</p>
			
			</div>  `
		},
		{
			title: 'Meditation & Pranayama',
			src: '/yogashala-founder1.jpg',
			content: `
				Pranayama is the practice of increasing the “Vital Energy” “Lifeforce which is in constant motion through Breathing” well. Breathing is not just the function of the Lungs and Heart but is also related to one’s state of mind.

Today when short breathing is very common in the modern world, Respiratory problems like Asthma, Blood Pressure, and Psychosomatic problem like Stress, Anxiety, Diabetes, Hypertension seem to be increasing by the day to counter these problems. Pranayama is the solution here. We need to understand the concept of Pranayama because it is the bridge between mind and body. Here, you learn a number of breathing techniques like Diaphragmatic breathing, Chest breathing, Alternate Nostril breathing, etc. Here, good control over your breathing can help you practice for longer, with much stability and less tiredness.
			`
		},
		{
			title: 'Yoga Teacher Training',
			src: '/yogashala-founder2.jpg',
			content: `
				<p>Become a certified yoga instructor with our comprehensive teacher training programs:</p>
				<ul>
					<li>200-hour, 300-hour, and 500-hour certification courses</li>
					<li>Teaching methodology and class sequencing</li>
					<li>Anatomy, physiology, and injury prevention</li>
					<li>Business skills for yoga professionals</li>
				</ul>
				<p>Globally recognized certifications that open doors to teaching opportunities worldwide.</p>
			`
		},
		{
			title: 'Spiritual Wisdom',
			src: '/yogashala-founder3.jpg',
			content: `
				<p>Explore the rich philosophical traditions that form the foundation of yoga:</p>
				<ul>
					<li>Study of classical yoga texts like Patanjali's Yoga Sutras</li>
					<li>Vedantic philosophy and Sanskrit chanting</li>
					<li>Understanding of chakras and energy systems</li>
					<li>Integration of spiritual principles into modern life</li>
				</ul>
				<p>Gain profound insights into the deeper meaning and purpose of yoga practice.</p>
			`
		},
		{
			title: 'Ashram Life Experience',
			src: '/yogaschoolpic.jpg',
			content: `
				<p>Live the authentic yogic lifestyle in our traditional ashram environment:</p>
				<ul>
					<li>Daily schedule following yogic principles</li>
					<li>Vegetarian meals prepared with love and consciousness</li>
					<li>Community living and spiritual fellowship</li>
					<li>Connection with nature and simple living</li>
				</ul>
				<p>Experience the profound transformation that comes from immersive yoga practice.</p>
			`
		},
		{
			title: 'Healing & Ayurveda',
			src: '/testimonial.jpg',
			content: `
				<p>Discover the healing arts that complement your yoga practice:</p>
				<ul>
					<li>Introduction to Ayurvedic principles and constitution</li>
					<li>Therapeutic yoga for common health conditions</li>
					<li>Herbal medicine and natural healing methods</li>
					<li>Lifestyle recommendations for optimal health</li>
				</ul>
				<p>Learn to heal yourself and others through the wisdom of ancient healing traditions.</p>
			`
		}
	]
} as const;
