// بيانات النصائح الصحية
const tipsData = [
  {
    id: 1,
    title: "اشرب 8 أكواب من الماء يومياً",
    category: "تغذية",
    icon: "fa-water",
    summary: "الماء أساسي لصحة الجسم وحيوية البشرة",
    content: "الماء هو سر الصحة والحياة. يساعد على:\n\n• تنظيف الجسم من السموم\n• الحفاظ على نضارة البشرة\n• تحسين الهضم\n• زيادة الطاقة\n• تحسين التركيز\n\nاشرب الماء على معدة فارغة وقبل كل وجبة بنصف ساعة.",
    tips: ["ابدأ يومك بكوب ماء دافئ مع ليمون", "احمل زجونة ماء معك دائماً", "اشرب قبل الشعور بالعطش"],
    importance: "عالية"
  },
  {
    id: 2,
    title: "ممارسة الرياضة بانتظام",
    category: "رياضة",
    icon: "fa-dumbbell",
    summary: "30 دقيقةexercise يوميًا تحسن الصحة",
    content: "الرياضة هي أفضل استثمار لصحةك:\n\n• تقوية القلب والأوعية\n• حرق السعرات الزائدة\n• تحسين المزاج\n• تقوية العظام\n• زيادة الطاقة\n\nالمشي السريع، السباحة، أو ركوب الدراجة من أفضل الرياضيات.",
    tips: ["ابدأ بخطوات صغيرة", "اختر وقتاً منتظماً", "اجعلها عادة يومية"],
    importance: "عالية"
  },
  {
    id: 3,
    title: "النوم الكافي 7-8 ساعات",
    category: "نوم",
    icon: "fa-bed",
    summary: "النوم الجيد أساس للصحة النفسية والجسدية",
    content: "النوم هو وقت إصلاح الجسم:\n\n• تجديد خلايا الدماغ\n• تقوية الذاكرة\n• إفراز هرمونات النمو\n• استعادة الطاقة\n• تحسين المناعة\n\nالنوم قبل منتصف الليل أفضل من النوم المتأخر.",
    tips: ["حدد موعد نوم واستيقاظ", "تجنب الشاشات قبل النوم", "اجعل غرفة النوم مظلمة"],
    importance: "عالية"
  },
  {
    id: 4,
    title: "تناول الخضار والفواكه",
    category: "تغذية",
    icon: "fa-carrot",
    summary: "5 حصص يوميًا للوقاية من الأمراض",
    content: "الخضار والفواكه كنز صحي:\n\n• غنية بالفيتامينات\n• مصادر للألياف\n• مضادات أكسدة\n• تقوية المناعة\n• الوقاية من السرطان\n\nكل لون مختلف فوائد مختلفة.",
    tips: ["أضف سلطة لكل وجبة", "تناول فاكهة كوجبة خفيفة", "ابتعد عن العصائر المحلاة"],
    importance: "عالية"
  },
  {
    id: 5,
    title: "غسل اليدين بانتظام",
    category: "وقاية",
    icon: "fa-hands-bubbles",
    summary: "الوقاية تبدأ من النظافة",
    content: "النظافة الشخصية خط الدفاع الأول:\n\n• غسل اليدين 20 ثانية\n• قبل وبعد الأكل\n• بعد استخدام المرحاض\n• بعد العطس أو السعال\n• عند لمس أسطح عامة\n\nاستخدم الصابون والماء الدافئ.",
    tips: ["احمل معك معقم يدين", "لا تلمس وجهك", "قص أظافرك بانتظام"],
    importance: "عالية"
  },
  {
    id: 6,
    title: "الابتعاد عن التدخين",
    category: "وقاية",
    icon: "fa-smoking-ban",
    summary: "التدokeh هو السبب الرئيسي لأمراض الرئة",
    content: "التدokeh يدمر الصحة:\n\n• سرطان الرئة\n• أمراض القلب\n• مشاكل التنفس\n• تلف الجلد\n• ضعف المناعة\n\nالإقلاع عن التدokeh يحسن الصحة فوراً.",
    tips: ["اطلب مساعدة متخصص", "استخدم بدائل النيكوتين", "تجنب أماكن التدokeh"],
    importance: "عالية"
  },
  {
    id: 7,
    title: "فحص دوري للضغط والسكر",
    category: "فحوصات",
    icon: "fa-stethoscope",
    summary: "الوقاية خير من العلاج",
    content: "الفحوصات الدورية تنقذ الحياة:\n\n• الكشف المبكر عن الأمراض\n• مراقبة الحالة الصحية\n• تعديل العلاج مبكراً\n• تجنب المضاعفات\n\nافحص ضغط الدم والسكر شهرياً.",
    tips: ["حدد موعد للفحص الدوري", "سجل النتائج لمتابعتها", "استشر الطبيب دائماً"],
    importance: "متوسطة"
  },
  {
    id: 8,
    title: "تناول الإفطار الصحي",
    category: "تغذية",
    icon: "fa-egg",
    summary: "الإفطار أهم وجبة في اليوم",
    content: "إفطار صحي يضمن يوماً نشطاً:\n\n• البيض مصادر للبروتين\n• الشوفان يمنح الطاقة\n• الفواكه تمد بالفيتامينات\n• تجنب الوجبات السريعة\n\nلا تهمل الإفطار مهما كانت مشغولاً.",
    tips: ["ابدأ بيوم بدون سكر", "أضف بروتين لكل وجبة", "اشرب عصير طازج"],
    importance: "عالية"
  },
  {
    id: 9,
    title: "الجلوس الصحيح",
    category: "وقاية",
    icon: "fa-chair",
    summary: "الوضع الصحيح يحمي العمود الفقري",
    content: "الجلوس الخاطئ يسبب آلاماً:\n\n• حافظ على استقامة الظهر\n• الشاشة في مستوى العين\n• القدمان مسطحتان على الأرض\n• خذ استراحة كل ساعة\n\nالجلوس الصحيح يمنع آلام الرقبة والظهر.",
    tips: ["اضبط ارتفاع الكرسي", "استخدم دعامة للظهر", "تحرك كل ساعة"],
    importance: "متوسطة"
  },
  {
    id: 10,
    title: "غسل الأسنان مرتين يومياً",
    category: "وقاية",
    icon: "fa-tooth",
    summary: "الأسنان الصحية مفتاح الثقة",
    content: "العناية بالأسنان ضرورية:\n\n• غسل 3 دقائق\n• استخدام خيط dental\n• زيارة طبيب الأسنان\n• تجنب السكريات\n\nالأسنان الصحية تمنع many الأمراض.",
    tips: ["استخدم فرشاة ناعمة", "غير الفرشاة كل 3 أشهر", "اغسل لسانك أيضاً"],
    importance: "عالية"
  },
  {
    id: 11,
    title: "الإجهاد والتوتر",
    category: "صحة نفسية",
    icon: "fa-spa",
    summary: "العقل السليم في الجسم السليم",
    content: "الصحة النفسية مهمة كالجسدية:\n\n• خذ استراحة من العمل\n• مارس التأمل\n• تحدث مع близاءك\n• لا تتراكم المشكلات\n\nالاسترخاء يقلل من many الأمراض.",
    tips: ["مارس التنفس العميق", "استمع للموسيقى", "اقرأ كتاباً"],
    importance: "عالية"
  },
  {
    id: 12,
    title: "الرضا عن النفس",
    category: "صحة نفسية",
    icon: "fa-heart",
    summary: "حب نفسك هو بداية الصحة",
    content: "القناعة بالنفس أساسية:\n\n• تقبل نفسك كما أنت\n• ضع أهدافاً واقعية\n• احتفل بإنجازاتك\n• تجنب المقارنة بالآخرين\n\nالصحة النفسية تؤثر على الجسدية.",
    tips: ["دوّن ما أنت ممتن له", "عامل نفسك بلطف", "اح окруж себя بأ positivity"],
    importance: "عالية"
  }
];

