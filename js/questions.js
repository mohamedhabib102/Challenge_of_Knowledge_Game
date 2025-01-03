const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu .icon");
const changeButton = document.getElementById("change-player");
const currentName = document.querySelector(".current-name span");

if (localStorage.getItem("gamePlayer")){
    currentName.textContent = localStorage.getItem("gamePlayer")
} else{
    currentName.textContent = " غير معروف "
}


changeButton.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("gamePlayer");
    history.replaceState(null, "", "../index.html");
    location.replace("../index.html");
})

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
})


// Mange Questions
const contentQuestions = document.querySelector(".content-questions");
const currQuestions = {
    one: [
        {
            question: " من هو خاتم الأنبياء ؟",
            questions: [" ابراهيم", " محمد "],
            message: " سورة الأحزاب (40) ما كان محمد أبا أحد من رجالكم ولكن رسول الله وخاتم النبيين وكان الله بكل شيء عليما ",
            isTrue: " محمد "
    
        },
        {
            question: " أول زوجة لسيدنا محمد هي السيده خديجة ؟",
            message: ` وكان السادات والرؤساء يحرصون على زوجها فتأبى # السيده خديجة # أي رجال قريش يتقدمون لزوجها فاترفضهم , فتحدثت بما في نفسها إلى صديقتها نفيسة بنت منية وهذه ذهبت إليه # صلى الله عليه وسلم # تفاتحه أن يتزوج خديجة فرضي بذالك أي قبل الزواج # صلى الله عليه وسلم # وكلم أعمامه فذهبوا إلى عم خديجة وخطبوها إليه وعلى إثر ذالك تم الزواج وحضر العقد بنو هاشم ورؤساء مضر وذالك بعد رجوعه من الشام بشهرين وكانت سنها أربعين سنة وكانت يومئذ أفضل نساء قومها وثروة وعقلاً وهي أول امرأة تزوجها  صلى الله عليه وسلم 
            `,
            questions: [" لا ", " نعم "],
            isTrue: " نعم "
        },
        {
            question: " من هو النبي الذي فتن في قتل ولده ؟",
            questions: [" ابراهيم ", " نوح "],
            message: ` سورة الصافات (102)   فلما بلغ معه السعي قال يا بنَيَّ إني أرى في المنام أني أذبحك فانظر ماذا ترى قال يا أبت افعل ما تؤمر ستجدني إن شاء الله من الصابرين التفسير:  فلما شب إسماعيل عليه السلام وأدرك سعيه سعي أبيه إبراهيم عليه السلام رؤيا الأنبياء وحي قال إبراهيم مخبرًا ابنه عن فحوى هذه الرؤيا: يا بني إني رأيت في النوم أني اذبحك فانظر ما ترى في ذلك فأجاب إسماعيل عليه السلام أباه قائلًا يا أبي افعل ما أمرك الله به من ذبحي ستجدني إن شاء الله من الصابرين أي من الراضين بحكم الله #`,
            isTrue: " ابراهيم ",
        },
        {
            question: " من هم قوم سيدنا هود ؟",
            questions: [" عاد ", " ثمود "],
            message: ` سورة الأعراف (65)  وإلى عاد أخاهم هودا قال يقوم اعبدوا الله ما لكم من إله غيره أفلا تتقون`,
            isTrue: " عاد "
        },
        {
            question: "من آداب دخول البيت نقول السلام على أهل البيت",
            questions: [" صح ", " خطأ "],
            message: ` عن إنس قال: قال # رسول الله صلى الله عليه وسلم # يا بني إذا دخلت على أهلك فسلم يكن بركة عليك وعلى أهل بيتك رواه الترمذي وقال: حديث صحيح`,
            isTrue: " صح "
        },
        {
            question: "ما معنى قوله تعالى: (ويمنعون الماعون)؟",
            questions: [" يمنعون إعارة ما لا تضر من الآنية وغيرها ", " يمعنون الناس عن معاني الحق "],
            message: ` التفسير:   يمنعون إعارة ما لا تضر من الآنية وغيرها , فلا هم أحسنوا عبادة ربهم ولا هم أحسنوا إلى خلقه  `,
            isTrue: " يمنعون إعارة ما لا تضر من الآنية وغيرها "
        },
        {
        question: " لماذا نلتزم الأخلاق الأسلامية؟ ",
        questions: [" لأنها سبب لكسب الاموال ", " لأنها سبب لمحبة الله ومحبة خلقه "],
        message: ` وعن أبي هريره قال: سُئل رسول الله # صلى الله عليه وسلم # عن أكثر ما يدخل الناس الجنة قال: تقوى الله وحسُن الخُلُق وسُئل عن أكثر ما يدخل الناس النار فقال الفمُ و الفَرجُ رواه الترمذي وقال: حديث صحيح `,
        isTrue: " لأنها سبب لمحبة الله ومحبة خلقه "
    },
    {
        question: " توفى ابوه سيدنا محمد صلى الله عليه وسلم وهو: ",
        questions: [" طفل صغر ", " في بطن امه "],
        message: ` وبعد قليل أرسله عبد المطلب إلى المدينة يمتار لهم تمراً فمات بها وقيل: بل خرج تاجراً إلى الشام فأقبل في عير قريش فنزل بالمدينة وهو مريض فتوفى بها ودفن في دار النابغة الجعدي وله إذ ذاك خمس وعشرون سنة وكانت وفاته قبل أن يولد رسول الله # صلى الله عليه وسلم # `,
        isTrue: " في بطن امه "
    },
    {
        question: " صلاة الفرد أفضل من صلاة الجماعة بسبع وعشرين درجة ",
        questions: [" صح ", " خطأ "],
        isTrue: " خطأ ",
    },
    {
        question: " ما أعظم ذنب؟ ",
        questions: [" الشرك بالله تعالى ", " قطيعة الرحم "],
        isTrue: " الشرك بالله تعالى "
    },
    {
        question: " من أركان الحج ",
        questions: [" الوقوف بعرفة ", " الوقوف بمكة "],
        isTrue: " الوقوف بعرفة "
    },
    {
        question: "من آداب المجلس: السلام على أهل المجلس عند الدخول وعند الخروج",
        questions: ["صح", " خطأ "],
        isTrue: "صح"
    },
    {
        question: "مكان ولادة النبي صلى الله عليه وسلم:",
        questions: ["في مكة", "في المدنية"],
        isTrue: "في مكة"
    },  
    {
        question: "من دعاء الضيف لصاحب الطعام: (اللهم بارك لهم فيما رزقتهم، واغفر لهم وارحمهم)",
        questions: ["صح", "خطأ"],
        isTrue: "صح"
    
    },
    {
        question: "ما معنى قوله تعالى: ﴿فَأُمُّهُۥ هَاوِیَة﴾؟",
        questions: ["مأوه ومسكنه النار التي من أسمائها الهاوية تكون له بمنزلة الام الملازمة", "أمه التي ولدته"],
        isTrue: "مأوه ومسكنه النار التي من أسمائها الهاوية تكون له بمنزلة الام الملازمة"
    },
    {
        question: " من هو النبي الذي فتن في قتل ولده ",
        questions: [" ابراهيم عليه السلام ", " موسى عليه السلام",],
        isTrue: " ابراهيم عليه السلام ",
    },
    {
        question: "طريق العز والنصر للمسلمين",
        questions: ["الدعاء فقط", "الدعاء مع العمل بالإسلام"],
        isTrue: "الدعاء مع العمل بالإسلام"
    },
    {
        question: "   ( إِلَّا تَنصُرُوهُ فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا ثَانِيَ اثْنَيْنِ إِذْ هُمَا فِي الْغَارِ إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا )  ما المقصود بصاحبه؟ ",
        questions: ["أبو بكر الصديق", "علي ابن أبي طالب"],
        isTrue: "أبو بكر الصديق"
    },
    {
        question: " ما المقصود ب ذا النون  ",
        questions: [" يونس عليه السلام ", " ابراهيم عليه السلام "],
        isTrue: " يونس عليه السلام "
    },
    {
        question: " ما هو حكم الزاني الغير مُحصن أي: غير مُتزوج ",
        questions: [" يُجلد حتى الموت ", " يُجلد مائة جلدة "],
        message: ` سورة النور (2) الزانيةُ والزاني فاجلُدو كل واحد منهما مائة جلدة ولا تأذكم بهما رأفة في دين الله أن كنتم تومنون بالله واليوم الاخر وليشهد عذابهما طاءفة من المومنين`,
        isTrue: " يُجلد مائة جلدة "
    }
    ],
    two: [
        {
            question: "ما اسم الكتاب الذي أنزل على النبي محمد ﷺ؟",
            questions: ["القرآن الكريم", "الإنجيل"],
            message: "القرآن الكريم هو الكتاب الذي أنزل على النبي محمد ﷺ، وهو هداية للناس.",
            isTrue: "القرآن الكريم",
          },
          {
            question: "كم عدد أركان الإسلام؟",
            questions: ["5", "7"],
            message: "أركان الإسلام خمسة: الشهادة، الصلاة، الزكاة، الصوم، والحج.",
            isTrue: "5",
          },
          {
            question: "ما هو أول مسجد بني في الإسلام؟",
            questions: ["مسجد قباء", "المسجد الأقصى"],
            message: "مسجد قباء هو أول مسجد بني في الإسلام، بناه النبي ﷺ بعد الهجرة.",
            isTrue: "مسجد قباء",
          },
          {
            question: "ما هي السورة التي تعادل ثلث القرآن؟",
            questions: ["سورة الإخلاص", "سورة الفاتحة"],
            message: "سورة الإخلاص تعادل ثلث القرآن الكريم في الأجر.",
            isTrue: "سورة الإخلاص",
          },
          {
            question: "كم عدد الصلوات المفروضة يوميًا؟",
            questions: ["5", "3"],
            message: "عدد الصلوات المفروضة يوميًا هو خمس صلوات: الفجر، الظهر، العصر، المغرب، والعشاء.",
            isTrue: "5",
          },
          {
            question: "ما هي قبلة المسلمين في الصلاة؟",
            questions: ["الكعبة", "المسجد النبوي"],
            message: "الكعبة المشرفة في مكة المكرمة هي قبلة المسلمين في الصلاة.",
            isTrue: "الكعبة",
          },
          {
            question: "من هو خاتم الأنبياء؟",
            questions: ["النبي محمد ﷺ", "النبي عيسى عليه السلام"],
            message: "النبي محمد ﷺ هو خاتم الأنبياء والمرسلين.",
            isTrue: "النبي محمد ﷺ",
          },
          {
            question: "ما هي أول كلمة نزلت من القرآن؟",
            questions: ["اقرأ", "الحمد"],
            message: "أول كلمة نزلت من القرآن الكريم هي 'اقرأ' في سورة العلق.",
            isTrue: "اقرأ",
          },
          {
            question: "ما هو الشهر الذي يصوم فيه المسلمون؟",
            questions: ["رمضان", "ذو الحجة"],
            message: "شهر رمضان هو الشهر الذي يصوم فيه المسلمون.",
            isTrue: "رمضان",
          },
          {
            question: "ما اسم الليلة التي هي خير من ألف شهر؟",
            questions: ["ليلة القدر", "ليلة الإسراء"],
            message: "ليلة القدر هي خير من ألف شهر وتنزل فيها الملائكة.",
            isTrue: "ليلة القدر",
          },
          {
            question: "ما هي الزكاة؟",
            questions: ["صدقة مفروضة", "صدقة تطوعية"],
            message: "الزكاة هي صدقة مفروضة على المسلمين إذا بلغت أموالهم النصاب.",
            isTrue: "صدقة مفروضة",
          },
          {
            question: "ما هي أعظم سورة في القرآن؟",
            questions: ["سورة الفاتحة", "سورة البقرة"],
            message: "سورة الفاتحة هي أعظم سورة في القرآن الكريم.",
            isTrue: "سورة الفاتحة",
          },
          {
            question: "من هو أول خليفة للمسلمين؟",
            questions: ["أبو بكر الصديق", "عمر بن الخطاب"],
            message: "أبو بكر الصديق رضي الله عنه هو أول خليفة للمسلمين.",
            isTrue: "أبو بكر الصديق",
          },
          {
            question: "كم عدد ركعات صلاة الفجر؟",
            questions: ["2", "4"],
            message: "صلاة الفجر تتكون من ركعتين.",
            isTrue: "2",
          },
          {
            question: "ما هو يوم الحج الأكبر؟",
            questions: ["يوم عرفة", "يوم النحر"],
            message: "يوم النحر هو يوم الحج الأكبر.",
            isTrue: "يوم النحر",
          },
          {
            question: "من هو النبي الذي ابتلعه الحوت؟",
            questions: ["يونس عليه السلام", "موسى عليه السلام"],
            message: "النبي يونس عليه السلام هو الذي ابتلعه الحوت.",
            isTrue: "يونس عليه السلام",
          },
          {
            question: "ما هي الصلاة التي تصلى عند حدوث الكسوف؟",
            questions: ["صلاة الكسوف", "صلاة الاستسقاء"],
            message: "صلاة الكسوف تصلى عند حدوث الكسوف.",
            isTrue: "صلاة الكسوف",
          },
          {
            question: "ما هو الركن الأول من أركان الإسلام؟",
            questions: ["الشهادة", "الصلاة"],
            message: "الشهادة هي الركن الأول من أركان الإسلام.",
            isTrue: "الشهادة",
          },
          {
            question: "من هو النبي الذي كلمه الله بدون واسطة؟",
            questions: ["موسى عليه السلام", "إبراهيم عليه السلام"],
            message: "النبي موسى عليه السلام كلمه الله بدون واسطة.",
            isTrue: "موسى عليه السلام",
          },
          {
            question: "ما هو اسم أم النبي محمد ﷺ؟",
            questions: ["آمنة بنت وهب", "خديجة بنت خويلد"],
            message: "آمنة بنت وهب هي أم النبي محمد ﷺ.",
            isTrue: "آمنة بنت وهب",
          },
    ],
    three: [
        {
            question: "ما هي الكلمة التي تبدأ بها سورة الفاتحة؟",
            questions: ["الحمد", "بسم"],
            message: "سورة الفاتحة تبدأ بكلمة 'بسم'.",
            isTrue: "بسم",
          },
          {
            question: "كم عدد ركعات صلاة الظهر؟",
            questions: ["4", "2"],
            message: "صلاة الظهر تتكون من أربع ركعات.",
            isTrue: "4",
          },
          {
            question: "من هو النبي الذي أمر ببناء السفينة؟",
            questions: ["نوح عليه السلام", "إبراهيم عليه السلام"],
            message: "النبي نوح عليه السلام أمره الله ببناء السفينة.",
            isTrue: "نوح عليه السلام",
          },
          {
            question: "ما هي أول سورة في القرآن الكريم؟",
            questions: ["سورة الفاتحة", "سورة البقرة"],
            message: "أول سورة في القرآن الكريم هي سورة الفاتحة.",
            isTrue: "سورة الفاتحة",
          },
          {
            question: "ما هو الركن الثالث من أركان الإسلام؟",
            questions: ["الزكاة", "الصلاة"],
            message: "الزكاة هي الركن الثالث من أركان الإسلام.",
            isTrue: "الزكاة",
          },
          {
            question: "من هو النبي الذي ولد بدون أب؟",
            questions: ["عيسى عليه السلام", "إبراهيم عليه السلام"],
            message: "النبي عيسى عليه السلام ولد بدون أب بمعجزة من الله.",
            isTrue: "عيسى عليه السلام",
          },
          {
            question: "ما هي السورة التي تسمى قلب القرآن؟",
            questions: ["سورة يس", "سورة البقرة"],
            message: "سورة يس تُسمى قلب القرآن.",
            isTrue: "سورة يس",
          },
          {
            question: "كم عدد ركعات صلاة المغرب؟",
            questions: ["3", "4"],
            message: "صلاة المغرب تتكون من ثلاث ركعات.",
            isTrue: "3",
          },
          {
            question: "ما هو الشهر الذي يؤدي فيه المسلمون فريضة الحج؟",
            questions: ["ذو الحجة", "رمضان"],
            message: "فريضة الحج تؤدى في شهر ذو الحجة.",
            isTrue: "ذو الحجة",
          },
          {
            question: "من هو النبي الذي كان يفسر الأحلام؟",
            questions: ["يوسف عليه السلام", "داوود عليه السلام"],
            message: "النبي يوسف عليه السلام كان معروفًا بتفسير الأحلام.",
            isTrue: "يوسف عليه السلام",
          },
          {
            question: "ما هي الليلة التي أسرى فيها النبي محمد ﷺ؟",
            questions: ["ليلة الإسراء والمعراج", "ليلة القدر"],
            message: "ليلة الإسراء والمعراج هي الليلة التي أسرى فيها بالنبي ﷺ.",
            isTrue: "ليلة الإسراء والمعراج",
          },
          {
            question: "من هو النبي الذي سُمي كليم الله؟",
            questions: ["موسى عليه السلام", "محمد ﷺ"],
            message: "النبي موسى عليه السلام يُسمى كليم الله لأنه كلمه مباشرة.",
            isTrue: "موسى عليه السلام",
          },
          {
            question: "ما هو الحيوان الذي تحدث في القرآن؟",
            questions: ["النملة", "الثعبان"],
            message: "النملة تحدثت في قصة النبي سليمان عليه السلام.",
            isTrue: "النملة",
          },
          {
            question: "ما هو اسم الجبل الذي استقرت عليه سفينة نوح؟",
            questions: ["جبل الجودي", "جبل الطور"],
            message: "سفينة نوح استقرت على جبل الجودي بعد الطوفان.",
            isTrue: "جبل الجودي",
          },
          {
            question: "كم عدد الأيام التي خلق الله فيها السموات والأرض؟",
            questions: ["6 أيام", "7 أيام"],
            message: "خلق الله السموات والأرض في ستة أيام.",
            isTrue: "6 أيام",
          },
          {
            question: "من هو الصحابي الذي لقب بسيف الله المسلول؟",
            questions: ["خالد بن الوليد", "علي بن أبي طالب"],
            message: "الصحابي خالد بن الوليد رضي الله عنه لقب بسيف الله المسلول.",
            isTrue: "خالد بن الوليد",
          },
          {
            question: "ما هي آخر سورة نزلت في القرآن؟",
            questions: ["سورة النصر", "سورة التوبة"],
            message: "آخر سورة نزلت هي سورة النصر.",
            isTrue: "سورة النصر",
          },
          {
            question: "ما هو الطائر الذي ذكر في قصة النبي سليمان؟",
            questions: ["الهدهد", "النسر"],
            message: "الهدهد ذكر في قصة النبي سليمان عليه السلام.",
            isTrue: "الهدهد",
          },
          {
            question: "كم عدد السجدات في القرآن الكريم؟",
            questions: ["15", "14"],
            message: "عدد السجدات في القرآن الكريم هو خمس عشرة سجدة.",
            isTrue: "15",
          },
          {
            question: "من هو أول نبي أرسل إلى البشرية؟",
            questions: ["نوح عليه السلام", "إبراهيم عليه السلام"],
            message: "النبي نوح عليه السلام هو أول نبي أرسل إلى البشرية.",
            isTrue: "نوح عليه السلام",
          },
    ]
}
    // Qeutions 1
