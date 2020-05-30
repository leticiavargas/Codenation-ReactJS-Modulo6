import React from 'react';
import './Contact.scss';

const Contact = ({ data }) => {
    const dateString = new Date(data.admissionDate).toLocaleDateString('pt-br');
    return (
          <article className="contact" data-testid="contact">
            <span className="contact__avatar">
              <img src={data.avatar} alt={data.name}/>
            </span>
            <span className="contact__data" data-testid="contact-name">{data.name}</span>
            <span className="contact__data" data-testid="contact-phone">{data.phone}</span>
            <span className="contact__data" data-testid="contact-country">{data.country}</span>
            <span className="contact__data" data-testid="contact-date">{dateString == 'Invalid Date' ? data.admissionDate : dateString}</span>
            <span className="contact__data" data-testid="contact-company">{data.company}</span>
            <span className="contact__data" data-testid="contact-departament">{data.department}</span>
          </article>    
      );
}

export default Contact;
