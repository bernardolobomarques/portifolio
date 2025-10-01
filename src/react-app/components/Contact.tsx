import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Credenciais do EmailJS
      const serviceId = 'service_n03lnn7';
      const templateId = 'template_6f9tfyo';
      const publicKey = 'J6-iznvEgOhE6gUL3';

      console.log('🔧 Debug EmailJS:', { serviceId, templateId, publicKey });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      console.log('📧 Enviando email com params:', templateParams);

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('✅ Email enviado com sucesso:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('❌ Erro ao enviar email:', error);
      console.error('Detalhes do erro:', error.text || error.message);
      setSubmitStatus('error');
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'bernardolobomarques@gmail.com',
      href: 'mailto:bernardolobomarques@gmail.com'
    },
    {
      icon: MapPinIcon,
      label: 'GitHub',
      value: 'github.com/bernardolobomarques',
      href: 'https://github.com/bernardolobomarques'
    },
    {
      icon: MapPinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/bernardo-lobo',
      href: 'https://linkedin.com/in/bernardo-lobo'
    },
    {
      icon: PhoneIcon,
      label: 'Telefone',
      value: '(41) 99173-7443',
      href: 'tel:+5541991737443'
    }
  ];

  return (
    <section id="contato" className={`py-20 ${
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
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Disponível para freelances, projetos e oportunidades de estágio. 
            Respondo em até 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Entre em contato
              </h3>
              <p className={`text-base mb-8 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Estou sempre interessado em discussões sobre tecnologia, 
                oportunidades de colaboração e novos projetos desafiadores.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className={`flex items-center p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900 hover:bg-gray-700' 
                      : 'bg-white hover:bg-gray-50'
                  } shadow-md hover:shadow-lg`}
                >
                  <div className="flex-shrink-0">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {item.label}
                    </p>
                    <p className={`text-base ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    } hover:text-blue-600 transition-colors duration-200`}>
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className={`text-lg font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Conecte-se comigo
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/bernardolobomarques"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/bernardo-lobo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-lg shadow-lg ${
              darkMode ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-600 text-white focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                  placeholder="Conte-me sobre seu projeto ou oportunidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none ${
                  isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <PaperAirplaneIcon className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 border border-green-200 text-green-700 rounded-lg text-center"
                >
                  ✅ Mensagem enviada com sucesso! Responderei em breve.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 border border-red-200 text-red-700 rounded-lg text-center"
                >
                  ❌ Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
