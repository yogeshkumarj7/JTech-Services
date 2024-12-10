import { useParams, Link } from 'react-router-dom';
import ServiceList from '../../utils/ServiceList';

const ServiceDetailPage = () => {
  const { id } = useParams();
  const service = ServiceList.find(service => service.id === id);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold">Service Not Found</h1>
        <Link
          to="/services"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const IconComponent = service.icon;

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center mb-6">
          <div className="text-6xl mr-4 text-blue-500 opacity-70">
            <IconComponent size={64} />
          </div>
          <h1 className="text-3xl font-bold">{service.title}</h1>
        </div>

        <p className="text-gray-700 text-lg mb-6">{service.description}</p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {service.features.map((feature, index) => (
              <li key={`${id}-feature-${index}`}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, index) => (
              <span
                key={`${id}-tech-${index}`}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Link
          to="/services"
          className="mt-8 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Back to All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetailPage;