import styled from 'styled-components'
import colors from '../../utils/style/colors'
import arrow from '../../assets/arrow_back_ios-24px 2.png'
import { useState } from 'react'

const CollapseContainer = styled.div`
     margin-block: 15px;
     position: relative;
     min-height: 53px;
     display: flex;
`
const Container = styled.div`
     display: grid;
     grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
     transition: grid-template-rows 300ms ease-in-out;
     width: 100%;
`
const CollapseTitle = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     color: ${colors.light};
     background: ${colors.primary};
     border-radius: 10px;
     padding: 10px;
     position: absolute;
     width: 100%;

     & button {
          background: transparent;
          border: none;
     }
     & button:hover {
          cursor: pointer;
     }
     & img {
          vertical-align: middle;
          transform: rotate(${({ isOpen }) => (isOpen ? '-180deg' : null)});
          transition: transform 300ms ease-in-out;
     }
`
const DescriptionContainer = styled.div`
     background-color: ${colors.grey};
     color: ${colors.primary};
     border-bottom: 5px;
     border-radius: 10px;
     overflow: hidden;
     padding-inline: 20px;
     padding-block: ${({ isOpen }) => (isOpen ? '75px 20px' : '0px')};
     transition: padding-block 300ms ease-in-out;
`

function Collapse(props) {
     const { title, children } = props
     const [isOpen, setIsOpen] = useState(false)
     return (
          <CollapseContainer>
               <CollapseTitle isOpen={isOpen}>
                    {title}
                    <button onClick={() => setIsOpen(!isOpen)}>
                         <img src={arrow} alt="flèche" />
                    </button>
               </CollapseTitle>
               <Container isOpen={isOpen}>
                    <DescriptionContainer isOpen={isOpen}>
                         {children}
                    </DescriptionContainer>
               </Container>
          </CollapseContainer>
     )
}
export default Collapse

// import styled from 'styled-components'
// import colors from '../../utils/style/colors'
// import arrow from '../../assets/arrow_back_ios-24px 2.png'
// import { useState } from 'react'

// const CollapseContainer = styled.div`
//      position: relative;
//      margin-block: 15px;
//      display: grid;
//      min-height: 53px;
//      grid-template-rows: ${({ isOpen }) => (isOpen ? '1fr' : '0fr')};
//      transition: grid-template-rows 0.5s ease-in-out;
// `
// const CollapseTitle = styled.div`
//      display: flex;
//      justify-content: space-between;
//      align-items: center;
//      color: ${colors.light};
//      background: ${colors.primary};
//      border-radius: 10px;
//      padding: 10px;
//      position: absolute;
//      width: 100%;

//      & button {
//           background: transparent;
//           border: none;
//      }
//      & button:hover {
//           cursor: pointer;
//      }
//      & img {
//           vertical-align: middle;
//      }
// `
// const DescriptionContainer = styled.div`
//      background-color: ${colors.grey};
//      color: ${colors.primary};
//      border-bottom: 5px;
//      border-radius: 10px;
//      overflow: hidden;
//      padding-inline: 20px;
//      padding-block: ${({ isOpen }) => (isOpen ? '75px 20px' : '0px')};
//      transition: padding-block 0.5s ease-in-out;
// `

// function Collapse(props) {
//      const { title, children } = props
//      const [isOpen, setIsOpen] = useState(false)
//      return (
//           <CollapseContainer isOpen={isOpen}>
//                <CollapseTitle>
//                     {title}
//                     <button onClick={() => setIsOpen(!isOpen)}>
//                          <img src={arrow} alt="flèche" />
//                     </button>
//                </CollapseTitle>
//                <DescriptionContainer isOpen={isOpen}>
//                     {children}
//                </DescriptionContainer>
//           </CollapseContainer>
//      )
// }
// export default Collapse
