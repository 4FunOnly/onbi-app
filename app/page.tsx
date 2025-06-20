import Image from "next/image";
import Head from "next/head";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
        <>
    <Head>
      <title>ONBI - Onboarding BNI</title>
    </Head>

    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-300 via-white to-cyan-200">
      <div className="max-w-6xl w-full px-4 sm:px-6 py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          {/* Logo kiri atas */}
          <div className="fixed top-4 left-4 z-50">
            <div className="flex items-center gap-2">
              <Image
                src="/onbi-logokecil.png"
                alt="Logo ONBI"
                width={40}
                height={40}
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Chatbot onboarding untuk pegawai baru BNI
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            ONBI adalah chatbot onboarding berbasis teknologi NLP yang dikembangkan untuk membantu
            pegawai baru BNI dalam mengenal lingkungan kerja secara lebih mudah dan interaktif.
          </p>
          <a
            href="/chat"
            className="inline-flex items-center px-5 py-3 bg-orange-400 text-white font-semibold rounded-md shadow hover:bg-orange-500 transition"
          >
            Mulai Chat <ArrowRight className="ml-2" />
          </a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/logo-onbi.png"
            alt="Logo ONBI"
            width={250}
            height={250}
            className="max-w-[200px] sm:max-w-[250px] w-full h-auto"
          />
        </div>
        
      </div>
    </main>

    </>
  );
}
