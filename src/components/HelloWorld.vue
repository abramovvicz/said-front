<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h4>SAID APP</h4>
    <!-- <h2>{{ name }}</h2>
    <div class="row" v-for="t in tasks" v-bind:key="t.action">
      <div class="col">{{t.action}}</div>
      <div class="col">{{t.done}}</div>
    </div>
    <div>
      <span
        v-for="item in map"
        :key="item.id"
      ></span>
    </div>
    <button class="btn" v-on:click="getMeasruement"> SOME BUTTON </button>-->
  </div> 
</template>

<script>
const url = "http://localhost:9092/measurements/";
export default {
  data() {
    return {
      name: "DUPA",
      tasks: [
        { action: "Zrób cos chuju", done: false },
        { action: "Nie rób cos chuju", done: false },
      ],
      flag:false,
      measurements:[],
      map:new Map(),
      item:""
    };
  },
  computed:{
    chagneFlag(){
      return this.flag?this.tasks.filter(t=> !t.done):this.tasks
    }
  },
  methods:{
      getMeasruement(){
        this.map = new Map()
        this.$http.get(url).then((response)=>{
          response.data.result.forEach(item => this.map.set(item.id, item.name));
        })
      }
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
