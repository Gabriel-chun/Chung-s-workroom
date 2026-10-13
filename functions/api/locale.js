/* Cloudflare Pages Function — returns only coarse locale, never the visitor IP. */
export async function onRequestGet({request}) {
  const country = request.cf?.country || '';
  const lang = ['TW','HK','MO','CN','SG'].includes(country) ? 'zh' : 'en';
  return new Response(JSON.stringify({lang}), {
    headers: {'content-type':'application/json; charset=utf-8','cache-control':'private, no-store','x-content-type-options':'nosniff'}
  });
}
