import React from 'react'
import { Card, Form } from 'react-bootstrap'
import { FilterOptions } from './FilterOptions'
import { SearchControl } from './SearchControl'
import { SortOptions } from './SortOptions'

export const FilterControl = (props) => {

  return (
    <Card className="mt-5 rounded w-25">
      <Card.Body>
        <Form>
            <SearchControl />
            <SortOptions className={`my-2`} />
            <FilterOptions departments={props.departments}/>
        </Form>
      </Card.Body>
    </Card>
  )
}