// Qeutions 2 
   

const questionsArray1 = [
    {
      question: "ما اسم الكتاب الذي أنزل على النبي محمد ﷺ؟",
      questions: ["القرآن الكريم", "الإنجيل"],
      message: "القرآن الكريم هو الكتاب الذي أنزل على النبي محمد ﷺ، وهو هداية للناس.",
      isTrue: "القرآن الكريم",
    },
    {
      question: "كم عدد أركان الإسلام؟",
      questions: ["5", "7"],
      message: "أركان الإسلام خمسة: الشهادة، الصلاة، الزكاة، الصوم، والحج.",
      isTrue: "5",
    },
    {
      question: "ما هو أول مسجد بني في الإسلام؟",
      questions: ["مسجد قباء", "المسجد الأقصى"],
      message: "مسجد قباء هو أول مسجد بني في الإسلام، بناه النبي ﷺ بعد الهجرة.",
      isTrue: "مسجد قباء",
    },
    {
      question: "ما هي السورة التي تعادل ثلث القرآن؟",
      questions: ["سورة الإخلاص", "سورة الفاتحة"],
      message: "سورة الإخلاص تعادل ثلث القرآن الكريم في الأجر.",
      isTrue: "سورة الإخلاص",
    },
    {
      question: "كم عدد الصلوات المفروضة يوميًا؟",
      questions: ["5", "3"],
      message: "عدد الصلوات المفروضة يوميًا هو خمس صلوات: الفجر، الظهر، العصر، المغرب، والعشاء.",
      isTrue: "5",
    },
    {
      question: "ما هي قبلة المسلمين في الصلاة؟",
      questions: ["الكعبة", "المسجد النبوي"],
      message: "الكعبة المشرفة في مكة المكرمة هي قبلة المسلمين في الصلاة.",
      isTrue: "الكعبة",
    },
    {
      question: "من هو خاتم الأنبياء؟",
      questions: ["النبي محمد ﷺ", "النبي عيسى عليه السلام"],
      message: "النبي محمد ﷺ هو خاتم الأنبياء والمرسلين.",
      isTrue: "النبي محمد ﷺ",
    },
    {
      question: "ما هي أول كلمة نزلت من القرآن؟",
      questions: ["اقرأ", "الحمد"],
      message: "أول كلمة نزلت من القرآن الكريم هي 'اقرأ' في سورة العلق.",
      isTrue: "اقرأ",
    },
    {
      question: "ما هو الشهر الذي يصوم فيه المسلمون؟",
      questions: ["رمضان", "ذو الحجة"],
      message: "شهر رمضان هو الشهر الذي يصوم فيه المسلمون.",
      isTrue: "رمضان",
    },
    {
      question: "ما اسم الليلة التي هي خير من ألف شهر؟",
      questions: ["ليلة القدر", "ليلة الإسراء"],
      message: "ليلة القدر هي خير من ألف شهر وتنزل فيها الملائكة.",
      isTrue: "ليلة القدر",
    },
    {
      question: "ما هي الزكاة؟",
      questions: ["صدقة مفروضة", "صدقة تطوعية"],
      message: "الزكاة هي صدقة مفروضة على المسلمين إذا بلغت أموالهم النصاب.",
      isTrue: "صدقة مفروضة",
    },
    {
      question: "ما هي أعظم سورة في القرآن؟",
      questions: ["سورة الفاتحة", "سورة البقرة"],
      message: "سورة الفاتحة هي أعظم سورة في القرآن الكريم.",
      isTrue: "سورة الفاتحة",
    },
    {
      question: "من هو أول خليفة للمسلمين؟",
      questions: ["أبو بكر الصديق", "عمر بن الخطاب"],
      message: "أبو بكر الصديق رضي الله عنه هو أول خليفة للمسلمين.",
      isTrue: "أبو بكر الصديق",
    },
    {
      question: "كم عدد ركعات صلاة الفجر؟",
      questions: ["2", "4"],
      message: "صلاة الفجر تتكون من ركعتين.",
      isTrue: "2",
    },
    {
      question: "ما هو يوم الحج الأكبر؟",
      questions: ["يوم عرفة", "يوم النحر"],
      message: "يوم النحر هو يوم الحج الأكبر.",
      isTrue: "يوم النحر",
    },
    {
      question: "من هو النبي الذي ابتلعه الحوت؟",
      questions: ["يونس عليه السلام", "موسى عليه السلام"],
      message: "النبي يونس عليه السلام هو الذي ابتلعه الحوت.",
      isTrue: "يونس عليه السلام",
    },
    {
      question: "ما هي الصلاة التي تصلى عند حدوث الكسوف؟",
      questions: ["صلاة الكسوف", "صلاة الاستسقاء"],
      message: "صلاة الكسوف تصلى عند حدوث الكسوف.",
      isTrue: "صلاة الكسوف",
    },
    {
      question: "ما هو الركن الأول من أركان الإسلام؟",
      questions: ["الشهادة", "الصلاة"],
      message: "الشهادة هي الركن الأول من أركان الإسلام.",
      isTrue: "الشهادة",
    },
    {
      question: "من هو النبي الذي كلمه الله بدون واسطة؟",
      questions: ["موسى عليه السلام", "إبراهيم عليه السلام"],
      message: "النبي موسى عليه السلام كلمه الله بدون واسطة.",
      isTrue: "موسى عليه السلام",
    },
    {
      question: "ما هو اسم أم النبي محمد ﷺ؟",
      questions: ["آمنة بنت وهب", "خديجة بنت خويلد"],
      message: "آمنة بنت وهب هي أم النبي محمد ﷺ.",
      isTrue: "آمنة بنت وهب",
    },
  ];
  
  const questionsArray2 = [
    {
      question: "ما هي الكلمة التي تبدأ بها سورة الفاتحة؟",
      questions: ["الحمد", "بسم"],
      message: "سورة الفاتحة تبدأ بكلمة 'بسم'.",
      isTrue: "بسم",
    },
    {
      question: "كم عدد ركعات صلاة الظهر؟",
      questions: ["4", "2"],
      message: "صلاة الظهر تتكون من أربع ركعات.",
      isTrue: "4",
    },
    {
      question: "من هو النبي الذي أمر ببناء السفينة؟",
      questions: ["نوح عليه السلام", "إبراهيم عليه السلام"],
      message: "النبي نوح عليه السلام أمره الله ببناء السفينة.",
      isTrue: "نوح عليه السلام",
    },
    {
      question: "ما هي أول سورة في القرآن الكريم؟",
      questions: ["سورة الفاتحة", "سورة البقرة"],
      message: "أول سورة في القرآن الكريم هي سورة الفاتحة.",
      isTrue: "سورة الفاتحة",
    },
    {
      question: "ما هو الركن الثالث من أركان الإسلام؟",
      questions: ["الزكاة", "الصلاة"],
      message: "الزكاة هي الركن الثالث من أركان الإسلام.",
      isTrue: "الزكاة",
    },
    {
      question: "من هو النبي الذي ولد بدون أب؟",
      questions: ["عيسى عليه السلام", "إبراهيم عليه السلام"],
      message: "النبي عيسى عليه السلام ولد بدون أب بمعجزة من الله.",
      isTrue: "عيسى عليه السلام",
    },
    {
      question: "ما هي السورة التي تسمى قلب القرآن؟",
      questions: ["سورة يس", "سورة البقرة"],
      message: "سورة يس تُسمى قلب القرآن.",
      isTrue: "سورة يس",
    },
    {
      question: "كم عدد ركعات صلاة المغرب؟",
      questions: ["3", "4"],
      message: "صلاة المغرب تتكون من ثلاث ركعات.",
      isTrue: "3",
    },
    {
      question: "ما هو الشهر الذي يؤدي فيه المسلمون فريضة الحج؟",
      questions: ["ذو الحجة", "رمضان"],
      message: "فريضة الحج تؤدى في شهر ذو الحجة.",
      isTrue: "ذو الحجة",
    },
    {
      question: "من هو النبي الذي كان يفسر الأحلام؟",
      questions: ["يوسف عليه السلام", "داوود عليه السلام"],
      message: "النبي يوسف عليه السلام كان معروفًا بتفسير الأحلام.",
      isTrue: "يوسف عليه السلام",
    },
    {
      question: "ما هي الليلة التي أسرى فيها النبي محمد ﷺ؟",
      questions: ["ليلة الإسراء والمعراج", "ليلة القدر"],
      message: "ليلة الإسراء والمعراج هي الليلة التي أسرى فيها بالنبي ﷺ.",
      isTrue: "ليلة الإسراء والمعراج",
    },
    {
      question: "من هو النبي الذي سُمي كليم الله؟",
      questions: ["موسى عليه السلام", "محمد ﷺ"],
      message: "النبي موسى عليه السلام يُسمى كليم الله لأنه كلمه مباشرة.",
      isTrue: "موسى عليه السلام",
    },
    {
      question: "ما هو الحيوان الذي تحدث في القرآن؟",
      questions: ["النملة", "الثعبان"],
      message: "النملة تحدثت في قصة النبي سليمان عليه السلام.",
      isTrue: "النملة",
    },
    {
      question: "ما هو اسم الجبل الذي استقرت عليه سفينة نوح؟",
      questions: ["جبل الجودي", "جبل الطور"],
      message: "سفينة نوح استقرت على جبل الجودي بعد الطوفان.",
      isTrue: "جبل الجودي",
    },
    {
      question: "كم عدد الأيام التي خلق الله فيها السموات والأرض؟",
      questions: ["6 أيام", "7 أيام"],
      message: "خلق الله السموات والأرض في ستة أيام.",
      isTrue: "6 أيام",
    },
    {
      question: "من هو الصحابي الذي لقب بسيف الله المسلول؟",
      questions: ["خالد بن الوليد", "علي بن أبي طالب"],
      message: "الصحابي خالد بن الوليد رضي الله عنه لقب بسيف الله المسلول.",
      isTrue: "خالد بن الوليد",
    },
    {
      question: "ما هي آخر سورة نزلت في القرآن؟",
      questions: ["سورة النصر", "سورة التوبة"],
      message: "آخر سورة نزلت هي سورة النصر.",
      isTrue: "سورة النصر",
    },
    {
      question: "ما هو الطائر الذي ذكر في قصة النبي سليمان؟",
      questions: ["الهدهد", "النسر"],
      message: "الهدهد ذكر في قصة النبي سليمان عليه السلام.",
      isTrue: "الهدهد",
    },
    {
      question: "كم عدد السجدات في القرآن الكريم؟",
      questions: ["15", "14"],
      message: "عدد السجدات في القرآن الكريم هو خمس عشرة سجدة.",
      isTrue: "15",
    },
    {
      question: "من هو أول نبي أرسل إلى البشرية؟",
      questions: ["نوح عليه السلام", "إبراهيم عليه السلام"],
      message: "النبي نوح عليه السلام هو أول نبي أرسل إلى البشرية.",
      isTrue: "نوح عليه السلام",
    },
  ];
  
  




