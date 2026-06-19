import bayKdang from '../assets/photo_2025-08-18_11-40-55.jpg'
import banhTrangSpicy from '../assets/បគ្រឿង.jpg'
import banhTrangSpicyOne from '../assets/បគ្រឿង១.jpg'
import banhTrangMixed from '../assets/បគ្រឿងធ.jpg'
import banhTrangSeaweed from '../assets/សារាយ.jpg'
import banhTrangMilk from '../assets/បទឹកដោះ.jpg'
import cheese from '../assets/នំឈីស.jpg'
import friedShallot from '../assets/បខ្ទឹមហោះ.jpg'
import friedShallotVariant from '../assets/បខ្ទឺម.jpg'
import tomYum from '../assets/នំតុងយ៉ាំ.jpg'
import chicken from '../assets/បមាន់.jpg'
import mixedNine from '../assets/បម្ទេស៩.jpg'

export const products = [
  {
    id: 1,
    nameKm: 'បាយក្ដាំងបំពងគ្រឿង',
    nameEn: 'Spicy Bay Kdang',
    price: 7000,
    image: bayKdang,
    badge: 'Best Seller'
  },
  {
    id: 2,
    nameKm: 'បាញ់ត្រាងគ្រឿង',
    nameEn: 'Spicy Banh Trang',
    price: 7000,
    image: banhTrangSpicy
  },
  {
    id: 3,
    nameKm: 'បាញ់ត្រាងគ្រឿង ១',
    nameEn: 'Spicy Banh Trang 1',
    price: 7000,
    image: banhTrangSpicyOne
  },
  {
    id: 4,
    nameKm: 'បាញ់ត្រាងចម្រុះ',
    nameEn: 'Mixed Banh Trang',
    price: 7000,
    image: banhTrangMixed
  },
  {
    id: 5,
    nameKm: 'បាញ់ត្រាងសារាយ',
    nameEn: 'Seaweed Banh Trang',
    price: 7000,
    image: banhTrangSeaweed
  },
  {
    id: 6,
    nameKm: 'បាញ់ត្រាងទឹកដោះគោ',
    nameEn: 'Condensed Milk Banh Trang',
    price: 7000,
    image: banhTrangMilk
  },
  {
    id: 7,
    nameKm: 'នំឈីស',
    nameEn: 'Cheese Snack',
    price: 7000,
    image: cheese
  },
  {
    id: 8,
    nameKm: 'បាញ់ត្រាងខ្ទឹមហោះ',
    nameEn: 'Fried Shallot Banh Trang',
    price: 7000,
    image: friedShallot
  },
  {
    id: 9,
    nameKm: 'បាញ់ត្រាងខ្ទឹមហោះ ១',
    nameEn: 'Fried Shallot Banh Trang 1',
    price: 7000,
    image: friedShallotVariant
  },
  {
    id: 10,
    nameKm: 'នំតុងយ៉ាំ',
    nameEn: 'Tom Yum Snack',
    price: 7000,
    image: tomYum
  },
  {
    id: 11,
    nameKm: 'បាយក្ដាំងមាន់',
    nameEn: 'Chicken Bay Kdang',
    price: 7000,
    image: chicken
  },
  {
    id: 12,
    nameKm: 'បាយក្ដាំងចម្រុះ ៩',
    nameEn: 'Mixed Bay Kdang 9',
    price: 7000,
    image: mixedNine
  }
]

export const featuredProducts = products.slice(0, 4)
