import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "../stores/store";

type RootDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const UseRootDispatch = () => useDispatch<RootDispatch>();
export const UseRootSelector: TypedUseSelectorHook<RootState> = useSelector;
