<script lang="ts">
  export let title: string;
  export let links: { label: string; href: string }[];
  export let className: string = "";
</script>

<div class="link-list {className}">
  <h3 class="mb-4 text-xl font-bold text-white">{title}</h3>
  <ul class="space-y-2">
    {#each links as link}
      <li>
        <a
          href={link.href}
          class="block rounded-full border border-gray-600 bg-white px-3 py-2 text-black transition-colors hover:border-orange-400 hover:bg-gray-600"
          target={link.href.startsWith("http") ? "_blank" : "_self"}
          rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
  .link-list ul li a {
    display: block;
    padding: 2px 0;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .link-list ul li a:hover {
    padding-left: 8px;
    color: #fb923c; /* orange-400 */
  }
</style>
