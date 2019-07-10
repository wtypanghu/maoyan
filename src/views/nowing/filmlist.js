import axios from 'axios'
export default{
  namespaced:true,
  state: {
    films:[]
  },
  mutations: {
      getFilms(state,list){
            state.films = list
      }
  },
  actions: {
      getFilm(context){
        axios.get("/mz/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5100803",
        {'headers':{
          "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"156198774051539608844"}`,
          "X-Host": `mall.film-ticket.film.list`
        }}).then((res)=>{
          context.commit("getFilms",res)
        })
      }
  }
}