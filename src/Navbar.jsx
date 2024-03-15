import './styles/navbar.css'

export function Navbar (){
    return (
    <header>
        <div className="navbar-header">
            <nav>
                <figure>
                    <img src="../src/assets/logo.png" alt="Logo - 'myPresets'" className = "logo" href=""/>
                </figure>
                <a href="" className = "btn-nav" >CATÁLOGO</a>
                <a href="" className = "btn-nav" >NOSOTROS</a>
                <a href="" className = "btn-nav" >AYUDA</a>
                <div className="flex-end">
                    <a href="" className = "btn-nav" >INICIAR SESIÓN</a>
                    <div className='userIconSVG'></div>
                </div>
            </nav>
        </div>
    </header>
    )
}