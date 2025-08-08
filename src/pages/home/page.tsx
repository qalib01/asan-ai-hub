import ChallengeCard from "../../components/card/Challenge";
import CourseCard from "../../components/card/Course";
import HeroSection from "../../components/hero/Hero";
import SimpleSection from "../../components/section/simpleSection";

const Home = () => {
    return (
        <>
            <HeroSection />
            <SimpleSection title='Challenges'>
                <ChallengeCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur." img="/media/icons/phones.png" />
                <ChallengeCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur." img="/media/icons/clients.png" />
            </SimpleSection>
            {/* <SimpleSection title='Experts' description="Lorem ipsum dolor sit amet consectetur. Purus tincidunt sapien vitae libero malesuada.Lorem ipsum dolor sit amet consectetur. Purus tincidunt sapien vitae libero malesuada.">
                <ChallengeCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur." img="/media/icons/phones.png" />
                <ChallengeCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur." img="/media/icons/clients.png" />
            </SimpleSection> */}
            <SimpleSection title='Courses' description="Lorem ipsum dolor sit amet consectetur. Aliquam nibh nulla in neque at pretium. Massa metus morbi eu nunc">
                <CourseCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur. Mi et consectetur vestibulum nunc. Tincidunt est nec sollicitudin mauris in." img="/media/images/course.jpg" />
                <CourseCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur. Mi et consectetur vestibulum nunc. Tincidunt est nec sollicitudin mauris in." img="/media/images/course.jpg" />
                <CourseCard title="Challenge Name" description="Lorem ipsum dolor sit amet consectetur. Mi et consectetur vestibulum nunc. Tincidunt est nec sollicitudin mauris in." img="/media/images/course.jpg" />
            </SimpleSection>
        </>
    )
}

export default Home;