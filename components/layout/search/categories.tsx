import { Suspense } from 'react'
import FilterList from './filter'
import { getCategories } from '@/lib'
import Skeleton from '@/components/skeleton'

const CategoryList = async () => {
  const categories = await getCategories()

  return <FilterList list={categories} title="Categories" />
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
