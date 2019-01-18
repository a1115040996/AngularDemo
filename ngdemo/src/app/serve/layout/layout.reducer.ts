import * as layout from './layout.actions'

export interface State {
  /*
   界面状态的描述符接口定义
   */
}

const initialState: State = {
  /*
   界面状态在这里进行值的初始化
   */
};

/*
 reducer 的主控函数，在状态改变的时候返回新的 state
 */
export function reducer(state = initialState, action: layout.LayoutActions): State {
  switch(action.type) {
    default: return state;
  }
}

