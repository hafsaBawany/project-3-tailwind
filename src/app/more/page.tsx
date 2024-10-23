const Services = () => {
  const servicesList = [
    { title: 'Web Development', description: 'Building responsive and high-performing websites.' },
    { title: 'Mobile App Development', description: 'Creating user-friendly mobile applications.' },
    { title: 'Digital Marketing', description: 'Promoting brands through various digital channels.' },
  ];

  return (
    <div className="min-h-screen bg-green-100 py-10 px-5">
      <h1 className="text-5xl text-center bg-green-900 py-3 text-white font-bold mb-10">Our Services</h1>
      <div className="max-w-2xl mx-auto">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-5 mb-5">
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
