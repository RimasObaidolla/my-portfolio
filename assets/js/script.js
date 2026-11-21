"use strict";

// =================================
// 1. PHOTO DATA
// =================================

const photos = [
    {
        title: "Misty",
        image: "misty.webp",
        description: `في أعالي الهدا، حيث تعانق الصخور السماء، وحيث يصبح الضباب أقرب من أي شيء آخر، وجدتني أمام مشهدٍ لا يشبه سواه.

كانت الجبال تختبئ خلف ستائر الضباب، وتتناثر الصخور على امتداد الطريق، بينما يسكن المكان هدوءٌ لا تقطعه إلا نسمات الهواء.

وقفت هناك، أراقب ما تخفيه الغيوم، وأتأمل جمال الأشياء حين لا تظهر كاملة. أدركت أن بعض المشاهد لا تحتاج إلى وضوحٍ كي تكون جميلة، وأن للغموض سحرًا لا تصفه الكلمات.

ولأن بعض المشاهد تستحضر أبياتًا من الذاكرة:`,
        poem: "يصافح نظرتي غبش الضباب",
        date: "٢٢ أغسطس ٢٠٢٤",
        location: "الهدا، المملكة العربية السعودية"
    },

    {
        title: "Bloom",
        image: "bloom.webp",
        description: `غريب كيف إن المكان يقدر يجمع بين الوحشة والجمال؛ بابٌ أنهكه الزمن، وبيتٌ سكنه الصمت، ووردٌ ما زال يزهر وكأن ما حوله ما تغيّر.
كأن الحياة أحيانًا تختار أجمل زواياها في الأماكن المنسيّة.

ذكّرتني هذه الزاوية بقولٍ عالق في ذاكرتي:`,
        poem: `شمال الحي والبيت القديم وغرب بيت الطين
نما ورد اللقى في - ساعة شردٍ ثوانيها`,
        date: "١٢ سبتمبر ٢٠٢٤",
        location: "الطائف، المملكة العربية السعودية"
    },

    {
        title: "Beginnings",
        image: "beginnings.webp",
        description: `لكل حلمٍ لحظة يولد فيها، ولعلّ هذه الصينية كانت أول ملامح حلمي وهو يرى النور.
كانت أول طلبية لمشروعي «مُدار سينابون»
بين عجينٍ يُخبز، وأمنيةٍ تكبر، بدأت حكاية صغيرة أتمنى أن تكبر معي وتزهر أكثر مما تخيلت.

وممّا استحضرته هذه البداية من الشعر:`,
        poem: `اللي معه حلم يسعى لأجل تحقيقه
ما فيه أحد حقّق أحلامه وهو قاعد`,
        date: "١٦ مايو ٢٠٢٥",
        location: "مكة المكرمة"
    },

    {
        title: "Warmth",
        image: "warmth.webp",
        description: `بعض الأيام جمالها ما يكون في تفاصيلها وبس، بل في الناس اللي يشاركونا إياها.
نسّقت هالطاولة بكل حب، وانبهرت بالنتيجة أكثر مما توقعت، لكن الأجمل كان فرحة أهلي واجتماعنا في ليلة امتلأت بالمحبة والامتنان.
الحمد لله على النعم اللي ما نملّ من حمده عليها، وعلى الوجوه اللي هي بهجة العمر.

وممّا تردّد في خاطري في تلك الليلة:`,
        poem: `لاحرمني الله من غلاكم ومنكم
والله يبعد ضيق الأيام عنكم

بدعي عسى الرحمن دوم يحفظكم
يابهجة الدنيا وياكل الإحساس`,
        date: "٣ أغسطس ٢٠٢٦",
        location: "مكة المكرمة"
    },

    {
        title: "Journeys",
        image: "journeys.webp",
        description: `وقفت أتأمل الطريق من علوّ، وأتابع أضواء السيارات وهي تمضي في مسارات مختلفة، وكل سيارة تحمل خلفها حكاية لا تشبه غيرها. وفكرت كيف أن لكل واحدٍ منا طريقًا كُتب له، وأيامًا وتفاصيل لا يعلمها إلا الله، نمضي فيها دون أن نعرف ما تخبئه لنا المنعطفات. سبحان من دبّر لكل نفسٍ قصتها، وجعل لكل طريقٍ نهاية وبداية.

وممّا استحضرته هذه اللحظة من الشعر:`,
        poem: `شد حيل الخطاوي فالطريق الطويل
لين تضحك لك الأيام وتضحك لها`,
        date: "٤ أغسطس ٢٠٢٦",
        location: "الهدا"
    },

    {
        title: "Moonlit",
        image: "moonlit.webp",
        description: `في بعض الليالي، يكون جمال السماء كافيًا ليخلّيك تنسى كل شيء حولك.
غيمٌ يعانق القمر، وطريقٌ تتلألأ أنواره بين الجبال، ومشهد تمنّيت لو أن اللحظة فيه تطول.

وممّا استحضرته هذه الليلة من الشعر:`,
        poem: `حي ليلٍ رافقه غيمْ وقمر
مثل القمر لازيّن الليل نوره`,
        date: "١٢ سبتمبر ٢٠٢٥",
        location: "الطائف"
    },

    {
        title: "Uncertainty",
        image: "uncertainty.webp",
        description: `كان الممر يمتد قدامي، وعلى آخره بحرٌ ينتظرني.
أمشي باتجاهه وأتأمل كيف إن بعض الطرق، مهما طالت، تقودنا إلى شيء جميل.
لكن أفكارنا أحيانًا تسبق خطواتنا، ونظل نتساءل عمّا تخبئه لنا بقية الطريق.

وممّا استحضرته هذه اللحظة من الشعر:`,
        poem: `أخاف أمشي عمر تلو العمر لدروب مجهوله
وأخاف تموت آمالي وتتلاشى أهم أشيائي`,
        date: "٣٠ يناير ٢٠٢٦",
        location: "شاطئ المانجروف، جدة"
    },

    {
        title: "Beloved",
        image: "beloved.webp",
        description: `ما كانت مجرّد بطانية أنسجها بيدي، كانت قطعة من فرحتي بقدوم روحٍ انتظرتها بمحبة.
سبقت هديتي لقاءنا، ولففتها كأنها باقة ورد، تليق بزهرةٍ جديدة جاءت لتزيد البيت بهجة، والقلوب حبًا.
أحببتها قبل أن أرى عينيها، وكأن محبتي لها امتدادٌ لمحبتي لأمها.
الحمد لله الذي أتمّ فرحتنا، وأقرّ أعيننا بسلامتهما.

وممّا استحضرته هذه الفرحة من الشعر:`,
        poem: `إنّ البيوتَ إذا البناتُ نزلْنَها
مثلُ السماءِ تزيّنتْ بنجومِها`,
        date: "٢١ يونيو ٢٠٢٥",
        location: "مكة المكرمة"
    },

    {
        title: "Euphoria",
        image: "euphoria.webp",
        description: `في الأعياد، تكبر فرحتنا بلمة أحبابنا، وتصبح أبسط التفاصيل ذكرى نحتفظ فيها طويلًا.
الحمد لله على وجوهٍ نحبها، وقلوبٍ تجتمع حولنا، وعلى نعمة الأهل التي لا يُدرك عظمها إلا من عرف قيمتها.
وبين ضحكات العيد ولمّة الأحباب، كان للقلب دعاء لا يغيب، وأمنية بأن تصل فرحة هذا العيد إلى من اشتقنا لها.

وممّا ردّده قلبي في تلك اللحظة:`,
        poem: "عسى عيدك بالجنة أجمل يا يمّه.",
        date: "٣٠ مايو ٢٠٢٦",
        location: "مكة المكرمة"
    },

    {
        title: "Everlasting",
        image: "everlasting.webp",
        description: `بعض اللقاءات تعلّمنا إن المسافات ما تغيّر صدق المحبة، وإن فيه أشخاص مهما طال الغياب عنهم، نرجع لهم وكأننا ما افترقنا يوم.
خمس سنين مرّت، لكن دفء اللقاء كان مألوفًا، والحديث كأن الأيام ما أخذت منّا شيئًا.
ولعلّ أجمل الأرزاق صديقٌ يبقى أصيل الود، لا يغيّره طول الغياب ولا تقلّل منه المسافات.

وممّا استحضرته تلك الجلسة:`,
        poem: `عاشر أصيل كل ما طال الزمان يجود
لو صابتك نايبه باع العمر وشراك`,
        date: "٢٤ أبريل ٢٠٢٦",
        location: "مكة المكرمة"
    }
];


