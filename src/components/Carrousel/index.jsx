import VectorRight from '../../assets/VectorRight.png'
import VectorLeft from '../../assets/VectorLeft.png'
import './Carrousel.scss'
import {
     useMemo,
     useEffect,
     useLayoutEffect,
     useState,
     useRef,
     useCallback,
} from 'react'

function Carrousel(props) {
     const pictures = props.pictures
     const onePic = pictures.length === 1

     const containerRef = useRef()
     const [current, setCurrent] = useState(1)
     const [translateX, setTranslateX] = useState(0)

     const actionHandler = useCallback(
          (mode) => {
               containerRef.current.style.transitionDuration = '400ms'
               if (mode === 'prev') {
                    if (current <= 1) {
                         setTranslateX(0)
                         setCurrent(pictures.length)
                    } else {
                         setTranslateX(
                              containerRef.current.clientWidth * (current - 1),
                         )
                         setCurrent((prev) => --prev)
                    }
               } else if (mode === 'next') {
                    if (current >= pictures.length) {
                         setTranslateX(
                              containerRef.current.clientWidth *
                                   (pictures.length + 1),
                         )
                         setCurrent(1)
                    } else {
                         setTranslateX(
                              containerRef.current.clientWidth * (current + 1),
                         )
                         setCurrent((prev) => ++prev)
                    }
               }
          },
          [current, pictures],
     )

     useEffect(() => {
          const transitionEnd = () => {
               if (current === 1) {
                    containerRef.current.style.transitionDuration = '0ms'
                    setTranslateX(containerRef.current.clientWidth * current)
               }

               if (current === pictures.length) {
                    containerRef.current.style.transitionDuration = '0ms'
                    setTranslateX(
                         containerRef.current.clientWidth * pictures.length,
                    )
               }
          }

          document.addEventListener('transitionend', transitionEnd)

          return () => {
               document.removeEventListener('transitionend', transitionEnd)
          }
     }, [current, pictures])

     const slides = useMemo(() => {
          if (pictures.length > 1) {
               let items = pictures.map((url, index) => (
                    <li key={index}>
                         <img
                              className="CarouselPicture"
                              src={url}
                              alt="logement"
                         />
                         <span className="NumSlide">
                              {index + 1}/{pictures.length}
                         </span>
                    </li>
               ))

               return [
                    <li key={pictures.length + 1}>
                         <img
                              className="CarouselPicture"
                              src={pictures[pictures.length - 1]}
                              alt="logement"
                         />
                         <span className="NumSlide">
                              {pictures.length}/{pictures.length}
                         </span>
                    </li>,
                    ...items,
                    <li key={pictures.length + 2}>
                         <img
                              className="CarouselPicture"
                              src={pictures[0]}
                              alt="logement"
                         />
                         <span className="NumSlide">1/{pictures.length}</span>
                    </li>,
               ]
          }

          setCurrent(0)
          return (
               <li>
                    <img
                         className="CarouselPicture"
                         src={pictures[0]}
                         alt="logement"
                    />
               </li>
          )
     }, [pictures])

     useEffect(() => {
          const handleWindowResize = () => {
               setTranslateX(containerRef.current.clientWidth * current)
          }
          window.addEventListener('resize', handleWindowResize)
          return () => {
               window.removeEventListener('resize', handleWindowResize)
          }
     }, [current])

     //Position first element, this will rendre only ones
     useLayoutEffect(() => {
          setTranslateX(containerRef.current.clientWidth * current)
          // eslint-disable-next-line
     }, [])

     return (
          <div className="Carrousel">
               <ul
                    className="Carrousel_Container"
                    ref={containerRef}
                    style={{ '--translateX': `-${translateX}px` }}
               >
                    {slides}
               </ul>

               {!onePic ? (
                    <div>
                         <button
                              className="Carousel_btn btn_left"
                              onClick={() => actionHandler('prev')}
                         >
                              <img src={VectorLeft} alt="" />
                         </button>
                         <button
                              className="Carousel_btn btn_right"
                              onClick={() => actionHandler('next')}
                         >
                              <img src={VectorRight} alt="" />
                         </button>
                    </div>
               ) : null}
          </div>
     )
}

export default Carrousel
