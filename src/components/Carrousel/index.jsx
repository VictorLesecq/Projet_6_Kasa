import styled from 'styled-components'
import VectorRight from '../../assets/VectorRight.png'
import VectorLeft from '../../assets/VectorLeft.png'
import {
     useMemo,
     useEffect,
     useLayoutEffect,
     useState,
     useRef,
     useCallback,
} from 'react'

const CarrouselContainer = styled.div`
     width: 100%;
     height: 60vh;
     position: relative;
     background-color: #feee;
     margin-top: 50px;
     border-radius: 25px;
     overflow: hidden;
`
const CarouselButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background:transparent;
    border:none;
    cursor: pointer;
    z-index: 10;
    ${({ position }) =>
         position === 'right' ? 'right : 25px' : 'left : 25px'};

    &:hover{
        ${({ position }) =>
             position === 'right' ? 'right : 20px' : 'left : 20px'};
    }
}`

const Container = styled.ul`
     width: 100%;
     height: 100%;
     display: flex;
     list-style: none;
     transform: translateX(${({ translate }) => `-${translate}px`});
     & li {
          height: 100%;
          width: 100%;
          flex-shrink: 0;
     }
`
const CarouselPicture = styled.img`
     width: 100%;
     height: 100%;
     object-fit: cover;
`

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
                         <CarouselPicture src={url} alt="logement" />
                    </li>
               ))

               return [
                    <li key={pictures.length + 1}>
                         <CarouselPicture
                              src={pictures[pictures.length - 1]}
                              alt="logement"
                         />
                    </li>,
                    ...items,
                    <li key={pictures.length + 2}>
                         <CarouselPicture src={pictures[0]} alt="logement" />
                    </li>,
               ]
          }

          setCurrent(0)
          return (
               <li>
                    <CarouselPicture src={pictures[0]} alt="logement" />
               </li>
          )
     }, [pictures])

     //Position first element, this will rendre only ones
     useLayoutEffect(() => {
          setTranslateX(containerRef.current.clientWidth * current)
          // eslint-disable-next-line
     }, [])

     return (
          <CarrouselContainer>
               <Container ref={containerRef} translate={translateX}>
                    {slides}
               </Container>

               {!onePic ? (
                    <div>
                         <CarouselButton onClick={() => actionHandler('prev')}>
                              <img src={VectorLeft} alt="" />
                         </CarouselButton>
                         <CarouselButton
                              position="right"
                              onClick={() => actionHandler('next')}
                         >
                              <img src={VectorRight} alt="" />
                         </CarouselButton>
                    </div>
               ) : null}
          </CarrouselContainer>
     )
}

export default Carrousel
