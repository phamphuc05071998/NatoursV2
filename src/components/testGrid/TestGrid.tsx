import React from 'react'
import styles from "./TestGrid.module.scss"
const TestGrid: React.FC = () => {
  return (
    <section className={styles.gridTest}>
      
        <div className={styles.row}>
            <div className={styles.col1of3}>
              Col 1 of 3  
            </div>
            <div className={styles.col1of3}>
              Col 1 of 3 
            </div>
            <div className={styles.col1of3}>
              Col 1 of 3  
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col1of3}>
              Col 1 of 3  
            </div>
        
            <div className={styles.col2of3}>
              Col 2 of 3  
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col1of4}>
              Col 1 of 4  
            </div>
            <div className={styles.col1of4}>
              Col 1 of 4 
            </div>
            <div className={styles.col1of4}>
              Col 1 of 4  
            </div>
            <div className={styles.col1of4}>
              Col 1 of 4  
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.col1of4}>
              Col 1 of 4  
            </div>
            <div className={styles.col1of4}>
              Col 1 of 4 
            </div>
            <div className={styles.col2of4}>
              Col 2 of 4  
            </div>
          
        </div>
        <div className={styles.row}>
            <div className={styles.col1of4}>
              Col 1 of 4  
            </div>
            <div className={styles.col3of4}>
              Col 3 of 4 
            </div>
          
          
        </div>
    </section>
  )
}

export default TestGrid