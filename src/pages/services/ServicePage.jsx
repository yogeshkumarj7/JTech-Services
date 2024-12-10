import { Link } from 'react-router-dom';
import ServiceList from '../../utils/ServiceList';

const ServicePage = () => {
  return (
    <div className="container mx-auto px-6 md:px-12 py-8 mt-24">
      <h2 className="text-4xl flex justify-center font-extrabold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20">
        {ServiceList.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4 text-blue-500 opacity-70">
                <IconComponent size={48} />
              </div>
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                to={`/services/${service.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicePage;
