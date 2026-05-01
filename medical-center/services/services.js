// بيانات الخدمات الطبية
const servicesData = {
  categories: [
    { id: 1, name: "الباطنة", icon: "fa-stethoscope", color: "bg-blue-100 text-blue-600", count: 8 },
    { id: 2, name: "الجراحة", icon: "fa-user-md", color: "bg-red-100 text-red-600", count: 6 },
    { id: 3, name: "الأطفال", icon: "fa-baby", color: "bg-green-100 text-green-600", count: 5 },
    { id: 4, name: "النساء", icon: "fa-female", color: "bg-pink-100 text-pink-600", count: 4 },
    { id: 5, name: "العظام", icon: "fa-bone", color: "bg-yellow-100 text-yellow-600", count: 5 },
    { id: 6, name: "الجلدية", icon: "fa-spa", color: "bg-purple-100 text-purple-600", count: 4 },
    { id: 7, name: "القلب", icon: "fa-heart", color: "bg-red-100 text-red-600", count: 4 },
    { id: 8, name: "العيون", icon: "fa-eye", color: "bg-teal-100 text-teal-600", count: 3 }
  ],
  
  services: [
    {
      id: 1,
      title: "فحص الصحة الشاملة",
      category: "الباطنة",
      icon: "fa-clipboard-check",
      description: "فحص شامل للجسم يشمل جميع الفحوصات الأساسية للكشف المبكر عن أي مشاكل صحية.",
      duration: "2-3 ساعات",
      price: "500 ريال",
      features: ["فحص الدم الكامل", "فحص السكر", "فحص الكلى", "فحص الكبد", "صورة أشعة للصدر", "تقرير طبي شامل"],
      featured: true
    },
    {
      id: 2,
      title: "منظار الجهاز الهضمي",
      category: "الباطنة",
      icon: "fa-procedures",
      description: "منظار تشخيصي وعلاجي للمعدة والأمعاء لتشخيص وعلاج مشاكل الجهاز الهضمي.",
      duration: "30-60 دقيقة",
      price: "800 ريال",
      features: ["منظار المعده", "منظار القولون", "أخذ عينات", "إزالة سلائل", "تخدير كامل", "تقرير مفصل"],
      featured: true
    },
    {
      id: 3,
      title: "جراحة المناظير",
      category: "الجراحة",
      icon: "fa-microscope",
      description: "عمليات جراحية متقدمة باستخدام المناظير لتقليل الألم وتسريع الشفاء.",
      duration: "1-2 ساعة",
      price: "varies",
      features: ["استئصال المرارة", "إصلاح الفتق", "استئصال الزائدة", "جراحة السمنة", "ندوب صغيرة", "شفاء سريع"],
      featured: true
    },
    {
      id: 4,
      title: "القسطرة القلبية",
      category: "القلب",
      icon: "fa-heartbeat",
      description: "تشخيص وعلاج أمراض القلب والأوعية الدموية باستخدام القسطرة.",
      duration: "1-3 ساعات",
      price: "varies",
      features: ["قسطرة تشخيصية", "توسيع الشرايين", "تركيب دعامات", "قياس الضغط", "فحص كهربائية القلب", "رعاية ما بعد"],
      featured: true
    },
    {
      id: 5,
      title: "تجميل بالليزر",
      category: "الجلدية",
      icon: "fa-wand-magic-sparkles",
      description: "خدمات التجميل باستخدام أحدث تقنيات الليزر الآمن والفعال.",
      duration: "30-90 دقيقة",
      price: "varies",
      features: ["إزالة الشعر", "تجميل الوجه", "علاج ندوب", "توحيد اللون", "شد الجلد", "نتائج فورية"],
      featured: true
    },
    {
      id: 6,
      title: "استبدال المفاصل",
      category: "العظام",
      icon: "fa-joint",
      description: "جراحة استبدال المفاصل التالفة بمفاصل صناعية حديثة.",
      duration: "2-3 ساعات",
      price: "varies",
      features: ["استبدال مفصل الورك", "استبدال مفصل الركبة", "تقنيات حديثة", "تأهيل متكامل", "رعاية ما بعد", "ضمان طويل"],
      featured: true
    },
    {
      id: 7,
      title: "متابعة الحمل",
      category: "النساء",
      icon: "fa-baby-carriage",
      description: "رعاية شاملة للحامل من بداية الحمل حتى الولادة.",
      duration: "موعد كل شهر",
      price: "200 ريال/visit",
      features: ["فحوصات دورية", "أشعة صوتية", "قياس السكر", "تغذية الحامل", "تحضير للولادة", "دعم نفسي"],
      featured: false
    },
    {
      id: 8,
      title: "طب الأطفال",
      category: "الأطفال",
      icon: "fa-hospital-user",
      description: "رعاية طبية متخصصة للأطفال من حديثي الولادة حتى المراهقة.",
      duration: "30 دقيقة",
      price: "150 ريال",
      features: ["فحوصات دورية", "تطعيمات", "علاج الأمراض", "متابعة النمو", "نصائح تغذية", "طوارئ الأطفال"],
      featured: false
    },
    {
      id: 9,
      title: "علاج العمى",
      category: "العيون",
      icon: "fa-glasses",
      description: "تشخيص وعلاج جميع مشاكل العين بما فيها الجراحات.",
      duration: "45 دقيقة",
      price: "varies",
      features: ["فحص النظر", "جراحة المياه البيضاء", "جراحة المياه الزرقاء", "علاج جفاف العين", "علاج القرنية", "عدسات"],
      featured: false
    },
    {
      id: 10,
      title: "علاج الأمراض المزمنة",
      category: "الباطنة",
      icon: "fa-pills",
      description: "متابعة وعلاج الأمراض المزمنة مثل السكر والضغط والقلب.",
      duration: "30 دقيقة",
      price: "100 ريال",
      features: ["علاج السكر", "علاج الضغط", "علاج الكلى", "علاج الربو", "تغذية متخصصة", "رعاية مستمرة"],
      featured: false
    },
    {
      id: 11,
      title: "العلاج الطبيعي",
      category: "العظام",
      icon: "fa-person-walking-with-cane",
      description: "خدمات العلاج الطبيعي والتأهيل بعد الإصابات والجراحات.",
      duration: "45 دقيقة",
      price: "150 ريال",
      features: ["تمارين علاجية", "تدليك", "موجات صوتية", "كهرباء علاجية", "تمارين إطالة", "تأهيل رياضي"],
      featured: false
    },
    {
      id: 12,
      title: "طب الأسنان",
      category: "الأسنان",
      icon: "fa-tooth",
      description: "خدمات طب وجراحة الأسنان المتكاملة.",
      duration: "30-60 دقيقة",
      price: "varies",
      features: ["تنظيف", "حشو", "خلع", "زراعة", "تجميل", "تقويم"],
      featured: false
    }
  ]
};

