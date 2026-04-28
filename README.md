## install redux

`npm i react-redux`

## install reduxjs toolkit

`npm i @reduxjs/toolkit`

## (or) together

`npm i react-redux @reduxjs/toolkit`

## inside app create store.ts

- configureStore with reducer

## create slices folder and create new slice file

- createSlice with name, initialState and reducers functions
- reducers function have state and action properties
- action has payload
- export reducers using actions
  `example: export const { addUser, deleteUser } = userSlice.actions;`

- export defaul slice with reducer
  `example: export default userSlice.reducer;`

## on viewing page

- useSelector with state, slice name, and store reducer name
  `example: const users = useSelector((state: RootState) => state.userInfo.users);`

## on sending page

- useDispatch
  `example: const dispatch = useDispatch();`
  ```example: const handleDelete = (index: number) => {
    dispatch(deleteUser(index));
  };
  ```
