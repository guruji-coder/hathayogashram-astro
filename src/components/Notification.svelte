<script lang="ts">
  let visible = true;

  function closeNotification() {
    visible = false;
  }
</script>

{#if visible}
  <div class="relative bg-orange-500 py-2 text-center text-white">
    <p class="mb-0">
      FREE TRIAL - Online 200 Hour Yoga Teacher Training Course
      <strong>
        <a
          href="https://courses.vinyasayogashala.com/courses/free-trail"
          class="ml-2 text-white underline transition-colors hover:text-orange-100"
          target="_blank"
        >
          Know More
        </a>
      </strong>
    </p>
    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 transform font-bold text-white transition-colors hover:text-orange-100"
      onclick={closeNotification}
    >
      ×
    </button>
  </div>
{/if}
