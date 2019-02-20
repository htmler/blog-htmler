export default {
    state: {//state
        token: window.sessionStorage.getItem('token'),
        username: window.sessionStorage.getItem('username'),
    },
    mutations: {
        LOGIN: (state, data) => {
            //更改token的值
            state.token = data;
            window.sessionStorage.setItem('token', data);
        },
        LOGOUT: (state) => {
            //登出的时候要清除token
            state.token = null;
            window.sessionStorage.removeItem('token');
            state.username = null;
            window.sessionStorage.removeItem('username');
        },
        USERNAME: (state, data) => {
            //把用户名存起来
            state.username = data;
            window.sessionStorage.setItem('username', data);
        }
    },
    actions: {
        UserLogin({ commit }, data) {
            commit('LOGIN', data);
        },
        UserLogout({ commit }) {
            commit('LOGOUT');
        },
        UserName({ commit }, data) {
            commit('USERNAME', data);
        }
    }
}