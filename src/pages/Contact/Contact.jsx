import React from 'react';

import ContactForm from '../../components/ContactForm/ContactForm';

import './Contact.scss';

function Contact() {
	return (
		<section
			className='section contact'
			id='contact'
		>
			<div className='section__header'>
				<h2 className='section__heading'>Get in Touch!</h2>
				<h2 className='section__heading--bg'>Contact</h2>
			</div>
			<div className='section__container'>
				<ContactForm />
			</div>
		</section>
	);
}

export default Contact;
