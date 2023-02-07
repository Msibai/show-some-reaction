import {useContext, useRef} from "react";
import "../css/signuppage.css"
import globalContext from "../context/GlobalContext.jsx";

export default function ()  {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  const {register} = useContext(globalContext);



  const onSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value, countryRef.current.value);
  };

  return (

      <div className={"signup-page-container"}>

        <div className="register-container">

          <div>
            <form action="javascript:void(0)" className="register-form" onSubmit={() => register(emailRef.current.value, passwordRef.current.value, nameRef.current.value)}>
              <h1>Sign up</h1>
              <label htmlFor="name">Full name:</label>
              <input className="input-box"
                     ref={nameRef}

                     type="text"
                     id="name"
                     placeholder="John Doe"
              />
              <label htmlFor="email">E-mail:</label>
              <input
                  className="input-box"
                  ref={emailRef}
                  type="email"
                  id="email"
                  placeholder="your@email.com"
              />
              <label htmlFor="password">Password:</label>
              <input
                  className="input-box"
                  ref ={passwordRef}
                  type="password"
                  id="password"
                  placeholder="Password"
              />
              {/*<label htmlFor="country">Country:</label>*/}
              {/*<input*/}
              {/*  className="input-box"*/}
              {/*  ref ={countryRef}*/}
              {/*  type="text"*/}
              {/*  id="country"*/}
              {/*  placeholder="Country"*/}

              <input type={"submit"} name={'submit'} className="register-btn" value={'Register'}/>
            </form>
          </div>
        </div>
      </div>
  );
};
