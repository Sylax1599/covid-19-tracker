import React, {useState,useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'

const Chart = ({data:{ confirmed, deaths, recovered},country}) => {

    const [dailyData, setDailyData]= useState([])

    useEffect(() => {
       const fetchAPI= async () =>{
        setDailyData(await fetchDailyData())
       }

       

       fetchAPI()
    }, [])

    const lineChart=(
        dailyData.length !== 0 ?
        (
        <Line 
        data={{
            labels: dailyData.map(({date})=> date),
            datasets: [{
                data: dailyData.map(({confirmed})=> confirmed),
                label: 'Infectados',
                borderColor: 'rgba(255, 72, 0, 0.897)',
                fill: false
            }, {
                data: dailyData.map(({deaths})=> deaths),
                label: 'Muertes',
                borderColor: 'red',
                backgroundColor: 'rgba(255,0,0,0.7)',
                fill: true
            }],

        }}
        />
        )
        :
        null
    )
    const barChar= (
        confirmed ?
        (
            <Bar 
            data={{
                labels: ['Infectados', 'Recuperados', 'Muertes'],
                datasets:[{
                    label: 'Personas',
                    backgroundColor: [
                        'rgba(255, 72, 0, 0.897)',
                        'rgba(0,255,0,0.7)', 
                        'rgba(255,0,0,0.7)'
                    ],
                    data:[confirmed.value, recovered.value,deaths.value]
                }]
            }}
            options={{
                legend:{display: false},
               
            }}
            />
        )
        :
        null
    )

    return (
        <div className={styles.container}>
        {country ? barChar : lineChart}
        </div>
    )
}

export default Chart
