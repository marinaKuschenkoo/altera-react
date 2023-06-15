import Header from "./Header"
import {Link} from "react-router-dom";
function Cases(){
    return(
        <>
    <div className="page">
        <main className="main">
        <Header/>
    <section className="types">
        <Link to='/profile-cases' className="type__item">
            <figcaption className="type__item_text">
                <p>ВИЗУАЛ ПРОФИЛЯ</p>
            </figcaption>		
        </Link>
        <Link to='/header-cases' className="type__item">
            <figcaption className="type__item_text">
                <p>ШАПКА ПРОФИЛЯ</p>
            </figcaption>		
        </Link>
    </section>
    </main>
    </div>
    </>
    )
}
export default Cases