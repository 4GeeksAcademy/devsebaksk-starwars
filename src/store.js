export const initialStore = () => {
  return {
    people: [],
    favorites: [],
    planets: [],
    vehicles: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_people_data':

      const  personajes  = action.payload;
      return {
        ...store,
        people: [...personajes]
      }
     case 'set_planet_data':
      const  planetas  = action.payload;
      return {
        ...store,
        planets: [...planetas]
      }
      case 'set_vehicles_data':
      const  vehicles  = action.payload;
      return {
        ...store,
        vehicles: [...vehicles]
      }
    case 'add_to_favorite':
      const { name , url } = action.payload;
      return {
        ...store,
        favorites: [...store.favorites, {name: name, url: url}]
      }
      case 'delete_favorite':
        return{
          ...store,
          favorites: store.favorites.filter((fav)=> fav.name!==action.payload.name)
        }
    default:
      throw Error('Unknown action.');
  }
}