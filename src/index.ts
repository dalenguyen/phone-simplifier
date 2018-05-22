/**
 * Return formated phone number
 * 
 * @param phoneNumber (string)
 * @returns (string)
 */
export const simplify = (phoneNumber: string): string => {    
    let phoneFormated = '';                        
    if(phoneNumber.length > 13){
        return phoneNumber;
    } else {
        phoneNumber = phoneNumber.replace(/\s*[^\d*^+]/g, '');        
        if(phoneNumber.length > 10){   
            if(phoneNumber.length === 11){
                phoneNumber = '+1' + phoneNumber;
            }                 
            phoneFormated = phoneFormated + phoneNumber.substr(0, 2) + ' (';
            phoneFormated = phoneFormated + phoneNumber.substr(2, 3) + ') ';                                       
            phoneFormated = phoneFormated + phoneNumber.substr(5, 3) + '-';                     
        } else if (phoneNumber === ''){
            return phoneFormated;
        }else {
            phoneFormated = phoneFormated + '(' + phoneNumber.substr(0, 3) + ') ';
            phoneFormated = phoneFormated + phoneNumber.substr(3, 3) + '-';                                                       
        }
        return phoneFormated + phoneNumber.substr(phoneNumber.length - 4);
    }         
}

/**
 * Return a clean phone number
 * 
 * @param phoneNumber (string)
 * @returns (string)
 */
export const clean = (phoneNumber: string): string => {
    return phoneNumber.replace(/\s*[^\d*^+]/g, '');   
}