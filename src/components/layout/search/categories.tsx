import { Suspense } from 'react'
import { getCategories } from '@/lib'
import Skeleton from '@/components/skeleton'
import FilterListComponent from './filter/list'

const CategoryList = async () => {
  const categories = await getCategories()

  return <FilterListComponent list={categories} title="categories" />
}

const Categories = async () => {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 md:block">
          <Skeleton length={15} />
        </div>
      }>
      <CategoryList />
    </Suspense>
  )
}

export default Categories
