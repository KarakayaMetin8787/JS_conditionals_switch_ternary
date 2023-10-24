function check(){
    const passwordCheck = document.body.querySelector("#password").value.length > 7 ? "Passwort akzeptiert" : "Passwort ist zu kurz (mind. 8 Zeichen)."
    document.body.querySelector("p").textContent = passwordCheck;
}