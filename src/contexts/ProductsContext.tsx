import { createContext } from 'react'
import { IProduct } from '../types/Product'

export default createContext<IProduct[]>([])
