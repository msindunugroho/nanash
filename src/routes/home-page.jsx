import HomePageCarousel from "../components/home-page-carousel/home-page-carousel";

const HomePage = () => {
    return(
        <section className="home-page">
            <div className="home-page_container page-layout md:pt-10">
                <HomePageCarousel/>
            </div>
        </section>
    )
}

export default HomePage;