import dogy from '../img/dogy.jpg';
import { CookieClicker } from '../components/cookie-clicker/CookieClicker';

export function About() {
    return (
       <main>
            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='cookieClicker'>
                            <img src={dogy} alt='img' />
                            <CookieClicker />
                       </div>
                    </div>
                </div>
            </section>  
        </main>
    );
}