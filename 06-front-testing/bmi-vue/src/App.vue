<template>
  <div id="app">
    <h1>BMI Calculator</h1>
    <h2 v-if="bmi">BMI: {{ bmi }}</h2>
    <h2 v-if="bmiEstimation">BMI Estimation: {{bmiEstimation.toLocaleString()}}</h2>
    
    <form @submit="handleSubmit">
      <div>
        <label for="weight">Weight (KG)</label>
        <input id="weight" />
      </div>
      <div>
        <label for="height">Height (M)</label>
        <input id="height" />
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bmi: null,
      bmiEstimation: null,
    };
  },
  methods: {
    calculateBmi({ weight, height }) {
      return weight / (height * height);
    },
    calculateBmiEstimaion({ bmi }) {
      if (bmi <= 18.5) {
        return "Thinness";
      }
      if (bmi > 18.5 && bmi <= 24.9) {
        return "Normal";
      }
      if (bmi > 24.9 && bmi <= 29.9) {
        return "Overweight";
      }
      return "Obese";
    },
    handleSubmit(e) {
      e.preventDefault();
      const { height, weight } = e.target.elements;
      const bmi = this.calculateBmi({
        weight: weight.value,
        height: height.value,
      });
      const bmiEstimation = this.calculateBmiEstimaion({ bmi });
      this.bmi = Number(bmi).toFixed(2);
      this.bmiEstimation = bmiEstimation;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
