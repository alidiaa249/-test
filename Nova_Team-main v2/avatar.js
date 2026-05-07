 const stories = [
{
  id: 1,
  slug: "basma-story",

  card: {
    badge: "بطل من قلبنا",
    title: "البطلة بسمة",
    shortDescription:
      "رغم فقدانها البصر بسبب المرض، لم تتوقف عن الرسم وأصبحت مصدر إلهام لكل من حولها.",

    image: "assets/stories/basma.jpg",

    tags: ["تحدي المرض", "إبداع"],

    theme: {
      bgColor: "#ffffff",
      titleColor: "#ffffff",
      badgeColor: "#f59e0b",
      overlay: true,
    },
  },

  details: {
    pageTitle: "البطلة بسمة - رحلة أمل وإبداع",

    coverImage: "/images/stories/yaseen-cover.jpg",

    intro:
      "اكتشفت بسمة موهبتها في الرسم خلال رحلة العلاج، وتحولت لوحاتها إلى رسائل أمل.",

    fullStory: `
      بدأت بسمة الرسم كوسيلة للتعبير عن مشاعرها أثناء العلاج،
      ثم أصبحت لوحاتها مصدر سعادة لكل من حولها داخل المستشفى.
      اليوم تشارك برسوماتها في معارض صغيرة لدعم الأطفال المرضى.
    `,

    quote:
      "الرسم خلاني أشوف الدنيا بطريقة مختلفة حتى بعد فقدان بصري.",

    sideCard: {
      title: "كن شريكًا في كتابة قصة نجاح جديدة",
      description:
        "دعمك يساعد الأطفال على اكتشاف مواهبهم خلال رحلة العلاج.",
      buttonText: "تبرع الآن",
    },

    meta: {
      heroName: "بسمة",
      age: 12,
      disease: "سرطان العين",
      location: "القاهرة",
    },
  },
},

 {
  id: 2,
  slug: "yaseen-story",

  card: {
    badge: "بطل من حوالينا",
    title: "البطل ياسين",
    shortDescription:
      "بابتسامته رغم إصابته باللوكيميا، أصبح مصدر أمل لكل من حوله في رحلة العلاج.",

    image: "assets/stories/youssef.jpg",

    tags: ["قصة نجاح", "محاربة سرطان"],

    theme: {
      bgColor: "#f5f5f5",
      titleColor: "#222",
      badgeColor: "#16a34a",
      overlay: false,
    },
  },

  details: {
    pageTitle: "البطل ياسين - رحلة شجاعة وابتسامة لا تغيب",

    coverImage: "/images/stories/basma-cover.jpg",

    intro:
      "واجه ياسين مرض اللوكيميا بشجاعة كبيرة وظل ينشر الأمل طوال رحلة العلاج.",

    fullStory: `
      قضى ياسين شهورًا طويلة داخل المستشفى بين جلسات العلاج،
      لكنه لم يفقد ابتسامته يومًا وكان يشجع الأطفال دائمًا.

      وبعد رحلة صعبة، عاد إلى مدرسته من جديد،
      ويحلم أن يصبح طبيبًا لعلاج الأطفال.
    `,

    quote:
      "المستشفى مش مجرد مكان للعلاج.. ده كان المكان اللي علّمني أكون أقوى.",

    sideCard: {
      title: "كن شريكًا في كتابة قصة نجاح جديدة",
      description:
        "دعمك يساعد في توفير العلاج والرعاية النفسية للأطفال وأسرهم.",
      buttonText: "تبرع الآن",
    },

    meta: {
      heroName: "ياسين",
      age: 10,
      disease: "اللوكيميا",
      location: "الإسكندرية",
    },
  },
},

  {
    id: 3,
    slug: "twins-story",

    card: {
      badge: "سند عائلي",
      title: "نورين وناردين",
      shortDescription:
        "العائلة هي السند خلال رحلة العلاج، وأن الأمل يولد من الدعم والمحبة.",

      image:
        "assets/stories/twins.jpg",

      tags: ["سند عائلي", "قصة نجاح"],

      theme: {
        bgColor: "#06b6d4",
        titleColor: "#ffffff",
        badgeColor: "#67e8f9",
        overlay: false,
      },
    },

    details: {
      pageTitle: "الأخوة تصنع المعجزات",

      coverImage:
        "/images/stories/twins-cover.jpg",

      intro:
        "قصة توضح كيف يمكن للحب والدعم العائلي أن يصنع فارقًا كبيرًا في رحلة العلاج.",

      fullStory: `
        كانت الأختان دائمًا بجانب بعضهما في كل جلسة علاج،
        يضحكان ويلعبان لتخفيف صعوبة الأيام.

        أصبح وجودهما مصدر طاقة إيجابية للأطفال الآخرين داخل المستشفى.
      `,

      quote:
        "لما نكون سوا.. أي حاجة صعبة بتهون.",

      sideCard: {
        title: "ادعم العائلات",
        description:
          "وجود بيئة داعمة يساعد الأطفال على تخطي أصعب اللحظات.",
        buttonText: "شارك بالدعم",
      },

      meta: {
        heroName: "نورين وناردين",
        age: 8,
        disease: "سرطان الدم",
        location: "طنطا",
      },
    },
  },
  {
  id: 4,
  slug: "mansour-story",

  // بيانات الكارت
  card: {
    badge: "بطل من حوالينا",

    title: "البطل منصور",

    shortDescription:
      "من صعيد مصر قرر ألا يستسلم للمرض، ليصبح مثالًا للقوة والصبر والأمل.",

    image:
      "assets/stories/mansour.jpg",

    tags: ["رحلة علاج", "قوة وصبر"],

    theme: {
      bgColor: "#f3f4f6",
      titleColor: "#111827",
      badgeColor: "#16a34a",
      overlay: false,
    },
  },

  // صفحة التفاصيل
  details: {
    pageTitle: "البطل منصور - رحلة صمود لا تنتهي",

    coverImage:
      "/images/stories/mansour-cover.jpg",

    intro:
      "بدأت رحلة منصور مع المرض في سن مبكر، لكنه واجه كل مرحلة بإيمان وقوة كبيرة.",

    fullStory: `
      جاء منصور من إحدى قرى الصعيد لتلقي العلاج داخل مستشفى 57357،
      وكانت الرحلة طويلة ومليئة بالتحديات بين جلسات العلاج والسفر المستمر.

      رغم صعوبة الأيام، كان دائمًا يبتسم لكل من حوله ويشجع الأطفال الآخرين
      على التمسك بالأمل وعدم الاستسلام.

      أحب القراءة وكرة القدم، وكان يحلم أن يصبح مدرسًا يساعد الأطفال
      على تحقيق أحلامهم مهما كانت الظروف.

      اليوم أصبحت قصته مصدر إلهام لكل من عرفه،
      ودليلًا حقيقيًا على أن الإرادة أقوى من أي مرض.
    `,

    quote:
      "كنت كل يوم بقول لنفسي إني أقوى من المرض.. ولازم أكمل.",

    sideCard: {
      title: "كن سببًا في رحلة أمل جديدة",

      description:
        "تبرعك يساعد الأطفال المرضى على استكمال رحلة العلاج والحصول على الرعاية الكاملة.",

      buttonText: "تبرع الآن",
    },

    meta: {
      heroName: "منصور",
      age: 14,
      disease: "سرطان العظام",
      location: "صعيد مصر",
    },
  },
}
];




const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);

const story = stories.find((item) => item.id == id);
console.log(story);
let image = document.querySelector(".hero-image-container")
let mainarticle = document.querySelector(".main-article")

let hero = document.querySelector(".hero-title")


hero.innerHTML=`${story.slug}`


image.innerHTML=`<img class="hero-image" src="${story.card.image}" alt="${story.slug}">`


mainarticle.innerHTML = `    <p>${story.details.fullStory}</p>

  <blockquote class="quote-box">

                    <p class="quote-text">${story.details.quote}</p>
                </blockquote>

                <p>${story.details.sideCard.description}</p>
`




