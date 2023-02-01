import StuffCard from "../components/stuffCard/StuffCard"

function Home() {

    //id wird später verwendet um auf den richtigen Endpoint der Route zu kommen
    //bei StuffCard
    return (
        <main className="Home">
            <div className="furniture">
                <h1>MY FURNITURE</h1>
            </div>

            <section>
                <StuffCard
                    title="BIG STUFF"
                    image="https://unsplash.it/300/300?1"
                    id="large"
                />
                <StuffCard
                    title="MIDDLE STUFF"
                    image="https://unsplash.it/300/300?2"
                    id="medium"
                />
                <StuffCard
                    title="SMALL STUFF"
                    image="https://unsplash.it/300/300?3"
                    id="small"
                />
            </section>
        </main>
    )
}

export default Home
