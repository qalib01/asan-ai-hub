import ActivityCard from "../../components/card/activity";
import ChallengeCard from "../../components/card/challenge";
import CourseCard from "../../components/card/course";
import TeamCard from "../../components/card/team";
import HeroSection from "../../components/hero/hero";
import GetInTouch from "../../components/section/getInTouch";
import PartnersSection from "../../components/section/partnersSection";
import SimpleSection from "../../components/section/simpleSection";
import Subscribe from "../../components/section/subscribe";
import { experts } from "../../utils/contants/expert";

const Home = () => {
    return (
        <div className="grid gap-16">
            <HeroSection />
            <SimpleSection title="Linking Visionaries, Delivering Solutions" description="Step up to solve real challenges and win from prize fund">
                {
                    [0, 1].map((idx) => (
                        <ChallengeCard
                            key={idx}
                            title="Challenge Name"
                            description="Lorem ipsum dolor sit amet consectetur."
                            img="/media/icons/phones.png"
                        />
                    ))
                }
            </SimpleSection>
            <SimpleSection title="Meet Our Experts" description="Lorem ipsum dolor sit amet consectetur. Purus tincidunt sapien vitae libero malesuada.">
                {
                    experts.map((expert, idx) => (
                        <TeamCard expert={expert} idx={idx} />
                    ))
                }
            </SimpleSection>
            <SimpleSection title="We are bringing you world-class training in collaboration with global partners." description="Lorem ipsum dolor sit amet consectetur. Aliquam nibh nulla in neque at pretium. Massa metus morbi eu nunc">
                {
                    [0, 1, 2].map((idx) => (
                        <CourseCard
                            key={idx}
                            title="Course Name"
                            description="Lorem ipsum dolor sit amet consectetur. Mi et consectetur vestibulum nunc. Tincidunt est nec sollicitudin mauris in."
                            img="/media/images/course.jpg"
                        />
                    ))
                }
            </SimpleSection>
            <SimpleSection title="The latest updates">
                {
                    [0, 1, 2, 3].map((idx) => (
                        <ActivityCard
                            key={idx}
                            title="Challenge"
                            img="/media/images/course.jpg"
                        />
                    ))
                }
            </SimpleSection>
            <PartnersSection
                title="We have partnered with..."
            />
            <Subscribe />
            <GetInTouch />
        </div>
    )
}

export default Home;