import styles from "./page.module.css";

export default function WritePage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>글쓰기</h1>
            <form>
                <div className={styles.formGroup}>
                    <label className={styles.label}>제목</label>
                    <input type="text" name="title" className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>내용</label>
                    <textarea name="content" rows={10} className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.button}>등록</button>
            </form>
        </div>
    );
}