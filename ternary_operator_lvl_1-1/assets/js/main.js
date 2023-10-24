function check(){
    const age = document.body.querySelector("#ageCheck").value >= 18 ? "Volljährig" : "Minderjährig";
    document.body.querySelector("p").textContent = age;
}