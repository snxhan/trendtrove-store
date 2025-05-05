import { Github } from "@medusajs/icons"
import { Button, Heading, Text } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Heading
          level="h1"
          className="text-4xl md:text-6xl font-bold"
        >
          NUS PROJECT
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
