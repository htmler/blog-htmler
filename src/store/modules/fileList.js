export default {
    state:{//state
        show:false
    },
    mutations:{
        switch_dialog(state){//这里的state对应着上面这个state
            state.show = state.show?false:true;
            //你还可以在这里执行其他的操作改变state
        }
    },
    action:{
        switch_dialog({commit},payload){
            commit({
                type:'switch_dialog',
            })
        }
    }
}