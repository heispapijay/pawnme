import styles from './overview.module.scss';

export const Overview = () => {
    return (
        <div className={styles.overview}>
            <div className={styles.wrapper}>
                <div className={styles.container1}>
                    <h2>
                        Overview of what is <span>PawnMe</span>
                    </h2>
                    <p>
                        PawnMe is a fintech platform that revolutionizes asset-based lending by providing a seamless and efficient peer-to-peer marketplace.
                    </p>
                </div>

                <div className={styles.container2}>
                    <p>
                        PawnMe is a fintech platform that revolutionizes asset-based lending by providing a seamless and efficient peer-to-peer marketplace.<br />
                        <br />Leveraging blockchain technology for enhanced transparency, security, and efficiency, we aim to empower individuals to access quick cash by leveraging their valuable possessions as collateral while offering lenders attractive returns on their investments.
                    </p>
                    <br />
                    <button>
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    )
}
