

const SectionCards = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-0 md:gap-8 lg:gap-8">
            <div className="card shadow-2xl">
                <div className="card-body">
                    <img className="w-20" src="https://i.ibb.co/84jtwnR/Graguate.gif" alt="" />
                    <h2 className="card-title">Awesome Teacher</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur non exercitationem!</p>

                </div>
            </div>
            <div className="card shadow-2xl">
                <div className="card-body">
                    <img className="w-20" src="https://i.ibb.co/1RJ11gx/course.gif" alt="" />
                    <h2 className="card-title">Best Courses</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur non exercitationem!</p>

                </div>
            </div>
            <div className="card shadow-2xl">
                <div className="card-body">
                    <img className="w-20" src="https://i.ibb.co/zV1zRtT/certificate.gif" alt="" />
                    <h2 className="card-title">Global Certificate</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur non exercitationem!</p>

                </div>
            </div>
            <div className="card shadow-2xl">
                <div className="card-body">
                    <img className="w-20" src="https://i.ibb.co/6FXSS80/suppoert-team.gif" alt="" />
                    <h2 className="card-title">Student Support Service</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur non exercitationem!</p>

                </div>
            </div>
        </div>
    );
};

export default SectionCards;