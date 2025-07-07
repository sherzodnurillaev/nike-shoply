import Centre from "@/components/CenterLogoPage"
import Banner from "@/components/HomeScreen/Banner"
import FirstTitle from "@/components/HomeScreen/FirstTitle"
import VideoPage from "@/components/HomeScreen/VideoPage"

export default function Home() {
  return (
    <main>
		<Banner />
		<div className="max-w-[1300px] !mx-auto">
			<FirstTitle />
			<VideoPage />
		</div>
      <h1>frfrfr</h1>
    </main>
  )
}
