<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Count: {{counter * 10}}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { add } from "lodash";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "My 'interesting' counter",
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter = add(this.counter, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
