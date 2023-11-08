function Validation(inputs) {
    let error = []
    const username_pattern = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    //  const confpassword_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    const cin_pattern = /^\d{8}$/
    const numinscription_pattern = /^\d{8}$/

    if (inputs.username === "") {
        error.username = "Le champ [username] ne peut pas être vide. Veuillez le remplir"
    } else if (!username_pattern.test(inputs.username)) {
        error.username = "username didn't match"
    }
    if (inputs.email === "") {
        error.email = "Le champ [Email] ne peut pas être vide. Veuillez le remplir"
    } else if (!email_pattern.test(inputs.email)) {
        error.email = "L'adresse e-mail que vous avez saisie est invalide. Veuillez entrer une adresse e-mail valide"
    }
    // if (inputs.confpassword === "") {
    //     error.confpassword = " conf Password should note be empty"

    // }else if (!confpassword_pattern.test(inputs.confpassword)){
    //     error.confpassword = "conf Password didn't match"

    // }

    if (inputs.password === "") {
        error.password = "Le champ [Password] ne peut pas être vide. Veuillez le remplir"
    }
    else if (!password_pattern.test(inputs.password)) {
        error.password = "Le mot de passe doit comporter au moins [08] caractères"
        //error.confpassword = "Password and conf password didn't match"

    }

    if (inputs.cin === "") {
        error.cin = "Le champ [CIN] ne peut pas être vide. Veuillez le remplir"
    } else if (!cin_pattern.test(inputs.cin)) {
        error.cin = "Le numéro CIN doit comporter [08] caractères"
    }

    if (inputs.numinscription === "") {
        error.numinscription = "Le champ [Num Inscription] ne peut pas être vide. Veuillez le remplir"
    } else if (!numinscription_pattern.test(inputs.numinscription)) {
        error.numinscription = "Le numéro d'inscription doit comporter [08] caractères"
    }

    return error;
}
export default Validation