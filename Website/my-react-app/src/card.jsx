import icon from './assets/Icon.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image"src ={icon} alt="Profile"></img>
            <h2 className='card-title'> Welcome to the Face Transformation musuem exhibit</h2>
        </div>
    );
}

export default Card;