// متغيرات عامة
const categoriesGrid = document.getElementById('categoriesGrid');
const featuredServices = document.getElementById('featuredServices');
const allServices = document.getElementById('allServices');
const serviceModal = document.getElementById('serviceModal');
const modalContent = document.getElementById('modalContent');

// دالة عرض التصنيفات
function renderCategories() {
  categoriesGrid.innerHTML = servicesData.categories.map(cat => `
    <button onclick="filterByCategory('${cat.name}')" 
      class="flex flex-col items-center justify-center p-6 rounded-2xl ${cat.color} hover:scale-105 transition-transform cursor-pointer">
      <i class="fas ${cat.icon} text-3xl mb-3"></i>
      <span class="font-bold">${cat.name}</span>
      <span class="text-sm opacity-70">${cat.count} خدمة</span>
    </button>
  `).join('');
}

// دالة عرض الخدمات المميزة
function renderFeaturedServices() {
  const featured = servicesData.services.filter(s => s.featured);
  featuredServices.innerHTML = featured.map(service => createServiceCard(service)).join('');
}

// دالة عرض جميع الخدمات
function renderAllServices() {
  allServices.innerHTML = servicesData.services.map(service => createServiceCard(service)).join('');
}

// دالة إنشاء بطاقة خدمة
function createServiceCard(service) {
  return `
    <div onclick="showServiceDetails(${service.id})" 
      class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer">
      <div class="flex items-start justify-between mb-4">
        <div class="w-14 h-14 bg-gradient-to-br from-[#155d86] to-[#1b8a78] rounded-xl flex items-center justify-center">
          <i class="fas ${service.icon} text-2xl text-white"></i>
        </div>
        ${service.featured ? '<span class="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm font-medium rounded-full">مميز</span>' : ''}
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-2">${service.title}</h3>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">${service.description}</p>
      <div class="flex items-center justify-between text-sm">
        <span class="text-[#2473a6] font-medium">
          <i class="fas fa-clock ml-1"></i>
          ${service.duration}
        </span>
        <span class="text-[#1b8a78] font-bold">${service.price}</span>
      </div>
    </div>
  `;
}

