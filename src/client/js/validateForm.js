import { handleSubmit } from "./formHandler";

function validateForm() {
    //check validaty of the content
let alert = document.createElement('div');
alert.classList.add('alert');
alert.insertAdjacentHTML('afterbegin','<i class="fa-solid fa-circle-exclamation"></i>');
alert.insertAdjacentHTML('beforeend','<p>Invalid URL</p>')

document.querySelector('.analyze').addEventListener('click',()=>{ 
    let content = document.querySelector('.inputtext').value;
//test url here
    let regexHttp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    let regexNoHttp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

//if url is valid, pass the url to form handler.
    if (content.match(regexHttp)||content.match(regexNoHttp)){
        document.querySelector('.inputtext').classList.remove('invalidInput');
        let checkAlert = document.querySelector('.alert');
        if (checkAlert){
            checkAlert.remove();
        }
        return handleSubmit(content);

    } else {
        document.querySelector('.inputtext').classList.add('invalidInput');
        document.querySelector('.input').insertAdjacentElement('beforeend',alert);
    }

})
    
}

export { validateForm }
