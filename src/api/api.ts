import { useQuery } from '@tanstack/react-query'
import {supabase} from '../lib/supabase'

export const getProductsAndCategories = async () => {

    return useQuery({
        queryKey: ['products', 'categories'],
        queryFn: async () => {
            const [products, categories ] = await Promise.all([
                supabase.from('product').select('*'),
                supabase.from('category').select('*')
            ])

            if(products.error || categories.error){
                throw new Error('An error occured while fetching data')
            }

            return { products: products.data, categories: categories.data}
        }


    })

}