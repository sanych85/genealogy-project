export const validation = (length, type, minValue)=> {
    const getMaxLength = ()=> {
        if(length<minValue) {
            return {
                type:"error",
                errorMessage:"your name is too short"
            }
        }
        return {
            type:""
        }
    }
    getMaxLength()
}

