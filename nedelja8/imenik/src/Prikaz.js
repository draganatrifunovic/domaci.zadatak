import React from 'react'
import Greska from './Greska';
import ListaKontakata from './ListaKontakata';
import './prikaz.css'
  
class Prikaz extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contacts: [],
            filteredContacts: [],
            name: '',
            number: '',
            message: ''
        }
    }
    
    handleName(e){
        this.setState({
            name: e.target.value
        })
    }
    
    handleNumber(e){
        this.setState({
            number: e.target.value
        })
    }
    
    handleClick(){
        if(this.state.name.trim() === '' || this.state.number.trim() === ''){
            this.setState({
                message: 'Pogresan unos!'
            })
        } 
         else if(!this.state.number.startsWith('+')){
            this.setState({
                message: 'Unesite broj u formatu: +ххх ххххххххх'
            })
        }
         else {
            this.setState({
                message: ''
            })
            if(this.state.contacts.find(element => element.name === this.state.name)){
                if(window.confirm('Da li ste sigurni da zelite da zamenite trenutni kontakt?')){
                    let contact = {
                        name: this.state.name,
                        number: this.state.number
                    }
                    let index = this.state.contacts.findIndex(element => element.name===this.state.name);
                    this.state.contacts.splice(index,1,contact);
                    this.setState({
                        contacts: this.state.contacts,
                        filteredContacts: this.state.contacts
                    })
                } else {return}
            } else {
                let contact = {
                    name: this.state.name,
                    number: this.state.number
                }
                this.state.contacts.push(contact);
                this.setState({
                    contacts: this.state.contacts,
                    filteredContacts: this.state.contacts
                })
        } }}

    reset() {
        this.setState({
            name: '',
            number: ''
        })
    }

    handleInput(e){
        let filteredContacts = this.state.contacts.filter(el =>  el.name.includes(e.target.value));
        this.setState({
            filteredContacts: filteredContacts
        })
    }

    render() {
        
        return(
            <>
            <div className="prikaz">
                <input type="text" onChange={(e) => this.handleName(e)} value={this.state.name} placeholder="Unesi ime" />
                <input type="text" onChange={(e) => this.handleNumber(e)} value={this.state.number} placeholder="Unesi broj" />
                <button onClick={() =>{ this.handleClick(); this.reset() }}>Dodaj</button>
            </div>
            <div>
                <Greska message={this.state.message} />
            </div>
            <div>
                <h3>Lista kontakata</h3>
                <ListaKontakata contacts={this.state.filteredContacts} />
            </div>
            <input type="text" onChange={(e) => this.handleInput(e)} />
            </>
        )
    }
    
}

export default Prikaz