// التصنيفات
const categories = ["الكل", "تغذية", "رياضة", "نوم", "وقاية", "فحوصات", "صحة نفسية"];

// متغيرات عامة
let filteredTips = [...tipsData];
const tipsGrid = document.getElementById('tipsGrid');
const categoryFilters = document.getElementById('categoryFilters');
const noResults = document.getElementById('noResults');
const tipModal = document.getElementById('tipModal');
const modalContent = document.getElementById('modalContent');

// دالة عرض التصنيفات
function renderCategories() {
  categoryFilters.innerHTML = categories.map((cat, index) => `
    <button onclick="filterByCategory('${cat}')" 
      class="px-4 py-2 rounded-full font-medium transition ${index === 0 ? 'bg-[#155d86] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}">
      ${cat}
    </button>
  `).join('');
}

// دالة عرض النصائح
function renderTips(tips) {
  tipsGrid.innerHTML = '';
  
  if (tips.length === 0) {
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  
  tips.forEach((tip, index) => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer';
    card.onclick = () => showTipDetails(tip.id);
    card.style.animationDelay = `${index * 0.1}s`;
    
    const importanceColor = {
      "عالية": "bg-red-100 text-red-600",
      "متوسطة": "bg-yellow-100 text-yellow-600"
    }[tip.importance] || "bg-gray-100 text-gray-600";
    
    card.innerHTML = `
      <div class="h-3 bg-gradient-to-l from-[#155d86] to-[#1b8a78]"></div>
      <div class="p-6">
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 bg-[#e8f5e9] rounded-xl flex items-center justify-center">
            <i class="fas ${tip.icon} text-xl text-[#1b8a78]"></i>
          </div>
          <span class="px-3 py-1 ${importanceColor} text-sm font-medium rounded-full">${tip.importance}</span>
        </div>
        <span class="text-sm text-[#2473a6] font-medium">${tip.category}</span>
        <h3 class="text-lg font-bold text-gray-800 mt-1 mb-2">${tip.title}</h3>
        <p class="text-gray-600 text-sm line-clamp-2">${tip.summary}</p>
        <div class="mt-4 flex items-center text-sm text-gray-500">
          <i class="fas fa-arrow-left ml-2 text-[#2473a6]"></i>
          <span>اقرأ المزيد</span>
        </div>
      </div>
    `;
    
    tipsGrid.appendChild(card);
  });
}

