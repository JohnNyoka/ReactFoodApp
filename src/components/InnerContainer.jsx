 import styles from "./innerContainer.module.css"
 
 function InnerContainer({ children }) {
  return <div className={styles.innContainer}>{children}</div>;
}

export default InnerContainer