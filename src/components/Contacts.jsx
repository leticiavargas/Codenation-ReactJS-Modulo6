import React from "react";
import './Contact.scss';
import Contact from "./Contact";

const Contacts = ({contacts = []}) => {
	const headerData = {
		name: 'Nome',
		phone: 'Telefone',
		country: 'País',
		admissionDate: 'Admissão',
		company: 'Empresa',
		department: 'Departamento'
	}
	
	return (
		<div className="container" data-testid="contacts">
			<section className="contacts">
				<Contact data={headerData} />
				{contacts.map((contact) => (
					<Contact key={contact.id} data={contact} />
				))}
			</section>
		</div>		
	);
	
}

export default Contacts;