// =================================
// 2. START WEBSITE
// =================================

document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.getElementById("gallery-grid");

    const modal = document.getElementById("photo-modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalPoem = document.getElementById("modal-poem");
    const modalDate = document.getElementById("modal-date");
    const modalLocation = document.getElementById("modal-location");
    const closeModalButton = document.getElementById("close-modal");

    if (!gallery || !modal || !modalImage || !closeModalButton) {
        console.error("Some website elements could not be found.");
        return;
    }


    // =================================
    // 3. CREATE GALLERY
    // =================================

    photos.forEach((photo, index) => {

        const item = document.createElement("div");
        item.className = "gallery-item";

        item.setAttribute("role", "button");
        item.setAttribute("tabindex", "0");
        item.setAttribute("aria-label", `Open ${photo.title}`);

        const image = document.createElement("img");

        image.src = `assets/images/${photo.image}`;
        image.alt = photo.title;
        image.loading = "lazy";
        image.decoding = "async";

        const overlay = document.createElement("div");
        overlay.className = "gallery-overlay";

        const title = document.createElement("h3");
        title.textContent = photo.title;

        overlay.appendChild(title);

        item.appendChild(image);
        item.appendChild(overlay);

        gallery.appendChild(item);


        // =================================
        // 4. OPEN PHOTO DETAILS
        // =================================

        function openPhoto() {

            modalImage.src = image.src;
            modalImage.alt = photo.title;

            modalTitle.textContent = photo.title;
            modalDescription.textContent = photo.description;
            modalPoem.textContent = photo.poem;
            modalDate.textContent = `التاريخ: ${photo.date}`;
            modalLocation.textContent = `المكان: ${photo.location}`;

            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");

            document.body.classList.add("modal-open");

            closeModalButton.focus();

        }

        item.addEventListener("click", openPhoto);

        item.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPhoto();
            }

        });

    });


    // =================================
    // 5. CLOSE MODAL
    // =================================

    function hideModal() {

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        modalImage.src = "";
        modalImage.alt = "";

    }

    closeModalButton.addEventListener("click", hideModal);


    // Close when clicking outside the content
    modal.addEventListener("click", (event) => {

        if (event.target === modal) {
            hideModal();
        }

    });


    // Close with Escape key
    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape" && modal.classList.contains("active")) {
            hideModal();
        }

    });


    // =================================
    // 6. READY
    // =================================

    console.log("Remas Photography Archive is ready!");
    console.log(`${photos.length} photos loaded successfully.`);

});