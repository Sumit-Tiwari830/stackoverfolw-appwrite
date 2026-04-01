// 1. Import your custom components
// Note: I am spelling TopContributers exactly as it is in your screenshot to prevent import errors!
import HeroSection from "./components/HeroSection";
import LatestQuestions from "./components/LatestQuestions";
import TopContributers from "./components/TopContributers";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen gap-12 pb-20">

      {/* 2. Render your Hero Section */}
      <HeroSection />

      {/* 3. Create a layout grid for your questions and contributors */}
      <section className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Column: Latest Questions takes up 2/3 of the screen width on large screens */}
          <div className="lg:col-span-2">
            <LatestQuestions />
          </div>

          {/* Sidebar: Top Contributors takes up 1/3 of the screen width */}
          <div className="lg:col-span-1">
            <TopContributers />
          </div>

        </div>
      </section>

    </div>
  );
}