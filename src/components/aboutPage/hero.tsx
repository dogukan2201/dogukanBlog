import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <motion.section
      ref={heroRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{
        opacity: isHeroInView ? 1 : 0,
        y: isHeroInView ? 0 : 100,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative  px-4 sm:px-6 lg:px-8 bg-white-100 dark:bg-[#0a192f]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/3"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              H.Doğukan Öztürk
            </h1>
            <motion.h2
              className="text-xl mb-6 text-blue-600 dark:text-blue-400"
              animate={{ color: undefined }}
              transition={{ duration: 0.5 }}
            >
              Frontend Developer
            </motion.h2>
            <p className="text-lg mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              Bilgisayar Mühendisliği öğrencisi olarak, modern web teknolojileri
              ve yazılım geliştirme konularında tutkulu bir geliştiriciyim.
              Frontend ve backend teknolojilerinde deneyim sahibiyim ve sürekli
              kendimi geliştirmeye odaklanıyorum. Agile/Scrum metodolojileri ile
              çalışma deneyimine sahibim ve takım çalışmasına yatkınım.
            </p>

            <motion.div
              className="flex gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {[
                {
                  href: "https://github.com/dogukan2201",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/dogukan-ozturk-862497221/",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:husnudogukan@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/50 dark:hover:bg-blue-800 transition-colors relative overflow-hidden group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      window.open(social.href, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <social.icon
                    size={20}
                    className="relative z-10 text-blue-600 dark:text-blue-400"
                  />
                  <motion.div
                    className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 dark:bg-blue-400 dark:opacity-0"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
