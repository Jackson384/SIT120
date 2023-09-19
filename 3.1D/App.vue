<template>
  <div id="app">
    <div class="container">
      <div
        class="calculator"
        :style="{ left: offsetX + 'px', top: offsetY + 'px' }"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="stopDrag"
        @mouseleave="stopDrag"
      >
        <div class="display">{{ result }}</div>
        <div class="buttons">
          <button
            v-for="(button, index) in buttons"
            :key="index"
            @click="handleClick(button)"
          >
            {{ button }}
          </button>
          <button @click="clear">C</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: '0',
      currentInput: '',
      operatorClicked: false,
      isDragging: false,
      offsetX: 0,
      offsetY: 0,
      initialX: 0,
      initialY: 0,
    };
  },
  computed: {
    buttons() {
      return [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'sin', 'cos', 'tan', 'ln', 'sqrt', '(', ')'
      ];
    },
  },
  methods: {
    handleClick(button) {
      if (button === '=') {
        this.calculateResult();
      } else if (button === 'sin') {
        this.applyFunction('Math.sin');
      } else if (button === 'cos') {
        this.applyFunction('Math.cos');
      } else if (button === 'tan') {
        this.applyFunction('Math.tan');
      } else if (button === 'ln') {
        this.applyFunction('Math.log');
      } else if (button === 'sqrt') {
        this.applyFunction('Math.sqrt');
      } else if (button === '(' || button === ')') {
        this.addToInput(button);
      } else {
        this.addToInput(button);
      }
    },
    applyFunction(func) {
      if (this.result !== '0') {
        this.currentInput = `${func}(${this.currentInput})`;
        this.result = eval(this.currentInput);
        this.operatorClicked = true;
      }
    },
    addToInput(value) {
      if (value === 'C') {
        this.clear();
      } else {
        if (this.result === '0' || this.operatorClicked) {
          this.currentInput = value;
          this.operatorClicked = false;
        } else {
          this.currentInput += value;
        }
        this.result = this.currentInput;
      }
    },
    calculateResult() {
      try {
        this.result = eval(this.currentInput);
        this.operatorClicked = true;
      } catch (error) {
        this.result = 'Error';
      }
    },
    clear() {
      this.result = '0';
      this.currentInput = '';
      this.operatorClicked = false;
    },
    startDrag(event) {
      this.isDragging = true;
      this.initialX = event.clientX - this.offsetX;
      this.initialY = event.clientY - this.offsetY;
    },
    drag(event) {
      if (this.isDragging) {
        event.preventDefault();
        this.offsetX = event.clientX - this.initialX;
        this.offsetY = event.clientY - this.initialY;
      }
    },
    stopDrag() {
      this.isDragging = false;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #3498db, #e74c3c);
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.calculator {
  width: 320px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: absolute;
  cursor: grab;
}

.display {
  font-size: 32px;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  padding: 20px;
}

button {
  font-size: 24px;
  padding: 15px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #dcdcdc;
}
</style>
