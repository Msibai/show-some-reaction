
import "../css/forgotpasswordpage.css"


export default function () {
    return (
        <div className={"forgot-password-container"}>


            <h2 className={"forgot-password-title"}>Forgot your password?</h2>
            <p className={"forgot-password-intro"}> That's not a problem, we'll send you a new one</p>
            <form>
                <h3>Enter your email</h3>
                <label className={"email-label-forgot-password"} htmlFor={"email"} />

                <input
                    type="email"
                    placeholder="your@email.com"
                    id="email"
                    name="email"
                    className="email"
                    />
                <div>

                <input className={"forgot-password-button"} value={'Submit'}/>

                </div>
                </form>
        </div>

    );
}
