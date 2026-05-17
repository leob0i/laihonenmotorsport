export default function StatsSection() {
  return (
    <section className="py-12 bg-black border-y border-border w-full">
      <div className="flex justify-between items-center w-full max-w-5xl mx-auto px-4">
        <img
          src="/mekonem.png"
          alt="Mekonomen"
          className="h-10 sm:h-14 md:h-20 object-contain opacity-80"
        />
        <img
          src="/geevoima.png"
          alt="Geevoimaa"
          className="h-10 sm:h-14 md:h-20 object-contain opacity-80"
        />
        <img
          src="/mperformance.webp"
          alt="M Performance"
          className="h-10 sm:h-14 md:h-20 object-contain opacity-80"
        />
      </div>
    </section>
  )
}
