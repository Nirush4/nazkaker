import { reviews } from '../data/products';

export default function ReviewsSection() {
  return (
    <section
      aria-labelledby='reviews-title'
      className='
        py-24
        px-6
        bg-white
      '
    >
      <div className='max-w-7xl mx-auto'>
        <header className='text-center mb-16'>
          <span
            className='
              text-soft-tan
              uppercase
              tracking-[0.3em]
              text-xs
              mb-5
              block
            '
          >
            Kundeopplevelser
          </span>

          <h2
            id='reviews-title'
            className='
              font-serif
              text-4xl
              md:text-5xl
              text-chocolate
              mb-4
            '
          >
            Det sier kundene våre
          </h2>

          <p
            className='
              text-warm-brown
              max-w-xl
              mx-auto
            '
          >
            Ekte øyeblikk og ekte glede fra kunder som har valgt Naz Kaker til
            sine feiringer.
          </p>
        </header>

        <div
          className='
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
          '
        >
          {reviews.map((review) => (
            <blockquote
              key={review.id}
              className='
                bg-beige/20
                rounded-[2rem]
                p-8
                border
                border-beige
                shadow-sm
              '
            >
              <div
                aria-hidden='true'
                className='
                  text-chocolate
                  text-4xl
                  mb-4
                '
              >
                “
              </div>

              <p
                className='
                  text-warm-brown
                  italic
                  leading-relaxed
                  mb-6
                '
              >
                {review.quote}
              </p>

              <footer
                className='
                  text-chocolate
                  font-medium
                  text-sm
                '
              >
                — {review.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
