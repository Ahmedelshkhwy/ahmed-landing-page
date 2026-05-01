// بيانات الأطباء
const doctorsData = [
  {
    id: 1,
    name: "د. أحمد محمد",
    specialty: "جراحة",
    title: "استشاري الجراحة العامة والمناظير",
    image: "../assets/images/doctors/doctor1.jpg",
    experience: "15 سنة",
    education: "بكالوريوس الطب - جامعة القاهرة",
    about: "متخصص في الجراحة العامة والمناظير، إجراء العمليات الجراحية البسيطة والمعقدة.",
    services: ["استئصال المرارة", "إصلاح الفتق", "جراحة المناظير", "استئصال الزائدة"],
    phone: "+966567796790",
    available: ["الأحد", "الثلاثاء", "الخميس"],
    rating: 4.9
  },
  {
    id: 2,
    name: "د. سارة علي",
    specialty: "أطفال",
    title: "استشاري طب الأطفال",
    image: "../assets/images/doctors/doctor2.jpg",
    experience: "12 سنة",
    education: "بكالوريوس الطب - جامعة عين شمس",
    about: "متخصصة في رعاية الأطفال حديثي الولادة والمراهقين، وتشخيص وعلاج الأمراض儿科.",
    services: ["فحص حديثي الولادة", "التطعيمات", "علاج الأمراض المزمنة", "النمو والتطور"],
    phone: "+966567796790",
    available: ["السبت", "الاثنين", "الأربعاء"],
    rating: 4.8
  },
  {
    id: 3,
    name: "د. محمد حسن",
    specialty: "قلب",
    title: "استشاري أمراض القلب والقسطرة",
    image: "../assets/images/doctors/doctor3.jpg",
    experience: "18 سنة",
    education: "بكالوريوس الطب - جامعة الإسكندرية",
    about: "خبير في تشخيص وعلاج أمراض القلب والأوعية الدموية، وقسطرة القلب العلاجية.",
    services: ["القسطرة التشخيصية", "القسطرة العلاجية", "فحص القلب", "علاج الضغط"],
    phone: "+966567796790",
    available: ["الاثنين", "الأربعاء", "الجمعة"],
    rating: 5.0
  },
  {
    id: 4,
    name: "د. فاطمة يوسف",
    specialty: "نساء",
    title: "استشاري النساء والتوليد",
    image: "../assets/images/doctors/doctor4.jpg",
    experience: "14 سنة",
    education: "بكالوريوس الطب - جامعة القاهرة",
    about: "متخصصة في رعاية الحوامل والولادة، وعلاج مشاكل النساء المختلفة.",
    services: ["متابعة الحمل", "الولادة الطبيعية", "الولادة القيصرية", "علاج العقم"],
    phone: "+966567796790",
    available: ["الأحد", "الثلاثاء", "الخميس"],
    rating: 4.9
  },
  {
    id: 5,
    name: "د. خالد عمر",
    specialty: "عظام",
    title: "استشاري العظام والمفاصل",
    image: "../assets/images/doctors/doctor5.jpg",
    experience: "16 سنة",
    education: "بكالوريوس الطب - جامعة عين شمس",
    about: "متخصص في تشخيص وعلاج إصابات العظام والمفاصل، والعمليات الجراحية.",
    services: ["علاج الكسور", "استبدال المفاصل", "العلاج الطبيعي", "إصابات الملاعب"],
    phone: "+966567796790",
    available: ["السبت", "الاثنين", "الأربعاء"],
    rating: 4.7
  },
  {
    id: 6,
    name: "د. نورة عبدالله",
    specialty: "جلدية",
    title: "استشاري الجلدية والتجميل",
    image: "../assets/images/doctors/doctor6.jpg",
    experience: "10 سنوات",
    education: "بكالوريوس الطب - جامعة الملك سعود",
    about: "متخصصة في علاج الأمراض الجلدية والتجميل بالليزر والتقنيات الحديثة.",
    services: ["علاج حب الشباب", "التجميل بالليزر", "حقن البوتوكس", "علاج التساقط"],
    phone: "+966567796790",
    available: ["الأحد", "الثلاثاء", "الخميس"],
    rating: 4.8
  },
  {
    id: 7,
    name: "د. عمر إبراهيم",
    specialty: "أعصاب",
    title: "استشاري الأعصاب والجهاز العصبي",
    image: "../assets/images/doctors/doctor7.jpg",
    experience: "20 سنة",
    education: "بكالوريوس الطب - جامعة القاهرة",
    about: "خبير في تشخيص وعلاج الأمراض العصبية والجهاز العصبي المركزي والطرفي.",
    services: ["علاج الصداع", "علاج الصرع", "علاج الجلطات", "علاج الشلل"],
    phone: "+966567796790",
    available: ["السبت", "الاثنين", "الأربعاء"],
    rating: 4.9
  },
  {
    id: 8,
    name: "د. منى أحمد",
    specialty: "باطنة",
    title: "استشاري الباطنة والجهاز الهضمي",
    image: "../assets/images/doctors/doctor8.jpg",
    experience: "13 سنة",
    education: "بكالوريوس الطب - جامعة الإسكندرية",
    about: "متخصصة في علاج الأمراض الباطنة وأمراض الجهاز الهضمي والكبد.",
    services: ["منظار القولون", "منظار المعده", "علاج الكبد", "علاج القولون"],
    phone: "+966567796790",
    available: ["الأحد", "الثلاثاء", "الخميس"],
    rating: 4.8
  },
  {
    id: 9,
    name: "د. يوسف سعيد",
    specialty: "عيون",
    title: "استشاري العيون وجراحة المياه الزرقاء",
    image: "../assets/images/doctors/doctor9.jpg",
    experience: "17 سنة",
    education: "بكالوريوس الطب - جامعة عين شمس",
    about: "متخصص في تشخيص وعلاج أمراض العيون وجراحة المياه الزرقاء وإعتام عدسة العين.",
    services: ["جراحة المياه الزرقاء", "جراحة المياه البيضاء", "فحص النظر", "علاج جفاف العين"],
    phone: "+966567796790",
    available: ["السبت", "الاثنين", "الأربعاء"],
    rating: 5.0
  },
  {
    id: 10,
    name: "د. هالة محمود",
    specialty: "أسنان",
    title: "استشاري طب وجراحة الأسنان",
    image: "../assets/images/doctors/doctor10.jpg",
    experience: "11 سنة",
    education: "بكالوريوس طب الأسنان - جامعة القاهرة",
    about: "متخصصة في علاج وجراحة الأسنان وزراعة الأسنان والتجميل السني.",
    services: ["زراعة الأسنان", "تجميل الاسنان", "علاج الجذور", "تقويم الاسنان"],
    phone: "+966567796790",
    available: ["الأحد", "الثلاثاء", "الخميس"],
    rating: 4.9
  },
  {
    id: 11,
    name: "د. رامي فتحي",
    specialty: "أنف",
    title: "استشاري الأنف والأذن والحنجرة",
    image: "../assets/images/doctors/doctor11.jpg",
    experience: "14 سنة",
    education: "بكالوريوس الطب - جامعة الإسكندرية",
    about: "متخصص في تشخيص وعلاج أمراض الأنف والأذن والحنجرة وجراحة الجيوب الأنفية.",
    services: ["منظار الأنف", "جراحة الجيوب", "علاج السمع", "علاج الدوخة"],
    phone: "+966567796790",
    available: ["السبت", "الاثنين", "الأربعاء"],
    rating: 4.7
  },
  {
    id: 12,
    name: "د. نور الدين",
    specialty: "أطفال",
    title: "أخصائي طب الأطفال",
    image: "../assets/images/doctors/doctor12.jpg",
    experience: "8 سنوات",
    education: "بكالوريوس الطب - جامعة طنطا",
    about: "أخصائي في علاج أمراض الأطفال الحادة والمزمنة ومتابعة النمو.",
    services: ["علاج الحمى", "علاج النزلات", "التطعيمات", "التغذية"],
    phone: "+966567796790",
    available: ["الأحد", "الثلاثاء", "الخميس"],
    rating: 4.6
  }
];

