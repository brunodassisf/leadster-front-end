import { Nav, Button } from "./Navbar.style";

export default function Navbar() {
    return (
        <Nav>
            <Button href="/" active={true}>
                Agências
            </Button>
            <Button href="/">Chatbot</Button>
            <Button href="/">Marketing Digital</Button>
            <Button href="/">Geração de Leads</Button>
            <Button href="/">Mídia Paga</Button>
        </Nav>
    );
}
