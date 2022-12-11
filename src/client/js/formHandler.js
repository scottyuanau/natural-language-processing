export { handleSubmit }

function handleSubmit(url) {
   postData('/postData',{'url':url})
   .then(()=>updateUI());

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



 //updateUI
const updateUI = async ()=>{
   let response = await fetch('/getData');
   try {
      let data = await response.json();
      let agreement = data.agreement;
      let confidence = data.confidence;
      let subjectivity = data.subjectivity;
      let scoreTag = data.score_tag;
      let txt = data.txt;
      let polarity ={
         "P+":"strong positive",
         "P":"positive",
         "NEU":"neutral",
         "N":"Negative",
         "N+":"Strong negative",
         "NONE":"without polarity"
      };
      document.querySelector('.polarity').textContent = `Polarity: ${polarity[scoreTag]}`;
      document.querySelector('.subjectivity').textContent = `Subjectivity: ${subjectivity}`;
      document.querySelector('.agreement').textContent = `Agreement: ${agreement}`;
      document.querySelector('.confidence').textContent = `Confidence: ${confidence}`;
      document.querySelector('.snippetheading').textContent = 'Text Snippets';
      document.querySelector('.textextraction').textContent = `${txt}`;
   } catch(error) {
      console.log('error',error);
   }
   
 };