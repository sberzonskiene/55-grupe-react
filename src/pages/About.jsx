import dogy from '../img/dogy.jpg';

export function About() {
    return (
       <main>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 col-xxl-3">
                       <img src={dogy} alt='img' />
                       <h1>Cookie clicker</h1>
                    </div>
                </div>
            </section>  
        </main>
    );
}