// دالة عرض تفاصيل النصيحة
function showTipDetails(tipId) {
  const tip = tipsData.find(t => t.id === tipId);
  if (!tip) return;
  
  modalContent.innerHTML = `
    <div class="relative h-32 bg-gradient-to-l from-[#155d86] via-[#2473a6] to-[#1b8a78]">
      <button onclick="closeModal()" class="absolute top-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <div class="p-6">
      <div class="flex items-start justify-between mb-4">
        <div>
          <span class="px-3 py-1 bg-[#e8f5e9] text-[#1b8a78] text-sm font-medium rounded-full">${tip.category}</span>
          <h2 class="text-2xl font-black text-gray-800 mt-2">${tip.title}</h2>
        </div>
        <div class="w-14 h-14 bg-[#e8f5e9] rounded-xl flex items-center justify-center">
          <i class="fas ${tip.icon} text-2xl text-[#1b8a78]"></i>
        </div>
      </div>
      
      <div class="mb-6">
        <p class="text-gray-600 leading-relaxed whitespace-pre-line">${tip.content}</p>
      </div>
      
      <div class="mb-6">
        <h3 class="font-bold text-gray-800 mb-3">
          <i class="fas fa-lightbulb text-yellow-500 ml-2"></i>
          نصائح عملية
        </h3>
        <ul class="space-y-2">
          ${tip.tips.map(t => `
            <li class="flex items-start gap-2 text-gray-600">
              <i class="fas fa-check-circle text-[#1b8a78] mt-1"></i>
              <span>${t}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      
      <div class="flex gap-3">
        <button onclick="shareTip(${tip.id})" class="flex-1 border-2 border-[#155d86] text-[#155d86] py-3 rounded-xl font-bold hover:bg-[#f0f9ff] transition">
          <i class="fas fa-share-alt ml-2"></i>
          مشاركة
        </button>
        <button onclick="closeModal()" class="flex-1 bg-[#155d86] text-white py-3 rounded-xl font-bold hover:bg-[#2473a6] transition">
          إغلاق
        </button>
      </div>
    </div>
  `;
  
  tipModal.classList.remove('hidden');
  tipModal.classList.add('flex');
}

// دالة إغلاق النافذة
function closeModal() {
  tipModal.classList.add('hidden');
  tipModal.classList.remove('flex');
}

// دالة الفلترة
function filterByCategory(category) {
  // تحديث الأزرار
  const buttons = categoryFilters.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.textContent === category) {
      btn.className = 'px-4 py-2 rounded-full font-medium transition bg-[#155d86] text-white';
    } else {
      btn.className = 'px-4 py-2 rounded-full font-medium transition bg-gray-100 text-gray-600 hover:bg-gray-200';
    }
  });
  
  // الفلترة
  if (category === "الكل") {
    filteredTips = [...tipsData];
  } else {
    filteredTips = tipsData.filter(tip => tip.category === category);
  }
  
  renderTips(filteredTips);
}

// دالة المشاركة
function shareTip(tipId) {
  const tip = tipsData.find(t => t.id === tipId);
  if (navigator.share) {
    navigator.share({
      title: tip.title,
      text: tip.summary,
      url: window.location.href
    });
  } else {
    // نسخ للرفع
    navigator.clipboard.writeText(`${tip.title}\n\n${tip.summary}`);
    alert('تم نسخ النصيحة');
  }
}

// إغلاق النافذة عند الضغط خارجها
tipModal.addEventListener('click', (e) => {
  if (e.target === tipModal) {
    closeModal();
  }
});

// إغلاق عند الضغط على Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// تحميل البيانات
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderTips(tipsData);
});