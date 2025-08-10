import BannerLoader from "@/components/ui/BannerLoader"
import Card3D from "@/components/HomeScreen/Card3d"
import FirstTitle from "@/components/HomeScreen/FirstTitle"
import PictureLoader from "@/components/ui/PictureLoader"
import SecondTitle from "@/components/HomeScreen/SecondTitle"
import SwiperLoader from "@/components/ui/SwiperLoader"
import VideoPage from "@/components/HomeScreen/VideoPage"

export default function Home() {
  return (
    <main>
		<BannerLoader />
		<div className="max-w-[1300px] !mx-auto">
			<FirstTitle />
			<VideoPage />
			<SecondTitle />
			<SwiperLoader />
			<Card3D />
			{/* <PictureLoader /> */}
		</div>
    </main>
  )
}
