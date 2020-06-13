import React, {useState} from "react";
import { Navbar, Container, Button } from "rbx";
import Logo from "../imagens/logo_full.png"
import useWindowScrollPosition from "@rehooks/window-scroll-position";






function Header() {
    


    const [change, setChange] = useState(false);
    const changePosition = 150;
  
    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }
  
    if (position.y > changePosition && !change) {
      setChange(true);
    }
  
    if (position.y <= changePosition && change) {
      setChange(false);
    }
  
    let style = {
      backgroundColor: change ? "#FBD04D" : "transparent",
      transition: "1s ease",
      position: "fixed",
      right: 0,
      left: 0,
      top: 0
    };

   let style_btn = {
        backgroundColor: change ? "blue" : "transparent",
        transition: "1s ease",
        border:change ? "2px solid blue" : "2px solid black",
        color: change ? "white" : "black",
        
      };

    return (
        <Navbar  style={style}>
            <Container>
                <Navbar.Brand>
                    <img src={Logo} alt="Coletivxs"/>
                    <Navbar.Burger className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="rigth">
                            <Button.Group>
                                    <Button  style={style_btn}>Inicio</Button>
                                    <Button  style={style_btn}>Sobre nós</Button>
                                    <Button  style={style_btn}>Parceiros</Button>
                                    <Button  style={style_btn}>Contato</Button>
                            </Button.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    )
}

export default Header