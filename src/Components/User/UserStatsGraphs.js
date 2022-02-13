import React from 'react'
import styles from './UserStatsGraphs.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';


const UserStatsGraphs = ({data}) => {

const [graph, setGraph] = React.useState([]);
const [total, setTotal] = React.useState(0);

React.useEffect(() => {

    const graphdata = data.map(item => {
        return{
            x: item.title,
            y: Number(item.acessos),
        }
    })

    setTotal(data.map(({acessos}) => Number(acessos)).reduce((a, b) => a + b));
    setGraph(graphdata);
}, [data])

  return (
    <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Acessos: {total}</p>
        </div>
        <div className={styles.graph}>
            <VictoryPie 
            data={graph} 
            innerRadius={50} 
            padding={{top:20, botttom:20, left:80, right:80}} 
            style={{
                data:{
                    fillopacity:.9, 
                    stroke: '#fff', 
                    strokeWidth: 2
                    }, 
                labels: {
                    fontSize: 14, 
                    fill: '#333'
                }
                }}/>
        </div>
        <div>
            <VictoryChart>
                <VictoryBar alignment = "start" data={graph}></VictoryBar>
            </VictoryChart>
        </div>
    </section>
  )
}

export default UserStatsGraphs