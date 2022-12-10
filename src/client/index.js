import {handleSubmit} from './js/formHandler'
import {validateForm} from './js/validateForm'
import './styles/styles.scss'
import './styles/button.scss'
export {
    handleSubmit,
    validateForm
}



//check validaty of the url
document.querySelector('.analyze').addEventListener('click',()=>{ 
    let url = document.querySelector('.inputtext').value;
    let regexHttp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    let regexNoHttp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (url.match(regexHttp) || url.match(regexNoHttp)) {
        console.log('true');
    } else {
        console.log('false');
    }

    fetchURLContent(url);
})

async function fetchURLContent(url){
    let response = await fetch(url);
    try {
        console.log(response);
        return response;
    }  catch(error) {
        console.log('error',error);
    }
};