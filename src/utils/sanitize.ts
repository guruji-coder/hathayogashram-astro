// Function to sanitize HTML content
export function sanitizeHTML(content: string): string {
  // Convert HTML entities
  const entityMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  // Replace HTML tags and entities
  return content.replace(/[&<>"'`=/]/g, (s) => entityMap[s]);
}

// Function to sanitize JSON for script tags
export function sanitizeJSON(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
}
