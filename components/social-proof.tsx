import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechFlow',
    content: 'Switching to this platform cut our deployment time by 80%. The automation features alone saved us thousands of hours.',
    rating: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, StartupHub',
    content: 'The best investment we made this year. Our team productivity skyrocketed and the ROI was immediate.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    role: 'VP Engineering, DataCore',
    content: 'Security was our top concern and they exceeded every expectation. SOC 2 compliance out of the box was crucial for us.',
    rating: 5,
  },
];

const logos = ['Acme Corp', 'TechStart', 'InnovateLab', 'FutureScale', 'CloudNine', 'DataFlow'];

export default function SocialProof() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of companies already transforming their workflows
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 text-slate-400 font-semibold hover:text-slate-600 transition-colors"
            >
              {logo}
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Quote className="w-10 h-10 text-blue-600 mb-4" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div>
                <div className="font-semibold text-slate-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate-600">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">10K+</div>
              <div className="text-sm text-slate-600">Active Teams</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-1">99.99%</div>
              <div className="text-sm text-slate-600">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
