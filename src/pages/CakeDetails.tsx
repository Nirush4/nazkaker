import { useNavigate, useParams } from 'react-router-dom';
import { allCakes } from '../data/products';

export default function CakeDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const cake = allCakes.find((item) => item.id === id);

  if (!cake) {
    return (
      <main className='flex min-h-screen items-center justify-center px-6'>
        <h1 className='text-2xl font-semibold text-gray-700'>
          Cake not found 🍰
        </h1>
      </main>
    );
  }

  const images = cake.images?.length ? cake.images : [cake.image];

  const relatedCakes = allCakes
    .filter((item) => item.id !== cake.id && item.category === cake.category)
    .slice(0, 4);

  return (
    <main className='min-h-screen bg-[#faf8f5]'>
      <section
        className='
          mx-auto
          max-w-6xl
          px-4
          py-10
          sm:px-6
          lg:px-8
        '
      >
        <div
          className='
            grid
            gap-8
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          '
        >
          <div
            className='
              grid
              grid-cols-2
              gap-3
            '
            aria-label='Cake images'
          >
            {images.slice(0, 4).map((image, index) => (
              <div
                key={image}
                className={`
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-sm

                  ${index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}
                `}
              >
                <img
                  src={image}
                  alt={`${cake.name} image ${index + 1}`}
                  className='
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    hover:scale-105
                  '
                />
              </div>
            ))}
          </div>

          <aside
            className='
              rounded-3xl
              border
              border-gray-100
              bg-white
              p-6
              shadow-lg
              sm:p-8
              lg:sticky
              lg:top-10
            '
          >
            {cake.category && (
              <span
                className='
                  inline-flex
                  rounded-full
                  bg-pink-100
                  px-4
                  py-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-widest
                  text-pink-700
                '
              >
                {cake.category}
              </span>
            )}

            <h1
              className='
                mt-5
                font-serif
                text-3xl
                font-bold
                leading-tight
                text-gray-900
                sm:text-4xl
              '
            >
              {cake.name}
            </h1>

            <p
              className='
                mt-4
                text-2xl
                font-bold
                text-pink-600
              '
            >
              {cake.price}
            </p>

            <div className='my-6 h-px bg-gray-200' />

            <p
              className='
                leading-7
                text-gray-600
              '
            >
              {cake.description}
            </p>

            {cake.details && (
              <p
                className='
                  mt-4
                  leading-7
                  text-gray-600
                '
              >
                {cake.details}
              </p>
            )}

            <div
              className='
                mt-6
                grid
                grid-cols-2
                gap-3
              '
            >
              <div
                className='
                  rounded-xl
                  bg-[#faf5ef]
                  p-4
                '
              >
                <p className='text-xs text-gray-500'>Quality</p>

                <p className='mt-1 font-semibold text-gray-900'>Handmade</p>
              </div>

              <div
                className='
                  rounded-xl
                  bg-[#faf5ef]
                  p-4
                '
              >
                <p className='text-xs text-gray-500'>Baking</p>

                <p className='mt-1 font-semibold text-gray-900'>Fresh Daily</p>
              </div>
            </div>

            <button
              type='button'
              onClick={() => navigate('/contact')}
              className='
                mt-8
                w-full
                rounded-full
                bg-pink-600
                py-4
                font-semibold
                text-white
                transition
                hover:bg-pink-700
                focus:outline-none
                focus:ring-4
                focus:ring-pink-200
              '
              aria-label={`Order ${cake.name}`}
            >
              Order Now
            </button>
          </aside>
        </div>
      </section>

      {relatedCakes.length > 0 && (
        <section
          className='
            mx-auto
            max-w-6xl
            px-4
            pb-16
            sm:px-6
            lg:px-8
          '
          aria-labelledby='related-heading'
        >
          <div
            className='
              mb-8
            '
          >
            <h2
              id='related-heading'
              className='
                text-3xl
                font-bold
                text-gray-900
              '
            >
              You may also like
            </h2>

            <p className='mt-2 text-gray-500'>More handmade cakes</p>
          </div>

          <div
            className='
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            '
          >
            {relatedCakes.map((item) => (
              <a
                key={item.id}
                href={`/cakes/${item.id}`}
                className='
                  group
                  rounded-2xl
                  focus:outline-none
                  focus:ring-4
                  focus:ring-pink-200
                '
              >
                <article>
                  <div
                    className='
                      overflow-hidden
                      rounded-2xl
                      bg-white
                    '
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='
                        aspect-square
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-110
                      '
                    />
                  </div>

                  <h3
                    className='
                      mt-4
                      font-semibold
                      text-gray-900
                    '
                  >
                    {item.name}
                  </h3>

                  <p
                    className='
                      mt-2
                      font-bold
                      text-pink-600
                    '
                  >
                    {item.price}
                  </p>
                </article>
              </a>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
