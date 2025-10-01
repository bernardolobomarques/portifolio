import { motion } from 'framer-motion';

interface SkillsProps {
  darkMode: boolean;
}

interface SkillItemProps {
  name: string;
  level: number;
  darkMode: boolean;
  delay: number;
}

function SkillItem({ name, level, darkMode, delay }: SkillItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
          {name}
        </span>
        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>
          {level}%
        </span>
      </div>
      <div className={`w-full bg-gray-200 rounded-full h-2 ${
        darkMode ? 'bg-gray-700' : 'bg-gray-200'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay }}
          viewport={{ once: true }}
          className="bg-blue-600 h-2 rounded-full"
        ></motion.div>
      </div>
    </div>
  );
}

export default function Skills({ darkMode }: SkillsProps) {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'blue',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Chakra UI', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'React Native', level: 70 }
      ]
    },
    {
      title: 'Backend',
      color: 'green',
      skills: [
        { name: 'Java', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'Estruturas de Dados', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 75 },
        { name: 'Node.js', level: 70 }
      ]
    },
    {
      title: 'Diferencial',
      color: 'purple',
      skills: [
        { name: 'Inglês (C2)', level: 100 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'Algoritmos', level: 85 },
        { name: 'Sistemas Embarcados', level: 75 },
        { name: 'Assembly', level: 70 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'text-blue-500';
      case 'green':
        return 'text-green-500';
      case 'purple':
        return 'text-purple-500';
      default:
        return 'text-blue-500';
    }
  };

  return (
    <section id="skills" className={`py-20 ${
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
            Tecnologias
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 ${getColorClasses(category.color)}`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    darkMode={darkMode}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className={`text-2xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Outras Competências
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Vite', 'Vercel', 'Tailwind CSS', 'RESTful APIs', 'Responsive Design',
              'Microcontrollers', 'Data Structures', 'Software Architecture',
              'Version Control', 'Agile Methodologies', 'Problem Solving',
              'Technical Documentation'
            ].map((skill) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-300' 
                    : 'bg-gray-200 text-gray-700'
                } hover:scale-105 transition-transform duration-200`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
