import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Banner = () => {
  return (
    <div className="relative">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"></div>
        <Carousel
            autoplay
            infinteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
        >
            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt="banner" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt="banner" />
            </div>
            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="C:\Users\Geoffy1\Desktop\amazone-clone-nextjs-0\public\images\client3.jpg" />
            </div>
        </Carousel>
    </div>
  )
}
export default Banner