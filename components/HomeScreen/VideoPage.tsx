

const VideoPage = () => {

    return (
        <video
            autoPlay
            muted
            loop
            playsInline
            className="relative w-full h-auto object-cover z-10 !my-[50px] xl:rounded-lg"
        >
            <source src="/video/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default VideoPage
