import { Alert } from 'react-native'


export const convertTimeStamp = (time) => {
    const formatedDate = new Date(time).toLocaleString(
        "en-GB",
        {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        }
    )
    return formatedDate 
}


export const showAlert = (title, message) => {

        Alert.alert(
            title,
            message,
            [{text: "OK"}]
        )
    
  
}
