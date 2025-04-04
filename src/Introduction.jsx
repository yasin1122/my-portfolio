import myPicSquare from './assets/yasin-square.jpg'

export default function Introduction() {
  return (
    <>
      <section
        className='intro'
        id='home'>
        <h1 className='section__title section__title--intro'>
          Hi, I am <strong>Yasin Cakal</strong>
        </h1>
        <p class='section__subtitle section__subtitle--intro'>
          Full Stack Engineer
        </p>
        <img
          src={myPicSquare}
          alt='a picture of Yasin Cakal smiling'
          className='intro__img'></img>
      </section>
    </>
  )
}
