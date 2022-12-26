export default function middlewareEnhancer(storeAPI) {
    return function wrapDispatch(next) {
        return function handleAction(action) {
            console.log(`${action.type} just in case!`)
            console.log(action)

            return next(action)
        }
    }
}
