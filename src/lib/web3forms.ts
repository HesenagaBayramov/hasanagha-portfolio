export async function submitContact(form: FormData): Promise<{ ok: boolean }> {
  return sendContact(form, import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY);
}

export async function sendContact(form: FormData, key: string | undefined, fetcher: typeof fetch = fetch, timeoutMs = 12000): Promise<{ ok: boolean }> {
  if (!key || form.has('botcheck')) return { ok: false };
  const payload = new FormData();
  payload.set('access_key', key);
  for (const field of ['name', 'email', 'message']) payload.set(field, String(form.get(field) ?? ''));
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetcher('https://api.web3forms.com/submit', { method: 'POST', body: payload, signal: controller.signal });
    const body: { success?: boolean } = await response.json();
    return { ok: response.ok && body.success === true };
  } catch {
    return { ok: false };
  } finally {
    clearTimeout(timeout);
  }
}
