// src/components/Services.jsx
export default function Services() {
  return (
    <section
      className='my-services'
      id='services'>
      <h2 className='section__title section__title--services'>What I do</h2>
      <div className='services'>
        <div className='service'>
          <h3>Design + Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='service'>
          <h3>E-Commerce</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='service'>
          <h3>WordPress</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <a
        href='/#work'
        className='btn'>
        My Work
      </a>
    </section>
  )
}
