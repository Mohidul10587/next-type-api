
import { useState, useEffect } from 'react'



export default function RestCountries(data: any) {
    const [countries, setCountries] = useState([])
  
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((data) => {
          setCountries(data)
        })
    }, [])
  
    return (
  
    <div>
  <h1 style={{textAlign:'center'}}>Travelling Countries</h1>
  
        <div className='divstyle'>
        {
          countries.map((country: any) =>
            <div key={country.ccn3} style={{border:'2px black solid',padding:'10px',borderRadius:'15px',backgroundColor:'aquamarine'}}>
              <h3 key={country.name.common}>Name : {country.name.common}</h3>
              <p>Area : {country.area}</p>
              <img src={country.flags.png} width='200' height='100' alt='hjh'></img>
            </div>
          )
        }
  
      </div >
    </div>
    )
  
  
  }
  