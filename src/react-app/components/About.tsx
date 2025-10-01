import { motion } from 'framer-motion';
import { AcademicCapIcon, GlobeAltIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section id="sobre" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
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
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Desenvolvedor full stack com experiência em soluções escaláveis e arquiteturas 
              robustas. Trabalho com tecnologias modernas no front-end e back-end, desde 
              sistemas embarcados até aplicações web complexas, sempre focando em qualidade, 
              performance e manutenibilidade do código.
            </p>
            <p className={`text-base leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Estudante de Engenharia de Software no IBMEC RJ, com certificação Cambridge 
              CPE (C2) em inglês e conhecimento sólido em estruturas de dados, algoritmos 
              e boas práticas de desenvolvimento.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                <AcademicCapIcon className="w-4 h-4 mr-1" />
                IBMEC RJ - Eng. Software
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <GlobeAltIcon className="w-4 h-4 mr-1" />
                Cambridge CPE (C2)
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                <CodeBracketIcon className="w-4 h-4 mr-1" />
                5+ linguagens
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className={`text-center p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Projetos Concluídos</div>
              </div>
              <div className={`text-center p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}>
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Tecnologias</div>
              </div>
            </div>

            {/* Skills Preview */}
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-gray-800' : 'bg-gray-50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Principais Tecnologias
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'React.js', level: 90 },
                  { name: 'TypeScript', level: 85 },
                  { name: 'PostgreSQL', level: 75 },
                  { name: 'Back-end', level: 80 }
                ].map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-2 ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-blue-600 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
