/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div>
      <div
        className='w-full min-h-[50vh] relative -z-10'
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/233698/pexels-photo-233698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      ></div>
      <div className='container max-w-[960px] mx-auto w-[95%] text-lg my-8'>
        <h1 className=' font-semibold z-50 text-4xl'>About Us</h1>
        <p className='my-4'>
          Welcome to our SmartLearn, an online learning platform dedicated to
          providing a diverse range of courses to empower learners worldwide.
          Our mission is to offer a dynamic and accessible learning environment
          that fosters personal growth, skill development, and lifelong
          learning.
        </p>

        <p className='my-4'>
          At our SmartLearn, we believe that knowledge knows no boundaries. We
          aim to break down barriers to education by offering a vast catalog of
          courses across various domains. Whether you're a student,
          professional, or lifelong learner, you'll find courses to suit your
          interests, career aspirations, and personal growth goals.
        </p>

        <p className='my-4'>
          What sets our SmartLearn apart is our commitment to quality. We strive
          to curate courses that are created by experienced instructors,
          industry experts, and leading professionals. Each course undergoes a
          thorough review process to ensure its relevance, accuracy, and
          educational value. We believe in empowering our learners with
          reliable, up-to-date content that aligns with the evolving demands of
          the modern world.
        </p>

        <p className='my-4'>
          Our user-centric approach focuses on providing an intuitive and
          engaging learning experience. With user-friendly interfaces,
          interactive features, and comprehensive course materials, we make it
          easy for learners to navigate through their chosen subjects and master
          new skills. Our platform also offers personalized recommendations,
          progress tracking, and community features to enhance your learning
          journey.
        </p>
      </div>
    </div>
  );
};

export default About;
