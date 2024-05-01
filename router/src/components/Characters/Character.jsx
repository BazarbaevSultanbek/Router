import { useLocation } from 'react-router';
import { characters } from '../store';
import { Link } from 'react-router-dom';

function Character() {
    const location = useLocation();
    return (
        <div className='Character'>
            <div className="container">
                <div className="Character-back">
                    <Link to='/characters'><span>Back</span></Link>
                </div>
                <div className="Character-block">
                    <div className="Character-block-inner">
                        {
                            characters.map((item) => {
                                if (location.pathname === `/characters/:${item.id}`) {
                                    return (
                                        <div className='Character-block-inner-item' id={item.id} key={item.id}>
                                            <p>{item.name}</p>
                                            <p>{item.desc}</p>
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Character;
