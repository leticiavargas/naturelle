import './CarouselInstitucional.css'

const CarouselInstitucional = ({ title='', data=[] }) => {

  return (
    <div className='container'>
      {title && <h1>{title}</h1>}
       
        <div className="carousel">
          {data && data.map((image) => (
            <div className='image-container'>
              <img src={image.url} alt={image.url} />
              {image.title &&
              <a href={"http://localhost:3000/" + image.goTo}>
                <button className='button-cover'>
                  {image.title}
                </button>

              </a>
              }
            </div>
          ))}
        </div>
    </div>
  )
}

export default CarouselInstitucional;