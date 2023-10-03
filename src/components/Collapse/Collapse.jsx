import arrow from '../../assets/arrow_back_ios-24px 2.png'
import { useState } from 'react'
import './Collapse.scss'

function Collapse(props) {
     const { title, children } = props
     const [isOpen, setIsOpen] = useState(false)
     return (
          <div
               className={
                    isOpen
                         ? 'Collapse_Container Collapse_Container--Open'
                         : 'Collapse_Container'
               }
          >
               <div className="Collapse_Title">
                    {title}
                    <button onClick={() => setIsOpen(!isOpen)}>
                         <img src={arrow} alt="flèche" />
                    </button>
               </div>
               <div className="Collapse_Content--Container">
                    <div className="Collapse_Content--Content">{children}</div>
               </div>
          </div>
     )
}
export default Collapse
