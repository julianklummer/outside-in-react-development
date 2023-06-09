import { useEffect } from 'react'

interface Props {
  loadRestaurants: () => void
}

export const RestaurantList: React.FC<Props> = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants()
  }, [loadRestaurants])
  return <div>RestaurantList</div>
}
