export const prerender = true;

// Redirect from simple /200-hour-ttc to SEO-friendly URL
export async function GET() {
  return new Response(null, {
    status: 301,
    headers: {
      Location: '/courses/200-hour-yoga-teacher-training-rishikesh',
    },
  });
}
