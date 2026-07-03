const marqueeText =
  'Custom kaker • Bestill nå • 2 cookies uten fyll 429 kr • 2 cookies med fyll 499 kr';

export default function HeroMarquee() {
  return (
    <div className='relative w-full overflow-hidden py-3 border-y border-pink-300 bg-pink-200 shadow-sm'>
      <div className='absolute inset-0 bg-pink-300/20 blur-xl pointer-events-none' />

      <div className='absolute inset-0 opacity-20 bg-white pointer-events-none' />

      <div className='marquee-track flex whitespace-nowrap relative z-10'>
        {[0, 1].map((i) => (
          <span
            key={i}
            className='marquee-content text-base md:text-lg font-semibold tracking-wide text-rose-950 px-12'
            aria-hidden={i === 1}
          >
            <span className='bg-white/70 backdrop-blur-md px-4 py-1 rounded-full shadow-sm border border-pink-300'>
              <span className='mr-2'>🎂</span>
              {marqueeText}
              <span className='ml-2'>🍪</span>
            </span>

            <span className='mx-10 text-rose-800 font-bold'>✦</span>

            <span className='bg-white/70 backdrop-blur-md px-4 py-1 rounded-full shadow-sm border border-pink-300'>
              <span className='mr-2'>🎂</span>
              {marqueeText}
              <span className='ml-2'>🍪</span>
            </span>

            <span className='mx-10 text-rose-800 font-bold'>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
