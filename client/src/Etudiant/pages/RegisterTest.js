import React, { useEffect, useRef, useState} from "react";
import {faCheck, faTimes, faInfoCircle} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const CIN_REGEX = /^[0-9]{8}$/;
const NUMINSCRIPTION_REGEX = /^[0-9]{8}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-A])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterTest = () => {
  const userRef = useRef();
  const errRef = useRef();


  const [user, setUser] = useState('');
  const [UserFocus, setUserFocus] = useState(false);

  const [cin, setCin] = useState('');
  const [validCin, setValidCin] = useState(false);
  const [CinFocus, setCinFocus] = useState(false);

  const [inscription, setInscription] = useState('');
  const [validInscription, setValidInscription] = useState(false);
  const [InscriptionFocus, setInscriptionFocus] = useState(false);

  const [username, setUserName] = useState('');
  const [validUserName, setValidUserName] = useState(false);
  const [UserNameFocus, setUserNameFocus] = useState(false);

  const [password, setPassword]= useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [PasswordFocus, setPasswordFocus] = useState(false);


  const [matchPassword, setMatchPassword]= useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    const result = CIN_REGEX.test(cin);
    console.log(result);
    console.log(cin);
    setValidCin(result);
   }, [cin])

   useEffect(()=>{
    const result = NUMINSCRIPTION_REGEX.test(inscription);
    console.log(result);
    console.log(inscription);
    setValidInscription(result);
   }, [inscription])

  useEffect(()=>{
   const result = USER_REGEX.test(username);
   console.log(result);
   console.log(username);
   setValidUserName(result);
  }, [username])

  useEffect(()=>{
    const result = PWD_REGEX.test(password);
    console.log(result);
   console.log(password);
   setValidPassword(result);
   const match = password === matchPassword;
   setValidMatch(match);
  }, [password,matchPassword])

  useEffect(()=>{
    setErrMsg('');
  }, [cin, inscription, username, password, matchPassword])


 
  return (
    <div className="py-5" style={{ background: "#b9e7e7", minHeight: "100vh" }}>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}
      </p>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center">Inscription</h3>
        <p className="text-center">S'inscrire sur la plateforme </p>
        <form>

            <label htmlFor="password">
                Password:
                <span className={validPassword ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className={validPassword || !password ? "hide": "invalid"}>
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </label>
            <input   
              type="password"
              id="password"
              onChange={(e)=> setPassword(e.target.value)}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={()=> setPasswordFocus(true)}
              onBlur={()=> setPasswordFocus(false)}    >
            </input>
              <p id="uidnote" className={UserFocus && user && !validCin ? "instructions" : "offscreen" }>
                <FontAwesomeIcon icon={faInfoCircle}/>
                8 Numbers
              </p>
        
            <button
             
              disabled={!validCin || !validInscription || !validUserName || !validPassword || !validMatch ? true : false}
            >
              Inscription
            </button>
          
        </form>
      </div>
    </div>
  );
};

export default RegisterTest;
