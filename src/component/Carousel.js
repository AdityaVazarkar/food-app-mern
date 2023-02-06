import React from 'react'
import '../index.css'
const Carousel = () => {
    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{}}>
                    <div className="carousel-inner " id='carousel'>
                        <div className="carousel-caption" style={{zIndex:"10"}}>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success text-white bg-bg-success" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="carousel-item active" style={{}} >
                            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100 h-50  " style={{ filter: "brightness(30%)"} } alt="..." />
                        </div>
                        <div className="carousel-item active" style={{}}>
                            <img src="https://source.unsplash.com/random/900×700/?samosa" className="d-block w-100 h-50 " style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item active" style={{}}>
                            <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100 h-50 " style={{ filter: "brightness(30%)"}} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel
