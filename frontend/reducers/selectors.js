export const getAllNotebooks = ({ entities: { notebooks } } = {} ) => {
  debugger
  return Object.keys(notebooks).map(id => notebooks[id])
}