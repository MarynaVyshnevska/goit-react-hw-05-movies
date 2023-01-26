
import image from '../../images/i-dont-know-compilation-dont-know.gif';

const NotFound = () => {
    return(
        <div>
            <img src={image} alt="not found" style={{ width: 300 }} />
            <p className="">:( We coudnot find any movie</p>
        </div>
    )
}

export default NotFound;