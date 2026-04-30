import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Where Business meets Code</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Our goal is to provide innovative, tailored services that empower businesses to thrive in today's competitive landscape.
          </p>
          <Link 
            href="/projects" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105"
          >
            Explore Featured Projects
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <Image 
                src="/progress.png"
                alt="Weekly Progress"
                width={60}
                height={60}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Weekly Progress</h3>
              <p className="text-gray-600">No guesswork</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
               <Image 
                src="/price.png"
                alt="price"
                width={60}
                height={60}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">One Price</h3>
              <p className="text-gray-600">No surprises</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
               <Image 
                src="/documentation.png"
                alt="documented at every stage"
                width={60}
                height={60}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Documented</h3>
              <p className="text-gray-600">At every stage</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
               <Image 
                src="/design.png"
                alt="OCD Design"
                width={60}
                height={60}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">OCD Design</h3>
              <p className="text-gray-600">Development</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
               <Image 
                src="/build.png"
                alt="Clean, Scalable Builds"
                width={60}
                height={60}
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Clean, Scalable</h3>
              <p className="text-gray-600">Builds</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8">Let's work together to bring your vision to life.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
