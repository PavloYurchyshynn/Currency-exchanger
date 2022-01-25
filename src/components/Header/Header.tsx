import s from './Header.module.css'
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header(props: any) {
    return (
        <div className={s.header}>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Сurrency exchange</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to="/">Exchange</NavLink>
                        <NavLink to="/course">course</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;