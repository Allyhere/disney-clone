export const VideoCard = ({ thumbnail }) => {
    return (
        <div className="video">
            <img
                src={thumbnail.url}
                alt={thumbnail.title}
                className="video__card"
                height="150"
            />
        </div>
    )
}