import React, {useState} from 'react';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMail, FiSend, FiCheck, FiArrowRight, FiLoader} = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://getform.io/f/aejlgneb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `SEO Consultation Request from ${formData.name}`,
          _template: 'box'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.2}}
  };

  const itemVariants = {
    hidden: {y: 50, opacity: 0},
    visible: {y: 0, opacity: 1, transition: {type: "spring", stiffness: 100, damping: 12}}
  };

  const benefits = [
    "Free SEO audit & LLM visibility assessment",
    "Custom strategy roadmap for your industry",
    "Competitive analysis across AI platforms",
    "ROI projections & timeline estimates"
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.3}}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Dominate{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Search?
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Let's discuss how AI-driven SEO can transform your search visibility and drive revenue growth across Google, ChatGPT, and the entire ecosystem of intelligent platforms.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.3}}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Get Your Free Consultation</h3>
              <p className="text-slate-300">
                Send me a message and I'll get back to you within 24 hours with insights tailored to your business.
              </p>
            </motion.div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <SafeIcon icon={FiCheck} className="text-green-400 text-lg" />
                  <div>
                    <p className="text-green-400 font-semibold">Message sent successfully!</p>
                    <p className="text-green-300 text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <SafeIcon icon={FiMail} className="text-red-400 text-lg" />
                  <div>
                    <p className="text-red-400 font-semibold">Something went wrong</p>
                    <p className="text-red-300 text-sm">Please try again or email me directly.</p>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your current SEO challenges and goals..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? {scale: 1.02} : {}}
                whileTap={!isSubmitting ? {scale: 0.98} : {}}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <SafeIcon icon={FiLoader} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <SafeIcon icon={FiSend} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Benefits & Direct Contact */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.3}}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{x: -20, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{delay: index * 0.1}}
                    className="flex items-start gap-3"
                  >
                    <SafeIcon icon={FiCheck} className="text-green-400 text-lg mt-1 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiMail} className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Direct Contact</h4>
                  <p className="text-slate-400 text-sm">Prefer email? Reach out directly</p>
                </div>
              </div>
              <motion.a
                href="mailto:howdy@rankandbeyond.com"
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className="group w-full bg-slate-700 hover:bg-slate-600 text-white px-6 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-between"
              >
                <span>howdy@rankandbeyond.com</span>
                <SafeIcon icon={FiArrowRight} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20"
            >
              <h4 className="text-white font-semibold mb-3">💡 Quick Tip</h4>
              <p className="text-slate-300 text-sm">
                Include your current website URL and main competitors in your message. This helps me provide more specific insights during our initial consultation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;