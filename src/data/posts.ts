import { Post } from '../types';

export const allPosts: Post[] = [
  {
    id: 'getting-started-with-react',
    title: 'React\'e Başlangıç: Yeni Başlayanlar İçin Kapsamlı Bir Rehber',
    date: '12 Mayıs 2023',
    readTime: 8,
    category: 'React',
    tags: ['React', 'JavaScript', 'Web Geliştirme', 'Frontend'],
    excerpt: 'İlk React uygulamanızı sıfırdan nasıl oluşturacağınızı öğrenin. Bu rehber, React geliştirmeye başlamak için bilmeniz gereken tüm temel konuları kapsar.',
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'typescript-best-practices',
    title: 'Büyük Ölçekli Uygulamalar İçin TypeScript En İyi Uygulamaları',
    date: '5 Haziran 2023',
    readTime: 12,
    category: 'TypeScript',
    tags: ['TypeScript', 'JavaScript', 'En İyi Uygulamalar', 'Mimari'],
    excerpt: 'Büyük kod tabanlarını yönetmeye yardımcı olan temel TypeScript desenlerini ve uygulamalarını keşfedin. Daha iyi kod kalitesi için TypeScript\'in tip sistemini nasıl kullanacağınızı öğrenin.',
    coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'tailwind-vs-css',
    title: 'Tailwind CSS vs. Geleneksel CSS: Hangisini Seçmelisiniz?',
    date: '18 Temmuz 2023',
    readTime: 6,
    category: 'CSS',
    tags: ['CSS', 'Tailwind', 'Web Tasarımı', 'Frontend'],
    excerpt: 'Tailwind gibi utility-first CSS framework\'leri ile geleneksel CSS yaklaşımlarının detaylı bir karşılaştırması. Her metodolojinin artı ve eksilerini öğrenin.',
    coverImage: 'https://images.pexels.com/photos/1181292/pexels-photo-1181292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'react-performance-optimization',
    title: 'Bilmeniz Gereken 10 React Performans Optimizasyon Tekniği',
    date: '7 Ağustos 2023',
    readTime: 10,
    category: 'React',
    tags: ['React', 'Performans', 'Optimizasyon', 'JavaScript'],
    excerpt: 'React uygulamanızın performansını iyileştirmek için pratik teknikler. Uygulamanızı daha hızlı hale getirmek için memoization, kod bölme ve diğer stratejileri öğrenin.',
    coverImage: 'https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'building-rest-apis',
    title: 'Node.js ve Express ile RESTful API\'ler Oluşturma',
    date: '15 Eylül 2023',
    readTime: 14,
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API', 'REST', 'Backend'],
    excerpt: 'Node.js ve Express kullanarak sağlam RESTful API\'ler oluşturma konusunda kapsamlı bir rehber. Rota tasarımı, middleware ve hata yönetimi için en iyi uygulamaları öğrenin.',
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'graphql-vs-rest',
    title: 'GraphQL vs REST: Doğru API Mimarisi Seçimi',
    date: '2 Ekim 2023',
    readTime: 9,
    category: 'API',
    tags: ['GraphQL', 'REST', 'API', 'Mimari', 'Backend'],
    excerpt: 'GraphQL ve REST API mimarilerini güçlü ve zayıf yönlerini anlamak için karşılaştırın. Projeleriniz için her yaklaşımı ne zaman kullanacağınızı öğrenin.',
    coverImage: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'docker-for-developers',
    title: 'Web Geliştiriciler İçin Docker: Pratik Bir Giriş',
    date: '11 Kasım 2023',
    readTime: 11,
    category: 'DevOps',
    tags: ['Docker', 'DevOps', 'Konteynerler', 'Web Geliştirme'],
    excerpt: 'Geliştirme iş akışınızı düzenlemek için Docker\'ı nasıl kullanacağınızı öğrenin. Bu rehber Docker temellerini, geliştirme ortamları oluşturmayı ve uygulamaları dağıtmayı kapsar.',
    coverImage: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'css-grid-layout',
    title: 'CSS Grid Layout\'u Uzmanlaşma: İleri Teknikler',
    date: '5 Aralık 2023',
    readTime: 7,
    category: 'CSS',
    tags: ['CSS', 'Grid', 'Layout', 'Web Tasarımı', 'Frontend'],
    excerpt: 'Karmaşık düzenler oluşturmak için gelişmiş CSS Grid tekniklerini keşfedin. Temiz ve bakımı kolay kodlarla duyarlı, asimetrik tasarımlar oluşturmayı öğrenin.',
    coverImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'typescript-generics',
    title: 'TypeScript Generics\'i Anlama: Pratik Örnekler',
    date: '17 Ocak 2024',
    readTime: 8,
    category: 'TypeScript',
    tags: ['TypeScript', 'Generics', 'JavaScript', 'Web Geliştirme'],
    excerpt: 'Pratik, gerçek dünya örnekleriyle TypeScript generics\'e derinlemesine bir bakış. Generic tiplerle daha esnek ve yeniden kullanılabilir kod yazmayı öğrenin.',
    coverImage: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'react-hooks-advanced',
    title: 'İleri Seviye React Hooks: Temellerin Ötesinde',
    date: '8 Şubat 2024',
    readTime: 10,
    category: 'React',
    tags: ['React', 'Hooks', 'JavaScript', 'İleri Seviye', 'Frontend'],
    excerpt: 'React Hooks bilginizi bir üst seviyeye taşıyın. Karmaşık durum yönetimi sorunlarını çözmek için gelişmiş desenleri ve özel hook tekniklerini öğrenin.',
    coverImage: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'nextjs-vs-gatsby',
    title: 'Next.js vs Gatsby: Doğru React Framework Seçimi',
    date: '21 Mart 2024',
    readTime: 9,
    category: 'React',
    tags: ['React', 'Next.js', 'Gatsby', 'Framework', 'SSG', 'SSR'],
    excerpt: 'Farklı proje türleri için hangi React framework\'ün en iyi olduğunu belirlemek için Next.js ve Gatsby\'yi karşılaştırın. Temel farklılıkları ve ödünleşimleri anlayın.',
    coverImage: 'https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'web-accessibility',
    title: 'Web Erişilebilirliği: Kapsayıcı Deneyimler Oluşturma',
    date: '5 Nisan 2024',
    readTime: 12,
    category: 'Erişilebilirlik',
    tags: ['Erişilebilirlik', 'A11y', 'Web Geliştirme', 'Kapsayıcı Tasarım'],
    excerpt: 'Herkes için çalışan erişilebilir web uygulamaları oluşturmayı öğrenin. Projelerinizde WCAG yönergelerini uygulamak için pratik teknikleri keşfedin.',
    coverImage: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const featuredPosts = [
  allPosts[9], // İleri Seviye React Hooks
  allPosts[1], // TypeScript En İyi Uygulamaları
  allPosts[6]  // Web Geliştiriciler İçin Docker
];

export const recentPosts = [
  allPosts[11], // Web Erişilebilirliği
  allPosts[10], // Next.js vs Gatsby
  allPosts[9],  // İleri Seviye React Hooks
  allPosts[8],  // TypeScript Generics
  allPosts[7],  // CSS Grid Layout
  allPosts[6]   // Docker for Web Developers
];