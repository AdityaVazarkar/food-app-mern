import React from 'react'
import '../index.css'
const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-caption" style={{ zIndex: "10" }}>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success text-black bg-bg-success" type="submit">Search</button>
                    </form>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden" id='carousel' style={{}}>
                    <div class="carousel-item active relative float-left w-full">
                        <img
                            src="https://source.unsplash.com/random/900×700/?burger"
                            class="block w-100 "
                            alt="Wild Landscape"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://source.unsplash.com/random/900×700/?samosa"
                            class="block w-100 "
                            alt="Camera"
                        />
                    </div>
                    <div class="carousel-item relative float-left w-full">
                        <img
                            src="https://source.unsplash.com/random/900×700/?barbeque"
                            class="block w-100"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel


