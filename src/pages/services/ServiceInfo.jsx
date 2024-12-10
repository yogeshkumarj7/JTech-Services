import { useParams, Link } from 'react-router-dom';
import { serviceList } from './services';

const ServiceInfo = () => {
  const { id } = useParams();
  const service = serviceList.find(service => service.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  const IconComponent = service.icon;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-auto p-8">
        <div className="flex items-center mb-6">
          <div className="text-6xl mr-4 text-blue-500 opacity-70">
            <IconComponent size={64} />
          </div>
          <h2 className="text-3xl font-bold">{service.title}</h2>
        </div>
        
        <p className="text-gray-700 mb-6">{service.description}</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="list-disc list-inside">
            {service.features.map((feature, index) => (
              <li key={`${id}-feature-${index}`} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Technologies</h3>
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
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceInfo;