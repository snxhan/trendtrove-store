import { Github } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/cover.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center p-8">
        <div className="space-y-6 text-white bg-black bg-opacity-40 p-8 rounded-lg">
          <Heading level="h1" className="text-4xl md:text-6xl font-bold">
            TrendTrove
          </Heading>
          <Text className="text-lg md:text-2xl font-light">
            Discover the latest styles and trends in one place.
          </Text>
          <a href="/store">
            <Button variant="primary" className="mt-4">
              Shop Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
