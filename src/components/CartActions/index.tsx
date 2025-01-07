import Button from "../Button";
import Styles from './CartActions.module.css';

type CartActions = {
    handleRedirect: () => void
}

const CartActions = ({handleRedirect}: CartActions) => {
    return (
        <div className={Styles.cartActions}>
            <Button
                onClick={handleRedirect}
                variant="secondary"
            >Continuar comprando</Button>
            <Button
                onClick={() => console.log("pagamento")}
            >Ir para pagamento</Button>
        </div>
    )
}

export default CartActions;
