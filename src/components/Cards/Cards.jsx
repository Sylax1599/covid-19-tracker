import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import CountUp from 'react-countup'

import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    
    
    if(!confirmed){
        return 'Loading....'
    }



    return (
        <div className={styles.container}>
            
            <Grid container spacing={6} justify="center">

                <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.infected)} >
                    <CardContent />
                    <Typography color="textSecondary" gutterBottom>Infectados </Typography>
                    <Typography variant="h5"> 
                        <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>

                    <Typography color="textSecondary">
                    Última actualización: {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2" className={styles.fuente}>Numero de casos <strong>activos </strong></Typography>

                </Grid>

                <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent />
                    <Typography color="textSecondary" gutterBottom>Recuperados </Typography>
                    <Typography variant="h5"> 
                        <CountUp 
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>

                    <Typography color="textSecondary">
                       Última actualización: {new Date(lastUpdate).toDateString()}
                    </Typography>                   
                    <Typography variant="body2" className={styles.fuente}>Numero de <strong>recuperados </strong></Typography>

                </Grid>

                <Grid item component={Card} xs={8} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent />
                    <Typography color="textSecondary" gutterBottom>Muertes </Typography>
                    <Typography variant="h5"> 
                        <CountUp 
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>

                    <Typography color="textSecondary" className={styles.fecha}>
                    Última actualización:  {new Date(lastUpdate).toDateString()}
                    </Typography>                    
                    <Typography variant="body2" className={styles.fuente}>Numero de <strong> muertos </strong> </Typography>

                </Grid>

            </Grid>

        </div>
    )
}

export default Cards
