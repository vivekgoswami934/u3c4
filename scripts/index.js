// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar, sidebar } from "../components/navbar.js";

let nav = document.getElementById("navbar");

nav.innerHTML = navbar();

//console.log(navbar)


let sibar = document.getElementById("sidebar");

sibar.innerHTML = sidebar();


///////// //////////    https://masai-mock-api.herokuapp.com/news?q=tesla

let searchthedata = async () => {
  const query = document.getElementById("search_input").value;
  console.log(query)

  try {
    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news?q=${query}`
    );

    let data = await res.json();
    console.log("1111111111111111111111")
    console.log(data.articles);

    return data.articles
  } catch (err) {
    console.log(err);
  }
};


// articles: Array(20)
// 0:
// author: "Igor Bonifacic"
// content: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. This was an exceptionally difficult quarter due to supply chain interruptions and China Ze… [+920 chars]"
// description: "Tesla delivered 310,048 vehicles over the first three months of 2022, the automaker announced\r\n on Saturday. “This was an exceptionally difficult quarter due to supply chain interruptions and China Zero-Covid policy,” Musk said\r\n on Twitter shortly after Tesl…"
// publishedAt: "2022-04-02T21:41:41Z"
// source: {id: 'engadget', name: 'Engadget'}
// title: "Tesla's deliveries increased despite supply shortages and plant closures"
// url: "https://www.engadget.com/tesla-q-1-2022-deliveries-214141313.html"
// urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2022-03/733d9be0-b2cd-11ec-b7f9-382caaedc1ae"


let append = async (data) => {

    data.forEach( el => {

        let results = document.getElementById("results")
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





/////////////////////////////////////////////////////////////////////////





let searchnews = async (id) => {
  try {
    //const query = document.getElementById("search_input").value;

    let res = await fetch(
      `https://masai-mock-api.herokuapp.com/news/top-headlines?country={id}`
    );

    let data = await res.json();

    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

let category = document.getElementById("sidebar").children;

function cSearch() {

     searchnews(this.id).then(  (data) =>{
       console.log(data)
       })

  

}

for (let el of category) {
  el.addEventListener("click", cSearch);
}
























////////////////////////////////////////

function abc(){
    window.location.href="search.js"
}