import { Github } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 flex items-center justify-center">
      <div className="text-center p-8 space-y-6">
        <Heading
          level="h1"
          className="text-4xl md:text-6xl font-bold"
        >
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
  )
}

export default Hero
