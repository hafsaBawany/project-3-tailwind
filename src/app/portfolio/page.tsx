import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a brief description of Project One.',
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'This is a brief description of Project Two.',
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 py-10 px-5">
      <h1 className=" bg-green-900 text-white text-4xl py-3  text-center font-bold mb-10">Portfolio</h1>
      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
