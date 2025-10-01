import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: 'Gavea Telecom',
      description: 'Plataforma web para empresa de telecomunicações com interface moderna e responsiva.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Chakra UI', 'Vite'],
      liveUrl: 'https://bernardolobomarques.github.io/gavea',
      codeUrl: 'https://github.com/bernardolobomarques/gavea'
    },
    {
      title: 'Inbetweenfriends',
      description: 'Aplicação full-stack TypeScript em produção com deploy automatizado.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      technologies: ['TypeScript', 'React', 'Node.js', 'Vercel'],
      liveUrl: 'https://inbetweenfriends.vercel.app',
      codeUrl: 'https://github.com/bernardolobomarques/inbetweenfriends'
    },
    {
      title: 'Assembly Memory Project',
      description: 'Programação de baixo nível em Assembly para microcontroladores ATMEGA2560.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop',
      technologies: ['Assembly', 'ATMEGA2560', 'Sistemas Embarcados'],
      liveUrl: null,
      codeUrl: 'https://github.com/bernardolobomarques/assembly-memory-project'
    },
    {
      title: 'Mãos que Valen',
      description: 'Website institucional para ONG desenvolvido com TypeScript e design responsivo.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop',
      technologies: ['TypeScript', 'React', 'Design Responsivo'],
      liveUrl: null,
      codeUrl: 'https://github.com/bernardolobomarques/maosquevalen'
    }
  ];

  return (
    <section id="projetos" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg shadow-lg overflow-hidden ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs rounded-full ${
                        tech === 'Assembly' || tech === 'ATMEGA2560' || tech === 'Sistemas Embarcados'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                      Demo Live
                      <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      darkMode
                        ? 'border border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {project.liveUrl ? 'Código' : 'Ver Código'}
                    <CodeBracketIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
