import Layout from "@/component/layout/Layout";
import Button from "@/component/ui/Button";

// This is a dynamic route matching `/project/[id]`
export default function ProjectPage({ params }) {
  const { id } = params;

  return (
    <Layout>
      <div className="min-h-screen py-24 px-6 max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-12">
          <Button href="/" variant="ghost" className="text-zinc-400 hover:text-white">
            ← Back to Home
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-16">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-white">{id}</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            This is a dynamically routed project detail page. You can customize this section with specific project information, images, and links based on the project ID.
          </p>
        </div>

        {/* Project Content Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-8">
            <div className="w-full h-[400px] bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center shadow-xl">
              <span className="text-zinc-600 font-medium">Project Image Gallery Placeholder</span>
            </div>
            
            <h2 className="text-3xl font-semibold mt-12 mb-4">Overview</h2>
            <p className="text-zinc-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Sidebar / Metadata */}
          <div className="space-y-8">
            <div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
              <h3 className="text-lg font-semibold mb-4 text-white">Project Details</h3>
              <ul className="space-y-4">
                <li>
                  <span className="block text-sm text-zinc-500 mb-1">Role</span>
                  <span className="text-zinc-200">Lead Developer</span>
                </li>
                <li>
                  <span className="block text-sm text-zinc-500 mb-1">Timeline</span>
                  <span className="text-zinc-200">3 Months</span>
                </li>
                <li>
                  <span className="block text-sm text-zinc-500 mb-1">Technologies</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full border border-zinc-700">Next.js</span>
                    <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full border border-zinc-700">Tailwind</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Button href="#" variant="primary" className="w-full justify-center">Visit Live Site</Button>
              <Button href="#" variant="secondary" className="w-full justify-center">View Source Code</Button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
