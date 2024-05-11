// Write your code here.
import './index.css'

const CardList = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <div className={className}>
      <h1 className="head2">{title}</h1>
      <p className="para2">{description}</p>
      <div className="imgContainer">
        <img src={imgUrl} />
      </div>
    </div>
  )
}

export default CardList
