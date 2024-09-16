import styles from './hiw.module.scss';
import hand from '../../assets/hand.png';
import wallet from '../../assets/wallet.png';

interface StepComponentProps {
    title: string;
    description: string;
}

export const StepComponent: React.FC<StepComponentProps> = ({ title, description }) => {
    return (
        <div className={styles.step}>
            <div className={styles.stptitle}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#0C4B54" />
                    </svg>
                </div>
                <p>{title}</p>
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export const HIW = () => {
    return (
        <div className={styles.HIW}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <h2>How It Works On <span>PawnMe - Borrower</span></h2>
                        <p>A simple and secure process to pawn and lend, designed to make it easy for you to achieve your financial goals.</p>
                        <img src={hand} alt="hand with phone" />
                    </div>
                    <div>
                        <StepComponent
                            title="Create an Account"
                            description="Create a PawnMe account by filling out the registration form and verifying your email address and phone number."
                        />
                        <StepComponent
                            title="Pawn an Asset"
                            description="Pawn an asset by uploading photos and providing a detailed description, and setting a minimum price and pawn duration."
                        />
                        <StepComponent
                            title="Receive a Loan Offer"
                            description="Receive a loan offer from PawnMe's algorithm, based on the value of your pawned asset."
                        />
                        <StepComponent
                            title="Repay the Loan"
                            description="Repay the loan by the due date to avoid late fees and penalties, and have your asset returned to you."
                        />

                        <div className={styles.step}>
                            <div className={styles.stptitle}>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="#0C4B54" />
                                </svg></div>
                                <p>Get Your Asset Back</p>
                            </div>
                            <p className={styles.Ldescription}>
                            Get your asset back if the borrower repays the loan, or receive the proceeds from the sale of the asset if the borrower defaults.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        <h2>How It Works On <span>PawnMe - Lender</span></h2>
                        <p>A simple and secure process to pawn and lend, designed to make it easy for you to achieve your financial goals.</p>
                        <img src={wallet} alt="hand with phone" />
                    </div>
                    <div>
                        <StepComponent
                            title="Create an Account"
                            description="Create a PawnMe account by filling out the registration form and verifying your email address and phone number."
                        />
                        <StepComponent
                            title="Browse Available Loans"
                            description="Browse through the list of available loans on PawnMe, including the loan amount, interest rate, and loan term."
                        />
                        <StepComponent
                            title="Choose a Loan to Fund"
                            description="Choose a loan to fund by reviewing the borrower's creditworthiness, loan terms, and interest rate."
                        />
                        <StepComponent
                            title="Fund the Loan"
                            description="Fund the loan by transferring the loan amount to PawnMe's escrow account."
                        />

                        <div className={styles.step}>
                            <div className={styles.stptitle}>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="12" fill="#0C4B54" />
                                </svg></div>
                                <p>Get Repaid</p>
                            </div>
                            <p className={styles.Ldescription}>
                            Get repaid the principal amount of your investment, plus interest, once the borrower has fully repaid the loan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
