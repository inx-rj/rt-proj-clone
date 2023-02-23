import { EmailType, LoadingHasDataType, PhoneNumType } from "../../..";

export interface CompanyListTypes extends EmailType, PhoneNumType {
    id?: number;
    name: string,
}

export interface CompanyInitialTypes {
    company_list: {
        content: LoadingHasDataType,
        data: {
            results: CompanyListTypes[]
        }
    },
    response: {
        add: CompanyListTypes | null,
        update: CompanyListTypes | null,
        remove: CompanyListTypes | null
    }
}