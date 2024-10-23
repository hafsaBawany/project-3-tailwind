import Link from 'next/link';

const HeroSec = () => {
  return (
    <section className="bg-green-100 text-green-900 min-h-[74vh]  flex flex-col justify-center items-center space-y-8">

      <h1 className="text-7xl font-bold mb-4 ">Welcome to Our Creative Space</h1>
      <p className="text-2xl text-center ">
        We provide amazing services. Let’s build something extraordinary together.
      </p>
      <div className="flex space-x-6">
      
        <Link href="/portfolio" passHref>
          <span className="bg-transparent border-2 border-green-900 py-3 px-8 rounded-lg font-semibold hover:bg-green-900 hover:text-white  ">
            View Portfolio
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSec;
