const { test, expect } = require('@playwright/test');

test('should validate homepage API response', async ({ request }) => {

    const response = await request.get('/');
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const headers = response.headers();
    expect(headers).toHaveProperty('content-type');
    expect(headers['content-type']).toContain('text/html');

    const body = await response.text();
    expect(body).toContain('<html');
    expect(body).toContain('avanade');

});