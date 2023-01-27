import image from '../../images/i-dont-know-compilation-dont-know.gif';
import css from './NotFound.module.css';

const NotFound = () => {
    return(
        <div className={css.box}>
            <img src={image} alt="not found" className={css.img} />
            <p className={css.text}>:( We coudnot find any movie</p>
        </div>
    )
}

export default NotFound;