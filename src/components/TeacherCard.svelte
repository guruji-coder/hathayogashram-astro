<script lang="ts">
  export let teacher: {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    image: string;
  };
</script>

<div class="w-full px-4 text-center">
  <div class="bg-white p-6">
    <div
      class="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-orange-300"
    >
      <img
        src={teacher.image}
        alt={teacher.name}
        class="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
    <p class="text-primary font-light">{teacher.specialty}</p>
    <p class="font-semibold text-black">{teacher.name}</p>
    <p class="text-xs font-light text-gray-600">{teacher.experience}</p>
  </div>
</div>
