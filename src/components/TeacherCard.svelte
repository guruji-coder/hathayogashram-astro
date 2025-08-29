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
		<div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-300">
			<img
				src={teacher.image}
				alt={teacher.name}
				class="w-full h-full object-cover"
				loading="lazy"
			/>
		</div>
		<p class="font-light text-primary">{teacher.specialty}</p>
		<p class="font-semibold text-black ">{teacher.name}</p>
		<p class="text-gray-600 text-xs  font-light">{teacher.experience}</p>
	</div>
</div>
