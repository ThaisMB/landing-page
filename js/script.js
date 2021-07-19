const form = document.getElementById('form');

const checkbox = document.getElementById('agreement');

 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let content = document.querySelector('.content');

    if(checkbox.checked && name.length>0 && email.length>0)  {
        let data = {
            name,
            email,
        };
        let convertData = JSON.stringify(data);
    
        localStorage.setItem('lead', convertData);
    
        let phrase = document.getElementById('phrase');
    
        let carregando = "<p>carregando...</p>";
    
        let pronto = "<p> Email cadastrado com sucesso!</p><p> Em breve você receberá por e-mail as melhores ofertas dessa Black Friday!</p>";
    
        phrase.innerHTML = "";

        content.innerHTML = carregando;
    
        setTimeout( () => {content.innerHTML = pronto} , 1000);
    } else {

        content.classList.add("hide");

        let errorScreen = document.getElementById('error-screen');
        let btnReturn = document.getElementById('btnReturn');

        /*.addEventListener('click', (e) => {
            
        });*/
    }

    
})