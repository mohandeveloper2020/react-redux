## install redux

`npm i react-redux`

## install reduxjs toolkit

`npm i @reduxjs/toolkit`

## (or) together

`npm i react-redux @reduxjs/toolkit`

## inside app create store.ts

- configureStore with reducer

example:

```
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userInfo: userSlice,
  },
});

export default store;
```

## create slices folder and create new slice file

- createSlice with name, initialState and reducers functions
- reducers function have state and action properties
- action has payload
- export reducers using actions
- export defaul slice with reducer

  example:

  ```
  import { createSlice } from "@reduxjs/toolkit";

  export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
      addUser: (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      },
      deleteUser: (state, action: PayloadAction<number>) => {
        state.users = state.users.filter(
          (user, index) => index !== action.payload
        );
      },
    },
  });
  ```

export const { addUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;

```

## on viewing page use hook

- useSelector with state, slice name, and store reducer name

example:

```

const users = useSelector((state: RootState) => state.userInfo.users);

```

## on sending page use hook

- useDispatch

example:

```

const dispatch = useDispatch();
const handleDelete = (index: number) => {dispatch(deleteUser(index));};

```

```
