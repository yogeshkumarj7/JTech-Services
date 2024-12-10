// const ServiceList = [
//     {
//       id: 'web-development',
//       title: 'Web Development',
//       description: 'Crafting robust, scalable web solutions that drive digital transformation.',
//       icon: '💻',
//       features: [
//         'Responsive Design',
//         'Custom Web Applications',
//         'Frontend & Backend Development',
//         'Performance Optimization'  
//       ],
//       technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL']
//     },
//     {
//       id: 'cloud-solutions',
//       title: 'Cloud Solutions',
//       description: 'Seamless cloud infrastructure and migration strategies.',
//       icon: '☁️',
//       features: [
//         'Cloud Migration',
//         'Infrastructure Design',
//         'Serverless Architecture',
//         'Multi-Cloud Management'
//       ],
//       technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker']
//     },
//     {
//       id: 'ai-consulting',
//       title: 'AI Consulting',
//       description: 'Intelligent solutions powered by cutting-edge artificial intelligence.',
//       icon: '🤖',
//       features: [
//         'Machine Learning Models',
//         'Data Analysis',
//         'AI Strategy',
//         'Predictive Analytics'
//       ],
//       technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
//     },
//     {
//       id: 'cybersecurity',
//       title: 'Cybersecurity',
//       description: 'Comprehensive security strategies to protect your digital assets.',
//       icon: '🔒',
//       features: [
//         'Security Audits',
//         'Threat Detection',
//         'Incident Response',
//         'Compliance Management'
//       ],
//       technologies: ['Penetration Testing', 'Firewall', 'Encryption', 'SIEM']
//     },
//     {
//       id: 'software-architecture',
//       title: 'Software Architecture',
//       description: 'Designing scalable and maintainable software systems.',
//       icon: '🏗️',
//       features: [
//         'Microservices Design',
//         'System Integration',
//         'Architectural Consulting',
//         'Performance Engineering'
//       ],
//       technologies: ['Microservices', 'Design Patterns', 'UML', 'Enterprise Architecture']
//     },
//     {
//       id: 'data-science',
//       title: 'Data Science',
//       description: 'Advanced data analysis and insights generation.',
//       icon: '📊',
//       features: [
//         'Big Data Processing',
//         'Data Visualization',
//         'Statistical Modeling',
//         'Machine Learning Pipelines'
//       ],
//       technologies: ['Apache Spark', 'Pandas', 'Tableau', 'R']
//     },
//     {
//         id: 'computer-vision',
//         title: 'Computer Vision',
//         description: 'Advanced image and video analysis using cutting-edge machine learning techniques.',
//         icon: '👁️',
//         features: [
//           'Object Detection',
//           'Facial Recognition',
//           'Image Segmentation',
//           'Autonomous Vision Systems'
//         ],
//         technologies: ['OpenCV', 'TensorFlow', 'YOLO', 'Keras']
//       },
//       {
//         id: 'high-performance-computing',
//         title: 'High-Performance Computing',
//         description: 'Accelerating complex computational tasks through advanced parallel processing.',
//         icon: '🚀',
//         features: [
//           'Supercomputer Optimization',
//           'Parallel Algorithm Design',
//           'Scientific Computing',
//           'GPU Computing'
//         ],
//         technologies: ['CUDA', 'MPI', 'OpenMP', 'Intel Xeon']
//       },
//     {
//       id: 'devops-engineering',
//       title: 'DevOps Engineering',
//       description: 'Streamlining software development and IT operations.',
//       icon: '⚙️',
//       features: [
//         'Continuous Integration',
//         'Continuous Deployment',
//         'Infrastructure as Code',
//         'Monitoring and Logging'
//       ],
//       technologies: ['Jenkins', 'Ansible', 'Terraform', 'Prometheus']
//     }
//   ];

//   export default ServiceList;
import { 
  Code, 
  Cloud, 
  Brain, 
  ShieldCheck, 
  Layers, 
  BarChart, 
  Eye, 
  Rocket, 
  Settings 
} from 'lucide-react';

const ServiceList = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Crafting robust, scalable web solutions that drive digital transformation.',
    icon: Code,
    features: [
      'Responsive Design',
      'Custom Web Applications',
      'Frontend & Backend Development',
      'Performance Optimization'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL']
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Seamless cloud infrastructure and migration strategies.',
    icon: Cloud,
    features: [
      'Cloud Migration',
      'Infrastructure Design',
      'Serverless Architecture',
      'Multi-Cloud Management'
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Docker']
  },
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    description: 'Intelligent solutions powered by cutting-edge artificial intelligence.',
    icon: Brain,
    features: [
      'Machine Learning Models',
      'Data Analysis',
      'AI Strategy',
      'Predictive Analytics'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Comprehensive security strategies to protect your digital assets.',
    icon: ShieldCheck,
    features: [
      'Security Audits',
      'Threat Detection',
      'Incident Response',
      'Compliance Management'
    ],
    technologies: ['Penetration Testing', 'Firewall', 'Encryption', 'SIEM']
  },
  {
    id: 'software-architecture',
    title: 'Software Architecture',
    description: 'Designing scalable and maintainable software systems.',
    icon: Layers,
    features: [
      'Microservices Design',
      'System Integration',
      'Architectural Consulting',
      'Performance Engineering'
    ],
    technologies: ['Microservices', 'Design Patterns', 'UML', 'Enterprise Architecture']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Advanced data analysis and insights generation.',
    icon: BarChart,
    features: [
      'Big Data Processing',
      'Data Visualization',
      'Statistical Modeling',
      'Machine Learning Pipelines'
    ],
    technologies: ['Apache Spark', 'Pandas', 'Tableau', 'R']
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Advanced image and video analysis using cutting-edge machine learning techniques.',
    icon: Eye,
    features: [
      'Object Detection',
      'Facial Recognition',
      'Image Segmentation',
      'Autonomous Vision Systems'
    ],
    technologies: ['OpenCV', 'TensorFlow', 'YOLO', 'Keras']
  },
  {
    id: 'high-performance-computing',
    title: 'High-Performance Computing',
    description: 'Accelerating complex computational tasks through advanced parallel processing.',
    icon: Rocket,
    features: [
      'Supercomputer Optimization',
      'Parallel Algorithm Design',
      'Scientific Computing',
      'GPU Computing'
    ],
    technologies: ['CUDA', 'MPI', 'OpenMP', 'Intel Xeon']
  },
  {
    id: 'devops-engineering',
    title: 'DevOps Engineering',
    description: 'Streamlining software development and IT operations.',
    icon: Settings,
    features: [
      'Continuous Integration',
      'Continuous Deployment',
      'Infrastructure as Code',
      'Monitoring and Logging'
    ],
    technologies: ['Jenkins', 'Ansible', 'Terraform', 'Prometheus']
  }
];

export default ServiceList;