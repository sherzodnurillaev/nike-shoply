import Banner from "@/components/HomeScreen/Banner"
import Card3D from "@/components/HomeScreen/Card3d"
import Picture from "@/components/HomeScreen/CasualesPicture"
import FirstTitle from "@/components/HomeScreen/FirstTitle"
import SecondTitle from "@/components/HomeScreen/SecondTitle"
import SwiperPage from "@/components/HomeScreen/Swiper"
import VideoPage from "@/components/HomeScreen/VideoPage"

export default function Home() {
  return (
    <main>
		<Banner />
		<div className="max-w-[1300px] !mx-auto">
			<FirstTitle />
			<VideoPage />
			<SecondTitle />
			<SwiperPage />
			<Card3D />
			<Picture />
		</div>
    </main>
  )
}
