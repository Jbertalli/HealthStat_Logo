import styles from '../styles/Icons.module.css';

const Icons = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <center style={{ transform: 'scale(0.3) translate(0px, -1000px)', position: 'fixed' }}>
                <div className={styles.boxed}>
                    <div style={{ fontSize: '550px', color: '#f2f2f2', fontFamily: 'serif', transform: 'translate(190px, 70px)', position: 'absolute' }}>H</div>
                    <div style={{ fontSize: '620px', color: '#f2f2f2', fontFamily: 'serif', transform: 'translate(650px, 470px)', position: 'absolute' }}>S</div> 
                    <div style={{ transform: 'translate(6px, 600px) rotate(-45deg)' }} className={styles.strike} />
                    {/* <div className={styles.back} /> */}
                </div> 
            </center>
        </div>
    );
}

export default Icons;
