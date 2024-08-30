const zod = require("zod");

const register = zod.object({
    username:zod.string(),
    rollnumber:zod.string(),
    year:zod.string(),
    section:zod.string()
})

module.exports={
    register
}