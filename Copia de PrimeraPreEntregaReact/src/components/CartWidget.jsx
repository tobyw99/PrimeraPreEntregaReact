import cart from "../assets/images/cart.svg";

const CartWidget = () => {
    return (
        <>

            <button type="button" class="btn btn-light position-relative">
                <img src={cart} alt="Carrito" width={16} />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> 1 </span>
            </button>


        </>
    )
}

export default CartWidget;