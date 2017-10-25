import React from 'react';
import ContactCard from './contact_card';
import contactData from '../data/contacts'

class ContactList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            contacts: contactData
        }
    }
    render() {
       console.log('Contact Data: ', this.state.contacts);
       return <h1>Contact List</h1>
    }
}

export default ContactList;