// console.log(nowQuestions);

let keys = Object.values(currQuestions);
let nowQuestions = keys[Math.floor(Math.random() * keys.length)];








let currentIndex = 0;
let currentWiner = 0;
const currentQuestion = nowQuestions[currentIndex].question;
const questionDom = document.querySelector(".title-question span")
const questionDomIcon = document.querySelector(".title-question i")
questionDom.textContent = currentQuestion;
const nextQuestion  = document.querySelector(".next-question");

nextQuestion.disabled = true;
nextQuestion.classList.add("add-opacity")

const countQuestions = document.querySelector(".length");

countQuestions.textContent = `${currentIndex + 1 }/${nowQuestions.length}`;



const isTrueIcon = "fa-solid fa-check is-true"
const isFalseIcon = "fa-solid fa-x is-false"


function createQuestions() {
    let ulDom = document.createElement("ul");

    nowQuestions[currentIndex].questions.forEach((ele) => {
        if (ele !== undefined && ele.trim() !== "") {

            let liDom = document.createElement("li");
            liDom.classList.add("li-questions");


            let liDomText = document.createTextNode(ele);
            liDom.appendChild(liDomText);


            let icon = document.createElement("i");
            let element = ele.trim();
            if (element === nowQuestions[currentIndex].isTrue.trim()) {
                icon.classList.add("fa-solid", "fa-check", "is-true");
            } else {
                icon.classList.add("fa-solid", "fa-x", "is-false");
            }


            icon.style.opacity = 0;
            icon.style.transition = "0.3s";


            liDom.appendChild(icon);


            ulDom.appendChild(liDom);

            checkWin(liDom, icon);
        }
    });


    contentQuestions.appendChild(ulDom);
}


