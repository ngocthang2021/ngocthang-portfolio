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
	{ profileTag: 'Name', profileInfo: 'Nguyễn Ngọc Thắng', icon: FaUser },
	{ profileTag: 'DoB', profileInfo: '20/11/1999', icon: FaRegCalendarAlt },
	{ profileTag: 'Phone', profileInfo: '+84986834992', icon: FaPhoneAlt },
	{ profileTag: 'Address', profileInfo: '18, Street 13, Long Binh Ward, Thu Duc City, HCMC', icon: FaMapMarkerAlt },
	{ profileTag: 'Email', profileInfo: 'ng.ngocthang2021@gmail.com', icon: FaGoogle },
];
