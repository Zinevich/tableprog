<template>
  <div class="hello">
    <ElInput
            id="filter"
            placeholder="search"
            type="text"
            v-model="texted"
    ></ElInput>
    <ElTable
            :data="tableData"
            border
            height="500"
            highlight-current-row
            stripe
    >
      <ElTableColumn
              type="index"
              width="40"
      ></ElTableColumn>
      <ElTableColumn
              label="Name"
              prop="name"
      ></ElTableColumn>
      <ElTableColumn
              label="Description"
              prop="description"
      ></ElTableColumn>
      <ElTableColumn
              label="URL"
              prop="url"
      ></ElTableColumn>
      <ElTableColumn
              label="Repository"
              prop="repository"
      ></ElTableColumn>
      <ElTableColumn
              label="Downloads"
              prop="downloads"
      ></ElTableColumn>
      <ElTableColumn
              label="Favers"
              prop="favers"
      ></ElTableColumn>
    </ElTable>
    <div>
      <ElPagination
              id="pagination"
              background
              layout="prev, pager, next"
              @current-change="handlePageChange"
              :total="total"
              :page-size="15"
      >
      </ElPagination>
      <ElRow>

      </ElRow>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex';
export default {
  name: 'HelloWorld',
  data() {
    return {
      nextPage: 1,
      texted: '',
    }
  },
  computed: {
      ...mapState(['tableData', 'total']),
    // totalTvCount() {
    //   return this.$store.state.totalTvCount
    // },
      // eslint-disable-next-line vue/return-in-computed-property

  },
  watch: {
    texted(newValue) {
      this.loadPackage({page: 1, query: newValue})

    }
  },
  methods: {
      handlePageChange(nextPage) {
          this.loadPackage({page: nextPage, query: this.texted})
      },
    // loadPackage(nextPage) {
    //   return this.$store.state.loadPackage(nextPage)
    //   // axios
    //   //         .get(`https://packagist.org/search.json?q=${this.texted}&page=${nextPage}`)
    //   //         .then((response) => {
    //   //           this.tableData = response.data.results;
    //   //           this.total = response.data.total;
    //   //         })
    // },
      ...mapActions(['loadPackage'])
  },
  created() {
    this.loadPackage({page: 1, query: ''});
  }
}
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
#filter {
  margin-bottom: 2em;
  height: 2,1em;
  width: 25em;
}
#pagination {
  margin-top: 1em;
}
</style>
