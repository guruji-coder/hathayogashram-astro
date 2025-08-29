export interface CarouselSlide {
	id: number;
	image: string;
	title: string;
	subtitle: string;
	description?: string;
	primaryButton: {
		text: string;
		href: string;
		variant: 'primary' | 'secondary';
	};
	secondaryButton?: {
		text: string;
		href: string;
		variant: 'primary' | 'secondary';
	};
}

export const carouselSlides: CarouselSlide[] = [
	{
		id: 1,
		image: '/bg-certificate.png',
		title: 'With Hatha Yoga Ashram',
		subtitle: 'Balance Your Life',
		description:
			'Discover inner peace and strength through authentic yoga practices in the spiritual heart of Rishikesh',
		primaryButton: {
			text: 'Book Your Yoga Course Now',
			href: '/courses',
			variant: 'primary'
		},
		secondaryButton: {
			text: 'Enroll Now',
			href: '/contact',
			variant: 'secondary'
		}
	},
	{
		id: 2,
		image: '/bg-certificate.png',
		title: 'Transform Your Practice',
		subtitle: 'Deepen Your Journey',
		description:
			'Join certified yoga teachers in comprehensive training programs designed to elevate your practice',
		primaryButton: {
			text: 'Explore Our Courses',
			href: '/courses',
			variant: 'primary'
		},
		secondaryButton: {
			text: 'Learn More',
			href: '/about',
			variant: 'secondary'
		}
	},
	{
		id: 3,
		image: '/bg-certificate.png',
		title: 'Authentic Yoga Training',
		subtitle: 'Become a Certified Teacher',
		description:
			'Experience traditional yoga teachings in the birthplace of yoga with our internationally recognized certifications',
		primaryButton: {
			text: 'Start Your Journey',
			href: '/courses/200-hour-yoga-teacher-training',
			variant: 'primary'
		},
		secondaryButton: {
			text: 'View Schedule',
			href: '/courses',
			variant: 'secondary'
		}
	}
];

// Fallback gradient backgrounds if images are not available
export const fallbackGradients = [
	'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
	'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
];
