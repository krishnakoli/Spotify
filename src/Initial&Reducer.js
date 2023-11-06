export const initialState={
    username:null,
    userimage:null,
    playlist:[],
    playing:false,
    item:null,
    token:'BQBp1meauOUWSGb0ZZ1laWTM-Bj-yT8oVCGi_FRjQ-0b20xQaVb-rtWKHaXe5bxN1ou2JpxgzTiyC_HXmjboIIH6JCetxnaZBd_By_otAnaGnqBsQXJNp0OOiwDepOLCIAS-ysuAV5DkPcpz8JJCNUrP_s7AQyjafOSufG43zE6Q8Aa4T9_HCzN0TG5LrozF66feyMW6rRxVgMYqU_aT-8PPJtK-QQWkvbnL9Mg8WK9uFTEp4nnC59E0QWVuuDuhnD5vh6jZCZaAZOjH3HVCNQja25JREIuI_oy3zdf0lSE0jipoIcwsBEUkbb',
    dailyactivity:null
}

 const reducer=((state,action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                username:action.username,
                userimage:action.userimage
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            }
            case 'SET_PLAYLIST':
                return {
                    ...state,
                    playlist:action.playlist
                    
                }
            case 'SET_DAILYACTIVITY':
                return{
                    ...state,
                    dailyactivity:action.dailyactivity
                }
        default:
            return state;
    }

});

export default reducer;