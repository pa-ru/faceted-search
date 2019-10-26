import { SearchResponse } from 'src/app/model';

export const SEARCH_RESULT_DATA: SearchResponse = {
    "options": {
        facets: [
            {
                "title": "MultiSelectionFacet",
                "multiselection": true,
                "items": [
                    {
                        "name": "FacetItem 1",
                        "count": 12
                    },
                    {
                        "name": "FacetItem 2",
                        "count": 13
                    },
                    {
                        "name": "FacetItem 3",
                        "count": 14
                    }
                ]
            },
            {
                "title": "SingeSelectionFacet",
                "multiselection": false,
                "items": [
                    {
                        "name": "FacetItem 1",
                        "count": 12
                    },
                    {
                        "name": "FacetItem 2",
                        "count": 13
                    },
                    {
                        "name": "FacetItem 3",
                        "count": 14
                    }
                ]
            }
        ]
    },
    "result": {}
};
