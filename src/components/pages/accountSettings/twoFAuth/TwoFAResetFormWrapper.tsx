import { Suspense } from "react";
import { Form, Formik } from "formik";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import ConfirmationPopup from "../../../common/popup/UI/ConfirmationPopup";
import { RESET_DISABLE_2FA } from "../../../../redux/actions/dashboard/settings/TwoFAuth.actions";
import { USER_DATA } from "../../../../redux/reducers/auth/auth.slice";

interface TwoFAResetFormWrapperType {
    messageContent: string;
    setIs2FAEnable?: (is2FA: boolean) => void;
    resetKey?: string;
}

const TwoFAResetFormWrapper = (props: TwoFAResetFormWrapperType) => {
    const { messageContent = "", setIs2FAEnable, resetKey } = props;

    // Hooks
    const dispatch = useAppDispatch();

    // Redux states
    const UserData = useAppSelector(USER_DATA);

    // To reset individual 2FA (i.e., mobile or google)
    const handleReset2FA = async () => {
        const ResetPayload = {
            email: UserData.data.user_details.email,
            reset: resetKey
        };
        if (setIs2FAEnable) setIs2FAEnable(false);
        await dispatch(RESET_DISABLE_2FA(ResetPayload));
    }

    return (
        <>
            <Formik
                enableReinitialize={true}
                initialValues={{}}
                onSubmit={handleReset2FA}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Suspense fallback="">
                            <ConfirmationPopup messageContent={messageContent} isSubmitting={isSubmitting} />
                        </Suspense>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default TwoFAResetFormWrapper;