createQuestions();



// Element Message Question
let elementMesg = document.createElement("p");
elementMesg.classList.add("message-question");





let countWin = document.querySelector(".count-win span");
countWin.textContent = currentWiner;
function checkWin(ele, icon){
    ele.addEventListener("click", () => {
        let message = document.createTextNode(nowQuestions[currentIndex].message);
        elementMesg.appendChild(message);
        if (ele.textContent.trim() === nowQuestions[currentIndex].isTrue.trim()){
            currentWiner++;
            countWin.textContent = currentWiner;
            // ele.style.backgroundColor = "#c8d7e3d1";
            ele.classList.add("ture-bg");
        } else{
            // ele.style.backgroundColor = "#ebd2d2d1";
            ele.classList.add("false-bg")
            console.log(false)
            contentQuestions.appendChild(elementMesg);
        }


        
        addAndRemoveClassPointer("add")
        icon.style.opacity = "1";
            nextQuestion.classList.remove("add-opacity");
            nextQuestion.disabled = false;
        nextQuestion.addEventListener("click", handleNextQuestion);
    })
}

function addDisabled (char){
    char === "add" ? (nextQuestion.disabled = true, nextQuestion.classList.add("add-opacity"))
    :
    (nextQuestion.disabled = false, nextQuestion.classList.remove("add-opacity"))
}



