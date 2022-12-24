import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key','0d6b40a7bemshf505c3f7573ddb5p14905fjsn1a5589314db3');
            return headers;
        },
    }),
    endpoints : (builder) => ({
        getTopCharts : builder.query({ query : () => '/charts/world'}),
        getSongDetails : builder.query({ query: ({songid}) => '/tracks/details?track_id=${songid}'}),
    }),
    });
    export const {
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi;
    