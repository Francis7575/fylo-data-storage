import styles from './DataComponent.module.css'
import logo from '../assets/logo.svg'
import documentIcon from '../assets/icon-document.svg'
import folderIcon from '../assets/icon-folder.svg'
import uploadIcon from '../assets/icon-upload.svg'
import progressBar from '../assets/progress-bar.svg'

const DataComponent = () => {
    return (
        <main>
            <div className={styles.flexContainer}>
                <div className={styles.firstSectionWrap}>
                    <section className={styles.firstSection}>
                        <div>
                            <img src={logo} alt="Fylo logo" />
                        </div>

                        <div className={styles.iconsContainer}>
                            <div className={styles.iconsBackground}>
                                <img src={documentIcon} alt="Document Icon" />
                            </div>
                            <div className={styles.iconsBackground}>
                                <img src={folderIcon} alt="Folder Icon" />
                            </div>
                            <div className={styles.iconsBackground}>
                                <img src={uploadIcon} alt="upload Icon" />
                            </div>
                        </div>
                    </section>
                </div>

                <div className={styles.secondSectionWrap}>
                    <section className={styles.secondSection}>
                        <p className={styles.paragraph}>
                            You've used <span className={styles.paragraphSpan}>815 GB</span> of your storage
                        </p>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressBar}>
                                <div className={styles.progressCircle}></div>
                            </div>
                        </div>
                        <div className={styles.dataAmountConatiner}>
                            <span className={styles.gb}>0 GB</span>
                            <span className={styles.gb}>1000 GB</span>
                        </div>
                        <div className={styles.remainingGbsContainerWrap}>
                            <div className={styles.remainingGbsContainer}>
                                <span className={styles.remainingQuantity}>185</span>
                                <span className={styles.remainingInfo}>GB LEFT</span>
                                <div className={styles.triangle}></div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default DataComponent