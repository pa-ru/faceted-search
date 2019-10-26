export interface SearchResponse{
    options: SearchOptions,
    result: SearchResult
}

export interface SearchResult{

}

export interface SearchOptions {
    facets: Array<SearchFacet>;
}

export interface SearchFacet {
    title: string,
    items: Array<SearchFacetItem>,
    multiselection: boolean
}

export interface SearchFacetItem {
    name: string,
    count: number,
    from_value?: string,
    to_value?: string
}
