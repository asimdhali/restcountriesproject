fetch('https://restcountries.com/v3.1/all') //etai ekhane api, muloto ei linktake api bole
    .then(res => res.json())
    .then(res => printCountries(res)) 
    


function printCountries(countries){
    //printCountries() ekta function neya hoyece, er vetor countries name ekta Array neya hoyece

    const root = document.querySelector('#root'); //root holo (id), ekhane getElementById diye kora ucit. But querry selcotor diye nite hole age # add korte hobe
    

    let htmlCode = '';

    countries.forEach(country => {
        htmlCode += makeHTML(country);
    });
    root.innerHTML = htmlCode;
}

function makeHTML(country){
    const {name, flags} = country;
    
    const html = `
        <div>
            <img src='${flags.png}'/>
            <h3>${name.common}</h3>
        </div>
    `;

    return html;
}

const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault(); // reload off korte

    const text = e.target.searchbox.value; 
    //ekhane searchbox esece html theke (name="searchbox" ) website e search box e je data search kora hobe seti i text er vetor asbe

    const searchText = text.toLowerCase(); 
    // lower ba upper jekono text e searh korte pare, tai etike lowercase kore neya hosse. search e subidhar jonno

    fetch(`https://restcountries.com/v3.1/name/${searchText}`) 
    //etai holo api, api ta ukkto site hote pawa gece, template string ` ` babohar kora hoyece. ($ baboharer por dynamic data babohar kora jabe) (uporer line er searchText dynamic e use kora hoyece)

    .then(res => res.json())
    .then(res => printCountries(res))
    //uporer printCountries() function ta ekhane deya hoyece

});