import React from "react";
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container} from "reactstrap"

export default class Appnavbar extends React.Component{
    constructor(){
        super()
        this.state={
            isOpen:false
        }
    }

    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })

    }
    render(){
        return(
            <div>
                <Navbar color='dark' dark expand='sm' className="mb-5">
                    <Container>
                        <NavbarBrand href="/">
                            ShoppingList 
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/unholydisater">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
} 