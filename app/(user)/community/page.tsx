import styles from "./page.module.css";

const posts = [
    { id: 1, title: "오디션 정보 공유합니다", author: "김배우"},
    { id: 2, title: "연습실 추천 해주세요", author: "이연기"},
    { id: 3, title: "발성 연습 방법 질문 있어요", author: "박연습"},
];

export default function CommunityPage() {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>배우의 모든것 - 커뮤니티</h1>
                <ul className={styles.postLists}>
                    {posts.map((post) => (
                        <li key={post.id} className={styles.listItem}>
                            {post.title} - {post.author}
                        </li>
                    ))}
                </ul>
        </div>
    );
}