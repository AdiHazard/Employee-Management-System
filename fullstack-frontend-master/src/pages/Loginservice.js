import HttpCommon from "./HttpCommon";
const create = data => {
    return HttpCommon.post("/login", data);
}

export { create };