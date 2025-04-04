import picSquare from '/src/assets/yasin-square.jpg'

// src/components/Introduction.jsx
export default function Introduction() {
  return (
    <section
      className='intro'
      id='home'>
      <h1 className='section__title section__title--intro'>
        Hi, I am <strong>Yasin Cakal</strong>
      </h1>
      <p className='section__subtitle section__subtitle--intro'>
        Full Stack Engineer
      </p>
      <img
        src={picSquare}
        alt='A picture of Jane Smith smiling'
        className='intro__img'
      />
    </section>
  )
}
