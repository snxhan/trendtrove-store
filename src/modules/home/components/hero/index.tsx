import { Github } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center justify-center">
      <div className="text-center p-8 space-y-6">
        <Heading
          level="h1"
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
        >
          TrendTrove
        </Heading>
        <Text className="text-lg md:text-2xl font-light drop-shadow-md">
          Discover the latest styles and trends in one place.
        </Text>
        <a
          href="https://github.com/YOUR-GITHUB-REPO"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" className="flex items-center gap-2 mt-4 bg-white text-purple-600 hover:bg-gray-100">
            <Github className="w-5 h-5" />
            Visit Our GitHub
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
