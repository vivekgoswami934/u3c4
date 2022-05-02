
let navbar = () => {
    return `<div class="nav1"><h2><a href="index.html">Home</a></h2></div>

    <div class="nav2"><input type="text" id="search_input" placeholder="Search" /></div>`
}


let sidebar = () => {
    return ` <div id="in" onclick="cSearch(this.id)">India</div>
    <div id="ch" onclick="cSearch(this.id)">China</div>
    <div id="us" onclick="cSearch(this.id)">US</div>
    <div id="uk" onclick="cSearch(this.id)">UK</div>
    <div id="nz"  onclick="cSearch(this.id)">NZ</div>`
}



export{ navbar,sidebar }