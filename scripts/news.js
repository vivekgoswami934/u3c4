// Ude Import export (MANDATORY)


import { navbar  } from "../components/navbar.js";

  let nav = document.getElementById("navbar")

  nav.innerHTML = navbar();

 // console.log(navbar)
//////////////////////////////

let searchthedata = async () => {
    const query = document.getElementById("search_input").value;
    console.log(query)
  
    try {
      let res = await fetch(
        `https://masai-mock-api.herokuapp.com/news?q=${query}`
      );
  
      let data = await res.json();
      //console.log("1111111111111111111111")
      console.log(data.articles);
  
      return data.articles
    } catch (err) {
      console.log(err);
    }
  };



  ////

  let append = async (data) => {

    data.forEach( el => {

        let results = document.getElementById("detailed_news")
        results.innerHTML =null

        let div1 = document.createElement("div")
        let div2 = document.createElement("div")

        let image = document.createElement("div")
        image.src =  el.urlToImage;

        console.log(image)
        
        let title = document.createElement("h2")
           title.innerText =  el.title ;

        let content = document.createElement("p")
          content.innerText = el.content;
          div1.append(image)

          div2.append(title,content)

          
          results.append(div1,div2)
          
         
    });
}


let search = async (e) => {
    
    if(e.key === "Enter"){

        let datas = await searchthedata()
        console.log(datas)

        append(datas)
    }
}


    document.getElementById("search_input").addEventListener("keydown",search);





  ///
