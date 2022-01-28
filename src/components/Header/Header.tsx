import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(props: any) {
    return (
        <header className={s.header}>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Обмінник валют</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/">обмін</NavLink>
                        <NavLink to="/course">курс валют</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;