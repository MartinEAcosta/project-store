import './styles/App.css';
import { Navbar } from './Navbar.jsx';
import { Carrusell } from './Carrusell.jsx';
import { ProductCarrusell } from './ProductCarrusell.jsx';

export function App() {
    return (
        <div>
            <Navbar/>  
            <div>
                <Carrusell/>
            </div>
            <div>
                <h1>PRODUCTOS MEJORES VALORADOS</h1>
                <ProductCarrusell/>
            </div>
        </div>
    )
}