function handleNextQuestion() {
    if (currentIndex + 1 < nowQuestions.length) {
        currentIndex++;
        elementMesg.innerHTML = "";
        elementMesg.remove();
        countQuestions.textContent = `${currentIndex + 1}/${nowQuestions.length}`;
        addAndRemoveClassPointer("remove");
        addDisabled("add")
        questionDom.textContent = nowQuestions[currentIndex].question;

        Array.from(document.querySelectorAll(".li-questions")).forEach((ele, index) => {
            let nextContent = nowQuestions[currentIndex].questions[index];
            let currIcon = ele.querySelector("i");
            ele.style.backgroundColor = "#EEE";
            ele.innerHTML = "";
            ele.classList.remove("ture-bg");
            ele.classList.remove("false-bg");
            ele.appendChild(document.createTextNode(nextContent));

            console.log(ele);
            
            if (currIcon) {
                currIcon.className = "";
                ele.appendChild(currIcon);
            }
            checkTrueOrFalse();
        });
    } else {
        nextQuestion.disabled = true;
        nextQuestion.classList.add("add-opacity");
        questionDom.textContent = " أحسنت لقد انهيت اللعبة ";
        questionDomIcon.style.opacity = "0";
        document.querySelectorAll(".li-questions").forEach((e) => {
            e.style.opacity = "0";
        })
        elementMesg.remove();
    }
}

function checkTrueOrFalse (){
    const Questions = Array.from(document.querySelectorAll(".li-questions"));
    Questions.forEach((li) => {
        const iTag = li.querySelector("i");
        li.addEventListener("click", () => {
                if (li.textContent.trim() === nowQuestions[currentIndex].isTrue.trim()){
                    iTag.style.opacity = "1"
                    iTag.classList.add("fa-solid", "fa-check", "is-true");
                } else{
                    iTag.classList.add("fa-solid", "fa-x", "is-false");
                }
        })
    })
}

function addAndRemoveClassPointer(char){
    const liList  = document.querySelectorAll(".li-questions");
    liList.forEach((current) => {
        if (char === "add"){
            current.classList.add("pointer-none");
        } else if (char === "remove"){
            current.classList.remove("pointer-none");
        } else{
            current.classList.toggle("pointer-none");
        }
    })

}