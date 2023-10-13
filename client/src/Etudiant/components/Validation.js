function Validation(inputs) {
    let error = []
    const username_pattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    //const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
 //  const confpassword_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    const cin_pattern = /^\d{8}$/
    const numinscription_pattern = /^\d{8}$/

    if (inputs.username === "") {
        error.username = "username should note be empty"
    }else if (!username_pattern.test(inputs.username)) {
        error.username = "username didn't match"
    }
    if (inputs.email === "") {
        error.email = "email should note be empty"
    }else if (!email_pattern.test(inputs.email)) {
        error.email = "email didn't match"
    }
   // if (inputs.confpassword === "") {
   //     error.confpassword = " conf Password should note be empty"

   // }else if (!confpassword_pattern.test(inputs.confpassword)){
   //     error.confpassword = "conf Password didn't match"

   // }

   if (inputs.password === "" ) {
   error.password = "Password should note be empty"
    }
    //else   if ( !password_pattern.test(inputs.password)  ) {
    //    error.password = "Password  didn't match"
        //error.confpassword = "Password and conf password didn't match"

    //}
        
    if (inputs.cin === "") {
        error.cin = "CIN should note be empty"
    }else if (!cin_pattern.test(inputs.cin)) {
        error.cin = "CIN didn't match"
    }

    if (inputs.numinscription === "") {
        error.numinscription = "Num Inscription should note be empty"
    }else if (!numinscription_pattern.test(inputs.numinscription)) {
        error.numinscription = "Num Inscription didn't match"
    }

    return error;
}
export default Validation