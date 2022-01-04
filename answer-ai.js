function ok(){
    var x =  document.forms["for"]["s"].value
      fjalit = ["PO", "JO", "NASHTA", "PO, PO THAM", "NUK E DI", "KA MUNDSI", "100% PO" , "100% JO"]
      gen = fjalit[Math.floor(Math.random() * fjalit.length)]
      document.getElementById("g").innerHTML = "Pytja juaj ka qen "+ x + " dhe prgjegja eshte " + gen;
      if(x == "" || x == null){
      document.getElementById("g").innerHTML = "Ju Lutem Shenoni Sepse e keni len te zbraset";

      }
     if(x == "pershendje" || x == "prsh"){
      document.getElementById("g").innerHTML = "Pershendetje"
         return false;
     }
     if(x == "hello"){
      document.getElementById("g").innerHTML = "Hi?🙋‍♂️"
         return false;
     }
     if(x == "hi"){
      document.getElementById("g").innerHTML = "Prsh Si po kaloni"
         return false;
     }
     if(x == "si jeni"){
      document.getElementById("g").innerHTML = "Un jam mir por Per fat Te keq jam Robot I programuar nga Ardit Berisha gjeth se si si jeni ju"
         return false;
     }
     if(x == "shka po ban"){
      document.getElementById("g").innerHTML = "kurgjo ti "
         return false;
     }
       if(x == "sa e ki tmadh"  ){
      document.getElementById("g").innerHTML = "Shka jan kto fjal banale"
         return false;
     }
      if(x == "ku je" || x == "Ku je"){
      document.getElementById("g").innerHTML = "un jam ne server"
         return false;
     }
    if(x == "kush tka kriju" || x == "kush tka programu"){
    document.getElementById("g").innerHTML = "Arditi"
        return false;
    }
    if(x == "a e njeh getuarin" || x == "a e njeh diarin" || x == "a e njeh jetonin"){
        document.getElementById("g").innerHTML = "Po more e njoh"
    }
    if(x == "a osht getuari gay" || x == "a osht getuar gay" || x == "A osht Getuari Gey" || x == "a osht geti peder"){
        document.getElementById("g").innerHTML = "Pa Dyshim qe poo"
    }
    
    if(x == "kush je ti" || x ==  "Kush je ti"){
        document.getElementById('g').innerHTML = "Assistentja personale e Arditit"
    }
    if(x == "ku je Tani" || x == "Ku je tani" || x == "ku je tani"){
        document.getElementById('g').innerHTML = "Te Serveri i Arditit"
    }
    if(x == "qysh e ka ig arditi" ||x == "qysh e ka instagramin arditi" ||x == "Qysh e ka ig Arditi" ||x == "Qysh e ka Instagramin Arditi"){
        document.getElementById('g').innerHTML = "<a href='https://www.instagram.com/arditny_' target='_blank'>arditny_</a>"
    }
    if(x == "sa vjet i ki" || x == "Sa Vjet I Ki" || x == "Sa vjet i ki"){
    document.getElementById('g').innerHTML = "Ne nuk kemi vjet"
    }
     if(x == "dil" || x == "exit"){
     window.location = "https://www.google.com";
         return false;
     }
      return false;
      
 }

