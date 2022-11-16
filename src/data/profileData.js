import {
	FaFacebook,
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaGoogle,
	FaPhoneAlt,
	FaUser,
	FaRegCalendarAlt,
	FaMapMarkerAlt,
} from 'react-icons/fa';

export const profileSocial = [
	{ social: 'Facebook', path: 'https://www.facebook.com/nnt.2011/', icon: FaFacebook },
	{ social: 'Instagram', path: 'https://www.instagram.com/nnt.20/', icon: FaInstagram },
	{ social: 'Github', path: 'https://github.com/ngocthang2021', icon: FaGithub },
	{ social: 'LinkedIn', path: 'https://www.linkedin.com/in/ngngthang/', icon: FaLinkedin },
];

export const profileInformation = [
	{ profile_tag: 'Name', profile_info: 'Nguyễn Ngọc Thắng', icon: FaUser },
	{ profile_tag: 'DoB', profile_info: '20/11/1999', icon: FaRegCalendarAlt },
	{ profile_tag: 'Phone', profile_info: '+84986834992', icon: FaPhoneAlt },
	{ profile_tag: 'Address', profile_info: '18, Street 13, Long Binh Ward, Thu Duc City, HCMC', icon: FaMapMarkerAlt },
	{ profile_tag: 'Email', profile_info: 'ng.ngocthang2021@gmail.com', icon: FaGoogle },
];

export const profileContact = [
	{
		contact_site: 'Facebook',
		contact_display: 'Facebook',
		contact_link: 'https://www.facebook.com/nnt.2011/',
		icon: FaFacebook,
	},
	{
		contact_site: 'Instagram',
		contact_display: 'Instagram',
		contact_link: 'https://www.instagram.com/nnt.20/',
		icon: FaInstagram,
	},
	{
		contact_site: 'Github',
		contact_display: 'Github',
		contact_link: 'https://github.com/ngocthang2021',
		icon: FaGithub,
	},
	{
		contact_site: 'LinkedIn',
		contact_display: 'LinkedIn',
		contact_link: 'https://www.linkedin.com/in/ngngthang/',
		icon: FaLinkedin,
	},
	{
		contact_site: 'Email',
		contact_display: 'ng.ngocthang2021@gmail.com',
		contact_link: 'ng.ngocthang2021@gmail.com',
		icon: FaGoogle,
	},
	{ contact_site: 'Phone', contact_display: '+84986834992', contact_link: '+84986834992', icon: FaPhoneAlt },
];
