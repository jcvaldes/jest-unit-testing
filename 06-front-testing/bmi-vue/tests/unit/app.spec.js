import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/vue";

import App from "@/App.vue";

beforeEach(() => {
  render(App);
});

test("renders calculator title", () => {
  const linkElement = screen.getByText(/bmi calculator/i);
  expect(linkElement).toBeInTheDocument();
});
test("calculate thinness result", async () => {
  // act
  const weightEl = screen.getByLabelText("Weight (KG)");
  const heightEl = screen.getByLabelText("Height (M)");
  const sendBtnEl = screen.getByRole("button", { name: /send/i });
  weightEl.value = "50";
  heightEl.value = "1.70";

  // arrange
  fireEvent.click(sendBtnEl);

  const bmiResult = await screen.findByText(/bmi: 17.30/i);
  const bmiEstimation = await screen.findByText(/bmi estimation: thinness/i);
  // screen.debug();
  // assert
  expect(bmiResult).toBeInTheDocument();
  expect(bmiEstimation).toBeInTheDocument();
});
test('calculate normal result', async () => {
  // act
  const weightEl = screen.getByLabelText('Weight (KG)')
  const heightEl = screen.getByLabelText('Height (M)')
  const sendBtnEl = screen.getByRole('button', {name: /send/i})
  weightEl.value = '60'
  heightEl.value = '1.70'

  // arrange
  fireEvent.click(sendBtnEl)
  const bmiResult = await screen.findByText(/bmi: 20.76/i)
  const bmiEstimation = await screen.findByText(/bmi estimation: normal/i)
  
  // assert
  expect(bmiResult).toBeInTheDocument()
  expect(bmiEstimation).toBeInTheDocument()
})
test('calculate overweight result', async () => {
  // act
  const weightEl = screen.getByLabelText('Weight (KG)')
  const heightEl = screen.getByLabelText('Height (M)')
  const sendBtnEl = screen.getByRole('button', {name: /send/i})
  weightEl.value = '80'
  heightEl.value = '1.70'

  // arrange
  fireEvent.click(sendBtnEl)
  const bmiResult = await screen.findByText(/bmi: 27.68/i)
  const bmiEstimation = await screen.findByText(/bmi estimation: overweight/i)
  
  // assert
  expect(bmiResult).toBeInTheDocument()
  expect(bmiEstimation).toBeInTheDocument()
})
test('calculate obese result', async () => {
  // act
  const weightEl = screen.getByLabelText('Weight (KG)')
  const heightEl = screen.getByLabelText('Height (M)')
  const sendBtnEl = screen.getByRole('button', {name: /send/i})
  weightEl.value = '105'
  heightEl.value = '1.70'

  // arrange
  fireEvent.click(sendBtnEl)

  // muestra el html
  // screen.debug()
  const bmiResult = await screen.findByText(/bmi: 36.33/i)
  const bmiEstimation = await screen.findByText(/bmi estimation: obese/i)
  
  // assert
  expect(bmiResult).toBeInTheDocument()
  expect(bmiEstimation).toBeInTheDocument()
})