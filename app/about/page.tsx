import Mission from "@/components/About/Mission"
import MoveSections from "@/components/About/MoveSection"
import Stand from "@/components/About/Stand"
import Story from "@/components/About/Story"

const About = () => {

    return (
        <div className="max-w-[1300px] !mx-auto !my-[20px] md:!my-[50px] lg:!my-[100px]">
            <MoveSections />
            <Mission />
            <Story />
            <div className="w-[100%] h-[1px] !mt-[30px] lg:!mt-[50px] bg-[#9e9e9e]" />
            <Stand />
        </div>
    )
}

export default About
