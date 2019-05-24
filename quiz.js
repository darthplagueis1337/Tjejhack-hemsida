const frågor = [   // gör en lista med frågor
{
    frågan: "Vad är 10+10?",//frågan
    svar: "20"//svaret
},
{
    frågan: "Vad är 10+11?",//frågan
    svar: "21"//svaret
},
{
    frågan: "Vad är 10+12?",//frågan
    svar: "22"//svaret
},
{
    frågan: "Vad är 10+13?",//frågan
    svar: "23"//svaret
},
{
    frågan: "Vad är 10+14?",//frågan
    svar: "24"//svaret

},
{
    frågan: "Vad är 10+15?",//frågan
    svar: "25"//svaret

},
{
    frågan: "Vad är 10+16?",//frågan
    svar: "26"//svaret

},
{
    frågan: "Vad är 10+17?",//frågan
    svar: "27"//svaret

},
{
    frågan: "Vad är 10+18?",//frågan
    svar: "28"//svaret

},
{
    frågan: "Vad är 10+19?",//frågan
    svar: "29"//svaret

}
];

let antal_rätt = 0;// låter variabeln antal_rätt få 0 som startvärde
let fråga_nummer = 0; // fråga_nummer anger vilken fråga vi är på. startvärdet = 0

  document.addEventListener("DOMContentLoaded", () => {  //DOMContentLoaded gör att våran skript inte starta förens sidan har laddat klart och föjs där efter funktionen ladda fråga
    ladda_fråga();
  });
  function ladda_fråga(){
    let nuvarande_fråga = frågor[fråga_nummer];
    let question = nuvarande_fråga.frågan;
    document.getElementById('h3_fråga').innerHTML = question;
  };
   function Quiz(){
    let nuvarande_fråga = frågor[fråga_nummer];
    let question = nuvarande_fråga.frågan;
    let ditt_svar = document.getElementById('svaret').value
    if (ditt_svar == nuvarande_fråga.svar) {
      antal_rätt++;
      fråga_nummer++;
      document.getElementById("rätt").innerHTML = antal_rätt;   
    }

    else if (ditt_svar != nuvarande_fråga.svar){
      fråga_nummer++;
    }

    if (fråga_nummer >= frågor.length){
      spel_slut()}
      else{
        ladda_fråga()
      }
  };
  function spel_slut(){
  }