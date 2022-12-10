function validateForm() {
    //check validaty of the content
document.querySelector('.analyze').addEventListener('click',()=>{ 
    let content = document.querySelector('.inputtext').value;
    // let regexHttp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    // let regexNoHttp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if (content.length !=0){
        console.log('true');
    } else {
        console.log('false');
    }

})
    
}

export { validateForm }
