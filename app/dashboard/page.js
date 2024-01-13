import Card from "../components/dashboard/card/card";
import Chart from "../components/dashboard/chart/chart";
import styles from "../components/dashboard/dashboard.module.css";
import Rightbar from "../components/dashboard/rightbar/rightbar";
import Transaction from "../components/dashboard/transaction/transaction";

const DashboardPage = () =>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <Transaction />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )
}

export default DashboardPage