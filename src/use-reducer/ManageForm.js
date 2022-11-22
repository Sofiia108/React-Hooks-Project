import React from 'react'
import {useState, useReducer } from 'react';
const initialState = [
    {
        id: Date.now(),
        name: 'Sofia',
        email: "sofia.masliak@gmail.com",
    }
];

function reducer(state, action) {
    switch(action.type) {
        case 'add':
            return [...state, action.payload];
        case 'delete': 
            return state.filter((contact) => {
                return contact.id !== action.payload.id;    
            });
        default:
            throw new Error();
    }
}


function ManageForm() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    
    const addContact = (e) => {
        e.preventDefault();
        const contact = {
            id: Date.now(),
            name,
            email
        }
        setName('');
        setEmail('');
        dispatch({type: 'add', payload: contact});
    }

   

    return (
        <div>
            <h5>Manage Form</h5>
            <form onSubmit={addContact}>
                <input 
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Add Contact</button>
            </form>
            <div>
                <ul>
                    {state.map((contact) => {
                        return (
                            <ul key={contact.id}>
                                <li>{contact.name}</li>
                                <li>{contact.email}</li>
                                <div>
                                    <button onClick={() => dispatch({type: 'delete', payload: {id: contact.id}})}>Delete</button>
                                </div>
                            </ul>
                        )
                    })}
                </ul>
            </div>
        </div>
        

        
    )
}

export default ManageForm