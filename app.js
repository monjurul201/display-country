fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))

    const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')


    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country'

        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>
        <p>${country.capital}</p> 
        <button onclick="displayDetails('${country.name}')">Show Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    });

}

const displayDetails=name=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderCountryInfo(data[0]));


}

const renderCountryInfo=country=>{
    console.log(country);
    const countryDiv=document.getElementById('countryDetails')
    countryDiv.innerHTML=`
    <h1>${country.name}</h1>
    <p>population: ${country.population}</p>
    ${country.flag}
    <img src="${country.flag}">
    `
}

   //  for (let i = 0; i < countries.length; i++) {
    //      const country = countries[i];
    //      const countryDiv =document.createElement('div');
    //      countryDiv.className='country'

    //     const countryInfo=`
    //     <h3 class="country-name">${country.name}</h3>
    //     <p>${country.capital}</p> 
    //     `;
    // countryDiv.innerHTML=countryInfo;
    //     countriesDiv.appendChild(countryDiv);

    //  }




    //  const name =document.createElement('h3');
        //  const capital =document.createElement('p');
        //  name.innerText=country.name;
        //  capital.innerText=country.capital;
        //  countryDiv.appendChild(name);
        //  countryDiv.appendChild(capital)