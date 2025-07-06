import Image from "next/image"

const Centre = () => {
    return (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
            <Image
                src="/nike-logo-center.png"
                width={500}
                height={500}
                alt="logo-center"
            />
        </div>
    )
}

export default Centre