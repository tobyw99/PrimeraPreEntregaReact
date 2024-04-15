import logo from "../assets/images/LOGO CIRCULAR.jpg";
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row bg-black p-3">
                <div className="col"></div>
                <div className="col-md bg-black text-center">
                    <a href="#">
                        <img src={logo} alt="LV ACCESORIOS" width={320} />

                    </a>

                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget></CartWidget>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Valijas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Portaequipajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark"href="#" >4x4</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;