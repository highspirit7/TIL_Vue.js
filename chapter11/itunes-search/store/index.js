/*
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      albums: []
    },
    mutations: {
      add (state, payload) {
        state.albums = payload;
      }
    }
  })
}

export default createStore
*/

// Vuex 스토어를 모듈화해서 사용하려면 Nuxt는 아래와 같은 방식으로 코딩하는것을 가이드하고 있다. 위 방법으로 스토어 인스턴스를 만드는 것은 deprecated되었다.

// state도 메소드처럼 함수의 형태로 작성해야 한다.
export const state = () => ({
  albums: []
});

export const mutations = {
  add(state, payload) {
    state.albums = payload;
  }
};
