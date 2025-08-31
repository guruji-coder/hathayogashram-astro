<script lang="ts">
  interface Props {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    class?: string;
    children: any;
    onclick?: () => void;
  }

  const {
    variant = "primary",
    size = "md",
    href,
    type = "button",
    disabled = false,
    class: className = "",
    children,
    onclick,
  }: Props = $props();

  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: "bg-primary text-white hover:bg-orange-600 focus:ring-orange-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    outline:
      "border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white focus:ring-orange-500",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? disabledClasses : ""} ${className}`;
</script>

{#if href}
  <a {href} class={classes} role="button">
    <slot />
  </a>
{:else}
  <button {type} {disabled} class={classes} {onclick}>
    <slot />
  </button>
{/if}
