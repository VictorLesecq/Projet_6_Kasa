import './Card.scss'

function Card(props) {
     const { cover, title } = props.location
     return (
          <div className="Card_Container">
               <img src={cover} alt="logement" />
               <h2>{title}</h2>
          </div>
     )
}

export default Card