// دالة عرض تفاصيل الخدمة
function showServiceDetails(serviceId) {
  const service = servicesData.services.find(s => s.id === serviceId);
  if (!service) return;
  
  modalContent.innerHTML = `
    <div class="relative h-32 bg-gradient-to-l from-[#155d86] via-[#2473a6] to-[#1b8a78]">
      <button onclick="closeModal()" class="absolute top-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="p-6">
      <div class="flex items-start justify-between mb-4">
        <div>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">${service.category}</span>
          <h2 class="text-2xl font-black text-gray-800 mt-2">${service.title}</h2>
        </div>
        <div class="w-14 h-14 bg-gradient-to-br from-[#155d86] to-[#1b8a78] rounded-xl flex items-center justify-center">
          <i class="fas ${service.icon} text-2xl text-white"></i>
        </div>
      </div>
      
      <p class="text-gray-600 mb-6">${service.description}</p>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 p-4 rounded-xl">
          <i class="fas fa-clock text-[#2473a6] mb-2"></i>
          <p class="text-sm text-gray-500">المدة</p>
          <p class="font-bold text-gray-800">${service.duration}</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl">
          <i class="fas fa-tag text-[#2473a6] mb-2"></i>
          <p class="text-sm text-gray-500">السعر</p>
          <p class="font-bold text-gray-800">${service.price}</p>
        </div>
      </div>
      
      <div class="mb-6">
        <h3 class="font-bold text-gray-800 mb-3">ما يشمله الخدمة</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          ${service.features.map(feature => `
            <div class="flex items-center gap-2 text-gray-600">
              <i class="fas fa-check-circle text-[#1b8a78]"></i>
              <span>${feature}</span>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="flex gap-3">
        <a href="https://wa.me/966567796790?text=أريد حجز خدمة: ${service.title}" target="_blank" class="flex-1 bg-green-500 text-white py-4 rounded-xl font-bold text-center hover:bg-green-600 transition">
          <i class="fab fa-whatsapp ml-2"></i>
          حجز عبر واتساب
        </a>
        <a href="../forms/appointment-form.html?service=${service.id}" class="flex-1 bg-[#155d86] text-white py-4 rounded-xl font-bold text-center hover:bg-[#2473a6] transition">
          <i class="fas fa-calendar-alt ml-2"></i>
          حجز إلكتروني
        </a>
      </div>
    </div>
  `;
  
  serviceModal.classList.remove('hidden');
  serviceModal.classList.add('flex');
}

// دالة إغلاق النافذة
function closeModal() {
  serviceModal.classList.add('hidden');
  serviceModal.classList.remove('flex');
}

// دالة الفلترة حسب التصنيف
function filterByCategory(category) {
  const filtered = servicesData.services.filter(s => s.category === category);
  allServices.innerHTML = filtered.map(service => createServiceCard(service)).join('');
  
  // التمرير للقسم
  document.getElementById('allServices').scrollIntoView({ behavior: 'smooth' });
}

// إغلاق النافذة عند الضغط خارجها
serviceModal.addEventListener('click', (e) => {
  if (e.target === serviceModal) {
    closeModal();
  }
});

// إغلاق عند الضغط على Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// تحميل البيانات عند الصفحة
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeaturedServices();
  renderAllServices();
});