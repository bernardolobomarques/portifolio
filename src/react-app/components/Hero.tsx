import { motion } from 'framer-motion';
import { ArrowDownIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${
          darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
        } rounded-full mix-blend-multiply filter blur-xl animate-pulse`}></div>
        <div className={`absolute top-1/3 right-1/4 w-72 h-72 ${
          darkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'
        } rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 ${
          darkMode ? 'bg-indigo-500/10' : 'bg-indigo-500/5'
        } rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000`}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Bernardo Lobo Marques"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20`}></div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Bernardo Lobo Marques
            </h1>
            <p className={`text-xl md:text-2xl font-medium mb-2 ${
              darkMode ? 'text-blue-300' : 'text-blue-600'
            }`}>
              Desenvolvedor Full Stack • React + PostgreSQL
            </p>
            <p className={`text-lg ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Estudante de Engenharia de Software no IBMEC RJ • 4º período
            </p>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Disponível para freelances e estágios
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProjects}
              className="flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Projetos
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" />
            </button>
            <button
              onClick={scrollToContact}
              className={`flex items-center px-8 py-3 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                darkMode
                  ? 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900'
                  : 'bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}
            >
              Falar Comigo
              <EnvelopeIcon className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDownIcon className={`h-6 w-6 ${
              darkMode ? 'text-white/70' : 'text-gray-600'
            }`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
