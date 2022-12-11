export { handleSubmit }

function handleSubmit(url) {
   postData('/postData',{'url':url})
   .then(getData())
   .then((data)=>updateUI(data));



}

//post url to local server
const postData = async ( url = '', data = {})=>{
     const response = await fetch(url, {
     method: 'POST', 
     credentials: 'same-origin',
     headers: {
         'Content-Type': 'application/json',
     },
    // Body data type must match "Content-Type" header        
     body: JSON.stringify(data), 
   });

     try {
       const newData = await response.json();
       console.log(newData);
       return newData;
     }catch(error) {
     console.log("error", error);
     }
 }

 //get content from server
 const getData = async ()=>{
      let response = await fetch('/getData');
      try {
         let data = await response.json();
         console.log(data);
      } catch(error) {
         console.log('error',error);
      }
 };

 //updateUI
 async function updateUI(data) {
   let agreement = data.agreement;
   let confidence = data.confidence;
   let subjectivity = data.subjectivity;
   let scoreTag = data.score_tag;
   let txt = data.txt;
   console.log(agreement);
 };