import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  await expect(
    page.getByRole('heading', { name: 'Key Usage Sample' })
  ).toBeVisible()
})

test('count up', async ({ page }) => {
  await expect(page.getByText('現在のカウントは「0」です。')).toBeVisible()

  await page.getByRole('button', { name: 'Count UP!' }).click()

  await expect(page.getByText('現在のカウントは「0」です。')).toBeVisible()
})
