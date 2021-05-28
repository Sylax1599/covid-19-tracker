import React, {useState, useEffect} from 'react'
// import Cards from './components/Cards/Cards';
// import CountryPicker from './components/CountryPicker/CountryPicker';
// import Chart from './components/Chart/Chart'

import {Cards, CountryPicker, Chart} from './components'
import styles from './App.module.css'
import {fetchData} from './api'
import {Typography} from '@material-ui/core'

import Logo from './images/logo.png'

function  App (){
  // constructor(props){
  //   super(props)
  // this.state={
  //   data: {},
  //   country: ''
  //   }
  // }

  const [data, setData] = useState([])
  const [country, setCountry]= useState('')

  useEffect(async (country) => {
    const fetchedData= await fetchData(country)

    

    setData(fetchedData)
  }, [])
  
  // async componentDidMount (){
  //   const fetchedData=  await fetchData()
    
  //   this.setState({data: fetchedData})
  // }

  const handleCountryChange = async (country) =>{
    const fetchedData= await fetchData(country)
    //fetch the data
    //set the state
    setData(fetchedData)
    setCountry(country)
  }

  
  return (
    <div className={styles.container}>
    <img src={Logo} className={styles.image} alt="COVID-19"/>
    
    {country ?
    (
      <Typography className={styles.titulo} color="textSecondary" variant="h3" gutterBottom>Número de casos en: {country} </Typography>
    )
    :
    null
    }
  
      
    <Cards data={data}/>
    <CountryPicker  handleCountryChange={handleCountryChange}/>
    <Chart data={data} country={country}/>
    
    </div>
  );
  }


export default App;
