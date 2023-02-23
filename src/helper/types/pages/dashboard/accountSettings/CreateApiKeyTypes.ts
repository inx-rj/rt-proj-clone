import { APIKeyType, LoadingHasDataType } from "../../..";
import { UserDetailsType } from '../../../auth/authType';

export interface CreateApiKeyTypes extends APIKeyType {
    id?: number;
    company?: number | null,
}

export interface CreateApiInitialTypes extends APIKeyType {
    content: LoadingHasDataType,
    createApiKey_list: {
        data: {
            results: []
        }
    },
    response: {
        add: string | null,
        update: string | null,
        remove: string | null
    }
}

export interface ApiKeyTableListType extends CreateApiKeyTypes {
    created_at: string,
    last_used: string,
    created_by: UserDetailsType,
    status: boolean
}