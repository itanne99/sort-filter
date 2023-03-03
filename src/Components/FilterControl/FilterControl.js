import React from 'react'
import { Card, Form } from 'react-bootstrap'
import { FilterOptions } from './FilterOptions'
import { SearchControl } from './SearchControl'
import { SortOptions } from './SortOptions'

export const FilterControl = (props) => {
    const setSearch = (value) =>{
        props.setFilterControl({...props.filterControl, "Search": value})
    }
    const setSort = (value) =>{
        props.setFilterControl({...props.filterControl, "Sort": value})
    }
    const setFilter = (value) => {
        props.setFilterControl({
          ...props.filterControl,
          Filter: {
            ...props.filterControl.Filter,
            [value]: !props.filterControl.Filter[value],
          },
        });
      };

  return (
    <Card className="mt-5 rounded w-25">
      <Card.Body>
        <Form>
            <SearchControl setSearch={setSearch} />
            <SortOptions className={`my-2`} setSort={setSort} />
            <FilterOptions filterControl={props.filterControl} departments={props.departments} setFilter={setFilter} />
        </Form>
      </Card.Body>
    </Card>
  )
}
