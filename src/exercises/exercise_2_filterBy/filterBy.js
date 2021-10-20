export default function filterBy(data, searchTerm, keys) {
  const lower = searchTerm.toLowerCase()
  return data.filter((el) => {
    return keys.some((key) => el[key].toLowerCase().includes(lower))
  })
}
