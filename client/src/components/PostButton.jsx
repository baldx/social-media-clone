import FeedForm from "./FeedForm"

export default function PostFooter() {

    const onClick = () => {
        document.querySelector('.hidden-feed-form').style.visibility = 'visible';
    }

    return (
        <>
            <FeedForm></FeedForm>
            <footer>
                <button className="footer-container" onClick={onClick}>
                    +
                </button>
                <div>Create post</div>
            </footer>
        </>
    )
}