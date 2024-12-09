import { test, expect } from '@playwright/test';

test.describe('DEMO QA FORM PAGE', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/automation-practice-form');
        await expect(page.locator('h1.text-center')).toContainText('Practice Form');
    });

    test.describe('POSITIVE TESTS', () => {
        test('Fill in all fields with valid data and submit', async ({ page }) => {
            await page.locator('#firstName').fill('Maria');
            await page.locator('#lastName').fill('Sanmina');
            await page.locator('#userEmail').fill('mariasanmina@example.com');

            await page.locator('[for="gender-radio-2"]').check();
            await page.locator('#userNumber').fill('111222333444');

            await page.locator('#dateOfBirthInput').click();
            await page.locator('.react-datepicker__month-select').selectOption({ label: 'March' });
            await page.locator('.react-datepicker__year-select').selectOption({ label: '1990' });
            await page
                .getByRole('listbox', { name: 'month 1990-03' })
                .locator('div.react-datepicker__day--015')
                .click();
        });
    })
});