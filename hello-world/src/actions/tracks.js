var mockApiData = [
    {
        id: 1,
        trackName: 'первый трек'
    },
    {
        id: 2,
        trackName: 'второй трек'
    },
    {
        id: 3,
        trackName: 'третий трек'
    },
    {
        id: 4,
        trackName: 'четертый трек'
    },
    {
        id: 5,
        trackName: 'пятый трек'
    }
]

export default function getTracks(){
    return dispatch => {
        setTimeout(() => {
            console.log('i got tracks'); 
            dispatch({
                type: 'FETCH_TRACKS_SUCCESS',
                payload: mockApiData
            });
        }, 2000)
    }
}