// متغيرات عامة
let filteredDoctors = [...doctorsData];
const searchInput = document.getElementById('searchInput');
const specialtyFilter = document.getElementById('specialtyFilter');
const doctorsGrid = document.getElementById('doctorsGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const doctorModal = document.getElementById('doctorModal');
const modalContent = document.getElementById('modalContent');

// دالة عرض الأطباء
function renderDoctors(doctors) {
  doctorsGrid.innerHTML = '';
  resultsCount.textContent = doctors.length;
  
  if (doctors.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  
  doctors.forEach(doctor => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer';
    card.onclick = () => showDoctorDetails(doctor);
    
    card.innerHTML = `
      <div class="relative h-64 bg-gradient-to-br from-[#155d86] to-[#1b8a78] flex items-center justify-center">
        <i class="fas fa-user-md text-8xl text-white/30"></i>
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20"></div>
      </div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="px-3 py-1 bg-[#e8f5e9] text-[#1b8a78] text-sm font-medium rounded-full">${doctor.specialty}</span>
          <div class="flex items-center gap-1">
            <i class="fas fa-star text-yellow-400"></i>
            <span class="font-bold text-gray-700">${doctor.rating}</span>
          </div>
        </div>
        <h3 class="text-xl font-bold text-gray-800 mb-1">${doctor.name}</h3>
        <p class="text-gray-600 text-sm mb-3">${doctor.title}</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <span class="flex items-center gap-1">
            <i class="fas fa-briefcase"></i>
            ${doctor.experience}
          </span>
          <span class="flex items-center gap-1">
            <i class="fas fa-calendar-check"></i>
            ${doctor.available.length} أيام
          </span>
        </div>
        <button class="w-full mt-4 bg-gradient-to-l from-[#155d86] to-[#1b8a78] text-white py-3 rounded-xl font-bold hover:opacity-90 transition">
          <i class="fas fa-calendar-alt ml-2"></i>
          احجز موعد
        </button>
      </div>
    `;
    
    doctorsGrid.appendChild(card);
  });
}

// دالة عرض تفاصيل الطبيب
function showDoctorDetails(doctor) {
  modalContent.innerHTML = `
    <div class="relative h-48 bg-gradient-to-l from-[#155d86] via-[#2473a6] to-[#1b8a78]">
      <button onclick="closeModal()" class="absolute top-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="p-6">
      <div class="flex items-start justify-between mb-4">
        <div>
          <span class="px-3 py-1 bg-[#e8f5e9] text-[#1b8a78] text-sm font-medium rounded-full">${doctor.specialty}</span>
          <h2 class="text-2xl font-black text-gray-800 mt-2">${doctor.name}</h2>
          <p class="text-[#2473a6] font-medium">${doctor.title}</p>
        </div>
        <div class="text-center">
          <div class="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-lg">
            <i class="fas fa-star text-yellow-400"></i>
            <span class="font-bold text-yellow-700">${doctor.rating}</span>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-gray-50 p-4 rounded-xl">
          <i class="fas fa-briefcase text-[#2473a6] mb-2"></i>
          <p class="text-sm text-gray-500">الخبرة</p>
          <p class="font-bold text-gray-800">${doctor.experience}</p>
        </div>
        <div class="bg-gray-50 p-4 rounded-xl">
          <i class="fas fa-graduation-cap text-[#2473a6] mb-2"></i>
          <p class="text-sm text-gray-500">التعليم</p>
          <p class="font-bold text-gray-800 text-sm">${doctor.education}</p>
        </div>
      </div>
      
      <div class="mb-6">
        <h3 class="font-bold text-gray-800 mb-2">عن الطبيب</h3>
        <p class="text-gray-600 leading-relaxed">${doctor.about}</p>
      </div>
      
      <div class="mb-6">
        <h3 class="font-bold text-gray-800 mb-3">الخدمات</h3>
        <div class="flex flex-wrap gap-2">
          ${doctor.services.map(service => `
            <span class="px-3 py-2 bg-[#f0f9ff] text-[#2473a6] text-sm rounded-lg">${service}</span>
          `).join('')}
        </div>
      </div>
      
      <div class="mb-6">
        <h3 class="font-bold text-gray-800 mb-3">الأيام المتاحة</h3>
        <div class="flex flex-wrap gap-2">
          ${doctor.available.map(day => `
            <span class="px-3 py-2 bg-[#e8f5e9] text-[#1b8a78] text-sm rounded-lg">
              <i class="fas fa-calendar-day ml-1"></i>
              ${day}
            </span>
          `).join('')}
        </div>
      </div>
      
      <div class="flex gap-3">
        <a href="https://wa.me/${doctor.phone}" target="_blank" class="flex-1 bg-green-500 text-white py-4 rounded-xl font-bold text-center hover:bg-green-600 transition">
          <i class="fab fa-whatsapp ml-2"></i>
          واتساب
        </a>
        <a href="../forms/appointment-form.html?doctor=${doctor.id}" class="flex-1 bg-[#155d86] text-white py-4 rounded-xl font-bold text-center hover:bg-[#2473a6] transition">
          <i class="fas fa-calendar-alt ml-2"></i>
          حجز موعد
        </a>
      </div>
    </div>
  `;
  
  doctorModal.classList.remove('hidden');
  doctorModal.classList.add('flex');
}

// دالة إغلاق النافذة المنبثقة
function closeModal() {
  doctorModal.classList.add('hidden');
  doctorModal.classList.remove('flex');
}

// دالة البحث والفلترة
function filterDoctors() {
  const searchTerm = searchInput.value.toLowerCase();
  const specialty = specialtyFilter.value;
  
  filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm) || 
                         doctor.title.toLowerCase().includes(searchTerm);
    const matchesSpecialty = !specialty || doctor.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });
  
  renderDoctors(filteredDoctors);
}

// إضافة مستمعي الأحداث
searchInput.addEventListener('input', filterDoctors);
specialtyFilter.addEventListener('change', filterDoctors);

// إغلاق النافذة عند الضغط خارجها
doctorModal.addEventListener('click', (e) => {
  if (e.target === doctorModal) {
    closeModal();
  }
});

// إغلاق النافذة عند الضغط على Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// عرض الأطباء عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  renderDoctors(doctorsData);
});