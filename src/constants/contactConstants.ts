export const CONTACT_INFO = {
	ADDRESSES: [
		{
			id: 1,
			location: 'Rishikesh, India',
			address: 'Balaknath Street, Upper Tapovan, Laxman Jhula, Rishikesh, Uttarakhand 249192',
			icon: 'fas fa-map-marker-alt'
		}
	],
	PHONE: {
		number: '+91 9119070101',
		display: '+91 9119070101',
		href: 'tel:+919119070101',
		whatsapp: 'https://wa.me/919119070101',
		note: '(WhatsApp Only)',
		icon: 'fas fa-phone'
	},
	EMAIL: {
		address: 'vinyasayogshalaindia@gmail.com',
		href: 'mailto:vinyasayogshalaindia@gmail.com',
		icon: 'fas fa-envelope'
	},
	SOCIAL_MEDIA: [
		{
			id: 1,
			name: 'Instagram',
			url: 'https://www.instagram.com/vinyasayogashalarishikesh/',
			icon: 'fab fa-instagram',
			label: 'Follow us on Instagram'
		},
		{
			id: 2,
			name: 'YouTube',
			url: 'https://www.youtube.com/channel/UCRYP12Aegejd8xbclQfWO_g',
			icon: 'fab fa-youtube',
			label: 'Watch our YouTube videos'
		},
		{
			id: 3,
			name: 'WhatsApp',
			url: 'https://wa.me/919119070101',
			icon: 'fab fa-whatsapp',
			label: 'Contact us on WhatsApp'
		}
	]
};

// Quick access to commonly used contact info
export const QUICK_CONTACT = {
	PHONE: CONTACT_INFO.PHONE.display,
	WHATSAPP: CONTACT_INFO.PHONE.whatsapp,
	EMAIL: CONTACT_INFO.EMAIL.address,
	MAIN_LOCATION: CONTACT_INFO.ADDRESSES[0].address
};
