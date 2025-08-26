import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Code, Rocket } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              BlankCanvas
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="hidden sm:flex">
              v1.0.0
            </Badge>
            <Button variant="outline" size="sm">
              Documentation
            </Button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              ✨ Ready to Deploy
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
              Your Blank Canvas
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              A clean, modern foundation for your next great idea. Built with
              the latest technologies and ready for production.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-base px-8 py-6">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6">
              <Code className="mr-2 h-5 w-5" />
              View Source
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Built with Vite and optimized for speed. Hot reload and instant
                updates.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Stack</h3>
              <p className="text-gray-600">
                React 18, TypeScript, Tailwind CSS, and Express. Everything you
                need.
              </p>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-white/50 backdrop-blur-sm">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Rocket className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deploy Ready</h3>
              <p className="text-gray-600">
                Production-ready setup with Docker support and CI/CD
                integration.
              </p>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="p-12 border-0 shadow-xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to create something amazing?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              This blank canvas is your starting point. Clean, modern, and ready
              for your vision.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-base px-8 py-6"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="h-6 w-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-600">BlankCanvas</span>
          </div>
          <p className="text-gray-500 text-sm">
            Built with ❤️ using modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
