export const REVIEWS_SECTION = {
	TITLE: 'See What Our Students Say About Us!',
	VIEW_ALL_BUTTON: 'See All Google Reviews',
	VIEW_ALL_URL: 'https://www.google.com/search?q=hatha+yoga+ashram+rishikesh+reviews',

	REVIEWS: [
		{
			id: 1,
			name: 'Monica',
			image: '/testimonial.jpg',
			rating: 5,
			text: "I'm doing the 200 hours yoga teaching training course and I have been discovering that yoga is much more than what I expected. The teachers are amazing, highly professional and knowledgeable.",
			course: '200 Hour YTTC',
			country: 'Italy',
			readMoreUrl: '#'
		},
		{
			id: 2,
			name: 'Megan',
			image: '/testimonial.jpg',
			rating: 5,
			text: 'A life changing experience to live. Teachers are amazing, highly professional and knowledgeable. The whole experience exceeded my expectations in every way possible.',
			course: '200 Hour YTTC',
			country: 'Australia',
			readMoreUrl: '#'
		},
		{
			id: 3,
			name: 'Geneva Gray',
			image: '/testimonial.jpg',
			rating: 5,
			text: "Namaste🙏 I've completed my 200 hours teacher training course at Hatha Yoga Ashram. To begin with, I was nervous about joining this course but the teachers made me feel comfortable.",
			course: '200 Hour YTTC',
			country: 'USA',
			readMoreUrl: '#'
		},
		{
			id: 4,
			name: 'Sarah Johnson',
			image: '/testimonial.jpg',
			rating: 5,
			text: 'The 300-hour advanced training took my practice and teaching to the next level. The depth of knowledge shared by the instructors was incredible. Highly recommend!',
			course: '300 Hour YTTC',
			country: 'Canada',
			readMoreUrl: '#'
		}
	]
};

export const REVIEWS_STYLES = {
	SECTION_PADDING: 'py-16 px-4',
	CONTAINER: 'container mx-auto max-w-6xl',
	TITLE: 'text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4',
	REVIEWS_GRID: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12',
	REVIEW_CARD:
		'bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2',
	REVIEWER_INFO: 'flex items-center mb-4',
	REVIEWER_IMAGE: 'w-16 h-16 rounded-full object-cover mr-4 border-4 border-orange-200',
	REVIEWER_DETAILS: 'flex-1',
	REVIEWER_NAME: 'font-semibold text-lg text-gray-800',
	REVIEWER_META: 'text-sm text-gray-500',
	RATING: 'flex items-center mb-4',
	STAR: 'text-yellow-400 mr-1',
	REVIEW_TEXT: 'text-gray-700 leading-relaxed mb-4',
	READ_MORE: 'text-orange-500 hover:text-orange-600 font-medium transition-colors',
	VIEW_ALL_BUTTON:
		'inline-block bg-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl'
};
