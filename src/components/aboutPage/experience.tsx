import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  return (
    <motion.section
      className="relative py-16 px-4 sm:px-6 lg:px-8 mt-16 bg-transparent dark:bg-[#0a192f]/90"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          Deneyim
        </h2>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                <Briefcase size={18} className="mr-2" />
                <span>02/2025 - Devam Ediyor</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Frontend Developer
              </h3>
              <p className="text-blue-600 dark:text-blue-400">Arfitect</p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Frontend Web Developer olarak çalışıyorum</li>
                <li>
                  React, React Native ile performans odaklı uygulamalar inşa
                  ediyorum.
                </li>

                <li>
                  Projelerde kullanıcı deneyimini artırmak için yeni
                  teknolojiler öğreniyorum.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                <Briefcase size={18} className="mr-2" />
                <span>07/2024 - 08/2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Software Developer Intern
              </h3>
              <p className="text-blue-600 dark:text-blue-400">
                ALKAN POLAT Software
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>
                  CRM yazılımının frontend ve backend bileşenlerini geliştirdim
                  ve sürdürdüm
                </li>
                <li>
                  Zamanında ve yüksek kaliteli proje teslimi için Scrum ekibiyle
                  işbirliği yaptım
                </li>
                <li>
                  Uygulama performansını ve işlevselliğini artırmak için
                  çalıştım
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                <Briefcase size={18} className="mr-2" />
                <span>11/2024 - 02/2025</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Software Developer
              </h3>
              <p className="text-blue-600 dark:text-blue-400">
                WSOLV (Gönüllü)
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>
                  Performans ve ölçeklenebilirlik için backend servisleri
                  geliştirdim ve API'ları optimize ettim
                </li>
                <li>
                  Yeni özellikler ve iyileştirmeler için Scrum/Agile ekibinde
                  çalıştım
                </li>
                <li>
                  Backend geliştirme, API entegrasyonları ve veritabanı
                  yönetiminde deneyim kazandım
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                <Briefcase size={18} className="mr-2" />
                <span>2022 - 2024</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Web Development Team Member
              </h3>
              <p className="text-blue-600 dark:text-blue-400">
                IEEE EGE University
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>
                  Kullanılabilirlik ve performansa odaklanarak duyarlı web
                  uygulamaları geliştirdim
                </li>
                <li>
                  Teknik ve proje yönetimi becerilerini geliştirmek için
                  Agile/Scrum ortamında çalıştım
                </li>
                <li>
                  Gerçek dünya projeleri aracılığıyla frontend ve backend
                  teknolojilerinde deneyim kazandım
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-4 md:mb-0">
              <div className="flex items-center mb-2 text-gray-700 dark:text-gray-300">
                <GraduationCap size={18} className="mr-2" />
                <span>2021 - Devam Ediyor</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Bilgisayar Mühendisliği
              </h3>
              <p className="text-blue-600 dark:text-blue-400">
                Ege Üniversitesi
              </p>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>
                  Bilgisayar Mühendisliği bölümünde eğitimime devam ediyorum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
