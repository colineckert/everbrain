export const getAllNotebooks = ({ entities: { notebooks } } ) => {
  return Object.keys(notebooks).map(id => notebooks[id])
}
