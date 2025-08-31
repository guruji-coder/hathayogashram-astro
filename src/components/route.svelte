<script lang="ts">
  import {
    CertificateCarousel,
    CourseCard,
    FaqSection,
    FocusCards,
    FounderSection,
    HeroCarousel,
    ReviewsSection,
  } from "$lib/components";
  import AppleCardsCarousel from "./ui/AppleCardsCarousel.svelte";
  import {
    APPLE_CARDS_SECTION,
    CERTIFICATIONS_SECTION,
    FOCUS_CARDS_SECTION,
    HOME_CONTENT,
    HOME_COURSES,
    HOME_GALLERY,
    HOME_HERO,
    HOME_HIGHLIGHTS,
    HOME_STYLES,
    OBJECTIVE_SECTION,
    TEACHERS_SECTION,
    TTC_COURSES_SECTION,
    YOGA_COURSES_CARDS_SECTION,
  } from "$lib/constants/homePageConstants";
  import { BUTTON_STYLES } from "$lib/constants/uiConstants";
  import { onMount } from "svelte";

  // Teachers carousel state
  let currentTeacher = 0;
  let innerWidth = 0;

  // Calculate how much to move based on screen size
  $: movePercentage =
    innerWidth >= 1024 ? 100 / 3 : innerWidth >= 768 ? 100 / 2 : 100;

  onMount(() => {
    // Simple auto-scroll every 5 seconds
    const interval = setInterval(() => {
      currentTeacher = (currentTeacher + 1) % TEACHERS_SECTION.TEACHERS.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<svelte:window bind:innerWidth />

<HeroCarousel />

<!-- Welcome Section with Decorative Styling 
<section class="{HOME_STYLES.SECTION_PADDING} bg-white">
  <div class={HOME_STYLES.CONTAINER}>
    <!-- Main Heading with Decorative Underline 
    <div class="mb-8 text-center">
      <h2 class={HOME_STYLES.HERO_TITLE}>
        {HOME_HERO.TITLE}
      </h2>

      <!-- Decorative Underline SVG 
      <div class="mb-6 flex justify-center">
        <svg
          width="200"
          height="20"
          viewBox="0 0 200 20"
          class="text-purple-900"
        >
          <path
            d="M10 10 Q 100 5 190 10"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <circle cx="100" cy="8" r="8" fill="currentColor" />
          <path d="M92 8 L96 12 L104 4 L108 8" fill="white" stroke="none" />
        </svg>
      </div>
    </div>

    <!-- Rating and Welcome Message 
    <div class="mb-8 text-center">
      <div class="mb-4 flex items-center justify-center">
        <span class={HOME_STYLES.RATING_NUMBER}>{HOME_HERO.RATING.STARS}</span>
        <i class="fas fa-star mr-2 text-xl text-yellow-400"></i>
        <span class={HOME_STYLES.RATING_TEXT}>{HOME_HERO.RATING.TEXT}</span>
      </div>
      <p class={HOME_STYLES.HERO_SUBTITLE}>
        {HOME_HERO.SUBTITLE}
      </p>
    </div>

    <!-- Highlight Boxes Grid 
    <div class={HOME_STYLES.HIGHLIGHT_GRID}>
      {#each HOME_HIGHLIGHTS as highlight (highlight.TEXT)}
        <div class={HOME_STYLES.HIGHLIGHT_BOX}>
          <i class="{highlight.ICON} {HOME_STYLES.HIGHLIGHT_ICON}"></i>
          <p class={HOME_STYLES.HIGHLIGHT_TEXT}>
            {highlight.TEXT}
          </p>
        </div>
      {/each}
    </div>

    <!-- Intro Paragraph 
    <div class="mx-auto max-w-6xl">
      <p class={HOME_STYLES.INTRO_PARAGRAPH}>
        {HOME_CONTENT.INTRO_PARAGRAPH}
      </p>
    </div>

    <!-- Two Column Layout: Content + Images 
    <div class="mx-auto max-w-6xl">
      <div class={HOME_STYLES.TWO_COLUMN_GRID}>
        <!-- Left Column: Description Paragraphs 
        <div class={HOME_STYLES.CONTENT_CONTAINER}>
          <!-- First Paragraph 
          <p class={HOME_STYLES.CONTENT_PARAGRAPH}>
            {HOME_CONTENT.PARAGRAPHS[0]}
          </p>

          <!-- Mobile Images (shown after first paragraph on mobile only) 
          <div class="lg:hidden {HOME_STYLES.IMAGE_GRID} mb-6">
            {#each HOME_GALLERY.IMAGES as image, index (index)}
              <div class={HOME_STYLES.IMAGE_ITEM}>
                <img
                  src={image}
                  alt="{HOME_GALLERY.ALT_TEXT} - Image {index + 1}"
                  class={HOME_STYLES.IMAGE_STYLING}
                  loading="lazy"
                />
              </div>
            {/each}
          </div>

          <!-- Remaining Paragraphs 
          {#each HOME_CONTENT.PARAGRAPHS.slice(1) as paragraph (paragraph)}
            <p class={HOME_STYLES.CONTENT_PARAGRAPH}>
              {paragraph}
            </p>
          {/each}

          <!-- Course Buttons 
          <div class={HOME_STYLES.COURSE_BUTTONS_CONTAINER}>
            {#each HOME_COURSES as course (course.TITLE)}
              <a
                href={course.URL}
                class="{BUTTON_STYLES.BASE} {BUTTON_STYLES.VARIANTS.PRIMARY}"
              >
                {course.TITLE}
              </a>
            {/each}
          </div>
        </div>

        <!-- Right Column: Image Gallery (desktop only) 
        <div class="hidden lg:block">
          <div class={HOME_STYLES.IMAGE_GRID}>
            {#each HOME_GALLERY.IMAGES as image, index (index)}
              <div class={HOME_STYLES.IMAGE_ITEM}>
                <img
                  src={image}
                  alt="{HOME_GALLERY.ALT_TEXT} - Image {index + 1}"
                  class={HOME_STYLES.IMAGE_STYLING}
                  loading="lazy"
                />
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Objective Section 
<section class="{HOME_STYLES.SECTION_PADDING} bg-yellow-50">
  <div class={HOME_STYLES.CONTAINER}>
    <!-- Main Heading with Decorative Underline 
    <div class="mb-12 text-center">
      <h2
        class="mb-4 text-xl font-bold text-purple-900 sm:text-2xl lg:text-3xl"
      >
        {OBJECTIVE_SECTION.TITLE}
      </h2>

      <!-- Decorative Underline SVG 
      <div class="mb-6 flex justify-center">
        <svg
          width="200"
          height="20"
          viewBox="0 0 200 20"
          class="text-purple-900"
        >
          <path
            d="M10 10 Q 100 5 190 10"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <circle cx="100" cy="8" r="8" fill="currentColor" />
          <path d="M92 8 L96 12 L104 4 L108 8" fill="white" stroke="none" />
        </svg>
      </div>
    </div>

    <!-- Content Paragraphs 
    <div class="mx-auto max-w-6xl space-y-6">
      {#each OBJECTIVE_SECTION.PARAGRAPHS as paragraph (paragraph)}
        <p
          class="text-justify text-sm leading-relaxed text-gray-700 sm:text-base"
        >
          {paragraph}
        </p>
      {/each}

      <!-- Mantras Grid 
      <div class="my-8 grid gap-4 sm:grid-cols-2">
        {#each OBJECTIVE_SECTION.MANTRAS as mantra (mantra.english)}
          <div class="flex items-start space-x-3">
            <i class="fas fa-om mt-1 flex-shrink-0 text-lg text-orange-500"></i>
            <div>
              <span class="font-semibold text-orange-600"
                >{mantra.sanskrit}</span
              >
              <span class="ml-2 text-gray-700">{mantra.english}</span>
            </div>
          </div>
        {/each}
      </div>

      <!-- Closing Text 
      <p
        class="mt-6 text-center text-sm font-medium leading-relaxed text-gray-700 sm:text-base"
      >
        {OBJECTIVE_SECTION.CLOSING_TEXT}
      </p>
    </div>

    <section class="{HOME_STYLES.SECTION_PADDING} ">
      <div class={HOME_STYLES.CONTAINER}>
        <!-- Section Header 

        <!-- Courses Grid 
        <div class="mx-auto max-w-6xl space-y-8">
          {#each TTC_COURSES_SECTION.COURSES as course (course.TITLE)}
            <div
              class="overflow-hidden rounded-xl border border-orange-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <!-- Course Card with Side-by-Side Layout 
              <div class="flex flex-col lg:flex-row">
                <!-- Course Image on Left - Small Square 
                <div class="lg:w-100 relative w-full flex-shrink-0">
                  <img
                    src={course.IMAGE}
                    alt={course.TITLE}
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <!-- Orange border frame 
                  <div
                    class="pointer-events-none absolute inset-2 rounded-lg border-2 border-orange-400"
                  ></div>
                </div>

                <!-- Course Content on Right 
                <div class="flex flex-col justify-between p-6 lg:flex-1 lg:p-8">
                  <div>
                    <!-- Location 
                    <p class="mb-2 text-sm font-medium italic text-gray-600">
                      {course.LOCATION}
                    </p>

                    <!-- Title 
                    <h3
                      class="mb-4 text-xl font-bold text-purple-900 lg:text-2xl"
                    >
                      {course.TITLE}
                    </h3>

                    <!-- Description 
                    <p
                      class="mb-6 text-justify text-sm leading-relaxed text-gray-700 lg:text-base"
                    >
                      {course.DESCRIPTION}
                    </p>
                  </div>

                  <!-- Read More Button 
                  <div class="flex justify-end">
                    <a
                      href={course.URL}
                      class="{BUTTON_STYLES.BASE} {BUTTON_STYLES.VARIANTS
                        .SECONDARY} border-2 border-purple-900"
                    >
                      {course.BUTTON_TEXT}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>
</section>

<!-- Certifications & Accreditations Section 
<section class="{HOME_STYLES.SECTION_PADDING} bg-white">
  <div class={HOME_STYLES.CONTAINER}>
    <!-- Section Header 
    <div class="mb-12 text-center">
      <h2
        class="mb-4 text-2xl font-bold text-purple-900 sm:text-3xl lg:text-4xl"
      >
        {CERTIFICATIONS_SECTION.TITLE}
      </h2>

      <!-- Decorative Underline SVG 
      <div class="mb-6 flex justify-center">
        <svg
          width="300"
          height="30"
          viewBox="0 0 300 30"
          class="text-purple-900"
        >
          <path
            d="M20 15 Q 150 8 280 15"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <g transform="translate(150, 15)">
            <path
              d="M-15,-8 Q-8,-12 0,-10 Q8,-12 15,-8 Q12,0 8,5 Q0,8 -8,5 Q-12,0 -15,-8 Z"
              fill="currentColor"
            />
            <path
              d="M-8,-5 L-4,-1 L4,-9 L8,-5"
              stroke="white"
              stroke-width="1.5"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>

    <!-- Content Paragraphs 
    <div class="mx-auto mb-12 max-w-4xl space-y-6">
      {#each CERTIFICATIONS_SECTION.PARAGRAPHS.slice(0, 4) as paragraph (paragraph)}
        <p
          class="text-justify text-base leading-relaxed text-gray-700 lg:text-lg"
        >
          {paragraph}
        </p>
      {/each}

      <!-- Yoga Alliance Logo after Guru-Shishya tradition paragraph 
      <div class="my-8 flex justify-center">
        <div
          class="h-full w-full transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/yoga-alliance-logo.png"
            alt="Yoga Alliance Certified School"
            class="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Remaining paragraphs after the logo 
      {#each CERTIFICATIONS_SECTION.PARAGRAPHS.slice(4) as paragraph}
        <p
          class="text-justify text-base leading-relaxed text-gray-700 lg:text-lg"
        >
          {paragraph}
        </p>
      {/each}
    </div>
  </div>
</section>

<!-- Founder Section 
<FounderSection />

<!-- Trusted Yoga Alliance Registered School Section 
<section
  class="relative flex min-h-screen items-center justify-center overflow-hidden py-16"
>
  <!-- Background Image with Overlay 
  <div
    class="trusted-yoga-alliance absolute inset-0 bg-cover bg-fixed bg-top"
    style="background-image: url('/bg-certificate.png'); background-size: cover; background-position: top; background-attachment: fixed;"
  ></div>

  <!-- Content 
  <div class="container relative z-10 mx-auto px-4 text-center text-white">
    <!-- Main Heading 
    <div class="mb-8">
      <h2 class="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
        Trusted Yoga Alliance Registered School
      </h2>

      <!-- Decorative Underline SVG 
      <div class="mb-8 flex justify-center">
        <svg width="300" height="30" viewBox="0 0 300 30" class="text-white">
          <path
            d="M20 15 Q 150 8 280 15"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <g transform="translate(150, 15)">
            <path
              d="M-15,-8 Q-8,-12 0,-10 Q8,-12 15,-8 Q12,0 8,5 Q0,8 -8,5 Q-12,0 -15,-8 Z"
              fill="currentColor"
            />
            <path
              d="M-8,-5 L-4,-1 L4,-9 L8,-5"
              stroke="white"
              stroke-width="1.5"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>

    <!-- Subtitle 
    <h3
      class="mb-8 text-xl font-semibold text-yellow-300 sm:text-2xl lg:text-3xl"
    >
      Certification for International Yoga Instructor
    </h3>

    <!-- Description Paragraphs 
    <div class="mx-auto mb-12 max-w-4xl space-y-6">
      <p class="text-base leading-relaxed lg:text-lg">
        Hatha Yoga Ashram in Rishikesh offers a comprehensive certification for
        becoming an International Yoga Instructor for 100-hour, 200-hour,
        300-hour, 500-hour YTTC courses along with short courses like Yin Yoga
        TTC, Prenatal YTTC, Sound Healing, Reiki Healing, Ayurveda and Aerial
        Yoga YTTC. Yoga Alliance, USA, recognizes us as we ensure higher and
        better education and training standards in Yoga.
      </p>
      <p class="text-base leading-relaxed lg:text-lg">
        Graduates from our Yoga School receive this certification, which marks
        their credibility and makes them eligible to teach worldwide. It opens
        great career opportunities for students and also fosters a global
        community of well-trained yoga practitioners who are appreciated for
        their work.
      </p>
    </div>

    <!-- Certification Cards Carousel 
    <CertificateCarousel />
  </div>
</section>

<!-- Reviews Section 
<ReviewsSection />

<!-- Best Yoga Teachers Section 
<section class="{HOME_STYLES.SECTION_PADDING} bg-white">
  <div class={HOME_STYLES.CONTAINER}>
    <!-- Section Header 
    <div class="mb-12 text-center">
      <h2
        class="mb-6 text-2xl font-bold text-purple-900 sm:text-3xl lg:text-4xl"
      >
        {TEACHERS_SECTION.TITLE}
      </h2>

      <!-- Decorative Underline SVG 
      <div class="mb-8 flex justify-center">
        <svg
          width="300"
          height="30"
          viewBox="0 0 300 30"
          class="text-purple-900"
        >
          <path
            d="M20 15 Q 150 8 280 15"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <g transform="translate(150, 15)">
            <path
              d="M-15,-8 Q-8,-12 0,-10 Q8,-12 15,-8 Q12,0 8,5 Q0,8 -8,5 Q-12,0 -15,-8 Z"
              fill="currentColor"
            />
            <path
              d="M-8,-5 L-4,-1 L4,-9 L8,-5"
              stroke="white"
              stroke-width="1.5"
              fill="none"
            />
          </g>
        </svg>
      </div>
    </div>

    <!-- Introduction Text 
    <div class="mx-auto mb-8 max-w-4xl text-center">
      <p class="mb-4 text-base leading-relaxed text-gray-700 lg:text-lg">
        {TEACHERS_SECTION.INTRO_PARAGRAPH}
      </p>
      <p class="text-base font-semibold text-purple-900 lg:text-lg">
        <span class="font-bold">Did you know?</span>
        {TEACHERS_SECTION.DID_YOU_KNOW}
      </p>
    </div>

    <!-- Simple Responsive Teachers Carousel 
    <div class="mx-auto max-w-6xl">
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-700 ease-in-out"
          style="transform: translateX(-{currentTeacher * movePercentage}%)"
        >
          {#each TEACHERS_SECTION.TEACHERS as teacher (teacher.name)}
            <div class="w-full flex-shrink-0 px-4 md:w-1/2 lg:w-1/3">
              <div class="text-center">
                <!-- Teacher Image 
                <div class="mx-auto mb-6 h-48 w-48">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    class="h-full w-full rounded-full border-4 border-orange-400 object-cover"
                    loading="lazy"
                  />
                </div>

                <!-- Teacher Info 
                <div class="space-y-3">
                  <h3 class="m-0 p-0 text-sm font-light text-orange-500">
                    {teacher.specialty}
                  </h3>
                  <h4 class="m-0 p-0 text-lg font-bold text-gray-900">
                    {teacher.name}
                  </h4>
                  <p class="m-0 p-0 text-gray-600">
                    {teacher.experience}
                  </p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Simple Dots Indicator 
      <div class="mt-8 flex justify-center space-x-3">
        {#each TEACHERS_SECTION.TEACHERS as _, index (_)}
          <div
            class="h-3 w-3 rounded-full transition-colors {index ===
            currentTeacher
              ? 'bg-orange-500'
              : 'bg-gray-300'}"
          ></div>
        {/each}
      </div>
    </div>

    <!-- Enroll Now Button 
    <div class="mt-12 text-center">
      <a
        href="/enroll"
        class="{BUTTON_STYLES.BASE} {BUTTON_STYLES.VARIANTS
          .PRIMARY} px-8 py-4 text-lg"
      >
        Enroll Now
      </a>
    </div>
  </div>
</section>

<!-- Yoga Teacher Training Courses Section 
<section
  class="{HOME_STYLES.SECTION_PADDING} bg-gradient-to-br from-purple-50 to-orange-50 font-space"
>
  <div class={HOME_STYLES.CONTAINER}>
    <!-- Section Title 
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-3xl font-bold text-purple-900 sm:text-4xl">
        {YOGA_COURSES_CARDS_SECTION.TITLE}
      </h2>
      <p class="mx-auto max-w-3xl text-lg text-gray-600">
        {YOGA_COURSES_CARDS_SECTION.SUBTITLE}
      </p>
    </div>

    <!-- Courses Grid 
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
    >
      {#each YOGA_COURSES_CARDS_SECTION.COURSES as course (course.id)}
        <CourseCard {course} />
      {/each}
    </div>

    <!-- Call to Action 
    <div class="mt-16 text-center">
      <p class="mb-6 text-lg text-gray-700">
        Ready to start your yoga journey? Contact us for more information.
      </p>
      <div class="flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="/contact"
          class="{BUTTON_STYLES.BASE} {BUTTON_STYLES.VARIANTS
            .PRIMARY} px-8 py-4 text-lg"
        >
          Contact Us
        </a>
        <a
          href="/courses"
          class="{BUTTON_STYLES.BASE} bg-orange-500 px-8 py-4 text-lg text-white transition-colors duration-200 hover:bg-orange-600"
        >
          View All Courses
        </a>
      </div>
    </div>
  </div>
</section>

<section class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
  <!-- Hero Section 
  <section class="py-20">
    <div class="container mx-auto px-4 text-center">
      <h1
        class="mb-4 font-space text-3xl font-bold text-purple-900 sm:text-4xl"
      >
        {APPLE_CARDS_SECTION.TITLE}
      </h1>
      <p class="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">
        {APPLE_CARDS_SECTION.SUBTITLE}
      </p>
    </div>
  </section>

  <!-- Apple Cards Carousel 
  <section class="py-10">
    <AppleCardsCarousel cards={APPLE_CARDS_SECTION.CARDS} />
  </section>
</section>

<iframe
  title="feedinstagram"
  src="https://app.mirror-app.com/feed-instagram/19bb8f51-1bbc-4709-bd36-10fb443f0c64/preview"
  style="width: 100%; height:700px; border: none;"
></iframe>

<!-- Focus Cards Gallery Section 
<section
  class="bg-gray-50 bg-gradient-to-br from-purple-100 to-purple-50 py-16"
>
  <div class="container mx-auto px-4">
    <!-- Section Header 
    <div class="mb-16 text-center">
      <h2
        class="mb-4 text-center text-3xl font-bold text-purple-900 md:text-4xl"
      >
        {FOCUS_CARDS_SECTION.TITLE}
      </h2>

      <div class="mb-6 flex justify-center">
        <svg
          width="200"
          height="20"
          viewBox="0 0 200 20"
          class="text-purple-900"
        >
          <path
            d="M10 10 Q 100 5 190 10"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <circle cx="100" cy="8" r="8" fill="currentColor" />
          <path d="M92 8 L96 12 L104 4 L108 8" fill="white" stroke="none" />
        </svg>
      </div>
    </div>

    <!-- Focus Cards Component 
    <FocusCards cards={FOCUS_CARDS_SECTION.CARDS} />
  </div>
</section>

<!-- FAQ Section 
<FaqSection />

<style>
  .trusted-yoga-alliance::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.52);
    z-index: 1;
  }
</style> -->
