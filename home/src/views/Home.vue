<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h3>VueJS Examples</h3>
    <ul>
      <li v-for="(project, i) in projects" :key="i">
        <a class="code" :href="project.url">{{project.name}}</a>
        <a class="code code-repo" :href="project.repo" target="_blank">(GitHub)</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      projects: []
    }
  },
  created() {
    this.projects = [
      {
        name: 'VueJS Home',
        url: 'https://gee.dev',
        repo: 'https://github.com/geescot/vuejs-examples/home'
      },
      {
        name: 'VueJS Components',
        url: 'https://vuejs-components.gee.dev',
        repo: 'https://github.com/geescot/vuejs-examples/components'
      },
      {
        name: 'VueJS Lodash',
        url: 'https://vuejs-lodash.gee.dev',
        repo: 'https://github.com/geescot/vuejs-examples/lodash'
      },
      {
        name: 'VueJS SVG',
        url: 'https://vuejs-svg.gee.dev',
        repo: 'https://github.com/geescot/vuejs-examples/svg'
      },
      {
        name: 'VueJS Vuex',
        url: 'https://vuejs-vuex.gee.dev',
        repo: 'https://github.com/geescot/vuejs-examples/vuex'
      },
      {
        name: 'VueJS Vuex Storage',
        url: 'https://vuejs-vuex-storage.gee.dev',
        repo: 'https://github.com/geescot/vuejs-examples/vuex-storage'
      }
    ];
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
ul {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-align: left;

  list-style-type: none;
  background-color: #eaeaea;

  box-shadow: 5px 5px #595959;
  border-top: thin solid #d81159;
}

li {
  padding-top: 4px;
  padding-bottom: 4px;
}

.code {
  color: black;
  text-decoration: none;

  &-repo {
    float: right;
  }
}
</style>
