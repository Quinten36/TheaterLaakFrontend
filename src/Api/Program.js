import { get, destroy as des } from "./Api";

const route = "Program";

export const all = () => get(route);
export const destroy = (id) => des(route, id);