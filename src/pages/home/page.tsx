import ActivityCard from "../../components/card/activity";
import ChallengeCard from "../../components/card/challenge";
import CourseCard from "../../components/card/course";
import HeroSection from "../../components/hero/hero";
import GetInTouch from "../../components/section/getInTouch";
import PartnersSection from "../../components/section/partnersSection";
import SimpleSection from "../../components/section/simpleSection";
import Subscribe from "../../components/section/subscribe";

const Home = () => {
    return (
        <>
            <HeroSection />
            <SimpleSection title="Linking Visionaries, Delivering Solutions">
                {
                    [0, 1].map(() => (
                        <ChallengeCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur." img="/media/icons/phones.png" />
                    ))
                }
            </SimpleSection>
            <SimpleSection title="We are bringing you world-class training in collaboration with global partners." description="Lorem ipsum dolor sit amet consectetur. Aliquam nibh nulla in neque at pretium. Massa metus morbi eu nunc">
                {
                    [0, 1, 2].map(() => (
                        <CourseCard title="Course Name" description="Lorem ipsum dolor sit amet consectetur. Mi et consectetur vestibulum nunc. Tincidunt est nec sollicitudin mauris in." img="/media/images/course.jpg" />
                    ))
                }
            </SimpleSection>
            <SimpleSection title="The latest updates">
                {
                    [0, 1, 2, 3].map(() => (
                        <ActivityCard title="Challenge" img="/media/images/course.jpg" />
                    ))
                }
            </SimpleSection>
            <PartnersSection title="We have partnered with..." />
            <Subscribe />
            <GetInTouch />
        </>
    )
}

export default Home;