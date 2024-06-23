import avatar1 from "../img/avatar-anisha.png"
import avatar2 from "../img/avatar-ali.png"
import avatar3 from "../img/avatar-richard.png"
const Testimonial = () => {
    return (
        // <!-- Testemonials -->
        <section id="testimonial">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    What's different about Manage?
                </h2>
                {/* <!-- Testemonials --> */}
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:w-1/3">
                        <img src={avatar1} alt="" className="w-16 -mt-14" />
                        <h5 className="text-lg font-bold">
                            Anisha Li
                        </h5>
                        <p className="text-sm darkGrayishBlue">
                            "Manage has supercharged our team's workflow. The ability to maintain visibililty on larger milestone at all times keeps everyone motivated."
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:w-1/3">
                        <img src={avatar2} alt="" className="w-16 -mt-14" />
                        <h5 className="text-lg font-bold">
                            Ali Bravo
                        </h5>
                        <p className="text-sm darkGrayishBlue">
                            "Manage has supercharged our team's workflow. The ability to maintain visibililty on larger milestone at all times keeps everyone motivated."
                        </p>
                    </div>

                    <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGrey md:w-1/3">
                        <img src={avatar3} alt="" className="w-16 -mt-14" />
                        <h5 className="text-lg font-bold">
                            Ricard
                        </h5>
                        <p className="text-sm darkGrayishBlue">
                            "Manage has supercharged our team's workflow. The ability to maintain visibililty on larger milestone at all times keeps everyone motivated."
                        </p>
                    </div>


                </div>
                <div className="my-16">
                    <a href="/" className=" hover:bg-brightRedLight p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline">
                        Get Started
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Testimonial