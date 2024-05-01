import { Link } from 'react-router-dom';
import { characters } from '../store'


const Characters = () => {

    return (
        <div className="Characters">
            <div className="container">
                <div className="Characters-header">
                    <h3>Characters</h3>
                </div>
                <div className="Characters-back">
                    <Link to={'/'}>Back</Link>
                </div>
                <div className="Characters-block">
                    <div className="Characters-block-inner">
                        <ul>
                            {
                                characters.map((item) => (
                                    <li>
                                        <Link to={`./:${item.id}`} key={item.id} id={item.id}>
                                            <p >{item.name}</p>

                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters;