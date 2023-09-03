import { memo } from "react"
import visa from '../Assets/footer-Assests/visa.webp'
import AE from '../Assets/footer-Assests/american-express.webp'
import DC from '../Assets/footer-Assests/diners-club.webp'
import Maestro from '../Assets/footer-Assests/maestro.jpg'
import MC from '../Assets/footer-Assests/mastercard.webp'
import NB from '../Assets/footer-Assests/net-banking.webp'
import rupay from '../Assets/footer-Assests/rupay.webp'
import wallet from '../Assets/footer-Assests/wallet.webp'

const Cards =()=>{
    return (
        <div className="cards-main">
            <p>We accept:</p>
            <img src={visa} alt=" visa card image"/>
            <img src={AE} alt="American Express image"/>
            <img src={MC} alt="Master Card image"/>
            <img src={DC} alt="diners club image"/>
            <img src={Maestro} alt="Maestro image"/>
            <img src={NB} alt="Net Banking image"/>
            <img src={rupay} alt="rupay image"/>
            <img src={wallet} alt="American Express image"/>
            <hr/>

        </div>

    );


}
export default memo(Cards);