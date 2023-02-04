import "../css/paymentpage.css";

export default function() {
    return (

        <div className="payment-page-component">

            <h2 className="card-info">Enter your credit card details:</h2>
            <input type="text" placeholder="Name" className="payment-card-input"/>
            <input type="tell" placeholder="Card number" maxLength="16"  className="payment-card-input" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}*"/>
            <input type="tel" placeholder="MM / YY "  className="payment-card-input"/>
            <input type="tel" placeholder="CVC" maxLength="4"  className="payment-card-input"/>
            <button className="buy-tickets-button">Buy tickets</button>

        </div>

    );
}

